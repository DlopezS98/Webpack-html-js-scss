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
ni src/app.js, src/index.js, public/index.html, public/style.css
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

You can also change the default port that use webpack adding the following config into our `webpack.config.js`
```js
module.exports = {
    ...,
    devServer: {
        port: 5000
    }
}
```

Now we need to add some styles into our html page for that we need to install two node packages named `style-loader` & `css-loader`
```console
npm install style-loader css-loader -D
```
Create a new configuration into `webpack.config.js`, in this case we need to setup the loaders for the css styles
```js
module.exports = {
    ...,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            }
        ]
    }
}
```

To start use the css files into webpack we need to setup an import statement into our main js file in this case is `index.js`
```js
import { ShowAlert } from "./app";
// add this import to use the css styles
// webpack by default read this import and attach them into the html file
import "../public/style.css"

let button = document.getElementById('btn-alert');
button.addEventListener("click", ShowAlert);
```
Also we can css preprocessors like sass, so let's start setting up the necessary packages
```console
npm install sass-loader node-sass -D
```
change the config into the `webpack.config.js`
```js
module.exports = {
     module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }]
            }
        ]
    }
}
```
you can change the extension of the css file that already exists into the `public/style.css` folder to `public/style.scss`
sass code
```scss
body {
    background-color: #eee;
    h1 {
        background-color: #fff;
        color: crimson;
    }
}
```

Don't forget to change the `index.js` file and specify the new file in the import statement
```js
import "../public/style.scss"
```