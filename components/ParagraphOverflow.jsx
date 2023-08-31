import React, { useState, useEffect, useRef } from 'react';
import { BsArrowsCollapse, BsArrowsExpand } from 'react-icons/bs';

export default function ParagraphOverflow({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      const element = textRef.current;
      if (element) {
        setIsOverflowing(element.scrollHeight > element.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && textRef.current) {
      const top = textRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };



  return (
    <div>
      <div className={isExpanded? " lg:max-h-full lg:overflow-visible   ": " lg:max-h-full lg:overflow-visible max-h-[200px] overflow-hidden "}  ref={textRef}>
        <p className="text-sm xl:text-md 2xl:text-lg">{text}</p>
      </div>
      {isOverflowing && (
        <div className="lg:hidden">
          <button
            className="text-blue-500 mt-2 flex items-center bg-blue-50 hover:bg-blue-200 py-1 px-2 rounded-md transition duration-300 "
            onClick={handleExpand}
          >
            {isExpanded ? (
              <BsArrowsCollapse className="mr-1" />
            ) : (
              <BsArrowsExpand className="mr-1" />
            )}
            {isExpanded ? "Hide text" : "Expand text"}
          </button>
        </div>
      )}
    </div>
  );
}
