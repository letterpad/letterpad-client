import gql from "graphql-tag";
import { PostDetailsFragment } from "lib/graphql";
import { getImageAttrs, setResponsiveImages } from "lib/imageUtils";
import Head from "next/head";
import Link from "next/link";
import { postStyles, postWrapperStyles, headerStyles } from "./post.css";
// import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";
// if (typeof global !== "undefined") {
//   Object.assign(global, { _JSXStyle });
// }

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

  return (
    <>
      <Head>
        <title>{postDetails.title}</title>
      </Head>
      <div className="floating-header">
        <div>
          <div className="floating-header-logo">
            {/* <a href="https://eueung.github.io/">
              {settings.site_logo.src ? (
                <img src={settings.site_logo.src} alt={postDetails.title} />
              ) : (
                settings.site_title
              )}
            </a> */}
          </div>
          <span className="floating-header-divider">—</span>
          <div className="floating-header-title">{postDetails.title}</div>
        </div>
      </div>

      <div className="inner">
        <div className="post-full post">
          <header className="post-full-header">
            <section className="post-full-meta">
              <time
                className="post-full-meta-date"
                dateTime={postDetails.publishedAt}
              >
                {postDetails.publishedAt}
              </time>
              <span className="separator">|</span>
              <span>{postDetails.reading_time}</span>
            </section>
            <h1 className="post-full-title">{postDetails.title}</h1>
            <div className="tags-wrapper">
              {postDetails.tags.map((tag) => (
                <span className="tag">
                  <Link href={tag.slug}>{"#" + tag.name}</Link>
                </span>
              ))}
            </div>
          </header>
          <img
            className={"post-full-image " + "className"}
            {...imgAttrs}
            alt={postDetails.title}
          />

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
      <style jsx>{headerStyles}</style>
      <style jsx>{postWrapperStyles}</style>
    </>
  );
}
