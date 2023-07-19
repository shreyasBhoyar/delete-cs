import {expect, test} from '@oclif/test'

describe('delete/wh', () => {
  test
  .stdout()
  .command(['delete/wh'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete/wh', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
