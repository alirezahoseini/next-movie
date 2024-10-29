"use client";
import React, { useEffect, useState } from "react";
import InsidePagesHeader from "@/components/modules/InsidePagesHeader/InsidePagesHeader";
import MoviesGrid from "@/components/modules/MoviesGrid/MoviesGrid";
import SortForm from "@/components/modules/SortForm/SortForm";
import getMovies from "@/services/getMovies";
import { notFound } from "next/navigation";
import LoadMoreButton from "@/components/modules/LoadMoreButton/LoadMoreButton";

function TopSection({ mediaType }) {
  const [url, setUrl] = useState("");
  const [items, setItems] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  // checking page url
  if (mediaType !== "movies" && mediaType !== "series") {
    notFound();
    return;
  }
  // Fetch data
  const fetchData = async () => {
    if (url === "") {
      return;
    }
    const apiRes = await getMovies(
      url,
      `page=${pageCount}${sortOption ? `&sort_by=${sortOption}` : ""}`
    );
    if (apiRes.status === 200) {
      setTotalPages(apiRes.data.total_pages);
      setItems((prevItems) => [...prevItems, ...apiRes.data.results]);
    } else {
    }
  };

  // Change sort handler
  useEffect(() => {
    setUrl(`discover/${mediaType === "series" ? "tv" : "movie"}`);
  }, [sortOption]);
  // Change url handler
  useEffect(() => {
    fetchData();
  }, [url, pageCount]);

  return (
    <>
      <InsidePagesHeader title={mediaType} />
      <SortForm />
      <MoviesGrid items={items} />
      <LoadMoreButton nextPageHandler={setPageCount} />
    </>
  );
}

export default TopSection;
