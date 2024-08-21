import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ria-rivera/portfolio/',
    component: ComponentCreator('/ria-rivera/portfolio/', '78d'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/__docusaurus/debug',
    component: ComponentCreator('/ria-rivera/portfolio/__docusaurus/debug', '5f1'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/ria-rivera/portfolio/__docusaurus/debug/config', 'e6e'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/ria-rivera/portfolio/__docusaurus/debug/content', '524'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/ria-rivera/portfolio/__docusaurus/debug/globalData', 'e29'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/ria-rivera/portfolio/__docusaurus/debug/metadata', '8fd'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/ria-rivera/portfolio/__docusaurus/debug/registry', 'f6f'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/ria-rivera/portfolio/__docusaurus/debug/routes', 'feb'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog',
    component: ComponentCreator('/ria-rivera/portfolio/blog', '1ce'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/archive',
    component: ComponentCreator('/ria-rivera/portfolio/blog/archive', '917'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/first-blog-post',
    component: ComponentCreator('/ria-rivera/portfolio/blog/first-blog-post', 'd47'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/long-blog-post',
    component: ComponentCreator('/ria-rivera/portfolio/blog/long-blog-post', '9ac'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/ria-rivera/portfolio/blog/mdx-blog-post', '381'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/tags',
    component: ComponentCreator('/ria-rivera/portfolio/blog/tags', '200'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/ria-rivera/portfolio/blog/tags/docusaurus', 'a1f'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/tags/facebook',
    component: ComponentCreator('/ria-rivera/portfolio/blog/tags/facebook', 'a3d'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/tags/hello',
    component: ComponentCreator('/ria-rivera/portfolio/blog/tags/hello', 'b34'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/tags/hola',
    component: ComponentCreator('/ria-rivera/portfolio/blog/tags/hola', '7f4'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/blog/welcome',
    component: ComponentCreator('/ria-rivera/portfolio/blog/welcome', '27a'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/markdown-page',
    component: ComponentCreator('/ria-rivera/portfolio/markdown-page', '21b'),
    exact: true
  },
  {
    path: '/ria-rivera/portfolio/docs',
    component: ComponentCreator('/ria-rivera/portfolio/docs', 'bf8'),
    routes: [
      {
        path: '/ria-rivera/portfolio/docs',
        component: ComponentCreator('/ria-rivera/portfolio/docs', 'd5b'),
        routes: [
          {
            path: '/ria-rivera/portfolio/docs',
            component: ComponentCreator('/ria-rivera/portfolio/docs', '0d3'),
            routes: [
              {
                path: '/ria-rivera/portfolio/docs/Essays/about-essays',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Essays/about-essays', 'ea4'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Essays/training-wheels-not-included',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Essays/training-wheels-not-included', '89d'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Essays/what-I-would-give-for-two-more-hours',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Essays/what-I-would-give-for-two-more-hours', '332'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Food and Travel/about-food-travel',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Food and Travel/about-food-travel', 'd0e'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Food and Travel/every-days-a-Sunday-at-Zuni',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Food and Travel/every-days-a-Sunday-at-Zuni', '177'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Food and Travel/up-down-and-around-phan-thiet-city',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Food and Travel/up-down-and-around-phan-thiet-city', '867'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/intro',
                component: ComponentCreator('/ria-rivera/portfolio/docs/intro', 'b03'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Technology/about-tech',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Technology/about-tech', 'ff1'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Technology/blackhat-SEO-attacks-use-fake-YouTube',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Technology/blackhat-SEO-attacks-use-fake-YouTube', '288'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Technology/mind-blowing-chips',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Technology/mind-blowing-chips', '1f3'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/ria-rivera/portfolio/docs/Technology/spam-scams-and-other-social-media-threats',
                component: ComponentCreator('/ria-rivera/portfolio/docs/Technology/spam-scams-and-other-social-media-threats', '17d'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
