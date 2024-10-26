const Stepper = () => {
  return (
    <ol className="flex items-center w-full p-3 space-x-2 text-sm  max-w-[600px] mx-auto font-medium text-center text-gray-500 border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      <li className="flex items-center text-white dark:text-blue-500">
        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-white rounded-full shrink-0 dark:border-blue-500">
          1
        </span>

        <span className="hidden sm:inline-flex sm:ms-2"> Chuẩn bị hàng</span>
        <svg
          className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li className="flex items-center">
        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          2
        </span>
        Account{" "}
        <span className="hidden sm:inline-flex sm:ms-2">Đang lấy hàng</span>
        <svg
          className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li className="flex items-center">
        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          3
        </span>
        Giao hàng
      </li>
    </ol>
  );
};

export default Stepper;
