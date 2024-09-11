import DarkMode from './dark-mode'
import LinksDropdown from './links-dropdown'
import Logo from './logo'
import NavSearch from './nav-search'

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="sm: container flex flex-col flex-wrap items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <Logo />
        <NavSearch />
        <div className="flex items-center gap-4">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
