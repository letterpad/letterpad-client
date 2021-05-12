import gql from "graphql-tag";
import { PostDetailsFragment } from "lib/graphql";
import { setResponsiveImages } from "lib/imageUtils";
import Head from "next/head";
import Link from "next/link";
import { FloatingHeader, StyledPost } from "./post.css";

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
    }
    cover_image {
      src
    }
  }
`;

export function Post({ postDetails }: { postDetails: PostDetailsFragment }) {
  const content = setResponsiveImages(postDetails.html);
  return (
    <>
      <Head>
        <title>{postDetails.title}</title>
      </Head>
      <FloatingHeader className="floating-header">
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
        {/* <Progress height="3px" barColor="#555" /> */}
      </FloatingHeader>

      <StyledPost className="inner">
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
          <figure
            className="post-full-image"
            style={{
              backgroundImage: `url(${postDetails.cover_image.src})`,
            }}
          ></figure>

          <section className="post-full-content">
            {/* <Article post={postDetails} settings={settings} helpers={helpers} /> */}
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
      </StyledPost>
    </>
  );
}
