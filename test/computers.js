var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr:8080/v1/';

describe('Computers Services API', function() {
    it('GET /v1/search/computers', function(done) {
        request.get(base_url + 'search/computers', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/computers?model=Asus&cpu=1', function(done) {
        request.get(base_url + 'search/computers?model=Asus&cpu=1', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/computers/1', function(done) {
        request.get(base_url + 'search/computers/1', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});