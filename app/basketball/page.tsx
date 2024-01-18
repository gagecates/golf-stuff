"use client";

import Articles from "@/components/Articles";
import ErrorView from "@/components/ErrorView";
import SkeletonLoader from "@/components/SkeletonLoader";
import useDataFetch from "@/hooks/useDataFetch";

const Basketball = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&q=basketball";
  const { data, loading, error } = useDataFetch(url);

  if (error) {
    return <ErrorView message={error} />;
  }

  return (
    <main className="flex flex-col items-center w-full py-6 gap-4">
      {loading ? <SkeletonLoader /> : <Articles data={data} />}
    </main>
  );
};

export default Basketball;
