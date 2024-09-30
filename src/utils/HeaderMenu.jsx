import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const HeaderMenu = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="flex items-center justify-between px-4 pb-4 lg:px-0">
      <div className="text-xl font-semibold tracking-wide text-teal-400 lg:text-2xl">
        {title}
      </div>

      {(linkHref && linkTitle && (
        <Link
          href={linkHref}
          className="text-sm font-semibold text-gray-400 uppercase hover:text-gray-100"
        >
          <span className="flex items-center justify-between">
            {linkTitle}
            <CaretRight size={18} weight="bold" className="ml-1" />
          </span>
        </Link>
      )) ||
        null}
    </div>
  );
};

export default HeaderMenu;
