import NavBarBar from './NavBarBar'
import Link from 'next/link'
import NavBarSlide from './NavBarSlide'

const NavBarSolid = () => {
  return (
    <header className="flex w-full items-center h-[130px] max-h-[130px] px-[5%] py-[50px] md:px-[10%] md:py-[90px] bg-reDark">
      <div className="flex flex-col justify-center w-6/12 xl:w-2/12">
        <Link href="/">
          <img
          src="/img/rethought-real-estate-light-logo.svg"
          className="w-full md:w-[70%]"
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