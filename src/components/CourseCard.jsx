function CourseCard({ title, description, level, duration, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col">
      <span className="inline-block w-fit bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {level}
      </span>

      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6 flex-1">{description}</p>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm text-slate-500">{duration}</span>
        <span className="text-lg font-bold text-slate-900">{price}</span>
      </div>

      <button className="mt-4 w-full bg-slate-900 hover:bg-slate-700 transition-colors text-white font-semibold py-2 rounded-lg">
        View Course
      </button>
    </div>
  );
}

export default CourseCard;
