import ProInput from '../ProInput/ProInput.vue'
import ProSelect from '../ProSelect/ProSelect.vue'
import ProInputNumber from '../ProInputNumber/ProInputNumber.vue'
import ProDatePicker from '../ProDatePicker/ProDatePicker.vue'

const ProFormFieldRender = (props: any) => {
  if (props.valueType === 'input') {
    return <ProInput {...props} />
  } else if (props.valueType === 'select') {
    return <ProSelect {...props} />
  } else if (props.valueType === 'inputNumber') {
    return <ProInputNumber {...props} />
  } else if (props.valueType === 'datePicker') {
    return <ProDatePicker {...props} />
  }
  return null
}

export default ProFormFieldRender
