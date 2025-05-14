import React from 'react';

const CopyrightFooter = () => {
  return (
    <footer className=" text-gray-600 text-center py-4 px-2 border-t">
      <div className="container mx-auto">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-black">Child Welfare Kerala</span>. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm mt-1">
          Designed and Developed by <a href="https://www.ivorytechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-textgree hover:underline">Ivory Technologies</a>
        </p>
      </div>
    </footer>
  );
};

export default CopyrightFooter;
