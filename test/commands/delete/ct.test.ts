import {expect, test} from '@oclif/test'

describe('delete/ct', () => {
  test
  .stdout()
  .command(['delete/ct'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete/ct', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
