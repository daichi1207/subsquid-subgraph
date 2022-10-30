import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Mint} from "./mint.model"
import {Burn} from "./burn.model"
import {Swap} from "./swap.model"

@Entity_()
export class Transaction {
  constructor(props?: Partial<Transaction>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  blockNumber!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  timestamp!: bigint

  @OneToMany_(() => Mint, e => e.transaction)
  mints!: Mint[]

  @OneToMany_(() => Burn, e => e.transaction)
  burns!: Burn[]

  @OneToMany_(() => Swap, e => e.transaction)
  swaps!: Swap[]
}
