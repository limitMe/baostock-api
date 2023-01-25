import { Context } from "koa";

export async function main(ctx: Context) {
  ctx.body = {
    "key": "value"
  }
}