import exec from './exec'

export default function restore(settings) {
  const cmd = `dotnet restore ${settings.restorePath}`
  return exec(cmd)
}
