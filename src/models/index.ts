// Use require.context to require reducers automatically
// Ref: https://webpack.js.org/guides/dependency-management/#require-context
const context = require.context('./', false, /\.ts$/);
export default context
  .keys()
  .filter((item: any) => item !== './index.ts')
  .map((key: any) => context(key));
