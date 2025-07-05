import type { FormItemRule } from 'naive-ui'

export type ProField = {
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
  valueType?: 'input' | 'select' | 'inputNumber' | 'datePicker'

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

  /**
   * 校验规则
   */
  rules?: FormItemRule[]

  /**
   * 依赖字段, 用于处理联动
   */
  dependencies?: string[] | string[][]

  /**
   * 联动控制字段, 用于处理联动
   */
  controls?: string[]

  /**
   * 控制是否隐藏
   */
  hidden?: boolean | ((value: any) => boolean)
}
