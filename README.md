# Face Tracking com JeelizVTO

Face tracking em React utilizando Jeeliz VTO widget [NPM jeelizvtowidget package](https://www.npmjs.com/package/jeelizvtowidget).

## Executando

Certifique-se que a versão do Node é a 14.19.3 e do NPM é a 6.14.17

Na linha de comando, raiz do projeto:

```
npm install
npm start
```
Aí acessar `https://127.0.0.1:8443`.


## Utilizando modelos GLTF

1. Crie um modelo seguindo as orientações [desse documento](https://jeeliz.com/glassesStudio3D/doc/GlassesStudio3DDoc.pdf) e exporte para GLTF/GLB com as **texturas incluídas** no arquivo.

2. Acesse o [Jeeliz Glasses Studio 3D](https://jeeliz.com/glassesStudio3D/)

3. Clique em Import GLTF

4. Selecione o arquivo GLTF exportado anteriormente

5. Opcionalmente ajuste os parâmetros de PBR, Fresnel e Opacidade

6. Opcionalmente visualize em AR pela aplicação

7. Clique em Export as JSON

8. Salve ou copie o arquivo JSON para 'src/assets/models'

9. Em src/js/components/AppCanvas.js importe o arquivo JSON exportado:

```javascript
import NomeDoModelo from '../../assets/models/<nome-do-arquivo>.json';
```

10. No componente que irá ativar o óculos, chame a função de load do óculos passando o nome do modelo

```javascript
<button onClick={set_glassesJSONModel.bind(this, NomeDoModelo)}></button>
```

Os modelos JSON podem ser servidos por um serviço de armazenamento como buckets do S3. Neste caso, terá que ser adicionado código para carregar o arquivo do serviço e enviar para a função.


### Build para produção

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class. (example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS.
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass.
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS.
  - [`cssnano`](https://github.com/cssnano/cssnano) - Optimize and compress PostCSS.
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM.
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Allow import of files and emit file to build folder.
- [`url-loader`](https://webpack.js.org/loaders/url-loader/) - Encode and inline files. Falls back to file-loader.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template.
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets.
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minify JavaScript.
