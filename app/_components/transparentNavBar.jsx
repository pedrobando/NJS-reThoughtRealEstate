import Link from "next/link";
import NavBarSlide from "@/components/NavBarSlide";
import Image from "next/image";

function TransparentNavBar() {
  return (
    <header className="flex container mx-auto px-3 w-full items-center h-[130px] max-h-[130px] bg-none z-10">
      <div className="flex flex-col justify-center w-8/12 md:w-2/12">
        <Link href="/" className="w-full md:w-[100%] nextImg">
          <Image
            src="https://dashbrew.s3.us-east-2.amazonaws.com/assets/vids/reThought-Real-Estate-Realtor-Milwaukee-Orlando-Kissimmee.svg"
            width={255}
            height={62}
            alt="reThought Real Estate Logo - Bilingual Boutique Real Estate Firm"
            priority={true}
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
