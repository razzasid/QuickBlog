function NewsLetter() {
  return (
    <div className="my-32 flex flex-col items-center justify-center space-y-2 text-center">
      <h1 className="text-2xl font-semibold md:text-4xl">Never Miss a Blog!</h1>
      <p className="pb-8 text-gray-500/70 md:text-lg">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form className="flex h-12 w-full max-w-2xl items-center justify-between md:h-13">
        <input
          type="text"
          className="h-full w-full rounded-md rounded-r-none border border-r-0 border-gray-300 px-3 text-gray-500 outline-none"
          placeholder="Enter your email id "
          required
        />
        <button
          type="submit"
          className="bg-primary/80 hover:bg-primary h-full cursor-pointer rounded-md rounded-l-none px-8 text-white transition-all md:px-12"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
