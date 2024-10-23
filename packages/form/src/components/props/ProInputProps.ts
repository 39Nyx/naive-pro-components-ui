import { ProField } from '../../entity/ProField'

export type ProInputProps = Omit<ProField, 'key'> & {
  /**
   * 类型, 可以是 text' | 'password' | 'textarea';
   */
  type?: 'text' | 'password' | 'textarea';
}
