import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col gap-6 mx-6 mt-12 md:mt-16 mb-16">
      <h2 className="text-slate-400 font-bold text-lg text-center tracking-tighter mx-4">
        Fueling the next generation of independent artists.
      </h2>
      <section className="flex gap-5 sm:gap-8">
        <a
          href="https://x.com/Web3Wanderer9"
          target="_blank"
          className="text-slate-400 cursor-pointer hover:text-slate-200 active:text-slate-100"
        >
          <FaXTwitter className="w-6 h-6 md:w-8 h-8" />
        </a>

        <a
          href="https://github.com/Emmanuelsomto"
          target="_blank"
          className="text-slate-400 cursor-pointer hover:text-slate-200 active:text-slate-100"
        >
          <FaGithub className="w-6 h-6 md:w-8 h-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/emmanuel-agbai-867aa9364/"
          target="_blank"
          className="text-slate-400 cursor-pointer hover:text-slate-200 active:text-slate-100"
        >
          <FaLinkedinIn className="w-6 h-6 md:w-8 h-8" />
        </a>
      </section>

      <p className="text-center font-normal font-lato text-xs md:text-base text-gray-400 tracking-tighter md:tracking-wider">
        &copy;{new Date().getFullYear()} OpenBoom, All Rights Reserved .
      </p>
    </footer>
  );
}
