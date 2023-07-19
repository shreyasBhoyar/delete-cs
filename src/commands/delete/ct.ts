import {Args, Command, Flags} from '@oclif/core'

const deleteCTs = require("../../lib/content_type.js")
require('dotenv').config()

export default class DeleteCt extends Command {
  static description = 'Delete all contentstack content types in a stack'

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
   await deleteCTs({
    api_key : process.env.API_KEY,
    management_token : process.env.MANAGEMENT_TOKEN
  })
  }
}
