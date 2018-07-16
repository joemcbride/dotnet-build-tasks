import { find } from 'shelljs'
import { log } from 'simple-make/lib/logUtils'
import exec from './exec'
import git from './git'

export default async function artifactory(settings) {
  if (!settings.CI) {
    log('Not on CI, skipping nuget upload')
    return Promise.resolve()
  }

  const { branch } = await git()

  const source = branch === (settings.masterBranchName || 'master') ? settings.nugetSourceMaster : settings.nugetSourceBranches
  const packages = find(settings.artifactsPath).filter(file => file.match(/\.nupkg$/))
  const apiKey = settings.nugetApiKey

  const promises = []

  packages.forEach(p => {
    promises.push(exec(`nuget push ${p} ${apiKey} -Source ${source}`))
  })

  return Promise.all(promises)
