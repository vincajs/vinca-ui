import { useAppConfig } from '#imports'
import { tv } from 'tailwind-variants'
import * as vinca from '../presets/vinca'

interface AppConfig {
  vincaui?: {
    preset?: typeof vinca
  }
}

type Key = 'button' | 'input'

export function useUI(key: Key, ui?: object) {
  const appConfig = useAppConfig() as AppConfig
  const preset = appConfig?.vincaui?.preset?.[key] ?? vinca?.[key]

  const classes = tv({
    extend: preset,
    ...ui,
  })

  return {
    classes,
  }
}
