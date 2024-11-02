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

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(apiUrl.value ? url : null, fetcher);

  return { data, error, isLoading, setApiUrl };
}
