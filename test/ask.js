var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr/api/v1/';

describe('Ask Services API', function() {
    it('GET /api/v1/ask', function(done) {
        request.get(base_url + 'ask', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /api/v1/search/brand?activity=1&rank=3', function(done) {
        request.get(base_url + 'ask?activity=1&rank=3', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});