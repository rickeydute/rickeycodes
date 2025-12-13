import { HeroImageBlock as HeroImageBlockType } from "@/lib/cms/types/page";
import { ContentImage } from "../ContentImage";
import { CtaButton } from "../CtaButton/CTA";
import Styles from "./HeroImage.module.scss";


interface HeroImageProps {
    block: HeroImageBlockType;
}

export function HeroImage({ block }: HeroImageProps) {
    const {
        internalName,
        title,
        subtitle,
        body,
        image,
        align = "left",
        fullHeight,
        showOverlay = false,
        ctaLabel,
        ctaHref,
        ctaSize,
        ctaVariant,
    } = block;

    const heroClassName = [
        Styles.hero,
        fullHeight ? Styles.fullHeight : "",
    ]
        .filter(Boolean)
        .join(" ");
    
    const alignClass = 
        align === "center"
            ? "u-text-center"
            : align === "right"
            ? "u-text-right"
            : "u-text-left";
    
    const ctaAlign: "left" | "center" | "right" = 
        align === "center"
            ? "center"
            : align === "right"
            ? "right"
            : "left";

    const ctaVariantClass: "primary" | "secondary" | "ghost" =
        ctaVariant === "secondary"
            ? "secondary"
            : ctaVariant === "ghost"
            ? "ghost"
            : "primary";

    const ctaSizeClass: "sm" | "md" | "lg" | "fullWidth" =
        ctaSize === "sm"
            ? "sm"
            : ctaSize === "lg"
            ? "lg"
            : ctaSize === "fullWidth"
            ? "fullWidth"
            : "md";

    const altText = `${title || internalName || "Hero image"}`;

    return (
        <section className={heroClassName}>
            <div className={Styles.media}>
                {image && (
                    <ContentImage 
                        src={image.url}
                        alt={altText}
                        width={image.width}
                        height={image.height}
                        className={Styles.image}
                        priority={true}
                    />
                )}
                {showOverlay && <div className={Styles.overlay} />}
            </div>
            <div className={`${Styles.content} ${alignClass}`}>
                {title && (
                    <h1 className={`h1 ${Styles.title}`}>
                        {title}
                    </h1>
                )}
                {subtitle && (
                    <p className={`h3 ${Styles.subtitle}`}>
                        {subtitle}
                    </p>
                )}
                {body?.html && (
                    <div 
                        className="richtext"
                        dangerouslySetInnerHTML={{ __html: body.html }}
                    />
                )}

                {ctaLabel && ctaHref && (
                    <div className={Styles.ctaWrapper}>
                        <CtaButton 
                            label={ctaLabel}
                            href={ctaHref}
                            variant={ctaVariantClass}
                            size={ctaSizeClass}
                            align={ctaAlign}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}