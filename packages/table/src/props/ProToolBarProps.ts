import type { ProColumns } from '../entity'

export type ProTableSize = 'large' | 'medium' | 'small'

export type ProToolBarProps = {
  headerTitle?: string
  loading?: boolean
  size?: ProTableSize
  columns: ProColumns[]
}
