var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr:8080/v1/';

describe('CPU Services API', function() {
    it('GET /v1/search/cpu', function(done) {
        request.get(base_url + 'search/cpu', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/cpu?name=intel', function(done) {
        request.get(base_url + 'search/cpu?name=intel', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});