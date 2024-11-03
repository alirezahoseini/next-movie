"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useApi() {
  const [apiUrl, setApiUrl] = useState({
    value: false,
    queries: false,
  });
  const baseUrl = "https://api.themoviedb.org/3/";
  const apiKey = "275fa05f4a9fc2a08e709dfa2ad6141d";
  const url = `${baseUrl}${apiUrl.value}${
    apiUrl.queries ? `?${apiUrl.queries}&` : "?"
  }include_adult=true&api_key=${apiKey}`;

  const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };
  const { data, error, isLoading } = useSWR(apiUrl.value ? url : null, fetcher);

  return { data, error, isLoading, setApiUrl };
}
