import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, MicrophoneIcon } from "@heroicons/react/24/outline";
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
        💻 I&apos;m a software engineer 🌴 living in Hawaiʻi.
      </p>
      <p className="my-2 md:text-lg lg:text-xl">
        💕 Lover of 80&apos;s music and 🍜 udon noodles!
      </p>
      <div className="my-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Link
          className="inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-md bg-pink-700 bg-gradient-to-r from-purple-800 to-pink-600 p-4 text-center font-bold text-white hover:bg-pink-600 hover:from-purple-700 hover:to-pink-500"
          href="#newsletter-signup"
        >
          <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
          Join newsletter
        </Link>
        <Link
          className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white/10 p-4 font-bold text-gray-200 shadow-sm hover:bg-white/20"
          href="/about"
        >
          <MicrophoneIcon className="h-5 w-5" aria-hidden="true" />
          About me
        </Link>
      </div>
    </div>
  );
}
