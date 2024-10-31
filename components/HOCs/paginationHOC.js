import { useState, useEffect } from "react";
import getMovies from "@/services/getMovies";
import LoadMoreButton from "@/components/modules/LoadMoreButton/LoadMoreButton";

function paginationHOC(OrginalComponent) {
  function NewComponent(props) {
    const [url, setUrl] = useState("");
    const [items, setItems] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [pageCount, setPageCount] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { apiPath, apiQueris, sortBy } = props;

    // Fetch data
    const fetchData = async (isReplaceItems) => {
      if (url === "") {
        return;
      }
      // Fetching
      const apiRes = await getMovies(
        url,
        `page=${pageCount}${sortOption ? `&sort_by=${sortOption}` : ""}${
          apiQueris ? `${apiQueris}` : ""
        }`
      );
      // If response is OK =>
      if (apiRes.status === 200) {
        setTotalPages(apiRes.data.total_pages);
        if (!isReplaceItems) {
          // Add items ti array
          setItems((prevItems) => [...prevItems, ...apiRes.data.results]);
        } else {
          // Replace sorted items
          setItems(() => [...apiRes.data.results]);
        }
      } else {
      }
    };

    // first config
    useEffect(() => {
      setUrl(apiPath);
      setSortOption(sortBy);
    }, []);
    // sorting handler
    useEffect(() => {
      setUrl(apiPath);
      fetchData(true);
      setTotalPages(1);
      setPageCount(1);
    }, [sortOption]);
    // Change url handler
    useEffect(() => {
      fetchData();
    }, [pageCount, url]);
    return (
      <>
        <OrginalComponent
          {...props}
          items={items}
          setSortOption={setSortOption}
        />
        {totalPages > pageCount && totalPages !== pageCount && (
          <LoadMoreButton
            nextPageHandler={() =>
              setPageCount((prev) => {
                if (prev < totalPages) {
                  return prev + 1;
                }
              })
            }
          />
        )}
      </>
    );
  }
  return NewComponent;
}

export default paginationHOC;
