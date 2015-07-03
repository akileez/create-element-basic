# create-element-basic [![NPM version](https://badge.fury.io/js/create-element-basic.svg)](http://badge.fury.io/js/create-element-basic)

> HTML element string creation

## Install
## Install with [npm](npmjs.org)

```bash
npm i create-element-basic --save
```

## Usage

```js
var createElement = require('create-element-basic');

createElement(htmlTag[string], attributes[object], content[string || function])
```
**Breaking Change !**

createElement will now determine if the htmlTag entered is empty or not. No longer necessary
to enter a Boolean (true/false) as the second argument.

### Create an HTML tag either closing or opening type.

**Examples**

```js
// Before:
createElement('a', true, {href: 'http://www.apple.com'}, "Apple");
createElement('img', false, {src: "foo.png"});

// Now:
createElement('a', {href: 'http://www.apple.com'}, "Apple");
createElement('img', {src: "foo.png"});
```

yields:

```html
<a href="http://www.apple.com">Apple</a>
<img src="foo.png" />
```

You can nest functions to create complex components.

```js
  var closeAria = createElement('span', {'aria-hidden': true}, '&times;')
                + createElement('span', {class: 'sr-only'}, 'Close')
  
  var close     = createElement('button', {
                    class: 'close',
                    type: 'button',
                    'data-dismiss': 'alert'
                }, closeAria)
  
  var element   = createElement('div', extend({
                    class: modifier
                }, hash), close + 'One more time for the Gipper.')
  
  return element
```

yields:

```html
<div class="alert alert-info alert-raised fade in">
  <button class="close" type="button" data-dismiss="alert">
    <span aria-hidden="true">&times;</span> 
    <span class="sr-only">Close</span> 
  </button>
  One more time for the Gipper.
</div>
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/akileez/create-element-basic/issues)

## Author

**Keith Williams**
 
+ [github/akileez](https://github.com/akileez)

## License
Copyright (c) 2014-2015 Keith Williams  
Released under the MIT license

