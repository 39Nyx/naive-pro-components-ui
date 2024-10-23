import { type ProField } from './ProField'
import { type ProInputProps } from '../components/props/ProInputProps'
import { type ProSelectProps } from '../components/props/ProSelectProps'

export type ProFieldColumn = ProField & ProInputProps & ProSelectProps
