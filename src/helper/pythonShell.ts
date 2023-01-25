import { PythonShell, Options } from 'python-shell';

export async function runPythonString(input: string, options: Options | undefined) {
  return await new Promise((resolve, reject) => {
    PythonShell.runString(input, options, (err, output) => {
      if(err) {
        reject(err)
      } else {
        resolve(output)
      }
    })
  })
}

export async function runPythonFile(fileName: string, options: Options | undefined) {
  return await new Promise((resolve, reject) => {
    PythonShell.run(fileName, options, (err, output) => {
      if(err) {
        reject(err)
      } else {
        resolve(output)
      }
    })
  })
}