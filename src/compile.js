import exec from './exec'

export default function pack(settings) {
  const cmd = `dotnet build ${settings.projectPath} -c ${settings.target} --no-restore`
  return exec(cmd)
}
