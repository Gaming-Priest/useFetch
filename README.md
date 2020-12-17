# useFetch
my useFetch react custom hook
must add @babel/runtime and @babel/plugin-transform-runtime to avoid regenerator error.
run  npm i --save-dev @babel/plugin-transform-runtime @babel/runtime
## useage example
```js
     import {useFetch} from 'directory name';
     
    const url = 'https://templateapi.template'
    const {isLoading,data}=useFetch(url)
```
