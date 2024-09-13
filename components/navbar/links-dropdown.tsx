import { AlignLeft } from 'lucide-react'
import Link from 'next/link'

import { links } from '@/constants/links'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  // DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import UserIcon from './user-icon'
// import SignOutLink from './signout-link'

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex max-w-[100px] gap-4">
          <AlignLeft className="h-6 w-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
        {links.map(({ href, label }) => {
          return (
            <DropdownMenuItem key={href}>
              <Link href={href} className="w-full capitalize">
                {label}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown
