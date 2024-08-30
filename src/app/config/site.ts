type SiteConfig = {
  name: string,
  description: string,
  url: string,
  ogImage: string,
  links: {
    twitter: string;
    github: string;
  }
};

export const siteConfig: SiteConfig = {
  name: 'Jihodaddy Blog',
  description: 'An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.',
  url: 'https://next-blog-jiho.vercel.app/',
  ogImage: 'https://next-blog-jiho.vercel.app/og',
  links: {
    twitter: 'https://google.com',
    github: 'https://github.com/jihodaddy'
  }
}