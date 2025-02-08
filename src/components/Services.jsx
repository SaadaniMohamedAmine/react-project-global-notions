const Services = () => {
  return (
    <section className="bg-neutral-900">
      <div className="px-4 py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className=" text-2xl font-bold text-orange-500 sm:text-3xl md:text-4xl">
              🚀 Streamlined Services, Maximum Efficiency
            </h2>
          </div>
          <div className="w-full  text-white flex pb-6">
            We offer a seamless experience tailored to your needs. Whether
            you&#39;re looking for expert consultations, automated solutions, or
            hassle-free service management, our platform delivers with precision
            and speed. Discover the future of efficiency today.
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-neutral-950 border-neutral-800 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
              <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                Smart AI Website Builder
              </h2>
              <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  AI-Optimized Website
                </span>{" "}
              </p>
              <ul className="list-none list-inside mb-6 text-center text-gray-300">
                <li>Custom Domain Integration</li>
                <li>AI-Powered Basic SEO</li>
                <li>Limited AI Chat Support</li>
              </ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                href="https://example.com/starter-plan"
              >
                <span className="relative text-sm font-semibold text-black">
                  Get Started
                </span>
              </a>
            </div>
            <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-neutral-950 border-neutral-800 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
              <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                Advanced AI Automation Suite
              </h2>
              <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  AI-Enhanced Websites
                </span>{" "}
              </p>
              <ul className="list-none list-inside mb-6 text-center text-gray-300">
                <li>Custom Domain & Advanced Branding</li>
                <li>AI-Driven SEO & Performance Optimization</li>
                <li>24/7 AI-Powered Support</li>
              </ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                href="https://example.com/pro-plan"
              >
                <span className="relative text-sm font-semibold text-black">
                  Get Started
                </span>
              </a>
            </div>
            <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-neutral-950 border-neutral-800 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
              <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                Full AI-Powered Business Suite
              </h2>
              <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  AI-Managed Websites
                </span>{" "}
              </p>
              <ul className="list-none list-inside mb-6 text-center text-gray-300">
                <li>Custom Enterprise Domains & Integrations</li>
                <li>AI-Enhanced Marketing & SEO Strategy</li>
                <li>Priority AI & Human Hybrid Support</li>
              </ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                href="https://example.com/business-plan"
              >
                <span className="relative text-sm font-semibold text-black">
                  Get Started
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
