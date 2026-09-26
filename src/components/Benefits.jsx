const benefits = [
  {
    title: "Real Projects",
    description: "Every course builds toward a portfolio-ready project, not just isolated exercises.",
    icon: "🛠️",
  },
  {
    title: "Live Mentorship",
    description: "Weekly live sessions with working developers who review your actual code.",
    icon: "🎓",
  },
  {
    title: "Career Support",
    description: "Resume reviews, mock interviews, and a network of hiring partners after graduation.",
    icon: "🚀",
  },
];

function Benefits() {
  return (
    <section id="benefits" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
          Why Learn With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
