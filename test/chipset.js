var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr:8080/v1/';

describe('Chipset Services API', function() {
    it('GET /v1/search/chipset', function(done) {
        request.get(base_url + 'search/chipset', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/brand?name=nono', function(done) {
        request.get(base_url + 'search/chipset?name=nono', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});