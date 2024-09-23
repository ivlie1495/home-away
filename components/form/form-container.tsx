'use client'

import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'

import type { ActionFunction } from '@/utils/types'

interface Props {
  action: ActionFunction
  children: React.ReactNode
}

const initialState = {
  message: '',
}

const FormContainer = ({ action, children }: Props) => {
  const [state, formAction] = useFormState(action, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return <form action={formAction}>{children}</form>
}

export default FormContainer
