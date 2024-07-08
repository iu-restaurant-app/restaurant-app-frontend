//taken from: https://flowbite.com/docs/typography/lists/

export default function ContactUs() {
  return (
    <section className="bg-white">
      <div className="container left-1">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="mb-4 text-black content-center dark:text-gray-400">
            <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
              Our addresses:
            </h2>
            <ul className="max-w-md space-y-5 text-black list-disc list-inside dark:text-gray-400">
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
          <div className="mb-4 text-black content-center dark:text-gray-400">
            <h2 className="mb-6 text-lg font-bold text-black dark:text-white">
              Phone numbers:
            </h2>
            <ul className="space-y-5 text-left text-black dark:text-gray-400">
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
            <ul className="max-w-md space-y-1 text-black list-disc list-inside dark:text-gray-400">
              <ul>
                <a
                  href="https://t.me/sysoevfmkazan"
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                >
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0088cc]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-3.5 h-3.5 me-2"
                    >
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </span>
                  Telegram
                </a>
              </ul>

              <ul>
                <a
                  href="https://vk.com/granddipasta?from=search"
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                >
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#45668e]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-3.5 h-3.5 me-2"
                    >
                      <path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z" />
                    </svg>
                  </span>
                  VK
                </a>
              </ul>
              <ul>
                <a
                  href="mailto:pastapalace@gmail.com"
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                >
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#45668e]">
                    <svg
                      viewBox="0 0 32.00 32.00"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FBB117"
                      stroke="#FBB117"
                      className="w-4 h-3.5 me-2"
                    >
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <title>mail</title>{' '}
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                        <g id="Page-1" stroke="none">
                          {' '}
                          <g
                            id="Icon-Set-Filled"
                            transform="translate(-414.000000, -261.000000)"
                            fill="#FBB117"
                          >
                            {' '}
                            <path
                              d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                              id="mail"
                            >
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  </span>
                  Mail
                </a>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
