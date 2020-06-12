# vue-comlink-worker-example
This example app shows how to set up your Vue + Typescript project to use Comlink to wrap your TS WebWorkers (with ES6 style imports). The files of interest are `vue.config.js`, `src/worker.ts` and `src/App.vue`.

Still to figure out is how to import the types of the WebWorker so that we can get autocompletion for the worker properties and methods.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
