import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ArthswapDayData {
  constructor(props?: Partial<ArthswapDayData>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("int4", {nullable: false})
  date!: number

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  dailyVolumeETH!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  dailyVolumeUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  dailyVolumeUntracked!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalVolumeETH!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalLiquidityETH!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalVolumeUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalLiquidityUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  txCount!: bigint
}
