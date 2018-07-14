import exec from './exec'

export default async function git() {
  const branch = await exec("git branch | sed -n '/* /s///p'", { echo: false })
  const sha = await exec('git rev-parse --short HEAD', { echo: false })

  return {
    branch: (branch || '').trim(),
    sha: (sha || '').trim()
  }
}
