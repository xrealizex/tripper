"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 9554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ provider),
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({
    apiKey: "AIzaSyDdZz8VL-q_PWpS_u2H9cE7nLLT84X6Eas",
    authDomain: "tripper-9fc71.firebaseapp.com",
    databaseURL: "https://tripper-9fc71.firebaseio.com",
    projectId: "tripper-9fc71",
    storageBucket: "tripper-9fc71.appspot.com",
    messagingSenderId: "297502223323",
    appId: "1:297502223323:web:a71b2a771ef85da5d655fe"
});
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(firebaseApp);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(firebaseApp);
const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;