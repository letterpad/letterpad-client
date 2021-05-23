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
          padding: var(--space-sm) var(--space-lg);
          border-radius: var(--radius);
          color: var(--color-pre-fg);
          @media (max-width: 900px) {
            padding: var(--space-xs) var(--space-sm);
          }

          .site-title,
          .site-description {
            padding: 0px;
            margin: 0px;
            font-size: var(--text-xxxl);
            @media (max-width: 900px) {
              font-size: var(--text-xxl);
            }
          }
          .site-description {
            margin-top: var(--space-sm);
            font-size: var(--text-md);
            color: var(--color-text-dull);
            max-width: 400px;
            font-family: system-ui;
            line-height: 27px;
            font-weight: 500;
            font-style: italic;
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
