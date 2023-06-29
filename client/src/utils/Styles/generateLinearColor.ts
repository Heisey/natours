
import * as Core from 'core'
import * as Server_Tours from 'server/Tours'

interface Args {
  environment?: Server_Tours.Models.Environment
  variant: 'light' | 'dark', 
  theme: Core.Models.Theme
}

export const generateLinearColor = (args: Args) => {
  if (args.environment === Server_Tours.keys.Environment.FOREST) return args.theme.forest[args.variant]
  if (args.environment === Server_Tours.keys.Environment.OCEAN) return args.theme.ocean[args.variant]
  if (args.environment === Server_Tours.keys.Environment.SAND) return args.theme.sand[args.variant]
  if (args.environment === Server_Tours.keys.Environment.SNOW) return args.theme.snow[args.variant]
  if (args.environment === Server_Tours.keys.Environment.URBAN) return args.theme.urban[args.variant]

  if (args.variant === 'dark') return args.theme.background.linearDark
  return args.theme.background.linearLight
}