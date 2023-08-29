import Layout from "@/components/Layout";
import Project from "@/components/Project";
import React from "react";

const page = () => {
  const projects = [
    {
      title: "Self Locking Transmission - Junior Design II",
      dateRange: "Feburary - May 2023",
      summary: "i need one",
      images: [
        "/school/ME371/transmission1.JPG",
        "/school/ME371/transmission2.JPG",
        "/school/ME371/transmission3.JPG",
        "/school/ME371/transmission4.jpg",
      ],
    },

    {
      title: "Walker Robot - Junior Design I",
      dateRange: "September - December 2022",
      summary: `In my junior level design class we were challenged to create a 4-legged walking robot. The project requires the two front legs be 4 bar linkages, and the two hind legs use a cam-mechanism. 

      This project required a simulated path trace and CAD animation of the 4 bar linkages as well as the cam-mechanism.  The walk path was optimized to have a long stride and fast return. The cam mechanism was optimized to minimize the jolts and acceleration in the x and y direction of the follower.
      
      The walker robot was able to walk 8 meters in a straight path in under 45 seconds.`,
      images: [
        "/school/ME370/walker1.PNG",
        "/school/ME370/walker2.PNG",
        "/school/ME370/walker3.PNG",
        "/school/ME370/walker4.PNG",
      ],
    },
    {
      title: "Glider - Fluid Dynamics",
      dateRange: "December 2022",
      summary: `In fluid Dynamics we were tasked with creating a glider with $0 budget that would be hand launched and advance 21 meters while descending 8 meters to hit a 1-meter-diameter target. 

            For the wing design, my team created a wing using scrap wood and cardboard.  We created 20 NACA 4418 airfoils for the cross section on a laser cutter and connected using a strong piece of cardboard.  
            
            For analysis, I used Xfoil to find an optimal angle of attack to create a glide ratio that would reach the parameters to hit the target.  The wing was set at the optimal angle of attack and at an 8 degree dihedral for stability. The plane was succesful and landed directly in the middle of the target.`,
      images: [
        "/school/ME310/glide1.JPG",
        "/school/ME310/glide2.PNG",
        "/school/ME310/glide3.jpeg",
        "/school/ME310/glide4.PNG",
        "/school/ME310/glide5.JPG",
      ],
    },
    {
      title: "Little House on the Prairie Learn - Design for Manufacture",
      dateRange: "September - December 2021",
      summary: `Sophomore year during my Design for Manufacture class, we created a Rube Goldberg machine to turn off a light. The machine had to include 10 unique mechanical steps using different manufacturing methods. 

        The theme for the project was House on the Prairie Learn, which is a spinoff of a site used for testing in the Grainger College of Engineering called Prairie Learn.  The final step was turning off the light situated inside a model house we built by using laser cut parts.`,
      images: [
        "/school/ME270/rube1.PNG",
        "/school/ME270/rube2.PNG",
        "/school/ME270/rube3.PNG",
        "/school/ME270/rube4.PNG",
      ],
    },
    {
      title: "Muse - Introduction to Design",
      dateRange: "Feburary - May 2021",
      summary: `Muse was a group project completed during my freshman year Computer Aided Design class where we had to innovate advantageous mechanical systems for existing products. Muse provided an opportunity for our group to experience a human centered design process by interviewing consumers about issues they have with over the ear headphones. The top three issues we found were storing headphones, customization, and comfort.

        Our group added ball joints to make our headphones fold easily and be more compact for storage, as well as have a greater range of motion to accommodate more head shapes. We created a stand and built it into the top of the headband so the headphones could be easily hung over a computer monitor or desk We also added an adjustable microphone for easier accessibility. `,
      images: [
        "/school/ME170/muse1.PNG",
        "/school/ME170/muse2.PNG",
        "/school/ME170/muse3.PNG",
        "/school/ME170/muse4.PNG",
      ],
    },
  ];

  return (
    <Layout title="School Projects">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Layout>
  );
};

export default page;
