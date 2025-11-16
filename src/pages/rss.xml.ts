import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");
  const feed = await rss({
    title: "ServiceNow Tech Blog",
    description: "Latest posts and insights on ServiceNow development.",
    site: context.site ?? "https://bgrk005.github.io/servicenow-blog/",
    items: posts.map((post) => ({
      link: `/posts/${post.slug}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
    })),
  });

  return new Response(feed.body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
