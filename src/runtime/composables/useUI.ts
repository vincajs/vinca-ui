import { useAppConfig } from '#imports'
import { tv } from 'tailwind-variants'
import * as preset from '../presets/vinca'

interface AppConfig {
  vinca?: {
    preset?: typeof preset
  }
}

type Key = 'link' | 'icon' | 'button' | 'input'

export function useUI(key: Key, $ui?: object) {
  const appConfig = useAppConfig() as AppConfig
  const extend = appConfig?.vinca?.preset?.[key] ?? preset?.[key]

  const ui = tv({
    extend,
    ...$ui,
  })

  return {
    ui,
  }
}
