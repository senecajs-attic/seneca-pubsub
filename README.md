
![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] data storage plugin.

# seneca-pubsub
[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Gitter][gitter-badge]][gitter-url]

A decoration that adds pub sub via varo to Seneca

- __Tested on:__ Seneca 0.9
- __Node:__ 4, 5
- __License:__ [MIT][]

If you're using this module, and need help, you can:

- Post a [github issue][],
- Tweet to [@senecajs][],
- Ask on the [Gitter][gitter-url].

If you are new to Seneca in general, please take a look at [senecajs.org][]. We have
everything from tutorials to sample apps to help get you up and running quickly.


## Install
This plugin, simply use npm,

```sh
npm install seneca
npm install seneca-pubsub
```

## Test
To run tests, simply use npm:

```sh
npm run test
```

## Quick Example

```js

Var Seneca = require('seneca')()
Seneca.use(require('seneca-pubsub'))

Seneca.subscribe({role: 'foo', function (msg) {
  console.log(msg.value)    
})

Seneca.subscribe({role: 'foo', function (msg) {
  console.log(msg.value)    
})

Seneca.publish({role: 'foo', data: {value: 10}})
Seneca.publish({role: 'foo', data: {value: 10}})
Seneca.publish({role: 'foo', data: {value: 10}})

// Output x6: '10'
```

## Contributing
The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License
Copyright (c) 2015, Dean McDonnell and other contributors.
Licensed under [MIT][].

[MIT]: ./LICENSE
[npm-badge]: https://badge.fury.io/js/seneca-pubsub.svg
[npm-url]: https://badge.fury.io/js/seneca-pubsub
[Senecajs org]: https://github.com/senecajs/
[Seneca.js]: https://www.npmjs.com/package/seneca
[@senecajs]: http://twitter.com/senecajs
[senecajs.org]: http://senecajs.org/
[travis-badge]: https://travis-ci.org/senecajs/seneca-pubsub.svg
[travis-url]: https://travis-ci.org/senecajs/seneca-pubsub
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/senecajs/seneca
[github issue]: https://github.com/senecajs/seneca-pubsub/issues
