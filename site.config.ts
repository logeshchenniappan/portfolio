import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '20d974ade26e80e78945ff0f130b78ab',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Logesh C',
  domain: 'logeshc.com',
  author: 'Logesh C',
  seotitle: 'Logesh C | Aspiring Product Manager',

  // open graph metadata (optional)
  description: 'Logesh C | Aspiring Product Manager',

  // social usernames (optional)
  twitter: 'Logesh__C',
  github: 'logeshchenniappan',
  linkedin: 'chenniappanlogesh',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://wr8.in/page-icon.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

   // disable the search option in the header
  isSearchEnabled: false,
  
  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'About',
      pageId: '20d974ade26e81fe8371e9ab958af046'
    },    
    {
      title: 'Projects',
      pageId: '218974ade26e815ca4a1fea51e3b4ed4'
    },
    {
      title: 'Blog',
      pageId: '20d974ade26e812a9965fa9f15af9a48'
    }
  ]
})
