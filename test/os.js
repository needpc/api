// var server   = require('../server.js');
var request  = require('request');
var assert   = require('assert');

var base_url = 'http://api.needpc.fr:8080/v1/';

describe('OS Services API', function() {
    it('GET /v1/search/os', function(done) {
        request.get(base_url + 'search/os', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/os?name=win', function(done) {
        request.get(base_url + 'search/os?name=win', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});