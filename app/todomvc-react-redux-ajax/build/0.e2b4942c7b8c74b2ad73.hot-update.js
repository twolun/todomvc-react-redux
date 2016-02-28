webpackHotUpdate(0,{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports.selectReddit = selectReddit;\nexports.invalidateReddit = invalidateReddit;\nexports.fetchPostsIfNeeded = fetchPostsIfNeeded;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _isomorphicFetch = __webpack_require__(290);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _zepto = __webpack_require__(377);\n\nvar _zepto2 = _interopRequireDefault(_zepto);\n\nvar REQUEST_POSTS = 'REQUEST_POSTS';\nexports.REQUEST_POSTS = REQUEST_POSTS;\nvar RECEIVE_POSTS = 'RECEIVE_POSTS';\nexports.RECEIVE_POSTS = RECEIVE_POSTS;\nvar SELECT_REDDIT = 'SELECT_REDDIT';\nexports.SELECT_REDDIT = SELECT_REDDIT;\nvar INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';\n\nexports.INVALIDATE_REDDIT = INVALIDATE_REDDIT;\nconsole.log(_zepto2['default'].ajax);\n\nfunction selectReddit(reddit) {\n  return {\n    type: SELECT_REDDIT,\n    reddit: reddit\n  };\n}\n\nfunction invalidateReddit(reddit) {\n  return {\n    type: INVALIDATE_REDDIT,\n    reddit: reddit\n  };\n}\n\nfunction requestPosts(reddit) {\n  return {\n    type: REQUEST_POSTS,\n    reddit: reddit\n  };\n}\n\nfunction receivePosts(reddit, json) {\n  return {\n    type: RECEIVE_POSTS,\n    reddit: reddit,\n    posts: json.data.children.map(function (child) {\n      return child.data;\n    }),\n    receivedAt: Date.now()\n  };\n}\n\nfunction shouldFetchPosts(state, reddit) {\n  var posts = state.postsByReddit[reddit];\n  if (!posts) {\n    return true;\n  }\n  if (posts.isFetching) {\n    return false;\n  }\n  return posts.didInvalidate;\n}\n\nfunction fetchPostsIfNeeded(reddit) {\n  return function (dispatch, getState) {\n    if (shouldFetchPosts(getState(), reddit)) {\n      // return dispatch(fetchPosts(reddit))\n      dispatch(requestPosts(reddit));\n      _zepto2['default'].ajax({\n        method: 'GET',\n        url: 'https://www.reddit.com/r/' + reddit + '.json',\n        success: function success(json) {\n          dispatch(receivePosts(reddit, json));\n        },\n        error: function error(code, message) {}\n      });\n    }\n  };\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz9iZjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCAkIGZyb20gJ3plcHRvJztcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUE9TVFMgPSAnUkVRVUVTVF9QT1NUUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1BPU1RTID0gJ1JFQ0VJVkVfUE9TVFMnXG5leHBvcnQgY29uc3QgU0VMRUNUX1JFRERJVCA9ICdTRUxFQ1RfUkVERElUJ1xuZXhwb3J0IGNvbnN0IElOVkFMSURBVEVfUkVERElUID0gJ0lOVkFMSURBVEVfUkVERElUJ1xuXG5jb25zb2xlLmxvZygkLmFqYXgpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVkZGl0KHJlZGRpdCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFTEVDVF9SRURESVQsXG4gICAgcmVkZGl0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVSZWRkaXQocmVkZGl0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSU5WQUxJREFURV9SRURESVQsXG4gICAgcmVkZGl0XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVxdWVzdFBvc3RzKHJlZGRpdCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUE9TVFMsXG4gICAgcmVkZGl0XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjZWl2ZVBvc3RzKHJlZGRpdCwganNvbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUE9TVFMsXG4gICAgcmVkZGl0OiByZWRkaXQsXG4gICAgcG9zdHM6IGpzb24uZGF0YS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQuZGF0YSksXG4gICAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZEZldGNoUG9zdHMoc3RhdGUsIHJlZGRpdCkge1xuICBjb25zdCBwb3N0cyA9IHN0YXRlLnBvc3RzQnlSZWRkaXRbcmVkZGl0XVxuICBpZiAoIXBvc3RzKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAocG9zdHMuaXNGZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBwb3N0cy5kaWRJbnZhbGlkYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzSWZOZWVkZWQocmVkZGl0KSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgaWYgKHNob3VsZEZldGNoUG9zdHMoZ2V0U3RhdGUoKSwgcmVkZGl0KSkge1xuICAgICAgLy8gcmV0dXJuIGRpc3BhdGNoKGZldGNoUG9zdHMocmVkZGl0KSlcbiAgICAgIGRpc3BhdGNoKHJlcXVlc3RQb3N0cyhyZWRkaXQpKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vci8nK3JlZGRpdCsnLmpzb24nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihqc29uKXtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlUG9zdHMocmVkZGl0LCBqc29uKSkgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oY29kZSwgbWVzc2FnZSl7XG5cbiAgICAgICAgfVxuICAgICAgfSlcblxuXG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hY3Rpb25zL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})