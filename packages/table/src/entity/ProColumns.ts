export interface ProColumns {
  /**
   * 字段名
   */
  key: string

  /**
   * 字段标题
   */
  title: string

  render?: any

  valueType?: 'input'

  span?: number

  /**
   * 是否固定列
   */
  fixed?: 'left' | 'right'

  /**
   * 在 Table 中不展示此列
   */
  hideInTable?: boolean
}
