"use client";
import ParagraphOverflow from "@/components/ParagraphOverflow";
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
  const introText=`  My name is George Penn and I am a Chicago native and graduating senior studying mechanical engineering at the University of Illinois Urbana-Champaign. Engineering and design have always been my passion—this spark ignited in my early teens when I learned how to build bikes. My interest in product design developed shortly after when I was introduced to TinkerCAD. In college, I have developed concrete skills in design, learned to use more technical CAD programs efficiently, tolerance parts, and design projects based on manufacturing methods. I have implemented this knowledge while working on self-led projects, group school projects, collaborative and research projects. These engineering projects enhanced my drive to create solutions like when I needed a quick way to generate citations while writing academic papers, which led me to expand my skillset to software engineering. Since I could not find a suitable website for this task, I made my own solution by developing a Next.js website, learning JavaScript and the Node.js environment.
  `

  return (
    <div className="min-h-screen  mr-4 ml-4 py-10">
      <div className="max-w-7xl mx-auto bg-blue-50 rounded-xl p-10 mb-10 shadow-lg border border-gray-200">
        <h1 className="sm:text-4xl font-extrabold text-center text-gray-900 text-2xl">
          Welcome!
        </h1>
        <p className="text-center text-xl mt-4 font-light text-gray-700">
          Please explore my website!
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 shadow-md mb-10">
        <h2 className="text-3xl font-extrabold mb-4">About Me</h2>

        <ParagraphOverflow
          text={introText}
        />
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-extrabold mb-4">View My Projects</h2>
        <p className="text-lg text-gray-700 mb-8">
          View a selection of projects
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
