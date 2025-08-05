import { div } from "motion/react-client";
import { assets, footer_data } from "../assets/assets";
function Footer() {
  return (
    <div className="bg-primary/3 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-start justify-between gap-10 py-10 md:flex-row">
        <div>
          <img
            src={assets.logo}
            alt="logo"
            className="w-32 cursor-pointer sm:w-44"
          />
          <p className="mt-6 max-w-[410px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-5 md:w-[45%]">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="mb-2 text-base font-semibold text-gray-900 md:mb-5">
                {section.title}
              </h3>
              <ul className="space-y-1 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-0.1 border-gray-300" />

      <p className="py-4 text-center text-sm text-gray-500/80 md:text-base">
        Copyright 2025 © QuickBlog GreatStack - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
