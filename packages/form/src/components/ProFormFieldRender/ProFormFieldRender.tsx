import ProInput from '../ProInput/ProInput.vue'
import ProSelect from '../ProSelect/ProSelect.vue'
import { type ProFieldColumn } from '../../entity'
import ProInputNumber from '../ProInputNumber/ProInputNumber.vue'

type ProFormFieldRenderProps = Omit<ProFieldColumn, 'key' | 'span'>

const ProFormFieldRender = (props: ProFormFieldRenderProps) => {
  let component: any = null
  if (props.valueType === 'input') {
    component = <ProInput {...props} />
  } else if (props.valueType === 'select') {
    component = <ProSelect {...props} />
  } else if (props.valueType === 'inputNumber') {
    component = <ProInputNumber {...props} />
  }
  return component
}

export default ProFormFieldRender
