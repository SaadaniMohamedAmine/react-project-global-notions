const Pricing = () => {
  return (
    <section className="py-6 leading-7 text-white sm:py-12 md:py-16 bg-neutral-900">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-white border-0 border-gray-200">
          <h2
            id="pricing"
            className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-orange-500 border-solid sm:text-4xl md:text-5xl"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="box-border mt-2 text-xl text-white border-solid sm:text-2xl" />
        </div>

        <div
          id="pricing"
          className="grid grid-cols-1 gap-4 mt-4 leading-7 text-white border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
        >
          {/* <!-- Price 1 --> */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-white border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Starter
            </h3>
            <div className="flex items-end mt-6 leading-7 text-white border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $1
              </p>
              <p className="box-border m-0 border-solid border border-white">
                / month
              </p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-white border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                1 Website
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                SiteFast Domain
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-orange-500 no-underline bg-transparent border border-orange-500 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
          {/* <!-- Price 2 --> */}
          <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-neutral-950 border-4 border-orange-500 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-white border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Basic
            </h3>
            <div className="flex items-end mt-6 leading-7 text-white border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $29
              </p>
              <p className="box-border m-0 border-solid border border-white">/ month</p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-white border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                15 Websites
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                Custom Domain
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                SiteFast Branding Removal
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-orange-500 no-underline bg-transparent border border-orange-500 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
          {/* <!-- Price 3 --> */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-white border-0 border-orange-500 sm:text-3xl md:text-4xl">
              Plus
            </h3>
            <div className="flex items-end mt-6 leading-7 text-white border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $49
              </p>
              <p className="box-border m-0 border-solid border border-white">
                / month
              </p>
            </div>

            <ul className="flex-1 p-0 mt-4 leading-7 text-white border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                50 Websites
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                Custom Domain
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                SiteFast Branding Removal
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                Google Analytics
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                Email Integration
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-orange-500 no-underline bg-transparent border border-orange-500 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
