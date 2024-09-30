const MusicData = ({ textTitle, api }) => {
  return (
    <div className="py-2">
      <p className="pb-1 text-base font-medium text-gray-400">{textTitle}</p>
      {api.map((data, index) => {
        return (
          <li key={index} className="py-1 text-sm text-gray-100">
            {data}
          </li>
        );
      })}
    </div>
  );
};

export default MusicData;
