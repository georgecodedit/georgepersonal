import Layout from "@/components/Layout";
import Project from "@/components/Project";
import React from "react";

const page = () => {
  const projects = [
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
    
        ],
    },

   
   
  ];

  return (
    <Layout title="Research Projects">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Layout>
  );
};

export default page;
