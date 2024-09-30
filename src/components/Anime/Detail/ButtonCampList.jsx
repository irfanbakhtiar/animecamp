import { Plus } from "@phosphor-icons/react/dist/ssr";

const ButtonCampList = () => {
  return (
    <div className="pt-4">
      <button className="text-sm font-semibold tracking-wide text-gray-400 uppercase md:text-base hover:text-gray-100">
        <span className="flex items-center justify-center">
          <Plus size={20} weight="bold" className="mr-2" />
          Add To CampList
        </span>
      </button>
    </div>
  );
};

export default ButtonCampList;
