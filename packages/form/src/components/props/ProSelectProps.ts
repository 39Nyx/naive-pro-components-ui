import { type ProField } from '../../entity'

export type ProSelectProps = Omit<ProField, 'key'> & {
  options?: any[]
}
