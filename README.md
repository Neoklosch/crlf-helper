# crlf-helper
helps to detect and change line endings in node.js strings

# install
`npm install crlf-helper

# usage
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

