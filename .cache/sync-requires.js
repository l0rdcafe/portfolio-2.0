// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/Lord/repos/portfolio-2.0/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/Lord/repos/portfolio-2.0/src/templates/blog-post.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Lord/repos/portfolio-2.0/src/pages/index.js"))
}

