function CTA() {
  return (
    <section id="cta" className="bg-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to start building?
        </h2>
        <p className="mt-4 text-lg text-pink-100">
          Enrollment for the next cohort closes soon. Reserve your seat today.
        </p>
        <button className="mt-8 bg-white hover:bg-slate-100 transition-colors text-pink-600 font-bold px-8 py-3 rounded-lg text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CTA;
