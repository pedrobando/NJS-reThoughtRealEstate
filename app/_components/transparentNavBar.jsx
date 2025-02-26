import Link from "next/link";
import NavBarSlide from "@/components/NavBarSlide";
import Image from "next/image";

function TransparentNavBar() {
  return (
    <header className="container z-20">
      <div className="py-8 px-4 flex justify-between">
        <Link href="/" className="">
          <Image
            src="https://dashbrew.s3.us-east-2.amazonaws.com/assets/vids/reThought-Real-Estate-Realtor-Milwaukee-Orlando-Kissimmee.svg"
            width={255}
            height={62}
            alt="reThought Real Estate Logo - Bilingual Boutique Real Estate Firm"
            priority={true}
          />
        </Link>
        <NavBarSlide />
     </div>
    </header>
  );
}

export default TransparentNavBar;
