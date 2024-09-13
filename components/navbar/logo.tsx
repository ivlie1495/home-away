import { Tent } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Logo = () => {
  return (
    <Button asChild size="icon">
      <Link href="/">
        <Tent className="size-6" />
      </Link>
    </Button>
  )
}

export default Logo
