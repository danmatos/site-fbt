const isProd = process.env.NODE_ENV === 'production'
const repo = process.env.REPO_NAME || ''  // set in GitHub Actions
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isProd && repo ? `/${repo}/` : '',
  basePath: isProd && repo ? `/${repo}` : '',
  trailingSlash: true,
}
