import React from "react";
import TopSection from "@/components/templates/TopSection/TopSection";
import { notFound } from "next/navigation";

function page({ params }) {
  // checking page route
  if (params.discover !== "movie" && params.discover !== "tv") {
    notFound();
    return;
  }
  const dataOtions = {
    mediaType: params.discover,
    apiPath: `discover/${params.discover}`,
    apiQueris: "",
    sortBy: "",
  };
  return (
    <>
      <TopSection {...dataOtions} />
    </>
  );
}

export default page;
