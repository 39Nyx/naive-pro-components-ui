import { type ProField } from '../../entity/ProField'

export type ProSelectProps = Omit<ProField, 'key'> & {
  options?: any[]
}
