const InfoData = ({ api, textTitle, textData, moreTextData }) => {
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <p className="text-base font-medium text-gray-400">{textTitle}</p>
        <div className="text-sm text-right text-gray-100">
          <p className="text-sm text-gray-100 max-w-48 md:max-w-none">
            {textData || null}
          </p>
          <p className="text-sm text-gray-100 max-w-48 md:max-w-none">
            {moreTextData || null}
          </p>
          <div>
            {api?.map((studio, index) => {
              return (
                <p
                  className="text-sm font-medium text-right text-gray-100 max-w-48 md:max-w-none"
                  key={index}
                >
                  {studio.name}
                </p>
              );
            }) || null}
          </div>
        </div>
      </div>
      <div className="border border-gray-700"></div>
    </>
  );
};

export default InfoData;
