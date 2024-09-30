import { Heart } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <>
      <div className="border border-t border-gray-700"></div>
      <div className="flex items-center justify-center">
        <h3 className="py-4 text-sm font-bold text-gray-400">Developed with</h3>
        <span className="ml-1 text-red-500">
          <Heart size={20} weight="fill" />
        </span>
        <span className="mx-2 text-2xl font-medium text-gray-100 rotate-12">
          /
        </span>
        <a
          href="https://github.com/irfanbakhtiar"
          target="_blank"
          className="text-sm font-bold text-gray-400 hover:text-gray-100"
        >
          Github
        </a>
      </div>
    </>
  );
};

export default Footer;
