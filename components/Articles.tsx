"use client";

import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";

const Articles = ({ data }: { data: any }) => {
  const onReady = (event: any) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    // player.playVideo();
  };

  const onError = (error: any) => {
    console.error("YouTube Player Error:", error);
  };

  return (
    <>
      {data.map((article: any) => (
        <div
          key={`article-${article.publishedAt}`}
          className="flex flex-col max-w-2xl items-center bg-white rounded-xl p-4 w-full"
        >
          {article.videoId ? (
            <YouTube
              videoId={article.videoId}
              onReady={onReady}
              onError={onError}
              className="w-auto"
            />
          ) : (
            <Image
              src={article.urlToImage}
              alt="Headline Image"
              className="rounded-lg"
              width={800}
              height={800}
            />
          )}
          <div className="flex flex-col gap-6 items-center">
            <div className="text-xl font-bold mt-2">{article.title}</div>
            <div>{article.description}</div>
            <Link
              href={article.url}
              className="bg-blue-400 rounded-2xl py-1 px-2"
              target={"_blank"}
            >
              See the full story
            </Link>
            <div className="flex gap-2 text-sm text-gray-500">
              <span>{article.author}</span>
              <span>.</span>
              <span>{article.publishedAt}</span>
            </div>
            <div className="text-gray-500 text-sm">
              <span>Source:</span> <span>{article.source?.name ?? "ESPN"}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
