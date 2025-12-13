import type { ImgHTMLAttributes } from "react";
import { buildHygraphSrcSet } from "@/lib/hygraphImage";

type NativeImgProps = ImgHTMLAttributes<HTMLImageElement>;

type ContentImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    srcSet?: string;
    sizes?: string;
} & Omit<
    NativeImgProps,
        |"src"
        | "alt"
        | "width"
        | "height"
        | "srcSet"
        | "sizes"
        | "loading"
        | "fetchPriority"
    >;

export function ContentImage({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    srcSet,
    sizes,
    ...rest
}: ContentImageProps) {
    const loading: NativeImgProps["loading"] = priority ? "eager" : "lazy";
    const fetchPriority: NativeImgProps["fetchPriority"] = priority ? "high" : "auto";
    const autoSrcSet = srcSet ?? buildHygraphSrcSet(src);
    const defaultSizes = 
        autoSrcSet
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            : undefined;
    const finalSizes = sizes ?? defaultSizes;

    return (
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            fetchPriority={fetchPriority}
            srcSet={autoSrcSet}
            sizes={finalSizes}
            decoding="async"
            className={className}
            {...rest}
        />
    );
}