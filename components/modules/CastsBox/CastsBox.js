import React, { useEffect } from "react";
import Image from "next/image";
import useApi from "@/hooks/useApi";
import { RiSignalWifiErrorLine } from "react-icons/ri";


function CastsBox(props) {
  const { data, error , setApiUrl } = useApi();
  const { postId, type } = props;
  const url = {
    value: `${type}/${postId}/credits`,
    queries: "language=en-US",
  };
  const loadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    setApiUrl(url);
  }, []);

  return (
    <>
      {/* ------- start of Cast box --------  */}
      {data !== undefined && !error ? (
        <div
          id="cast-box"
          className="max-w-screen-2xl mx-auto px-4 w-full overflow-hidden"
        >
          <h2 className="font-bold my-4">Top Billed Cast</h2>
          <div
            id="slides-wrapper"
            style={{ flexFlow: "row nowrap" }}
            className="flex flex-nowrap flex-[1,1,auto]  overflow-x-auto
           pb-4 
         [&::-webkit-scrollbar]:h-2
         lg:[&::-webkit-scrollbar]:h-4
         [&::-webkit-scrollbar-track]:rounded-full
         [&::-webkit-scrollbar-track]:bg-gray-700
         [&::-webkit-scrollbar-thumb]:rounded-full
         [&::-webkit-scrollbar-thumb]:bg-gray-600
         dark:[&::-webkit-scrollbar-track]:bg-neutral-900
         dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800
         "
          >
            {data.cast.slice(0, 10).map((item) => (
              <div
                key={item.credit_id}
                className="bg-gray-950 max-w-fit rounded-md overflow-hidden min-w-[138px] inline-block mx-3"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w100${item.profile_path}`}
                  width={100}
                  height={175}
                  alt={item.name}
                  className="w-full"
                />
                <div className="p-2 flex flex-col gap-2 justify-between items-start overflow-hidden">
                  <h4 className="font-bold text-sm text-wrap">{item.name}</h4>
                  <p className="text-xs text-nowrap w-full text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : !error ? (
        <div
          id="cast-box"
          className="max-w-screen-2xl mx-auto px-4 w-full overflow-hidden"
        >
          <h2 className="font-bold my-4">Top Billed Cast</h2>
          <div
            id="slides-wrapper"
            style={{ flexFlow: "row nowrap" }}
            className="flex flex-nowrap flex-[1,1,auto]  overflow-x-auto
           pb-4 
         [&::-webkit-scrollbar]:h-2
         lg:[&::-webkit-scrollbar]:h-4
         [&::-webkit-scrollbar-track]:rounded-full
         [&::-webkit-scrollbar-track]:bg-gray-700
         [&::-webkit-scrollbar-thumb]:rounded-full
         [&::-webkit-scrollbar-thumb]:bg-gray-600
         dark:[&::-webkit-scrollbar-track]:bg-neutral-900
         dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800
         "
          >
            {loadArray.map((i) => (
              <div
                key={i}
                className="bg-gray-950 max-w-fit rounded-md overflow-hidden min-w-[138px] inline-block mx-3"
              >
                <div className="w-full h-[175px] bg-slate-800 animate-pulse"></div>
                <div className="p-2 flex flex-col gap-2 justify-between items-start overflow-hidden">
                  <div className="bg-slate-800 w-2/3 h-3 rounded-lg animate-pulse"></div>
                  <div className="bg-slate-800 w-3/4 h-2 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 mb-64 w-full h-full flex  items-center justify-center px-10 flex-col">
          <RiSignalWifiErrorLine className="text-4xl bg-red-900 bg-opacity-30 w-28 h-28 p-5 rounded-lg text-red-300" />
          <h2 className="font-bold text-lg mt-3">Failed to load</h2>
          <p className="text-base text-slate-200">Please try again with vpn</p>
        </div>
      )}

      {/* ------- END of Cast box --------  */}
    </>
  );
}

export default CastsBox;
