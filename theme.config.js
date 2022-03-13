const config = {
  darkMode: true,
  defaultMenuCollapsed: true,
  floatTOC: true,
  footer: true,
  footerEditLink: false,
  footerText: `MIT ${new Date().getFullYear()} © Andrew Usher.`,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Dev Delectables: Cuisine and Drinks for Devs by a Dev"
      />
      <meta
        name="og:title"
        content="Dev Delectables: Cuisine and Drinks for Devs by a Dev"
      />
    </>
  ),
  logo: (
    <>
      <span>Dev Delectables</span>
    </>
  ),
  nextLinks: false,
  prevLinks: false,
  search: true,
  titleSuffix: " – Dev Delectables",
};

export default config;
