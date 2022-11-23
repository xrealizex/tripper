"use strict";
exports.id = 517;
exports.ids = [517];
exports.modules = {

/***/ 5549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Router)
/* harmony export */ });
const Router = {
    main: {
        path: "../Main/TripLists",
        pageName: "メインページ"
    },
    register: {
        path: "../Register/Register",
        pageName: "メンバー登録"
    },
    login: {
        path: "../Login/Login",
        pageName: "ログイン"
    },
    logout: {
        path: "/",
        pageName: "ログアウト"
    },
    id: {
        path: "../Main/Plan/id",
        pageName: "id"
    },
    backToMain: {
        path: "../TripLists",
        pageName: "メインページ"
    }
};


/***/ }),

/***/ 3768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* binding */ updateUserProfile),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dy": () => (/* binding */ selectUser),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* unused harmony exports userSlice, logout */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    uid: "",
    photoUrl: "",
    displayName: ""
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ })

};
;