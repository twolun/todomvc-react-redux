webpackHotUpdate(0,{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\n__webpack_require__(173);\n\nvar _react = __webpack_require__(52);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(292);\n\nvar _reactRedux = __webpack_require__(128);\n\nvar _containersApp = __webpack_require__(170);\n\nvar _containersApp2 = _interopRequireDefault(_containersApp);\n\nvar _storeConfigureStore = __webpack_require__(172);\n\nvar _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);\n\nvar _zepto = __webpack_require__(377);\n\nvar _zepto2 = _interopRequireDefault(_zepto);\n\nvar store = (0, _storeConfigureStore2['default'])();\n_zepto2['default'].ajax({\n  method: 'GET',\n  url: 'https://www.reddit.com/r/reactjs.json',\n  success: function success(data) {\n    console.log(data);\n  },\n  error: function error(code, message) {\n    console.log(code, message);\n  }\n});\n\n(0, _reactDom.render)(_react2['default'].createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2['default'].createElement(_containersApp2['default'], null)\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MjY0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb250YWluZXJzL0FwcCdcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xuaW1wb3J0ICQgZnJvbSAnemVwdG8nO1xuXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbiQuYWpheCh7XG4gIG1ldGhvZDogJ0dFVCcsXG4gIHVybDogJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vci9yZWFjdGpzLmpzb24nLCBcbiAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfSxcbiAgZXJyb3I6IGZ1bmN0aW9uKGNvZGUsIG1lc3NhZ2Upe1xuICAgIGNvbnNvbGUubG9nKGNvZGUsIG1lc3NhZ2UpO1xuICB9XG59KTtcblxuXG5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})