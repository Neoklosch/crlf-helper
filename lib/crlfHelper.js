// Copyright (c) 2015 Markus Paeschke
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

function getLineEnding(content) {
    var matched = content.match(/\r\n|\r|\n/);
    var returned = {
        '\r': 'CR',
        '\n': 'LF',
        '\r\n': 'CRLF',
    }[matched];
    if (matched) {
        return returned;
    }
    return 'NA';
};

function setLineEnding(content, endingType) {
    var currentEndingType = getLineEnding(content);
    if (currentEndingType === endingType) {
        return content;
    }

    if (currentEndingType === 'NA') {
        return content;
    }

    var matcher = {
        CR: /\r/g,
        LF: /\n/g,
        CRLF: /\r\n/g
    }[currentEndingType];
    var endingTypeStr = {
        CR: '\r',
        LF: '\n',
        CRLF: '\r\n'
    }[endingType];
    return content.replace(matcher, endingTypeStr);
};

module.exports.getLineEnding = getLineEnding;
module.exports.setLineEnding = setLineEnding;
