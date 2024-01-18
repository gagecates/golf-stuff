const SkeletonLoader = () => {
  return (
    <div className="w-2/3 p-10 flex flex-col gap-6">
      <div className="h-96 bg-gray-500 w-full rounded-xl skeleton-paragraph" />
      <div className="h-20 bg-gray-500 w-full rounded-xl skeleton-paragraph" />
      <div className="h-10 bg-gray-500 w-full rounded-xl skeleton-paragraph" />
      <div className="h-10 bg-gray-500 w-full rounded-xl skeleton-paragraph" />
      {/* Add as many paragraphs as needed */}
    </div>
  );
};

export default SkeletonLoader;
