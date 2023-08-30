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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLargeView = windowWidth > 1024;

  const textContainerStyle = !isExpanded && !isLargeView
    ? { maxHeight: "200px", overflow: "hidden" }
    : {};

  return (
    <div>
      <div style={textContainerStyle} ref={textRef}>
        <p className="text-sm xl:text-md 2xl:text-lg text-black">{text}</p>
      </div>
      {isOverflowing && (
        <div className="lg:hidden">
          <button
            className="text-blue-500 mt-2 flex items-center bg-blue-50 hover:bg-blue-200 py-1 px-2 rounded-md transition duration-300"
            onClick={handleExpand}
          >
            {isExpanded ? (
              <BsArrowsCollapse className="mr-1 " />
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
