import { getImageAttrs } from "lib/imageUtils";

interface IProps {
  src?: string;
  title?: string;
  description?: string;
  showBanner: boolean;
}

const Brand = ({ src, title, description, showBanner }: IProps) => {
  if (!showBanner) return null;

  const imgAttrs = getImageAttrs(src);
  return (
    <>
      <img className="banner" {...imgAttrs} alt={title} height="100%" />
      <style jsx>{`
        :global(.banner) {
          height: 100%;
          object-fit: cover;
          width: 100vw;
        }
      `}</style>

      <div className="site-brand-text">
        <div className="wrapper">
          {title && <h1 className="site-title">{title}</h1>}
          {description && <h2 className="site-description">{description}</h2>}
        </div>
      </div>
      <style jsx>{`
        .site-brand-text .wrapper {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          background: #0000003b;
          padding: 30px 40px;
          border-radius: 6px;
          color: var(--color-pre-fg);
          @media (max-width: 900px) {
            padding: 10px 20px;
          }

          .site-title,
          .site-description {
            padding: 0px;
            margin: 0px;
            font-size: 4rem;
            @media (max-width: 900px) {
              font-size: 2rem;
            }
          }
          .site-description {
            margin-top: 20px;
            font-size: 1.6rem;
            color: var(--color-text-dull);
            max-width: 400px;
            font-family: system-ui;
            line-height: 27px;
            font-weight: 500;
            font-style: italic;
            @media (max-width: 900px) {
              font-size: 1.4rem;
            }
          }
        }

        .site-brand-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default Brand;
