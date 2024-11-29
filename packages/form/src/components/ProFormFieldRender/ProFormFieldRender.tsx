import ProInput from '../ProInput/ProInput.vue'
import ProSelect from '../ProSelect/ProSelect.vue'
import ProInputNumber from '../ProInputNumber/ProInputNumber.vue'
import ProDatePicker from '../ProDatePicker/ProDatePicker.vue'

const ProFormFieldRender = (props: any) => {
  let component: any = null
  if (props.valueType === 'input') {

    component = <ProInput {...props} />
  } else if (props.valueType === 'select') {
    component = <ProSelect {...props} />
  } else if (props.valueType === 'inputNumber') {
    component = <ProInputNumber {...props} />
  } else if (props.valueType === 'datePicker') {
    component = <ProDatePicker {...props} />
  }
  return component
}

export default ProFormFieldRender
