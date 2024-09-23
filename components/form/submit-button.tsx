'use client'

import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/ui'

type Props = {
  className?: string
  text?: string
}

const SubmitButton = ({ className, text }: Props) => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className={cn('capitalize', className)}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}

export default SubmitButton
