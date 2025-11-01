import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");
  return rss({
    title: "ServiceNow Tech Blog",
    description: "Latest posts and insights on ServiceNow development.",
    site: "https://bgrk005.github.io/servicenow-blog/",
    items: posts.map((post) => ({
      link: `/posts/${post.slug}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
    })),
  });
}
