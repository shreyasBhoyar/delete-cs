import {Args, Command, Flags} from '@oclif/core'

const deleteExts = require("../../lib/extension.js");
const displayPrompt = require("../../lib/prompts.js");
require('dotenv').config()

export default class DeleteExt extends Command {
  static description = 'Delete all contentstack extensions in a stack'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    // const responses = await displayPrompt();

    //   await deleteExts({...responses})
    await deleteExts({
      api_key : process.env.API_KEY,
      management_token : process.env.MANAGEMENT_TOKEN
    })
  }
}
