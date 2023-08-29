
import ImageCarousel from "./ImageWithArrows";
import ParagraphOverflow from "./ParagraphOverflow";

export default function Project({ title, dateRange, summary, images }) {


    return (
      <div className="mb-8 mr-3 p-4 border rounded-md shadow-md flex flex-col lg:flex-row justify-between bg-white space-x-0 lg:space-x-6 bg-gray-50">
        <div className="flex-1 mb-4 lg:mb-0">
          <h2 className="text-xl mb-2 font-semibold">{title}</h2>
          <span className="text-gray-600 block mb-2">{dateRange}</span>
          <ParagraphOverflow text={summary} />
        </div>
  
        <ImageCarousel images={images} altText={`${title} image`} />
      </div>
    );
  }
  
  
  
  
  
  