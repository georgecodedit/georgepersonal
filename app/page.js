import Image from "next/image";
import Link from "next/link";

// Create a reusable card component
function ProjectCard({ title, imgSrc, link }) {
  return (
    <div className="project-card border bg-white rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out group">
      <Link href={link}>
        <Image
          src={imgSrc}
          alt={title}
          width="1000"
          height="1000"
          className="object-cover "
        />
        <div className="border-b border-gray-200"></div>
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:underline transition duration-300 ease-in-out">
            {title}
          </h3>
          <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 transform group-hover:translate-x-0 translate-x-4">
            Let's go →
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const projects = [
    {
      title: "School-Design",
      imgSrc: "/school/ME371/transmission1.JPG",
      link: "design-school",
    },
    {
      title: "Research-Design",
      imgSrc: "/research/research2.JPG",
      link: "design-research",
    },
    {
      title: "Personal-Design",
      imgSrc: "/personal/bikeStem/bike1.PNG",
      link: "design-personal",
    },

    {
      title: "Development",
      imgSrc: "/development/gciteblue.png",
      link: "/web-development",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-white  to-blue-50 rounded-xl p-10 mb-10 shadow-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          Welcome!
        </h1>
        <p className="text-center text-xl mt-4 font-light text-gray-700">
          Please explore my website!
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 shadow-md mb-10">
        <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          My name is George Penn. I am a graduating mechanical engineering
          student always pushing my designs to a higher level that maximizes
          function and uniqueness to produce the best product possible. My
          fascination with tinkering and bicycle mechanics inspired me to bring
          my first viable project to life using Tinker CAD while still in high
          school. In college, I've developed concrete skills in design, learned
          how to use CAD programs efficiently, tolerance parts appropriately,
          and design projects based on manufacturing methods. I have implemented
          this knowledge working on self-led projects, group school projects,
          and collaborative projects with friends.  I have also refined previous
          designs not made with GD&T and manufacturing methods in mind. I
          embrace the math and physics that support working designs and
          appreciate the thought process and complexity of work required to
          produce them.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-extrabold mb-4">View My Projects</h2>
        <p className="text-lg text-gray-700 mb-8">
          A selection of projects I've worked on:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
