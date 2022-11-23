"use strict";
(() => {
var exports = {};
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 61:
/***/ ((module) => {

module.exports = import("@firebase/auth");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 9334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth)
/* harmony export */ });
/* unused harmony exports storage, db, provider */
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

/***/ }),

/***/ 1685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInfo": () => (/* binding */ AuthInfo)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9334);
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4963);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);
([_firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthInfo = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, (user)=>{
            if (user) {
                dispatch((0,_userSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateUserProfile */ .Lj)({
                    uid: user.uid,
                    displayName: user.displayName ?? "",
                    photoUrl: user.photoURL ?? ""
                }));
            } else {
                dispatch((0,_userSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateUserProfile */ .Lj)({
                    uid: "",
                    displayName: "",
                    photoUrl: ""
                }));
            }
        });
    }, [
        dispatch
    ]);
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lj": () => (/* binding */ updateUserProfile)
});

// UNUSED EXPORTS: default, login, logout, selectUser, userSlice

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./src/userSlice.ts

const initialState = {
    uid: "",
    photoUrl: "",
    displayName: ""
};
const userSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "user",
    initialState,
    reducers: {
        login: (state, action)=>{
            state = action.payload;
        },
        logout: (state)=>{
            state = {
                uid: "",
                photoUrl: "",
                displayName: ""
            };
        },
        updateUserProfile: (state, action)=>{
            state.uid = action.payload.uid;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
        }
    }
});
const { login , logout , updateUserProfile  } = userSlice.actions;
const selectUser = (state)=>state.user;
/* harmony default export */ const src_userSlice = (userSlice.reducer);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1685));
module.exports = __webpack_exports__;

})();