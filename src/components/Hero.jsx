function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Learn to Code.
          <span className="block text-pink-500">Build Your Future.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          Hands-on courses in web development, taught by working developers.
          Go from complete beginner to job-ready, one project at a time.
        </p>

        <div className="mt-10">
          <a
            href="#courses"
            className="inline-block bg-pink-600 hover:bg-pink-700 transition-colors text-white font-semibold px-8 py-3 rounded-lg text-lg"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
