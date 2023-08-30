"use client";
import Layout from "@/components/Layout";
import Project from "@/components/Project";

import React from "react";
const projectOptions = {
  "design-research": [
    {
      title: "Large scale fabrication of HX biphilic surfaces",
      dateRange: "October 2022 - June 2023",
      summary: `At the Energy Transport Research Lab at the University of Illinois I am developing a large scale fabrication method for biphilic surfaces. I am working with graduate student Majid Linjawi, under the PI Professor Nenad Milijkovic.
        
              Biphilic surfaces are both hydrophobic and hydrophilic, and can be used as the stock material for heat exchangers.  Currently heat exchangers are made of standard aluminum alloys.  When used in heat pump applications, stock aluminum forms ice rapidly, and the cycle needs to be either run in reverse or heated externally to completely deice the exchanger, which decreases efficiency.  
              
              Because biphilic surfaces are hydrophobic and hydrophilic the surface allows ices to move as a slush before it is entirely liquid.  This requires less energy input for deicing, ultimately increasing the energy efficiency of the cycle. 
              
              Currently, biphilic surfaces are only made on a small scale in labs.  In this project, I am designing a scalable manufacturing assembly for biphilic surfaces.  The purpose of the assembly is to make a roll of aluminum stock into a roll of biphilic aluminum. The fabrication assembly will use a conveyer system for ultrasonic cleaning, boemitization, and hydrophobic coating, which will create a hydrophilic and hydrophobic material that can be tested for efficiency. 
              `,
      images: [
        "/research/research1.JPG",
        "/research/research2.JPG",
        "/research/research3.JPG",
        "/research/research4.JPG",
      ],
    },
  ],
  "design-personal": [
    {
      title: "Tunnelled",
      dateRange: "October 2022 - Janurary 2023",
      summary: `Tunneled is a collaborative project with my good friend and artist Conrad Edmonds that combines my engineering skills and his art skills. My main focus was to find an elegant and impactful way to make Edmond's 2D art 3D. Our inspiration for this project stemmed from Disney's film making methods from the 20th century, where layers of cutouts and paintings were stacked to create depth for 2-dimensional television.  Working in reverse, we were able to make Edmonds art, the design in the first picture, have 3 dimensions by stacking specific-colored layers.  The layers and box are laser cut acrylic, and by painting the layers and adding light inside the box, the layers worked together to convey Edmonds art in 3D as seen in the bottom right. 
        
              `,
      images: [
        "/personal/tunneled/tunnel1.PNG",
        "/personal/tunneled/tunnel2.PNG",
        "/personal/tunneled/tunnel3.PNG",
        "/personal/tunneled/tunnel4.jpg",
      ],
    },
    {
      title: "Bike Stem",
      dateRange: "June - August 2022",
      summary: `As a bicycle enthusiast, I wanted to design an aesthetically pleasing part while while maintaining or improving on functionality, especially since bike parts have mostly remained stagnant for decades.
        
              The bike stem is virtually the same design on all bikes no matter the brand. Striving for aesthetics, I designed a bike stem with a unique shape and pattern. I created the first two prototypes before learning about manufacturing; however, I am currently working on a revision of this project that lowers manufacturing costs based on the drawing in the third image.`,
      images: [
        "/personal/bikeStem/bike1.PNG",
        "/personal/bikeStem/bike2.png",
        "/personal/bikeStem/bike3.png",
      ],
    },

    {
      title: "Booksehlf",
      dateRange: "August 2022",
      summary: `Unable to find a bookshelf I liked, I created my own design honing in on my appreciation once again of mid-century modern. 
              I sketched ideas based on stacked and balanced rocks. After creating one I liked, I made it in Fusion to determine the exact measurements.
               Using 33 feet of 3/4 inch pine, and wooden rods, I went on to build the 5 foot tall Bookshelf.`,
      images: [
        "/personal/bookshelf/shelf1.PNG",
        "/personal/bookshelf/shelf2.png",
        "/personal/bookshelf/shelf3.png",
      ],
    },
    {
      title: "Bladed Lamp",
      dateRange: "May 2022",
      summary: `The idea for Bladed Lamp happened while bending a blade of grass, and was driven by my interest in mid-century modern design and being a devout fan of lamps created by Michael Lax and Richard Sapper.
               Bladed Lamp sticks straight up and folds on angles to hang over and light any surface.`,
      images: [
        "/personal/bladedLamp/lamp1.png",
        "/personal/bladedLamp/lamp2.PNG",
        "/personal/bladedLamp/lamp3.PNG",
      ],
    },
  ],
  "design-school": [
    {
      title: "Self Locking Transmission - Junior Design II",
      dateRange: "Feburary - May 2023",
      summary: `In my second Junior Design class my team and I were assigned to create a transmission that would alter directions.  The transmission had to go into reverse, neutral, or forward in any order.  The transmission also had to carry 4 kilograms of weight 8 feet within 10 seconds.  The main challenge with this project was for a self locking neutral.  The system was driven by the aluminum bar in the last image and had to be on the entire time.  To meet this need I designed a dog clutch which was split into two parts.  This meant that it could go from forward to neutral as a typical dog clutch could but then one part could be slid over so that it was not engaged with the main shaft, allowing the main shaft to spin while holding the gears in place.`,
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
  ],
  "web-development": [
    {
      title: "GCite",
      dateRange: "Feburary 2023 - Present",
      summary: `
      I created GCite because generating sources on existing citation websites takes too long. Even though these websites can auto populate and auto format the citation, the process to check for errors and input missing information is still laborious.  GCite is designed to streamline the process. Citing 20 sources takes three minutes on GCite, but can take an hour plus using existing citation sites.
      GCite and its demo deployed in April. It supported books, journals, and websites. I shared it on Reddit and with friends. The feedback and interest I received led me to optimize the website. Redevelopment began in June using the new Next.js app directory. Gcite’s redevelopment will be launched mid-September and offer populated information for 15 source types, web categorization, advanced filtering for accurate information, and will work better and faster than any predecessor. 
      

              `,
      images: ["/development/gciteblue.png"],
    },
    {
      title: "Personal Website",
      dateRange: "August 2023",
      summary: `
  
      Previously, I used a website creator to make my first portfolio website with text and image boxes.  I designed my current portfolio website using Next.js with its new app directory, serverless deployment on Vercel, and Tailwind CSS for the UI interface.  This website was designed from scratch and its repository is available here.

              `,
      images: ["/development/personal.JPG"],
    },
  ],
};
const page = ({ params }) => {
  const property = params.property;
  const projects = projectOptions[property];

  let title;
  if (property === 'web-development') {  // Note: I think you meant 'web-development'
    title = 'Web Development';
  } else if (property === 'design-school') {
    title = 'School Projects';
  } else if (property === 'design-personal') {
    title = 'Personal Projects';
  } else if (property === 'design-research') {
    title = 'research Projects';
  }


  return (
    
    <Layout title={title}>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Layout>
  );
};

export default page;
