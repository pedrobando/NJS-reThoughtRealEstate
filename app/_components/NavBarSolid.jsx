import NavBarBar from './NavBarBar'
import Link from 'next/link'
import NavBarSlide from './NavBarSlide'
import Image from "next/image"

const NavBarSolid = () => {
  return (
    <header className="flex container mx-auto items-center px-5 sm:px-6 lg:px-0 h-[90px] max-h-[90px] bg-reDark w-screen">
      <div className="flex flex-col justify-center w-6/12 xl:w-2/12">
      <Link href="/" className="w-full md:w-[100%] nextImg">
          <Image
            src="/img/rethought-real-estate-light-logo.svg"
            width={180}
            height={42}
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