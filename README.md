Create the project folder
```console
mkdir webpack-html-css-js
cd webpack-html-css-js
```
Initialize a new node project with
```console
npm init -y
```
create folders and files
```console
mkdir src, build
ni src/app.js, src/index.js, src/index.html
```

Install the webpack dependencies
```console
npm install webpack webpack-cli -D
```

Generate a js bundle with webpack from terminal
```console
npx webpack ./src/index.js -o ./src
```