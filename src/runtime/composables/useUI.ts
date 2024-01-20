import { useAppConfig } from '#imports'
import { tv } from 'tailwind-variants'
import * as preset from '../presets/vinca'
import type { AppConfig } from 'nuxt/schema'

interface Config extends AppConfig {
  vinca?: {
    preset?: typeof preset
  }
}

type Key = 'link' | 'icon' | 'button' | 'input'

export function useUI<T extends Key>(key: T, $ui?: object) {
  const appConfig = useAppConfig() as Config
  const extend = appConfig?.vinca?.preset?.[key] ?? preset[key]

  const ui = tv({
    extend,
    ...$ui,
  })

  return {
    ui,
  }
}
