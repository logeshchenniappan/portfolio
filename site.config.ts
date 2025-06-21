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
  seotitle: 'Logesh C | Aspiring Product Manager, Startup Advisor',

  // open graph metadata (optional)
  description: 'Hi! I am Logesh C, a Product Manager, Builder, Startup Advisor. This is my small corner of the internet.',

  // social usernames (optional)
  twitter: 'Logesh__C',
  github: 'logeshchenniappan',
  linkedin: 'chenniappanlogesh',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fb99dab89-f2f2-4d0c-93c7-4c3937b1f85e%2F52e3e962-f8d5-4685-9301-8244ea83e849%2FChatGPT_Image_Jun_2_2025_08_45_48_AM.png/size/w=250?exp=1750570572&sig=B6kGt_YCMexKtZekTTI7H0bbWj-3yWQy5csjAa-SpbM&id=20d974ad-e26e-80e7-8945-ff0f130b78ab&table=block&userId=3a6d6398-1a98-49c2-ba6f-4e43f9cd243c',
  defaultPageCover: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fb99dab89-f2f2-4d0c-93c7-4c3937b1f85e%2F8e473788-c4d5-4e5d-9b3e-514696f79e50%2FBeige_Brown_Monotone_Sales__Marketing_Resume_Website_(1).png/size/w=2000?exp=1750570501&sig=heGb1XQzMm7apHXyqy2cJUEiSiS6ZxN7_IyZHW5_afE&id=20d974ad-e26e-80e7-8945-ff0f130b78ab&table=block&userId=3a6d6398-1a98-49c2-ba6f-4e43f9cd243c',
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
      pageId: '218974ade26e80b987d9d6f9a76acda3'
    },
    {
      title: 'Blog',
      pageId: '20d974ade26e812a9965fa9f15af9a48'
    }
  ]
})
