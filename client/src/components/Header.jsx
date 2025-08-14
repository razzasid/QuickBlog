import { useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput } = useAppContext();
  const inputRef = useRef();
  const [showClear, setShowClear] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const clearInput = () => {
    setInput("");
    inputRef.current.value = "";
    setShowClear(false);
    inputRef.current.focus();
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-7 text-center">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -z-1 opacity-50"
      />
      <div className="border-primary/40 bg-primary/10 text-primary inline-flex items-center justify-center gap-4 rounded-full border px-6 py-1.5 text-sm">
        <p>New: AI feature integrated</p>
        <img className="w-2.5" src={assets.star_icon} alt="start icon" />
      </div>
      <h1 className="text-3xl font-semibold text-gray-700 sm:text-6xl sm:leading-16">
        Your own <span className="text-primary">blogging</span> <br />
        platform.
      </h1>
      <p className="m-auto max-w-2xl text-gray-500 max-sm:text-xs">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it’s one word or a thousand, your story
        starts right here.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="relative mx-auto flex w-full max-w-lg justify-between overflow-hidden rounded border border-gray-300 bg-white max-sm:scale-75"
      >
        <input
          ref={inputRef}
          placeholder="Search for blogs"
          required
          type="text"
          className="flex-grow pr-10 pl-4 outline-none"
          onInput={(e) => setShowClear(e.target.value.length > 0)}
        />

        {/* Custom X button */}
        {showClear && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute top-1/2 cursor-pointer right-[125px] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-200"
          >
            &times;
          </button>
        )}

        <button
          type="submit"
          className="bg-primary m-1.5 cursor-pointer rounded px-8 py-2 text-white transition-all hover:scale-105"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
