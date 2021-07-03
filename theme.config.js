const config = {
  repository: 'https://github.com/AndrewUsher/dev-delectables', // project repo
  docsRepository: 'https://github.com/AndrewUsher/dev-delectables', // docs repo
  branch: 'main', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Dev Delectables',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Andrew Usher.`,
  footerEditOnGitHubLink: false,
  logo: <>
    <span>Dev Delectables</span>
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Dev Delectables: Cuisine and Drinks for Devs by a Dev" />
    <meta name="og:title" content="Dev Delectables: Cuisine and Drinks for Devs by a Dev" />
  </>
}

export default config