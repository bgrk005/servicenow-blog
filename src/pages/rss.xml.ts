import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: any) {
  const posts = await pagesGlobToRssItems(import.meta.glob('../content/posts/*.mdx'));
  return rss({
    title: 'ServiceNow Tech Blog',
    description: 'Insights and tutorials about ServiceNow development.',
    site: context.site,
    items: posts.map((item: any) => ({
      ...item,
      pubDate: new Date(item.data.pubDate),
    })),
  });
}
