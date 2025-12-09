import { notFound } from "next/navigation";
import { hygraphQuery } from "@/lib/hygraph";
import { GET_PAGE_BY_SLUG, type PageBySlugResponse } from "@/lib/cms/queries/pageBySlug";
import { BlockRenderer } from "@/components/BlockRenderer";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PageBySlug({ params }: PageProps) {
    const { slug } = await params;
    const data = await hygraphQuery<PageBySlugResponse>(GET_PAGE_BY_SLUG, {
        slug,
    })

    const page = data.page;

    if (!page) {
        notFound();
    }

    return (
        <main>
            {page.blocks.map((block) => (
                <BlockRenderer key={block.id} block={block} />
            ))}
        </main>
    )
}