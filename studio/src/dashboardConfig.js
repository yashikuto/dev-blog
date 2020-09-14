export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f5fde65a207675f9eedc3c4',
                  title: 'Sanity Studio',
                  name: 'dev-blog-studio',
                  apiId: '1c88f8f0-b99d-4dda-850a-84c90e52ac8e'
                },
                {
                  buildHookId: '5f5fde660109f4537151dcc3',
                  title: 'Blog Website',
                  name: 'dev-blog-web',
                  apiId: '73314cbc-561f-4c04-bbe4-64418d71a326'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yashikuto/dev-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://dev-blog-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
