var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr:8080/v1/';

describe('Pricing Services API', function() {
    it('GET /v1/search/price/1', function(done) {
        request.get(base_url + 'search/price/1', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});