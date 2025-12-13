import { 
    PageBlock,
    ImageContentRowBlock,
    SpacerBlock,
    CtaButtonBlock,
    HeadingBlock as HeadingBlockType,
    HeroImageBlock as HeroImageBlockType,
} from "@/lib/cms/types/page";

import { ImageContentRow } from "./ImageContentRow";
import { Spacer } from "./Spacer";
import { CtaBlock } from "./CtaButton";
import { HeadingBlock } from "./Heading";
import { HeroImage } from "./HeroImage";

interface BlockRendererProps {
    block: PageBlock;
}

export function BlockRenderer({ block }: BlockRendererProps) {
    switch (block.__typename) {
        case "ImageContentRow":
            return <ImageContentRow block={block as ImageContentRowBlock} />
        
        case "Spacer":
            return <Spacer block={block as SpacerBlock} />

        case "CtaButton":
            return <CtaBlock block={block as CtaButtonBlock} />

         case "Heading":
             return <HeadingBlock block={block as HeadingBlockType} />

        case "HeroImage":
            return <HeroImage block={block as HeroImageBlockType} />

        default:
            return null;
    }
}