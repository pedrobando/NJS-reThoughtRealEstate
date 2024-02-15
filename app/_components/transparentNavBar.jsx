import Link from "next/link";
import NavBarSlide from "./NavBarSlide";
import Image from "next/image";

function TransparentNavBar() {
  return (
    <header className="flex container mx-auto px-3 w-full items-center h-[130px] max-h-[130px] bg-none z-10">
      <div className="flex flex-col justify-center w-8/12 md:w-2/12">
        <Link href="/" className="w-full md:w-[100%] nextImg">
          <Image
            src="/img/rethought-real-estate-light-logo.svg"
            width={252}
            height={59}
            alt="reThought Real Estate Logo"
          />
        </Link>
      </div>
      <div className="flex w-10/12 justify-end items-center text-white">
        <NavBarSlide />
      </div>
    </header>
  );
}

export default TransparentNavBar;
