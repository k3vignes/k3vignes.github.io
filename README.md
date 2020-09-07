[k3vignes.github.io](https://k3vignes.github.io)
## To deploy to github pages 
1. Create production build with `npm run build`
2. Then add and commit the build folder with `git add` and `git commit`
3. And then push the build folder to the `gh-pages` branch with
```cassandraql
git subtree push --prefix my_site/build origin gh-pages
```
