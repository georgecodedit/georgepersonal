import Layout from "@/components/Layout";
import Project from "@/components/Project";
import React from "react";

const page = () => {
  const projects = [
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
        "/personal/bikeStem/bike2.PNG",
        "/personal/bikeStem/bike3.PNG",

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
        "/personal/bookshelf/shelf2.PNG",
        "/personal/bookshelf/shelf3.PNG",

      ],
    },
    {
      title: "Bladed Lamp",
      dateRange: "May 2022",
      summary: `The idea for Bladed Lamp happened while bending a blade of grass, and was driven by my interest in mid-century modern design and being a devout fan of lamps created by Michael Lax and Richard Sapper.
       Bladed Lamp sticks straight up and folds on angles to hang over and light any surface.`,
      images: [
        "/personal/bladedLamp/lamp1.PNG",
        "/personal/bladedLamp/lamp2.PNG",
        "/personal/bladedLamp/lamp3.PNG",

      ],
    },
   
   
  ];

  return (
    <Layout title="Personal Projects">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Layout>
  );
};

export default page;
