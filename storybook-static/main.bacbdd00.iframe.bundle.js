;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    './generated-stories-entry.js': function (
      module,
      exports,
      __webpack_require__
    ) {
      'use strict'
      ;(function (module) {
        ;(0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ).configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx|js|jsx))$'
            ),
          ],
          module,
          !1
        )
      }).call(
        this,
        __webpack_require__(
          './node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js'
        )(module)
      )
    },
    './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx|js|jsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './components/Header/Header.stories.tsx':
            './src/components/Header/Header.stories.tsx',
        }
        function webpackContext(req) {
          var id = webpackContextResolve(req)
          return __webpack_require__(id)
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'")
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          }
          return map[req]
        }
        ;(webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map)
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx|js|jsx))$')
      },
    './src/components/Header/Header.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Header_stories_Default
        })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        index_esm = __webpack_require__(
          './node_modules/react-icons/fa/index.esm.js'
        ),
        lib = __webpack_require__('./node_modules/react-modal/lib/index.js'),
        lib_default = __webpack_require__.n(lib),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return
                  _n = !1
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                ;(_d = !0), (_e = err)
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings
      }
      var HeaderContainer = styled_components_browser_esm.a.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  background-color: #282c34;\n  color: #fff;\n',
            ]))
        ),
        Logo = styled_components_browser_esm.a.h1(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  font-size: 24px;\n  font-weight: bold;\n  margin: 0;\n',
            ]))
        ),
        MenuIcon = Object(styled_components_browser_esm.a)(index_esm.a)(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteralLoose([
              '\n  display: block;\n  font-size: 24px;\n  color: #fff;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n',
            ]))
        ),
        CustomModal = Object(styled_components_browser_esm.a)(lib_default.a)(
          _templateObject4 ||
            (_templateObject4 = _taggedTemplateLiteralLoose([
              '\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 5px;\n  outline: none;\n  padding: 20px;\n  color: #fff;\n  text-align: center;\n  height: 700px;\n  width: 300px;\n\n  @media (min-width: 768px) {\n    width: 400px;\n  }\n',
            ]))
        ),
        CloseButton = styled_components_browser_esm.a.button(
          _templateObject5 ||
            (_templateObject5 = _taggedTemplateLiteralLoose([
              '\n  background-color: #fff;\n  color: #282c34;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n',
            ]))
        ),
        CloseButtonContainer = styled_components_browser_esm.a.div(
          _templateObject6 ||
            (_templateObject6 = _taggedTemplateLiteralLoose([
              '\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n',
            ]))
        ),
        Header_Header = function Header(_ref) {
          var onMenuClose = _ref.onMenuClose,
            _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
            modalIsOpen = _useState2[0],
            setModalIsOpen = _useState2[1],
            handleOpenModal = Object(react.useCallback)(function () {
              setModalIsOpen(!0)
            }, []),
            handleCloseModal = Object(react.useCallback)(
              function () {
                setModalIsOpen(!1), onMenuClose()
              },
              [onMenuClose]
            )
          return Object(jsx_runtime.jsxs)(HeaderContainer, {
            children: [
              Object(jsx_runtime.jsx)(Logo, { children: 'MyLogApp Ver.1' }),
              Object(jsx_runtime.jsxs)('div', {
                children: [
                  Object(jsx_runtime.jsx)(MenuIcon, {
                    onClick: handleOpenModal,
                  }),
                  Object(jsx_runtime.jsxs)(CustomModal, {
                    isOpen: modalIsOpen,
                    onRequestClose: handleCloseModal,
                    shouldCloseOnOverlayClick: !0,
                    ariaHideApp: !1,
                    children: [
                      Object(jsx_runtime.jsx)('h2', { children: 'メニュー' }),
                      Object(jsx_runtime.jsx)('div', { children: 'Home' }),
                      Object(jsx_runtime.jsx)('div', { children: 'お金関係' }),
                      Object(jsx_runtime.jsx)(CloseButtonContainer, {
                        children: Object(jsx_runtime.jsx)(CloseButton, {
                          onClick: handleCloseModal,
                          children: '閉じる',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        }
      Header_Header.displayName = 'Header'
      var components_Header = Header_Header
      try {
        ;(Header_Header.displayName = 'Header'),
          (Header_Header.__docgenInfo = {
            description: '',
            displayName: 'Header',
            props: {
              onMenuClose: {
                defaultValue: null,
                description: '',
                name: 'onMenuClose',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Header/index.tsx#Header'] =
              {
                docgenInfo: Header_Header.__docgenInfo,
                name: 'Header',
                path: 'src/components/Header/index.tsx#Header',
              })
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: 'Header',
        component: components_Header,
      }
      var handleMenuClose = function handleMenuClose() {
          console.log('Menu closed!')
        },
        Header_stories_Default = function Default() {
          return Object(jsx_runtime.jsx)(components_Header, {
            onMenuClose: handleMenuClose,
          })
        }
      Header_stories_Default.displayName = 'Default'
    },
    './storybook-init-framework-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js'
      )
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
      ),
        __webpack_require__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        (module.exports = __webpack_require__('./generated-stories-entry.js'))
    },
    1: function (module, exports) {},
  },
  [[0, 2, 3]],
])
