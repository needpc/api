var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr:8080/v1/';

describe('GPU Services API', function() {
    it('GET /v1/search/gpu', function(done) {
        request.get(base_url + 'search/gpu', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/gpu?name=nvidia', function(done) {
        request.get(base_url + 'search/gpu?name=nvidia', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});