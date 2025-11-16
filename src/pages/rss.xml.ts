import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { withBase } from '../utils/url';

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");
  const site = context.site ?? 'https://bgrk005.github.io';
  const feed = await rss({
    title: "ServiceNow Tech Blog",
    description: "Latest posts and insights on ServiceNow development.",
    site,
    items: posts.map((post) => ({
      link: withBase(`/posts/${post.slug}/`),
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
