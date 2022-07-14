import { FC } from 'react'

export type FCC<P = unknown> = FC<
  P & {
    children: ReactNode
  }
>
