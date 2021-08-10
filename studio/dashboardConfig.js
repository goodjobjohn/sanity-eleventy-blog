export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611212e1fec24ec529575931',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-n2iw4dcb',
                  apiId: '42acc879-ac2a-46f5-a2da-5e21b9d949f3'
                },
                {
                  buildHookId: '611212e17ea0e9bf0537b0a6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-b753afye',
                  apiId: '5bf0b27b-3871-496e-9567-a4d0aae0cb11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/goodjobjohn/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-b753afye.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
