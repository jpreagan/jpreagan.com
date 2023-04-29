import Image from "next/image";
import Link from "next/link";
import styles from "~/styles/aloha.module.css";
import image from "~/public/images/jpreagan.jpg";

export default function Aloha() {
  return (
    <div className="flex animate-appear flex-col items-center">
      <p className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl md:text-6xl lg:text-7xl lg:leading-none">
        Aloha <span className={`inline-block ${styles.wave}`}>👋</span>,
        I&apos;m
      </p>
      <p className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl md:text-6xl lg:text-7xl lg:leading-none">
        <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          James Reagan
        </span>
        .
      </p>
      <Image
        className="my-8 animate-tada rounded-xl sm:my-16 sm:rounded-2xl"
        src={image}
        alt="James Reagan"
        width={300}
        height={300}
        priority
      />
      <p className="my-2 md:text-lg lg:text-xl">
        💻 I&apos;m a software engineer 🌴 living in Hawai&#699;i.
      </p>
      <p className="my-2 md:text-lg lg:text-xl">
        💕 Lover of 80&apos;s music and 🍜 udon noodles!
      </p>
      <div className="mt-8 flex items-center justify-center gap-x-6 sm:mt-16">
        <Link
          href="#newsletter-signup"
          className="rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-pink-500 hover:from-purple-700 hover:to-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
        >
          Join newsletter
        </Link>
        <Link
          href="/about"
          className="rounded-md px-3.5 py-2.5 font-semibold text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
        >
          About me <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
