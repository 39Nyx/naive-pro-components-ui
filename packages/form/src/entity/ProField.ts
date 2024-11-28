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
  valueType?: 'input' | 'select'

  /**
   * 字段描述
   */
  placeholder?: string

  /**
   * 是否禁用
   */
  disabled?: boolean

  /**
   * 是否显示清除按钮
   */
  clearable?: boolean
}
