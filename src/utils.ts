import classnames, { Value } from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: Value[]) => {
  return twMerge(classnames(...inputs))
}
