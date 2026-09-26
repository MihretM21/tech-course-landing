function Testimonial() {
  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed">
          "I had zero coding experience six months ago. The project-based
          approach here is what finally made it click — I built things I
          actually use, not just tutorials I forgot the next day."
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold">
            S
          </div>
          <p className="mt-3 font-semibold text-slate-900">Selam Tesfaye</p>
          <p className="text-slate-500 text-sm">
            Full-Stack Web Development graduate
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
