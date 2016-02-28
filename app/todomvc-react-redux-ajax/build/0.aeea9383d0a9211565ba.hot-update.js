webpackHotUpdate(0,{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports.selectReddit = selectReddit;\nexports.invalidateReddit = invalidateReddit;\nexports.fetchPostsIfNeeded = fetchPostsIfNeeded;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _isomorphicFetch = __webpack_require__(290);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _zepto = __webpack_require__(377);\n\nvar _zepto2 = _interopRequireDefault(_zepto);\n\nvar REQUEST_POSTS = 'REQUEST_POSTS';\nexports.REQUEST_POSTS = REQUEST_POSTS;\nvar RECEIVE_POSTS = 'RECEIVE_POSTS';\nexports.RECEIVE_POSTS = RECEIVE_POSTS;\nvar SELECT_REDDIT = 'SELECT_REDDIT';\nexports.SELECT_REDDIT = SELECT_REDDIT;\nvar INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';\n\nexports.INVALIDATE_REDDIT = INVALIDATE_REDDIT;\n\nfunction selectReddit(reddit) {\n  return {\n    type: SELECT_REDDIT,\n    reddit: reddit\n  };\n}\n\nfunction invalidateReddit(reddit) {\n  return {\n    type: INVALIDATE_REDDIT,\n    reddit: reddit\n  };\n}\n\nfunction requestPosts(reddit) {\n  return {\n    type: REQUEST_POSTS,\n    reddit: reddit\n  };\n}\n\nfunction receivePosts(reddit, json) {\n  return {\n    type: RECEIVE_POSTS,\n    reddit: reddit,\n    posts: json.data.children.map(function (child) {\n      return child.data;\n    }),\n    receivedAt: Date.now()\n  };\n}\n\nfunction fetchPosts(reddit) {\n  return function (dispatch) {\n    dispatch(requestPosts(reddit));\n    return (0, _isomorphicFetch2['default'])('https://www.reddit.com/r/' + reddit + '.json').then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      return dispatch(receivePosts(reddit, json));\n    });\n  };\n}\n\nfunction shouldFetchPosts(state, reddit) {\n  var posts = state.postsByReddit[reddit];\n  if (!posts) {\n    return true;\n  }\n  if (posts.isFetching) {\n    return false;\n  }\n  return posts.didInvalidate;\n}\n\nfunction fetchPostsIfNeeded(reddit) {\n  return function (dispatch, getState) {\n    _zepto2['default'].ajax({\n      method: 'GET',\n      url: 'https://www.reddit.com/r/reactjs.json',\n      success: function success(data) {\n        console.log(data);\n      },\n      error: function error(code, message) {\n        console.log(code, message);\n      }\n    });\n  };\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz9iZjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCAkIGZyb20gJ3plcHRvJztcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUE9TVFMgPSAnUkVRVUVTVF9QT1NUUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1BPU1RTID0gJ1JFQ0VJVkVfUE9TVFMnXG5leHBvcnQgY29uc3QgU0VMRUNUX1JFRERJVCA9ICdTRUxFQ1RfUkVERElUJ1xuZXhwb3J0IGNvbnN0IElOVkFMSURBVEVfUkVERElUID0gJ0lOVkFMSURBVEVfUkVERElUJ1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJlZGRpdChyZWRkaXQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRUxFQ1RfUkVERElULFxuICAgIHJlZGRpdFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlUmVkZGl0KHJlZGRpdCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElOVkFMSURBVEVfUkVERElULFxuICAgIHJlZGRpdFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RQb3N0cyhyZWRkaXQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1BPU1RTLFxuICAgIHJlZGRpdFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmVQb3N0cyhyZWRkaXQsIGpzb24pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1BPU1RTLFxuICAgIHJlZGRpdDogcmVkZGl0LFxuICAgIHBvc3RzOiBqc29uLmRhdGEuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLmRhdGEpLFxuICAgIHJlY2VpdmVkQXQ6IERhdGUubm93KClcbiAgfVxufVxuXG5mdW5jdGlvbiBmZXRjaFBvc3RzKHJlZGRpdCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RQb3N0cyhyZWRkaXQpKVxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yLyR7cmVkZGl0fS5qc29uYClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4gZGlzcGF0Y2gocmVjZWl2ZVBvc3RzKHJlZGRpdCwganNvbikpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZEZldGNoUG9zdHMoc3RhdGUsIHJlZGRpdCkge1xuICBjb25zdCBwb3N0cyA9IHN0YXRlLnBvc3RzQnlSZWRkaXRbcmVkZGl0XVxuICBpZiAoIXBvc3RzKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAocG9zdHMuaXNGZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBwb3N0cy5kaWRJbnZhbGlkYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzSWZOZWVkZWQocmVkZGl0KSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgbWV0aG9kOiAnR0VUJyxcbiAgdXJsOiAnaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yL3JlYWN0anMuanNvbicsIFxuICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24oY29kZSwgbWVzc2FnZSl7XG4gICAgY29uc29sZS5sb2coY29kZSwgbWVzc2FnZSk7XG4gIH1cbn0pO1xuXG4gIH1cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FjdGlvbnMvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})