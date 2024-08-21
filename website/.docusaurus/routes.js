import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ee3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a48'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '051'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6df'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6a3'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0f6'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ac3'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ebf'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '148'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'a6b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '49e'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'baa'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '680'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '378'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '7c2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'bed'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'eda'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ca5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c63'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '961'),
            routes: [
              {
                path: '/docs/About/',
                component: ComponentCreator('/docs/About/', '134'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/About/experience',
                component: ComponentCreator('/docs/About/experience', '22a'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Essays/about-essays',
                component: ComponentCreator('/docs/Essays/about-essays', '4db'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Essays/training-wheels-not-included',
                component: ComponentCreator('/docs/Essays/training-wheels-not-included', '201'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Essays/what-I-would-give-for-two-more-hours',
                component: ComponentCreator('/docs/Essays/what-I-would-give-for-two-more-hours', '569'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Food and Travel/about-food-travel',
                component: ComponentCreator('/docs/Food and Travel/about-food-travel', '743'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Food and Travel/every-days-a-Sunday-at-Zuni',
                component: ComponentCreator('/docs/Food and Travel/every-days-a-Sunday-at-Zuni', '4df'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Food and Travel/up-down-and-around-phan-thiet-city',
                component: ComponentCreator('/docs/Food and Travel/up-down-and-around-phan-thiet-city', '209'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Technology/about-tech',
                component: ComponentCreator('/docs/Technology/about-tech', '51a'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Technology/blackhat-SEO-attacks-use-fake-YouTube',
                component: ComponentCreator('/docs/Technology/blackhat-SEO-attacks-use-fake-YouTube', '15b'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Technology/mind-blowing-chips',
                component: ComponentCreator('/docs/Technology/mind-blowing-chips', 'b35'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Technology/spam-scams-and-other-social-media-threats',
                component: ComponentCreator('/docs/Technology/spam-scams-and-other-social-media-threats', 'd51'),
                exact: true,
                sidebar: "aboutSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a57'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
