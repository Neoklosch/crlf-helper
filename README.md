# crlf-helper

[![Build Status (Travis)](https://travis-ci.org/Neoklosch/crlf-helper.svg?branch=master)](https://travis-ci.org/Neoklosch/crlf-helper)

helps to detect and change line endings in node.js strings

## Installation
`npm install crlf-helper`

## Usage
```
var crlf = require('crlf-helper');

var content = 'content\r\nwith line break'
var lineEnding = crlf.getLineEnding();
console.log(lineEnding);
// CRLF

var contentWithNewLineEnding = crlf.setLineEnding(content, 'LF');
console.log(contentWithNewLineEnding);
// content\nwith line break
```

## Bugs and issues

If you find a bug or issues, please create an issue at [github](https://github.com/Neoklosch/crlf-helper/issues).
