"use client";

import { TbPlaylist } from "react-icons/tb";
// import { AioutlinePlus } from "react-icons/ai";

const Library = () => {
  const onClick = () => {
    // Handle upload later
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-base">Your Library</p>
        </div>
        <div>Made progress in master</div>
      </div>
    </div>
  );
};

export default Library;
