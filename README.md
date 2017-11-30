## browser-minimatch

using rollup to build a [minimatch](https://github.com/isaacs/minimatch) which can be used in browser

## how to build

```js
npm i
```

```js
npm run build
```

## dist

Build result in `dist/minimatch.js`

## Using in browser

```js
    <script src='https://gw.alipayobjects.com/os/rmsportal/mBYGLBpGRgUpMYKxmTqT.js'/>
    <script>
      window.minimatch('bar.foo', '*.foo') // true
    </script>
```