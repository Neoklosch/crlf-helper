var crlfHelper = require('../index'),
    assert = require('assert'),
    CRLFInput,
    CRInput,
    LFInput,
    NAInput;

function initValues() {
    CRLFInput = 'Input\r\nline break',
    CRInput   = 'Input\rline break',
    LFInput   = 'Input\nline break',
    NAInput   = 'Input\bline break';
}

before(function() {
    initValues();
});

describe('CRLF', function() {
    describe('getLineEnding', function() {
        it('should return a CRLF', function() {
            assert.equal('CRLF', crlfHelper.getLineEnding(CRLFInput));
        });
        it('should return a LF', function() {
            assert.equal('LF', crlfHelper.getLineEnding(LFInput));
        });
        it('should return a CR', function() {
            assert.equal('CR', crlfHelper.getLineEnding(CRInput));
        });
        it('should return a NA', function() {
            assert.equal('NA', crlfHelper.getLineEnding(NAInput));
        });
    });
    describe('setLineEnding', function() {
        beforeEach(function() {
            initValues();
        });
        it('should change a CRLF input to LF', function() {
            assert.equal(LFInput, crlfHelper.setLineEnding(CRLFInput, 'LF'));
        });
        it('should change a CR input to LF', function() {
            assert.equal(LFInput, crlfHelper.setLineEnding(CRInput, 'LF'));
        });
        it('same input should return same string', function() {
            assert.equal(LFInput, crlfHelper.setLineEnding(LFInput, 'LF'));
        });
        it('should return same string as input if line ending is NA', function() {
            assert.equal(NAInput, crlfHelper.setLineEnding(NAInput, 'LF'));
        });
    });
});
