import React from "react";
import { styles } from "./ArticleItem.css";
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
  console.log(post);
  return (
    <>
      <div className={rootClass.join(" ")}>
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
              <div className="post-card-meta-author">
                {post.author.avatar && (
                  <img
                    className="author-profile-image"
                    src={post.author.avatar}
                    alt="Author"
                  />
                )}
                <span className="post-card-author">{post.author.name}</span>
              </div>
              {/* <div>
                <span className="post-card-readtime">
                  {post.reading_time.replace("read", "")}
                </span>
              </div> */}
            </div>
            <div>
              {dateFormat(post.publishedAt)}
              &nbsp;·&nbsp;
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
