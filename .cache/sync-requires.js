// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/Lord/repos/portfolio-2.0/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Lord/repos/portfolio-2.0/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Lord/repos/portfolio-2.0/src/pages/index.js"))
}

