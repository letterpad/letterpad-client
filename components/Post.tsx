import gql from "graphql-tag";
import { PostDetailsFragment } from "lib/graphql";
import { getImageAttrs, setResponsiveImages } from "lib/imageUtils";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import "tiny-js-modal/dist/tiny-js-modal.min.css";
import { dateFormat } from "lib/utils";
import Comments from "./comments";

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
      <div>
        <header className="mb-12">
          <h1 className="md:text-5xl text-3xl font-bold">
            {postDetails.title}
          </h1>

          <section className="mt-8">
            <div className="flex items-center">
              {postDetails.author.avatar && (
                <img
                  className="w-12 h-12 rounded-full mr-2"
                  src={postDetails.author.avatar}
                  alt={`Avatar of ${postDetails.author.name}`}
                />
              )}
              <div>
                <p className="text-gray-900 leading-none text-md">
                  {postDetails.author.name}
                </p>
                <div className="mt-2 text-xs">
                  <time
                    className="post-full-meta-date"
                    dateTime={postDetails.publishedAt}
                  >
                    {dateFormat(postDetails.publishedAt)}
                  </time>
                  <span className="separator">·</span>
                  <span>{postDetails.reading_time}</span>
                </div>
              </div>
            </div>
          </section>
          <div className="tags-wrapper mt-4">
            {postDetails.tags.map((tag) => (
              <span className="tag">
                <Link href={tag.slug}>
                  <span className="cursor-pointer inline-block rounded-full text-gray-600 bg-gray-100 px-2 py-1 text-xs font-bold mr-3">
                    {tag.name}
                  </span>
                </Link>
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
          <article className="post-content  lg:prose-lg prose dark:prose-light">
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
        <Comments id={postDetails.id} url={postDetails.slug} />
      </div>

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
