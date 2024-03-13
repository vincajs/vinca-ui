import { twMerge } from 'tailwind-merge'
import { reactiveOmit } from '@vueuse/core'

export function useUI<T extends { class?: string }, K extends keyof T>(component: string, props: T, ...keys: (K | K[])[]) {
  const app = useAppConfig()

  const ui = app.vinca?.preset?.[component]({ props })
  const classes = twMerge(ui, props?.class)

  const pickedProps = reactiveOmit(props, 'class' as keyof T, ...keys)

  return {
    classes,
    pickedProps,
  }
}
