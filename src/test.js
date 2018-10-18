import exec from './exec'

export default function test(settings) {
  let verbosity = settings.testVerbosity || settings.CI ? 'normal' : 'minimal'
  const cmd = `dotnet test "${settings.projectTestCsProjPath}" -c ${settings.target} --no-restore --verbosity ${verbosity}`
  return exec(cmd)
}
