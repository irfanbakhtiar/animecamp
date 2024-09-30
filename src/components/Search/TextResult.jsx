const TextResult = ({ text, keyword }) => {
  return (
    <div className="px-4 pt-10 pb-6 lg:px-0">
      <div className="text-sm font-medium tracking-wide text-slate-400 md:text-base">
        {text} <span className="font-semibold text-teal-400">{keyword}</span>
      </div>
    </div>
  );
};

export default TextResult;
