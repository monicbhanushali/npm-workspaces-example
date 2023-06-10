# npm-workspaces-example
An example monorepo showcasing NPM Workspaces



Raw Notes:
- npm init
- Creating first workspace lib under packages folder. `packages` folder would hold shared dependencies
  - npm init --scope=@monorepo -workspace packages/lib
  - why add @scope ? = so that all shared dependencies are under one folder
  - cd packages/lib and `tsc --init` - adds tsconfig.json
  - added an index.ts file and a simple getfruit function
  - `npm run build -w packages/lib/`
-  Created second workspace which holds multiple app
   -  same steps as above in first workspace
-  `npm run build` at root level - will build all workspaces
-  `npm i @monorepo/lib -w apps/my-app-1` at root - this will add lib dependency into my-app-1