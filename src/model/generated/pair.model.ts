import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {PairHourData} from "./pairHourData.model"
import {Mint} from "./mint.model"
import {Burn} from "./burn.model"
import {Swap} from "./swap.model"

@Entity_()
export class Pair {
  constructor(props?: Partial<Pair>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token0!: Token

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token1!: Token

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  reserve0!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  reserve1!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalSupply!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  reserveETH!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  reserveUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  trackedReserveETH!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  token0Price!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  token1Price!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  volumeToken0!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  volumeToken1!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  volumeUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  untrackedVolumeUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  txCount!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  createdAtTimestamp!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  createdAtBlockNumber!: bigint

  @OneToMany_(() => PairHourData, e => e.pair)
  pairHourData!: PairHourData[]

  @OneToMany_(() => Mint, e => e.pair)
  mints!: Mint[]

  @OneToMany_(() => Burn, e => e.pair)
  burns!: Burn[]

  @OneToMany_(() => Swap, e => e.pair)
  swaps!: Swap[]
}
