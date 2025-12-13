import { HeadingBlock as HeadingBlockType } from "@/lib/cms/types/page";
import { Heading } from "./Heading";

interface Props {
    block: HeadingBlockType;
}

export function HeadingBlock({ block }: Props) {
    const {
        heading, 
        element,
        align,
    } = block;

    if (!heading) return null;

    return (
        <Heading element={element} align={align}>
            {heading}
        </Heading>
    )
        
}