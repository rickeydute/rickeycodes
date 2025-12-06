// app/page.tsx
import { hygraphQuery } from "@/lib/hygraph";
import { GET_PAGE_BY_SLUG, PageBySlugResponse } from "@/lib/cms/queries/pageBySlug";
import { BlockRenderer } from "@/components/BlockRenderer";

export default async function HomePage() {
    const data = await hygraphQuery<PageBySlugResponse>(GET_PAGE_BY_SLUG, {
        slug: "home",
    });

    const page = data.page;

    if (!page) {
        return (
            <main style={{ minHeight:"70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center", }}>
                <div>
                    <h1>No Homepage found in Hygraph</h1>
                    <p>
                        Create a <strong>Page</strong> entry in the Hygraph with slug{" "}
                        <code>home</code>, then publish it.
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main>
            {page.blocks && page.blocks.length > 0 ? (
                page.blocks.map((block) => (
                    <BlockRenderer key={block.id} block={block} />
                ))
            ) : (
                <section style={{ minHeight: "74vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <p>No blocks yet, add some in Hygraph.</p>
                </section>
            )}
            
        </main>
    );
}
