import React from 'react';

export default function CopyrightComponent() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-4 py-10 bg-blue-300 px-5 text-center">
      <div className="mr-2 sm:mr-0"><span>Copyright © 2023 George Penn</span></div>

      {/* Separator - Hidden on small screens, visible on 'sm' and above */}
      <div className="hidden sm:block mx-3">|</div>

      <span>Contact: </span>
      <a href="mailto:gmpenn2@illinois.edu" className="text-blue-500 ml-1">
        gmpenn2@illinois.edu
      </a>
    </div>
  );
}
