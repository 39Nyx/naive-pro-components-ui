import { type ProField } from '../../entity'

export type ProDatePickerType = 'date' | 'datetime'

export type ProDatePickerProps = Omit<ProField, 'key'> & {
  type?: ProDatePickerType
}
