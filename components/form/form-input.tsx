import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
  name: string
  type?: string
  label?: string
  defaultValue?: string
  placeholder?: string
}

const FormInput = (props: Props) => {
  const { name, type = 'text', label, defaultValue, placeholder } = props

  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default FormInput
