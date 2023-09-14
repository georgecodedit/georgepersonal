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

  // Utility function to parse text into paragraphs and links
  const parseText = (text) => {
    // Splitting the text into paragraphs based on '\n'
    const paragraphs = text.split('\n');
  
    return paragraphs.map((paragraph, i) => {
      const words = paragraph.split(' ');
  
      return (
        <p key={i} className="text-sm xl:text-md 2xl:text-lg mb-4">
          {words.map((word, j) => {
            // If the word is a URL, make it a clickable link that opens in a new tab
            if (word.startsWith('http://') || word.startsWith('https://')) {
              return (
                <span key={j}>
                  <a 
                    href={word} 
                    className="text-blue-500 hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {word}
                  </a>{' '}
                </span>
              );
            } else {
              return `${word} `;
            }
          })}
        </p>
      );
    });
  };
  




  return (
    <div>
        <div className={isExpanded ? ' lg:max-h-full lg:overflow-visible ' : ' lg:max-h-full lg:overflow-visible max-h-[200px] overflow-hidden '} ref={textRef}>
        {parseText(text)}
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
