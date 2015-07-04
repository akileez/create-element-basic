/*!
 * create-element-basic <https://github.com/akileez/create-element-basic>
 *
 * Copyright (c) 2014-2015 Keith Williams, contributors.
 * Licensed under the MIT license.
 *
 * Copyright (c) 2013 Richard Willis
 * https://github.com/badsyntax/handlebars-form-helpers
 */

'use strict';

var emptyTags = [
  'link',
  'track',
  'param',
  'area',
  'command',
  'col',
  'base',
  'meta',
  'hr',
  'source',
  'img',
  'keygen',
  'br',
  'wbr',
  'input'
]

function openTag (type, closing, attr) {
  var html = ['<' + type]

  for (var prop in attr) {
    // A falsy value is used to remove the attribute.
    // EG: attr[false] to remove, attr['false'] to add
    if (attr[prop]) html.push(prop + '="' + attr[prop] + '"')
  }
  return html.join(' ') + (!closing ? ' /' : '') + '>'
}

function closeTag (type) {
  return '</' + type + '>'
}

function createElement(type, attr, contents) {
  var closing = emptyTags.indexOf(type) === -1 ? true : false

  return openTag(type, closing, attr) + (closing ? (contents || '') + closeTag(type) : '')
}

module.exports = createElement
