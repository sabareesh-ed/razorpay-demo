import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex w-screen h-screen justify-center items-center">
        <form className="w-80 mx-auto flex flex-col">
          <label htmlFor="email" className="block mb-4 text-md font-medium text-gray-900 dark:text-white">Verify your details</label>
          <div className="mb-5">
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-5">
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-5">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</span>
            <span className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">₹ 100</span>
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>
        </form>
      </div>
    </main>
  );
}
