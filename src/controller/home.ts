import { Context } from "koa";
import { Options } from 'python-shell';
import { runPythonString, runPythonFile } from '../helper/pythonShell'

export async function main(ctx: Context) {
  const options = {
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/Users/zhongdian/Desktop/Dev/baostock-api/python',
    args: []
  };
  const output = await runPythonFile('daily.py', options)
  console.log(output)
  ctx.body = {
    "key": "value"
  }
}