npm init --yes
npm install mocha chai @types/mocha @types/chai ts-node
npm install --save-dev typedoc mocha nyc coveralls 
mkdir dist test src docs typedoc img
touch .mocharc.json typedoc.json .eslintrc.json .gitignore .coveralls.yml tsconfig.json sonar-project.properties
git init
