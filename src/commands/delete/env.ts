import {Args, Command, Flags} from '@oclif/core'

const deleteEnvs = require("../../lib/environment.js");
require('dotenv').config()

export default class DeleteEnv extends Command {
  static description = 'describe the command here'

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
    await deleteEnvs({
      api_key : process.env.API_KEY,
      management_token : process.env.MANAGEMENT_TOKEN
    })
  }
}
