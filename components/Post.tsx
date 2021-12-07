import gql from "graphql-tag";
import { PostDetailsFragment } from "lib/graphql";
import { getImageAttrs, setResponsiveImages } from "lib/imageUtils";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { galleryStyles, postStyles, postWrapperStyles } from "./post.css";
import "tiny-js-modal/dist/tiny-js-modal.min.css";
import { dateFormat } from "lib/utils";

export const postDetailsFragment = gql`
  fragment postDetails on Post {
    id
    slug
    title
    reading_time
    html
    publishedAt
    updatedAt
    excerpt
    tags {
      name
      slug
    }
    author {
      name
      avatar
    }
    cover_image {
      src
    }
  }
`;

export function Post({ postDetails }: { postDetails: PostDetailsFragment }) {
  const content = setResponsiveImages(postDetails.html);
  const imgAttrs = getImageAttrs(postDetails.cover_image.src);

  useEffect(() => {
    const modalImg: HTMLImageElement = document.querySelector("#tjm img");
    document
      .querySelectorAll(".gallery img")
      .forEach((img: HTMLImageElement) => {
        img.onclick = function () {
          modalImg.src = img.src;

          //@ts-ignore
          if ("tjmOpen" in window) tjmOpen();
        };
      });
    document.addEventListener("keyup", function (e) {
      if (e.key === "Escape") {
        //@ts-ignore
        tjmClose();
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>{postDetails.title}</title>
      </Head>
      <div className="container-fixed-narrow">
        <div className="post-full post">
          <header className="post-full-header">
            <h1 className="post-full-title">{postDetails.title}</h1>

            <section className="post-full-meta">
              <div className="post-card-meta-author">
                {postDetails.author.avatar && (
                  <img
                    className="author-profile-image"
                    src={postDetails.author.avatar}
                    alt="Author"
                  />
                )}
                <span className="post-card-author">
                  {postDetails.author.name}
                </span>
              </div>
              <span className="separator">·</span>
              <time
                className="post-full-meta-date"
                dateTime={postDetails.publishedAt}
              >
                {dateFormat(postDetails.publishedAt)}
              </time>

              <span className="separator">·</span>
              <span>{postDetails.reading_time}</span>
            </section>
            <div className="tags-wrapper">
              {postDetails.tags.map((tag) => (
                <span className="tag">
                  <Link href={tag.slug}>{"#" + tag.name}</Link>
                </span>
              ))}
            </div>
          </header>
          {imgAttrs.src && (
            <img
              {...imgAttrs}
              className={imgAttrs.className + " post-full-image "}
              alt={postDetails.title}
            />
          )}

          <section className="post-full-content">
            <article className="post-content">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          </section>

          {/* <footer className="post-full-footer">
            {displayAuthor && <Author post={post} />}
          </footer>

          <Comments
            disqusConfig={disqusConfig}
            disqusShortname={disqusShortname}
          /> */}
        </div>
      </div>
      <style jsx global>
        {postStyles}
      </style>
      <style jsx>{postWrapperStyles}</style>
      <style jsx>{galleryStyles}</style>

      <div id="tjm" className="tjm">
        <div className="tjm-c" style={{ maxWidth: 600 }}>
          <span
            title="Close"
            onClick={() => {
              if (typeof window !== "undefined" && "tjmClose" in window) {
                //@ts-ignore
                window.tjmClose();
              }
            }}
            className="tjm-cb"
            role="button"
            tabIndex={0}
          >
            Close
          </span>
          <br />
          <img className="modal-image" alt="gallery image" />
        </div>
      </div>
    </>
  );
}
