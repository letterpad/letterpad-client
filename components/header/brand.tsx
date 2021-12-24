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
  imgAttrs.className += " banner";
  return (
    <>
      {imgAttrs.src && (
        <img className="banner" {...imgAttrs} alt={title} height="100%" />
      )}
      <style jsx>{`
        :global(.banner) {
          height: 100%;
          object-fit: cover;
          width: 100%;
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
          padding: var(--space-sm) var(--space-lg);
          border-radius: var(--radius);
          color: var(--color-pre-fg);
          @media (max-width: 900px) {
            padding: var(--space-sm);
          }

          .site-title,
          .site-description {
            padding: 0px;
            margin: 0px;
            font-size: var(--text-xxxl);
            color: var(--color-text);
            font-family: sans-serif;
            @media (max-width: 900px) {
              font-size: var(--text-xxl);
            }
          }
          .site-description {
            margin-top: var(--space-xs);
            font-size: var(--text-sm);
            color: var(--color-text-dull);
            max-width: 400px;
            font-family: system-ui;
            line-height: var(--text-md);
            font-weight: 500;
            @media (max-width: 900px) {
              font-size: var(--text-sm);
              line-height: var(--text-md);
            }
          }
        }

        .site-brand-text {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default Brand;
