import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"

@Entity_()
export class TokenDayData {
  constructor(props?: Partial<TokenDayData>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("int4", {nullable: false})
  date!: number

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token!: Token

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  dailyVolumeToken!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  dailyVolumeETH!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  dailyVolumeUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  dailyTxns!: bigint

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalLiquidityToken!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalLiquidityETH!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  totalLiquidityUSD!: BigDecimal

  @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
  priceUSD!: BigDecimal
}
