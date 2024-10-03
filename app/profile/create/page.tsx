import FormContainer from '@/components/form/form-container'
import FormInput from '@/components/form/form-input'
import SubmitButton from '@/components/form/submit-button'

const inputs = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'username', label: 'Username' },
]

const createProfileAction = async (_: unknown, formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  console.log(firstName)

  return { message: 'Profile created' }
}

const ProfileCreate = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">New User</h1>
      <div className="rounded-md border p-8">
        <FormContainer action={createProfileAction}>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {inputs.map((input) => (
              <FormInput
                key={input.name}
                name={input.name}
                label={input.label}
              />
            ))}
          </div>
          <SubmitButton text="Create Profile" className="mt-4" />
        </FormContainer>
      </div>
    </section>
  )
}

export default ProfileCreate
