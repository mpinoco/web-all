import React from 'react';

const Hashtags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 hover:text-emerald-600 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hashtags;
