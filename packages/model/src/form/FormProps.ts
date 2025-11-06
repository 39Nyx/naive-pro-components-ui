import { type FormRules } from 'naive-ui'

export type ProFormProps = {
  /**
   * 是否禁用, 默认值为false
   */
  disabled?: boolean

  /**
   * 是否显示为行内表单, 默认值为false
   */
  inline?: boolean

  /**
   * 表单标签宽度, 默认值为undefined
   */
  labelWidth?: string | number | 'auto'

  /**
   * 表单标签对齐方式, 默认值为 left
   */
  labelAlign?: 'left' | 'right'

  /**
   * 获取表项中收集到的值的对象， 默认值为 {}
   */
  model?: any

  /**
   * 表单规则，用于校验表单输入， 默认值为 {}
   */
  rules?: FormRules

  labelPlacement?: 'left' | 'top'
}
