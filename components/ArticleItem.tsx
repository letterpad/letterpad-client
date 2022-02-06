import React from "react";
import Link from "next/link";
import { getImageAttrs } from "lib/imageUtils";
import { dateFormat } from "lib/utils";

interface IArticleItem {
  post: any;
  isHome?: boolean;
}

const ArticleItem = (props: IArticleItem) => {
  const { post, isHome } = props;
  const { className, ...imgAttrs } = getImageAttrs(post.cover_image.src);
  const hasCoverImage = !!post.cover_image.src;

  const rootClass = ["post-card", "post"];
  if (hasCoverImage) {
    rootClass.push("with-cover-image");
  } else {
    rootClass.push("without-cover-image");
  }

  if (isHome) {
    rootClass.push("home");
  }

  return (
    <Link href={post.slug}>
      <div className="w-full lg:flex mb-8 cursor-pointer">
        <div className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img
            className={"h-full object-cover " + className}
            {...imgAttrs}
            alt={post.title}
          />
        </div>
        <div className="border-r border-b border-l border-gray-200 dark:border-gray-800 lg:border-l-0 lg:border-t lg:border-grey-light bg-white dark:bg-slate-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-xs flex items-center text-sky-500 uppercase mb-2 gap-2">
              {post.tags.map((tag) => (
                <Link href={tag.slug} key={tag.name}>
                  <span>{tag.name}</span>
                </Link>
              ))}
            </p>
            <h1 className="font-bold text-xl mb-6">{post.title}</h1>
            <p className="text-gray-400 text-base">{post.excerpt}</p>
          </div>
          <div className="flex items-center justify-between flex-row">
            <div className="flex flex-row items-center">
              {post.author.avatar && (
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={post.author.avatar}
                  alt={`Avatar of ${post.author.name}`}
                />
              )}
              <div className="text-sm">
                <p className="leading-none">{post.author.name}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                {dateFormat(post.publishedAt)}
                <span className="separator mx-1">·</span>
                <span className="post-card-readtime">
                  {post.reading_time.replace("read", "")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleItem;
