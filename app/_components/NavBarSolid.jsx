import NavBarBar from './NavBarBar'
import Link from 'next/link'
import NavBarSlide from './NavBarSlide'

const NavBarSolid = () => {
  return (
    <header className="flex container mx-auto items-center px-5 sm:px-6 lg:px-0 h-[90px] max-h-[90px] py-[20px] md:py-[40px] bg-reDark">
      <div className="flex flex-col justify-center w-6/12 xl:w-2/12">
        <Link href="/">
          <img
          src="/img/rethought-real-estate-light-logo.svg"
          className="w-full md:w-[70%] hover:scale-105 transition-transform"
          alt="reThought Real Estate Logo"
        />
        </Link>
      </div>
      <div className="flex w-6/12 justify-end text-white hidden xl:inline-flex xl:w-10/12 ">
        <NavBarBar />
      </div>
      <div className="flex w-6/12 justify-end text-white xl:hidden">
      <NavBarSlide />
      </div>
    </header>
  )
}

export default NavBarSolid