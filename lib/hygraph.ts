const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

if (!HYGRAPH_ENDPOINT) {
    console.warn("HYGRAPH_ENDPOINT is not set in environment variables.");
}

type GraphQLVariables = { [key: string]: any };

export async function hygraphQuery<T>(
    query: string,
    variables: GraphQLVariables = {}
): Promise<T> {
    if (!HYGRAPH_ENDPOINT) {
        throw new Error("HYGRAPH_ENDPOINT is missing.");
    }

    const res = await fetch(HYGRAPH_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(HYGRAPH_TOKEN && { Authorization: `Bearer ${HYGRAPH_TOKEN}` }),
        },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 60 },
    });

    const json = await res.json();

    if (!res.ok || json.errors) {
        console.error("Hygraph error:", json.errors || json);
        throw new Error("Failed to fetch data from Hygraph");
    }

    return json.data as T;
}
