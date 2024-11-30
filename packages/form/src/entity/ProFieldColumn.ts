import { type ProField } from './ProField'
import { type ProInputProps } from '../components/props/ProInputProps'
import { type ProSelectProps } from '../components/props/ProSelectProps'
import { ProDatePickerProps } from '../components/props/ProDatePickerProps'

export type ProFieldColumn = ProField & ProInputProps & ProSelectProps & ProDatePickerProps
