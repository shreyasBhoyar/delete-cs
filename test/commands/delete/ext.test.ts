import {expect, test} from '@oclif/test'

describe('delete/ext', () => {
  test
  .stdout()
  .command(['delete/ext'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete/ext', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
