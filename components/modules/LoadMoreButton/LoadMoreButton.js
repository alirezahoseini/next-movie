import React from "react";

function LoadMoreButton({nextPageHandler}) {
  return (
    <div className="w-full flex justify-center">
      <button
        className="bg-red-800 text-sm font-bold py-2 px-4 rounded-md hover:bg-red-500"
        type="button"
        onClick={() => nextPageHandler(prev => prev+1)}
      >
        Load more
      </button>
    </div>
  );
}

export default LoadMoreButton;
