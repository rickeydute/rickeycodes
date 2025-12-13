import { hygraphQuery } from "@/lib/hygraph";
import { Page, PageBySlugResponse } from "@/lib/cms/types/page";
import { heroImageFragment } from "@/lib/cms/fragments/heroImage_fields";
import { headingFragment } from "@/lib/cms/fragments/heading_fields";
import { ctaButtonFragment } from "@/lib/cms/fragments/ctaButton_fields";
import { spacerFragment } from "@/lib/cms/fragments/spacer_fields";
import { imageContentRowFragment } from "@/lib/cms/fragments/imageContentRow_fields";

// GraphQL query

export const GET_PAGE_BY_SLUG = `
    query PageBySlug($slug: String!) {
        page(where: { slug: $slug }) {
            id
            title
            slug
            blocks(first: 100) {
                __typename
                ... on ImageContentRow {
                    ...ImageContentRowFields
                }
                ... on Spacer {
                    ...SpacerFields
                }
                ... on CtaButton {
                    ...CtaButtonFields
                }
                ... on Heading {
                    ...HeadingFields
                }
                ... on HeroImage {
                    ...HeroImageFields
                }
            }
        }
    }

    ${heroImageFragment}
    ${headingFragment}
    ${ctaButtonFragment}
    ${spacerFragment}
    ${imageContentRowFragment}

`;

export async function getPageBySlug(slug: string): Promise<Page | null> {
    const data = await hygraphQuery<PageBySlugResponse>(GET_PAGE_BY_SLUG, {
        slug,
    });

    return data.page;
}