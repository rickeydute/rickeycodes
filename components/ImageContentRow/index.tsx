import { ImageContentRowBlock, ImageWidth } from "@/lib/cms/queries/pageBySlug";
import { Heading } from "../Heading/Heading";
import { CtaButton } from "../CtaButton/CTA";
import Styles from "./ImageContentRow.module.scss";

const WIDTH_MAP: Record<ImageWidth, number> = {
    P0: 0,
    P25: 25, 
    P34: 34, 
    P50: 50, 
    P66: 66,
    P100: 100,
}; 

interface Props {
    block: ImageContentRowBlock;
}

export function ImageContentRow({ block }: Props) {
    const {
        headingHeader, 
        body,
        headingElement,
        headingAlign,
        image,
        roundImage,
        imagePosition = "left",
        imageWidth = "P50",
        ctaLabel,
        ctaHref,
        ctaAlignment,
        ctaSize,
        ctaVariant
    } = block;

    const imagePercent = WIDTH_MAP[imageWidth] ?? 50;
    const textPercent = 100 - imagePercent;

    const showImage = image && imagePercent > 0;
    const showText = textPercent > 0;

    const isImageLeft = imagePosition === "left";
    const imageStyle = showImage
        ? { flexBasis: `${imagePercent}%`, maxWidth: `${imagePercent}` }
        : { display: "none" };

    const textStyle = showText
        ? { flexBasis: `${textPercent}%`, maxWidth: `${textPercent}` }
        : { flexBasis: "100%", maxWidth: "100%" };

    const imageClassName = roundImage
        ? `${Styles.image} ${Styles.imageRound}`
        : Styles.image;


    return (
        <section className={Styles.row} style={{ flexDirection: isImageLeft ? "row" : "row-reverse" }}>
            <div className={Styles.imageCol} style={imageStyle}>
                {showImage && (
                    <div className={Styles.imageWrapper}>
                        <img src={image!.url} alt={headingHeader || block.internalName || "Image"} className={imageClassName} />
                    </div>
                )}
            </div>
            <div className={Styles.textCol} style={textStyle}>
                {showText && (
                    <>
                        {headingHeader && (
                            <Heading element={headingElement} align={headingAlign} className={Styles.heading}>
                                {headingHeader}
                            </Heading>
                        )}
                        {body?.html && (
                            <div className={Styles.body} dangerouslySetInnerHTML={{ __html: body.html }} />
                        )}
                    </>
                )}
                {ctaLabel && ctaHref && (
                    <div className={Styles.ctaWrapper}>
                        <CtaButton 
                            label={ctaLabel}
                            href={ctaHref}
                            variant={
                                ctaVariant === "secondary"
                                ? "secondary"
                                : ctaVariant === "ghost"
                                ? "ghost"
                                : "primary"
                            }
                            size={
                                ctaSize === "sm"
                                ? "sm"
                                :ctaSize === "lg"
                                ? "lg"
                                :ctaSize === "fullWidth"
                                ? "fullWidth"
                                :"md"
                            }
                            align={
                                ctaAlignment === "center"
                                    ? "center"
                                    : ctaAlignment === "right"
                                    ? "right"
                                    : "left"
                            }
                        />
                    </div>
                )}
            </div>
        </section>
    )
}