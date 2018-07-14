import exec from './exec'

export default function test(settings) {
  const cmd = `dotnet test "${settings.projectTestCsProjPath}" -c ${settings.target} --no-restore`
  return exec(cmd)
}
