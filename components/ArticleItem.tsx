import React from "react";
import { styles } from "./ArticleItem.css";
import Link from "next/link";
import { getImageAttrs } from "lib/imageUtils";

interface IArticleItem {
  post: any;
}

const ArticleItem = (props: IArticleItem) => {
  const { post } = props;
  const { className, ...imgAttrs } = getImageAttrs(post.cover_image.src);
  const hasCoverImage = !!post.cover_image.src;

  const rootClass = hasCoverImage ? "with-cover-image" : "without-cover-image";

  return (
    <>
      <div className={"post-card post " + rootClass}>
        {imgAttrs.src && (
          <Link href={post.slug}>
            <a className="post-card-image-link">
              <img
                className={"post-card-image " + className}
                {...imgAttrs}
                alt={post.title}
              />
            </a>
          </Link>
        )}
        <div className="post-card-content">
          <div className="post-card-content-top">
            <Link href={post.slug}>
              <a className="post-card-content-link">
                <header className="post-card-header">
                  <h2 className="post-card-title">{post.title}</h2>
                </header>
                <section className="post-card-excerpt">
                  <p>{post.excerpt}</p>
                </section>
              </a>
            </Link>
          </div>
          <footer className="post-card-meta">
            <div>
              {post.author.avatar && (
                <img
                  className="author-profile-image"
                  src={post.author.avatar}
                  alt="Author"
                />
              )}
              <span className="post-card-author">{post.author.name}</span>
            </div>
            <div>
              <TimeIcon />
              <span className="post-card-readtime">
                {post.reading_time.replace("read", "")}
              </span>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default ArticleItem;

export const TimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      className="cls-1"
      d="M16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,16,25Z"
    />
    <polygon
      className="cls-1"
      points="15 15 9.33 15 9.33 17 17 17 17 8.83 15 8.83 15 15"
    />
  </svg>
);
