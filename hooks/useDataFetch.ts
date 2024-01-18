"use client";

import React, { useEffect, useState } from "react";

const useDataFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const mapData = (rawData: any) => {
    // map the raw data to array of objects containing required information. Filter for only images or YouTube videos.
    return (
      rawData
        // .filter(
        //   (article: any) =>
        //     article.urlToImage || article.source.name === "YouTube"
        // )
        .map((article: any) => {
          const copy = { ...article };
          // if (article.source.name === "YouTube") {
          //   copy.videoId = article.url.split("=")[1];
          // }
          copy.image = article.images?.[0]?.url ?? "";
          copy.url = article.links?.web?.href ?? "";
          return copy;
        })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const rawData = await res.json();
        console.log("raw data", rawData);
        const articles = rawData.articles ?? [];

        if (!articles) {
          setError("Could not find any articles. Please try again.");
        } else {
          setData(mapData(articles));
        }
      } catch (err: any) {
        console.log("error", err?.message);
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useDataFetch;
