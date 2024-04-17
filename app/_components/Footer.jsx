import WaveDividerBottom from "@/components/WaveDividerBottom";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex-col items-center justify-end bg-reDark min-h-[130px] pb-6 w-full z-[50]">
      <div className="relative bg-reGreen py-8 px-6 text-center w-full border-0 ">
        <h3 className="font-heading text-xl font-semibold z-10 pb-2 text-white">
          ¡Hablamos Español! Para ayuda puede llamar o enviar mensaje de texto
          al 414.797.6128
        </h3>
        <WaveDividerBottom fill="waveDivider" />
      </div>
      <div className="flex flex-col container mx-auto md:flex-row bg-reDark gap-x-10 gap-y-16 py-10 px-5 md:px-0  md:py-[50px]">
        <div className="w-full md:flex-auto md:w-[40%]">
          <Link href="/" className="w-[40%] md:w-[40%] nextImg">
            <Image
              src="/img/rethought-real-estate-light-logo.svg"
              alt="reThought Real Estate Logo"
              width={221}
              height={52}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <p className="mt-8 text-reTextGrey">
            At reThought, our process has been reElevated using today’s trending
            technology tools. With that said, it allows our business to be
            extremely organized while we FOCUS on elevating your experience
            while together we achieve YOUR goal.
          </p>
          <h4 className="mt-8 text-reGreen font-heading font-semibold">
            Real Simple. Real Skills. Real Results. ™
          </h4>
        </div>

        <div className="flex-auto w-80">
          <h3 className="font-accent text-2xl text-white">Neighboorhoods</h3>
        </div>

        <div className="flex-auto w-80 ">
          <h3 className="font-accent text-2xl text-white">Real Estate</h3>
        </div>

        <div className="flex-auto w-80">
          <h3 className="font-accent text-2xl text-white">Find Us</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-6 px-6 md:px-[10%]">
        <div className="basis-12/12 md:basis-8/12 metromls">
          <Image
            src="/img/metro-mls.png"
            width={45}
            height={33}
            alt="Metro MLS Logo"
            priority={true}
          />

          <p className="text-xs text-reTextGrey opacity-50 md:pr-[20%]">
            Information is supplied by seller and other third parties and has
            not been verified. IDX information is provided exclusively for
            consumers personal, non-commercial use and may not be used for any
            purpose other than to identify prospective properties consumers may
            be interested in purchasing.
          </p>
        </div>
        <div className="basis-12/12 md:basis-4/12 text-right">
          <p className="text-xs text-reTextGrey opacity-50 pt-4 md:pt-0 ">
            reThought Real Estate LLC © {year} All rights reserved.
          </p>
          <Link className="text-xs text-reTextGrey hover:text-white" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link
            className="text-xs text-reTextGrey pl-3 hover:text-white"
            href="/terms-and-conditions"
          >
            Terms and Conditions
          </Link>
          <Link
            className="text-xs text-reTextGrey pl-3 hover:text-white"
            href="/dmca-notice"
          >
            DMCA Notice
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
