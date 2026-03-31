Fetch the latest blog posts from the Soro embed script and update the site.

1. Fetch `https://app.trysoro.com/api/embed/bf69d648-a307-407f-852e-6a056978993c` using WebFetch
2. Extract the full `SORO_ARTICLES` array — get every post's slug, title, excerpt, date, and image URL exactly as they appear
3. Rewrite `/Users/macpro/dev1/amsterdamchiropractic/lib/blog-posts.ts` with the updated list using this exact format:

```ts
export const blogPosts = [
  {
    slug: '...',
    title: '...',
    excerpt: '...',
    date: 'YYYY-MM-DD',
    image: '...',
  },
  // ... all posts
];
```

4. Confirm how many posts were found and list their titles.

Note: The sitemap and individual post pages auto-update from this file — no other changes needed.
