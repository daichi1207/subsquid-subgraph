import { lookupArchive } from '@subsquid/archive-registry';
import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import {
    BatchContext,
    BatchProcessorItem,
    EvmLogEvent,
    SubstrateBatchProcessor,
    SubstrateBlock,
} from '@subsquid/substrate-processor';
import { In } from 'typeorm';
import { ethers } from 'ethers';
import * as ERC20 from './abi/erc20';
import * as pancakePair from './abi/PancakePair';
// import * as pancakeRouter from './abi/pancakeRouter';
import * as pancakePairHandlers from './mapping/pancakePair';
import * as ERC20Handlers from './mapping/erc20';
import { ARSWToken } from './mapping/helper';

const database = new TypeormDatabase();
const processor = new SubstrateBatchProcessor()
    .setBatchSize(500)
    .setDataSource({
        chain: 'wss://astar.public.blastapi.io',
        archive: lookupArchive('astar', { release: 'FireSquid' }),
    })
    // ARSW/WASTR-lp
    // add range if we get it
    .addEvmLog('0x50497e7181eb9e8ccd70a9c44fb997742149482a', {
        filter: [
            [
                pancakePair.events['Transfer(address,address,uint256)'].topic,
                pancakePair.events['Mint(address,uint256,uint256)'].topic,
                pancakePair.events['Burn(address,uint256,uint256,address)']
                    .topic,
            ],
        ],
    })
    .addEvmLog(ARSWToken, {
        filter: [[ERC20.events['Transfer(address,address,uint256)'].topic]],
    });

processor.run(database, async (ctx) => {
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.name === 'EVM.Log') {
                switch (item.event.args.address) {
                    case '0x50497e7181eb9e8ccd70a9c44fb997742149482a'.toLowerCase():
                        switch (item.event.args.topics[0]) {
                            case pancakePair.events[
                                'Mint(address,uint256,uint256)'
                            ].topic:
                                await pancakePairHandlers.handleAddLiquidity({
                                    ...ctx,
                                    block: block.header,
                                    event: item.event,
                                });
                                break;
                            case pancakePair.events[
                                'Burn(address,uint256,uint256,address)'
                            ].topic:
                                await pancakePairHandlers.handleRemoveLiquidity(
                                    {
                                        ...ctx,
                                        block: block.header,
                                        event: item.event,
                                    }
                                );
                                break;
                        }
                        break;
                    case ARSWToken:
                        switch (item.event.args.topics[0]) {
                            case ERC20.events[
                                'Transfer(address,address,uint256)'
                            ].topic:
                                await ERC20Handlers.handleTransfer({
                                    ...ctx,
                                    block: block.header,
                                    event: item.event,
                                });
                        }
                }
            }
        }
    }
});
