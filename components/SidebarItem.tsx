import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  href: string;
  active: boolean;
  icon: IconType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex p-4 gap-3 items-center text-neutral-500 hover:text-white transition",
        active && "text-white"
      )}
    >
      <Icon size={18} />
      <p>{label}</p>
    </Link>
  );
};

export default SidebarItem;
