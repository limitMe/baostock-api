import { Context } from "koa";
import { runPythonString } from '../helper/pythonShell'

export async function main(ctx: Context) {
  const output = await runPythonString("print('Hello World')", undefined)
  console.log(output)
  ctx.body = {
    "key": "value"
  }
}