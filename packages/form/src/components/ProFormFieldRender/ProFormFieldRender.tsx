import ProInput from '../ProInput/ProInput.vue'
import ProSelect from '../ProSelect/ProSelect.vue'
import { type ProFieldColumn } from '../../entity'

type ProFormFieldRenderProps = Omit<ProFieldColumn, 'key' | 'span'>

const ProFormFieldRender = (props: ProFormFieldRenderProps) => {
  let component: any = null
  if (props.valueType === 'input') {
    component = <ProInput {...props} />
  } else if (props.valueType === 'select') {
    component = <ProSelect {...props} />
  }
  return component
}

export default ProFormFieldRender
