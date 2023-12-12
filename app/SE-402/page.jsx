import Image from "next/image";
import React from "react";

const ProjectPortfolio = () => {
  return (
    <div className="container  max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
   <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          SE-402 Project Portfolio
        </h1>
        <hr className="border-2 w-2/4 mx-auto border-gray-700 mb-3" />
        <p className="text-md text-gray-600  mb-1">
          Completed by George Penn, Nikita Pawar, and Shivam Patel
        </p>
        <p className="text-sm text-gray-500 italic">
          This page was created for the SE402 Portfolio Assessment
        </p>
      </div>

      {/* Research Phase */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Research Phase
        </h2>

        <div className="flex justify-center">
          <Image
            src="/SE402/SE4021.JPG"
            alt="Typical Option on the Market Currently"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <p className="text-center font-bold mt-2 mb-4">
          Figure 1. Typical Option on the Market Currently
        </p>

        <p className="text-lg text-gray-600 mb-3">
          <b>Understanding the Need:</b> The initial stage involved comprehensive
          research to comprehend the existing challenges and limitations of
          conventional post-surgery eye shields. We found the current solution
          to be lacking in meeting patient needs and understood it was created
          more out of medical necessity.
        </p>
        <p className="text-lg text-gray-600 mb-3">
        <b>Identifying Pain Points:</b> Through this research, key pain points were
          identified: discomfort for patients, limitations in adjustability, and
          unattractive design.
        </p>
        <p className="text-lg text-gray-600 mb-3">
        <b>User-Centric Approach:</b> Adopting a user-centric approach, the research
          phase focused on empathizing with patients to deeply understand their
          experiences, needs, and desires from a redesigned eye shield.
        </p>
        <div className="flex justify-center">
          <Image
            src="/SE402/SE4022.JPG"
            alt="Typical Option on the Market Currently"
            width={750}
            height={750}
            className="rounded-lg"
          />
        </div>

        <p className="text-center font-bold mt-2 mb-4">
        Figure 2. Initial Concept Sketches by Group Members
        </p>
      </div>

      {/* Ideation Phase */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Ideation Phase
        </h2>
        <p className="text-lg text-gray-600 mb-3">
        <b>Brainstorming and Conceptualization:</b> The ideation phase involved
          brainstorming sessions to generate a wide array of design concepts.
          These concepts were evaluated based on criteria such as comfort,
          adjustability, durability, ease of use, and aesthetics.
        </p>
        <p className="text-lg text-gray-600 mb-3">
        <b>Sketches and Prototyping:</b> Promising concepts were translated into
          initial sketches and low-fidelity prototypes. This phase involved
          rapid iterations to explore various design elements, materials, and
          mechanisms that addressed the identified pain points.
        </p>
        <div className="flex justify-center">
          <Image
            src="/SE402/SE4023.JPG"
            alt="Typical Option on the Market Currently"
            width={750}
            height={750}
            className="rounded-lg"
          />
        </div>

        <p className="text-center font-bold mt-2 mb-4">
        Figure 3. 3D Printed Low-Fidelity Prototype
        </p>
      </div>

      {/* Prototyping Phase */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Prototyping Phase
        </h2>
        <p className="text-lg text-gray-600 mb-3">
        <b>Iterative Prototyping:</b> The chosen concepts progressed to
          higher-fidelity prototypes. Multiple iterations were made to fine-tune
          the design, incorporating feedback, and ensuring functionality,
          comfort, and ease of use.
        </p>
        <p className="text-lg text-gray-600 mb-3">
        <b>Usability Testing:</b> Usability testing involved simulated scenarios and
          real-life trials with patients and medical professionals. Observations
          and feedback from these sessions were instrumental in making final
          adjustments.
        </p>
        <div className="flex justify-center">
          <Image
            src="/SE402/SE4024.JPG"
            alt="Typical Option on the Market Currently"
            width={750}
            height={750}
            className="rounded-lg"
          />
        </div>

        <p className="text-center font-bold mt-2 mb-4">
        Figure 4. Rendered final solution
        </p>
      </div>

      {/* Final Solution */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Final Solution
        </h2>
        <p className="text-lg text-gray-600 mb-3">
        <b>Refined Design:</b> The culmination of extensive research, ideation, and
          prototyping resulted in a redesigned post-surgery eye shield. This
          solution addresses the identified pain points by prioritizing comfort,
          protection, and ease of maintenance.
        </p>
        <p className="text-lg text-gray-600 mb-3">
        <b>Key Features:</b> Comfort with padding for personalized fit,
          protection using impact-resistant materials and extended coverage, and
          ease of use with an intuitive design for hassle-free application and
          removal.
        </p>
        <p className="text-lg text-gray-600 mb-3">
        <b>Future Prospects:</b> Continued collaboration with medical professionals,
          ongoing feedback integration, and potential advancements in materials
          and technology aim to further enhance the eye shield's performance and
          patient experience.
        </p>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
