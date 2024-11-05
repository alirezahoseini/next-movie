"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useApi from "@/hooks/useApi";
import MoviesGrid from "@/components/modules/MoviesGrid/MoviesGrid";
import GlobalLoader from "@/components/modules/GlobalLoader/GlobalLoader";
import LoadMoreButton from "@/components/modules/LoadMoreButton/LoadMoreButton";
import MoviesGridLoader from "@/components/modules/MoviesGrid/MoviesGridLoader";
import { useRouter } from "next/navigation";
import SearchPageHeader from "./SearchPageHeader";

function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get("query");
  const urlPageCount = searchParams.get("page");
  const { data, error, isLoading, setApiUrl } = useApi();
  const [pageConfigs, setPageConfigs] = useState({
    items: [],
    currentPage: urlPageCount || 1,
    allPages: 1,
    apiQueris: search,
    searchedKey: search,
    apiPath: `search/multi`,
    isFirstLoad: true,
    isLoadingData: true,
    isReplaceData: false,
  });

  const updateUrl = () => {
    router.replace(
      `/search?query=${pageConfigs.apiQueris}&page=${pageConfigs.currentPage}`,
      { scroll: false },
      { shallow: true }
    );
  };

  const getDataFromApi = () => {
    // Fetching
    setApiUrl({
      value: pageConfigs.apiPath,
      queries: `query=${pageConfigs.apiQueris}&page=${pageConfigs.currentPage}`,
    });
  };

  const setAndCheckData = (items) => {
    if (pageConfigs.isReplaceData) {
      // Replace items in state
      setPageConfigs((prev) => {
        return {
          ...prev,
          items: [...items],
          isReplaceData: false,
          isLoadingData: false,
          currentPage: 1,
          allPages: 1,
        };
      });
    } else {
      // Add more items to state
      setPageConfigs((prev) => {
        return {
          ...prev,
          isLoadingData: false,
          items: [...prev.items, ...items],
        };
      });
    }
  };

  // Data and errors change handler
  useEffect(() => {
    // Dactive first load
    if (pageConfigs.isFirstLoad) {
      // This code runing only in mounting
      setPageConfigs((prev) => {
        return { ...prev, isFirstLoad: false };
      });
      return;
    } else {
      // This codes runing after  isFirstLoad === FALSE
      // If response is OK =>
      if (data?.results) {
        setAndCheckData(data.results);
        setPageConfigs((prev) => {
          return { ...prev, allPages: data.total_pages };
        });
      }
      if (error) {
        console.log(error);
      }
    }
  }, [data, error]);

  // currentPage change handler
  useEffect(() => {
    getDataFromApi();
    updateUrl();
  }, [pageConfigs.currentPage]);

  return (
    <Suspense>
      {pageConfigs.items && !error && (
        <>
          {/* -------- Main section --------  */}
          <SearchPageHeader
            submitForm={getDataFromApi}
            query={pageConfigs.searchedKey}
            value={pageConfigs.apiQueris}
            setValue={setPageConfigs}
          />
          <MoviesGrid
            items={pageConfigs.items.filter(
              (item) => item.media_type === "movie" || item.media_type === "tv"
            )}
          />
          {/* -------- Main section --------  */}

          {/* -------- Loading section --------  */}
          <GlobalLoader show={pageConfigs.isLoadingData} />
          {/* -------- Loading section --------  */}

          {/* --------- Load more button --------- */}
          {pageConfigs.allPages > pageConfigs.currentPage &&
            pageConfigs.allPages !== pageConfigs.currentPage && (
              <LoadMoreButton
                nextPageHandler={() =>
                  setPageConfigs((prev) => {
                    if (prev.currentPage < pageConfigs.allPages) {
                      return {
                        ...prev,
                        isLoadingData: true,
                        currentPage: Number(++prev["currentPage"]),
                      };
                    } else {
                      return { ...prev };
                    }
                  })
                }
              />
            )}
          {/* --------- Load more button --------- */}
        </>
      )}
      {error && (
        <MoviesGridLoader isLoading={isLoading} error={error} data={data} />
      )}
    </Suspense>
  );
}

export default page;
