interface IImageAttrs {
  src: string;
  sizes?: string;
  "data-srcset"?: string;
  srcSet?: string;
  width: string;
  loading: "lazy";
  className?: string;
}
export type IImageAttrsResult = IImageAttrs | null;

export function makeCloudinaryImage(src: string, width: number) {
  return `${makeCloudinaryUrl(src, width)} ${width}w`;
}

export function makeCloudinaryUrl(src, width) {
  const replace = /image\/upload\/(.*)\/blog-images/;
  return src.replace(
    replace,
    `image/upload/q_auto,f_auto,w_${width}/v1/blog-images`,
  );
}

export function makeUnsplashImage(src: string, width: number, extras = "") {
  return `${makeUnsplashUrl(src, width, extras)} ${width}w`;
}

export function makeUnsplashUrl(src: string, width: number, extras = "") {
  const url = new URL(src);
  const baseUrl = `${url.protocol}//${url.hostname}${url.pathname}`;
  return `${baseUrl}?w=${width}&auto=format&lossless=true${extras}`;
}

export async function makeBase64Url(requestURL: string) {
  const response = await fetch(requestURL);
  //@ts-ignore
  const arrayBuffer = await response.buffer();
  const b64 = arrayBuffer.toString("base64");
  return `data:${response.headers.get("content-type")};base64,${b64}`;
}

export const getImageAttrs = (
  src: string,
  sizes?: number[],
  srcSizes?: string,
): IImageAttrsResult => {
  if (!src)
    return {
      src: "",
      loading: "lazy",
      width: "100%",
      className: "",
    };
  if (!sizes) sizes = [480, 720, 960, 1200, 1440, 1600, 2000];
  if (!srcSizes) srcSizes = `(max-width: 720px) 100vw, 720px`;
  const base64Url = makeCloudinaryUrl(src, 30);
  if (src.startsWith("/")) {
    return {
      src,
      loading: "lazy",
      width: "100%",
      className: "",
    };
  }
  const url = new URL(src);

  if (url.hostname.includes("cloudinary")) {
    const srcSet = sizes.map((w) => makeCloudinaryImage(src, w)).join(", ");
    return {
      src: makeCloudinaryUrl(src, sizes[sizes.length - 1]),
      sizes: srcSizes,
      "data-srcset": srcSet,
      srcSet: base64Url,
      width: "100%",
      loading: "lazy",
      className: "lazyload",
    };
  }

  if (url.hostname.includes("unsplash")) {
    const base64Url = makeUnsplashUrl(src, 30);
    const srcSet = sizes.map((w) => makeUnsplashImage(src, w)).join(", ");
    return {
      src: makeUnsplashUrl(src, sizes[sizes.length - 1]),
      sizes: srcSizes,
      "data-srcset": srcSet,
      srcSet: base64Url,
      loading: "lazy",
      className: "lazyload",
      width: "100%",
    };
  }
  return {
    src,
    loading: "lazy",
    width: "100%",
  };
};

export const setResponsiveImages = (html: string, sizes?: number[]) => {
  if (!sizes) sizes = [480, 720, 960, 1200, 1440, 1600, 2000];

  const re = /<img\s+[^>]*src="([^"]*)"[^>]*>/g;
  return html.replace(re, (str, src) => {
    const attrs = getImageAttrs(src, sizes);
    if (Object.keys(attrs).length > 0) {
      let attrString = "";
      Object.keys(attrs).forEach((key) => {
        attrString += `${key}='${attrs[key]}' `;
      });
      return str.replace(`src="${src}"`, attrString);
    }
    return str;
  });
};
