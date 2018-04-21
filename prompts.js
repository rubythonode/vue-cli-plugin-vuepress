module.exports = [
  {
    type: 'input',
    name: 'rootDoc',
    message: 'input docs directory',
    default: 'docs',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Title for the site',
    default: 'Documentation'
  },
  {
    type: 'input',
    name: 'output',
    message: 'Output directory',
    default: 'vuepress'
  }
]