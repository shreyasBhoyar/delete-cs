import {expect, test} from '@oclif/test'

describe('delete/fdr', () => {
  test
  .stdout()
  .command(['delete/fdr'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete/fdr', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
