import { type ProField } from '../../entity'

export type ProDatePickerProps = Omit<ProField, 'key'> & {
  type?: 'date' | 'datetime'
}
