import * as monolib from '@monorepo/greet-lib'

export function helloWorld() {
  console.log(monolib.greet())
}