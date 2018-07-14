import exec from './exec'
import git from './git'
import projectVersion from './utils/projectVersion'

export default async function pack(settings) {
  const { branch } = await git()

  const branchName = branch === 'master' ? '.' : `-${branch}-`
  const suffix = `${branchName}${settings.buildNumber}`

  const version = await projectVersion(settings.projectCsProjPath)

  return exec(
    `dotnet pack ${settings.projectPath} -o ${settings.artifactsPath} -c ${settings.target} /p:PackageVersion=${version}${suffix}`
  )
}
