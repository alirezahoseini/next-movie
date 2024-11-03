import { useState, useEffect, useRef } from "react";
import useApi from "@/hooks/useApi";
import LoadMoreButton from "@/components/modules/LoadMoreButton/LoadMoreButton";
import MoviesGridLoader from "../modules/MoviesGrid/MoviesGridLoader";
import GlobalLoader from "../modules/GlobalLoader/GlobalLoader";

function paginationHOC(OrginalComponent) {
  function NewComponent(props) {
    const { data, error, isLoading, setApiUrl } = useApi();
    const [pageConfigs, setPageConfigs] = useState({
      items: [],
      currentPage: 1,
      allPages: 1,
      sortBy: props.sortBy,
      apiQueris: props.apiQueris,
      apiPath: props.apiPath,
      isReplaceData: false,
      isFirstLoad: true,
      isLoadingData: true,
    });

    const getDataFromApi = () => {
      // Fetching
      setApiUrl({
        value: pageConfigs.apiPath,
        queries: `page=${pageConfigs.currentPage}${
          pageConfigs.sortBy ? `&sort_by=${pageConfigs.sortBy}` : ""
        }${pageConfigs.apiQueris ? `${pageConfigs.apiQueris}` : ""}`,
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

    // Sort and currentPage change handler
    useEffect(() => {
      getDataFromApi();
    }, [pageConfigs.currentPage, pageConfigs.sortBy]);

    return (
      <>
        {pageConfigs.items && !error && (
          <>
            <OrginalComponent
              {...props}
              items={pageConfigs.items}
              setSortOption={setPageConfigs}
            />
            <GlobalLoader show={pageConfigs.isLoadingData} />
            {pageConfigs.allPages > pageConfigs.currentPage &&
              pageConfigs.allPages !== pageConfigs.currentPage && (
                <LoadMoreButton
                  nextPageHandler={() =>
                    setPageConfigs((prev) => {
                      if (prev.currentPage < pageConfigs.allPages) {
                        return {
                          ...prev,
                          isLoadingData: true,
                          currentPage: prev["currentPage"] + 1,
                        };
                      } else {
                        return { ...prev };
                      }
                    })
                  }
                />
              )}
          </>
        )}
        {error && (
          <MoviesGridLoader isLoading={isLoading} error={error} data={data} />
        )}
      </>
    );
  }
  return NewComponent;
}

export default paginationHOC;

MoviesGridLoader;
