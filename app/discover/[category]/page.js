import React from "react";
import TopSection from "@/components/templates/TopSection/TopSection";
import { notFound } from "next/navigation";

function page({ params }) {
  // checking page route
  if (params.category !== "movie" && params.category !== "tv") {
    notFound();
    return;
  }
  const dataOtions = {
    mediaType: params.category,
    apiPath: `discover/${params.category}`,
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
