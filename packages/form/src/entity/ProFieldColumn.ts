import type { ProField } from './ProField'
import type { ProInputProps, ProInputType } from '../components/props/ProInputProps'
import type { ProSelectProps } from '../components/props/ProSelectProps'
import type { ProDatePickerProps, ProDatePickerType } from '../components/props/ProDatePickerProps'

export type ProFieldColumn = ProField & Omit<ProInputProps, 'type'> & ProSelectProps & Omit<ProDatePickerProps, 'type'> & {
  type?: ProInputType | ProDatePickerType
}
