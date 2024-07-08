//taken from: https://flowbite.com/docs/typography/lists/
export default function ContactUs() {
  return (
    <section className="bg-default-50">
      <div className="container ">
        <div className="grid grid-cols-1 text-center gap-12 sm:grid-cols-3">
          <div className="mb-4 text-black dark:text-gray-400">
            <h2 className="mb-6 text-lg font-bold text-black dark:text-white">
              Phone numbers:
            </h2>
            <ul className="space-y-6 text-left absolute left-36 text-black dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-default-500 dark:text-default-400"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#13d455"
                  />
                </svg>
                <span>8-999-163-75-13</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-default-500 dark:text-default-400"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#13d455"
                  />
                </svg>
                <span>8-812-987-65-43</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-default-500 dark:text-default-400"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#13d455"
                  />
                </svg>
                <span>8-495-123-45-67</span>
              </li>
            </ul>
          </div>
          <div className="mb-4 text-gray-500 dark:text-gray-400">
            <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white"></h2>
            <ul className="max-w-md space-y-6 text-black list-disc list-inside dark:text-gray-400">
              <ul>
                <a
                  href="https://t.me/sysoevfmkazan"
                  className="text-white bg-default-600 hover:bg-default-800 focus:ring-4 focus:ring-default-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-default-400 dark:hover:bg-default-600 focus:outline-none dark:focus:ring-default-800"
                >
                  Telegram
                </a>
              </ul>
              <ul>
                <a
                  href="https://vk.com/granddipasta?from=search"
                  className="text-white bg-default-600 hover:bg-default-800 focus:ring-4 focus:ring-default-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-default-400 dark:hover:bg-default-600 focus:outline-none dark:focus:ring-default-800"
                >
                  VK
                </a>
              </ul>
              <ul>
                <a
                  href="mailto:pastapalace@gmail.com"
                  className="text-white bg-default-600 hover:bg-default-800 focus:ring-4 focus:ring-default-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-default-400 dark:hover:bg-default-600 focus:outline-none dark:focus:ring-default-800"
                >
                  Mail
                </a>
              </ul>
            </ul>
          </div>
          <div className="mb-4 text-black dark:text-gray-400">
            <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
              Our addresses:
            </h2>
            <ul className="max-w-md space-y-6 text-black absolute right-20 list-disc list-inside dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-default-500 dark:text-default-400"
                  width="800px"
                  height="800px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#13d455"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span>123 Pushkin Street, Moscow</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-default-500 dark:text-default-400"
                  width="800px"
                  height="800px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#13d455"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span>456 Nevsky Prospect, St. Petersburg</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-default-500 dark:text-default-400"
                  width="800px"
                  height="800px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#13d455"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span>108 Lenina Avenue, Kazan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
