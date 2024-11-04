"use client";
import React, { useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import GlobalLoader from "@/components/modules/GlobalLoader/GlobalLoader";
import PostDetails from "@/components/modules/PostDetails/PostDetails";
import CastsBox from "@/components/modules/CastsBox/CastsBox";
import { RiSignalWifiErrorLine } from "react-icons/ri";

function page({ params }) {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const { data, error, setApiUrl } = useApi();
  useEffect(() => {
    setApiUrl({
      value: `${params.details}/${params.id}`,
    });
  }, []);

  useEffect(() => {
    if (data?.success == false || error) {
      setIsLoadingData(false);
      console.log(error);
      return;
    }
    if (data) {
      setIsLoadingData(false);
    }
  }, [data, error]);

  return (
    <>
      {data !== undefined && !error && (
        <>
          <PostDetails {...data} params={params} />
          <CastsBox postId={params.id} type={params.details}/>
        </>
      )}
      <GlobalLoader show={isLoadingData} />
      {error && (
        // Error Box
        <div className="mt-32 mb-64 w-full h-full flex  items-center justify-center px-10 flex-col">
          <RiSignalWifiErrorLine className="text-4xl bg-red-900 bg-opacity-30 w-28 h-28 p-5 rounded-lg text-red-300" />
          <h2 className="font-bold text-lg mt-3">Failed to load</h2>
          <p className="text-base text-slate-200">Please try again with vpn</p>
        </div>
        //   End of Error Box
      )}
    </>
  );
}

export default page;
