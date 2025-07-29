import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center gap-10 p-15 justify-center">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -z-1 opacity-50"
      />
      <div className="inline-flex gap-4 items-center justify-center px-6 py-1.5 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
        <p>New: AI feature integrated</p>
        <img className="w-2.5" src={assets.star_icon} alt="start icon" />
      </div>
      <h1 className="text-3xl sm:text-6xl  font-semibold sm:leading-16 text-gray-700">
        Your own <span className="text-primary">blogging</span> <br />
        platform.
      </h1>
      <p className=" max-w-2xl m-auto max-sm:text-xs text-gray-500">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it’s one word or a thousand, your story
        starts right here.
      </p>
      <form className="flex justify-between w-full max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
        <input
          placeholder="Search for blogs"
          required
          className="flex-grow pl-4 outline-none"
          type="text"
        />
        <button
          type="submit"
          className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
