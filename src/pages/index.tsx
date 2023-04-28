import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Landing from "../../components/landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navbar />
        <Landing />

        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                SRMS™
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  By
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Kunal Ranjan
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  &
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shivani Mehra
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
}
