__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_0__);


const playPauseVideosInView = () => {

  in_view__WEBPACK_IMPORTED_MODULE_0___default()('.js-video-plays-in-view')
    .on('enter', el => {
      console.log(el)
      setTimeout(function () {
        el.play()
      }, 300)
    })
    .on('exit', el => {
      console.log('exitii')
      el.pause();
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playPauseVideosInView);

//# sourceURL=webpack://shopify-theme-lab/./src/js/helpers/play-video-in-view.js?