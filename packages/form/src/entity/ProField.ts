export interface ProField {
  /**
   * 字段名
   */
  key: string

  /**
   * 字段标题
   */
  title: string

  /**
   * 字段所占宽度，珊格布局
   */
  span?: number | string

  /**
   * 字段类型
   */
  valueType?: string
}
