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
    <div className="mt-16">
      <Link href={post.slug}>
        <div className="w-full md:max-w-7xl md:flex cursor-pointer">
          <div className="h-48 md:h-auto md:w-64 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden">
            <img
              className={"h-48 object-cover " + className}
              {...imgAttrs}
              alt={post.title}
            />
          </div>
          <div className=" bg-white rounded-b md:p-4 p-4 md:py-2 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-600 font-bold text-xl mb-2">
                {post.title}
              </div>
              <p className="text-gray-700 text-base">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between flex-row">
              <div className="flex items-center">
                {post.author.avatar && (
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={post.author.avatar}
                    alt={`Avatar of ${post.author.name}`}
                  />
                )}
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">
                    {post.author.name}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm">
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
    </div>
  );
};

export default ArticleItem;
