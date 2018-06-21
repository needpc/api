var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr:8080/v1/';

describe('Brand Services API', function() {
    it('GET /v1/search/brand', function(done) {
        request.get(base_url + 'search/brand', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/brand?name=intel', function(done) {
        request.get(base_url + 'search/brand?name=intel', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});