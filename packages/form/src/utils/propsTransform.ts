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
export function transformProps<T extends Record<string, any>>(props: T, data: any): T {
  return Object.keys(props).reduce((acc: T, key: keyof T) => {
    if (transformKeyMap[key as string] && typeof props[key] === 'function') {
      acc[key] = props[key](data)
    } else {
      acc[key] = props[key]
    }
    return acc
  }, {} as T)
}
