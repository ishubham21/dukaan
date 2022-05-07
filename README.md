# Dukaan
This application is created using React alongside Webpack as bundling tool and babel as the transpiler. Access the application from [https://dukaan-two.vercel.app/](https://dukaan-two.vercel.app/)

## Features 
* Use of Webpack & Babel to boost development & production build times
* Obsfucated classNames using Webpack - this makes use of a source map to link the corresponding classes and thus, reduce the bundle size by a great margin. 
* Used `source-map` & `inline-source-maps` for facilitating efficient debugging on development and production environments respectively. 
* Splitted larger JS bundle files into multiple chunks to enhance production build performances. 
* Made use of CSS minifiers and Terser plugin to uglify CSS & JavaScript to reduce the overall bundle size. 

## Installing 

1. **Clone the repository** - 
```
git clone https://github.com/ishubham21/dukaan 
```

2. **Install all the dependencies** -
```
npm install
```

or

```
yarn
```

3. **Start the development server** - 

```
npm run start
```

4. **You are good to go! You can now access the application on the `PORT 3001`** - [http://localhost:3001](http://localhost:3001)