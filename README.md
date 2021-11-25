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
mkdir src, public
ni src/app.js, src/index.js, public/index.html
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
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    }
}
```
Run again the webpack command but in this case without specfy the main file and the output
```console
npx webpack
```
You could add an aditional flag `--mode` to specify in which environment you're woriking. `--mode production` specifies the production mode or `--mode development` for development mode.

Install html plugin to use html with webpack and send it into the bundle.
```console
npm install html-webpack-plugin -D
```

Update the `webpack.config.js` and add the plugin setup.
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    ...,
    plugins: [ new HtmlWebpackPlugin({ template: './public/index.html' })]
}
```

Add new dependency to use the development server created by webpack to don't restart every time when we need add new changes into our html or js files
```console
npm install webpack-dev-server -D
```
run de following command...
```console
npx webpack-dev-server --mode development
```

Now we are able to make changes into our files and the server goes to draw the changes
by default webpack start the dev server into http://localhost:8080/