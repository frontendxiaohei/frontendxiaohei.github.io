call pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/frontendxiaohei/frontendxiaohei.github.io main:gh-pages
