'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project\\Blockchain\\Apps\\Kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            console.log("in finalize");
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 4;
                            return _web2.default.eth.getAccounts();

                        case 4:
                            accounts = _context2.sent;
                            _context2.next = 7;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvalCount > approversCount / 2;

            return _react2.default.createElement(Row, { textAlign: 'center', disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'orange', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TkFFRixBLHFGQUFZLG1CQUFBOzBCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNGO0FBREUsdUNBQ1Msd0JBQVMsTUFBQSxBQUFLLE1BRHZCLEFBQ1MsQUFBb0I7NENBRDdCO21DQUdlLGNBQUEsQUFBSyxJQUhwQixBQUdlLEFBQVM7OzZCQUExQjtBQUhFLGdEQUFBOzRDQUFBOzRDQUlGLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQ0FDM0MsU0FMRixBQUlGLEFBQW9ELEFBQ2hELEFBQVM7QUFEdUMsQUFDdEQsNkJBREU7OzZCQUpFOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0EsbUJBVVosQSxzRkFBYSxvQkFBQTswQkFBQTs0RUFBQTswQkFBQTt1REFBQTs2QkFDVDtvQ0FBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0FBRkcsdUNBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0I7NkNBRjVCO21DQUljLGNBQUEsQUFBSyxJQUpuQixBQUljLEFBQVM7OzZCQUExQjtBQUpHLGlEQUFBOzZDQUFBOzRDQUtILEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NDQUM1QyxTQU5ELEFBS0gsQUFBcUQsQUFDakQsQUFBUztBQUR3QyxBQUN2RCw2QkFERTs7NkJBTEc7NkJBQUE7NkNBQUE7O0FBQUE7eUJBQUE7QTs7Ozs7aUNBVUo7Z0JBQUEsQUFDRyxNQURILEFBQ2dCLHVCQURoQixBQUNHO2dCQURILEFBQ1EsT0FEUixBQUNnQix1QkFEaEIsQUFDUTt5QkFDMkIsS0FGbkMsQUFFd0M7Z0JBRnhDLEFBRUcsWUFGSCxBQUVHO2dCQUZILEFBRU8saUJBRlAsQUFFTztnQkFGUCxBQUVnQix3QkFGaEIsQUFFZ0IsQUFDckI7O2dCQUFNLGtCQUFrQixRQUFBLEFBQVEsZ0JBQWdCLGlCQUFoRCxBQUFpRSxBQUVqRTs7bUNBQ0ssY0FBRCxPQUFLLFdBQUwsQUFBZSxVQUFTLFVBQVUsUUFBbEMsQUFBMEMsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQWxGLEFBQTBGOzhCQUExRjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSw2QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHRDLEFBR0ksQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFKSixBQUlJLEFBQWUsQUFDZiw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFBQSxBQUFlLGVBQWdCLEtBQS9CLGdCQUxKLEFBS0ksQUFDQSxzQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNNO0FBRE47QUFBQSx1QkFDTSxBQUFRLFdBQVIsQUFBbUIsdUJBQ2pCLEFBQUMseUNBQU8sT0FBUixBQUFjLFVBQVMsT0FBdkIsTUFBOEIsU0FBUyxLQUF2QyxBQUE0Qzs4QkFBNUM7Z0NBQUE7QUFBQTthQUFBLEVBUlosQUFNSSxBQUVRLEFBR1IsNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsdUJBQ00sQUFBUSxXQUFSLEFBQW1CLHVCQUNyQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7OEJBQXpDO2dDQUFBO0FBQUE7YUFBQSxFQWRaLEFBQ0ksQUFXSSxBQUVJLEFBS2Y7Ozs7O0FBOUNvQixBLEFBaUR6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6IkY6L1Byb2plY3QvQmxvY2tjaGFpbi9BcHBzL0tpY2tzdGFydCJ9