/**
 * Build a resized Hygraph asset URL using the URL transformation syntax.
 *
 * Hygraph pattern (from docs):
 *   https://REGION.graphassets.dev/ENV_ID/resize=width:400,height:400/HANDLE
 *
 * We start from a "plain" asset URL, e.g.:
 *   https://REGION.graphassets.dev/ENV_ID/HANDLE
 */

export function buildHygraphResizeUrl(
    url: string,
    width: number,
    height?: number,
): string | null {
    try {
        const u = new URL(url);

        if (!u.hostname.includes("graphassets")) {
            return null;
        }

        const segments = u.pathname.split("/").filter(Boolean);

        if (segments.length !==2) {
            return null;
        }

        const [envId, handle] = segments;

        const resizeParts = [`width:${width}`];
        if (typeof height === "number") {
            resizeParts.push(`height:${height}`);
        }

        const resizeSegment = `resize=${resizeParts.join(",")}`;

        u.pathname = `/${envId}/${resizeSegment}/${handle}`;

        return u.toString();
    } catch {
        return null;
    }
}

/**
 * Build a srcSet string (width descriptors) for a Hygraph image URL.
 *
 * Example output:
 *   "https://.../resize=width:400/... 400w,
 *    https://.../resize=width:800/... 800w,
 *    https://.../resize=width:1200/... 1200w"
 */

export function buildHygraphSrcSet(
    url: string,
    widths: number[] = [400, 800, 1200]
): string | undefined {
    const variants = widths
        .map((w) => {
            const transformed = buildHygraphResizeUrl(url, w);
            if (!transformed) return null;
            return `${transformed} ${w}w`;
        })
        .filter(Boolean) as string[];

        if (!variants.length) {
            return undefined;
        }
    
        return variants.join(", ");
}