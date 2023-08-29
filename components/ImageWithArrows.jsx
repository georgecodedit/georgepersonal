"use client";

// components/ImageCarousel.js
import { useEffect, useState } from "react";
import Image from "next/image";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skipGrid, setSkipGrid] = useState(true);

  useEffect(() => {
    if (images.some((image) => !image.includes("research"))) {
      setSkipGrid(false);
    }
  }, [images]);

  function handlePrev() {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (skipGrid ? images.length : images.length + 1)) %
        (skipGrid ? images.length : images.length + 1)
    );
  }

  function handleNext() {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % (skipGrid ? images.length : images.length + 1)
    );
  }
  if (images.length === 1) {
    return (
      <div
      className="flex-column items-center w-full h-full"
      style={{
        maxWidth: "500px",
        maxHeight: "600px",
      }}
    >
      <div
        style={{ position: "relative", paddingBottom: "100%" }}
        className="bg-white"
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
        <Image
          src={images[0]}
          alt="Single Image"
          layout="responsive"
          objectFit="contain"
          width={1000}
          height={1000}
        />
           </div>
           </div>
      </div>
    );
  }
  return (
    <div
      className="flex-column items-center w-full h-full"
      style={{
        maxWidth: "500px",
        maxHeight: "600px",
      }}
    >
      <div
        style={{ position: "relative", paddingBottom: "100%" }}
        className="bg-white"
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {images && images.length > 0 ? (
            skipGrid ? (
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                layout="responsive"
                objectFit="contain"
                width={1000}
                height={1000}
              />
            ) : currentIndex === 0 ? (
              <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
                {images.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Image
                src={images[currentIndex - 1]}
                alt={`Image ${currentIndex}`}
                layout="responsive"
                objectFit="contain"
                width={1000}
                height={1000}
              />
            )
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-4">
        <button
          onClick={handlePrev}
          className="z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg text-xl hover:bg-blue-200 hover:shadow-xl active:bg-blue-300 flex items-center justify-center"
        >
          &#8592;
        </button>

        {/* Thumbnail Gallery */}
        <div className="hidden sm:flex items-center overflow-x-auto">
          {/* Custom thumbnail for the grid */}
          {!skipGrid && (
            <div
              onClick={() => setCurrentIndex(0)}
              className={`m-1 cursor-pointer h-13 ${
                currentIndex === 0 ? "border-2 border-blue-500" : ""
              }`}
            >
              <div className="grid grid-cols-2 grid-rows-2 gap-1 w-12 h-12">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="bg-gray-300 rounded-sm"></div>
                  ))}
              </div>
            </div>
          )}
          {/* Actual thumbnails */}
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(skipGrid ? index : index + 1)} // Adjust the index based on whether we're skipping the grid or not
              className={`m-1 cursor-pointer ${
                currentIndex === (skipGrid ? index : index + 1)
                  ? "border-2 border-blue-500"
                  : ""
              }`}
              style={{
                maxWidth: "60px",
                maxHeight: "60px",
              }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={60}
                height={60}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg text-xl hover:bg-blue-200 hover:shadow-xl active:bg-blue-300 flex items-center justify-center"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
