import type { ProField } from '../entity'

/**
 * transformKeyMap 用于标记哪些 props 需要被转换
 */
const transformKeyMap: Record<string, boolean> = {
  disabled: true,
  readonly: true,
  hidden: true
}

/**
 * 转换 props, 将函数类型的值转化为实际值
 * @param props
 * @param data
 */
export function transformProps(props: ProField, data: any): ProField {
  return Object.keys(props).reduce((acc: ProField, key: string) => {
    if (transformKeyMap[key] && props[key] instanceof Function) {
      acc[key] = props[key](data)
    } else {
      acc[key] = props[key]
    }
    return acc
  }, {})
}
