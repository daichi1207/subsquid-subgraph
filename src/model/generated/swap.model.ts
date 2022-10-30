import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Transaction} from "./transaction.model"
import {Pair} from "./pair.model"

@Entity_()
export class Swap {
  constructor(props?: Partial<Swap>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Transaction, {nullable: true})
  transaction!: Transaction

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  timestamp!: bigint

  @Index_()
  @ManyToOne_(() => Pair, {nullable: true})
  pair!: Pair

  @Column_("bytea", {nullable: false})
  sender!: Uint8Array

  @Column_("bytea", {nullable: false})
  from!: Uint8Array

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  amount0In!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  amount1In!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  amount0Out!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  amount1Out!: BigDecimal

  @Column_("bytea", {nullable: false})
  to!: Uint8Array

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  logIndex!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  amountUSD!: BigDecimal
}
