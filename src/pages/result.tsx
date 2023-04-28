import Navbar from "../../components/navbar";
import Link from "next/link";
import Image from "next/image";
import kunal from "../../public/kunal.jpg";

const Result = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-[600px]">
        <div className="w-full h-96 flex justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <Image src={kunal} alt="kunal" className="rounded-full h-40 w-40" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Kunal Ranjan
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              RA2111003011895
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                href=""
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                N2
              </Link>
              <Link
                href=""
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Dr. K. M Umamaheswari
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Marks
            </h5>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18MAB204T
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Probability and Queueing Theory
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    A+
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18CSC207J
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Advanced Programming Practice
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    A+
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18CSC205J
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Operating Systems
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    A+
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18CSC204J
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Design and Analysis of Algorithms
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    A+
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Marks
            </h5>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18CSS202J
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Computer Communications
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    O
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18CSC206J
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Software Engineering and Project Management
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    O
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18PDH103T
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Social Engineering
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    O
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      18CYM101T
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Environmental Science
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    O
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
