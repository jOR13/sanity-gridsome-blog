export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5fd17eab723a4311a9a05672',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-wpjjgdyj',
                  apiId: '3e24cf83-8f85-4fb8-ac7e-cb456af2cb4a'
                },
                {
                  buildHookId: '5fd17eabfb50c911fa6526a0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-u1jhp4bd',
                  apiId: 'c79e55e6-a379-4808-a2ac-4e7b0f1b0153'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jOR13/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-u1jhp4bd.netlify.app', category: 'apps'}
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
