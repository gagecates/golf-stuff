"use client";

import Articles from "@/components/Articles";
import ErrorView from "@/components/ErrorView";
import SkeletonLoader from "@/components/SkeletonLoader";
import useDataFetch from "@/hooks/useDataFetch";

const Golf = () => {
  const url = "https://newsapi.org/v2/everything?q=golf";
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

export default Golf;
