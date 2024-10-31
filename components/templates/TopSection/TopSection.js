"use client";
import React, { useEffect, useState } from "react";
import InsidePagesHeader from "@/components/modules/InsidePagesHeader/InsidePagesHeader";
import MoviesGrid from "@/components/modules/MoviesGrid/MoviesGrid";
import SortForm from "@/components/modules/SortForm/SortForm";
import paginationHOC from "@/components/HOCs/paginationHOC";

function TopSection(props) {
  return (
    <>
      <InsidePagesHeader title={props.mediaType} />
      <SortForm
        setSortOption={props.setSortOption}
        mediaType={props.mediaType}
      />
      <MoviesGrid items={props.items} />
    </>
  );
}

export default paginationHOC(TopSection);
