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

Create a new file named `webpack.config.js`
add the following setup
```js
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js"
    }
}
```
Run again the webpack command but in this case without specfy the main file and the output
```console
npx webpack
```
You could add an aditional flag to specify in which environment you're woriking. `-p` specifies the production mode or `-d` for development mode.