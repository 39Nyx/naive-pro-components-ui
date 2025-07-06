import { type ProField } from '../../entity'

export type ProInputType = 'text' | 'password' | 'textarea'

export type ProInputProps = Omit<ProField, 'key'> & {
  /**
   * 类型, 可以是 text' | 'password' | 'textarea';
   */
  type?: ProInputType

  prop?: string
}
