import { type ProField } from '../../entity'

export type ProSelectProps = Omit<ProField, 'key'> & {
  /**
   * 下拉数据
   */
  options?: any[]

  /**
   * 加载远程下拉数据
   * @param params
   */
  request?: <T extends { label: string; value: string }>(
    params?: any,
  ) => Promise<T[]>
}
