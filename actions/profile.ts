'use server'

import { profileSchema } from '@/schemas/profile'

export const createProfileAction = async (_: unknown, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = profileSchema.parse(rawData)
    console.log(validatedFields)
    return { message: 'Profile created' }
  } catch (error) {
    console.log(error)
    return { message: 'Error creating profile' }
  }
}
