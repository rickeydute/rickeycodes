// Types specific to this query

export type ImageWidth =
    | "P0"
    | "P25"
    | "P34"
    | "P50"
    | "P66"
    | "P100";

export type ImagePosition = "left" | "right";

export type MarginSize =
    | "M10"
    | "M20"
    | "M30"
    | "M40"
    | "M50"
    | "M60"
    | "M70"
    | "M80"
    | "M90"
    | "M100";

export type Element = 
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p";
    

export type Alignment = "left" | "center" | "right";
export type CtaSize = "sm" | "md" | "lg" | "fullWidth";
export type CtaVariant = "primary" | "secondary" | "ghost";

export interface ImageAsset {
    url: string;
    width: number;
    height: number;
}

export interface RichTextBody {
    html: string;
}

// Block: ImageContentRow
export interface ImageContentRowBlock {
    __typename: "ImageContentRow";
    id: string;
    internalName?: string | null;
    headingElement?: Element;
    headingAlign?: Alignment;
    headingHeader?: string | null;
    body?: RichTextBody | null;
    image?: ImageAsset | null;
    imagePosition?: ImagePosition;
    imageWidth?: ImageWidth;
    ctaLabel?: string | null;
    ctaHref?: string | null;
    ctaAlignment?: Alignment;
    ctaSize?: CtaSize;
    ctaVariant?: CtaVariant;
}

// Block: Spacer
export interface SpacerBlock {
    __typename: "Spacer";
    id: string;
    internalName?: string | null;
    marginSize?: MarginSize | null;
    showDivider?: boolean | null;
}

//Block: CTA Button
export interface CtaButtonBlock {
    __typename: "CtaButton";
    id: string;
    internalName?: string | null;
    label?: string | null;
    href?: string | null;
    variant?: CtaVariant;
    size?: CtaSize;
    align?: Alignment;
    newTab?: boolean | null;
}

//Block: Heading
export interface HeadingBlock {
    __typename: "Heading";
    id: string;
    internalName?: string | null;
    heading?: string | null;
    element?: Element;
    align?: Alignment;
}

export type PageBlock = ImageContentRowBlock | SpacerBlock | CtaButtonBlock | HeadingBlock ;

export interface Page {
    id: string;
    title: string;
    slug: string;
    blocks: PageBlock[];
}

export interface PageBySlugResponse {
    page: Page | null;
}

// GraphQL query

export const GET_PAGE_BY_SLUG = `
    query PageBySlug($slug: String!) {
        page(where: { slug: $slug }) {
            id
            title
            slug
            blocks {
                __typename
                ... on ImageContentRow {
                    id
                    internalName
                    headingElement
                    headingAlign
                    headingHeader
                    body {
                        html
                    }
                    image {
                        url
                        width
                        height
                    }
                    imagePosition
                    imageWidth
                    ctaLabel
                    ctaHref
                    ctaAlignment
                    ctaSize
                    ctaVariant
                }
                ... on Spacer {
                    id
                    internalName
                    marginSize
                    showDivider
                }
                ... on CtaButton {
                    id
                    internalName
                    label
                    href
                    size
                    align
                    newTab
                }
                ... on Heading {
                    id
                    internalName
                    heading
                    element
                    align
                }
            }
        }
    }
`;
