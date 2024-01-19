import WaveDividerBottom from "./WaveDividerBottom";
import Link from 'next/link'

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="flex-col justify-end bg-reDark min-h-[130px] pb-6">
      <div className="relative bg-reGreen py-8 px-6 text-center">
        <h3 className="font-heading text-xl font-semibold z-10 pb-2">
          Hablamos Español! Para ayuda puede llamar o enviar mensaje de texto al
          414.797.6128
        </h3>
        <WaveDividerBottom />
      </div>
      <div className="flex flex-col md:flex-row bg-reDark gap-x-10 py-10 px-6 md:px-[10%] md:py-[50px]">
        <div className="w-full md:flex-auto md:w-[40%]">
        <Link href="/">
          <img
          src="/img/rethought-real-estate-light-logo.svg"
          className="w-[70%]"
          alt="reThought Real Estate Logo"
        />
        </Link>
        <p className="mt-8 text-reTextGrey">At reThought, our process has been reElevated using today’s trending technology tools. With that said, it allows our business to be extremely organized while we FOCUS on elevating your experience while together we achieve YOUR goal.</p>
        <h4 className="mt-8 text-reGreen font-heading font-semibold">Real Simple. Real Skills. Real Results. ™</h4>
        </div>


        <div className="flex-auto w-80">
        <h3 className="font-accent text-2xl">Neighboorhoods</h3>
        </div>


        <div className="flex-auto w-80">
        <h3 className="font-accent text-2xl">Real Estate</h3>
        </div>



        <div className="flex-auto w-80">
        <h3 className="font-accent text-2xl">Find Us</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-6 px-6 md:px-[10%]">
      <div className="basis-12/12 md:basis-8/12">
      <img
          src="/img/metro-mls.png"
          className="w-[60px] float-left pr-4"
          alt="Metro MLS Logo"
        />
        <p className="text-xs text-reTextGrey pr-10 opacity-50">Information is supplied by seller and other third parties and has not been verified. IDX information is provided exclusively for consumers personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.</p>
        </div>
        <div className="basis-12/12 md:basis-4/12">
            <p className="text-xs text-reTextGrey pr-10 opacity-50 pt-4 md:pt-0">reThought Real Estate LLC © {year} All rights reserved.</p>
            <Link className="text-xs text-reTextGrey hover:text-white" href="/">Privacy Policy</Link>
            <Link className="text-xs text-reTextGrey pl-3 hover:text-white" href="/">Terms and Conditions</Link>
            <Link className="text-xs text-reTextGrey pl-3 hover:text-white" href="/">DMCA Notice</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
