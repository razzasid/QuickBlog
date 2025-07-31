import { div } from "motion/react-client";
import { assets, footer_data } from "../assets/assets";
function Footer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10">
        <div>
          <img
            src={assets.logo}
            alt="logo"
            className="w-32 sm:w-44 cursor-pointer"
          />
          <p className="max-w-[410px] mt-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-5 w-full md:w-[45%]">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition text-gray-500">
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

      <p className="text-gray-500/80 text-center text-sm md:text-base py-4">
        Copyright 2025 © QuickBlog GreatStack - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
