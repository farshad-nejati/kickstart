'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//------ window is not defiend error hapend!! ------//
// const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and metamask is running
    // web3 = new Web3(window.web3.currentProvider);

    // Modern dapp browsers...
    if (window.ethereum) {
        web3 = new _web2.default(window.ethereum);
        try {
            // Request account access if needed
            ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.log("error to access to web3");
        }
    }
    // Legacy dapp browsers...
    else {
            web3 = new _web2.default(window.web3.currentProvider);
        }
} else {
    // We are on the server *OR* the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/230f3013613e44d0933d1d11e4a3c311');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQztBQUNEOztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUNyRTtBQUNBO0FBRUE7O0FBQ0E7UUFBSSxPQUFPLEFBQVgsVUFBcUIsQUFDakI7ZUFBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFoQixBQUFQLEFBQ0E7WUFBSSxBQUNBO0FBQ0E7cUJBQVMsQUFBVCxBQUNIO0FBSEQsVUFHRSxPQUFPLEFBQVAsT0FBYyxBQUNaO0FBQ0E7b0JBQVEsQUFBUixJQUFZLEFBQVosQUFDSDtBQUNKO0FBQ0Q7QUFWQTtTQVdLLEFBQ0Q7bUJBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUNKO0FBbkJELE9BbUJPLEFBQ0g7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFHQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRjovUHJvamVjdC9CbG9ja2NoYWluL0FwcHMvS2lja3N0YXJ0In0=