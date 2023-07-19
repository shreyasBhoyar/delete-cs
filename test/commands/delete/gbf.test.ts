import {expect, test} from '@oclif/test'

describe('delete/gbf', () => {
  test
  .stdout()
  .command(['delete/gbf'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete/gbf', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
