import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Full-Stack Web Development",
    description:
      "Build complete web applications from scratch using HTML, CSS, JavaScript, React, and Node.js.",
    level: "Beginner",
    duration: "16 weeks",
    price: "$499",
  },
  {
    title: "React & Modern Frontend",
    description:
      "Go deep on component-driven UI, state management, and building fast, responsive interfaces.",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$349",
  },
  {
    title: "Backend APIs with Node.js",
    description:
      "Design, build, and deploy real REST APIs — authentication, databases, and error handling.",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$399",
  },
];

function CourseGrid() {
  return (
    <section id="courses" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our Courses
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Practical, project-based courses designed to get you building real
            things from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              level={course.level}
              duration={course.duration}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseGrid;
