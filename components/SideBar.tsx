"use client";

import { usePathname } from "next/navigation";
import Box from "./Box";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { useMemo } from "react";
import SidebarItem from "./SidebarItem";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathname = usePathname();
  const paths = useMemo(
    () => [
      {
        label: "Home",
        href: "./",
        active: pathname !== "/Search",
        icon: AiFillHome,
      },
      {
        label: "Search",
        href: "./Search",
        active: pathname === "/Search",
        icon: BsSearch,
      },
    ],
    [pathname]
  );

  return (
    <div className="flex flex-col h-full w-[300px] p-2 gap-2">
      <Box className="">
        {paths.map((path) => (
          <SidebarItem key={path.label} {...path} />
        ))}
      </Box>
      <Box className="h-full">Library</Box>
    </div>
  );
};

export default SideBar;
