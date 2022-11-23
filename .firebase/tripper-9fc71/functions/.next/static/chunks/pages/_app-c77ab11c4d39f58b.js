(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2986:function(a,b,c){"use strict";c.d(b,{hJ:function(){return aT},Xb:function(){return a8},v0:function(){return cp},Aj:function(){return bc},e5:function(){return a9},rh:function(){return bQ},w7:function(){return bd},ck:function(){return bb}});var d,e=c(4444),f=c(5816),g=function(a,b){return(g=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},h=function(){return(h=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function i(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}function j(a){return this instanceof j?(this.v=a,this):new j(a)}var k=c(3333),l=c(8463);function m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let n=m,o=new e.LL("auth","Firebase",m()),p=new k.Yd("@firebase/auth");function q(a,...b){p.logLevel<=k.in.ERROR&&p.error(`Auth (${f.Jn}): ${a}`,...b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function r(a,...b){throw v(a,...b)}function s(a,...b){return v(a,...b)}function t(a,b,c){let d=Object.assign(Object.assign({},n()),{[b]:c}),f=new e.LL("auth","Firebase",d);return f.create(b,{appName:a.name})}function u(a,b,c){let d=c;if(!(b instanceof d))throw d.name!==b.constructor.name&&r(a,"argument-error"),t(a,"argument-error",`Type of ${b.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(a,...b){if("string"!=typeof a){let c=b[0],d=[...b.slice(1)];return d[0]&&(d[0].appName=a.name),a._errorFactory.create(c,...d)}return o.create(a,...b)}function w(a,b,...c){if(!a)throw v(b,...c)}function x(a){let b="INTERNAL ASSERTION FAILED: "+a;throw q(b),Error(b)}function y(a,b){a||x(b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let z=new Map;function A(a){y(a instanceof Function,"Expected a class definition");let b=z.get(a);return b?(y(b instanceof a,"Instance stored in cache mismatched with class"),b):(b=new a,z.set(a,b),b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function B(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.href)||""}function C(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class D{constructor(a,b){this.shortDelay=a,this.longDelay=b,y(b>a,"Short delay should be less than long delay!"),this.isMobile=(0,e.uI)()||(0,e.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===C()||"https:"===C()||(0,e.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(a,b){y(a.emulator,"Emulator should always be set here");let{url:c}=a.emulator;return b?`${c}${b.startsWith("/")?b.slice(1):b}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F{static initialize(a,b,c){this.fetchImpl=a,b&&(this.headersImpl=b),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ let G={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},H=new D(3e4,6e4);function I(a,b){return a.tenantId&&!b.tenantId?Object.assign(Object.assign({},b),{tenantId:a.tenantId}):b}async function J(a,b,c,d,f={}){return K(a,f,async()=>{let f={},g={};d&&("GET"===b?g=d:f={body:JSON.stringify(d)});let h=(0,e.xO)(Object.assign({key:a.config.apiKey},g)).slice(1),i=await a._getAdditionalHeaders();return i["Content-Type"]="application/json",a.languageCode&&(i["X-Firebase-Locale"]=a.languageCode),F.fetch()(M(a,a.config.apiHost,c,h),Object.assign({method:b,headers:i,referrerPolicy:"no-referrer"},f))})}async function K(a,b,c){a._canInitEmulator=!1;let d=Object.assign(Object.assign({},G),b);try{let f=new N(a),g=await Promise.race([c(),f.promise]);f.clearNetworkTimeout();let h=await g.json();if("needConfirmation"in h)throw O(a,"account-exists-with-different-credential",h);if(g.ok&&!("errorMessage"in h))return h;{let i=g.ok?h.errorMessage:h.error.message,[j,k]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===j)throw O(a,"credential-already-in-use",h);if("EMAIL_EXISTS"===j)throw O(a,"email-already-in-use",h);if("USER_DISABLED"===j)throw O(a,"user-disabled",h);let l=d[j]||j.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw t(a,l,k);r(a,l)}}catch(m){if(m instanceof e.ZR)throw m;r(a,"network-request-failed")}}async function L(a,b,c,d,e={}){let f=await J(a,b,c,d,e);return"mfaPendingCredential"in f&&r(a,"multi-factor-auth-required",{_serverResponse:f}),f}function M(a,b,c,d){let e=`${b}${c}?${d}`;return a.config.emulator?E(a.config,e):`${a.config.apiScheme}://${e}`}class N{constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((a,b)=>{this.timer=setTimeout(()=>b(s(this.auth,"network-request-failed")),H.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function O(a,b,c){let d={appName:a.name};c.email&&(d.email=c.email),c.phoneNumber&&(d.phoneNumber=c.phoneNumber);let e=s(a,b,d);return e.customData._tokenResponse=c,e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function P(a,b){return J(a,"POST","/v1/accounts:delete",b)}async function Q(a,b){return J(a,"POST","/v1/accounts:lookup",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function R(a){if(a)try{let b=new Date(Number(a));if(!isNaN(b.getTime()))return b.toUTCString()}catch(c){}}async function S(a,b=!1){let c=(0,e.m9)(a),d=await c.getIdToken(b),f=U(d);w(f&&f.exp&&f.auth_time&&f.iat,c.auth,"internal-error");let g="object"==typeof f.firebase?f.firebase:void 0,h=null==g?void 0:g.sign_in_provider;return{claims:f,token:d,authTime:R(T(f.auth_time)),issuedAtTime:R(T(f.iat)),expirationTime:R(T(f.exp)),signInProvider:h||null,signInSecondFactor:(null==g?void 0:g.sign_in_second_factor)||null}}function T(a){return 1e3*Number(a)}function U(a){var b;let[c,d,f]=a.split(".");if(void 0===c|| void 0===d|| void 0===f)return q("JWT malformed, contained fewer than 3 sections"),null;try{let g=(0,e.tV)(d);if(!g)return q("Failed to decode base64 JWT payload"),null;return JSON.parse(g)}catch(h){return q("Caught error parsing JWT payload as JSON",null===(b=h)|| void 0===b?void 0:b.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function V(a,b,c=!1){if(c)return b;try{return await b}catch(d){throw d instanceof e.ZR&&W(d)&&a.auth.currentUser===a&&await a.auth.signOut(),d}}function W({code:a}){return"auth/user-disabled"===a||"auth/user-token-expired"===a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X{constructor(a,b){this.createdAt=a,this.lastLoginAt=b,this._initializeTime()}_initializeTime(){this.lastSignInTime=R(this.lastLoginAt),this.creationTime=R(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Y(a){var b;let c=a.auth,d=await a.getIdToken(),e=await V(a,Q(c,{idToken:d}));w(null==e?void 0:e.users.length,c,"internal-error");let f=e.users[0];a._notifyReloadListener(f);let g=(null===(b=f.providerUserInfo)|| void 0===b?void 0:b.length)?_(f.providerUserInfo):[],h=$(a.providerData,g),i=a.isAnonymous,j=!(a.email&&f.passwordHash)&&!(null==h?void 0:h.length),k={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:h,metadata:new X(f.createdAt,f.lastLoginAt),isAnonymous:!!i&&j};Object.assign(a,k)}async function Z(a){let b=(0,e.m9)(a);await Y(b),await b.auth._persistUserIfCurrent(b),b.auth._notifyListenersIfCurrent(b)}function $(a,b){let c=a.filter(a=>!b.some(b=>b.providerId===a.providerId));return[...c,...b]}function _(a){return a.map(a=>{var{providerId:b}=a,c=i(a,["providerId"]);return{providerId:b,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aa(a,b){let c=await K(a,{},async()=>{let c=(0,e.xO)({grant_type:"refresh_token",refresh_token:b}).slice(1),{tokenApiHost:d,apiKey:f}=a.config,g=M(a,d,"/v1/token",`key=${f}`),h=await a._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(g,{method:"POST",headers:h,body:c})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class ab{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){w(a.idToken,"internal-error"),w(void 0!==a.idToken,"internal-error"),w(void 0!==a.refreshToken,"internal-error");let b="expiresIn"in a&& void 0!==a.expiresIn?Number(a.expiresIn):function(a){let b=U(a);return w(b,"internal-error"),w(void 0!==b.exp,"internal-error"),w(void 0!==b.iat,"internal-error"),Number(b.exp)-Number(b.iat)}(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,b)}async getToken(a,b=!1){return(w(!this.accessToken||this.refreshToken,a,"user-token-expired"),b||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(a,b){let{accessToken:c,refreshToken:d,expiresIn:e}=await aa(a,b);this.updateTokensAndExpiration(c,d,Number(e))}updateTokensAndExpiration(a,b,c){this.refreshToken=b||null,this.accessToken=a||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(a,b){let{refreshToken:c,accessToken:d,expirationTime:e}=b,f=new ab;return c&&(w("string"==typeof c,"internal-error",{appName:a}),f.refreshToken=c),d&&(w("string"==typeof d,"internal-error",{appName:a}),f.accessToken=d),e&&(w("number"==typeof e,"internal-error",{appName:a}),f.expirationTime=e),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new ab,this.toJSON())}_performRefresh(){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ac(a,b){w("string"==typeof a|| void 0===a,"internal-error",{appName:b})}class ad{constructor(a){var{uid:b,auth:c,stsTokenManager:d}=a,e=i(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(a){var b;if(a){let c=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),c}{this.errorBackoff=3e4;let d=null!==(b=this.user.stsTokenManager.expirationTime)&& void 0!==b?b:0,e=d-Date.now()-3e5;return Math.max(0,e)}}schedule(a=!1){if(!this.isRunning)return;let b=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},b)}async iteration(){var a;try{await this.user.getIdToken(!0)}catch(b){(null===(a=b)|| void 0===a?void 0:a.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=b,this.auth=c,this.stsTokenManager=d,this.accessToken=d.accessToken,this.displayName=e.displayName||null,this.email=e.email||null,this.emailVerified=e.emailVerified||!1,this.phoneNumber=e.phoneNumber||null,this.photoURL=e.photoURL||null,this.isAnonymous=e.isAnonymous||!1,this.tenantId=e.tenantId||null,this.providerData=e.providerData?[...e.providerData]:[],this.metadata=new X(e.createdAt||void 0,e.lastLoginAt||void 0)}async getIdToken(a){let b=await V(this,this.stsTokenManager.getToken(this.auth,a));return w(b,this.auth,"internal-error"),this.accessToken!==b&&(this.accessToken=b,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),b}getIdTokenResult(a){return S(this,a)}reload(){return Z(this)}_assign(a){this!==a&&(w(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(a=>Object.assign({},a)),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){return new ad(Object.assign(Object.assign({},this),{auth:a,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(a){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,b=!1){let c=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),c=!0),b&&await Y(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){let a=await this.getIdToken();return await V(this,P(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>Object.assign({},a)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,b){var c,d,e,f,g,h,i,j;let k=null!==(c=b.displayName)&& void 0!==c?c:void 0,l=null!==(d=b.email)&& void 0!==d?d:void 0,m=null!==(e=b.phoneNumber)&& void 0!==e?e:void 0,n=null!==(f=b.photoURL)&& void 0!==f?f:void 0,o=null!==(g=b.tenantId)&& void 0!==g?g:void 0,p=null!==(h=b._redirectEventId)&& void 0!==h?h:void 0,q=null!==(i=b.createdAt)&& void 0!==i?i:void 0,r=null!==(j=b.lastLoginAt)&& void 0!==j?j:void 0,{uid:s,emailVerified:t,isAnonymous:u,providerData:v,stsTokenManager:x}=b;w(s&&x,a,"internal-error");let y=ab.fromJSON(this.name,x);w("string"==typeof s,a,"internal-error"),ac(k,a.name),ac(l,a.name),w("boolean"==typeof t,a,"internal-error"),w("boolean"==typeof u,a,"internal-error"),ac(m,a.name),ac(n,a.name),ac(o,a.name),ac(p,a.name),ac(q,a.name),ac(r,a.name);let z=new ad({uid:s,auth:a,email:l,emailVerified:t,displayName:k,isAnonymous:u,photoURL:n,phoneNumber:m,tenantId:o,stsTokenManager:y,createdAt:q,lastLoginAt:r});return v&&Array.isArray(v)&&(z.providerData=v.map(a=>Object.assign({},a))),p&&(z._redirectEventId=p),z}static async _fromIdTokenResponse(a,b,c=!1){let d=new ab;d.updateFromServerResponse(b);let e=new ad({uid:b.localId,auth:a,stsTokenManager:d,isAnonymous:c});return await Y(e),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,b){this.storage[a]=b}async _get(a){let b=this.storage[a];return void 0===b?null:b}async _remove(a){delete this.storage[a]}_addListener(a,b){}_removeListener(a,b){}}ae.type="NONE";let af=ae;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ag(a,b,c){return`firebase:${a}:${b}:${c}`}class ah{constructor(a,b,c){this.persistence=a,this.auth=b,this.userKey=c;let{config:d,name:e}=this.auth;this.fullUserKey=ag(this.userKey,d.apiKey,e),this.fullPersistenceKey=ag("persistence",d.apiKey,e),this.boundEventHandler=b._onStorageEvent.bind(b),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){let a=await this.persistence._get(this.fullUserKey);return a?ad._fromJSON(this.auth,a):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;let b=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,b)return this.setCurrentUser(b)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,b,c="authUser"){if(!b.length)return new ah(A(af),a,c);let d=(await Promise.all(b.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a),e=d[0]||A(af),f=ag(c,a.config.apiKey,a.name),g=null;for(let h of b)try{let i=await h._get(f);if(i){let j=ad._fromJSON(a,i);h!==e&&(g=j),e=h;break}}catch(k){}let l=d.filter(a=>a._shouldAllowMigration);return e._shouldAllowMigration&&l.length&&(e=l[0],g&&await e._set(f,g.toJSON()),await Promise.all(b.map(async a=>{if(a!==e)try{await a._remove(f)}catch(b){}}))),new ah(e,a,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function ai(a){let b=a.toLowerCase();if(b.includes("opera/")||b.includes("opr/")||b.includes("opios/"))return"Opera";if(am(b))return"IEMobile";if(b.includes("msie")||b.includes("trident/"))return"IE";{if(b.includes("edge/"))return"Edge";if(aj(b))return"Firefox";if(b.includes("silk/"))return"Silk";if(ao(b))return"Blackberry";if(ap(b))return"Webos";if(ak(b))return"Safari";if((b.includes("chrome/")||al(b))&&!b.includes("edge/"))return"Chrome";if(an(b))return"Android";let c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,d=a.match(c);if((null==d?void 0:d.length)===2)return d[1]}return"Other"}function aj(a=(0,e.z$)()){return/firefox\//i.test(a)}function ak(a=(0,e.z$)()){let b=a.toLowerCase();return b.includes("safari/")&&!b.includes("chrome/")&&!b.includes("crios/")&&!b.includes("android")}function al(a=(0,e.z$)()){return/crios\//i.test(a)}function am(a=(0,e.z$)()){return/iemobile/i.test(a)}function an(a=(0,e.z$)()){return/android/i.test(a)}function ao(a=(0,e.z$)()){return/blackberry/i.test(a)}function ap(a=(0,e.z$)()){return/webos/i.test(a)}function aq(a=(0,e.z$)()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function ar(a=(0,e.z$)()){return aq(a)||an(a)||ap(a)||ao(a)||/windows phone/i.test(a)||am(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * Determine the SDK version string
 */ function as(a,b=[]){let c;switch(a){case"Browser":c=ai((0,e.z$)());break;case"Worker":c=`${ai((0,e.z$)())}-${a}`;break;default:c=a}let d=b.length?b.join(","):"FirebaseCore-web";return`${c}/JsCore/${f.Jn}/${d}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at{constructor(a,b,c){this.app=a,this.heartbeatServiceProvider=b,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,b){let c=b=>new Promise((c,d)=>{try{let e=a(b);c(e)}catch(f){d(f)}});c.onAbort=b,this.queue.push(c);let d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(a){var b;if(this.auth.currentUser===a)return;let c=[];try{for(let d of this.queue)await d(a),d.onAbort&&c.push(d.onAbort)}catch(e){for(let f of(c.reverse(),c))try{f()}catch(g){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(b=e)|| void 0===b?void 0:b.message})}}}(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(a,b){return b&&(this._popupRedirectResolver=A(b)),this._initializationPromise=this.queue(async()=>{var c,d;if(!this._deleted&&(this.persistenceManager=await ah.create(this,a),!this._deleted)){if(null===(c=this._popupRedirectResolver)|| void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(b),this.lastNotifiedUid=(null===(d=this.currentUser)|| void 0===d?void 0:d.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let a=await this.assertedPersistence.getCurrentUser();if(this.currentUser||a){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUser(a){var b;let c=await this.assertedPersistence.getCurrentUser(),d=c,e=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let f=null===(b=this.redirectUser)|| void 0===b?void 0:b._redirectEventId,g=null==d?void 0:d._redirectEventId,h=await this.tryRedirectSignIn(a);(!f||f===g)&&(null==h?void 0:h.user)&&(d=h.user,e=!0)}if(!d)return this.directlySetCurrentUser(null);if(!d._redirectEventId){if(e)try{await this.beforeStateQueue.runMiddleware(d)}catch(i){d=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return d?this.reloadAndSetCurrentUserOrClear(d):this.directlySetCurrentUser(null)}return(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===d._redirectEventId)?this.directlySetCurrentUser(d):this.reloadAndSetCurrentUserOrClear(d)}async tryRedirectSignIn(a){let b=null;try{b=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch(c){await this._setRedirectUser(null)}return b}async reloadAndSetCurrentUserOrClear(a){var b;try{await Y(a)}catch(c){if((null===(b=c)|| void 0===b?void 0:b.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let a=navigator;return a.languages&&a.languages[0]||a.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(a){let b=a?(0,e.m9)(a):null;return b&&w(b.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(b&&b._clone(this))}async _updateCurrentUser(a,b=!1){if(!this._deleted)return a&&w(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),b||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(a){return this.queue(async()=>{await this.assertedPersistence.setPersistence(A(a))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(a){this._errorFactory=new e.LL("auth","Firebase",a())}onAuthStateChanged(a,b,c){return this.registerStateListener(this.authStateSubscription,a,b,c)}beforeAuthStateChanged(a,b){return this.beforeStateQueue.pushCallback(a,b)}onIdTokenChanged(a,b,c){return this.registerStateListener(this.idTokenSubscription,a,b,c)}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(a=this._currentUser)|| void 0===a?void 0:a.toJSON()}}async _setRedirectUser(a,b){let c=await this.getOrInitRedirectPersistenceManager(b);return null===a?c.removeCurrentUser():c.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){let b=a&&A(a)||this._popupRedirectResolver;w(b,this,"argument-error"),this.redirectPersistenceManager=await ah.create(this,[A(b._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){var b,c;return(this._isInitialized&&await this.queue(async()=>{}),(null===(b=this._currentUser)|| void 0===b?void 0:b._redirectEventId)===a)?this._currentUser:(null===(c=this.redirectUser)|| void 0===c?void 0:c._redirectEventId)===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var a,b;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let c=null!==(b=null===(a=this.currentUser)|| void 0===a?void 0:a.uid)&& void 0!==b?b:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,b,c,d){if(this._deleted)return()=>{};let e="function"==typeof b?b:b.next.bind(b),f=this._isInitialized?Promise.resolve():this._initializationPromise;return(w(f,this,"internal-error"),f.then(()=>e(this.currentUser)),"function"==typeof b)?a.addObserver(b,c,d):a.addObserver(b)}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!(!a||this.frameworks.includes(a))&&(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;let b={"X-Client-Version":this.clientVersion};this.app.options.appId&&(b["X-Firebase-gmpid"]=this.app.options.appId);let c=await (null===(a=this.heartbeatServiceProvider.getImmediate({optional:!0}))|| void 0===a?void 0:a.getHeartbeatsHeader());return c&&(b["X-Firebase-Client"]=c),b}}function au(a){return(0,e.m9)(a)}class av{constructor(a){this.auth=a,this.observer=null,this.addObserver=(0,e.ne)(a=>this.observer=a)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aw(a){if(!a)return null;let b=Number(a);return isNaN(b)?null:b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class ax{constructor(a,b){this.providerId=a,this.signInMethod=b}toJSON(){return x("not implemented")}_getIdTokenResponse(a){return x("not implemented")}_linkToIdToken(a,b){return x("not implemented")}_getReauthenticationResolver(a){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ay(a,b){return J(a,"POST","/v1/accounts:resetPassword",I(a,b))}async function az(a,b){return J(a,"POST","/v1/accounts:update",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aA(a,b){return L(a,"POST","/v1/accounts:signInWithPassword",I(a,b))}async function aB(a,b){return J(a,"POST","/v1/accounts:sendOobCode",I(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aC(a,b){return L(a,"POST","/v1/accounts:signInWithEmailLink",I(a,b))}async function aD(a,b){return L(a,"POST","/v1/accounts:signInWithEmailLink",I(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class aE extends ax{constructor(a,b,c,d=null){super("password",c),this._email=a,this._password=b,this._tenantId=d}static _fromEmailAndPassword(a,b){return new aE(a,b,"password")}static _fromEmailAndCode(a,b,c=null){return new aE(a,b,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a;if((null==b?void 0:b.email)&&(null==b?void 0:b.password)){if("password"===b.signInMethod)return this._fromEmailAndPassword(b.email,b.password);if("emailLink"===b.signInMethod)return this._fromEmailAndCode(b.email,b.password,b.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":return aA(a,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aC(a,{email:this._email,oobCode:this._password});default:r(a,"internal-error")}}async _linkToIdToken(a,b){switch(this.signInMethod){case"password":return az(a,{idToken:b,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aD(a,{idToken:b,email:this._email,oobCode:this._password});default:r(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aF(a,b){return L(a,"POST","/v1/accounts:signInWithIdp",I(a,b))}class aG extends ax{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){let b=new aG(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(b.idToken=a.idToken),a.accessToken&&(b.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(b.nonce=a.nonce),a.pendingToken&&(b.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(b.accessToken=a.oauthToken,b.secret=a.oauthTokenSecret):r("argument-error"),b}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d}=b,e=i(b,["providerId","signInMethod"]);if(!c||!d)return null;let f=new aG(c,d);return f.idToken=e.idToken||void 0,f.accessToken=e.accessToken||void 0,f.secret=e.secret,f.nonce=e.nonce,f.pendingToken=e.pendingToken||null,f}_getIdTokenResponse(a){let b=this.buildRequest();return aF(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aF(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aF(a,b)}buildRequest(){let a={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{let b={};this.idToken&&(b.id_token=this.idToken),this.accessToken&&(b.access_token=this.accessToken),this.secret&&(b.oauth_token_secret=this.secret),b.providerId=this.providerId,this.nonce&&!this.pendingToken&&(b.nonce=this.nonce),a.postBody=(0,e.xO)(b)}return a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aH(a,b){return J(a,"POST","/v1/accounts:sendVerificationCode",I(a,b))}async function aI(a,b){return L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,b))}async function aJ(a,b){let c=await L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,b));if(c.temporaryProof)throw O(a,"account-exists-with-different-credential",c);return c}let aK={USER_NOT_FOUND:"user-not-found"};async function aL(a,b){let c=Object.assign(Object.assign({},b),{operation:"REAUTH"});return L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,c),aK)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class aM extends ax{constructor(a){super("phone","phone"),this.params=a}static _fromVerification(a,b){return new aM({verificationId:a,verificationCode:b})}static _fromTokenResponse(a,b){return new aM({phoneNumber:a,temporaryProof:b})}_getIdTokenResponse(a){return aI(a,this._makeVerificationRequest())}_linkToIdToken(a,b){return aJ(a,Object.assign({idToken:b},this._makeVerificationRequest()))}_getReauthenticationResolver(a){return aL(a,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:a,phoneNumber:b,verificationId:c,verificationCode:d}=this.params;return a&&b?{temporaryProof:a,phoneNumber:b}:{sessionInfo:c,code:d}}toJSON(){let a={providerId:this.providerId};return this.params.phoneNumber&&(a.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(a.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(a.verificationCode=this.params.verificationCode),this.params.verificationId&&(a.verificationId=this.params.verificationId),a}static fromJSON(a){"string"==typeof a&&(a=JSON.parse(a));let{verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}=a;return c||b||d||e?new aM({verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}):null}}class aN{constructor(a){var b,c,d,f,g,h;let i=(0,e.zd)((0,e.pd)(a)),j=null!==(b=i.apiKey)&& void 0!==b?b:null,k=null!==(c=i.oobCode)&& void 0!==c?c:null,l=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(d=i.mode)&& void 0!==d?d:null);w(j&&k&&l,"argument-error"),this.apiKey=j,this.operation=l,this.code=k,this.continueUrl=null!==(f=i.continueUrl)&& void 0!==f?f:null,this.languageCode=null!==(g=i.languageCode)&& void 0!==g?g:null,this.tenantId=null!==(h=i.tenantId)&& void 0!==h?h:null}static parseLink(a){let b=function(a){let b=(0,e.zd)((0,e.pd)(a)).link,c=b?(0,e.zd)((0,e.pd)(b)).deep_link_id:null,d=(0,e.zd)((0,e.pd)(a)).deep_link_id,f=d?(0,e.zd)((0,e.pd)(d)).link:null;return f||d||c||b||a}(a);try{return new aN(b)}catch(c){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class aO{constructor(){this.providerId=aO.PROVIDER_ID}static credential(a,b){return aE._fromEmailAndPassword(a,b)}static credentialWithLink(a,b){let c=aN.parseLink(b);return w(c,"argument-error"),aE._fromEmailAndCode(a,c.code,c.tenantId)}}aO.PROVIDER_ID="password",aO.EMAIL_PASSWORD_SIGN_IN_METHOD="password",aO.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class aP{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class aQ extends aP{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class aR extends null{static credentialFromJSON(a){let b="string"==typeof a?JSON.parse(a):a;return w("providerId"in b&&"signInMethod"in b,"argument-error"),aG._fromParams(b)}credential(a){return this._credential(Object.assign(Object.assign({},a),{nonce:a.rawNonce}))}_credential(a){return w(a.idToken||a.accessToken,"argument-error"),aG._fromParams(Object.assign(Object.assign({},a),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(a){return aR.oauthCredentialFromTaggedObject(a)}static credentialFromError(a){return aR.oauthCredentialFromTaggedObject(a.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c,oauthTokenSecret:d,pendingToken:e,nonce:f,providerId:g}=a;if(!c&&!d&&!b&&!e||!g)return null;try{return new aR(g)._credential({idToken:b,accessToken:c,nonce:f,pendingToken:e})}catch(h){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aS extends aQ{constructor(){super("facebook.com")}static credential(a){return aG._fromParams({providerId:aS.PROVIDER_ID,signInMethod:aS.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aS.credentialFromTaggedObject(a)}static credentialFromError(a){return aS.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aS.credential(a.oauthAccessToken)}catch(b){return null}}}aS.FACEBOOK_SIGN_IN_METHOD="facebook.com",aS.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aT extends aQ{constructor(){super("google.com"),this.addScope("profile")}static credential(a,b){return aG._fromParams({providerId:aT.PROVIDER_ID,signInMethod:aT.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:b})}static credentialFromResult(a){return aT.credentialFromTaggedObject(a)}static credentialFromError(a){return aT.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c}=a;if(!b&&!c)return null;try{return aT.credential(b,c)}catch(d){return null}}}aT.GOOGLE_SIGN_IN_METHOD="google.com",aT.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class aU extends aQ{constructor(){super("github.com")}static credential(a){return aG._fromParams({providerId:aU.PROVIDER_ID,signInMethod:aU.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aU.credentialFromTaggedObject(a)}static credentialFromError(a){return aU.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aU.credential(a.oauthAccessToken)}catch(b){return null}}}aU.GITHUB_SIGN_IN_METHOD="github.com",aU.PROVIDER_ID="github.com";class aV extends null{constructor(a,b){super(a,a),this.pendingToken=b}_getIdTokenResponse(a){let b=this.buildRequest();return aF(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aF(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aF(a,b)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d,pendingToken:e}=b;return c&&d&&e&&c===d?new aV(c,e):null}static _create(a,b){return new aV(a,b)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class aW extends null{constructor(a){w(a.startsWith("saml."),"argument-error"),super(a)}static credentialFromResult(a){return aW.samlCredentialFromTaggedObject(a)}static credentialFromError(a){return aW.samlCredentialFromTaggedObject(a.customData||{})}static credentialFromJSON(a){let b=aV.fromJSON(a);return w(b,"argument-error"),b}static samlCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{pendingToken:b,providerId:c}=a;if(!b||!c)return null;try{return aV._create(c,b)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class aX extends aQ{constructor(){super("twitter.com")}static credential(a,b){return aG._fromParams({providerId:aX.PROVIDER_ID,signInMethod:aX.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:b})}static credentialFromResult(a){return aX.credentialFromTaggedObject(a)}static credentialFromError(a){return aX.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthAccessToken:b,oauthTokenSecret:c}=a;if(!b||!c)return null;try{return aX.credential(b,c)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aY(a,b){return L(a,"POST","/v1/accounts:signUp",I(a,b))}aX.TWITTER_SIGN_IN_METHOD="twitter.com",aX.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aZ{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,b,c,d=!1){let e=await ad._fromIdTokenResponse(a,c,d),f=a$(c),g=new aZ({user:e,providerId:f,_tokenResponse:c,operationType:b});return g}static async _forOperation(a,b,c){await a._updateTokensIfNecessary(c,!0);let d=a$(c);return new aZ({user:a,providerId:d,_tokenResponse:c,operationType:b})}}function a$(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a_ extends e.ZR{constructor(a,b,c,d){var e;super(b.code,b.message),this.operationType=c,this.user=d,Object.setPrototypeOf(this,a_.prototype),this.customData={appName:a.name,tenantId:null!==(e=a.tenantId)&& void 0!==e?e:void 0,_serverResponse:b.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(a,b,c,d){return new a_(a,b,c,d)}}function a0(a,b,c,d){let e="reauthenticate"===b?c._getReauthenticationResolver(a):c._getIdTokenResponse(a);return e.catch(c=>{if("auth/multi-factor-auth-required"===c.code)throw a_._fromErrorAndOperation(a,c,b,d);throw c})}async function a1(a,b,c=!1){let d=await V(a,b._linkToIdToken(a.auth,await a.getIdToken()),c);return aZ._forOperation(a,"link",d)}async function a2(a,b,c){var d;await Y(b);let e=(d=b.providerData,new Set(d.map(({providerId:a})=>a).filter(a=>!!a)));w(e.has(c)===a,b.auth,!1===a?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a3(a,b,c=!1){var d;let{auth:e}=a,f="reauthenticate";try{let g=await V(a,a0(e,f,b,a),c);w(g.idToken,e,"internal-error");let h=U(g.idToken);w(h,e,"internal-error");let{sub:i}=h;return w(a.uid===i,e,"user-mismatch"),aZ._forOperation(a,f,g)}catch(j){throw(null===(d=j)|| void 0===d?void 0:d.code)==="auth/user-not-found"&&r(e,"user-mismatch"),j}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a4(a,b,c=!1){let d="signIn",e=await a0(a,d,b),f=await aZ._fromIdTokenResponse(a,d,e);return c||await a._updateCurrentUser(f.user),f}async function a5(a,b){return a4(au(a),b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a6{constructor(a,b){this.factorId=a,this.uid=b.mfaEnrollmentId,this.enrollmentTime=new Date(b.enrolledAt).toUTCString(),this.displayName=b.displayName}static _fromServerResponse(a,b){return"phoneInfo"in b?a7._fromServerResponse(a,b):r(a,"internal-error")}}class a7 extends null{constructor(a){super("phone",a),this.phoneNumber=a.phoneInfo}static _fromServerResponse(a,b){return new a7(b)}}async function a8(a,b,c){let d=au(a),e=await aY(d,{returnSecureToken:!0,email:b,password:c}),f=await aZ._fromIdTokenResponse(d,"signIn",e);return await d._updateCurrentUser(f.user),f}function a9(a,b,c){return a5((0,e.m9)(a),aO.credential(b,c))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ba(a,b){return J(a,"POST","/v1/accounts:update",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Updates a user's profile data.
 *
 * @param user - The user.
 * @param profile - The profile's `displayName` and `photoURL` to update.
 *
 * @public
 */ async function bb(a,{displayName:b,photoURL:c}){if(void 0===b&& void 0===c)return;let d=(0,e.m9)(a),f=await d.getIdToken(),g=await V(d,ba(d.auth,{idToken:f,displayName:b,photoUrl:c,returnSecureToken:!0}));d.displayName=g.displayName||null,d.photoURL=g.photoUrl||null;let h=d.providerData.find(({providerId:a})=>"password"===a);h&&(h.displayName=d.displayName,h.photoURL=d.photoURL),await d._updateTokensIfNecessary(g)}function bc(a,b,c,d){return(0,e.m9)(a).onAuthStateChanged(b,c,d)}function bd(a){return(0,e.m9)(a).signOut()}class be{constructor(a,b){this.type=a,this.credential=b}static _fromIdtoken(a){return new be("enroll",a)}static _fromMfaPendingCredential(a){return new be("signin",a)}toJSON(){let a="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[a]:this.credential}}}static fromJSON(a){var b,c;if(null==a?void 0:a.multiFactorSession){if(null===(b=a.multiFactorSession)|| void 0===b?void 0:b.pendingCredential)return be._fromMfaPendingCredential(a.multiFactorSession.pendingCredential);if(null===(c=a.multiFactorSession)|| void 0===c?void 0:c.idToken)return be._fromIdtoken(a.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bf{constructor(a,b,c){this.session=a,this.hints=b,this.signInResolver=c}static _fromError(a,b){let c=au(a),d=b.customData._serverResponse,e=(d.mfaInfo||[]).map(a=>a6._fromServerResponse(c,a));w(d.mfaPendingCredential,c,"internal-error");let f=be._fromMfaPendingCredential(d.mfaPendingCredential);return new bf(f,e,async a=>{let e=await a._process(c,f);delete d.mfaInfo,delete d.mfaPendingCredential;let g=Object.assign(Object.assign({},d),{idToken:e.idToken,refreshToken:e.refreshToken});switch(b.operationType){case"signIn":let h=await aZ._fromIdTokenResponse(c,b.operationType,g);return await c._updateCurrentUser(h.user),h;case"reauthenticate":return w(b.user,c,"internal-error"),aZ._forOperation(b.user,b.operationType,g);default:r(c,"internal-error")}})}async resolveSignIn(a){return this.signInResolver(a)}}class bg{constructor(a){this.user=a,this.enrolledFactors=[],a._onReload(b=>{b.mfaInfo&&(this.enrolledFactors=b.mfaInfo.map(b=>a6._fromServerResponse(a.auth,b)))})}static _fromUser(a){return new bg(a)}async getSession(){return be._fromIdtoken(await this.user.getIdToken())}async enroll(a,b){let c=await this.getSession(),d=await V(this.user,a._process(this.user.auth,c,b));return await this.user._updateTokensIfNecessary(d),this.user.reload()}async unenroll(a){var b,c,d;let e="string"==typeof a?a:a.uid,f=await this.user.getIdToken(),g=await V(this.user,(c=this.user.auth,J(c,"POST","/v2/accounts/mfaEnrollment:withdraw",I(c,d={idToken:f,mfaEnrollmentId:e}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==e),await this.user._updateTokensIfNecessary(g);try{await this.user.reload()}catch(h){if((null===(b=h)|| void 0===b?void 0:b.code)!=="auth/user-token-expired")throw h}}}new WeakMap;let bh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class bi{constructor(a,b){this.storageRetriever=a,this.type=b}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(bh,"1"),this.storage.removeItem(bh),Promise.resolve(!0)}catch(a){return Promise.resolve(!1)}}_set(a,b){return this.storage.setItem(a,JSON.stringify(b)),Promise.resolve()}_get(a){let b=this.storage.getItem(a);return Promise.resolve(b?JSON.parse(b):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}class bj extends bi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,b)=>this.onStorageEvent(a,b),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let a=(0,e.z$)();return ak(a)||aq(a)}()&&function(){try{return!!(window&&window!==window.top)}catch(a){return!1}}(),this.fallbackToPolling=ar(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(let b of Object.keys(this.listeners)){let c=this.storage.getItem(b),d=this.localCache[b];c!==d&&a(b,d,c)}}onStorageEvent(a,b=!1){if(!a.key){this.forAllChangedKeys((a,b,c)=>{this.notifyListeners(a,c)});return}let c=a.key;if(b?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let d=this.storage.getItem(c);if(a.newValue!==d)null!==a.newValue?this.storage.setItem(c,a.newValue):this.storage.removeItem(c);else if(this.localCache[c]===a.newValue&&!b)return}let f=()=>{let a=this.storage.getItem(c);(b||this.localCache[c]!==a)&&this.notifyListeners(c,a)},g=this.storage.getItem(c);(0,e.w1)()&&10===document.documentMode&&g!==a.newValue&&a.newValue!==a.oldValue?setTimeout(f,10):f()}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b?JSON.parse(b):b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,b,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:b,newValue:c}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,b){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(a,b){await super._set(a,b),this.localCache[a]=JSON.stringify(b)}async _get(a){let b=await super._get(a);return this.localCache[a]=JSON.stringify(b),b}async _remove(a){await super._remove(a),delete this.localCache[a]}}bj.type="LOCAL";let bk=bj;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bl extends bi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,b){}_removeListener(a,b){}}bl.type="SESSION";let bm=bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface class for receiving messages.
 *
 */ class bn{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){let b=this.receivers.find(b=>b.isListeningto(a));if(b)return b;let c=new bn(a);return this.receivers.push(c),c}isListeningto(a){return this.eventTarget===a}async handleEvent(a){var b;let c=a,{eventId:d,eventType:e,data:f}=c.data,g=this.handlersMap[e];if(!(null==g?void 0:g.size))return;c.ports[0].postMessage({status:"ack",eventId:d,eventType:e});let h=Array.from(g).map(async a=>a(c.origin,f)),i=await Promise.all((b=h).map(async a=>{try{let b=await a;return{fulfilled:!0,value:b}}catch(c){return{fulfilled:!1,reason:c}}}));c.ports[0].postMessage({status:"done",eventId:d,eventType:e,response:i})}_subscribe(a,b){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(b)}_unsubscribe(a,b){this.handlersMap[a]&&b&&this.handlersMap[a].delete(b),b&&0!==this.handlersMap[a].size||delete this.handlersMap[a],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bo(a="",b=10){let c="";for(let d=0;d<b;d++)c+=Math.floor(10*Math.random());return a+c}bn.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class bp{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,b,c=50){let d="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!d)throw Error("connection_unavailable");let e,f;return new Promise((g,h)=>{let i=bo("",20);d.port1.start();let j=setTimeout(()=>{h(Error("unsupported_event"))},c);f={messageChannel:d,onMessage(a){let b=a;if(b.data.eventId===i)switch(b.data.status){case"ack":clearTimeout(j),e=setTimeout(()=>{h(Error("timeout"))},3e3);break;case"done":clearTimeout(e),g(b.data.response);break;default:clearTimeout(j),clearTimeout(e),h(Error("invalid_response"))}}},this.handlers.add(f),d.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:a,eventId:i,data:b},[d.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */ function bq(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function br(){return void 0!==bq().WorkerGlobalScope&&"function"==typeof bq().importScripts}async function bs(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let a=await navigator.serviceWorker.ready;return a.active}catch(b){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bt="firebaseLocalStorageDb",bu="firebaseLocalStorage",bv="fbase_key";class bw{constructor(a){this.request=a}toPromise(){return new Promise((a,b)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{b(this.request.error)})})}}function bx(a,b){return a.transaction([bu],b?"readwrite":"readonly").objectStore(bu)}function by(){let a=indexedDB.open(bt,1);return new Promise((b,c)=>{a.addEventListener("error",()=>{c(a.error)}),a.addEventListener("upgradeneeded",()=>{let b=a.result;try{b.createObjectStore(bu,{keyPath:bv})}catch(d){c(d)}}),a.addEventListener("success",async()=>{let c=a.result;c.objectStoreNames.contains(bu)?b(c):(c.close(),await function(){let a=indexedDB.deleteDatabase(bt);return new bw(a).toPromise()}(),b(await by()))})})}async function bz(a,b,c){let d=bx(a,!0).put({[bv]:b,value:c});return new bw(d).toPromise()}async function bA(a,b){let c=bx(a,!1).get(b),d=await new bw(c).toPromise();return void 0===d?null:d.value}function bB(a,b){let c=bx(a,!0).delete(b);return new bw(c).toPromise()}class bC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await by()),this.db}async _withRetries(a){let b=0;for(;;)try{let c=await this._openDb();return await a(c)}catch(d){if(b++ >3)throw d;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return br()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bn._getInstance(br()?self:null),this.receiver._subscribe("keyChanged",async(a,b)=>{let c=await this._poll();return{keyProcessed:c.includes(b.key)}}),this.receiver._subscribe("ping",async(a,b)=>["keyChanged"])}async initializeSender(){var a,b;if(this.activeServiceWorker=await bs(),!this.activeServiceWorker)return;this.sender=new bp(this.activeServiceWorker);let c=await this.sender._send("ping",{},800);c&&(null===(a=c[0])|| void 0===a?void 0:a.fulfilled)&&(null===(b=c[0])|| void 0===b?void 0:b.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){var b;if(this.sender&&this.activeServiceWorker&&((null===(b=null==navigator?void 0:navigator.serviceWorker)|| void 0===b?void 0:b.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;let a=await by();return await bz(a,bh,"1"),await bB(a,bh),!0}catch(b){}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,b){return this._withPendingWrite(async()=>(await this._withRetries(c=>bz(c,a,b)),this.localCache[a]=b,this.notifyServiceWorker(a)))}async _get(a){let b=await this._withRetries(b=>bA(b,a));return this.localCache[a]=b,b}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(b=>bB(b,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){let a=await this._withRetries(a=>{let b=bx(a,!1).getAll();return new bw(b).toPromise()});if(!a||0!==this.pendingWrites)return[];let b=[],c=new Set;for(let{fbase_key:d,value:e}of a)c.add(d),JSON.stringify(this.localCache[d])!==JSON.stringify(e)&&(this.notifyListeners(d,e),b.push(d));for(let f of Object.keys(this.localCache))this.localCache[f]&&!c.has(f)&&(this.notifyListeners(f,null),b.push(f));return b}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,b){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bC.type="LOCAL";let bD=bC;function bE(a){return`__${a}${Math.floor(1e6*Math.random())}`}class bF{constructor(a,b,c){this.params=c,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let d="string"==typeof a?document.getElementById(a):a;w(d,"argument-error",{appName:b}),this.container=d,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bG(50);let{callback:a,"expired-callback":b}=this.params;if(a)try{a(this.responseToken)}catch(c){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,b)try{b()}catch(a){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}function bG(a){let b=[],c="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let d=0;d<a;d++)b.push(c.charAt(Math.floor(Math.random()*c.length)));return b.join("")}bE("rcb"),new D(3e4,6e4);async function bH(a,b,c){var d,e,f,g,h;let i=await c.verify();try{w("string"==typeof i,a,"argument-error"),w("recaptcha"===c.type,a,"argument-error");let j;if(j="string"==typeof b?{phoneNumber:b}:b,"session"in j){let k=j.session;if("phoneNumber"in j){w("enroll"===k.type,a,"internal-error");let l=await (e=a,f={idToken:k.credential,phoneEnrollmentInfo:{phoneNumber:j.phoneNumber,recaptchaToken:i}},J(e,"POST","/v2/accounts/mfaEnrollment:start",I(e,f)));return l.phoneSessionInfo.sessionInfo}{w("signin"===k.type,a,"internal-error");let m=(null===(d=j.multiFactorHint)|| void 0===d?void 0:d.uid)||j.multiFactorUid;w(m,a,"missing-multi-factor-info");let n=await (g=a,h={mfaPendingCredential:k.credential,mfaEnrollmentId:m,phoneSignInInfo:{recaptchaToken:i}},J(g,"POST","/v2/accounts/mfaSignIn:start",I(g,h)));return n.phoneResponseInfo.sessionInfo}}{let{sessionInfo:o}=await aH(a,{phoneNumber:j.phoneNumber,recaptchaToken:i});return o}}finally{c._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class bI{constructor(a){this.providerId=bI.PROVIDER_ID,this.auth=au(a)}verifyPhoneNumber(a,b){return bH(this.auth,a,(0,e.m9)(b))}static credential(a,b){return aM._fromVerification(a,b)}static credentialFromResult(a){return bI.credentialFromTaggedObject(a)}static credentialFromError(a){return bI.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{phoneNumber:b,temporaryProof:c}=a;return b&&c?aM._fromTokenResponse(b,c):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function bJ(a,b){return b?A(b):(w(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}bI.PROVIDER_ID="phone",bI.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bK extends ax{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return aF(a,this._buildIdpRequest())}_linkToIdToken(a,b){return aF(a,this._buildIdpRequest(b))}_getReauthenticationResolver(a){return aF(a,this._buildIdpRequest())}_buildIdpRequest(a){let b={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(b.idToken=a),b}}function bL(a){return a4(a.auth,new bK(a),a.bypassAuthState)}function bM(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),a3(c,new bK(a),a.bypassAuthState)}async function bN(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),a1(c,new bK(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class bO{constructor(a,b,c,d,e=!1){this.auth=a,this.resolver=c,this.user=d,this.bypassAuthState=e,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(b)?b:[b]}execute(){return new Promise(async(a,b)=>{this.pendingPromise={resolve:a,reject:b};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(a){let{urlResponse:b,sessionId:c,postBody:d,tenantId:e,error:f,type:g}=a;if(f){this.reject(f);return}let h={auth:this.auth,requestUri:b,sessionId:c,tenantId:e||void 0,postBody:d||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(h))}catch(i){this.reject(i)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return bL;case"linkViaPopup":case"linkViaRedirect":return bN;case"reauthViaPopup":case"reauthViaRedirect":return bM;default:r(this.auth,"internal-error")}}resolve(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bP=new D(2e3,1e4);async function bQ(a,b,c){let d=au(a);u(a,b,aP);let e=bJ(d,c),f=new bR(d,"signInViaPopup",b,e);return f.executeNotNull()}class bR extends bO{constructor(a,b,c,d,e){super(a,b,d,e),this.provider=c,this.authWindow=null,this.pollId=null,bR.currentPopupAction&&bR.currentPopupAction.cancel(),bR.currentPopupAction=this}async executeNotNull(){let a=await this.execute();return w(a,this.auth,"internal-error"),a}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");let a=bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(s(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var a;return(null===(a=this.authWindow)|| void 0===a?void 0:a.associatedEvent)||null}cancel(){this.reject(s(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bR.currentPopupAction=null}pollUserCancellation(){let a=()=>{var b,c;if(null===(c=null===(b=this.authWindow)|| void 0===b?void 0:b.window)|| void 0===c?void 0:c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(s(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(a,bP.get())};a()}}bR.currentPopupAction=null;let bS=new Map;class bT extends bO{constructor(a,b,c=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],b,void 0,c),this.eventId=null}async execute(){let a=bS.get(this.auth._key());if(!a){try{let b=await bU(this.resolver,this.auth),c=b?await super.execute():null;a=()=>Promise.resolve(c)}catch(d){a=()=>Promise.reject(d)}bS.set(this.auth._key(),a)}return this.bypassAuthState||bS.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if("signInViaRedirect"===a.type)return super.onAuthEvent(a);if("unknown"===a.type){this.resolve(null);return}if(a.eventId){let b=await this.auth._redirectUserForId(a.eventId);if(b)return this.user=b,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bU(a,b){let c=bX(b),d=bW(a);if(!await d._isAvailable())return!1;let e=await d._get(c)==="true";return await d._remove(c),e}async function bV(a,b){return bW(a)._set(bX(b),"true")}function bW(a){return A(a._redirectPersistence)}function bX(a){return ag("pendingRedirect",a.config.apiKey,a.name)}async function bY(a,b,c=!1){let d=au(a),e=bJ(d,b),f=new bT(d,e,c),g=await f.execute();return g&&!c&&(delete g.user._redirectEventId,await d._persistUserIfCurrent(g.user),await d._setRedirectUser(null,b)),g}async function bZ(a){let b=bo(`${a.uid}:::`);return a._redirectEventId=b,await a.auth._setRedirectUser(a),await a.auth._persistUserIfCurrent(a),b}class b${constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let b=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(a,c)&&(b=!0,this.sendToConsumer(a,c),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!b1(a)||(this.hasHandledPotentialRedirect=!0,b||(this.queuedRedirectEvent=a,b=!0)),b}sendToConsumer(a,b){var c;if(a.error&&!b0(a)){let d=(null===(c=a.error.code)|| void 0===c?void 0:c.split("auth/")[1])||"internal-error";b.onError(s(this.auth,d))}else b.onAuthEvent(a)}isEventForConsumer(a,b){let c=null===b.eventId|| !!a.eventId&&a.eventId===b.eventId;return b.filter.includes(a.type)&&c}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(b_(a))}saveEventToCache(a){this.cachedEventUids.add(b_(a)),this.lastProcessedEventTime=Date.now()}}function b_(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(a=>a).join("-")}function b0({type:a,error:b}){return"unknown"===a&&(null==b?void 0:b.code)==="auth/no-auth-event"}function b1(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b0(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function b2(a,b={}){return J(a,"GET","/v1/projects",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b4=/^https?/;async function b5(a){if(a.config.emulator)return;let{authorizedDomains:b}=await b2(a);for(let c of b)try{if(b6(c))return}catch(d){}r(a,"unauthorized-domain")}function b6(a){let b=B(),{protocol:c,hostname:d}=new URL(b);if(a.startsWith("chrome-extension://")){let e=new URL(a);return""===e.hostname&&""===d?"chrome-extension:"===c&&a.replace("chrome-extension://","")===b.replace("chrome-extension://",""):"chrome-extension:"===c&&e.hostname===d}if(!b4.test(c))return!1;if(b3.test(a))return d===a;let f=a.replace(/\./g,"\\."),g=RegExp("^(.+\\."+f+"|"+f+")$","i");return g.test(d)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b7=new D(3e4,6e4);function b8(){let a=bq().___jsl;if(null==a?void 0:a.H){for(let b of Object.keys(a.H))if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=[...a.H[b].L],a.CP)for(let c=0;c<a.CP.length;c++)a.CP[c]=null}}let b9=null,ca=new D(5e3,15e3),cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function cd(a){var b,c;let d=await (b=a,b9=b9||(c=b,new Promise((a,b)=>{var d,e,f,g;function h(){b8(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{b8(),b(s(c,"network-request-failed"))},timeout:b7.get()})}if(null===(e=null===(d=bq().gapi)|| void 0===d?void 0:d.iframes)|| void 0===e?void 0:e.Iframe)a(gapi.iframes.getContext());else if(null===(f=bq().gapi)|| void 0===f?void 0:f.load)h();else{let i=bE("iframefcb");return bq()[i]=()=>{gapi.load?h():b(s(c,"network-request-failed"))},(g=`https://apis.google.com/js/api.js?onload=${i}`,new Promise((a,b)=>{var c,d;let e=document.createElement("script");e.setAttribute("src",g),e.onload=a,e.onerror=a=>{let c=s("internal-error");c.customData=a,b(c)},e.type="text/javascript",e.charset="UTF-8",(null!==(d=null===(c=document.getElementsByTagName("head"))|| void 0===c?void 0:c[0])&& void 0!==d?d:document).appendChild(e)})).catch(a=>b(a))}}).catch(a=>{throw b9=null,a}))),g=bq().gapi;return w(g,a,"internal-error"),d.open({where:document.body,url:function(a){let b=a.config;w(b.authDomain,a,"auth-domain-config-required");let c=b.emulator?E(b,"emulator/auth/iframe"):`https://${a.config.authDomain}/__/auth/iframe`,d={apiKey:b.apiKey,appName:a.name,v:f.Jn},g=cc.get(a.config.apiHost);g&&(d.eid=g);let h=a._getFrameworks();return h.length&&(d.fw=h.join(",")),`${c}?${(0,e.xO)(d).slice(1)}`}(a),messageHandlersFilter:g.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cb,dontclear:!0},b=>new Promise(async(c,d)=>{await b.restyle({setHideOnLeave:!1});let e=s(a,"network-request-failed"),f=bq().setTimeout(()=>{d(e)},ca.get());function g(){bq().clearTimeout(f),c(b)}b.ping(g).then(g,()=>{d(e)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ce={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class cf{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(a){}}}function cg(a,b,c,d,g,h){w(a.config.authDomain,a,"auth-domain-config-required"),w(a.config.apiKey,a,"invalid-api-key");let i={apiKey:a.config.apiKey,appName:a.name,authType:c,redirectUrl:d,v:f.Jn,eventId:g};if(b instanceof aP)for(let[j,k]of(b.setDefaultLanguage(a.languageCode),i.providerId=b.providerId||"",(0,e.xb)(b.getCustomParameters())||(i.customParameters=JSON.stringify(b.getCustomParameters())),Object.entries(h||{})))i[j]=k;if(b instanceof aQ){let l=b.getScopes().filter(a=>""!==a);l.length>0&&(i.scopes=l.join(","))}a.tenantId&&(i.tid=a.tenantId);let m=i;for(let n of Object.keys(m))void 0===m[n]&&delete m[n];return`${ch(a)}?${(0,e.xO)(m).slice(1)}`}function ch({config:a}){return a.emulator?E(a,"emulator/auth/handler"):`https://${a.authDomain}/__/auth/handler`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The special web storage event
 *
 */ let ci="webStorageSupport",cj=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bm,this._completeRedirectFn=bY,this._overrideRedirectResult=function(a,b){bS.set(a._key(),b)}}async _openPopup(a,b,c,d){var f;y(null===(f=this.eventManagers[a._key()])|| void 0===f?void 0:f.manager,"_initialize() not called before _openPopup()");let g=cg(a,b,c,B(),d);return function(a,b,c,d=500,f=600){let g=Math.max((window.screen.availHeight-f)/2,0).toString(),h=Math.max((window.screen.availWidth-d)/2,0).toString(),i="",j=Object.assign(Object.assign({},ce),{width:d.toString(),height:f.toString(),top:g,left:h}),k=(0,e.z$)().toLowerCase();c&&(i=al(k)?"_blank":c),aj(k)&&(b=b||"http://localhost",j.scrollbars="yes");let l=Object.entries(j).reduce((a,[b,c])=>`${a}${b}=${c},`,"");if(function(a=(0,e.z$)()){var b;return aq(a)&&!!(null===(b=window.navigator)|| void 0===b?void 0:b.standalone)}(k)&&"_self"!==i)return function a(b,c){let d=document.createElement("a");d.href=b,d.target=c;let e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),d.dispatchEvent(e)}(b||"",i),new cf(null);let m=window.open(b||"",i,l);w(m,a,"popup-blocked");try{m.focus()}catch(n){}return new cf(m)}(a,g,bo())}async _openRedirect(a,b,c,d){var e;return await this._originValidation(a),e=cg(a,b,c,B(),d),bq().location.href=e,new Promise(()=>{})}_initialize(a){let b=a._key();if(this.eventManagers[b]){let{manager:c,promise:d}=this.eventManagers[b];return c?Promise.resolve(c):(y(d,"If manager is not set, promise should be"),d)}let e=this.initAndGetManager(a);return this.eventManagers[b]={promise:e},e.catch(()=>{delete this.eventManagers[b]}),e}async initAndGetManager(a){let b=await cd(a),c=new b$(a);return b.register("authEvent",b=>{w(null==b?void 0:b.authEvent,a,"invalid-auth-event");let d=c.onEvent(b.authEvent);return{status:d?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:c},this.iframes[a._key()]=b,c}_isIframeWebStorageSupported(a,b){let c=this.iframes[a._key()];c.send(ci,{type:ci},c=>{var d;let e=null===(d=null==c?void 0:c[0])|| void 0===d?void 0:d[ci];void 0!==e&&b(!!e),r(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){let b=a._key();return this.originValidationPromises[b]||(this.originValidationPromises[b]=b5(a)),this.originValidationPromises[b]}get _shouldInitProactively(){return ar()||ak()||aq()}};class ck{constructor(a){this.factorId=a}_process(a,b,c){switch(b.type){case"enroll":return this._finalizeEnroll(a,b.credential,c);case"signin":return this._finalizeSignIn(a,b.credential);default:return x("unexpected MultiFactorSessionType")}}}class cl extends ck{constructor(a){super("phone"),this.credential=a}static _fromCredential(a){return new cl(a)}_finalizeEnroll(a,b,c){var d,e;return d=a,J(d,"POST","/v2/accounts/mfaEnrollment:finalize",I(d,e={idToken:b,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(a,b){var c,d;return c=a,J(c,"POST","/v2/accounts/mfaSignIn:finalize",I(c,d={mfaPendingCredential:b,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}(class{constructor(){}static assertion(a){return cl._fromCredential(a)}}).FACTOR_ID="phone";var cm="@firebase/auth",cn="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class co{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),(null===(a=this.auth.currentUser)|| void 0===a?void 0:a.uid)||null}async getToken(a){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let b=await this.auth.currentUser.getIdToken(a);return{accessToken:b}}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;let b=this.auth.onIdTokenChanged(b=>{var c;a((null===(c=b)|| void 0===c?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(a,b),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();let b=this.internalListeners.get(a);b&&(this.internalListeners.delete(a),b(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */ function cp(a=(0,f.Mq)()){let b=(0,f.qX)(a,"auth");return b.isInitialized()?b.getImmediate():/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function(a,b){let c=(0,f.qX)(a,"auth");if(c.isInitialized()){let d=c.getImmediate(),g=c.getOptions();if((0,e.vZ)(g,null!=b?b:{}))return d;r(d,"already-initialized")}let h=c.initialize({options:b});return h}(a,{popupRedirectResolver:cj,persistence:[bD,bk,bm]})}d="Browser",(0,f.Xd)(new l.wA("auth",(a,{options:b})=>{let c=a.getProvider("app").getImmediate(),e=a.getProvider("heartbeat"),{apiKey:f,authDomain:g}=c.options;return((a,c)=>{w(f&&!f.includes(":"),"invalid-api-key",{appName:a.name}),w(!(null==g?void 0:g.includes(":")),"argument-error",{appName:a.name});let e={apiKey:f,authDomain:g,clientPlatform:d,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(d)},h=new at(a,c,e);return function(a,b){let c=(null==b?void 0:b.persistence)||[],d=(Array.isArray(c)?c:[c]).map(A);(null==b?void 0:b.errorMap)&&a._updateErrorMap(b.errorMap),a._initializeWithPersistence(d,null==b?void 0:b.popupRedirectResolver)}(h,b),h})(c,e)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,b,c)=>{let d=a.getProvider("auth-internal");d.initialize()})),(0,f.Xd)(new l.wA("auth-internal",a=>{var b;let c=au(a.getProvider("auth").getImmediate());return b=c,new co(b)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,f.KN)(cm,cn,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(d)),(0,f.KN)(cm,cn,"esm2017")},4444:function(a,b,c){"use strict";c.d(b,{BH:function(){return n},L:function(){return j},LL:function(){return y},Mn:function(){return u},ZR:function(){return x},"b$":function(){return r},d:function(){return s},eu:function(){return w},hl:function(){return v},m9:function(){return M},ne:function(){return I},pd:function(){return H},ru:function(){return q},tV:function(){return k},uI:function(){return p},vZ:function(){return D},w1:function(){return t},xO:function(){return F},xb:function(){return C},"z$":function(){return o},zd:function(){return G}});/* unused harmony exports CONSTANTS, MAX_VALUE_MILLIS, RANDOM_FACTOR, Sha1, areCookiesEnabled, assert, assertionError, async, base64, base64Encode, calculateBackoffMillis, contains, createMockUserToken, decode, deepCopy, deepExtend, errorPrefix, getGlobal, isAdmin, isBrowser, isNode, isNodeSdk, isSafari, isValidFormat, isValidTimestamp, issuedAtTime, jsonEval, map, ordinal, promiseWithTimeout, safeGet, stringLength, stringToByteArray, stringify, uuidv4, validateArgCount, validateCallback, validateContextObject, validateNamespace */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ let d={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},e=function(a){return Error("Firebase Database ("+d.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)},f=function(a){let b=[],c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:e<2048?(b[c++]=e>>6|192,b[c++]=63&e|128):(64512&e)==55296&&d+1<a.length&&(64512&a.charCodeAt(d+1))==56320?(e=65536+((1023&e)<<10)+(1023&a.charCodeAt(++d)),b[c++]=e>>18|240,b[c++]=e>>12&63|128,b[c++]=e>>6&63|128,b[c++]=63&e|128):(b[c++]=e>>12|224,b[c++]=e>>6&63|128,b[c++]=63&e|128)}return b},g=function(a){let b=[],c=0,d=0;for(;c<a.length;){let e=a[c++];if(e<128)b[d++]=String.fromCharCode(e);else if(e>191&&e<224){let f=a[c++];b[d++]=String.fromCharCode((31&e)<<6|63&f)}else if(e>239&&e<365){let g=a[c++],h=a[c++],i=a[c++],j=((7&e)<<18|(63&g)<<12|(63&h)<<6|63&i)-65536;b[d++]=String.fromCharCode(55296+(j>>10)),b[d++]=String.fromCharCode(56320+(1023&j))}else{let k=a[c++],l=a[c++];b[d++]=String.fromCharCode((15&e)<<12|(63&k)<<6|63&l)}}return b.join("")},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(a,b){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();let c=b?this.byteToCharMapWebSafe_:this.byteToCharMap_,d=[];for(let e=0;e<a.length;e+=3){let f=a[e],g=e+1<a.length,h=g?a[e+1]:0,i=e+2<a.length,j=i?a[e+2]:0,k=f>>2,l=(3&f)<<4|h>>4,m=(15&h)<<2|j>>6,n=63&j;i||(n=64,g||(m=64)),d.push(c[k],c[l],c[m],c[n])}return d.join("")},encodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?btoa(a):this.encodeByteArray(f(a),b)},decodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?atob(a):g(this.decodeStringToByteArray(a,b))},decodeStringToByteArray(a,b){this.init_();let c=b?this.charToByteMapWebSafe_:this.charToByteMap_,d=[];for(let e=0;e<a.length;){let f=c[a.charAt(e++)],g=e<a.length,h=g?c[a.charAt(e)]:0;++e;let i=e<a.length,j=i?c[a.charAt(e)]:64;++e;let k=e<a.length,l=k?c[a.charAt(e)]:64;if(++e,null==f||null==h||null==j||null==l)throw Error();let m=f<<2|h>>4;if(d.push(m),64!==j){let n=h<<4&240|j>>2;if(d.push(n),64!==l){let o=j<<6&192|l;d.push(o)}}}return d},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},i=function(a){let b=f(a);return h.encodeByteArray(b,!0)},j=function(a){return i(a).replace(/\./g,"")},k=function(a){try{return h.decodeString(a,!0)}catch(b){console.error("base64Decode failed: ",b)}return null};function l(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:let c=b;return new Date(c.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(let d in b)b.hasOwnProperty(d)&&m(d)&&(a[d]=l(a[d],b[d]));return a}function m(a){return"__proto__"!==a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}wrapCallback(a){return(b,c)=>{b?this.reject(b):this.resolve(c),"function"==typeof a&&(this.promise.catch(()=>{}),1===a.length?a(b):a(b,c))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function q(){let a="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof a&& void 0!==a.id}function r(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function s(){return o().indexOf("Electron/")>=0}function t(){let a=o();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function u(){return o().indexOf("MSAppHost/")>=0}function v(){return"object"==typeof indexedDB}function w(){return new Promise((a,b)=>{try{let c=!0,d="validate-browser-context-for-indexeddb-analytics-module",e=self.indexedDB.open(d);e.onsuccess=()=>{e.result.close(),c||self.indexedDB.deleteDatabase(d),a(!0)},e.onupgradeneeded=()=>{c=!1},e.onerror=()=>{var a;b((null===(a=e.error)|| void 0===a?void 0:a.message)||"")}}catch(f){b(f)}})}class x extends Error{constructor(a,b,c){super(b),this.code=a,this.customData=c,this.name="FirebaseError",Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(a,b,c){this.service=a,this.serviceName=b,this.errors=c}create(a,...b){let c=b[0]||{},d=`${this.service}/${a}`,e=this.errors[a],f=e?z(e,c):"Error",g=`${this.serviceName}: ${f} (${d}).`,h=new x(d,g,c);return h}}function z(a,b){return a.replace(A,(a,c)=>{let d=b[c];return null!=d?String(d):`<${c}?>`})}let A=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function B(a){return JSON.parse(a)}function C(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}function D(a,b){if(a===b)return!0;let c=Object.keys(a),d=Object.keys(b);for(let e of c){if(!d.includes(e))return!1;let f=a[e],g=b[e];if(E(f)&&E(g)){if(!D(f,g))return!1}else if(f!==g)return!1}for(let h of d)if(!c.includes(h))return!1;return!0}function E(a){return null!==a&&"object"==typeof a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function F(a){let b=[];for(let[c,d]of Object.entries(a))Array.isArray(d)?d.forEach(a=>{b.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):b.push(encodeURIComponent(c)+"="+encodeURIComponent(d));return b.length?"&"+b.join("&"):""}function G(a){let b={},c=a.replace(/^\?/,"").split("&");return c.forEach(a=>{if(a){let[c,d]=a.split("=");b[decodeURIComponent(c)]=decodeURIComponent(d)}}),b}function H(a){let b=a.indexOf("?");if(!b)return"";let c=a.indexOf("#",b);return a.substring(b,c>0?c:void 0)}function I(a,b){let c=new J(a,b);return c.subscribe.bind(c)}class J{constructor(a,b){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=b,this.task.then(()=>{a(this)}).catch(a=>{this.error(a)})}next(a){this.forEachObserver(b=>{b.next(a)})}error(a){this.forEachObserver(b=>{b.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,b,c){let d;if(void 0===a&& void 0===b&& void 0===c)throw Error("Missing Observer.");void 0===(d=K(a,["next","error","complete"])?a:{next:a,error:b,complete:c}).next&&(d.next=L),void 0===d.error&&(d.error=L),void 0===d.complete&&(d.complete=L);let e=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch(a){}}),this.observers.push(d),e}unsubscribeOne(a){void 0!==this.observers&& void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&& void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let b=0;b<this.observers.length;b++)this.sendOne(b,a)}sendOne(a,b){this.task.then(()=>{if(void 0!==this.observers&& void 0!==this.observers[a])try{b(this.observers[a])}catch(c){"undefined"!=typeof console&&console.error&&console.error(c)}})}close(a){!this.finalized&&(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(a,b){if("object"!=typeof a||null===a)return!1;for(let c of b)if(c in a&&"function"==typeof a[c])return!0;return!1}function L(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(a){return a&&a._delegate?a._delegate:a}},7406:function(a,b,c){"use strict";function d(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];throw Error("[Immer] minified error nr: "+a+(c.length?" "+c.map(function(a){return"'"+a+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function e(a){return!!a&&!!a[R]}function f(a){var b;return!!a&&(function(a){if(!a||"object"!=typeof a)return!1;var b=Object.getPrototypeOf(a);if(null===b)return!0;var c=Object.hasOwnProperty.call(b,"constructor")&&b.constructor;return c===Object||"function"==typeof c&&Function.toString.call(c)===S}(a)||Array.isArray(a)||!!a[Q]||!!(null===(b=a.constructor)|| void 0===b?void 0:b[Q])||l(a)||m(a))}function g(a,b,c){void 0===c&&(c=!1),0===h(a)?(c?Object.keys:T)(a).forEach(function(d){c&&"symbol"==typeof d||b(d,a[d],a)}):a.forEach(function(c,d){return b(d,c,a)})}function h(a){var b=a[R];return b?b.i>3?b.i-4:b.i:Array.isArray(a)?1:l(a)?2:m(a)?3:0}function i(a,b){return 2===h(a)?a.has(b):Object.prototype.hasOwnProperty.call(a,b)}c.d(b,{xC:function(){return aH},oM:function(){return aL}});function j(a,b,c){var d=h(a);2===d?a.set(b,c):3===d?(a.delete(b),a.add(c)):a[b]=c}function k(a,b){return a===b?0!==a||1/a==1/b:a!=a&&b!=b}function l(a){return M&&a instanceof Map}function m(a){return N&&a instanceof Set}function n(a){return a.o||a.t}function o(a){if(Array.isArray(a))return Array.prototype.slice.call(a);var b=U(a);delete b[R];for(var c=T(b),d=0;d<c.length;d++){var e=c[d],f=b[e];!1===f.writable&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(b[e]={configurable:!0,writable:!0,enumerable:f.enumerable,value:a[e]})}return Object.create(Object.getPrototypeOf(a),b)}function p(a,b){return void 0===b&&(b=!1),r(a)||e(a)||!f(a)||(h(a)>1&&(a.set=a.add=a.clear=a.delete=q),Object.freeze(a),b&&g(a,function(a,b){return p(b,!0)},!0)),a}function q(){d(2)}function r(a){return null==a||"object"!=typeof a||Object.isFrozen(a)}function s(a){var b=V[a];return b||d(18,a),b}function t(a,b){b&&(s("Patches"),a.u=[],a.s=[],a.v=b)}function u(a){v(a),a.p.forEach(x),a.p=null}function v(a){a===K&&(K=a.l)}function w(a){return K={p:[],l:K,h:a,m:!0,_:0}}function x(a){var b=a[R];0===b.i||1===b.i?b.j():b.O=!0}function y(a,b){b._=b.p.length;var c=b.p[0],e=void 0!==a&&a!==c;return b.h.g||s("ES5").S(b,a,e),e?(c[R].P&&(u(b),d(4)),f(a)&&(a=z(b,a),b.l||B(b,a)),b.u&&s("Patches").M(c[R].t,a,b.u,b.s)):a=z(b,c,[]),u(b),b.u&&b.v(b.u,b.s),a!==P?a:void 0}function z(a,b,c){if(r(b))return b;var d=b[R];if(!d)return g(b,function(e,f){return A(a,d,b,e,f,c)},!0),b;if(d.A!==a)return b;if(!d.P)return B(a,d.t,!0),d.t;if(!d.I){d.I=!0,d.A._--;var e=4===d.i||5===d.i?d.o=o(d.k):d.o;g(3===d.i?new Set(e):e,function(b,f){return A(a,d,e,b,f,c)}),B(a,e,!1),c&&a.u&&s("Patches").R(d,c,a.u,a.s)}return d.o}function A(a,b,c,d,g,h){if(e(g)){var k=z(a,g,h&&b&&3!==b.i&&!i(b.D,d)?h.concat(d):void 0);if(j(c,d,k),!e(k))return;a.m=!1}if(f(g)&&!r(g)){if(!a.h.F&&a._<1)return;z(a,g),b&&b.A.l||B(a,g)}}function B(a,b,c){void 0===c&&(c=!1),a.h.F&&a.m&&p(b,c)}function C(a,b){var c=a[R];return(c?n(c):a)[b]}function D(a,b){if(b in a)for(var c=Object.getPrototypeOf(a);c;){var d=Object.getOwnPropertyDescriptor(c,b);if(d)return d;c=Object.getPrototypeOf(c)}}function E(a){a.P||(a.P=!0,a.l&&E(a.l))}function F(a){a.o||(a.o=o(a.t))}function G(a,b,c){var d,e,f,g,h,i,j,k,n,o=l(b)?s("MapSet").N(b,c):m(b)?s("MapSet").T(b,c):a.g?(d=b,e=c,h=g={i:(f=Array.isArray(d))?1:0,A:e?e.A:K,P:!1,I:!1,D:{},l:e,t:d,k:null,o:null,j:null,C:!1},i=W,f&&(h=[g],i=X),k=(j=Proxy.revocable(h,i)).revoke,n=j.proxy,g.k=n,g.j=k,n):s("ES5").J(b,c);return(c?c.A:K).p.push(o),o}function H(a,b){switch(b){case 2:return new Map(a);case 3:return Array.from(a)}return o(a)}var I,J,K,L="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),M="undefined"!=typeof Map,N="undefined"!=typeof Set,O="undefined"!=typeof Proxy&& void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,P=L?Symbol.for("immer-nothing"):((J={})["immer-nothing"]=!0,J),Q=L?Symbol.for("immer-draftable"):"__$immer_draftable",R=L?Symbol.for("immer-state"):"__$immer_state",S=""+Object.prototype.constructor,T="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(a){return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a))}:Object.getOwnPropertyNames,U=Object.getOwnPropertyDescriptors||function(a){var b={};return T(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)}),b},V={},W={get:function(a,b){if(b===R)return a;var c,d,e,g,h,j=n(a);if(!i(j,b))return c=a,d=j,(h=D(d,e=b))?"value"in h?h.value:null===(g=h.get)|| void 0===g?void 0:g.call(c.k):void 0;var k=j[b];return a.I||!f(k)?k:k===C(a.t,b)?(F(a),a.o[b]=G(a.A.h,k,a)):k},has:function(a,b){return b in n(a)},ownKeys:function(a){return Reflect.ownKeys(n(a))},set:function(a,b,c){var d=D(n(a),b);if(null==d?void 0:d.set)return d.set.call(a.k,c),!0;if(!a.P){var e=C(n(a),b),f=null==e?void 0:e[R];if(f&&f.t===c)return a.o[b]=c,a.D[b]=!1,!0;if(k(c,e)&&(void 0!==c||i(a.t,b)))return!0;F(a),E(a)}return a.o[b]===c&&"number"!=typeof c&&(void 0!==c||b in a.o)||(a.o[b]=c,a.D[b]=!0,!0)},deleteProperty:function(a,b){return void 0!==C(a.t,b)||b in a.t?(a.D[b]=!1,F(a),E(a)):delete a.D[b],a.o&&delete a.o[b],!0},getOwnPropertyDescriptor:function(a,b){var c=n(a),d=Reflect.getOwnPropertyDescriptor(c,b);return d?{writable:!0,configurable:1!==a.i||"length"!==b,enumerable:d.enumerable,value:c[b]}:d},defineProperty:function(){d(11)},getPrototypeOf:function(a){return Object.getPrototypeOf(a.t)},setPrototypeOf:function(){d(12)}},X={};g(W,function(a,b){X[a]=function(){return arguments[0]=arguments[0][0],b.apply(this,arguments)}}),X.deleteProperty=function(a,b){return X.set.call(this,a,b,void 0)},X.set=function(a,b,c){return W.set.call(this,a[0],b,c,a[0])};var Y=new(function(){function a(a){var b=this;this.g=O,this.F=!0,this.produce=function(a,c,e){if("function"==typeof a&&"function"!=typeof c){var g,h=c;c=a;var i=b;return function(a){var b=this;void 0===a&&(a=h);for(var d=arguments.length,e=Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];return i.produce(a,function(a){var d;return(d=c).call.apply(d,[b,a].concat(e))})}}if("function"!=typeof c&&d(6),void 0!==e&&"function"!=typeof e&&d(7),f(a)){var j=w(b),k=G(b,a,void 0),l=!0;try{g=c(k),l=!1}finally{l?u(j):v(j)}return"undefined"!=typeof Promise&&g instanceof Promise?g.then(function(a){return t(j,e),y(a,j)},function(a){throw u(j),a}):(t(j,e),y(g,j))}if(!a||"object"!=typeof a){if(void 0===(g=c(a))&&(g=a),g===P&&(g=void 0),b.F&&p(g,!0),e){var m=[],n=[];s("Patches").M(a,g,m,n),e(m,n)}return g}d(21,a)},this.produceWithPatches=function(a,c){if("function"==typeof a)return function(c){for(var d=arguments.length,e=Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];return b.produceWithPatches(c,function(b){return a.apply(void 0,[b].concat(e))})};var d,e,f=b.produce(a,c,function(a,b){d=a,e=b});return"undefined"!=typeof Promise&&f instanceof Promise?f.then(function(a){return[a,d,e]}):[f,d,e]},"boolean"==typeof(null==a?void 0:a.useProxies)&&this.setUseProxies(a.useProxies),"boolean"==typeof(null==a?void 0:a.autoFreeze)&&this.setAutoFreeze(a.autoFreeze)}var b=a.prototype;return b.createDraft=function(a){f(a)||d(8),e(a)&&(a=(e(b=a)||d(22,b),function a(b){if(!f(b))return b;var c,d=b[R],e=h(b);if(d){if(!d.P&&(d.i<4||!s("ES5").K(d)))return d.t;d.I=!0,c=H(b,e),d.I=!1}else c=H(b,e);return g(c,function(b,e){var f,g;d&&(f=d.t,g=b,(2===h(f)?f.get(g):f[g])===e)||j(c,b,a(e))}),3===e?new Set(c):c}(b)));var b,c=w(this),i=G(this,a,void 0);return i[R].C=!0,v(c),i},b.finishDraft=function(a,b){var c,d=(a&&a[R]).A;return t(d,b),y(void 0,d)},b.setAutoFreeze=function(a){this.F=a},b.setUseProxies=function(a){a&&!O&&d(20),this.g=a},b.applyPatches=function(a,b){for(c=b.length-1;c>=0;c--){var c,d=b[c];if(0===d.path.length&&"replace"===d.op){a=d.value;break}}c> -1&&(b=b.slice(c+1));var f=s("Patches").$;return e(a)?f(a,b):this.produce(a,function(a){return f(a,b)})},a}()),Z=Y.produce;Y.produceWithPatches.bind(Y),Y.setAutoFreeze.bind(Y),Y.setUseProxies.bind(Y),Y.applyPatches.bind(Y),Y.createDraft.bind(Y),Y.finishDraft.bind(Y);var $=Z,_=c(4942);function aa(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function ab(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?aa(Object(c),!0).forEach(function(b){(0,_.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):aa(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function ac(a){return"Minified Redux error #"+a+"; visit https://redux.js.org/Errors?code="+a+" for the full message or use the non-minified dev environment for full errors. "}var ad="function"==typeof Symbol&&Symbol.observable||"@@observable",ae=function(){return Math.random().toString(36).substring(7).split("").join(".")},af={INIT:"@@redux/INIT"+ae(),REPLACE:"@@redux/REPLACE"+ae(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ae()}};function ag(a,b,c){if("function"==typeof b&&"function"==typeof c||"function"==typeof c&&"function"==typeof arguments[3])throw Error(ac(0));if("function"==typeof b&& void 0===c&&(c=b,b=void 0),void 0!==c){if("function"!=typeof c)throw Error(ac(1));return c(ag)(a,b)}if("function"!=typeof a)throw Error(ac(2));var d,e=a,f=b,g=[],h=g,i=!1;function j(){h===g&&(h=g.slice())}function k(){if(i)throw Error(ac(3));return f}function l(a){if("function"!=typeof a)throw Error(ac(4));if(i)throw Error(ac(5));var b=!0;return j(),h.push(a),function(){if(b){if(i)throw Error(ac(6));b=!1,j();var c=h.indexOf(a);h.splice(c,1),g=null}}}function m(a){if(!function a(b){if("object"!=typeof b||null===b)return!1;for(var c=b;null!==Object.getPrototypeOf(c);)c=Object.getPrototypeOf(c);return Object.getPrototypeOf(b)===c}(a))throw Error(ac(7));if(void 0===a.type)throw Error(ac(8));if(i)throw Error(ac(9));try{i=!0,f=e(f,a)}finally{i=!1}for(var b=g=h,c=0;c<b.length;c++)(0,b[c])();return a}return m({type:af.INIT}),(d={dispatch:m,subscribe:l,getState:k,replaceReducer:function(a){if("function"!=typeof a)throw Error(ac(10));e=a,m({type:af.REPLACE})}})[ad]=function(){var a,b=l;return(a={subscribe:function(a){if("object"!=typeof a||null===a)throw Error(ac(11));function c(){a.next&&a.next(k())}return c(),{unsubscribe:b(c)}}})[ad]=function(){return this},a},d}function ah(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return 0===b.length?function(a){return a}:1===b.length?b[0]:b.reduce(function(a,b){return function(){return a(b.apply(void 0,arguments))}})}function ai(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){return function(){var c=a.apply(void 0,arguments),d=function(){throw Error(ac(15))},e={getState:c.getState,dispatch:function(){return d.apply(void 0,arguments)}},f=b.map(function(a){return a(e)});return d=ah.apply(void 0,f)(c.dispatch),ab(ab({},c),{},{dispatch:d})}}}function aj(a){return function(b){var c=b.dispatch,d=b.getState;return function(b){return function(e){return"function"==typeof e?e(c,d,a):b(e)}}}}var ak=aj();ak.withExtraArgument=aj;var al,am=ak;c(3454);var an=(al=function(a,b){return(al=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Class extends value "+String(b)+" is not a constructor or null");function c(){this.constructor=a}al(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),ao=function(a,b){var c,d,e,f,g={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:h(0),throw:h(1),return:h(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function h(a){return function(b){return i([a,b])}}function i(f){if(c)throw TypeError("Generator is already executing.");for(;g;)try{if(c=1,d&&(e=2&f[0]?d.return:f[0]?d.throw||((e=d.return)&&e.call(d),0):d.next)&&!(e=e.call(d,f[1])).done)return e;switch(d=0,e&&(f=[2&f[0],e.value]),f[0]){case 0:case 1:e=f;break;case 4:return g.label++,{value:f[1],done:!1};case 5:g.label++,d=f[1],f=[0];continue;case 7:f=g.ops.pop(),g.trys.pop();continue;default:if(!(e=(e=g.trys).length>0&&e[e.length-1])&&(6===f[0]||2===f[0])){g=0;continue}if(3===f[0]&&(!e||f[1]>e[0]&&f[1]<e[3])){g.label=f[1];break}if(6===f[0]&&g.label<e[1]){g.label=e[1],e=f;break}if(e&&g.label<e[2]){g.label=e[2],g.ops.push(f);break}e[2]&&g.ops.pop(),g.trys.pop();continue}f=b.call(a,g)}catch(h){f=[6,h],d=0}finally{c=e=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},ap=function(a,b){for(var c=0,d=b.length,e=a.length;c<d;c++,e++)a[e]=b[c];return a},aq=Object.defineProperty,ar=Object.defineProperties,as=Object.getOwnPropertyDescriptors,at=Object.getOwnPropertySymbols,au=Object.prototype.hasOwnProperty,av=Object.prototype.propertyIsEnumerable,aw=function(a,b,c){return b in a?aq(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c},ax=function(a,b){for(var c in b||(b={}))au.call(b,c)&&aw(a,c,b[c]);if(at)for(var d=0,e=at(b);d<e.length;d++){var c=e[d];av.call(b,c)&&aw(a,c,b[c])}return a},ay=function(a,b){return ar(a,as(b))},az="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?ah:ah.apply(null,arguments)};function aA(a){if("object"!=typeof a||null===a)return!1;var b=Object.getPrototypeOf(a);if(null===b)return!0;for(var c=b;null!==Object.getPrototypeOf(c);)c=Object.getPrototypeOf(c);return b===c}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var aB=function(a){function b(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];var e=a.apply(this,c)||this;return Object.setPrototypeOf(e,b.prototype),e}return an(b,a),Object.defineProperty(b,Symbol.species,{get:function(){return b},enumerable:!1,configurable:!0}),b.prototype.concat=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];return a.prototype.concat.apply(this,b)},b.prototype.prepend=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];return 1===a.length&&Array.isArray(a[0])?new(b.bind.apply(b,ap([void 0],a[0].concat(this)))):new(b.bind.apply(b,ap([void 0],a.concat(this))))},b}(Array);function aC(a){return f(a)?$(a,function(){}):a}function aD(a,b,c,d){void 0===b&&(b=[]),void 0===d&&(d="");var e={value:c};if(!a(c))for(var f in e.children={},c){var g=d?d+"."+f:f;(!b.length|| -1===b.indexOf(g))&&(e.children[f]=aD(a,b,c[f],g))}return e}function aE(a,b,c,d,e,f){void 0===b&&(b=[]),void 0===e&&(e=!1),void 0===f&&(f="");var g=c?c.value:void 0,h=g===d;if(e&&!h&&!Number.isNaN(d))return{wasMutated:!0,path:f};if(a(g)||a(d))return{wasMutated:!1};var i={};for(var j in c.children)i[j]=!0;for(var j in d)i[j]=!0;for(var j in i){var k=f?f+"."+j:j;if(!b.length|| -1===b.indexOf(k)){var l=aE(a,b,c.children[j],d[j],h,k);if(l.wasMutated)return l}}return{wasMutated:!1}}function aF(a){var b=typeof a;return null==a||"string"===b||"boolean"===b||"number"===b||Array.isArray(a)||aA(a)}function aG(a,b,c,d,e){if(void 0===b&&(b=""),void 0===c&&(c=aF),void 0===e&&(e=[]),!c(a))return{keyPath:b||"<root>",value:a};if("object"!=typeof a||null===a)return!1;for(var f,g=null!=d?d(a):Object.entries(a),h=e.length>0,i=0,j=g;i<j.length;i++){var k=j[i],l=k[0],m=k[1],n=b?b+"."+l:l;if(!(h&&e.indexOf(n)>=0)){if(!c(m))return{keyPath:n,value:m};if("object"==typeof m&&(f=aG(m,n,c,d,e)))return f}}return!1}function aH(a){var b,c=function(a){var b,c,d,e,f;return b=a,void 0===b&&(b={}),d=b.thunk,e=void 0===d||d,f=(b.immutableCheck,b.serializableCheck,new aB),e&&("boolean"==typeof(c=e)?f.push(am):f.push(am.withExtraArgument(e.extraArgument))),f},d=a||{},e=d.reducer,f=void 0===e?void 0:e,g=d.middleware,h=void 0===g?c():g,i=d.devTools,j=void 0===i||i,k=d.preloadedState,l=d.enhancers,m=void 0===l?void 0:l;if("function"==typeof f)b=f;else if(aA(f))b=function(a){for(var b,c=Object.keys(a),d={},e=0;e<c.length;e++){var f=c[e];"function"==typeof a[f]&&(d[f]=a[f])}var g=Object.keys(d);try{!function(a){Object.keys(a).forEach(function(b){var c=a[b];if(void 0===c(void 0,{type:af.INIT}))throw Error(ac(12));if(void 0===c(void 0,{type:af.PROBE_UNKNOWN_ACTION()}))throw Error(ac(13))})}(d)}catch(h){b=h}return function(a,c){if(void 0===a&&(a={}),b)throw b;for(var e=!1,f={},h=0;h<g.length;h++){var i=g[h],j=d[i],k=a[i],l=j(k,c);if(void 0===l)throw c&&c.type,Error(ac(14));f[i]=l,e=e||l!==k}return(e=e||g.length!==Object.keys(a).length)?f:a}}(f);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var n=h;"function"==typeof n&&(n=n(c));var o=ai.apply(void 0,n),p=ah;j&&(p=az(ax({trace:!1},"object"==typeof j&&j)));var q=[o];Array.isArray(m)?q=ap([o],m):"function"==typeof m&&(q=m(q));var r=p.apply(void 0,q);return ag(b,void 0===k?void 0:k,r)}function aI(a,b){function c(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];if(b){var e=b.apply(void 0,c);if(!e)throw Error("prepareAction did not return an object");return ax(ax({type:a,payload:e.payload},"meta"in e&&{meta:e.meta}),"error"in e&&{error:e.error})}return{type:a,payload:c[0]}}return c.toString=function(){return""+a},c.type=a,c.match=function(b){return b.type===a},c}function aJ(a){return["type","payload","error","meta"].indexOf(a)> -1}function aK(a){var b,c={},d=[],e={addCase:function(a,b){var d="string"==typeof a?a:a.type;if(d in c)throw Error("addCase cannot be called with two reducers for the same action type");return c[d]=b,e},addMatcher:function(a,b){return d.push({matcher:a,reducer:b}),e},addDefaultCase:function(a){return b=a,e}};return a(e),[c,d,b]}function aL(a){var b,c=a.name;if(!c)throw Error("`name` is a required option for createSlice");var d="function"==typeof a.initialState?a.initialState:aC(a.initialState),g=a.reducers||{},h=Object.keys(g),i={},j={},k={};function l(){var b="function"==typeof a.extraReducers?aK(a.extraReducers):[a.extraReducers],c=b[0],g=b[1],h=void 0===g?[]:g,i=b[2],k=void 0===i?void 0:i,l=ax(ax({},void 0===c?{}:c),j);return function(a,b,c,d){void 0===c&&(c=[]);var g,h,i="function"==typeof b?aK(b):[b,c,void 0],j=i[0],k=i[1],l=i[2];if("function"==typeof(h=a))g=function(){return aC(a())};else{var m=aC(a);g=function(){return m}}function n(a,b){void 0===a&&(a=g());var c=ap([j[b.type]],k.filter(function(a){return(0,a.matcher)(b)}).map(function(a){return a.reducer}));return 0===c.filter(function(a){return!!a}).length&&(c=[l]),c.reduce(function(a,c){if(c){if(e(a)){var d=c(a,b);return void 0===d?a:d}if(f(a))return $(a,function(a){return c(a,b)});var d=c(a,b);if(void 0===d){if(null===a)return a;throw Error("A case reducer on a non-draftable value must not return undefined")}return d}return a},a)}return n.getInitialState=g,n}(d,function(a){for(var b in l)a.addCase(b,l[b]);for(var c=0,d=h;c<d.length;c++){var e=d[c];a.addMatcher(e.matcher,e.reducer)}k&&a.addDefaultCase(k)})}return h.forEach(function(a){var b,d,e,f,h=g[a],l=(e=c,e+"/"+(f=a));"reducer"in h?(b=h.reducer,d=h.prepare):b=h,i[a]=b,j[l]=b,k[a]=d?aI(l,d):aI(l)}),{name:c,reducer:function(a,c){return b||(b=l()),b(a,c)},actions:k,caseReducers:i,getInitialState:function(){return b||(b=l()),b.getInitialState()}}}function aM(a){return function(b,c){var d=function(b){var d,e;(e=d=c,aA(e)&&"string"==typeof e.type&&Object.keys(e).every(aJ))?a(c.payload,b):a(c,b)};return isDraft3(b)?(d(b),b):createNextState3(b,d)}}function aN(a,b){var c;return b(a)}function aO(a){return Array.isArray(a)||(a=Object.values(a)),a}var aP=function(a){void 0===a&&(a=21);for(var b="",c=a;c--;)b+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return b},aQ=["name","message","stack","code"],aR=function(a,b){this.payload=a,this.meta=b},aS=function(a,b){this.payload=a,this.meta=b},aT=function(a){if("object"==typeof a&&null!==a){for(var b={},c=0,d=aQ;c<d.length;c++){var e=d[c];"string"==typeof a[e]&&(b[e]=a[e])}return b}return{message:String(a)}};function aU(a){if(a.meta&&a.meta.rejectedWithValue)throw a.payload;if(a.error)throw a.error;return a.payload}function aV(a,b,c){var d=aI(a+"/fulfilled",function(a,b,c,d){return{payload:a,meta:ay(ax({},d||{}),{arg:c,requestId:b,requestStatus:"fulfilled"})}}),e=aI(a+"/pending",function(a,b,c){return{payload:void 0,meta:ay(ax({},c||{}),{arg:b,requestId:a,requestStatus:"pending"})}}),f=aI(a+"/rejected",function(a,b,d,e,f){return{payload:e,error:(c&&c.serializeError||aT)(a||"Rejected"),meta:ay(ax({},f||{}),{arg:d,requestId:b,rejectedWithValue:!!e,requestStatus:"rejected",aborted:(null==a?void 0:a.name)==="AbortError",condition:(null==a?void 0:a.name)==="ConditionError"})}}),g="undefined"!=typeof AbortController?AbortController:function(){function a(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return a.prototype.abort=function(){},a}();return Object.assign(function(a){return function(h,i,j){var k,l=(null==c?void 0:c.idGenerator)?c.idGenerator(a):aP(),m=new g,n=new Promise(function(a,b){return m.signal.addEventListener("abort",function(){return b({name:"AbortError",message:k||"Aborted"})})}),o=!1;function p(a){o&&(k=a,m.abort())}var q=function(){return function(a,b,c){return new Promise(function(b,d){var e=function(a){try{g(c.next(a))}catch(b){d(b)}},f=function(a){try{g(c.throw(a))}catch(b){d(b)}},g=function(a){return a.done?b(a.value):Promise.resolve(a.value).then(e,f)};g((c=c.apply(a,null)).next())})}(this,null,function(){var g,k,q,r,s,t;return ao(this,function(u){switch(u.label){case 0:var v;if(u.trys.push([0,4,,5]),v=r=null==(g=null==c?void 0:c.condition)?void 0:g.call(c,a,{getState:i,extra:j}),null===v||"object"!=typeof v||"function"!=typeof v.then)return[3,2];return[4,r];case 1:r=u.sent(),u.label=2;case 2:if(!1===r)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return o=!0,h(e(l,a,null==(k=null==c?void 0:c.getPendingMeta)?void 0:k.call(c,{requestId:l,arg:a},{getState:i,extra:j}))),[4,Promise.race([n,Promise.resolve(b(a,{dispatch:h,getState:i,extra:j,requestId:l,signal:m.signal,abort:p,rejectWithValue:function(a,b){return new aR(a,b)},fulfillWithValue:function(a,b){return new aS(a,b)}})).then(function(b){if(b instanceof aR)throw b;return b instanceof aS?d(b.payload,l,a,b.meta):d(b,l,a)})])];case 3:return q=u.sent(),[3,5];case 4:return q=(s=u.sent())instanceof aR?f(null,l,a,s.payload,s.meta):f(s,l,a),[3,5];case 5:return(t=c&&!c.dispatchConditionRejection&&f.match(q)&&q.meta.condition)||h(q),[2,q]}})})}();return Object.assign(q,{abort:p,requestId:l,arg:a,unwrap:function(){return q.then(aU)}})}},{pending:e,rejected:f,fulfilled:d,typePrefix:a})}aV.withTypes=aV;var aW=function(a,b){var c;return(c=a)&&"function"==typeof c.match?a.match(b):a(b)};function aX(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return function(b){return a.some(function(a){return aW(a,b)})}}var aY=function(a,b){if("function"!=typeof a)throw TypeError(b+" is not a function")},aZ=function(){},a$=function(a,b){return void 0===b&&(b=aZ),a.catch(b),a},a_=function(a,b){a.addEventListener("abort",b,{once:!0})},a0=function(a,b){var c=a.signal;!c.aborted&&("reason"in c||Object.defineProperty(c,"reason",{enumerable:!0,value:b,configurable:!0,writable:!0}),a.abort(b))},a1="listener",a2="completed",a3="cancelled",a4=a1+"-"+a3,a5=function(a){this.code=a,this.name="TaskAbortError",this.message="task "+a3+" (reason: "+a+")"},a6=function(a){if(a.aborted)throw new a5(a.reason)},a7="listenerMiddleware",a8=function(a){var b=a.type,c=a.actionCreator,d=a.matcher,e=a.predicate,f=a.effect;if(b)e=aI(b).match;else if(c)b=c.type,e=c.match;else if(d)e=d;else if(e);else throw Error("Creating or removing a listener requires one of the known fields for matching an action");return aY(f,"options.listener"),{predicate:e,type:b,effect:f}};aI(a7+"/add"),aI(a7+"/removeAll"),aI(a7+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:c.g),!function a(){function b(a,b){var c=l[a];return c?c.enumerable=b:l[a]=c={configurable:!0,enumerable:b,get:function(){var b=this[R];return W.get(b,a)},set:function(b){var c=this[R];W.set(c,a,b)}},c}function c(a){for(var b=a.length-1;b>=0;b--){var c=a[b][R];if(!c.P)switch(c.i){case 5:f(c)&&E(c);break;case 4:d(c)&&E(c)}}}function d(a){for(var b=a.t,c=a.k,d=T(c),e=d.length-1;e>=0;e--){var f=d[e];if(f!==R){var g=b[f];if(void 0===g&&!i(b,f))return!0;var h=c[f],j=h&&h[R];if(j?j.t!==g:!k(h,g))return!0}}var l=!!b[R];return d.length!==T(b).length+(l?0:1)}function f(a){var b=a.k;if(b.length!==a.t.length)return!0;var c=Object.getOwnPropertyDescriptor(b,b.length-1);if(c&&!c.get)return!0;for(var d=0;d<b.length;d++)if(!b.hasOwnProperty(d))return!0;return!1}var h,j,l={};h="ES5",j={J:function(a,c){var d=Array.isArray(a),e=function(a,c){if(a){for(var d=Array(c.length),e=0;e<c.length;e++)Object.defineProperty(d,""+e,b(e,!0));return d}var f=U(c);delete f[R];for(var g=T(f),h=0;h<g.length;h++){var i=g[h];f[i]=b(i,a||!!f[i].enumerable)}return Object.create(Object.getPrototypeOf(c),f)}(d,a),f={i:d?5:4,A:c?c.A:K,P:!1,I:!1,D:{},l:c,t:a,k:e,o:null,O:!1,C:!1};return Object.defineProperty(e,R,{value:f,writable:!0}),e},S:function(a,b,d){d?e(b)&&b[R].A===a&&c(a.p):(a.u&&function a(b){if(b&&"object"==typeof b){var c=b[R];if(c){var d=c.t,e=c.k,h=c.D,j=c.i;if(4===j)g(e,function(b){b!==R&&(void 0!==d[b]||i(d,b)?h[b]||a(e[b]):(h[b]=!0,E(c)))}),g(d,function(a){void 0!==e[a]||i(e,a)||(h[a]=!1,E(c))});else if(5===j){if(f(c)&&(E(c),h.length=!0),e.length<d.length)for(var k=e.length;k<d.length;k++)h[k]=!1;else for(var l=d.length;l<e.length;l++)h[l]=!0;for(var m=Math.min(e.length,d.length),n=0;n<m;n++)e.hasOwnProperty(n)||(h[n]=!0),void 0===h[n]&&a(e[n])}}}}(a.p[0]),c(a.p))},K:function(a){return 4===a.i?d(a):f(a)}},V[h]||(V[h]=j)}()},6690:function(a,b,c){"use strict";c.d(b,{Xb:function(){return d.Xb},ck:function(){return d.ck},e5:function(){return d.e5},hJ:function(){return d.hJ},rh:function(){return d.rh},v0:function(){return d.v0},w7:function(){return d.w7}});var d=c(2986)},5321:function(a,b,c){"use strict";c.d(b,{ET:function(){return k9},hJ:function(){return ki},JU:function(){return kj},QT:function(){return k6},PL:function(){return k8},ad:function(){return km},cf:function(){return la},Xo:function(){return k$},IO:function(){return kY},Bt:function(){return ld}});var d,e,f,g,h,i,j,k,l,m,n=c(5816),o=c(8463),p=c(3333),q=c(4444),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c.g?c.g:"undefined"!=typeof self?self:{},s={},t=t||{},u=r||self;function v(){}function w(a){var b=typeof a;return"array"==(b="object"!=b?b:a?Array.isArray(a)?"array":b:"null")||"object"==b&&"number"==typeof a.length}function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function y(a,b,c){return a.call.apply(a.bind,arguments)}function z(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function A(a,b,c){return(A=Function.prototype.bind&& -1!=Function.prototype.bind.toString().indexOf("native code")?y:z).apply(null,arguments)}function B(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function C(a,b){function c(){}c.prototype=b.prototype,a.Z=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.Vb=function(a,c,d){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return b.prototype[c].apply(a,e)}}function D(){this.s=this.s,this.o=this.o}D.prototype.s=!1,D.prototype.na=function(){this.s||(this.s=!0,this.M())},D.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let E=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,0);for(let c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){let d=a.length,e="string"==typeof a?a.split(""):a;for(let f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function G(a){return Array.prototype.concat.apply([],arguments)}function H(a){let b=a.length;if(0<b){let c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]}function I(a){return/^[\s\xa0]*$/.test(a)}var J=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function K(a,b){return -1!=a.indexOf(b)}function L(a,b){return a<b?-1:a>b?1:0}a:{var M=u.navigator;if(M){var N=M.userAgent;if(N){f=N;break a}}f=""}function O(a,b,c){for(let d in a)b.call(c,a[d],d,a)}function P(a){let b={};for(let c in a)b[c]=a[c];return b}var Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,b){let c,d;for(let e=1;e<arguments.length;e++){for(c in d=arguments[e])a[c]=d[c];for(let f=0;f<Q.length;f++)c=Q[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function S(a){return S[" "](a),a}S[" "]=v;var T=K(f,"Opera"),U=K(f,"Trident")||K(f,"MSIE"),V=K(f,"Edge"),W=V||U,X=K(f,"Gecko")&&!(K(f.toLowerCase(),"webkit")&&!K(f,"Edge"))&&!(K(f,"Trident")||K(f,"MSIE"))&&!K(f,"Edge"),Y=K(f.toLowerCase(),"webkit")&&!K(f,"Edge");function Z(){var a=u.document;return a?a.documentMode:void 0}a:{var $,_="",aa=($=f,X?/rv:([^\);]+)(\)|;)/.exec($):V?/Edge\/([\d\.]+)/.exec($):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($):Y?/WebKit\/(\S+)/.exec($):T?/(?:Version)[ \/]?(\S+)/.exec($):void 0);if(aa&&(_=aa?aa[1]:""),U){var ab=Z();if(null!=ab&&ab>parseFloat(_)){g=String(ab);break a}}g=_}var ac={};if(u.document&&U){h=Z()||parseInt(g,10)||void 0}else h=void 0;var ad=h,ae=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{u.addEventListener("test",v,b),u.removeEventListener("test",v,b)}catch(c){}return a}();function af(a,b){this.type=a,this.g=this.target=b,this.defaultPrevented=!1}function ag(a,b){if(af.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=b,b=a.relatedTarget){if(X){a:{try{S(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b,d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType="string"==typeof a.pointerType?a.pointerType:ah[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ag.Z.h.call(this)}}af.prototype.h=function(){this.defaultPrevented=!0},C(ag,af);var ah={2:"touch",3:"pen",4:"mouse"};ag.prototype.h=function(){ag.Z.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ai="closure_listenable_"+(1e6*Math.random()|0),aj=0;function ak(a,b,c,d,e){this.listener=a,this.proxy=null,this.src=b,this.type=c,this.capture=!!d,this.ia=e,this.key=++aj,this.ca=this.fa=!1}function al(a){a.ca=!0,a.listener=null,a.proxy=null,a.src=null,a.ia=null}function am(a){this.src=a,this.g={},this.h=0}function an(a,b){var c=b.type;if(c in a.g){var d,e=a.g[c],f=E(e,b);(d=0<=f)&&Array.prototype.splice.call(e,f,1),d&&(al(b),0==a.g[c].length&&(delete a.g[c],a.h--))}}function ao(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ca&&f.listener==b&& !!c==f.capture&&f.ia==d)return e}return -1}am.prototype.add=function(a,b,c,d,e){var f=a.toString();(a=this.g[f])||(a=this.g[f]=[],this.h++);var g=ao(a,b,d,e);return -1<g?(b=a[g],c||(b.fa=!1)):((b=new ak(b,this.src,f,!!d,e)).fa=c,a.push(b)),b};var ap="closure_lm_"+(1e6*Math.random()|0),aq={};function ar(a,b,c,d,e){if(d&&d.once)return au(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)ar(a,b[f],c,d,e);return null}return c=aB(c),a&&a[ai]?a.N(b,c,x(d)?!!d.capture:!!d,e):as(a,b,c,!1,d,e)}function as(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=x(e)?!!e.capture:!!e,h=az(a);if(h||(a[ap]=h=new am(a)),(c=h.add(b,c,d,g,f)).proxy)return c;if(d=at(),c.proxy=d,d.src=a,d.listener=c,a.addEventListener)ae||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ax(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function at(){function a(c){return b.call(a.src,a.listener,c)}var b=ay;return a}function au(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)au(a,b[f],c,d,e);return null}return c=aB(c),a&&a[ai]?a.O(b,c,x(d)?!!d.capture:!!d,e):as(a,b,c,!0,d,e)}function av(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)av(a,b[f],c,d,e);else(d=x(d)?!!d.capture:!!d,c=aB(c),a&&a[ai])?(a=a.i,(b=String(b).toString())in a.g&& -1<(c=ao(f=a.g[b],c,d,e))&&(al(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--))):a&&(a=az(a))&&(b=a.g[b.toString()],a=-1,b&&(a=ao(b,c,d,e)),(c=-1<a?b[a]:null)&&aw(c))}function aw(a){if("number"!=typeof a&&a&&!a.ca){var b=a.src;if(b&&b[ai])an(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ax(c),d):b.addListener&&b.removeListener&&b.removeListener(d),(c=az(b))?(an(c,a),0==c.h&&(c.src=null,b[ap]=null)):al(a)}}}function ax(a){return a in aq?aq[a]:aq[a]="on"+a}function ay(a,b){if(a.ca)a=!0;else{b=new ag(b,this);var c=a.listener,d=a.ia||a.src;a.fa&&aw(a),a=c.call(d,b)}return a}function az(a){return(a=a[ap])instanceof am?a:null}var aA="__closure_events_fn_"+(1e9*Math.random()>>>0);function aB(a){return"function"==typeof a?a:(a[aA]||(a[aA]=function(b){return a.handleEvent(b)}),a[aA])}function aC(){D.call(this),this.i=new am(this),this.P=this,this.I=null}function aD(a,b){var c,d=a.I;if(d)for(c=[];d;d=d.I)c.push(d);if(a=a.P,d=b.type||b,"string"==typeof b)b=new af(b,a);else if(b instanceof af)b.target=b.target||a;else{var e=b;R(b=new af(d,a),e)}if(e=!0,c)for(var f=c.length-1;0<=f;f--){var g=b.g=c[f];e=aE(g,d,!0,b)&&e}if(e=aE(g=b.g=a,d,!0,b)&&e,e=aE(g,d,!1,b)&&e,c)for(f=0;f<c.length;f++)e=aE(g=b.g=c[f],d,!1,b)&&e}function aE(a,b,c,d){if(!(b=a.i.g[String(b)]))return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ca&&g.capture==c){var h=g.listener,i=g.ia||g.src;g.fa&&an(a.i,g),e=!1!==h.call(i,d)&&e}}return e&&!d.defaultPrevented}C(aC,D),aC.prototype[ai]=!0,aC.prototype.removeEventListener=function(a,b,c,d){av(this,a,b,c,d)},aC.prototype.M=function(){if(aC.Z.M.call(this),this.i){var a,b=this.i;for(a in b.g){for(var c=b.g[a],d=0;d<c.length;d++)al(c[d]);delete b.g[a],b.h--}}this.I=null},aC.prototype.N=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)},aC.prototype.O=function(a,b,c,d){return this.i.add(String(a),b,!0,c,d)};var aF=u.JSON.stringify;function aG(){var a=aN;let b=null;return a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null),b}var aH=new class{constructor(a,b){this.i=a,this.j=b,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}(()=>new aI,a=>a.reset());class aI{constructor(){this.next=this.g=this.h=null}set(a,b){this.h=a,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}function aJ(a){u.setTimeout(()=>{throw a},0)}function aK(a,b){i||aL(),aM||(i(),aM=!0),aN.add(a,b)}function aL(){var a=u.Promise.resolve(void 0);i=function(){a.then(aO)}}var aM=!1,aN=new class{constructor(){this.h=this.g=null}add(a,b){let c=aH.get();c.set(a,b),this.h?this.h.next=c:this.g=c,this.h=c}};function aO(){for(var a;a=aG();){try{a.h.call(a.g)}catch(b){aJ(b)}var c=aH;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}aM=!1}function aP(a,b){aC.call(this),this.h=a||1,this.g=b||u,this.j=A(this.kb,this),this.l=Date.now()}function aQ(a){a.da=!1,a.S&&(a.g.clearTimeout(a.S),a.S=null)}function aR(a,b,c){if("function"==typeof a)c&&(a=A(a,c));else if(a&&"function"==typeof a.handleEvent)a=A(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:u.setTimeout(a,b||0)}function aS(a){a.g=aR(()=>{a.g=null,a.i&&(a.i=!1,aS(a))},a.j);let b=a.h;a.h=null,a.m.apply(null,b)}C(aP,aC),(m=aP.prototype).da=!1,m.S=null,m.kb=function(){if(this.da){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-a):(this.S&&(this.g.clearTimeout(this.S),this.S=null),aD(this,"tick"),this.da&&(aQ(this),this.start()))}},m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},m.M=function(){aP.Z.M.call(this),aQ(this),delete this.g};class aT extends D{constructor(a,b){super(),this.m=a,this.j=b,this.h=null,this.i=!1,this.g=null}l(a){this.h=arguments,this.g?this.i=!0:aS(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aU(a){D.call(this),this.h=a,this.g={}}C(aU,D);var aV=[];function aW(a,b,c,d){Array.isArray(c)||(c&&(aV[0]=c.toString()),c=aV);for(var e=0;e<c.length;e++){var f=ar(b,c[e],d||a.handleEvent,!1,a.h||a);if(!f)break;a.g[f.key]=f}}function aX(a){O(a.g,function(a,b){this.g.hasOwnProperty(b)&&aw(a)},a),a.g={}}function aY(){this.g=!0}function aZ(a,b,c,d){a.info(function(){return"XMLHTTP TEXT ("+b+"): "+a$(a,c)+(d?" "+d:"")})}function a$(a,b){if(!a.g)return b;if(!b)return null;try{var c=JSON.parse(b);if(c){for(a=0;a<c.length;a++)if(Array.isArray(c[a])){var d=c[a];if(!(2>d.length)){var e=d[1];if(Array.isArray(e)&&!(1>e.length)){var f=e[0];if("noop"!=f&&"stop"!=f&&"close"!=f)for(var g=1;g<e.length;g++)e[g]=""}}}}return aF(c)}catch(h){return b}}aU.prototype.M=function(){aU.Z.M.call(this),aX(this)},aU.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},aY.prototype.Aa=function(){this.g=!1},aY.prototype.info=function(){};var a_={},a0=null;function a1(){return a0=a0||new aC}function a2(a){af.call(this,a_.Ma,a)}function a3(a){let b=a1();aD(b,new a2(b,a))}function a4(a,b){af.call(this,a_.STAT_EVENT,a),this.stat=b}function a5(a){let b=a1();aD(b,new a4(b,a))}function a6(a,b){af.call(this,a_.Na,a),this.size=b}function a7(a,b){if("function"!=typeof a)throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},b)}a_.Ma="serverreachability",C(a2,af),a_.STAT_EVENT="statevent",C(a4,af),a_.Na="timingevent",C(a6,af);var a8={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},a9={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ba(){}function bb(a){return a.h||(a.h=a.i())}function bc(){}ba.prototype.h=null;var bd={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function be(){af.call(this,"d")}function bf(){af.call(this,"c")}function bg(){}function bh(a,b,c,d){this.l=a,this.j=b,this.m=c,this.X=d||1,this.V=new aU(this),this.P=bj,a=W?125:void 0,this.W=new aP(a),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new bi}function bi(){this.i=null,this.g="",this.h=!1}C(be,af),C(bf,af),C(bg,ba),bg.prototype.g=function(){return new XMLHttpRequest},bg.prototype.i=function(){return{}},j=new bg;var bj=45e3,bk={},bl={};function bm(a,b,c){a.K=1,a.v=bJ(bD(b)),a.s=c,a.U=!0,bn(a,null)}function bn(a,b){a.F=Date.now(),br(a),a.A=bD(a.v);var c=a.A,d=a.X;Array.isArray(d)||(d=[String(d)]),bW(c.h,"t",d),a.C=0,c=a.l.H,a.h=new bi,a.g=cO(a.l,c?b:null,!a.s),0<a.O&&(a.L=new aT(A(a.Ia,a,a.g),a.O)),aW(a.V,a.g,"readystatechange",a.gb),b=a.H?P(a.H):{},a.s?(a.u||(a.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.s,b)):(a.u="GET",a.g.ea(a.A,a.u,null,b)),a3(1),function(a,b,c,d,e,f){a.info(function(){if(a.g){if(f)for(var g="",h=f.split("&"),i=0;i<h.length;i++){var j=h[i].split("=");if(1<j.length){var k=j[0];j=j[1];var l=k.split("_");g=2<=l.length&&"type"==l[1]?g+(k+"=")+j+"&":g+(k+"=redacted&")}}else g=null}else g=f;return"XMLHTTP REQ ("+d+") [attempt "+e+"]: "+b+"\n"+c+"\n"+g})}(a.j,a.u,a.A,a.m,a.X,a.s)}function bo(a){return!!a.g&&"GET"==a.u&&2!=a.K&&a.l.Ba}function bp(a,b,c){let d=!0,e;for(;!a.I&&a.C<c.length;)if((e=bq(a,c))==bl){4==b&&(a.o=4,a5(14),d=!1),aZ(a.j,a.m,null,"[Incomplete Response]");break}else if(e==bk){a.o=4,a5(15),aZ(a.j,a.m,c,"[Invalid Chunk]"),d=!1;break}else aZ(a.j,a.m,e,null),bw(a,e);bo(a)&&e!=bl&&e!=bk&&(a.h.g="",a.C=0),4!=b||0!=c.length||a.h.h||(a.o=1,a5(16),d=!1),a.i=a.i&&d,d?0<c.length&&!a.aa&&(a.aa=!0,(b=a.l).g==a&&b.$&&!b.L&&(b.h.info("Great, no buffering proxy detected. Bytes received: "+c.length),cG(b),b.L=!0,a5(11))):(aZ(a.j,a.m,c,"[Invalid Chunked Response]"),bv(a),bu(a))}function bq(a,b){var c=a.C,d=b.indexOf("\n",c);return -1==d?bl:isNaN(c=Number(b.substring(c,d)))?bk:(d+=1)+c>b.length?bl:(b=b.substr(d,c),a.C=d+c,b)}function br(a){a.Y=Date.now()+a.P,bs(a,a.P)}function bs(a,b){if(null!=a.B)throw Error("WatchDog timer not null");a.B=a7(A(a.eb,a),b)}function bt(a){a.B&&(u.clearTimeout(a.B),a.B=null)}function bu(a){0==a.l.G||a.I||cJ(a.l,a)}function bv(a){bt(a);var b=a.L;b&&"function"==typeof b.na&&b.na(),a.L=null,aQ(a.W),aX(a.V),a.g&&(b=a.g,a.g=null,b.abort(),b.na())}function bw(a,b){try{var c=a.l;if(0!=c.G&&(c.g==a||b2(c.i,a))){if(c.I=a.N,!a.J&&b2(c.i,a)&&3==c.G){try{var d=c.Ca.g.parse(b)}catch(e){d=null}if(Array.isArray(d)&&3==d.length){var f=d;if(0==f[0]){a:if(!c.u){if(c.g){if(c.g.F+3e3<a.F)cI(c),cx(c);else break a}cF(c),a5(18)}}else c.ta=f[1],0<c.ta-c.U&&37500>f[2]&&c.N&&0==c.A&&!c.v&&(c.v=a7(A(c.ab,c),6e3));if(1>=b1(c.i)&&c.ka){try{c.ka()}catch(g){}c.ka=void 0}}else cL(c,11)}else if((a.J||c.g==a)&&cI(c),!I(b))for(f=c.Ca.g.parse(b),b=0;b<f.length;b++){let h=f[b];if(c.U=h[0],h=h[1],2==c.G){if("c"==h[0]){c.J=h[1],c.la=h[2];let i=h[3];null!=i&&(c.ma=i,c.h.info("VER="+c.ma));let j=h[4];null!=j&&(c.za=j,c.h.info("SVER="+c.za));let k=h[5];null!=k&&"number"==typeof k&&0<k&&(d=1.5*k,c.K=d,c.h.info("backChannelRequestTimeoutMs_="+d)),d=c;let l=a.g;if(l){let m=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var n=d.i;!n.g&&(K(m,"spdy")||K(m,"quic")||K(m,"h2"))&&(n.j=n.l,n.g=new Set,n.h&&(b3(n,n.h),n.h=null))}if(d.D){let o=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;o&&(d.sa=o,bI(d.F,d.D,o))}}c.G=3,c.j&&c.j.xa(),c.$&&(c.O=Date.now()-a.F,c.h.info("Handshake RTT: "+c.O+"ms")),d=c;var p=a;if(d.oa=cN(d,d.H?d.la:null,d.W),p.J){b4(d.i,p);var q=p,r=d.K;r&&q.setTimeout(r),q.B&&(bt(q),br(q)),d.g=p}else cE(d);0<c.l.length&&cA(c)}else"stop"!=h[0]&&"close"!=h[0]||cL(c,7)}else 3==c.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?cL(c,7):cw(c):"noop"!=h[0]&&c.j&&c.j.wa(h),c.A=0)}}a3(4)}catch(s){}}function bx(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(w(a)||"string"==typeof a)F(a,b,void 0);else{if(a.T&&"function"==typeof a.T)var c=a.T();else if(a.R&&"function"==typeof a.R)c=void 0;else if(w(a)||"string"==typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else for(e in c=[],d=0,a)c[d++]=e;e=(d=function(a){if(a.R&&"function"==typeof a.R)return a.R();if("string"==typeof a)return a.split("");if(w(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}for(d in b=[],c=0,a)b[c++]=a[d];return b}(a)).length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}}function by(a,b){this.h={},this.g=[],this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){if(a instanceof by)for(c=a.T(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}}function bz(a){if(a.i!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];bA(a.h,d)&&(a.g[c++]=d),b++}a.g.length=c}if(a.i!=a.g.length){var e={};for(c=b=0;b<a.g.length;)bA(e,d=a.g[b])||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}function bA(a,b){return Object.prototype.hasOwnProperty.call(a,b)}(m=bh.prototype).setTimeout=function(a){this.P=a},m.gb=function(a){a=a.target;let b=this.L;b&&3==cr(a)?b.l():this.Ia(a)},m.Ia=function(a){try{if(a==this.g)a:{let b=cr(this.g);var c=this.g.Da();let d=this.g.ba();if(!(3>b)&&(3!=b||W||this.g&&(this.h.h||this.g.ga()||cs(this.g)))){this.I||4!=b||7==c||(8==c||0>=d?a3(3):a3(2)),bt(this);var e=this.g.ba();this.N=e;b:if(bo(this)){var f=cs(this.g);a="";var g=f.length,h=4==cr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bv(this),bu(this);var i="";break b}this.h.i=new u.TextDecoder}for(c=0;c<g;c++)this.h.h=!0,a+=this.h.i.decode(f[c],{stream:h&&c==g-1});f.splice(0,g),this.h.g+=a,this.C=0,i=this.h.g}else i=this.g.ga();if(this.i=200==e,function(a,b,c,d,e,f,g){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+e+"]: "+b+"\n"+c+"\n"+f+" "+g})}(this.j,this.u,this.A,this.m,this.X,b,e),this.i){if(this.$&&!this.J){b:{if(this.g){var j,k=this.g;if((j=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(j)){var l=j;break b}}l=null}if(e=l)aZ(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bw(this,e);else{this.i=!1,this.o=3,a5(12),bv(this),bu(this);break a}}this.U?(bp(this,b,i),W&&this.i&&3==b&&(aW(this.V,this.W,"tick",this.fb),this.W.start())):(aZ(this.j,this.m,i,null),bw(this,i)),4==b&&bv(this),this.i&&!this.I&&(4==b?cJ(this.l,this):(this.i=!1,br(this)))}else 400==e&&0<i.indexOf("Unknown SID")?(this.o=3,a5(12)):(this.o=0,a5(13)),bv(this),bu(this)}}}catch(m){}finally{}},m.fb=function(){if(this.g){var a=cr(this.g),b=this.g.ga();this.C<b.length&&(bt(this),bp(this,a,b),this.i&&4!=a&&br(this))}},m.cancel=function(){this.I=!0,bv(this)},m.eb=function(){this.B=null;let a=Date.now();0<=a-this.Y?(function(a,b){a.info(function(){return"TIMEOUT: "+b})}(this.j,this.A),2!=this.K&&(a3(3),a5(17)),bv(this),this.o=2,bu(this)):bs(this,this.Y-a)},(m=by.prototype).R=function(){bz(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.h[this.g[b]]);return a},m.T=function(){return bz(this),this.g.concat()},m.get=function(a,b){return bA(this.h,a)?this.h[a]:b},m.set=function(a,b){bA(this.h,a)||(this.i++,this.g.push(a)),this.h[a]=b},m.forEach=function(a,b){for(var c=this.T(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};var bB=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bC(a,b){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,a instanceof bC){this.g=void 0!==b?b:a.g,bE(this,a.j),this.s=a.s,bF(this,a.i),bG(this,a.m),this.l=a.l,b=a.h;var c=new bS;c.i=b.i,b.g&&(c.g=new by(b.g),c.h=b.h),bH(this,c),this.o=a.o}else a&&(c=String(a).match(bB))?(this.g=!!b,bE(this,c[1]||"",!0),this.s=bK(c[2]||""),bF(this,c[3]||"",!0),bG(this,c[4]),this.l=bK(c[5]||"",!0),bH(this,c[6]||"",!0),this.o=bK(c[7]||"")):(this.g=!!b,this.h=new bS(null,this.g))}function bD(a){return new bC(a)}function bE(a,b,c){a.j=c?bK(b,!0):b,a.j&&(a.j=a.j.replace(/:$/,""))}function bF(a,b,c){a.i=c?bK(b,!0):b}function bG(a,b){if(b){if(isNaN(b=Number(b))||0>b)throw Error("Bad port number "+b);a.m=b}else a.m=null}function bH(a,b,c){b instanceof bS?(a.h=b,bY(a.h,a.g)):(c||(b=bL(b,bQ)),a.h=new bS(b,a.g))}function bI(a,b,c){a.h.set(b,c)}function bJ(a){return bI(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bK(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bL(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,bM),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bM(a){return"%"+((a=a.charCodeAt(0))>>4&15).toString(16)+(15&a).toString(16)}bC.prototype.toString=function(){var a=[],b=this.j;b&&a.push(bL(b,bN,!0),":");var c=this.i;return(c||"file"==b)&&(a.push("//"),(b=this.s)&&a.push(bL(b,bN,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(c=this.m)&&a.push(":",String(c))),(c=this.l)&&(this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(bL(c,"/"==c.charAt(0)?bP:bO,!0))),(c=this.h.toString())&&a.push("?",c),(c=this.o)&&a.push("#",bL(c,bR)),a.join("")};var bN=/[#\/\?@]/g,bO=/[#\?:]/g,bP=/[#\?]/g,bQ=/[#\?@]/g,bR=/#/g;function bS(a,b){this.h=this.g=null,this.i=a||null,this.j=!!b}function bT(a){a.g||(a.g=new by,a.h=0,a.i&&function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}}(a.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function bU(a,b){bT(a),b=bX(a,b),bA(a.g.h,b)&&(a.i=null,a.h-=a.g.get(b).length,bA((a=a.g).h,b)&&(delete a.h[b],a.i--,a.g.length>2*a.i&&bz(a)))}function bV(a,b){return bT(a),b=bX(a,b),bA(a.g.h,b)}function bW(a,b,c){bU(a,b),0<c.length&&(a.i=null,a.g.set(bX(a,b),H(c)),a.h+=c.length)}function bX(a,b){return b=String(b),a.j&&(b=b.toLowerCase()),b}function bY(a,b){b&&!a.j&&(bT(a),a.i=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(bU(this,b),bW(this,c,a))},a)),a.j=b}(m=bS.prototype).add=function(a,b){bT(this),this.i=null,a=bX(this,a);var c=this.g.get(a);return c||this.g.set(a,c=[]),c.push(b),this.h+=1,this},m.forEach=function(a,b){bT(this),this.g.forEach(function(c,d){F(c,function(c){a.call(b,c,d,this)},this)},this)},m.T=function(){bT(this);for(var a=this.g.R(),b=this.g.T(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c},m.R=function(a){bT(this);var b=[];if("string"==typeof a)bV(this,a)&&(b=G(b,this.g.get(bX(this,a))));else{a=this.g.R();for(var c=0;c<a.length;c++)b=G(b,a[c])}return b},m.set=function(a,b){return bT(this),this.i=null,a=bX(this,a),bV(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[b]),this.h+=1,this},m.get=function(a,b){return a&&0<(a=this.R(a)).length?String(a[0]):b},m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var a=[],b=this.g.T(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.R(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f]))),a.push(g)}}return this.i=a.join("&")};var bZ=class{constructor(a,b){this.h=a,this.g=b}};function b$(a){this.l=a||b_,a=u.PerformanceNavigationTiming?0<(a=u.performance.getEntriesByType("navigation")).length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol):!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var b_=10;function b0(a){return!!a.h|| !!a.g&&a.g.size>=a.j}function b1(a){return a.h?1:a.g?a.g.size:0}function b2(a,b){return a.h?a.h==b:!!a.g&&a.g.has(b)}function b3(a,b){a.g?a.g.add(b):a.h=b}function b4(a,b){a.h&&a.h==b?a.h=null:a.g&&a.g.has(b)&&a.g.delete(b)}function b5(a){if(null!=a.h)return a.i.concat(a.h.D);if(null!=a.g&&0!==a.g.size){let b=a.i;for(let c of a.g.values())b=b.concat(c.D);return b}return H(a.i)}function b6(){}function b7(){this.g=new b6}function b8(a,b,c){let d=c||"";try{bx(a,function(a,c){let e=a;x(a)&&(e=aF(a)),b.push(d+c+"="+encodeURIComponent(e))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e}}function b9(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}}function ca(a){this.l=a.$b||null,this.j=a.ib||!1}function cb(a,b){aC.call(this),this.D=a,this.u=b,this.m=void 0,this.readyState=cc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b$.prototype.cancel=function(){if(this.i=b5(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let a of this.g.values())a.cancel();this.g.clear()}},b6.prototype.stringify=function(a){return u.JSON.stringify(a,void 0)},b6.prototype.parse=function(a){return u.JSON.parse(a,void 0)},C(ca,ba),ca.prototype.g=function(){return new cb(this.l,this.j)},ca.prototype.i=(e={},function(){return e}),C(cb,aC);var cc=0;function cd(a){a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a))}function ce(a){a.readyState=4,a.l=null,a.j=null,a.A=null,cf(a)}function cf(a){a.onreadystatechange&&a.onreadystatechange.call(a)}(m=cb.prototype).open=function(a,b){if(this.readyState!=cc)throw this.abort(),Error("Error reopening a connection");this.C=a,this.B=b,this.readyState=1,cf(this)},m.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let b={headers:this.v,method:this.C,credentials:this.m,cache:void 0};a&&(b.body=a),(this.D||u).fetch(new Request(this.B,b)).then(this.Va.bind(this),this.ha.bind(this))},m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ce(this)),this.readyState=cc},m.Va=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,cf(this)),this.g&&(this.readyState=3,cf(this),this.g))){if("arraybuffer"===this.responseType)a.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==u.ReadableStream&&"body"in a){if(this.j=a.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cd(this)}else a.text().then(this.Ua.bind(this),this.ha.bind(this))}},m.Sa=function(a){if(this.g){if(this.u&&a.value)this.response.push(a.value);else if(!this.u){var b=a.value?a.value:new Uint8Array(0);(b=this.A.decode(b,{stream:!a.done}))&&(this.response=this.responseText+=b)}a.done?ce(this):cf(this),3==this.readyState&&cd(this)}},m.Ua=function(a){this.g&&(this.response=this.responseText=a,ce(this))},m.Ta=function(a){this.g&&(this.response=a,ce(this))},m.ha=function(){this.g&&ce(this)},m.setRequestHeader=function(a,b){this.v.append(a,b)},m.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},m.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],b=this.h.entries();for(var c=b.next();!c.done;)a.push((c=c.value)[0]+": "+c[1]),c=b.next();return a.join("\r\n")},Object.defineProperty(cb.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(a){this.m=a?"include":"same-origin"}});var cg=u.JSON.parse;function ch(a){aC.call(this),this.headers=new by,this.u=a||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ci,this.K=this.L=!1}C(ch,aC);var ci="",cj=/^https?$/i,ck=["POST","PUT"];function cl(a){return"content-type"==a.toLowerCase()}function cm(a,b){a.h=!1,a.g&&(a.l=!0,a.g.abort(),a.l=!1),a.j=b,a.m=5,cn(a),cp(a)}function cn(a){a.D||(a.D=!0,aD(a,"complete"),aD(a,"error"))}function co(a){if(a.h&& void 0!==t&&(!a.C[1]||4!=cr(a)||2!=a.ba())){if(a.v&&4==cr(a))aR(a.Fa,0,a);else if(aD(a,"readystatechange"),4==cr(a)){a.h=!1;try{let b=a.ba();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c,d,e=!0;break a;default:e=!1}if(!(c=e)){if(d=0===b){var f=String(a.H).match(bB)[1]||null;if(!f&&u.self&&u.self.location){var g=u.self.location.protocol;f=g.substr(0,g.length-1)}d=!cj.test(f?f.toLowerCase():"")}c=d}if(c)aD(a,"complete"),aD(a,"success");else{a.m=6;try{var h=2<cr(a)?a.g.statusText:""}catch(i){h=""}a.j=h+" ["+a.ba()+"]",cn(a)}}finally{cp(a)}}}}function cp(a,b){if(a.g){cq(a);let c=a.g,d=a.C[0]?v:null;a.g=null,a.C=null,b||aD(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function cq(a){a.g&&a.K&&(a.g.ontimeout=null),a.A&&(u.clearTimeout(a.A),a.A=null)}function cr(a){return a.g?a.g.readyState:0}function cs(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.J){case ci:case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(b){return null}}function ct(a,b,c){a:{for(e in c){var d,e=!1;break a}e=!0}let f;e||(c=(f="",O(d=c,function(a,b){f+=b,f+=":",f+=a,f+="\r\n"}),f),"string"==typeof a?null!=c&&encodeURIComponent(String(c)):bI(a,b,c))}function cu(a,b,c){return c&&c.internalChannelParams&&c.internalChannelParams[a]||b}function cv(a){this.za=0,this.l=[],this.h=new aY,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=cu("failFast",!1,a),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=cu("baseRetryDelayMs",5e3,a),this.$a=cu("retryDelaySeedMs",1e4,a),this.Ya=cu("forwardChannelMaxRetries",2,a),this.ra=cu("forwardChannelRequestTimeoutMs",2e4,a),this.qa=a&&a.xmlHttpFactory||void 0,this.Ba=a&&a.Yb||!1,this.K=void 0,this.H=a&&a.supportsCrossDomainXhr||!1,this.J="",this.i=new b$(a&&a.concurrentRequestLimit),this.Ca=new b7,this.ja=a&&a.fastHandshake||!1,this.Ra=a&&a.Wb||!1,a&&a.Aa&&this.h.Aa(),a&&a.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&a&&a.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!a|| !1!==a.Xb}function cw(a){if(cy(a),3==a.G){var b=a.V++,c=bD(a.F);bI(c,"SID",a.J),bI(c,"RID",b),bI(c,"TYPE","terminate"),cC(a,c),(b=new bh(a,a.h,b,void 0)).K=2,b.v=bJ(bD(c)),c=!1,u.navigator&&u.navigator.sendBeacon&&(c=u.navigator.sendBeacon(b.v.toString(),"")),!c&&u.Image&&((new Image).src=b.v,c=!0),c||(b.g=cO(b.l,null),b.g.ea(b.v)),b.F=Date.now(),br(b)}cM(a)}function cx(a){a.g&&(cG(a),a.g.cancel(),a.g=null)}function cy(a){cx(a),a.u&&(u.clearTimeout(a.u),a.u=null),cI(a),a.i.cancel(),a.m&&("number"==typeof a.m&&u.clearTimeout(a.m),a.m=null)}function cz(a,b){a.l.push(new bZ(a.Za++,b)),3==a.G&&cA(a)}function cA(a){b0(a.i)||a.m||(a.m=!0,aK(a.Ha,a),a.C=0)}function cB(a,b){var c;c=b?b.m:a.V++;let d=bD(a.F);bI(d,"SID",a.J),bI(d,"RID",c),bI(d,"AID",a.U),cC(a,d),a.o&&a.s&&ct(d,a.o,a.s),c=new bh(a,a.h,c,a.C+1),null===a.o&&(c.H=a.s),b&&(a.l=b.D.concat(a.l)),b=cD(a,c,1e3),c.setTimeout(Math.round(.5*a.ra)+Math.round(.5*a.ra*Math.random())),b3(a.i,c),bm(c,d,b)}function cC(a,b){a.j&&bx({},function(a,c){bI(b,c,a)})}function cD(a,b,c){c=Math.min(a.l.length,c);var d=a.j?A(a.j.Oa,a.j,a):null;a:{var e=a.l;let f=-1;for(;;){let g=["count="+c];-1==f?0<c?(f=e[0].h,g.push("ofs="+f)):f=0:g.push("ofs="+f);let h=!0;for(let i=0;i<c;i++){let j=e[i].h,k=e[i].g;if(0>(j-=f))f=Math.max(0,e[i].h-100),h=!1;else try{b8(k,g,"req"+j+"_")}catch(l){d&&d(k)}}if(h){d=g.join("&");break a}}}return a=a.l.splice(0,c),b.D=a,d}function cE(a){a.g||a.u||(a.Y=1,aK(a.Ga,a),a.A=0)}function cF(a){return!a.g&&!a.u&&!(3<=a.A)&&(a.Y++,a.u=a7(A(a.Ga,a),cK(a,a.A)),a.A++,!0)}function cG(a){null!=a.B&&(u.clearTimeout(a.B),a.B=null)}function cH(a){a.g=new bh(a,a.h,"rpc",a.Y),null===a.o&&(a.g.H=a.s),a.g.O=0;var b=bD(a.oa);bI(b,"RID","rpc"),bI(b,"SID",a.J),bI(b,"CI",a.N?"0":"1"),bI(b,"AID",a.U),cC(a,b),bI(b,"TYPE","xmlhttp"),a.o&&a.s&&ct(b,a.o,a.s),a.K&&a.g.setTimeout(a.K);var c=a.g;a=a.la,c.K=1,c.v=bJ(bD(b)),c.s=null,c.U=!0,bn(c,a)}function cI(a){null!=a.v&&(u.clearTimeout(a.v),a.v=null)}function cJ(a,b){var c=null;if(a.g==b){cI(a),cG(a),a.g=null;var d=2}else{if(!b2(a.i,b))return;c=b.D,b4(a.i,b),d=1}if(a.I=b.N,0!=a.G){if(b.i){if(1==d){c=b.s?b.s.length:0,b=Date.now()-b.F;var e,f,g=a.C;d=a1(),aD(d,new a6(d,c,b,g)),cA(a)}else cE(a)}else if(3==(g=b.o)||0==g&&0<a.I||!(1==d&&(e=a,f=b,!(b1(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=f.D.concat(e.l),!0):1!=e.G&&2!=e.G&&!(e.C>=(e.Xa?0:e.Ya))&&(e.m=a7(A(e.Ha,e,f),cK(e,e.C)),e.C++,!0)))||2==d&&cF(a)))switch(c&&0<c.length&&((b=a.i).i=b.i.concat(c)),g){case 1:cL(a,5);break;case 4:cL(a,10);break;case 3:cL(a,6);break;default:cL(a,2)}}}function cK(a,b){let c=a.Pa+Math.floor(Math.random()*a.$a);return a.j||(c*=2),c*b}function cL(a,b){if(a.h.info("Error code "+b),2==b){var c=null;a.j&&(c=null);var d=A(a.jb,a);c||(c=new bC("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||bE(c,"https"),bJ(c)),function(a,b){let c=new aY;if(u.Image){let d=new Image;d.onload=B(b9,c,d,"TestLoadImage: loaded",!0,b),d.onerror=B(b9,c,d,"TestLoadImage: error",!1,b),d.onabort=B(b9,c,d,"TestLoadImage: abort",!1,b),d.ontimeout=B(b9,c,d,"TestLoadImage: timeout",!1,b),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else b(!1)}(c.toString(),d)}else a5(2);a.G=0,a.j&&a.j.va(b),cM(a),cy(a)}function cM(a){a.G=0,a.I=-1,a.j&&((0!=b5(a.i).length||0!=a.l.length)&&(a.i.i.length=0,H(a.l),a.l.length=0),a.j.ua())}function cN(a,b,c){var d,e,f,g,h,i;let j=(d=c)instanceof bC?bD(d):new bC(d,void 0);if(""!=j.i)b&&bF(j,b+"."+j.i),bG(j,j.m);else{let k=u.location;j=(e=k.protocol,f=b?b+"."+k.hostname:k.hostname,g=+k.port,h=c,i=new bC(null,void 0),e&&bE(i,e),f&&bF(i,f),g&&bG(i,g),h&&(i.l=h),i)}return a.aa&&O(a.aa,function(a,b){bI(j,b,a)}),b=a.D,c=a.sa,b&&c&&bI(j,b,c),bI(j,"VER",a.ma),cC(a,j),j}function cO(a,b,c){if(b&&!a.H)throw Error("Can't create secondary domain capable XhrIo object.");return(b=new ch(c&&a.Ba&&!a.qa?new ca({ib:!0}):a.qa)).L=a.H,b}function cP(){}function cQ(){if(U&&!(10<=Number(ad)))throw Error("Environmental error: no available transport.")}function cR(a,b){aC.call(this),this.g=new cv(b),this.l=a,this.h=b&&b.messageUrlParams||null,a=b&&b.messageHeaders||null,b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.s=a,a=b&&b.initMessageHeaders||null,b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType}),b&&b.ya&&(a?a["X-WebChannel-Client-Profile"]=b.ya:a={"X-WebChannel-Client-Profile":b.ya}),this.g.P=a,(a=b&&b.httpHeadersOverwriteParam)&&!I(a)&&(this.g.o=a),this.A=b&&b.supportsCrossDomainXhr||!1,this.v=b&&b.sendRawJson||!1,(b=b&&b.httpSessionIdParam)&&!I(b)&&(this.g.D=b,null!==(a=this.h)&&b in a&&b in(a=this.h)&&delete a[b]),this.j=new cU(this)}function cS(a){be.call(this);var b=a.__sm__;if(b){a:{for(let c in b){a=c;break a}a=void 0}(this.i=a)&&(a=this.i,b=null!==b&&a in b?b[a]:void 0),this.data=b}else this.data=a}function cT(){bf.call(this),this.status=1}function cU(a){this.g=a}(m=ch.prototype).ea=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET",this.H=a,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():j.g(),this.C=this.u?bb(this.u):bb(j),this.g.onreadystatechange=A(this.Fa,this);try{this.F=!0,this.g.open(b,String(a),!0),this.F=!1}catch(e){cm(this,e);return}a=c||"";let f=new by(this.headers);d&&bx(d,function(a,b){f.set(b,a)}),d=function(a){a:{var b=cl;let c=a.length,d="string"==typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"==typeof a?a.charAt(b):a[b]}(f.T()),c=u.FormData&&a instanceof u.FormData,!(0<=E(ck,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),f.forEach(function(a,b){this.g.setRequestHeader(b,a)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var h;cq(this),0<this.B&&((this.K=(h=this.g,U&&function(a){var b=ac;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}(function(){let a=0,b=J(String(g)).split("."),c=J("9").split("."),d=Math.max(b.length,c.length);for(let e=0;0==a&&e<d;e++){var f=b[e]||"",h=c[e]||"";do{if(f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""],h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""],0==f[0].length&&0==h[0].length)break;a=L(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||L(0==f[2].length,0==h[2].length)||L(f[2],h[2]),f=f[3],h=h[3]}while(0==a)}return 0<=a})&&"number"==typeof h.timeout&& void 0!==h.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=A(this.pa,this)):this.A=aR(this.pa,this.B,this)),this.v=!0,this.g.send(a),this.v=!1}catch(i){cm(this,i)}},m.pa=function(){void 0!==t&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,aD(this,"timeout"),this.abort(8))},m.abort=function(a){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=a||7,aD(this,"complete"),aD(this,"abort"),cp(this))},m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cp(this,!0)),ch.Z.M.call(this)},m.Fa=function(){this.s||(this.F||this.v||this.l?co(this):this.cb())},m.cb=function(){co(this)},m.ba=function(){try{return 2<cr(this)?this.g.status:-1}catch(a){return -1}},m.ga=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},m.Qa=function(a){if(this.g){var b=this.g.responseText;return a&&0==b.indexOf(a)&&(b=b.substring(a.length)),cg(b)}},m.Da=function(){return this.m},m.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(m=cv.prototype).ma=8,m.G=1,m.hb=function(a){try{this.h.info("Origin Trials invoked: "+a)}catch(b){}},m.Ha=function(a){if(this.m){if(this.m=null,1==this.G){if(!a){this.V=Math.floor(1e5*Math.random()),a=this.V++;let b=new bh(this,this.h,a,void 0),c=this.s;if(this.P&&(c?R(c=P(c),this.P):c=this.P),null===this.o&&(b.H=c),this.ja)a:{for(var d=0,e=0;e<this.l.length;e++){b:{var f=this.l[e];if("__data__"in f.g&&"string"==typeof(f=f.g.__data__)){f=f.length;break b}f=void 0}if(void 0===f)break;if(4096<(d+=f)){d=e;break a}if(4096===d||e===this.l.length-1){d=e+1;break a}}d=1e3}else d=1e3;d=cD(this,b,d),e=bD(this.F),bI(e,"RID",a),bI(e,"CVER",22),this.D&&bI(e,"X-HTTP-Session-Id",this.D),cC(this,e),this.o&&c&&ct(e,this.o,c),b3(this.i,b),this.Ra&&bI(e,"TYPE","init"),this.ja?(bI(e,"$req",d),bI(e,"SID","null"),b.$=!0,bm(b,e,null)):bm(b,e,d),this.G=2}}else 3==this.G&&(a?cB(this,a):0==this.l.length||b0(this.i)||cB(this))}},m.Ga=function(){if(this.u=null,cH(this),this.$&&!(this.L||null==this.g||0>=this.O)){var a=2*this.O;this.h.info("BP detection timer enabled: "+a),this.B=a7(A(this.bb,this),a)}},m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,a5(10),cx(this),cH(this))},m.ab=function(){null!=this.v&&(this.v=null,cx(this),cF(this),a5(19))},m.jb=function(a){a?(this.h.info("Successfully pinged google.com"),a5(2)):(this.h.info("Failed to ping google.com"),a5(1))},(m=cP.prototype).xa=function(){},m.wa=function(){},m.va=function(){},m.ua=function(){},m.Oa=function(){},cQ.prototype.g=function(a,b){return new cR(a,b)},C(cR,aC),cR.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var a=this.g,b=this.l,c=this.h||void 0;a.Wa&&(a.h.info("Origin Trials enabled."),aK(A(a.hb,a,b))),a5(0),a.W=b,a.aa=c||{},a.N=a.X,a.F=cN(a,null,a.W),cA(a)},cR.prototype.close=function(){cw(this.g)},cR.prototype.u=function(a){if("string"==typeof a){var b={};b.__data__=a,cz(this.g,b)}else this.v?((b={}).__data__=aF(a),cz(this.g,b)):cz(this.g,a)},cR.prototype.M=function(){this.g.j=null,delete this.j,cw(this.g),delete this.g,cR.Z.M.call(this)},C(cS,be),C(cT,bf),C(cU,cP),cU.prototype.xa=function(){aD(this.g,"a")},cU.prototype.wa=function(a){aD(this.g,new cS(a))},cU.prototype.va=function(a){aD(this.g,new cT(a))},cU.prototype.ua=function(){aD(this.g,"b")},cQ.prototype.createWebChannel=cQ.prototype.g,cR.prototype.send=cR.prototype.u,cR.prototype.open=cR.prototype.m,cR.prototype.close=cR.prototype.close,a8.NO_ERROR=0,a8.TIMEOUT=8,a8.HTTP_ERROR=6,a9.COMPLETE="complete",bc.EventType=bd,bd.OPEN="a",bd.CLOSE="b",bd.ERROR="c",bd.MESSAGE="d",aC.prototype.listen=aC.prototype.N,ch.prototype.listenOnce=ch.prototype.O,ch.prototype.getLastError=ch.prototype.La,ch.prototype.getLastErrorCode=ch.prototype.Da,ch.prototype.getStatus=ch.prototype.ba,ch.prototype.getResponseJson=ch.prototype.Qa,ch.prototype.getResponseText=ch.prototype.ga,ch.prototype.send=ch.prototype.ea;var cV=s.createWebChannelTransport=function(){return new cQ},cW=s.getStatEventTarget=function(){return a1()},cX=s.ErrorCode=a8,cY=s.EventType=a9,cZ=s.Event=a_,c$=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},c_=s.FetchXmlHttpFactory=ca,c0=s.WebChannel=bc,c1=s.XhrIo=ch,c2=c(3454);let c3="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class c4{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}c4.UNAUTHENTICATED=new c4(null),c4.GOOGLE_CREDENTIALS=new c4("google-credentials-uid"),c4.FIRST_PARTY=new c4("first-party-uid"),c4.MOCK_USER=new c4("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let c5="9.9.4",c6=new p.Yd("@firebase/firestore");function c7(){return c6.logLevel}function c8(a,...b){if(c6.logLevel<=p.in.DEBUG){let c=b.map(db);c6.debug(`Firestore (${c5}): ${a}`,...c)}}function c9(a,...b){if(c6.logLevel<=p.in.ERROR){let c=b.map(db);c6.error(`Firestore (${c5}): ${a}`,...c)}}function da(a,...b){if(c6.logLevel<=p.in.WARN){let c=b.map(db);c6.warn(`Firestore (${c5}): ${a}`,...c)}}function db(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function dc(a="Unexpected state"){let b=`FIRESTORE (${c5}) INTERNAL ASSERTION FAILED: `+a;throw c9(b),Error(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends q.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class df{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dg{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(c4.UNAUTHENTICATED))}shutdown(){}}class di{constructor(a){this.t=a,this.currentUser=c4.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,b){let c=this.i,d=a=>this.i!==c?(c=this.i,b(a)):Promise.resolve(),e=new df;this.o=()=>{this.i++,this.currentUser=this.u(),e.resolve(),e=new df,a.enqueueRetryable(()=>d(this.currentUser))};let f=()=>{let b=e;a.enqueueRetryable(async()=>{await b.promise,await d(this.currentUser)})},g=a=>{c8("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),f()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(c8("FirebaseAuthCredentialsProvider","Auth not yet detected"),e.resolve(),e=new df)}},0),f()}getToken(){let a=this.i,b=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(b).then(b=>{var c;return this.i!==a?(c8("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):b?("string"==typeof b.accessToken||dc(),new dg(b.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var a;let b=this.auth&&this.auth.getUid();return null===b||"string"==typeof b||dc(),new c4(b)}}class dj{constructor(a,b,c,d){this.h=a,this.l=b,this.m=c,this.g=d,this.type="FirstParty",this.user=c4.FIRST_PARTY,this.p=new Map}I(){var a;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&dc(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let a=this.I();return a&&this.p.set("Authorization",a),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class dk{constructor(a,b,c,d){this.h=a,this.l=b,this.m=c,this.g=d}getToken(){return Promise.resolve(new dj(this.h,this.l,this.m,this.g))}start(a,b){a.enqueueRetryable(()=>b(c4.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dl{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dm{constructor(a){this.T=a,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(a,b){let c=a=>{null!=a.error&&c8("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.A;return this.A=a.token,c8("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{c8("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.T.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.T.getImmediate({optional:!0});a?d(a):c8("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||dc(),this.A=a.token,new dl(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function dn(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dp{static R(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=dn(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}function dq(a,b){return a<b?-1:a>b?1:0}function dr(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}function ds(a){return a+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class dt{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new de(dd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new de(dd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return dt.fromMillis(Date.now())}static fromDate(a){return dt.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new dt(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?dq(this.nanoseconds,a.nanoseconds):dq(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class du{constructor(a){this.timestamp=a}static fromTimestamp(a){return new du(a)}static min(){return new du(new dt(0,0))}static max(){return new du(new dt(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class dv{constructor(a,b,c){void 0===b?b=0:b>a.length&&dc(),void 0===c?c=a.length-b:c>a.length-b&&dc(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===dv.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof dv?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class dw extends dv{construct(a,b,c){return new dw(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new de(dd.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new dw(b)}static emptyPath(){return new dw([])}}let dx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dy extends dv{construct(a,b,c){return new dy(a,b,c)}static isValidIdentifier(a){return dx.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dy.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new dy(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new de(dd.INVALID_ARGUMENT,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new de(dd.INVALID_ARGUMENT,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new de(dd.INVALID_ARGUMENT,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new de(dd.INVALID_ARGUMENT,"Unterminated ` in path: "+a);return new dy(b)}static emptyPath(){return new dy([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class dz{constructor(a){this.path=a}static fromPath(a){return new dz(dw.fromString(a))}static fromName(a){return new dz(dw.fromString(a).popFirst(5))}static empty(){return new dz(dw.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===dw.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return dw.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new dz(new dw(a.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class dA{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function dB(a){return a.fields.find(a=>2===a.kind)}function dC(a){return a.fields.filter(a=>2!==a.kind)}dA.UNKNOWN_ID=-1;class dD{constructor(a,b){this.fieldPath=a,this.kind=b}}function dE(a,b){let c=dy.comparator(a.fieldPath,b.fieldPath);return 0!==c?c:dq(a.kind,b.kind)}class dF{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new dF(0,dI.min())}}function dG(a,b){let c=a.toTimestamp().seconds,d=a.toTimestamp().nanoseconds+1,e=du.fromTimestamp(1e9===d?new dt(c+1,0):new dt(c,d));return new dI(e,dz.empty(),b)}function dH(a){return new dI(a.readTime,a.key,-1)}class dI{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new dI(du.min(),dz.empty(),-1)}static max(){return new dI(du.max(),dz.empty(),-1)}}function dJ(a,b){let c=a.readTime.compareTo(b.readTime);return 0!==c?c:0!==(c=dz.comparator(a.documentKey,b.documentKey))?c:dq(a.largestBatchId,b.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dK="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function dM(a){if(a.code!==dd.FAILED_PRECONDITION||a.message!==dK)throw a;c8("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class dN{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&dc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new dN((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(a){try{let b=a();return b instanceof dN?b:dN.resolve(b)}catch(c){return dN.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):dN.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):dN.reject(b)}static resolve(a){return new dN((b,c)=>{b(a)})}static reject(a){return new dN((b,c)=>{c(a)})}static waitFor(a){return new dN((b,c)=>{let d=0,e=0,f=!1;a.forEach(a=>{++d,a.next(()=>{++e,f&&e===d&&b()},a=>c(a))}),f=!0,e===d&&b()})}static or(a){let b=dN.resolve(!1);for(let c of a)b=b.next(a=>a?dN.resolve(a):c());return b}static forEach(a,b){let c=[];return a.forEach((a,d)=>{c.push(b.call(this,a,d))}),this.waitFor(c)}static mapArray(a,b){return new dN((c,d)=>{let e=a.length,f=Array(e),g=0;for(let h=0;h<e;h++){let i=h;b(a[i]).next(a=>{f[i]=a,++g===e&&c(f)},a=>d(a))}})}static doWhile(a,b){return new dN((c,d)=>{let e=()=>{!0===a()?b().next(()=>{e()},d):c()};e()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class dO{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.P=new df,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{b.error?this.P.reject(new dR(a,b.error)):this.P.resolve()},this.transaction.onerror=b=>{let c=dW(b.target.error);this.P.reject(new dR(a,c))}}static open(a,b,c,d){try{return new dO(b,a.transaction(d,c))}catch(e){throw new dR(b,e)}}get v(){return this.P.promise}abort(a){a&&this.P.reject(a),this.aborted||(c8("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new dT(b)}}class dP{constructor(a,b,c){this.name=a,this.version=b,this.S=c,12.2===dP.D(getUA())&&c9("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return c8("SimpleDb","Removing database:",a),dU(window.indexedDB.deleteDatabase(a)).toPromise()}static C(){if(!isIndexedDBAvailable())return!1;if(dP.N())return!0;let a=getUA(),b=dP.D(a),c=0<b&&b<10,d=dP.k(a),e=0<d&&d<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||c||e)}static N(){var a;return void 0!==c2&&"YES"===(null===(a=c2.env)|| void 0===a?void 0:a.M)}static O(a,b){return a.store(b)}static D(a){let b=a.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=b?b[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static k(a){let b=a.match(/Android ([\d.]+)/i),c=b?b[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async F(a){return this.db||(c8("SimpleDb","Opening database:",this.name),this.db=await new Promise((b,c)=>{let d=indexedDB.open(this.name,this.version);d.onsuccess=a=>{let c=a.target.result;b(c)},d.onblocked=()=>{c(new dR(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},d.onerror=b=>{let d=b.target.error;"VersionError"===d.name?c(new de(dd.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===d.name?c(new de(dd.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+d)):c(new dR(a,d))},d.onupgradeneeded=a=>{c8("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let b=a.target.result;this.S.$(b,d.transaction,a.oldVersion,this.version).next(()=>{c8("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=a=>this.B(a)),this.db}L(a){this.B=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(a,b,c,d){let e="readonly"===b,f=0;for(;;){++f;try{this.db=await this.F(a);let g=dO.open(this.db,a,e?"readonly":"readwrite",c),h=d(g).next(a=>(g.V(),a)).catch(a=>(g.abort(a),dN.reject(a))).toPromise();return h.catch(()=>{}),await g.v,h}catch(i){let j=i,k="FirebaseError"!==j.name&&f<3;if(c8("SimpleDb","Transaction failed with error:",j.message,"Retrying:",k),this.close(),!k)return Promise.reject(j)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dQ{constructor(a){this.U=a,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(a){this.U=a}done(){this.q=!0}j(a){this.K=a}delete(){return dU(this.U.delete())}}class dR extends null{constructor(a,b){super(dd.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function dS(a){return"IndexedDbTransactionError"===a.name}class dT{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(c8("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(c8("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),dU(c)}add(a){return c8("SimpleDb","ADD",this.store.name,a,a),dU(this.store.add(a))}get(a){return dU(this.store.get(a)).next(b=>(void 0===b&&(b=null),c8("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return c8("SimpleDb","DELETE",this.store.name,a),dU(this.store.delete(a))}count(){return c8("SimpleDb","COUNT",this.store.name),dU(this.store.count())}W(a,b){let c=this.options(a,b);if(c.index||"function"!=typeof this.store.getAll){let d=this.cursor(c),e=[];return this.H(d,(a,b)=>{e.push(b)}).next(()=>e)}{let f=this.store.getAll(c.range);return new dN((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}J(a,b){let c=this.store.getAll(a,null===b?void 0:b);return new dN((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}Y(a,b){c8("SimpleDb","DELETE ALL",this.store.name);let c=this.options(a,b);c.X=!1;let d=this.cursor(c);return this.H(d,(a,b,c)=>c.delete())}Z(a,b){let c;b?c=a:(c={},b=a);let d=this.cursor(c);return this.H(d,b)}tt(a){let b=this.cursor({});return new dN((c,d)=>{b.onerror=a=>{let b=dW(a.target.error);d(b)},b.onsuccess=b=>{let d=b.target.result;d?a(d.primaryKey,d.value).next(a=>{a?d.continue():c()}):c()}})}H(a,b){let c=[];return new dN((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=a=>{let e=a.target.result;if(!e)return void d();let f=new dQ(e),g=b(e.primaryKey,e.value,f);if(g instanceof dN){let h=g.catch(a=>(f.done(),dN.reject(a)));c.push(h)}f.isDone?d():null===f.G?e.continue():e.continue(f.G)}}).next(()=>dN.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.X?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function dU(a){return new dN((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=dW(a.target.error);c(b)}})}let dV=null;function dW(a){let b=dP.D(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new de("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return dV||(dV=!0,setTimeout(()=>{throw d},0)),d}}return a}class dX{constructor(a,b){this.asyncQueue=a,this.et=b,this.task=null}start(){this.nt(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(a){c8("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{c8("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(a){dS(a)?c8("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await dM(a)}await this.nt(1)})}}class dY{constructor(a,b){this.localStore=a,this.persistence=b}async st(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.it(b,a))}it(a,b){let c=new Set,d=b,e=!0;return dN.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(a).next(b=>{if(null!==b&&!c.has(b))return c8("IndexBackiller",`Processing collection: ${b}`),this.rt(a,b,d).next(a=>{d-=a,c.add(b)});e=!1})).next(()=>b-d)}rt(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.ot(d,c)).next(c=>(c8("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}ot(a,b){let c=a;return b.changes.forEach((a,b)=>{let d=dH(b);dJ(d,c)>0&&(c=d)}),new dI(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class dZ{constructor(a,b){this.previousValue=a,b&&(b.sequenceNumberHandler=a=>this.ut(a),this.ct=a=>b.writeSequenceNumber(a))}ut(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.ct&&this.ct(a),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function d$(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function d_(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function d0(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
dZ.at=-1;class d1{constructor(a,b){this.comparator=a,this.root=b||d3.EMPTY}insert(a,b){return new d1(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,d3.BLACK,null,null))}remove(a){return new d1(this.comparator,this.root.remove(a,this.comparator).copy(null,null,d3.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new d2(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new d2(this.root,a,this.comparator,!1)}getReverseIterator(){return new d2(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new d2(this.root,a,this.comparator,!0)}}class d2{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,b&&d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class d3{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:d3.RED,this.left=null!=d?d:d3.EMPTY,this.right=null!=e?e:d3.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new d3(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return d3.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return d3.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,d3.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,d3.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw dc();let a=this.left.check();if(a!==this.right.check())throw dc();return a+(this.isRed()?0:1)}}d3.EMPTY=null,d3.RED=!0,d3.BLACK=!1,d3.EMPTY=new class{constructor(){this.size=0}get key(){throw dc()}get value(){throw dc()}get color(){throw dc()}get left(){throw dc()}get right(){throw dc()}copy(a,b,c,d,e){return this}insert(a,b,c){return new d3(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class d4{constructor(a){this.comparator=a,this.data=new d1(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new d5(this.data.getIterator())}getIteratorFrom(a){return new d5(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof d4)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new d4(this.comparator);return b.data=a,b}}class d5{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function d6(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class d7{constructor(a){this.fields=a,a.sort(dy.comparator)}static empty(){return new d7([])}unionWith(a){let b=new d4(dy.comparator);for(let c of this.fields)b=b.add(c);for(let d of a)b=b.add(d);return new d7(b.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return dr(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class d8{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new d8(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new d8(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return dq(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}d8.EMPTY_BYTE_STRING=new d8("");let d9=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(a){var b,c;if(!a&&dc(),"string"==typeof a){let d=0,e=d9.exec(a);if(!e&&dc(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:eb(a.seconds),nanos:eb(a.nanos)}}function eb(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function ec(a){return"string"==typeof a?d8.fromBase64String(a):d8.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function ed(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function ee(a){let b=a.mapValue.fields.__previous_value__;return ed(b)?ee(b):b}function ef(a){let b=ea(a.mapValue.fields.__local_write_time__.timestampValue);return new dt(b.seconds,b.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eg{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class eh{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new eh("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof eh&&a.projectId===this.projectId&&a.database===this.database}}function ei(a){return null==a}function ej(a){return 0===a&&1/a== -1/0}function ek(a){return"number"==typeof a&&Number.isInteger(a)&&!ej(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let el={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},em={nullValue:"NULL_VALUE"};function en(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?ed(a)?4:eA(a)?9007199254740991:10:dc()}function eo(a,b){var c,d,e,f;if(a===b)return!0;let g=en(a);if(g!==en(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return ef(a).isEqual(ef(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=ea(a.timestampValue),d=ea(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,ec(c.bytesValue).isEqual(ec(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,eb(e.geoPointValue.latitude)===eb(f.geoPointValue.latitude)&&eb(e.geoPointValue.longitude)===eb(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return eb(a.integerValue)===eb(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=eb(a.doubleValue),d=eb(b.doubleValue);return c===d?ej(c)===ej(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return dr(a.arrayValue.values||[],b.arrayValue.values||[],eo);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(d$(c)!==d$(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!eo(c[e],d[e])))return!1;return!0}(a,b);default:return dc()}}function ep(a,b){return void 0!==(a.values||[]).find(a=>eo(a,b))}function eq(a,b){if(a===b)return 0;let c=en(a),d=en(b);if(c!==d)return dq(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return dq(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=eb(a.integerValue||a.doubleValue),d=eb(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return er(a.timestampValue,b.timestampValue);case 4:return er(ef(a),ef(b));case 5:return dq(a.stringValue,b.stringValue);case 6:return function(a,b){let c=ec(a),d=ec(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=dq(c[e],d[e]);if(0!==f)return f}return dq(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=dq(eb(a.latitude),eb(b.latitude));return 0!==c?c:dq(eb(a.longitude),eb(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=eq(c[e],d[e]);if(f)return f}return dq(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){if(a===el.mapValue&&b===el.mapValue)return 0;if(a===el.mapValue)return 1;if(b===el.mapValue)return -1;let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=dq(d[g],f[g]);if(0!==h)return h;let i=eq(c[d[g]],e[f[g]]);if(0!==i)return i}return dq(d.length,f.length)}(a.mapValue,b.mapValue);default:throw dc()}}function er(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return dq(a,b);let c=ea(a),d=ea(b),e=dq(c.seconds,d.seconds);return 0!==e?e:dq(c.nanos,d.nanos)}function es(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(a){let b=ea(a);return`time(${b.seconds},${b.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?ec(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,dz.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(a){let b="[",c=!0;for(let d of a.values||[])c?c=!1:b+=",",b+=es(d);return b+"]"}(a.arrayValue):"mapValue"in a?function(a){let b=Object.keys(a.fields||{}).sort(),c="{",d=!0;for(let e of b)d?d=!1:c+=",",c+=`${e}:${es(a.fields[e])}`;return c+"}"}(a.mapValue):dc()}function et(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function eu(a){return!!a&&"integerValue"in a}function ev(a){return!!a&&"arrayValue"in a}function ew(a){return!!a&&"nullValue"in a}function ex(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function ey(a){return!!a&&"mapValue"in a}function ez(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return d_(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=ez(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=ez(a.arrayValue.values[d]);return c}return Object.assign({},a)}function eA(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function eB(a){return"nullValue"in a?em:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?et(eh.empty(),dz.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:dc()}function eC(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?et(eh.empty(),dz.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?el:dc()}function eD(a,b){let c=eq(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function eE(a,b){let c=eq(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class eF{constructor(a){this.value=a}static empty(){return new eF({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!ey(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=ez(b)}setAll(a){let b=dy.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=ez(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());ey(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return eo(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];ey(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(d_(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new eF(ez(this.value))}}function eG(a){let b=[];return d_(a.fields,(a,c)=>{let d=new dy([a]);if(ey(c)){let e=eG(c.mapValue).fields;if(0===e.length)b.push(d);else for(let f of e)b.push(d.child(f))}else b.push(d)}),new d7(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class eH{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new eH(a,0,du.min(),du.min(),eF.empty(),0)}static newFoundDocument(a,b,c){return new eH(a,1,b,du.min(),c,0)}static newNoDocument(a,b){return new eH(a,2,b,du.min(),eF.empty(),0)}static newUnknownDocument(a,b){return new eH(a,3,b,du.min(),eF.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=eF.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=eF.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=du.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof eH&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new eH(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class eI{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.ht=null}}function eJ(a,b=null,c=[],d=[],e=null,f=null,g=null){return new eI(a,b,c,d,e,f,g)}function eK(a){var b;let c=b=a;if(null===c.ht){let d=c.path.canonicalString();null!==c.collectionGroup&&(d+="|cg:"+c.collectionGroup),d+="|f:",d+=c.filters.map(a=>{var b,c;return(b=a).field.canonicalString()+b.op.toString()+es(c=b.value)}).join(","),d+="|ob:",d+=c.orderBy.map(a=>{var b;return(b=a).field.canonicalString()+b.dir}).join(","),ei(c.limit)||(d+="|l:",d+=c.limit),c.startAt&&(d+="|lb:",d+=c.startAt.inclusive?"b:":"a:",d+=c.startAt.position.map(a=>{var b;return es(b=a)}).join(",")),c.endAt&&(d+="|ub:",d+=c.endAt.inclusive?"a:":"b:",d+=c.endAt.position.map(a=>{var b;return es(b=a)}).join(",")),c.ht=d}return c.ht}function eL(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!e_(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!eo(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!e1(a.startAt,b.startAt)&&e1(a.endAt,b.endAt)}function eM(a){return dz.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function eN(a,b){return a.filters.filter(a=>a instanceof eQ&&a.field.isEqual(b))}function eO(a,b,c){let d=em,e=!0;for(let f of eN(a,b)){let g=em,h=!0;switch(f.op){case"<":case"<=":g=eB(f.value);break;case"==":case"in":case">=":g=f.value;break;case">":g=f.value,h=!1;break;case"!=":case"not-in":g=em}0>eD({value:d,inclusive:e},{value:g,inclusive:h})&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];0>eD({value:d,inclusive:e},{value:j,inclusive:c.inclusive})&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}function eP(a,b,c){let d=el,e=!0;for(let f of eN(a,b)){let g=el,h=!0;switch(f.op){case">=":case">":g=eC(f.value),h=!1;break;case"==":case"in":case"<=":g=f.value;break;case"<":g=f.value,h=!1;break;case"!=":case"not-in":g=el}eE({value:d,inclusive:e},{value:g,inclusive:h})>0&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];eE({value:d,inclusive:e},{value:j,inclusive:c.inclusive})>0&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}class eQ extends class{}{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.lt(a,b,c):new eR(a,b,c):"array-contains"===b?new eV(a,c):"in"===b?new eW(a,c):"not-in"===b?new eX(a,c):"array-contains-any"===b?new eY(a,c):new eQ(a,b,c)}static lt(a,b,c){return"in"===b?new eS(a,c):new eT(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.ft(eq(b,this.value)):null!==b&&en(this.value)===en(b)&&this.ft(eq(b,this.value))}ft(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return dc()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eR extends eQ{constructor(a,b,c){super(a,b,c),this.key=dz.fromName(c.referenceValue)}matches(a){let b=dz.comparator(a.key,this.key);return this.ft(b)}}class eS extends eQ{constructor(a,b){super(a,"in",b),this.keys=eU("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class eT extends eQ{constructor(a,b){super(a,"not-in",b),this.keys=eU("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function eU(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>dz.fromName(a.referenceValue))}class eV extends eQ{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return ev(b)&&ep(b.arrayValue,this.value)}}class eW extends eQ{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&ep(this.value.arrayValue,b)}}class eX extends eQ{constructor(a,b){super(a,"not-in",b)}matches(a){if(ep(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!ep(this.value.arrayValue,b)}}class eY extends eQ{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!ev(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>ep(this.value.arrayValue,a))}}class eZ{constructor(a,b){this.position=a,this.inclusive=b}}class e${constructor(a,b="asc"){this.field=a,this.dir=b}}function e_(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function e0(a,b,c){let d=0;for(let e=0;e<a.position.length;e++){let f=b[e],g=a.position[e];if(d=f.field.isKeyField()?dz.comparator(dz.fromName(g.referenceValue),c.key):eq(g,c.data.field(f.field)),"desc"===f.dir&&(d*=-1),0!==d)break}return d}function e1(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!eo(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class e2{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this._t=null,this.wt=null,this.startAt,this.endAt}}function e3(a,b,c,d,e,f,g,h){return new e2(a,b,c,d,e,f,g,h)}function e4(a){return new e2(a)}function e5(a){return 0===a.filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())}function e6(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function e7(a){for(let b of a.filters)if(b.dt())return b.field;return null}function e8(a){return null!==a.collectionGroup}function e9(a){var b;let c=b=a;if(null===c._t){c._t=[];let d=e7(c),e=e6(c);if(null!==d&&null===e)d.isKeyField()||c._t.push(new e$(d)),c._t.push(new e$(dy.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c._t.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c._t.push(new e$(dy.keyField(),h))}}}return c._t}function fa(a){var b;let c=b=a;if(!c.wt){if("F"===c.limitType)c.wt=eJ(c.path,c.collectionGroup,e9(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of e9(c)){let f="desc"===e.dir?"asc":"desc";d.push(new e$(e.field,f))}let g=c.endAt?new eZ(c.endAt.position,c.endAt.inclusive):null,h=c.startAt?new eZ(c.startAt.position,c.startAt.inclusive):null;c.wt=eJ(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c.wt}function fb(a,b,c){return new e2(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function fc(a,b){return eL(fa(a),fa(b))&&a.limitType===b.limitType}function fd(a){return`${eK(fa(a))}|lt:${a.limitType}`}function fe(a){var b;let c;return`Query(target=${c=(b=fa(a)).path.canonicalString(),null!==b.collectionGroup&&(c+=" collectionGroup="+b.collectionGroup),b.filters.length>0&&(c+=`, filters: [${b.filters.map(a=>{var b,c;return`${(b=a).field.canonicalString()} ${b.op} ${es(c=b.value)}`}).join(", ")}]`),ei(b.limit)||(c+=", limit: "+b.limit),b.orderBy.length>0&&(c+=`, orderBy: [${b.orderBy.map(a=>{var b;return b=a,`${b.field.canonicalString()} (${b.dir})`}).join(", ")}]`),b.startAt&&(c+=", startAt: ",c+=b.startAt.inclusive?"b:":"a:",c+=b.startAt.position.map(a=>{var b;return es(b=a)}).join(",")),b.endAt&&(c+=", endAt: ",c+=b.endAt.inclusive?"a:":"b:",c+=b.endAt.position.map(a=>{var b;return es(b=a)}).join(",")),`Target(${c})`}; limitType=${a.limitType})`}function ff(a,b){var c,d;return b.isFoundDocument()&&function(a,b){let c=b.key.path;return null!==a.collectionGroup?b.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):dz.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(a,b)&&function(a,b){for(let c of a.explicitOrderBy)if(!c.field.isKeyField()&&null===b.data.field(c.field))return!1;return!0}(a,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(a,b)&&(c=a,d=b,(!c.startAt||!!function(a,b,c){let d=e0(a,b,c);return a.inclusive?d<=0:d<0}(c.startAt,e9(c),d))&&(!c.endAt||!!function(a,b,c){let d=e0(a,b,c);return a.inclusive?d>=0:d>0}(c.endAt,e9(c),d)))}function fg(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function fh(a){return(b,c)=>{let d=!1;for(let e of e9(a)){let f=fi(e,b,c);if(0!==f)return f;d=d||e.field.isKeyField()}return 0}}function fi(a,b,c){let d=a.field.isKeyField()?dz.comparator(b.key,c.key):function(a,b,c){let d=b.data.field(a),e=c.data.field(a);return null!==d&&null!==e?eq(d,e):dc()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return dc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function fj(a,b){if(a.gt){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ej(b)?"-0":b}}function fk(a){return{integerValue:""+a}}function fl(a,b){return ek(b)?fk(b):fj(a,b)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class fm{constructor(){this._=void 0}}function fn(a,b,c){return a instanceof fq?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof fr?fs(a,b):a instanceof ft?fu(a,b):function(a,b){let c=fp(a,b),d=fw(c)+fw(a.yt);return eu(c)&&eu(a.yt)?fk(d):fj(a.It,d)}(a,b)}function fo(a,b,c){return a instanceof fr?fs(a,b):a instanceof ft?fu(a,b):c}function fp(a,b){var c,d;return a instanceof fv?eu(c=b)||(d=c)&&"doubleValue"in d?b:{integerValue:0}:null}class fq extends fm{}class fr extends fm{constructor(a){super(),this.elements=a}}function fs(a,b){let c=fx(b);for(let d of a.elements)c.some(a=>eo(a,d))||c.push(d);return{arrayValue:{values:c}}}class ft extends fm{constructor(a){super(),this.elements=a}}function fu(a,b){let c=fx(b);for(let d of a.elements)c=c.filter(a=>!eo(a,d));return{arrayValue:{values:c}}}class fv extends fm{constructor(a,b){super(),this.It=a,this.yt=b}}function fw(a){return eb(a.integerValue||a.doubleValue)}function fx(a){return ev(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class fy{constructor(a,b){this.field=a,this.transform=b}}class fz{constructor(a,b){this.version=a,this.transformResults=b}}class fA{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new fA}static exists(a){return new fA(void 0,a)}static updateTime(a){return new fA(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function fB(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class fC{}function fD(a,b){if(!a.hasLocalMutations||b&&0===b.fields.length)return null;if(null===b)return a.isNoDocument()?new fN(a.key,fA.none()):new fI(a.key,a.data,fA.none());{let c=a.data,d=eF.empty(),e=new d4(dy.comparator);for(let f of b.fields)if(!e.has(f)){let g=c.field(f);null===g&&f.length>1&&(f=f.popLast(),g=c.field(f)),null===g?d.delete(f):d.set(f,g),e=e.add(f)}return new fJ(a.key,d,new d7(e.toArray()),fA.none())}}function fE(a,b,c){a instanceof fI?function(a,b,c){let d=a.value.clone(),e=fL(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof fJ?function(a,b,c){if(!fB(a.precondition,b))return void b.convertToUnknownDocument(c.version);let d=fL(a.fieldTransforms,b,c.transformResults),e=b.data;e.setAll(fK(a)),e.setAll(d),b.convertToFoundDocument(c.version,e).setHasCommittedMutations()}(a,b,c):function(a,b,c){b.convertToNoDocument(c.version).setHasCommittedMutations()}(0,b,c)}function fF(a,b,c,d){var e,f,g;return a instanceof fI?function(a,b,c,d){if(!fB(a.precondition,b))return c;let e=a.value.clone(),f=fM(a.fieldTransforms,d,b);return e.setAll(f),b.convertToFoundDocument(b.version,e).setHasLocalMutations(),null}(a,b,c,d):a instanceof fJ?function(a,b,c,d){if(!fB(a.precondition,b))return c;let e=fM(a.fieldTransforms,d,b),f=b.data;return(f.setAll(fK(a)),f.setAll(e),b.convertToFoundDocument(b.version,f).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,b,c,d):(e=a,f=b,g=c,fB(e.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g)}function fG(a,b){let c=null;for(let d of a.fieldTransforms){let e=b.data.field(d.field),f=fp(d.transform,e||null);null!=f&&(null===c&&(c=eF.empty()),c.set(d.field,f))}return c||null}function fH(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&dr(c,d,(a,b)=>{var c,d,e,f;return c=a,d=b,c.field.isEqual(d.field)&&(e=c.transform,f=d.transform,e instanceof fr&&f instanceof fr||e instanceof ft&&f instanceof ft?dr(e.elements,f.elements,eo):e instanceof fv&&f instanceof fv?eo(e.yt,f.yt):e instanceof fq&&f instanceof fq)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class fI extends fC{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class fJ extends fC{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function fK(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function fL(a,b,c){var d;let e=new Map;(d=a.length===c.length)||dc();for(let f=0;f<c.length;f++){let g=a[f],h=g.transform,i=b.data.field(g.field);e.set(g.field,fo(h,i,c[f]))}return e}function fM(a,b,c){let d=new Map;for(let e of a){let f=e.transform,g=c.data.field(e.field);d.set(e.field,fn(f,g,b))}return d}class fN extends fC{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fO extends fC{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fP{constructor(a){this.count=a}}function fQ(a){switch(a){default:return dc();case dd.CANCELLED:case dd.UNKNOWN:case dd.DEADLINE_EXCEEDED:case dd.RESOURCE_EXHAUSTED:case dd.INTERNAL:case dd.UNAVAILABLE:case dd.UNAUTHENTICATED:return!1;case dd.INVALID_ARGUMENT:case dd.NOT_FOUND:case dd.ALREADY_EXISTS:case dd.PERMISSION_DENIED:case dd.FAILED_PRECONDITION:case dd.ABORTED:case dd.OUT_OF_RANGE:case dd.UNIMPLEMENTED:case dd.DATA_LOSS:return!0}}function fR(a){if(void 0===a)return c9("GRPC error has no .code"),dd.UNKNOWN;switch(a){case k.OK:return dd.OK;case k.CANCELLED:return dd.CANCELLED;case k.UNKNOWN:return dd.UNKNOWN;case k.DEADLINE_EXCEEDED:return dd.DEADLINE_EXCEEDED;case k.RESOURCE_EXHAUSTED:return dd.RESOURCE_EXHAUSTED;case k.INTERNAL:return dd.INTERNAL;case k.UNAVAILABLE:return dd.UNAVAILABLE;case k.UNAUTHENTICATED:return dd.UNAUTHENTICATED;case k.INVALID_ARGUMENT:return dd.INVALID_ARGUMENT;case k.NOT_FOUND:return dd.NOT_FOUND;case k.ALREADY_EXISTS:return dd.ALREADY_EXISTS;case k.PERMISSION_DENIED:return dd.PERMISSION_DENIED;case k.FAILED_PRECONDITION:return dd.FAILED_PRECONDITION;case k.ABORTED:return dd.ABORTED;case k.OUT_OF_RANGE:return dd.OUT_OF_RANGE;case k.UNIMPLEMENTED:return dd.UNIMPLEMENTED;case k.DATA_LOSS:return dd.DATA_LOSS;default:return dc()}}(l=k||(k={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class fS{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0!==c){for(let[d,e]of c)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,b){let c=this.mapKeyFn(a),d=this.inner[c];if(void 0===d)return this.inner[c]=[[a,b]],void this.innerSize++;for(let e=0;e<d.length;e++)if(this.equalsFn(d[e][0],a))return void(d[e]=[a,b]);d.push([a,b]),this.innerSize++}delete(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0===c)return!1;for(let d=0;d<c.length;d++)if(this.equalsFn(c[d][0],a))return 1===c.length?delete this.inner[b]:c.splice(d,1),this.innerSize--,!0;return!1}forEach(a){d_(this.inner,(b,c)=>{for(let[d,e]of c)a(d,e)})}isEmpty(){return d0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fT=new d1(dz.comparator),fU=new d1(dz.comparator);function fV(...a){let b=fU;for(let c of a)b=b.insert(c.key,c);return b}function fW(a){let b=fU;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function fX(){return fZ()}function fY(){return fZ()}function fZ(){return new fS(a=>a.toString(),(a,b)=>a.isEqual(b))}let f$=new d1(dz.comparator),f_=new d4(dz.comparator);function f0(...a){let b=f_;for(let c of a)b=b.add(c);return b}let f1=new d4(dq);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class f2{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,b){let c=new Map;return c.set(a,f3.createSynthesizedTargetChangeForCurrentChange(a,b)),new f2(du.min(),c,f1,fT,f0())}}class f3{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(a,b){return new f3(d8.EMPTY_BYTE_STRING,b,f0(),f0(),f0())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class f4{constructor(a,b,c,d){this.Tt=a,this.removedTargetIds=b,this.key=c,this.Et=d}}class f5{constructor(a,b){this.targetId=a,this.At=b}}class f6{constructor(a,b,c=d8.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class f7{constructor(){this.Rt=0,this.bt=ga(),this.Pt=d8.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(a){a.approximateByteSize()>0&&(this.Vt=!0,this.Pt=a)}xt(){let a=f0(),b=f0(),c=f0();return this.bt.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:dc()}}),new f3(this.Pt,this.vt,a,b,c)}Nt(){this.Vt=!1,this.bt=ga()}kt(a,b){this.Vt=!0,this.bt=this.bt.insert(a,b)}Mt(a){this.Vt=!0,this.bt=this.bt.remove(a)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class f8{constructor(a){this.Bt=a,this.Lt=new Map,this.Ut=fT,this.qt=f9(),this.Kt=new d4(dq)}Gt(a){for(let b of a.Tt)a.Et&&a.Et.isFoundDocument()?this.Qt(b,a.Et):this.jt(b,a.key,a.Et);for(let c of a.removedTargetIds)this.jt(c,a.key,a.Et)}Wt(a){this.forEachTarget(a,b=>{let c=this.zt(b);switch(a.state){case 0:this.Ht(b)&&c.Ct(a.resumeToken);break;case 1:c.Ft(),c.St||c.Nt(),c.Ct(a.resumeToken);break;case 2:c.Ft(),c.St||this.removeTarget(b);break;case 3:this.Ht(b)&&(c.$t(),c.Ct(a.resumeToken));break;case 4:this.Ht(b)&&(this.Jt(b),c.Ct(a.resumeToken));break;default:dc()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Lt.forEach((a,c)=>{this.Ht(c)&&b(c)})}Yt(a){let b=a.targetId,c=a.At.count,d=this.Xt(b);if(d){let e=d.target;if(eM(e)){if(0===c){let f=new dz(e.path);this.jt(b,f,eH.newNoDocument(f,du.min()))}else{var g;(g=1===c)||dc()}}else this.Zt(b)!==c&&(this.Jt(b),this.Kt=this.Kt.add(b))}}te(a){let b=new Map;this.Lt.forEach((c,d)=>{let e=this.Xt(d);if(e){if(c.current&&eM(e.target)){let f=new dz(e.target.path);null!==this.Ut.get(f)||this.ee(d,f)||this.jt(d,f,eH.newNoDocument(f,a))}c.Dt&&(b.set(d,c.xt()),c.Nt())}});let c=f0();this.qt.forEach((a,b)=>{let d=!0;b.forEachWhile(a=>{let b=this.Xt(a);return!b||2===b.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.Ut.forEach((b,c)=>c.setReadTime(a));let d=new f2(a,b,this.Kt,this.Ut,c);return this.Ut=fT,this.qt=f9(),this.Kt=new d4(dq),d}Qt(a,b){if(!this.Ht(a))return;let c=this.ee(a,b.key)?2:0;this.zt(a).kt(b.key,c),this.Ut=this.Ut.insert(b.key,b),this.qt=this.qt.insert(b.key,this.ne(b.key).add(a))}jt(a,b,c){if(!this.Ht(a))return;let d=this.zt(a);this.ee(a,b)?d.kt(b,1):d.Mt(b),this.qt=this.qt.insert(b,this.ne(b).delete(a)),c&&(this.Ut=this.Ut.insert(b,c))}removeTarget(a){this.Lt.delete(a)}Zt(a){let b=this.zt(a).xt();return this.Bt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}Ot(a){this.zt(a).Ot()}zt(a){let b=this.Lt.get(a);return b||(b=new f7,this.Lt.set(a,b)),b}ne(a){let b=this.qt.get(a);return b||(b=new d4(dq),this.qt=this.qt.insert(a,b)),b}Ht(a){let b=null!==this.Xt(a);return b||c8("WatchChangeAggregator","Detected inactive target",a),b}Xt(a){let b=this.Lt.get(a);return b&&b.St?null:this.Bt.se(a)}Jt(a){this.Lt.set(a,new f7),this.Bt.getRemoteKeysForTarget(a).forEach(b=>{this.jt(a,b,null)})}ee(a,b){return this.Bt.getRemoteKeysForTarget(a).has(b)}}function f9(){return new d1(dz.comparator)}function ga(){return new d1(dz.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gb={asc:"ASCENDING",desc:"DESCENDING"},gc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class gd{constructor(a,b){this.databaseId=a,this.gt=b}}function ge(a,b){return a.gt?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function gf(a,b){return a.gt?b.toBase64():b.toUint8Array()}function gg(a){var b;return!a&&dc(),du.fromTimestamp(function(a){let b=ea(a);return new dt(b.seconds,b.nanos)}(a))}function gh(a,b){var c;return(c=a,new dw(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function gi(a){var b;let c=dw.fromString(a);return gC(c)||dc(),c}function gj(a,b){return gh(a.databaseId,b.path)}function gk(a,b){let c=gi(b);if(c.get(1)!==a.databaseId.projectId)throw new de(dd.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+a.databaseId.projectId);if(c.get(3)!==a.databaseId.database)throw new de(dd.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+a.databaseId.database);return new dz(go(c))}function gl(a,b){return gh(a.databaseId,b)}function gm(a){let b=gi(a);return 4===b.length?dw.emptyPath():go(b)}function gn(a){return new dw(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function go(a){var b;return a.length>4&&"documents"===a.get(4)||dc(),a.popFirst(5)}function gp(a,b,c){return{name:gj(a,b),fields:c.value.mapValue.fields}}function gq(a,b,c){let d=gk(a,b.name),e=gg(b.updateTime),f=new eF({mapValue:{fields:b.fields}}),g=eH.newFoundDocument(d,e,f);return c&&g.setHasCommittedMutations(),c?g.setHasCommittedMutations():g}function gr(a,b){var c,d,e,f;let g;if(b instanceof fI)g={update:gp(a,b.key,b.value)};else if(b instanceof fN)g={delete:gj(a,b.key)};else if(b instanceof fJ)g={update:gp(a,b.key,b.data),updateMask:gB(b.fieldMask)};else{if(!(b instanceof fO))return dc();g={verify:gj(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof fq)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fr)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ft)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fv)return{fieldPath:b.field.canonicalString(),increment:c.yt};throw dc()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,ge(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:dc())),g}function gs(a,b){var c;let d=b.currentDocument?void 0!==(c=b.currentDocument).updateTime?fA.updateTime(gg(c.updateTime)):void 0!==c.exists?fA.exists(c.exists):fA.none():fA.none(),e=b.updateTransforms?b.updateTransforms.map(b=>(function(a,b){let c=null;if("setToServerValue"in b){var d;"REQUEST_TIME"===b.setToServerValue||dc(),c=new fq}else if("appendMissingElements"in b){let e=b.appendMissingElements.values||[];c=new fr(e)}else if("removeAllFromArray"in b){let f=b.removeAllFromArray.values||[];c=new ft(f)}else"increment"in b?c=new fv(a,b.increment):dc();let g=dy.fromServerFormat(b.fieldPath);return new fy(g,c)})(a,b)):[];if(b.update){b.update.name;let f=gk(a,b.update.name),g=new eF({mapValue:{fields:b.update.fields}});if(b.updateMask){let h=function(a){let b=a.fieldPaths||[];return new d7(b.map(a=>dy.fromServerFormat(a)))}(b.updateMask);return new fJ(f,g,h,d,e)}return new fI(f,g,d,e)}if(b.delete){let i=gk(a,b.delete);return new fN(i,d)}if(b.verify){let j=gk(a,b.verify);return new fO(j,d)}return dc()}function gt(a,b){return{documents:[gl(a,b.path)]}}function gu(a,b){var c,d,e,f;let g={structuredQuery:{}},h=b.path;null!==b.collectionGroup?(g.parent=gl(a,h),g.structuredQuery.from=[{collectionId:b.collectionGroup,allDescendants:!0}]):(g.parent=gl(a,h.popLast()),g.structuredQuery.from=[{collectionId:h.lastSegment()}]);let i=function(a){if(0===a.length)return;let b=a.map(a=>(function(a){var b;if("=="===a.op){if(ex(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NAN"}};if(ew(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(ex(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NOT_NAN"}};if(ew(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gx(a.field),op:(b=a.op,gc[b]),value:a.value}}})(a));return 1===b.length?b[0]:{compositeFilter:{op:"AND",filters:b}}}(b.filters);i&&(g.structuredQuery.where=i);let j=function(a){if(0!==a.length)return a.map(a=>{var b,c;return{field:gx((b=a).field),direction:(c=b.dir,gb[c])}})}(b.orderBy);j&&(g.structuredQuery.orderBy=j);let k=(d=a,e=b.limit,d.gt||ei(e)?e:{value:e});return null!==k&&(g.structuredQuery.limit=k),b.startAt&&(g.structuredQuery.startAt={before:(c=b.startAt).inclusive,values:c.position}),b.endAt&&(g.structuredQuery.endAt={before:!(f=b.endAt).inclusive,values:f.position}),g}function gv(a){var b,c;let d=gm(a.parent),e=a.structuredQuery,f=e.from?e.from.length:0,g=null;if(f>0){(b=1===f)||dc();let h=e.from[0];h.allDescendants?g=h.collectionId:d=d.child(h.collectionId)}let i=[];e.where&&(i=gw(e.where));let j=[];e.orderBy&&(j=e.orderBy.map(a=>{var b;return b=a,new e$(gy(b.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}));let k=null,l;e.limit&&(k=ei(l="object"==typeof(c=e.limit)?c.value:c)?null:l);let m=null;e.startAt&&(m=function(a){let b=!!a.before,c=a.values||[];return new eZ(c,b)}(e.startAt));let n=null;return e.endAt&&(n=function(a){let b=!a.before,c=a.values||[];return new eZ(c,b)}(e.endAt)),e3(d,g,j,i,k,"F",m,n)}function gw(a){return a?void 0!==a.unaryFilter?[gA(a)]:void 0!==a.fieldFilter?[gz(a)]:void 0!==a.compositeFilter?a.compositeFilter.filters.map(a=>gw(a)).reduce((a,b)=>a.concat(b)):dc():[]}function gx(a){return{fieldPath:a.canonicalString()}}function gy(a){return dy.fromServerFormat(a.fieldPath)}function gz(a){return eQ.create(gy(a.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return dc()}}(a.fieldFilter.op),a.fieldFilter.value)}function gA(a){switch(a.unaryFilter.op){case"IS_NAN":let b=gy(a.unaryFilter.field);return eQ.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=gy(a.unaryFilter.field);return eQ.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=gy(a.unaryFilter.field);return eQ.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=gy(a.unaryFilter.field);return eQ.create(e,"!=",{nullValue:"NULL_VALUE"});default:return dc()}}function gB(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function gC(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function gD(a){let b="";for(let c=0;c<a.length;c++)b.length>0&&(b=gF(b)),b=gE(a.get(c),b);return gF(b)}function gE(a,b){let c=b,d=a.length;for(let e=0;e<d;e++){let f=a.charAt(e);switch(f){case"\0":c+="\x01\x10";break;case"\x01":c+="\x01\x11";break;default:c+=f}}return c}function gF(a){return a+"\x01\x01"}function gG(a){var b,c;let d=a.length;if(d>=2||dc(),2===d)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||dc(),dw.emptyPath();let e=d-2,f=[],g="";for(let h=0;h<d;){let i=a.indexOf("\x01",h);switch((i<0||i>e)&&dc(),a.charAt(i+1)){case"\x01":let j=a.substring(h,i),k;0===g.length?k=j:(g+=j,k=g,g=""),f.push(k);break;case"\x10":g+=a.substring(h,i),g+="\0";break;case"\x11":g+=a.substring(h,i+1);break;default:dc()}h=i+2}return new dw(f)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function gH(a,b){return[a,gD(b)]}function gI(a,b,c){return[a,gD(b),c]}let gJ={},gK=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gL=[...gK,"documentOverlays"],gM=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],gN=gM,gO=[...gN,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gP extends null{constructor(a,b){super(),this.ie=a,this.currentSequenceNumber=b}}function gQ(a,b){var c;let d=c=a;return dP.O(d.ie,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class gR{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(a,b){let c=b.mutationResults;for(let d=0;d<this.mutations.length;d++){let e=this.mutations[d];e.key.isEqual(a.key)&&fE(e,a,c[d])}}applyToLocalView(a,b){for(let c of this.baseMutations)c.key.isEqual(a.key)&&(b=fF(c,a,b,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(a.key)&&(b=fF(d,a,b,this.localWriteTime));return b}applyToLocalDocumentSet(a,b){let c=fY();return this.mutations.forEach(d=>{let e=a.get(d.key),f=e.overlayedDocument,g=this.applyToLocalView(f,e.mutatedFields);g=b.has(d.key)?null:g;let h=fD(f,g);null!==h&&c.set(d.key,h),f.isValidDocument()||f.convertToNoDocument(du.min())}),c}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),f0())}isEqual(a){return this.batchId===a.batchId&&dr(this.mutations,a.mutations,(a,b)=>fH(a,b))&&dr(this.baseMutations,a.baseMutations,(a,b)=>fH(a,b))}}class gS{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(a,b,c){var d;(d=a.mutations.length===c.length)||dc();let e=f$,f=a.mutations;for(let g=0;g<f.length;g++)e=e.insert(f[g].key,c[g].version);return new gS(a,b,c,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class gT{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class gU{constructor(a,b,c,d,e=du.min(),f=du.min(),g=d8.EMPTY_BYTE_STRING){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g}withSequenceNumber(a){return new gU(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(a,b){return new gU(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a)}withLastLimboFreeSnapshotVersion(a){return new gU(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class gV{constructor(a){this.re=a}}function gW(a,b){let c=b.key,d={prefixPath:c.getCollectionPath().popLast().toArray(),collectionGroup:c.collectionGroup,documentId:c.path.lastSegment(),readTime:gX(b.readTime),hasCommittedMutations:b.hasCommittedMutations};if(b.isFoundDocument()){var e,f;d.document=(e=a.re,{name:gj(e,(f=b).key),fields:f.data.value.mapValue.fields,updateTime:ge(e,f.version.toTimestamp())})}else if(b.isNoDocument())d.noDocument={path:c.path.toArray(),readTime:gY(b.version)};else{if(!b.isUnknownDocument())return dc();d.unknownDocument={path:c.path.toArray(),version:gY(b.version)}}return d}function gX(a){let b=a.toTimestamp();return[b.seconds,b.nanoseconds]}function gY(a){let b=a.toTimestamp();return{seconds:b.seconds,nanoseconds:b.nanoseconds}}function gZ(a){let b=new dt(a.seconds,a.nanoseconds);return du.fromTimestamp(b)}function g$(a,b){let c=(b.baseMutations||[]).map(b=>gs(a.re,b));for(let d=0;d<b.mutations.length-1;++d){let e=b.mutations[d];if(d+1<b.mutations.length&& void 0!==b.mutations[d+1].transform){let f=b.mutations[d+1];e.updateTransforms=f.transform.fieldTransforms,b.mutations.splice(d+1,1),++d}}let g=b.mutations.map(b=>gs(a.re,b)),h=dt.fromMillis(b.localWriteTimeMs);return new gR(b.batchId,h,c,g)}function g_(a){var b,c,d;let e=gZ(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?gZ(a.lastLimboFreeSnapshotVersion):du.min(),g;return void 0!==a.query.documents?(1===(b=a.query).documents.length||dc(),g=fa(e4(gm(b.documents[0])))):g=fa(gv(d=a.query)),new gU(g,a.targetId,0,a.lastListenSequenceNumber,e,f,d8.fromBase64String(a.resumeToken))}function g0(a,b){let c=gY(b.snapshotVersion),d=gY(b.lastLimboFreeSnapshotVersion),e;e=eM(b.target)?gt(a.re,b.target):gu(a.re,b.target);let f=b.resumeToken.toBase64();return{targetId:b.targetId,canonicalId:eK(b.target),readTime:c,resumeToken:f,lastListenSequenceNumber:b.sequenceNumber,lastLimboFreeSnapshotVersion:d,query:e}}function g1(a){let b=gv({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?fb(b,b.limit,"L"):b}function g2(a,b){return new gT(b.largestBatchId,gs(a.re,b.overlayMutation))}function g3(a,b){let c=b.path.lastSegment();return[a,gD(b.path.popLast()),c]}function g4(a,b,c,d){return{indexId:a,uid:b.uid||"",sequenceNumber:c,readTime:gY(d.readTime),documentKey:gD(d.documentKey.path),largestBatchId:d.largestBatchId}}function g5(a){return gQ(a,"bundles")}function g6(a){return gQ(a,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class g7{constructor(a,b){this.It=a,this.userId=b}static oe(a,b){let c=b.uid||"";return new g7(a,c)}getOverlay(a,b){return g8(a).get(g3(this.userId,b)).next(a=>a?g2(this.It,a):null)}getOverlays(a,b){let c=fX();return dN.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){let d=[];return c.forEach((c,e)=>{let f=new gT(b,e);d.push(this.ue(a,f))}),dN.waitFor(d)}removeOverlaysForBatchId(a,b,c){let d=new Set;b.forEach(a=>d.add(gD(a.getCollectionPath())));let e=[];return d.forEach(b=>{let d=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,c+1],!1,!0);e.push(g8(a).Y("collectionPathOverlayIndex",d))}),dN.waitFor(e)}getOverlaysForCollection(a,b,c){let d=fX(),e=gD(b),f=IDBKeyRange.bound([this.userId,e,c],[this.userId,e,Number.POSITIVE_INFINITY],!0);return g8(a).W("collectionPathOverlayIndex",f).next(a=>{for(let b of a){let c=g2(this.It,b);d.set(c.getKey(),c)}return d})}getOverlaysForCollectionGroup(a,b,c,d){let e=fX(),f,g=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,Number.POSITIVE_INFINITY],!0);return g8(a).Z({index:"collectionGroupOverlayIndex",range:g},(a,b,c)=>{let g=g2(this.It,b);e.size()<d||g.largestBatchId===f?(e.set(g.getKey(),g),f=g.largestBatchId):c.done()}).next(()=>e)}ue(a,b){return g8(a).put(function(a,b,c){let[d,e,f]=g3(b,c.mutation.key);return{userId:b,collectionPath:e,documentId:f,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:gr(a.re,c.mutation)}}(this.It,this.userId,b))}}function g8(a){return gQ(a,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class g9{constructor(){}ce(a,b){this.ae(a,b),b.he()}ae(a,b){if("nullValue"in a)this.le(b,5);else if("booleanValue"in a)this.le(b,10),b.fe(a.booleanValue?1:0);else if("integerValue"in a)this.le(b,15),b.fe(eb(a.integerValue));else if("doubleValue"in a){let c=eb(a.doubleValue);isNaN(c)?this.le(b,13):(this.le(b,15),ej(c)?b.fe(0):b.fe(c))}else if("timestampValue"in a){let d=a.timestampValue;this.le(b,20),"string"==typeof d?b.de(d):(b.de(`${d.seconds||""}`),b.fe(d.nanos||0))}else if("stringValue"in a)this._e(a.stringValue,b),this.we(b);else if("bytesValue"in a)this.le(b,30),b.me(ec(a.bytesValue)),this.we(b);else if("referenceValue"in a)this.ge(a.referenceValue,b);else if("geoPointValue"in a){let e=a.geoPointValue;this.le(b,45),b.fe(e.latitude||0),b.fe(e.longitude||0)}else"mapValue"in a?eA(a)?this.le(b,Number.MAX_SAFE_INTEGER):(this.ye(a.mapValue,b),this.we(b)):"arrayValue"in a?(this.pe(a.arrayValue,b),this.we(b)):dc()}_e(a,b){this.le(b,25),this.Ie(a,b)}Ie(a,b){b.de(a)}ye(a,b){let c=a.fields||{};for(let d of(this.le(b,55),Object.keys(c)))this._e(d,b),this.ae(c[d],b)}pe(a,b){let c=a.values||[];for(let d of(this.le(b,50),c))this.ae(d,b)}ge(a,b){this.le(b,37),dz.fromName(a).path.forEach(a=>{this.le(b,60),this.Ie(a,b)})}le(a,b){a.fe(b)}we(a){a.fe(2)}}function ha(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function hb(a){let b=64-function(a){let b=0;for(let c=0;c<8;++c){let d=ha(255&a[c]);if(b+=d,8!==d)break}return b}(a);return Math.ceil(b/8)}g9.Te=new g9;class hc{constructor(){this.Be=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Ae(c.value),c=b.next();this.Re()}be(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Pe(c.value),c=b.next();this.ve()}Ve(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Ae(c);else if(c<2048)this.Ae(960|c>>>6),this.Ae(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Ae(480|c>>>12),this.Ae(128|63&c>>>6),this.Ae(128|63&c);else{let d=b.codePointAt(0);this.Ae(240|d>>>18),this.Ae(128|63&d>>>12),this.Ae(128|63&d>>>6),this.Ae(128|63&d)}}this.Re()}Se(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Pe(c);else if(c<2048)this.Pe(960|c>>>6),this.Pe(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Pe(480|c>>>12),this.Pe(128|63&c>>>6),this.Pe(128|63&c);else{let d=b.codePointAt(0);this.Pe(240|d>>>18),this.Pe(128|63&d>>>12),this.Pe(128|63&d>>>6),this.Pe(128|63&d)}}this.ve()}De(a){let b=this.Ce(a),c=hb(b);this.xe(1+c),this.buffer[this.position++]=255&c;for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=255&b[d]}Ne(a){let b=this.Ce(a),c=hb(b);this.xe(1+c),this.buffer[this.position++]=~(255&c);for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=~(255&b[d])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(a){this.xe(a.length),this.buffer.set(a,this.position),this.position+=a.length}$e(){return this.buffer.slice(0,this.position)}Ce(a){let b=function(a){let b=new DataView(new ArrayBuffer(8));return b.setFloat64(0,a,!1),new Uint8Array(b.buffer)}(a),c=0!=(128&b[0]);b[0]^=c?255:128;for(let d=1;d<b.length;++d)b[d]^=c?255:0;return b}Ae(a){let b=255&a;0===b?(this.Me(0),this.Me(255)):255===b?(this.Me(255),this.Me(0)):this.Me(b)}Pe(a){let b=255&a;0===b?(this.Fe(0),this.Fe(255)):255===b?(this.Fe(255),this.Fe(0)):this.Fe(a)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(a){this.xe(1),this.buffer[this.position++]=a}Fe(a){this.xe(1),this.buffer[this.position++]=~a}xe(a){let b=a+this.position;if(b<=this.buffer.length)return;let c=2*this.buffer.length;c<b&&(c=b);let d=new Uint8Array(c);d.set(this.buffer),this.buffer=d}},this.Le=new class{constructor(a){this.Be=a}me(a){this.Be.Ee(a)}de(a){this.Be.Ve(a)}fe(a){this.Be.De(a)}he(){this.Be.ke()}}(this.Be),this.Ue=new class{constructor(a){this.Be=a}me(a){this.Be.be(a)}de(a){this.Be.Se(a)}fe(a){this.Be.Ne(a)}he(){this.Be.Oe()}}(this.Be)}seed(a){this.Be.seed(a)}qe(a){return 0===a?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class hd{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Ke(){let a=this.directionalValue.length,b=0===a||255===this.directionalValue[a-1]?a+1:a,c=new Uint8Array(b);return c.set(this.directionalValue,0),b!==a?c.set([0],this.directionalValue.length):++c[c.length-1],new hd(this.indexId,this.documentKey,this.arrayValue,c)}}function he(a,b){let c=a.indexId-b.indexId;return 0!==c?c:0!==(c=hf(a.arrayValue,b.arrayValue))?c:0!==(c=hf(a.directionalValue,b.directionalValue))?c:dz.comparator(a.documentKey,b.documentKey)}function hf(a,b){for(let c=0;c<a.length&&c<b.length;++c){let d=a[c]-b[c];if(0!==d)return d}return a.length-b.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class hg{constructor(a){for(let b of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ge=a.orderBy,this.Qe=[],a.filters)){let c=b;c.dt()?this.je=c:this.Qe.push(c)}}We(a){let b=dB(a);if(void 0!==b&&!this.ze(b))return!1;let c=dC(a),d=0,e=0;for(;d<c.length&&this.ze(c[d]);++d);if(d===c.length)return!0;if(void 0!==this.je){let f=c[d];if(!this.He(this.je,f)||!this.Je(this.Ge[e++],f))return!1;++d}for(;d<c.length;++d){let g=c[d];if(e>=this.Ge.length||!this.Je(this.Ge[e++],g))return!1}return!0}ze(a){for(let b of this.Qe)if(this.He(b,a))return!0;return!1}He(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}Je(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}class hh{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new d4(dw.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b];return d&&d.has(c)}getEntries(a){return(this.index[a]||new d4(dw.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hi=new Uint8Array(0);class hj{constructor(a,b){this.user=a,this.databaseId=b,this.Xe=new hh,this.Ze=new fS(a=>eK(a),(a,b)=>eL(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(a,b){if(!this.Xe.has(b)){let c=b.lastSegment(),d=b.popLast();a.addOnCommittedListener(()=>{this.Xe.add(b)});let e={collectionId:c,parent:gD(d)};return hk(a).put(e)}return dN.resolve()}getCollectionParents(a,b){let c=[],d=IDBKeyRange.bound([b,""],[ds(b),""],!1,!0);return hk(a).W(d).next(a=>{for(let d of a){if(d.collectionId!==b)break;c.push(gG(d.parent))}return c})}addFieldIndex(a,b){var c;let d=hm(a),e={indexId:(c=b).indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete e.indexId;let f=d.add(e);if(b.indexState){let g=hn(a);return f.next(a=>{g.put(g4(a,this.user,b.indexState.sequenceNumber,b.indexState.offset))})}return f.next()}deleteFieldIndex(a,b){let c=hm(a),d=hn(a),e=hl(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=hl(a),d=!0,e=new Map;return dN.forEach(this.tn(b),b=>this.en(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=f0(),f=[];return dN.forEach(e,(d,e)=>{var g;c8("IndexedDbIndexManager",`Using index ${(g=d,`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${eK(b)}`);let h=function(a,b){let c=dB(b);if(void 0===c)return null;for(let d of eN(a,c.fieldPath))switch(d.op){case"array-contains-any":return d.value.arrayValue.values||[];case"array-contains":return[d.value]}return null}(e,d),i=function(a,b){let c=new Map;for(let d of dC(b))for(let e of eN(a,d.fieldPath))switch(e.op){case"==":case"in":c.set(d.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return c.set(d.fieldPath.canonicalString(),e.value),Array.from(c.values())}return null}(e,d),j=function(a,b){let c=[],d=!0;for(let e of dC(b)){let f=0===e.kind?eO(a,e.fieldPath,a.startAt):eP(a,e.fieldPath,a.startAt);c.push(f.value),d&&(d=f.inclusive)}return new eZ(c,d)}(e,d),k=function(a,b){let c=[],d=!0;for(let e of dC(b)){let f=0===e.kind?eP(a,e.fieldPath,a.endAt):eO(a,e.fieldPath,a.endAt);c.push(f.value),d&&(d=f.inclusive)}return new eZ(c,d)}(e,d),l=this.nn(d,e,j),m=this.nn(d,e,k),n=this.sn(d,e,i),o=this.rn(d.indexId,h,l,j.inclusive,m,k.inclusive,n);return dN.forEach(o,d=>c.J(d,b.limit).next(b=>{b.forEach(b=>{let c=dz.fromSegments(b.documentKey);a.has(c)||(a=a.add(c),f.push(c))})}))}).next(()=>f)}return dN.resolve(null)})}tn(a){let b=this.Ze.get(a);return b||(b=[a],this.Ze.set(a,b),b)}rn(a,b,c,d,e,f,g){let h=(null!=b?b.length:1)*Math.max(c.length,e.length),i=h/(null!=b?b.length:1),j=[];for(let k=0;k<h;++k){let l=b?this.on(b[k/i]):hi,m=this.un(a,l,c[k%i],d),n=this.cn(a,l,e[k%i],f),o=g.map(b=>this.un(a,l,b,!0));j.push(...this.createRange(m,n,o))}return j}un(a,b,c,d){let e=new hd(a,dz.empty(),b,c);return d?e:e.Ke()}cn(a,b,c,d){let e=new hd(a,dz.empty(),b,c);return d?e.Ke():e}en(a,b){let c=new hg(b),d=null!=b.collectionGroup?b.collectionGroup:b.path.lastSegment();return this.getFieldIndexes(a,d).next(a=>{let b=null;for(let d of a)c.We(d)&&(!b||d.fields.length>b.fields.length)&&(b=d);return b})}getIndexType(a,b){let c=2;return dN.forEach(this.tn(b),b=>this.en(a,b).next(a=>{a?0!==c&&a.fields.length<function(a){let b=new d4(dy.comparator),c=!1;for(let d of a.filters){let e=d;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?c=!0:b=b.add(e.field))}for(let f of a.orderBy)f.field.isKeyField()||(b=b.add(f.field));return b.size+(c?1:0)}(b)&&(c=1):c=0})).next(()=>c)}an(a,b){let c=new hc;for(let d of dC(a)){let e=b.data.field(d.fieldPath);if(null==e)return null;let f=c.qe(d.kind);g9.Te.ce(e,f)}return c.$e()}on(a){let b=new hc;return g9.Te.ce(a,b.qe(0)),b.$e()}hn(a,b){let c=new hc;return g9.Te.ce(et(this.databaseId,b),c.qe(function(a){let b=dC(a);return 0===b.length?0:b[b.length-1].kind}(a))),c.$e()}sn(a,b,c){if(null===c)return[];let d=[];d.push(new hc);let e=0;for(let f of dC(a)){let g=c[e++];for(let h of d)if(this.ln(b,f.fieldPath)&&ev(g))d=this.fn(d,f,g);else{let i=h.qe(f.kind);g9.Te.ce(g,i)}}return this.dn(d)}nn(a,b,c){return this.sn(a,b,c.position)}dn(a){let b=[];for(let c=0;c<a.length;++c)b[c]=a[c].$e();return b}fn(a,b,c){let d=[...a],e=[];for(let f of c.arrayValue.values||[])for(let g of d){let h=new hc;h.seed(g.$e()),g9.Te.ce(f,h.qe(b.kind)),e.push(h)}return e}ln(a,b){return!!a.filters.find(a=>a instanceof eQ&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(a,b){let c=hm(a),d=hn(a);return(b?c.W("collectionGroupIndex",IDBKeyRange.bound(b,b)):c.W()).next(a=>{let b=[];return dN.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(a,b){let c=b?new dF(b.sequenceNumber,new dI(gZ(b.readTime),new dz(gG(b.documentKey)),b.largestBatchId)):dF.empty(),d=a.fields.map(([a,b])=>new dD(dy.fromServerFormat(a),b));return new dA(a.indexId,a.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:dq(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=hm(a),e=hn(a);return this._n(a).next(a=>d.W("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>dN.forEach(b,b=>e.put(g4(b.indexId,this.user,a,c)))))}updateIndexEntries(a,b){let c=new Map;return dN.forEach(b,(b,d)=>{let e=c.get(b.collectionGroup);return(e?dN.resolve(e):this.getFieldIndexes(a,b.collectionGroup)).next(e=>(c.set(b.collectionGroup,e),dN.forEach(e,c=>this.wn(a,b,c).next(b=>{let e=this.mn(d,c);return b.isEqual(e)?dN.resolve():this.gn(a,d,c,b,e)}))))})}yn(a,b,c,d){return hl(a).put({indexId:d.indexId,uid:this.uid,arrayValue:d.arrayValue,directionalValue:d.directionalValue,orderedDocumentKey:this.hn(c,b.key),documentKey:b.key.path.toArray()})}pn(a,b,c,d){return hl(a).delete([d.indexId,this.uid,d.arrayValue,d.directionalValue,this.hn(c,b.key),b.key.path.toArray()])}wn(a,b,c){let d=hl(a),e=new d4(he);return d.Z({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.hn(c,b)])},(a,d)=>{e=e.add(new hd(c.indexId,b,d.arrayValue,d.directionalValue))}).next(()=>e)}mn(a,b){let c=new d4(he),d=this.an(b,a);if(null==d)return c;let e=dB(b);if(null!=e){let f=a.data.field(e.fieldPath);if(ev(f))for(let g of f.arrayValue.values||[])c=c.add(new hd(b.indexId,a.key,this.on(g),d))}else c=c.add(new hd(b.indexId,a.key,hi,d));return c}gn(a,b,c,d,e){c8("IndexedDbIndexManager","Updating index entries for document '%s'",b.key);let f=[];return function(a,b,c,d,e){let f=a.getIterator(),g=b.getIterator(),h=d6(f),i=d6(g);for(;h||i;){let j=!1,k=!1;if(h&&i){let l=c(h,i);l<0?k=!0:l>0&&(j=!0)}else null!=h?k=!0:j=!0;j?(d(i),i=d6(g)):k?(e(h),h=d6(f)):(h=d6(f),i=d6(g))}}(d,e,he,d=>{f.push(this.yn(a,b,c,d))},d=>{f.push(this.pn(a,b,c,d))}),dN.waitFor(f)}_n(a){let b=1;return hn(a).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(a,c,d)=>{d.done(),b=c.sequenceNumber+1}).next(()=>b)}createRange(a,b,c){c=c.sort((a,b)=>he(a,b)).filter((a,b,c)=>!b||0!==he(a,c[b-1]));let d=[];for(let e of(d.push(a),c)){let f=he(e,a),g=he(e,b);if(0===f)d[0]=a.Ke();else if(f>0&&g<0)d.push(e),d.push(e.Ke());else if(g>0)break}d.push(b);let h=[];for(let i=0;i<d.length;i+=2)h.push(IDBKeyRange.bound([d[i].indexId,this.uid,d[i].arrayValue,d[i].directionalValue,hi,[]],[d[i+1].indexId,this.uid,d[i+1].arrayValue,d[i+1].directionalValue,hi,[]]));return h}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(ho)}getMinOffset(a,b){return dN.mapArray(this.tn(b),b=>this.en(a,b).next(a=>a||dc())).next(ho)}}function hk(a){return gQ(a,"collectionParents")}function hl(a){return gQ(a,"indexEntries")}function hm(a){return gQ(a,"indexConfiguration")}function hn(a){return gQ(a,"indexState")}function ho(a){var b;(b=0!==a.length)||dc();let c=a[0].indexState.offset,d=c.largestBatchId;for(let e=1;e<a.length;e++){let f=a[e].indexState.offset;0>dJ(f,c)&&(c=f),d<f.largestBatchId&&(d=f.largestBatchId)}return new dI(c.readTime,c.documentKey,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class hq{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new hq(a,hq.DEFAULT_COLLECTION_PERCENTILE,hq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function hr(a,b,c){let d=a.store("mutations"),e=a.store("documentMutations"),f=[],g=IDBKeyRange.only(c.batchId),h=0,i=d.Z({range:g},(a,b,c)=>(h++,c.delete()));f.push(i.next(()=>{var a;(a=1===h)||dc()}));let j=[];for(let k of c.mutations){let l=gI(b,k.key.path,c.batchId);f.push(e.delete(l)),j.push(k.key)}return dN.waitFor(f).next(()=>j)}function hs(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw dc();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ hq.DEFAULT_COLLECTION_PERCENTILE=10,hq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hq.DEFAULT=new hq(41943040,hq.DEFAULT_COLLECTION_PERCENTILE,hq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hq.DISABLED=new hq(-1,0,0);class ht{constructor(a,b,c,d){this.userId=a,this.It=b,this.indexManager=c,this.referenceDelegate=d,this.In={}}static oe(a,b,c,d){var e;(e=""!==a.uid)||dc();let f=a.isAuthenticated()?a.uid:"";return new ht(f,b,c,d)}checkEmpty(a){let b=!0,c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return hv(a).Z({index:"userMutationsIndex",range:c},(a,c,d)=>{b=!1,d.done()}).next(()=>b)}addMutationBatch(a,b,c,d){let e=hw(a),f=hv(a);return f.add({}).next(g=>{var h;(h="number"==typeof g)||dc();let i=new gR(g,b,c,d),j=function(a,b,c){let d=c.baseMutations.map(b=>gr(a.re,b)),e=c.mutations.map(b=>gr(a.re,b));return{userId:b,batchId:c.batchId,localWriteTimeMs:c.localWriteTime.toMillis(),baseMutations:d,mutations:e}}(this.It,this.userId,i),k=[],l=new d4((a,b)=>dq(a.canonicalString(),b.canonicalString()));for(let m of d){let n=gI(this.userId,m.key.path,g);l=l.add(m.key.path.popLast()),k.push(f.put(j)),k.push(e.put(n,gJ))}return l.forEach(b=>{k.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.In[g]=i.keys()}),dN.waitFor(k).next(()=>i)})}lookupMutationBatch(a,b){return hv(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||dc(),g$(this.It,a)):null})}Tn(a,b){return this.In[b]?dN.resolve(this.In[b]):this.lookupMutationBatch(a,b).next(a=>{if(a){let c=a.keys();return this.In[b]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return hv(a).Z({index:"userMutationsIndex",range:d},(a,b,d)=>{var f;b.userId===this.userId&&(b.batchId>=c||dc(),e=g$(this.It,b)),d.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return hv(a).Z({index:"userMutationsIndex",range:b,reverse:!0},(a,b,d)=>{c=b.batchId,d.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return hv(a).W("userMutationsIndex",b).next(a=>a.map(a=>g$(this.It,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=gH(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return hw(a).Z({range:d},(c,d,f)=>{let[g,h,i]=c,j=gG(h);if(g===this.userId&&b.path.isEqual(j))return hv(a).get(i).next(a=>{var b;if(!a)throw dc();a.userId===this.userId||dc(),e.push(g$(this.It,a))});f.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new d4(dq),d=[];return b.forEach(b=>{let e=gH(this.userId,b.path),f=IDBKeyRange.lowerBound(e),g=hw(a).Z({range:f},(a,d,e)=>{let[f,g,h]=a,i=gG(g);f===this.userId&&b.path.isEqual(i)?c=c.add(h):e.done()});d.push(g)}),dN.waitFor(d).next(()=>this.En(a,c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=gH(this.userId,c),f=IDBKeyRange.lowerBound(e),g=new d4(dq);return hw(a).Z({range:f},(a,b,e)=>{let[f,h,i]=a,j=gG(h);f===this.userId&&c.isPrefixOf(j)?j.length===d&&(g=g.add(i)):e.done()}).next(()=>this.En(a,g))}En(a,b){let c=[],d=[];return b.forEach(b=>{d.push(hv(a).get(b).next(a=>{var b;if(null===a)throw dc();a.userId===this.userId||dc(),c.push(g$(this.It,a))}))}),dN.waitFor(d).next(()=>c)}removeMutationBatch(a,b){return hr(a.ie,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.An(b.batchId)}),dN.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}An(a){delete this.In[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return dN.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return hw(a).Z({range:c},(a,b,c)=>{if(a[0]===this.userId){let e=gG(a[1]);d.push(e)}else c.done()}).next(()=>{var a;(a=0===d.length)||dc()})})}containsKey(a,b){return hu(a,this.userId,b)}Rn(a){return hx(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function hu(a,b,c){let d=gH(b,c.path),e=d[1],f=IDBKeyRange.lowerBound(d),g=!1;return hw(a).Z({range:f,X:!0},(a,c,d)=>{let[f,h,i]=a;f===b&&h===e&&(g=!0),d.done()}).next(()=>g)}function hv(a){return gQ(a,"mutations")}function hw(a){return gQ(a,"documentMutations")}function hx(a){return gQ(a,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class hy{constructor(a){this.bn=a}next(){return this.bn+=2,this.bn}static Pn(){return new hy(0)}static vn(){return new hy(-1)}}function hz(a){return gQ(a,"targets")}function hA(a){return gQ(a,"targetGlobal")}function hB(a){return gQ(a,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hC([a,b],[c,d]){let e=dq(a,c);return 0===e?dq(b,d):e}class hD{constructor(a){this.xn=a,this.buffer=new d4(hC),this.Nn=0}kn(){return++this.Nn}Mn(a){let b=[a,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(b);else{let c=this.buffer.last();0>hC(b,c)&&(this.buffer=this.buffer.delete(c).add(b))}}get maxValue(){return this.buffer.last()[0]}}class hE{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.On=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}Fn(a){c8("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){dS(a)?c8("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await dM(a)}await this.Fn(3e5)})}}function hF(a,b){var c,d;return hB(a).put((c=b,d=a.currentSequenceNumber,{targetId:0,path:gD(c.path),sequenceNumber:d}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class hG{constructor(){this.changes=new fS(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,eH.newInvalidDocument(a).setReadTime(b))}getEntry(a,b){this.assertNotApplied();let c=this.changes.get(b);return void 0!==c?dN.resolve(c):this.getFromCache(a,b)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class hH{constructor(a){this.It=a}setIndexManager(a){this.indexManager=a}addEntry(a,b,c){return hL(a).put(c)}removeEntry(a,b,c){return hL(a).delete(function(a,b){let c=a.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],gX(b),c[c.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.Qn(a,c)))}getEntry(a,b){let c=eH.newInvalidDocument(b);return hL(a).Z({index:"documentKeyIndex",range:IDBKeyRange.only(hM(b))},(a,d)=>{c=this.jn(b,d)}).next(()=>c)}Wn(a,b){let c={size:0,document:eH.newInvalidDocument(b)};return hL(a).Z({index:"documentKeyIndex",range:IDBKeyRange.only(hM(b))},(a,d)=>{c={document:this.jn(b,d),size:hs(d)}}).next(()=>c)}getEntries(a,b){let c=fT;return this.zn(a,b,(a,b)=>{let d=this.jn(a,b);c=c.insert(a,d)}).next(()=>c)}Hn(a,b){let c=fT,d=new d1(dz.comparator);return this.zn(a,b,(a,b)=>{let e=this.jn(a,b);c=c.insert(a,e),d=d.insert(a,hs(b))}).next(()=>({documents:c,Jn:d}))}zn(a,b,c){if(b.isEmpty())return dN.resolve();let d=new d4(hO);b.forEach(a=>d=d.add(a));let e=IDBKeyRange.bound(hM(d.first()),hM(d.last())),f=d.getIterator(),g=f.getNext();return hL(a).Z({index:"documentKeyIndex",range:e},(a,b,d)=>{let e=dz.fromSegments([...b.prefixPath,b.collectionGroup,b.documentId]);for(;g&&0>hO(g,e);)c(g,null),g=f.getNext();g&&g.isEqual(e)&&(c(g,b),g=f.hasNext()?f.getNext():null),g?d.j(hM(g)):d.done()}).next(()=>{for(;g;)c(g,null),g=f.hasNext()?f.getNext():null})}getAllFromCollection(a,b,c){let d=[b.popLast().toArray(),b.lastSegment(),gX(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],e=[b.popLast().toArray(),b.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hL(a).W(IDBKeyRange.bound(d,e,!0)).next(a=>{let b=fT;for(let c of a){let d=this.jn(dz.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);b=b.insert(d.key,d)}return b})}getAllFromCollectionGroup(a,b,c,d){let e=fT,f=hN(b,c),g=hN(b,dI.max());return hL(a).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(f,g,!0)},(a,b,c)=>{let f=this.jn(dz.fromSegments(b.prefixPath.concat(b.collectionGroup,b.documentId)),b);(e=e.insert(f.key,f)).size===d&&c.done()}).next(()=>e)}newChangeBuffer(a){return new hJ(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return hK(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&dc(),a})}Qn(a,b){return hK(a).put("remoteDocumentGlobalKey",b)}jn(a,b){if(b){let c=function(a,b){let c;if(b.document)c=gq(a.re,b.document,!!b.hasCommittedMutations);else if(b.noDocument){let d=dz.fromSegments(b.noDocument.path),e=gZ(b.noDocument.readTime);c=eH.newNoDocument(d,e),b.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!b.unknownDocument)return dc();{let f=dz.fromSegments(b.unknownDocument.path),g=gZ(b.unknownDocument.version);c=eH.newUnknownDocument(f,g)}}return b.readTime&&c.setReadTime(function(a){let b=new dt(a[0],a[1]);return du.fromTimestamp(b)}(b.readTime)),c}(this.It,b);if(!(c.isNoDocument()&&c.version.isEqual(du.min())))return c}return eH.newInvalidDocument(a)}}function hI(a){return new hH(a)}class hJ extends null{constructor(a,b){super(),this.Yn=a,this.trackRemovals=b,this.Xn=new fS(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(a){let b=[],c=0,d=new d4((a,b)=>dq(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.Xn.get(e);if(b.push(this.Yn.removeEntry(a,e,g.readTime)),f.isValidDocument()){let h=gW(this.Yn.It,f);d=d.add(e.path.popLast());let i=hs(h);c+=i-g.size,b.push(this.Yn.addEntry(a,e,h))}else if(c-=g.size,this.trackRemovals){let j=gW(this.Yn.It,f.convertToNoDocument(du.min()));b.push(this.Yn.addEntry(a,e,j))}}),d.forEach(c=>{b.push(this.Yn.indexManager.addToCollectionParentIndex(a,c))}),b.push(this.Yn.updateMetadata(a,c)),dN.waitFor(b)}getFromCache(a,b){return this.Yn.Wn(a,b).next(a=>(this.Xn.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.Yn.Hn(a,b).next(({documents:a,Jn:b})=>(b.forEach((b,c)=>{this.Xn.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function hK(a){return gQ(a,"remoteDocumentGlobal")}function hL(a){return gQ(a,"remoteDocumentsV14")}function hM(a){let b=a.path.toArray();return[b.slice(0,b.length-2),b[b.length-2],b[b.length-1]]}function hN(a,b){let c=b.documentKey.path.toArray();return[a,gX(b.readTime),c.slice(0,c.length-2),c.length>0?c[c.length-1]:""]}function hO(a,b){let c=a.path.toArray(),d=b.path.toArray(),e=0;for(let f=0;f<c.length-2&&f<d.length-2;++f)if(e=dq(c[f],d[f]))return e;return(e=dq(c.length,d.length))||(e=dq(c[c.length-2],d[d.length-2]))||dq(c[c.length-1],d[d.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class hP{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class hQ{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.getBaseDocument(a,b,c))).next(a=>(null!==c&&fF(c.mutation,a,d7.empty(),dt.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,f0()).next(()=>b))}getLocalViewOfDocuments(a,b,c=f0()){let d=fX();return this.populateOverlays(a,d,b).next(()=>this.computeViews(a,b,d,c).next(a=>{let b=fV();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=fX();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,f0()))}populateOverlays(a,b,c){let d=[];return c.forEach(a=>{b.has(a)||d.push(a)}),this.documentOverlayCache.getOverlays(a,d).next(a=>{a.forEach((a,c)=>{b.set(a,c)})})}computeViews(a,b,c,d){let e=fT,f=fZ(),g=fZ();return b.forEach((a,b)=>{let g=c.get(b.key);d.has(b.key)&&(void 0===g||g.mutation instanceof fJ)?e=e.insert(b.key,b):void 0!==g&&(f.set(b.key,g.mutation.getFieldMask()),fF(g.mutation,b,g.mutation.getFieldMask(),dt.now()))}),this.recalculateAndSaveOverlays(a,e).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((a,b)=>{var c;return g.set(a,new hP(b,null!==(c=f.get(a))&& void 0!==c?c:null))}),g))}recalculateAndSaveOverlays(a,b){let c=fZ(),d=new d1((a,b)=>a-b),e=f0();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let f=b.get(a);if(null===f)return;let g=c.get(a)||d7.empty();g=e.applyToLocalView(f,g),c.set(a,g);let h=(d.get(e.batchId)||f0()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=fY();j.forEach(a=>{if(!e.has(a)){let d=fD(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return dN.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(a,b,c){var d;return(d=b,dz.isDocumentKey(d.path)&&null===d.collectionGroup&&0===d.filters.length)?this.getDocumentsMatchingDocumentQuery(a,b.path):e8(b)?this.getDocumentsMatchingCollectionGroupQuery(a,b,c):this.getDocumentsMatchingCollectionQuery(a,b,c)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):dN.resolve(fX()),g=-1,h=e;return f.next(b=>dN.forEach(b,(b,c)=>(g<c.largestBatchId&&(g=c.largestBatchId),e.get(b)?dN.resolve():this.getBaseDocument(a,b,c).next(a=>{h=h.insert(b,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,f0())).next(a=>({batchId:g,changes:fW(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new dz(b)).next(a=>{let b=fV();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,c){let d=b.collectionGroup,e=fV();return this.indexManager.getCollectionParents(a,d).next(f=>dN.forEach(f,f=>{var g,h;let i=(g=b,h=f.child(d),new e2(h,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,c).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.remoteDocumentCache.getAllFromCollection(a,b.path,c).next(e=>(d=e,this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId))).next(a=>{a.forEach((a,b)=>{let c=b.getKey();null===d.get(c)&&(d=d.insert(c,eH.newInvalidDocument(c)))});let c=fV();return d.forEach((d,e)=>{let f=a.get(d);void 0!==f&&fF(f.mutation,e,d7.empty(),dt.now()),ff(b,e)&&(c=c.insert(d,e))}),c})}getBaseDocument(a,b,c){return null===c||1===c.mutation.type?this.remoteDocumentCache.getEntry(a,b):dN.resolve(eH.newInvalidDocument(b))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class hR{constructor(){this.overlays=new d1(dz.comparator),this.es=new Map}getOverlay(a,b){return dN.resolve(this.overlays.get(b))}getOverlays(a,b){let c=fX();return dN.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){return c.forEach((c,d)=>{this.ue(a,b,d)}),dN.resolve()}removeOverlaysForBatchId(a,b,c){let d=this.es.get(c);return void 0!==d&&(d.forEach(a=>this.overlays=this.overlays.remove(a)),this.es.delete(c)),dN.resolve()}getOverlaysForCollection(a,b,c){let d=fX(),e=b.length+1,f=new dz(b.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){let h=g.getNext().value,i=h.getKey();if(!b.isPrefixOf(i.path))break;i.path.length===e&&h.largestBatchId>c&&d.set(h.getKey(),h)}return dN.resolve(d)}getOverlaysForCollectionGroup(a,b,c,d){let e=new d1((a,b)=>a-b),f=this.overlays.getIterator();for(;f.hasNext();){let g=f.getNext().value;if(g.getKey().getCollectionGroup()===b&&g.largestBatchId>c){let h=e.get(g.largestBatchId);null===h&&(h=fX(),e=e.insert(g.largestBatchId,h)),h.set(g.getKey(),g)}}let i=fX(),j=e.getIterator();for(;j.hasNext()&&(j.getNext().value.forEach((a,b)=>i.set(a,b)),!(i.size()>=d)););return dN.resolve(i)}ue(a,b,c){let d=this.overlays.get(c.key);if(null!==d){let e=this.es.get(d.largestBatchId).delete(c.key);this.es.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new gT(b,c));let f=this.es.get(b);void 0===f&&(f=f0(),this.es.set(b,f)),this.es.set(b,f.add(c.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class hS{constructor(){this.ns=new d4(hT.ss),this.rs=new d4(hT.os)}isEmpty(){return this.ns.isEmpty()}addReference(a,b){let c=new hT(a,b);this.ns=this.ns.add(c),this.rs=this.rs.add(c)}us(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.cs(new hT(a,b))}hs(a,b){a.forEach(a=>this.removeReference(a,b))}ls(a){let b=new dz(new dw([])),c=new hT(b,a),d=new hT(b,a+1),e=[];return this.rs.forEachInRange([c,d],a=>{this.cs(a),e.push(a.key)}),e}fs(){this.ns.forEach(a=>this.cs(a))}cs(a){this.ns=this.ns.delete(a),this.rs=this.rs.delete(a)}ds(a){let b=new dz(new dw([])),c=new hT(b,a),d=new hT(b,a+1),e=f0();return this.rs.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let b=new hT(a,0),c=this.ns.firstAfterOrEqual(b);return null!==c&&a.isEqual(c.key)}}class hT{constructor(a,b){this.key=a,this._s=b}static ss(a,b){return dz.comparator(a.key,b.key)||dq(a._s,b._s)}static os(a,b){return dq(a._s,b._s)||dz.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hU{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.ws=1,this.gs=new d4(hT.ss)}checkEmpty(a){return dN.resolve(0===this.mutationQueue.length)}addMutationBatch(a,b,c,d){let e=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let f=new gR(e,b,c,d);for(let g of(this.mutationQueue.push(f),d))this.gs=this.gs.add(new hT(g.key,e)),this.indexManager.addToCollectionParentIndex(a,g.key.path.popLast());return dN.resolve(f)}lookupMutationBatch(a,b){return dN.resolve(this.ys(b))}getNextMutationBatchAfterBatchId(a,b){let c=this.ps(b+1),d=c<0?0:c;return dN.resolve(this.mutationQueue.length>d?this.mutationQueue[d]:null)}getHighestUnacknowledgedBatchId(){return dN.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(a){return dN.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(a,b){let c=new hT(b,0),d=new hT(b,Number.POSITIVE_INFINITY),e=[];return this.gs.forEachInRange([c,d],a=>{let b=this.ys(a._s);e.push(b)}),dN.resolve(e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new d4(dq);return b.forEach(a=>{let b=new hT(a,0),d=new hT(a,Number.POSITIVE_INFINITY);this.gs.forEachInRange([b,d],a=>{c=c.add(a._s)})}),dN.resolve(this.Is(c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c;dz.isDocumentKey(e)||(e=e.child(""));let f=new hT(new dz(e),0),g=new d4(dq);return this.gs.forEachWhile(a=>{let b=a.key.path;return!!c.isPrefixOf(b)&&(b.length===d&&(g=g.add(a._s)),!0)},f),dN.resolve(this.Is(g))}Is(a){let b=[];return a.forEach(a=>{let c=this.ys(a);null!==c&&b.push(c)}),b}removeMutationBatch(a,b){var c;0===this.Ts(b.batchId,"removed")||dc(),this.mutationQueue.shift();let d=this.gs;return dN.forEach(b.mutations,c=>{let e=new hT(c.key,b.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(a,c.key)}).next(()=>{this.gs=d})}An(a){}containsKey(a,b){let c=new hT(b,0),d=this.gs.firstAfterOrEqual(c);return dN.resolve(b.isEqual(d&&d.key))}performConsistencyCheck(a){return this.mutationQueue.length,dN.resolve()}Ts(a,b){return this.ps(a)}ps(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}ys(a){let b=this.ps(a);return b<0||b>=this.mutationQueue.length?null:this.mutationQueue[b]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class hV{constructor(a){this.Es=a,this.docs=new d1(dz.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(a,b){let c=b.key,d=this.docs.get(c),e=d?d.size:0,f=this.Es(b);return this.docs=this.docs.insert(c,{document:b.mutableCopy(),size:f}),this.size+=f-e,this.indexManager.addToCollectionParentIndex(a,c.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(a,b){let c=this.docs.get(b);return dN.resolve(c?c.document.mutableCopy():eH.newInvalidDocument(b))}getEntries(a,b){let c=fT;return b.forEach(a=>{let b=this.docs.get(a);c=c.insert(a,b?b.document.mutableCopy():eH.newInvalidDocument(a))}),dN.resolve(c)}getAllFromCollection(a,b,c){let d=fT,e=new dz(b.child("")),f=this.docs.getIteratorFrom(e);for(;f.hasNext();){let{key:g,value:{document:h}}=f.getNext();if(!b.isPrefixOf(g.path))break;g.path.length>b.length+1||0>=dJ(dH(h),c)||(d=d.insert(h.key,h.mutableCopy()))}return dN.resolve(d)}getAllFromCollectionGroup(a,b,c,d){dc()}As(a,b){return dN.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new hW(this)}getSize(a){return dN.resolve(this.size)}}class hW extends hG{constructor(a){super(),this.Yn=a}applyChanges(a){let b=[];return this.changes.forEach((c,d)=>{d.isValidDocument()?b.push(this.Yn.addEntry(a,d)):this.Yn.removeEntry(c)}),dN.waitFor(b)}getFromCache(a,b){return this.Yn.getEntry(a,b)}getAllFromCache(a,b){return this.Yn.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class hX{constructor(a,b){this.Vs={},this.overlays={},this.Ss=new dZ(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=a(this),this.Cs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.Rs=new fS(a=>eK(a),eL),this.lastRemoteSnapshotVersion=du.min(),this.highestTargetId=0,this.bs=0,this.Ps=new hS,this.targetCount=0,this.vs=hy.Pn()}forEachTarget(a,b){return this.Rs.forEach((a,c)=>b(c)),dN.resolve()}getLastRemoteSnapshotVersion(a){return dN.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return dN.resolve(this.bs)}allocateTargetId(a){return this.highestTargetId=this.vs.next(),dN.resolve(this.highestTargetId)}setTargetsMetadata(a,b,c){return c&&(this.lastRemoteSnapshotVersion=c),b>this.bs&&(this.bs=b),dN.resolve()}Dn(a){this.Rs.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.vs=new hy(b),this.highestTargetId=b),a.sequenceNumber>this.bs&&(this.bs=a.sequenceNumber)}addTargetData(a,b){return this.Dn(b),this.targetCount+=1,dN.resolve()}updateTargetData(a,b){return this.Dn(b),dN.resolve()}removeTargetData(a,b){return this.Rs.delete(b.target),this.Ps.ls(b.targetId),this.targetCount-=1,dN.resolve()}removeTargets(a,b,c){let d=0,e=[];return this.Rs.forEach((f,g)=>{g.sequenceNumber<=b&&null===c.get(g.targetId)&&(this.Rs.delete(f),e.push(this.removeMatchingKeysForTargetId(a,g.targetId)),d++)}),dN.waitFor(e).next(()=>d)}getTargetCount(a){return dN.resolve(this.targetCount)}getTargetData(a,b){let c=this.Rs.get(b)||null;return dN.resolve(c)}addMatchingKeys(a,b,c){return this.Ps.us(b,c),dN.resolve()}removeMatchingKeys(a,b,c){this.Ps.hs(b,c);let d=this.persistence.referenceDelegate,e=[];return d&&b.forEach(b=>{e.push(d.markPotentiallyOrphaned(a,b))}),dN.waitFor(e)}removeMatchingKeysForTargetId(a,b){return this.Ps.ls(b),dN.resolve()}getMatchingKeysForTargetId(a,b){let c=this.Ps.ds(b);return dN.resolve(c)}containsKey(a,b){return dN.resolve(this.Ps.containsKey(b))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.Ye=new hh}addToCollectionParentIndex(a,b){return this.Ye.add(b),dN.resolve()}getCollectionParents(a,b){return dN.resolve(this.Ye.getEntries(b))}addFieldIndex(a,b){return dN.resolve()}deleteFieldIndex(a,b){return dN.resolve()}getDocumentsMatchingTarget(a,b){return dN.resolve(null)}getIndexType(a,b){return dN.resolve(0)}getFieldIndexes(a,b){return dN.resolve([])}getNextCollectionGroupToUpdate(a){return dN.resolve(null)}getMinOffset(a,b){return dN.resolve(dI.min())}getMinOffsetFromCollectionGroup(a,b){return dN.resolve(dI.min())}updateCollectionGroup(a,b,c){return dN.resolve()}updateIndexEntries(a,b){return dN.resolve()}},this.remoteDocumentCache=function(a){return new hV(a)}(a=>this.referenceDelegate.xs(a)),this.It=new gV(b),this.Ns=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.It=a,this.Zn=new Map,this.ts=new Map}getBundleMetadata(a,b){return dN.resolve(this.Zn.get(b))}saveBundleMetadata(a,b){var c;return this.Zn.set(b.id,{id:(c=b).id,version:c.version,createTime:gg(c.createTime)}),dN.resolve()}getNamedQuery(a,b){return dN.resolve(this.ts.get(b))}saveNamedQuery(a,b){var c;return this.ts.set(b.name,{name:(c=b).name,query:g1(c.bundledQuery),readTime:gg(c.readTime)}),dN.resolve()}}(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(a){let b=this.overlays[a.toKey()];return b||(b=new hR,this.overlays[a.toKey()]=b),b}getMutationQueue(a,b){let c=this.Vs[a.toKey()];return c||(c=new hU(b,this.referenceDelegate),this.Vs[a.toKey()]=c),c}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(a,b,c){c8("MemoryPersistence","Starting transaction:",a);let d=new hY(this.Ss.next());return this.referenceDelegate.ks(),c(d).next(a=>this.referenceDelegate.Ms(d).next(()=>a)).toPromise().then(a=>(d.raiseOnCommittedEvent(),a))}Os(a,b){return dN.or(Object.values(this.Vs).map(c=>()=>c.containsKey(a,b)))}}class hY extends dL{constructor(a){super(),this.currentSequenceNumber=a}}class hZ{constructor(a){this.persistence=a,this.Fs=new hS,this.$s=null}static Bs(a){return new hZ(a)}get Ls(){if(this.$s)return this.$s;throw dc()}addReference(a,b,c){return this.Fs.addReference(c,b),this.Ls.delete(c.toString()),dN.resolve()}removeReference(a,b,c){return this.Fs.removeReference(c,b),this.Ls.add(c.toString()),dN.resolve()}markPotentiallyOrphaned(a,b){return this.Ls.add(b.toString()),dN.resolve()}removeTarget(a,b){this.Fs.ls(b.targetId).forEach(a=>this.Ls.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(a,b.targetId).next(a=>{a.forEach(a=>this.Ls.add(a.toString()))}).next(()=>c.removeTargetData(a,b))}ks(){this.$s=new Set}Ms(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dN.forEach(this.Ls,c=>{let d=dz.fromPath(c);return this.Us(a,d).next(a=>{a||b.removeEntry(d,du.min())})}).next(()=>(this.$s=null,b.apply(a)))}updateLimboDocument(a,b){return this.Us(a,b).next(a=>{a?this.Ls.delete(b.toString()):this.Ls.add(b.toString())})}xs(a){return 0}Us(a,b){return dN.or([()=>dN.resolve(this.Fs.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Os(a,b)])}}function h$(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let h_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class h0{constructor(a,b,c,d,e,f,g,h,i,j,k=15){if(this.allowTabSynchronization=a,this.persistenceKey=b,this.clientId=c,this.Hs=e,this.window=f,this.document=g,this.Js=i,this.Ys=j,this.Xs=k,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=a=>Promise.resolve(),!h0.C())throw new de(dd.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(a,b){var c,d;this.db=a,this.garbageCollector=(c=this,d=b,new class a{constructor(a,b){this.$n=a,this.params=b}calculateTargetCount(a,b){return this.$n.Bn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(a,b){if(0===b)return dN.resolve(dZ.at);let c=new hD(b);return this.$n.forEachTarget(a,a=>c.Mn(a.sequenceNumber)).next(()=>this.$n.Ln(a,a=>c.Mn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.$n.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.$n.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(c8("LruGarbageCollector","Garbage collection skipped; disabled"),dN.resolve(hp)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(c8("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hp):this.Un(a,b))}getCacheSize(a){return this.$n.getCacheSize(a)}Un(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(c8("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),c7()<=LogLevel.DEBUG&&c8("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),dN.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}(c,d))}Bn(a){let b=this.qn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}qn(a){let b=0;return this.Ln(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Ln(a,b){return this.Kn(a,(a,c)=>b(c))}addReference(a,b,c){return hF(a,c)}removeReference(a,b,c){return hF(a,c)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return hF(a,b)}Gn(a,b){var c,d;let e;return c=a,d=b,e=!1,hx(c).tt(a=>hu(c,a,d).next(a=>(a&&(e=!0),dN.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Kn(a,(f,g)=>{if(g<=b){let h=this.Gn(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,du.min()),hB(a).delete([0,gD(f.path)])))});d.push(h)}}).next(()=>dN.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return hF(a,b)}Kn(a,b){let c=hB(a),d,e=dZ.at;return c.Z({index:"documentTargetsIndex"},([a,c],{path:f,sequenceNumber:g})=>{0===a?(e!==dZ.at&&b(new dz(gG(d)),e),e=g,d=f):e=dZ.at}).next(()=>{e!==dZ.at&&b(new dz(gG(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,d),this.ii=b+"main",this.It=new gV(h),this.ri=new dP(this.ii,this.Xs,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.It=a}$(a,b,c,d){var e,f;let g=new dO("createOrUpgrade",b);c<1&&d>=1&&(function(a){a.createObjectStore("owner")}(a),(e=a).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),h$(a),function(a){a.createObjectStore("remoteDocuments")}(a));let h=dN.resolve();return c<3&&d>=3&&(0!==c&&((f=a).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),h$(a)),h=h.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:du.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(g))),c<4&&d>=4&&(0!==c&&(h=h.next(()=>{var b,c;return b=a,(c=g).store("mutations").W().next(a=>{b.deleteObjectStore("mutations"),b.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let d=c.store("mutations"),e=a.map(a=>d.put(a));return dN.waitFor(e)})})),h=h.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(a)})),c<5&&d>=5&&(h=h.next(()=>this.qs(g))),c<6&&d>=6&&(h=h.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(a),this.Ks(g)))),c<7&&d>=7&&(h=h.next(()=>this.Gs(g))),c<8&&d>=8&&(h=h.next(()=>this.Qs(a,g))),c<9&&d>=9&&(h=h.next(()=>{var b;(b=a).objectStoreNames.contains("remoteDocumentChanges")&&b.deleteObjectStore("remoteDocumentChanges")})),c<10&&d>=10&&(h=h.next(()=>this.js(g))),c<11&&d>=11&&(h=h.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(a),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(a)})),c<12&&d>=12&&(h=h.next(()=>{!function(a){let b=a.createObjectStore("documentOverlays",{keyPath:null});b.createIndex("collectionPathOverlayIndex",null,{unique:!1}),b.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(a)})),c<13&&d>=13&&(h=h.next(()=>(function(a){let b=a.createObjectStore("remoteDocumentsV14",{keyPath:null});b.createIndex("documentKeyIndex",null),b.createIndex("collectionGroupIndex",null)})(a)).next(()=>this.Ws(a,g)).next(()=>a.deleteObjectStore("remoteDocuments"))),c<14&&d>=14&&(h=h.next(()=>this.zs(a,g))),c<15&&d>=15&&(h=h.next(()=>{var b;(b=a).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),b.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),b.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),h}Ks(a){let b=0;return a.store("remoteDocuments").Z((a,c)=>{b+=hs(c)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}qs(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.W().next(b=>dN.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.W("userMutationsIndex",d).next(c=>dN.forEach(c,c=>{var d;(d=c.userId===b.userId)||dc();let e=g$(this.It,c);return hr(a,b.userId,e).next(()=>{})}))}))}Gs(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.Z((c,e)=>{var f;let g=new dw(c),h=[0,gD(f=g)];d.push(b.get(h).next(c=>{var d;return c?dN.resolve():(d=g,b.put({targetId:0,path:gD(d),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>dN.waitFor(d))})}Qs(a,b){a.createObjectStore("collectionParents",{keyPath:null});let c=b.store("collectionParents"),d=new hh,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:gD(e)})}};return b.store("remoteDocuments").Z({X:!0},(a,b)=>{let c=new dw(a);return e(c.popLast())}).next(()=>b.store("documentMutations").Z({X:!0},([a,b,c],d)=>{let f=gG(b);return e(f.popLast())}))}js(a){let b=a.store("targets");return b.Z((a,c)=>{let d=g_(c),e=g0(this.It,d);return b.put(e)})}Ws(a,b){let c=b.store("remoteDocuments"),d=[];return c.Z((a,c)=>{var e;let f=b.store("remoteDocumentsV14"),g=((e=c).document?new dz(dw.fromString(e.document.name).popFirst(5)):e.noDocument?dz.fromSegments(e.noDocument.path):e.unknownDocument?dz.fromSegments(e.unknownDocument.path):dc()).path.toArray(),h={prefixPath:g.slice(0,g.length-2),collectionGroup:g[g.length-2],documentId:g[g.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};d.push(f.put(h))}).next(()=>dN.waitFor(d))}zs(a,b){let c=b.store("mutations"),d=hI(this.It),e=new hX(hZ.Bs,this.It.re);return c.W().next(a=>{let c=new Map;return a.forEach(a=>{var b;let d=null!==(b=c.get(a.userId))&& void 0!==b?b:f0();g$(this.It,a).keys().forEach(a=>d=d.add(a)),c.set(a.userId,d)}),dN.forEach(c,(a,c)=>{let f=new c4(c),g=g7.oe(this.It,f),h=e.getIndexManager(f),i=ht.oe(f,this.It,h,e.referenceDelegate);return new hQ(d,i,g,h).recalculateAndSaveOverlaysForDocumentKeys(new gP(b,dZ.at),a).next()})})}}(this.It)),this.Cs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.It=b}allocateTargetId(a){return this.Vn(a).next(b=>{let c=new hy(b.highestTargetId);return b.highestTargetId=c.next(),this.Sn(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.Vn(a).next(a=>du.fromTimestamp(new dt(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.Vn(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.Vn(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.Sn(a,d)))}addTargetData(a,b){return this.Dn(a,b).next(()=>this.Vn(a).next(c=>(c.targetCount+=1,this.Cn(b,c),this.Sn(a,c))))}updateTargetData(a,b){return this.Dn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>hz(a).delete(b.targetId)).next(()=>this.Vn(a)).next(b=>{var c;return b.targetCount>0||dc(),b.targetCount-=1,this.Sn(a,b)})}removeTargets(a,b,c){let d=0,e=[];return hz(a).Z((f,g)=>{let h=g_(g);h.sequenceNumber<=b&&null===c.get(h.targetId)&&(d++,e.push(this.removeTargetData(a,h)))}).next(()=>dN.waitFor(e)).next(()=>d)}forEachTarget(a,b){return hz(a).Z((a,c)=>{let d=g_(c);b(d)})}Vn(a){return hA(a).get("targetGlobalKey").next(a=>{var b;return null!==a||dc(),a})}Sn(a,b){return hA(a).put("targetGlobalKey",b)}Dn(a,b){return hz(a).put(g0(this.It,b))}Cn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.Vn(a).next(a=>a.targetCount)}getTargetData(a,b){let c=eK(b),d=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]),e=null;return hz(a).Z({range:d,index:"queryTargetsIndex"},(a,c,d)=>{let f=g_(c);eL(b,f.target)&&(e=f,d.done())}).next(()=>e)}addMatchingKeys(a,b,c){let d=[],e=hB(a);return b.forEach(b=>{let f=gD(b.path);d.push(e.put({targetId:c,path:f})),d.push(this.referenceDelegate.addReference(a,c,b))}),dN.waitFor(d)}removeMatchingKeys(a,b,c){let d=hB(a);return dN.forEach(b,b=>{let e=gD(b.path);return dN.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(a,b){let c=hB(a),d=IDBKeyRange.bound([b],[b+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(a,b){let c=IDBKeyRange.bound([b],[b+1],!1,!0),d=hB(a),e=f0();return d.Z({range:c,X:!0},(a,b,c)=>{let d=gG(a[1]),f=new dz(d);e=e.add(f)}).next(()=>e)}containsKey(a,b){let c=gD(b.path),d=IDBKeyRange.bound([c],[ds(c)],!1,!0),e=0;return hB(a).Z({index:"documentTargetsIndex",X:!0,range:d},([a,b],c,d)=>{0!==a&&(e++,d.done())}).next(()=>e>0)}se(a,b){return hz(a).get(b).next(a=>a?g_(a):null)}}(this.referenceDelegate,this.It),this.remoteDocumentCache=hI(this.It),this.Ns=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return g5(a).get(b).next(a=>{var b;if(a)return{id:(b=a).bundleId,createTime:gZ(b.createTime),version:b.version}})}saveBundleMetadata(a,b){var c;return g5(a).put({bundleId:(c=b).id,createTime:gY(gg(c.createTime)),version:c.version})}getNamedQuery(a,b){return g6(a).get(b).next(a=>{var b;if(a)return{name:(b=a).name,query:g1(b.bundledQuery),readTime:gZ(b.readTime)}})}saveNamedQuery(a,b){var c;return g6(a).put({name:(c=b).name,readTime:gY(gg(c.readTime)),bundledQuery:c.bundledQuery})}},this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===j&&c9("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new de(dd.FAILED_PRECONDITION,h_);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Cs.getHighestSequenceNumber(a))}).then(a=>{this.Ss=new dZ(a,this.Js)}).then(()=>{this.Ds=!0}).catch(a=>(this.ri&&this.ri.close(),Promise.reject(a)))}li(a){return this.si=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.ri.L(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>h2(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(a).next(a=>{a||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(a)).next(b=>this.isPrimary&&!b?this._i(a).next(()=>!1):!!b&&this.wi(a).next(()=>!0))).catch(a=>{if(dS(a))return c8("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return c8("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.Hs.enqueueRetryable(()=>this.si(a)),this.isPrimary=a})}fi(a){return h1(a).get("owner").next(a=>dN.resolve(this.mi(a)))}gi(a){return h2(a).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=gQ(a,"clientMetadata");return b.W().next(a=>{let c=this.Ii(a,18e5),d=a.filter(a=>-1===c.indexOf(a));return dN.forEach(d,a=>b.delete(a.clientId)).next(()=>d)})}).catch(()=>[]);if(this.oi)for(let b of a)this.oi.removeItem(this.Ti(b.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(a){return!!a&&a.ownerId===this.clientId}di(a){return this.Ys?dN.resolve(!0):h1(a).get("owner").next(b=>{if(null!==b&&this.pi(b.leaseTimestampMs,5e3)&&!this.Ei(b.ownerId)){if(this.mi(b)&&this.networkEnabled)return!0;if(!this.mi(b)){if(!b.allowTabSynchronization)throw new de(dd.FAILED_PRECONDITION,h_);return!1}}return!(!this.networkEnabled||!this.inForeground)||h2(a).W().next(a=>void 0===this.Ii(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&c8("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new gP(a,dZ.at);return this._i(b).next(()=>this.gi(b))}),this.ri.close(),this.Pi()}Ii(a,b){return a.filter(a=>this.pi(a.updateTimeMs,b)&&!this.Ei(a.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",a=>h2(a).W().next(a=>this.Ii(a,18e5).map(a=>a.clientId)))}get started(){return this.Ds}getMutationQueue(a,b){return ht.oe(a,this.It,b,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new hj(a,this.It.re.databaseId)}getDocumentOverlayCache(a){return g7.oe(this.It,a)}getBundleCache(){return this.Ns}runTransaction(a,b,c){var d;c8("IndexedDbPersistence","Starting transaction:",a);let e=15===(d=this.Xs)?gO:14===d?gN:13===d?gM:12===d?gL:11===d?gK:void dc(),f;return this.ri.runTransaction(a,"readonly"===b?"readonly":"readwrite",e,d=>(f=new gP(d,this.Ss?this.Ss.next():dZ.at),"readwrite-primary"===b?this.fi(f).next(a=>!!a||this.di(f)).next(b=>{if(!b)throw c9(`Failed to obtain primary lease for action '${a}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new de(dd.FAILED_PRECONDITION,dK);return c(f)}).next(a=>this.wi(f).next(()=>a)):this.Vi(f).next(()=>c(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}Vi(a){return h1(a).get("owner").next(a=>{if(null!==a&&this.pi(a.leaseTimestampMs,5e3)&&!this.Ei(a.ownerId)&&!this.mi(a)&&!(this.Ys||this.allowTabSynchronization&&a.allowTabSynchronization))throw new de(dd.FAILED_PRECONDITION,h_)})}wi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return h1(a).put("owner",b)}static C(){return dP.C()}_i(a){let b=h1(a);return b.get("owner").next(a=>this.mi(a)?(c8("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):dN.resolve())}pi(a,b){let c=Date.now();return!(a<c-b)&&(!(a>c)||(c9(`Detected an update time that is in the future: ${a} > ${c}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.Zs=()=>{this.Ai(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(a){var b;try{let c=null!==(null===(b=this.oi)|| void 0===b?void 0:b.getItem(this.Ti(a)));return c8("IndexedDbPersistence",`Client '${a}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return c9("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(a){c9("Failed to set zombie client id.",a)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(a){}}Ti(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function h1(a){return gQ(a,"owner")}function h2(a){return gQ(a,"clientMetadata")}function h3(a,b){let c=a.projectId;return a.isDefaultDatabase||(c+="."+a.database),"firestore/"+b+"/"+c+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class h4{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Si=c,this.Di=d}static Ci(a,b){let c=f0(),d=f0();for(let e of b.docChanges)switch(e.type){case 0:c=c.add(e.doc.key);break;case 1:d=d.add(e.doc.key)}return new h4(a,b.fromCache,c,d)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class h5{constructor(){this.xi=!1}initialize(a,b){this.Ni=a,this.indexManager=b,this.xi=!0}getDocumentsMatchingQuery(a,b,c,d){return this.ki(a,b).next(e=>e||this.Mi(a,b,d,c)).next(c=>c||this.Oi(a,b))}ki(a,b){if(e5(b))return dN.resolve(null);let c=fa(b);return this.indexManager.getIndexType(a,c).next(d=>0===d?null:(null!==b.limit&&1===d&&(b=fb(b,null,"F"),c=fa(b)),this.indexManager.getDocumentsMatchingTarget(a,c).next(d=>{let e=f0(...d);return this.Ni.getDocuments(a,e).next(d=>this.indexManager.getMinOffset(a,c).next(c=>{let f=this.Fi(b,d);return this.$i(b,f,e,c.readTime)?this.ki(a,fb(b,null,"F")):this.Bi(a,f,b,c)}))})))}Mi(a,b,c,d){return e5(b)||d.isEqual(du.min())?this.Oi(a,b):this.Ni.getDocuments(a,c).next(e=>{let f=this.Fi(b,e);return this.$i(b,f,c,d)?this.Oi(a,b):(c7()<=p.in.DEBUG&&c8("QueryEngine","Re-using previous result from %s to execute query: %s",d.toString(),fe(b)),this.Bi(a,f,b,dG(d,-1)))})}Fi(a,b){let c=new d4(fh(a));return b.forEach((b,d)=>{ff(a,d)&&(c=c.add(d))}),c}$i(a,b,c,d){if(null===a.limit)return!1;if(c.size!==b.size)return!0;let e="F"===a.limitType?b.last():b.first();return!!e&&(e.hasPendingWrites||e.version.compareTo(d)>0)}Oi(a,b){return c7()<=p.in.DEBUG&&c8("QueryEngine","Using full collection scan to execute query:",fe(b)),this.Ni.getDocumentsMatchingQuery(a,b,dI.min())}Bi(a,b,c,d){return this.Ni.getDocumentsMatchingQuery(a,c,d).next(a=>(b.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class h6{constructor(a,b,c,d){this.persistence=a,this.Li=b,this.It=d,this.Ui=new d1(dq),this.qi=new fS(a=>eK(a),eL),this.Ki=new Map,this.Gi=a.getRemoteDocumentCache(),this.Cs=a.getTargetCache(),this.Ns=a.getBundleCache(),this.Qi(c)}Qi(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new hQ(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.Ui))}}function h7(a,b,c,d){return new h6(a,b,c,d)}async function h8(a,b){var c;let d=c=a;return await d.persistence.runTransaction("Handle user change","readonly",a=>{let c;return d.mutationQueue.getAllMutationBatches(a).next(e=>(c=e,d.Qi(b),d.mutationQueue.getAllMutationBatches(a))).next(b=>{let e=[],f=[],g=f0();for(let h of c)for(let i of(e.push(h.batchId),h.mutations))g=g.add(i.key);for(let j of b)for(let k of(f.push(j.batchId),j.mutations))g=g.add(k.key);return d.localDocuments.getDocuments(a,g).next(a=>({ji:a,removedBatchIds:e,addedBatchIds:f}))})})}function h9(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Cs.getLastRemoteSnapshotVersion(a))}function ia(a,b,c){let d=f0(),e=f0();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(a=>{let d=fT;return c.forEach((c,f)=>{let g=a.get(c);f.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(c)),f.isNoDocument()&&f.version.isEqual(du.min())?(b.removeEntry(c,f.readTime),d=d.insert(c,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||0===f.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(f),d=d.insert(c,f)):c8("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",f.version)}),{Wi:d,zi:e}})}function ib(a,b){var c;let d=c=a;return d.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===b&&(b=-1),d.mutationQueue.getNextMutationBatchAfterBatchId(a,b)))}function ic(a,b){var c;let d=c=a;return d.persistence.runTransaction("Allocate target","readwrite",a=>{let c;return d.Cs.getTargetData(a,b).next(e=>e?(c=e,dN.resolve(c)):d.Cs.allocateTargetId(a).next(e=>(c=new gU(b,e,0,a.currentSequenceNumber),d.Cs.addTargetData(a,c).next(()=>c))))}).then(a=>{let c=d.Ui.get(a.targetId);return(null===c||a.snapshotVersion.compareTo(c.snapshotVersion)>0)&&(d.Ui=d.Ui.insert(a.targetId,a),d.qi.set(b,a.targetId)),a})}async function id(a,b,c){var d;let e=d=a,f=e.Ui.get(b);try{c||await e.persistence.runTransaction("Release target",c?"readwrite":"readwrite-primary",a=>e.persistence.referenceDelegate.removeTarget(a,f))}catch(g){if(!dS(g))throw g;c8("LocalStore",`Failed to update sequence numbers for target ${b}: ${g}`)}e.Ui=e.Ui.remove(b),e.qi.delete(f.target)}function ie(a,b,c){var d;let e=d=a,f=du.min(),g=f0();return e.persistence.runTransaction("Execute query","readonly",a=>(function(a,b,c){var d;let e=d=a,f=e.qi.get(c);return void 0!==f?dN.resolve(e.Ui.get(f)):e.Cs.getTargetData(b,c)})(e,a,fa(b)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>e.Li.getDocumentsMatchingQuery(a,b,c?f:du.min(),c?g:f0())).next(a=>(ii(e,fg(b),a),{documents:a,Hi:g})))}function ig(a,b){var c,d;let e=c=a,f=d=e.Cs,g=e.Ui.get(b);return g?Promise.resolve(g.target):e.persistence.runTransaction("Get target data","readonly",a=>f.se(a,b).next(a=>a?a.target:null))}function ih(a,b){var c;let d=c=a,e=d.Ki.get(b)||du.min();return d.persistence.runTransaction("Get new document changes","readonly",a=>d.Gi.getAllFromCollectionGroup(a,b,dG(e,-1),Number.MAX_SAFE_INTEGER)).then(a=>(ii(d,b,a),a))}function ii(a,b,c){let d=du.min();c.forEach((a,b)=>{b.readTime.compareTo(d)>0&&(d=b.readTime)}),a.Ki.set(b,d)}async function ij(a,b,c,d){var e,f;let g=e=a,h=f0(),i=fT;for(let j of c){let k=b.Ji(j.metadata.name);j.document&&(h=h.add(k));let l=b.Yi(j);l.setReadTime(b.Xi(j.metadata.readTime)),i=i.insert(k,l)}let m=g.Gi.newChangeBuffer({trackRemovals:!0}),n=await ic(g,(f=d,fa(e4(dw.fromString(`__bundle__/docs/${f}`)))));return g.persistence.runTransaction("Apply bundle documents","readwrite",a=>ia(a,m,i).next(b=>(m.apply(a),b)).next(b=>g.Cs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>g.Cs.addMatchingKeys(a,h,n.targetId)).next(()=>g.localDocuments.getLocalViewOfDocuments(a,b.Wi,b.zi)).next(()=>b.Wi)))}async function ik(a,b,c=f0()){var d;let e=await ic(a,fa(g1(b.bundledQuery))),f=d=a;return f.persistence.runTransaction("Save named query","readwrite",a=>{let d=gg(b.readTime);if(e.snapshotVersion.compareTo(d)>=0)return f.Ns.saveNamedQuery(a,b);let g=e.withResumeToken(d8.EMPTY_BYTE_STRING,d);return f.Ui=f.Ui.insert(g.targetId,g),f.Cs.updateTargetData(a,g).next(()=>f.Cs.removeMatchingKeysForTargetId(a,e.targetId)).next(()=>f.Cs.addMatchingKeys(a,c,e.targetId)).next(()=>f.Ns.saveNamedQuery(a,b))})}function il(a,b){return`firestore_clients_${a}_${b}`}function im(a,b,c){let d=`firestore_mutations_${a}_${c}`;return b.isAuthenticated()&&(d+=`_${b.uid}`),d}function io(a,b){return`firestore_targets_${a}_${b}`}class ip{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static Zi(a,b,c){let d=JSON.parse(c),e,f="object"==typeof d&& -1!==["pending","acknowledged","rejected"].indexOf(d.state)&&(void 0===d.error||"object"==typeof d.error);return f&&d.error&&(f="string"==typeof d.error.message&&"string"==typeof d.error.code)&&(e=new de(d.error.code,d.error.message)),f?new ip(a,b,d.state,e):(c9("SharedClientState",`Failed to parse mutation state for ID '${b}': ${c}`),null)}tr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class iq{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static Zi(a,b){let c=JSON.parse(b),d,e="object"==typeof c&& -1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return e&&c.error&&(e="string"==typeof c.error.message&&"string"==typeof c.error.code)&&(d=new de(c.error.code,c.error.message)),e?new iq(a,c.state,d):(c9("SharedClientState",`Failed to parse target state for ID '${a}': ${b}`),null)}tr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class ir{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static Zi(a,b){let c=JSON.parse(b),d="object"==typeof c&&c.activeTargetIds instanceof Array,e=f1;for(let f=0;d&&f<c.activeTargetIds.length;++f)d=ek(c.activeTargetIds[f]),e=e.add(c.activeTargetIds[f]);return d?new ir(a,e):(c9("SharedClientState",`Failed to parse client data for instance '${a}': ${b}`),null)}}class is{constructor(a,b){this.clientId=a,this.onlineState=b}static Zi(a){let b=JSON.parse(a);return"object"==typeof b&& -1!==["Unknown","Online","Offline"].indexOf(b.onlineState)&&"string"==typeof b.clientId?new is(b.clientId,b.onlineState):(c9("SharedClientState",`Failed to parse online state: ${a}`),null)}}class it{constructor(){this.activeTargetIds=f1}er(a){this.activeTargetIds=this.activeTargetIds.add(a)}nr(a){this.activeTargetIds=this.activeTargetIds.delete(a)}tr(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class iu{constructor(a,b,c,d,e){var f,g,h;this.window=a,this.Hs=b,this.persistenceKey=c,this.sr=d,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new d1(dq),this.started=!1,this.cr=[];let i=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=e,this.ar=il(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${f=this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new it),this.lr=RegExp(`^firestore_clients_${i}_([^_]*)$`),this.dr=RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this._r=RegExp(`^firestore_targets_${i}_(\\d+)$`),this.wr=`firestore_online_state_${g=this.persistenceKey}`,this.mr=`firestore_bundle_loaded_v2_${h=this.persistenceKey}`,this.window.addEventListener("storage",this.ir)}static C(a){return!(!a||!a.localStorage)}async start(){let a=await this.syncEngine.vi();for(let b of a){if(b===this.sr)continue;let c=this.getItem(il(this.persistenceKey,b));if(c){let d=ir.Zi(b,c);d&&(this.ur=this.ur.insert(d.clientId,d))}}this.gr();let e=this.storage.getItem(this.wr);if(e){let f=this.yr(e);f&&this.pr(f)}for(let g of this.cr)this.rr(g);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.hr,JSON.stringify(a))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(a){let b=!1;return this.ur.forEach((c,d)=>{d.activeTargetIds.has(a)&&(b=!0)}),b}addPendingMutation(a){this.Tr(a,"pending")}updateMutationState(a,b,c){this.Tr(a,b,c),this.Er(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(io(this.persistenceKey,a));if(c){let d=iq.Zi(a,c);d&&(b=d.state)}}return this.Ar.er(a),this.gr(),b}removeLocalQueryTarget(a){this.Ar.nr(a),this.gr()}isLocalQueryTarget(a){return this.Ar.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(io(this.persistenceKey,a))}updateQueryState(a,b,c){this.Rr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.Er(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.br(a)}notifyBundleLoaded(a){this.Pr(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return c8("SharedClientState","READ",a,b),b}setItem(a,b){c8("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){c8("SharedClientState","REMOVE",a),this.storage.removeItem(a)}rr(a){let b=a;if(b.storageArea===this.storage){if(c8("SharedClientState","EVENT",b.key,b.newValue),b.key===this.ar)return void c9("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==b.key){if(this.lr.test(b.key)){if(null==b.newValue){let a=this.vr(b.key);return this.Vr(a,null)}{let c=this.Sr(b.key,b.newValue);if(c)return this.Vr(c.clientId,c)}}else if(this.dr.test(b.key)){if(null!==b.newValue){let d=this.Dr(b.key,b.newValue);if(d)return this.Cr(d)}}else if(this._r.test(b.key)){if(null!==b.newValue){let e=this.Nr(b.key,b.newValue);if(e)return this.kr(e)}}else if(b.key===this.wr){if(null!==b.newValue){let f=this.yr(b.newValue);if(f)return this.pr(f)}}else if(b.key===this.hr){let g=function(a){let b=dZ.at;if(null!=a)try{var c;let d=JSON.parse(a);"number"==typeof d||dc(),b=d}catch(e){c9("SharedClientState","Failed to read sequence number from WebStorage",e)}return b}(b.newValue);g!==dZ.at&&this.sequenceNumberHandler(g)}else if(b.key===this.mr){let h=this.Mr(b.newValue);await Promise.all(h.map(a=>this.syncEngine.Or(a)))}}}else this.cr.push(b)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(a,b,c){let d=new ip(this.currentUser,a,b,c),e=im(this.persistenceKey,this.currentUser,a);this.setItem(e,d.tr())}Er(a){let b=im(this.persistenceKey,this.currentUser,a);this.removeItem(b)}br(a){let b={clientId:this.sr,onlineState:a};this.storage.setItem(this.wr,JSON.stringify(b))}Rr(a,b,c){let d=io(this.persistenceKey,a),e=new iq(a,b,c);this.setItem(d,e.tr())}Pr(a){let b=JSON.stringify(Array.from(a));this.setItem(this.mr,b)}vr(a){let b=this.lr.exec(a);return b?b[1]:null}Sr(a,b){let c=this.vr(a);return ir.Zi(c,b)}Dr(a,b){let c=this.dr.exec(a),d=Number(c[1]),e=void 0!==c[2]?c[2]:null;return ip.Zi(new c4(e),d,b)}Nr(a,b){let c=this._r.exec(a),d=Number(c[1]);return iq.Zi(d,b)}yr(a){return is.Zi(a)}Mr(a){return JSON.parse(a)}async Cr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.Fr(a.batchId,a.state,a.error);c8("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}kr(a){return this.syncEngine.$r(a.targetId,a.state,a.error)}Vr(a,b){let c=b?this.ur.insert(a,b):this.ur.remove(a),d=this.Ir(this.ur),e=this.Ir(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Br(f,g).then(()=>{this.ur=c})}pr(a){this.ur.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}Ir(a){let b=f1;return a.forEach((a,c)=>{b=b.unionWith(c.activeTargetIds)}),b}}class iv{constructor(){this.Lr=new it,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Lr.er(a),this.Ur[a]||"not-current"}updateQueryState(a,b,c){this.Ur[a]=b}removeLocalQueryTarget(a){this.Lr.nr(a)}isLocalQueryTarget(a){return this.Lr.activeTargetIds.has(a)}clearQueryState(a){delete this.Ur[a]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(a){return this.Lr.activeTargetIds.has(a)}start(){return this.Lr=new it,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iw{qr(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class ix{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(a){this.Wr.push(a)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let a of(c8("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))a(0)}jr(){for(let a of(c8("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))a(1)}static C(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class iz{constructor(a){this.Hr=a.Hr,this.Jr=a.Jr}Yr(a){this.Xr=a}Zr(a){this.eo=a}onMessage(a){this.no=a}close(){this.Jr()}send(a){this.Hr(a)}so(){this.Xr()}io(a){this.eo(a)}ro(a){this.no(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iA extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.oo=b+"://"+a.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(a,b,c,d,e){let f=this.ao(a,b);c8("RestConnection","Sending: ",f,c);let g={};return this.ho(g,d,e),this.lo(a,f,g,c).then(a=>(c8("RestConnection","Received: ",a),a),b=>{throw da("RestConnection",`${a} failed with error: `,b,"url: ",f,"request:",c),b})}fo(a,b,c,d,e,f){return this.co(a,b,c,d,e)}ho(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+c5,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}ao(a,b){let c=iy[a];return`${this.oo}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams}lo(a,b,c,d){return new Promise((e,f)=>{let g=new c1;g.listenOnce(cY.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case cX.NO_ERROR:let b=g.getResponseJson();c8("Connection","XHR received:",JSON.stringify(b)),e(b);break;case cX.TIMEOUT:c8("Connection",'RPC "'+a+'" timed out'),f(new de(dd.DEADLINE_EXCEEDED,"Request time out"));break;case cX.HTTP_ERROR:let c=g.getStatus();if(c8("Connection",'RPC "'+a+'" failed with status:',c,"response text:",g.getResponseText()),c>0){let d=g.getResponseJson().error;if(d&&d.status&&d.message){let h=function(a){let b=a.toLowerCase().replace(/_/g,"-");return Object.values(dd).indexOf(b)>=0?b:dd.UNKNOWN}(d.status);f(new de(h,d.message))}else f(new de(dd.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new de(dd.UNAVAILABLE,"Connection failed."));break;default:dc()}}finally{c8("Connection",'RPC "'+a+'" completed.')}});let h=JSON.stringify(d);g.send(b,"POST",h,c,15)})}_o(a,b,c){let d=[this.oo,"/","google.firestore.v1.Firestore","/",a,"/channel"],e=cV(),f=cW(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(g.xmlHttpFactory=new c_({})),this.ho(g.initMessageHeaders,b,c),(0,q.uI)()||(0,q.b$)()||(0,q.d)()||(0,q.w1)()||(0,q.Mn)()||(0,q.ru)()||(g.httpHeadersOverwriteParam="$httpHeaders");let h=d.join("");c8("Connection","Creating WebChannel: "+h,g);let i=e.createWebChannel(h,g),j=!1,l=!1,m=new iz({Hr:a=>{l?c8("Connection","Not sending because WebChannel is closed:",a):(j||(c8("Connection","Opening WebChannel transport."),i.open(),j=!0),c8("Connection","WebChannel sending:",a),i.send(a))},Jr:()=>i.close()}),n=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return n(i,c0.EventType.OPEN,()=>{l||c8("Connection","WebChannel transport opened.")}),n(i,c0.EventType.CLOSE,()=>{l||(l=!0,c8("Connection","WebChannel transport closed"),m.io())}),n(i,c0.EventType.ERROR,a=>{l||(l=!0,da("Connection","WebChannel transport errored:",a),m.io(new de(dd.UNAVAILABLE,"The operation could not be completed")))}),n(i,c0.EventType.MESSAGE,a=>{var b,c;if(!l){let d=a.data[0];(c=!!d)||dc();let e=d,f=e.error||(null===(b=e[0])|| void 0===b?void 0:b.error);if(f){c8("Connection","WebChannel received error:",f);let g=f.status,h=function(a){let b=k[a];if(void 0!==b)return fR(b)}(g),j=f.message;void 0===h&&(h=dd.INTERNAL,j="Unknown error status: "+g+" with message "+f.message),l=!0,m.io(new de(h,j)),i.close()}else c8("Connection","WebChannel received:",d),m.ro(d)}}),n(f,cZ.STAT_EVENT,a=>{a.stat===c$.PROXY?c8("Connection","Detected buffering proxy"):a.stat===c$.NOPROXY&&c8("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.so()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function iB(){return"undefined"!=typeof window?window:null}function iC(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iD(a){return new gd(a,!0)}class iE{constructor(a,b,c=1e3,d=1.5,e=6e4){this.Hs=a,this.timerId=b,this.wo=c,this.mo=d,this.yo=e,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(a){this.cancel();let b=Math.floor(this.po+this.Ro()),c=Math.max(0,Date.now()-this.To),d=Math.max(0,b-c);d>0&&c8("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.po} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,d,()=>(this.To=Date.now(),a())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class iF{constructor(a,b,c,d,e,f,g,h){this.Hs=a,this.Po=c,this.vo=d,this.Vo=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new iE(a,b)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(a){this.Lo(),this.stream.send(a)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(a,b){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==a?this.xo.reset():b&&b.code===dd.RESOURCE_EXHAUSTED?(c9(b.toString()),c9("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):b&&b.code===dd.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=a,await this.listener.Zr(b)}qo(){}auth(){this.state=1;let a=this.Ko(this.So),b=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.So===b&&this.Go(a,c)},b=>{a(()=>{let a=new de(dd.UNKNOWN,"Fetching auth token failed: "+b.message);return this.Qo(a)})})}Go(a,b){let c=this.Ko(this.So);this.stream=this.jo(a,b),this.stream.Yr(()=>{c(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(a=>{c(()=>this.Qo(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(a){return c8("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Ko(a){return b=>{this.Hs.enqueueAndForget(()=>this.So===a?b():(c8("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iG extends iF{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.It=e}jo(a,b){return this.Vo._o("Listen",a,b)}onMessage(a){this.xo.reset();let b=function(a,b){let c;if("targetChange"in b){var d,e,f,g,h;b.targetChange;let i="NO_CHANGE"===(d=b.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===d?1:"REMOVE"===d?2:"CURRENT"===d?3:"RESET"===d?4:dc(),j=b.targetChange.targetIds||[],k=(e=a,f=b.targetChange.resumeToken,e.gt?(void 0===f||"string"==typeof f||dc(),d8.fromBase64String(f||"")):(void 0===f||f instanceof Uint8Array||dc(),d8.fromUint8Array(f||new Uint8Array))),l=b.targetChange.cause,m=l&&function(a){let b=void 0===a.code?dd.UNKNOWN:fR(a.code);return new de(b,a.message||"")}(l);c=new f6(i,j,k,m||null)}else if("documentChange"in b){b.documentChange;let n=b.documentChange;n.document,n.document.name,n.document.updateTime;let o=gk(a,n.document.name),p=gg(n.document.updateTime),q=new eF({mapValue:{fields:n.document.fields}}),r=eH.newFoundDocument(o,p,q),s=n.targetIds||[],t=n.removedTargetIds||[];c=new f4(s,t,r.key,r)}else if("documentDelete"in b){b.documentDelete;let u=b.documentDelete;u.document;let v=gk(a,u.document),w=u.readTime?gg(u.readTime):du.min(),x=eH.newNoDocument(v,w),y=u.removedTargetIds||[];c=new f4([],y,x.key,x)}else if("documentRemove"in b){b.documentRemove;let z=b.documentRemove;z.document;let A=gk(a,z.document),B=z.removedTargetIds||[];c=new f4([],B,A,null)}else{if(!("filter"in b))return dc();{b.filter;let C=b.filter;C.targetId;let D=C.count||0,E=new fP(D),F=C.targetId;c=new f5(F,E)}}return c}(this.It,a),c=function(a){if(!("targetChange"in a))return du.min();let b=a.targetChange;return b.targetIds&&b.targetIds.length?du.min():b.readTime?gg(b.readTime):du.min()}(a);return this.listener.Wo(b,c)}zo(a){let b={};b.database=gn(this.It),b.addTarget=function(a,b){let c,d=b.target;return(c=eM(d)?{documents:gt(a,d)}:{query:gu(a,d)}).targetId=b.targetId,b.resumeToken.approximateByteSize()>0?c.resumeToken=gf(a,b.resumeToken):b.snapshotVersion.compareTo(du.min())>0&&(c.readTime=ge(a,b.snapshotVersion.toTimestamp())),c}(this.It,a);let c=function(a,b){let c=function(a,b){switch(b){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return dc()}}(0,b.purpose);return null==c?null:{"goog-listen-tags":c}}(this.It,a);c&&(b.labels=c),this.Bo(b)}Ho(a){let b={};b.database=gn(this.It),b.removeTarget=a,this.Bo(b)}}class iH extends iF{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.It=e,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(a,b){return this.Vo._o("Write",a,b)}onMessage(a){var b,c,d,e,f;if(!a.streamToken&&dc(),this.lastStreamToken=a.streamToken,this.Jo){this.xo.reset();let g=(c=a.writeResults,d=a.commitTime,c&&c.length>0?(void 0!==d||dc(),c.map(a=>{var b,c;let e;return b=a,c=d,(e=b.updateTime?gg(b.updateTime):gg(c)).isEqual(du.min())&&(e=gg(c)),new fz(e,b.transformResults||[])})):[]),h=gg(a.commitTime);return this.listener.Zo(h,g)}return a.writeResults&&0!==a.writeResults.length&&dc(),this.Jo=!0,this.listener.tu()}eu(){let a={};a.database=gn(this.It),this.Bo(a)}Xo(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>gr(this.It,a))};this.Bo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class iI extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.Vo=c,this.It=d,this.nu=!1}su(){if(this.nu)throw new de(dd.FAILED_PRECONDITION,"The client has already been terminated.")}co(a,b,c){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.Vo.co(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(dd.UNKNOWN,a.toString())})}fo(a,b,c,d){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.Vo.fo(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(dd.UNKNOWN,a.toString())})}terminate(){this.nu=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iJ{constructor(a,b,c,d,e){this.localStore=a,this.datastore=b,this.asyncQueue=c,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=e,this.mu.qr(a=>{c.enqueueAndForget(async()=>{iS(this)&&(c8("RemoteStore","Restarting streams for network reachability change."),await async function(a){var b;let c=b=a;c._u.add(4),await iL(c),c.gu.set("Unknown"),c._u.delete(4),await iK(c)}(this))})}),this.gu=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(a){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.cu("Offline")))}set(a){this.lu(),this.iu=0,"Online"===a&&(this.ou=!1),this.cu(a)}cu(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}au(a){let b=`Could not reach Cloud Firestore backend. ${a}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(c9(b),this.ou=!1):c8("OnlineStateTracker",b)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}(c,d)}}async function iK(a){if(iS(a))for(let b of a.wu)await b(!0)}async function iL(a){for(let b of a.wu)await b(!1)}function iM(a,b){var c;let d=c=a;d.du.has(b.targetId)||(d.du.set(b.targetId,b),iR(d)?iQ(d):i8(d).ko()&&iO(d,b))}function iN(a,b){var c;let d=c=a,e=i8(d);d.du.delete(b),e.ko()&&iP(d,b),0===d.du.size&&(e.ko()?e.Fo():iS(d)&&d.gu.set("Unknown"))}function iO(a,b){a.yu.Ot(b.targetId),i8(a).zo(b)}function iP(a,b){a.yu.Ot(b),i8(a).Ho(b)}function iQ(a){a.yu=new f8({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),se:b=>a.du.get(b)||null}),i8(a).start(),a.gu.uu()}function iR(a){return iS(a)&&!i8(a).No()&&a.du.size>0}function iS(a){var b;return 0===(b=a)._u.size}function iT(a){a.yu=void 0}async function iU(a){a.du.forEach((b,c)=>{iO(a,b)})}async function iV(a,b){iT(a),iR(a)?(a.gu.hu(b),iQ(a)):a.gu.set("Unknown")}async function iW(a,b,c){if(a.gu.set("Online"),b instanceof f6&&2===b.state&&b.cause)try{await async function(a,b){let c=b.cause;for(let d of b.targetIds)a.du.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.du.delete(d),a.yu.removeTarget(d))}(a,b)}catch(d){c8("RemoteStore","Failed to remove targets %s: %s ",b.targetIds.join(","),d),await iX(a,d)}else if(b instanceof f4?a.yu.Gt(b):b instanceof f5?a.yu.Yt(b):a.yu.Wt(b),!c.isEqual(du.min()))try{let e=await h9(a.localStore);c.compareTo(e)>=0&&await function(a,b){let c=a.yu.te(b);return c.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){let e=a.du.get(d);e&&a.du.set(d,e.withResumeToken(c.resumeToken,b))}}),c.targetMismatches.forEach(b=>{let c=a.du.get(b);if(!c)return;a.du.set(b,c.withResumeToken(d8.EMPTY_BYTE_STRING,c.snapshotVersion)),iP(a,b);let d=new gU(c.target,b,1,c.sequenceNumber);iO(a,d)}),a.remoteSyncer.applyRemoteEvent(c)}(a,c)}catch(f){c8("RemoteStore","Failed to raise snapshot:",f),await iX(a,f)}}async function iX(a,b,c){if(!dS(b))throw b;a._u.add(1),await iL(a),a.gu.set("Offline"),c||(c=()=>h9(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{c8("RemoteStore","Retrying IndexedDB access"),await c(),a._u.delete(1),await iK(a)})}function iY(a,b){return b().catch(c=>iX(a,c,b))}async function iZ(a){var b;let c=b=a,d=i9(c),e=c.fu.length>0?c.fu[c.fu.length-1].batchId:-1;for(;i$(c);)try{let f=await ib(c.localStore,e);if(null===f){0===c.fu.length&&d.Fo();break}e=f.batchId,i_(c,f)}catch(g){await iX(c,g)}i0(c)&&i1(c)}function i$(a){return iS(a)&&a.fu.length<10}function i_(a,b){a.fu.push(b);let c=i9(a);c.ko()&&c.Yo&&c.Xo(b.mutations)}function i0(a){return iS(a)&&!i9(a).No()&&a.fu.length>0}function i1(a){i9(a).start()}async function i2(a){i9(a).eu()}async function i3(a){let b=i9(a);for(let c of a.fu)b.Xo(c.mutations)}async function i4(a,b,c){let d=a.fu.shift(),e=gS.from(d,b,c);await iY(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await iZ(a)}async function i5(a,b){b&&i9(a).Yo&&await async function(a,b){var c;if(fQ(c=b.code)&&c!==dd.ABORTED){let d=a.fu.shift();i9(a).Oo(),await iY(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,b)),await iZ(a)}}(a,b),i0(a)&&i1(a)}async function i6(a,b){var c;let d=c=a;d.asyncQueue.verifyOperationInProgress(),c8("RemoteStore","RemoteStore received new credentials");let e=iS(d);d._u.add(3),await iL(d),e&&d.gu.set("Unknown"),await d.remoteSyncer.handleCredentialChange(b),d._u.delete(3),await iK(d)}async function i7(a,b){var c;let d=c=a;b?(d._u.delete(2),await iK(d)):b||(d._u.add(2),await iL(d),d.gu.set("Unknown"))}function i8(a){return a.pu||(a.pu=function(a,b,c){var d;let e=d=a;return e.su(),new iG(b,e.Vo,e.authCredentials,e.appCheckCredentials,e.It,c)}(a.datastore,a.asyncQueue,{Yr:iU.bind(null,a),Zr:iV.bind(null,a),Wo:iW.bind(null,a)}),a.wu.push(async b=>{b?(a.pu.Oo(),iR(a)?iQ(a):a.gu.set("Unknown")):(await a.pu.stop(),iT(a))})),a.pu}function i9(a){return a.Iu||(a.Iu=function(a,b,c){var d;let e=d=a;return e.su(),new iH(b,e.Vo,e.authCredentials,e.appCheckCredentials,e.It,c)}(a.datastore,a.asyncQueue,{Yr:i2.bind(null,a),Zr:i5.bind(null,a),tu:i3.bind(null,a),Zo:i4.bind(null,a)}),a.wu.push(async b=>{b?(a.Iu.Oo(),await iZ(a)):(await a.Iu.stop(),a.fu.length>0&&(c8("RemoteStore",`Stopping write stream with ${a.fu.length} pending writes`),a.fu=[]))})),a.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class ja{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new df,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new ja(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new de(dd.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jb(a,b){if(c9("AsyncQueue",`${b}: ${a}`),dS(a))return new de(dd.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class jc{constructor(a){this.comparator=a?(b,c)=>a(b,c)||dz.comparator(b.key,c.key):(a,b)=>dz.comparator(a.key,b.key),this.keyedMap=fV(),this.sortedSet=new d1(this.comparator)}static emptySet(a){return new jc(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(a){let b=this.keyedMap.get(a);return b?this.sortedSet.indexOf(b):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof jc)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(a,b){let c=new jc;return c.comparator=this.comparator,c.keyedMap=a,c.sortedSet=b,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class jd{constructor(){this.Tu=new d1(dz.comparator)}track(a){let b=a.doc.key,c=this.Tu.get(b);c?0!==a.type&&3===c.type?this.Tu=this.Tu.insert(b,a):3===a.type&&1!==c.type?this.Tu=this.Tu.insert(b,{type:c.type,doc:a.doc}):2===a.type&&2===c.type?this.Tu=this.Tu.insert(b,{type:2,doc:a.doc}):2===a.type&&0===c.type?this.Tu=this.Tu.insert(b,{type:0,doc:a.doc}):1===a.type&&0===c.type?this.Tu=this.Tu.remove(b):1===a.type&&2===c.type?this.Tu=this.Tu.insert(b,{type:1,doc:c.doc}):0===a.type&&1===c.type?this.Tu=this.Tu.insert(b,{type:2,doc:a.doc}):dc():this.Tu=this.Tu.insert(b,a)}Eu(){let a=[];return this.Tu.inorderTraversal((b,c)=>{a.push(c)}),a}}class je{constructor(a,b,c,d,e,f,g,h){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h}static fromInitialDocuments(a,b,c,d){let e=[];return b.forEach(a=>{e.push({type:0,doc:a})}),new je(a,b,jc.emptySet(b),e,c,d,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&fc(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let b=this.docChanges,c=a.docChanges;if(b.length!==c.length)return!1;for(let d=0;d<b.length;d++)if(b[d].type!==c[d].type||!b[d].doc.isEqual(c[d].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class jf{constructor(){this.Au=void 0,this.listeners=[]}}class jg{constructor(){this.queries=new fS(a=>fd(a),fc),this.onlineState="Unknown",this.Ru=new Set}}async function jh(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g||(f=!0,g=new jf),f)try{g.Au=await d.onListen(e)}catch(h){let i=jb(h,`Initialization of query '${fe(b.query)}' failed`);return void b.onError(i)}d.queries.set(e,g),g.listeners.push(b),b.bu(d.onlineState),g.Au&&b.Pu(g.Au)&&jl(d)}async function ji(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g){let h=g.listeners.indexOf(b);h>=0&&(g.listeners.splice(h,1),f=0===g.listeners.length)}if(f)return d.queries.delete(e),d.onUnlisten(e)}function jj(a,b){var c;let d=c=a,e=!1;for(let f of b){let g=f.query,h=d.queries.get(g);if(h){for(let i of h.listeners)i.Pu(f)&&(e=!0);h.Au=f}}e&&jl(d)}function jk(a,b,c){var d;let e=d=a,f=e.queries.get(b);if(f)for(let g of f.listeners)g.onError(c);e.queries.delete(b)}function jl(a){a.Ru.forEach(a=>{a.next()})}class jm{constructor(a,b,c){this.query=a,this.vu=b,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=c||{}}Pu(a){if(!this.options.includeMetadataChanges){let b=[];for(let c of a.docChanges)3!==c.type&&b.push(c);a=new je(a.query,a.docs,a.oldDocs,b,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0)}let d=!1;return this.Vu?this.Du(a)&&(this.vu.next(a),d=!0):this.Cu(a,this.onlineState)&&(this.xu(a),d=!0),this.Su=a,d}onError(a){this.vu.error(a)}bu(a){this.onlineState=a;let b=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,a)&&(this.xu(this.Su),b=!0),b}Cu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Nu||!c)&&(!a.docs.isEmpty()||"Offline"===b)}Du(a){if(a.docChanges.length>0)return!0;let b=this.Su&&this.Su.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}xu(a){a=je.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache),this.Vu=!0,this.vu.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class jn{constructor(a,b){this.payload=a,this.byteLength=b}ku(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class jo{constructor(a){this.It=a}Ji(a){return gk(this.It,a)}Yi(a){return a.metadata.exists?gq(this.It,a.document,!1):eH.newNoDocument(this.Ji(a.metadata.name),this.Xi(a.metadata.readTime))}Xi(a){return gg(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jp{constructor(a){this.key=a}}class jq{constructor(a){this.key=a}}class jr{constructor(a,b){this.query=a,this.Lu=b,this.Uu=null,this.current=!1,this.qu=f0(),this.mutatedKeys=f0(),this.Ku=fh(a),this.Gu=new jc(this.Ku)}get Qu(){return this.Lu}ju(a,b){let c=b?b.Wu:new jd,d=b?b.Gu:this.Gu,e=b?b.mutatedKeys:this.mutatedKeys,f=d,g=!1,h="F"===this.query.limitType&&d.size===this.query.limit?d.last():null,i="L"===this.query.limitType&&d.size===this.query.limit?d.first():null;if(a.inorderTraversal((a,b)=>{let j=d.get(a),k=ff(this.query,b)?b:null,l=!!j&&this.mutatedKeys.has(j.key),m=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),n=!1;j&&k?j.data.isEqual(k.data)?l!==m&&(c.track({type:3,doc:k}),n=!0):this.zu(j,k)||(c.track({type:2,doc:k}),n=!0,(h&&this.Ku(k,h)>0||i&&0>this.Ku(k,i))&&(g=!0)):!j&&k?(c.track({type:0,doc:k}),n=!0):j&&!k&&(c.track({type:1,doc:j}),n=!0,(h||i)&&(g=!0)),n&&(k?(f=f.add(k),e=m?e.add(a):e.delete(a)):(f=f.delete(a),e=e.delete(a)))}),null!==this.query.limit)for(;f.size>this.query.limit;){let j="F"===this.query.limitType?f.last():f.first();f=f.delete(j.key),e=e.delete(j.key),c.track({type:1,doc:j})}return{Gu:f,Wu:c,$i:g,mutatedKeys:e}}zu(a,b){return a.hasLocalMutations&&b.hasCommittedMutations&&!b.hasLocalMutations}applyChanges(a,b,c){let d=this.Gu;this.Gu=a.Gu,this.mutatedKeys=a.mutatedKeys;let e=a.Wu.Eu();e.sort((a,b)=>(function(a,b){let c=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dc()}};return c(a)-c(b)})(a.type,b.type)||this.Ku(a.doc,b.doc)),this.Hu(c);let f=b?this.Ju():[],g=0===this.qu.size&&this.current?1:0,h=g!==this.Uu;return(this.Uu=g,0!==e.length||h)?{snapshot:new je(this.query,a.Gu,d,e,a.mutatedKeys,0===g,h,!1),Yu:f}:{Yu:f}}bu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new jd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(a){return!this.Lu.has(a)&&!!this.Gu.has(a)&&!this.Gu.get(a).hasLocalMutations}Hu(a){a&&(a.addedDocuments.forEach(a=>this.Lu=this.Lu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Lu=this.Lu.delete(a)),this.current=a.current)}Ju(){if(!this.current)return[];let a=this.qu;this.qu=f0(),this.Gu.forEach(a=>{this.Xu(a.key)&&(this.qu=this.qu.add(a.key))});let b=[];return a.forEach(a=>{this.qu.has(a)||b.push(new jq(a))}),this.qu.forEach(c=>{a.has(c)||b.push(new jp(c))}),b}Zu(a){this.Lu=a.Hi,this.qu=f0();let b=this.ju(a.documents);return this.applyChanges(b,!0)}tc(){return je.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class js{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class jt{constructor(a){this.key=a,this.ec=!1}}class ju{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.nc={},this.sc=new fS(a=>fd(a),fc),this.ic=new Map,this.rc=new Set,this.oc=new d1(dz.comparator),this.uc=new Map,this.cc=new hS,this.ac={},this.hc=new Map,this.lc=hy.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function jv(a,b){let c=jX(a),d,e,f=c.sc.get(b);if(f)d=f.targetId,c.sharedClientState.addLocalQueryTarget(d),e=f.view.tc();else{let g=await ic(c.localStore,fa(b));c.isPrimaryClient&&iM(c.remoteStore,g);let h=c.sharedClientState.addLocalQueryTarget(g.targetId);e=await jw(c,b,d=g.targetId,"current"===h)}return e}async function jw(a,b,c,d){a.dc=(b,c,d)=>(async function(a,b,c,d){let e=b.view.ju(c);e.$i&&(e=await ie(a.localStore,b.query,!1).then(({documents:a})=>b.view.ju(a,e)));let f=d&&d.targetChanges.get(b.targetId),g=b.view.applyChanges(e,a.isPrimaryClient,f);return jI(a,b.targetId,g.Yu),g.snapshot})(a,b,c,d);let e=await ie(a.localStore,b,!0),f=new jr(b,e.Hi),g=f.ju(e.documents),h=f3.createSynthesizedTargetChangeForCurrentChange(c,d&&"Offline"!==a.onlineState),i=f.applyChanges(g,a.isPrimaryClient,h);jI(a,c,i.Yu);let j=new js(b,c,f);return a.sc.set(b,j),a.ic.has(c)?a.ic.get(c).push(b):a.ic.set(c,[b]),i.snapshot}async function jx(a,b){var c;let d=c=a,e=d.sc.get(b),f=d.ic.get(e.targetId);if(f.length>1)return d.ic.set(e.targetId,f.filter(a=>!fc(a,b))),void d.sc.delete(b);d.isPrimaryClient?(d.sharedClientState.removeLocalQueryTarget(e.targetId),d.sharedClientState.isActiveQueryTarget(e.targetId)||await id(d.localStore,e.targetId,!1).then(()=>{d.sharedClientState.clearQueryState(e.targetId),iN(d.remoteStore,e.targetId),jG(d,e.targetId)}).catch(dM)):(jG(d,e.targetId),await id(d.localStore,e.targetId,!0))}async function jy(a,b,c){let d=jY(a);try{var e,f,g;let h=await function(a,b){var c;let d=c=a,e=dt.now(),f=b.reduce((a,b)=>a.add(b.key),f0()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=fT,i=f0();return d.Gi.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(c=>{g=c;let f=[];for(let h of b){let i=fG(h,g.get(h.key).overlayedDocument);null!=i&&f.push(new fJ(h.key,i,eG(i.value.mapValue),fA.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,f,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:fW(g)}))}(d.localStore,b),i;d.sharedClientState.addPendingMutation(h.batchId),e=d,f=h.batchId,g=c,(i=e.ac[e.currentUser.toKey()])||(i=new d1(dq)),i=i.insert(f,g),e.ac[e.currentUser.toKey()]=i,await jL(d,h.changes),await iZ(d.remoteStore)}catch(j){let k=jb(j,"Failed to persist write");c.reject(k)}}async function jz(a,b){var c;let d=c=a;try{let e=await function(a,b){var c;let d=c=a,e=b.snapshotVersion,f=d.Ui;return d.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=d.Gi.newChangeBuffer({trackRemovals:!0});f=d.Ui;let g=[];b.targetChanges.forEach((c,h)=>{var i,j,k;let l=f.get(h);if(!l)return;g.push(d.Cs.removeMatchingKeys(a,c.removedDocuments,h).next(()=>d.Cs.addMatchingKeys(a,c.addedDocuments,h)));let m=l.withSequenceNumber(a.currentSequenceNumber);b.targetMismatches.has(h)?m=m.withResumeToken(d8.EMPTY_BYTE_STRING,du.min()).withLastLimboFreeSnapshotVersion(du.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,e)),f=f.insert(h,m),i=l,j=m,k=c,(0===i.resumeToken.approximateByteSize()||j.snapshotVersion.toMicroseconds()-i.snapshotVersion.toMicroseconds()>=3e8||k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0)&&g.push(d.Cs.updateTargetData(a,m))});let h=fT,i=f0();if(b.documentUpdates.forEach(c=>{b.resolvedLimboDocuments.has(c)&&g.push(d.persistence.referenceDelegate.updateLimboDocument(a,c))}),g.push(ia(a,c,b.documentUpdates).next(a=>{h=a.Wi,i=a.zi})),!e.isEqual(du.min())){let j=d.Cs.getLastRemoteSnapshotVersion(a).next(b=>d.Cs.setTargetsMetadata(a,a.currentSequenceNumber,e));g.push(j)}return dN.waitFor(g).next(()=>c.apply(a)).next(()=>d.localDocuments.getLocalViewOfDocuments(a,h,i)).next(()=>h)}).then(a=>(d.Ui=f,a))}(d.localStore,b);b.targetChanges.forEach((a,b)=>{var c,e,f;let g=d.uc.get(b);g&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||dc(),a.addedDocuments.size>0?g.ec=!0:a.modifiedDocuments.size>0?(e=g.ec)||dc():a.removedDocuments.size>0&&(g.ec||dc(),g.ec=!1))}),await jL(d,e,b)}catch(f){await dM(f)}}function jA(a,b,c){var d;let e=d=a;if(e.isPrimaryClient&&0===c|| !e.isPrimaryClient&&1===c){let f=[];e.sc.forEach((a,c)=>{let d=c.view.bu(b);d.snapshot&&f.push(d.snapshot)}),function(a,b){var c;let d=c=a;d.onlineState=b;let e=!1;d.queries.forEach((a,c)=>{for(let d of c.listeners)d.bu(b)&&(e=!0)}),e&&jl(d)}(e.eventManager,b),f.length&&e.nc.Wo(f),e.onlineState=b,e.isPrimaryClient&&e.sharedClientState.setOnlineState(b)}}async function jB(a,b,c){var d;let e=d=a;e.sharedClientState.updateQueryState(b,"rejected",c);let f=e.uc.get(b),g=f&&f.key;if(g){let h=new d1(dz.comparator);h=h.insert(g,eH.newNoDocument(g,du.min()));let i=f0().add(g),j=new f2(du.min(),new Map,new d4(dq),h,i);await jz(e,j),e.oc=e.oc.remove(g),e.uc.delete(b),jK(e)}else await id(e.localStore,b,!1).then(()=>jG(e,b,c)).catch(dM)}async function jC(a,b){var c;let d=c=a,e=b.batch.batchId;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let c=b.batch.keys(),e=d.Gi.newChangeBuffer({trackRemovals:!0});return(function(a,b,c,d){let e=c.batch,f=e.keys(),g=dN.resolve();return f.forEach(a=>{g=g.next(()=>d.getEntry(b,a)).next(b=>{var f;let g=c.docVersions.get(a);null!==g||dc(),0>b.version.compareTo(g)&&(e.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(b,e))})(d,a,b,e).next(()=>e.apply(a)).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b.batch.batchId)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(a){let b=f0();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(b=b.add(a.batch.mutations[c].key));return b}(b))).next(()=>d.localDocuments.getDocuments(a,c))})}(d.localStore,b);jF(d,e,null),jE(d,e),d.sharedClientState.updateMutationState(e,"acknowledged"),await jL(d,f)}catch(g){await dM(g)}}async function jD(a,b,c){var d;let e=d=a;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return d.mutationQueue.lookupMutationBatch(a,b).next(b=>{var e;return null!==b||dc(),c=b.keys(),d.mutationQueue.removeMutationBatch(a,b)}).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,c)).next(()=>d.localDocuments.getDocuments(a,c))})}(e.localStore,b);jF(e,b,c),jE(e,b),e.sharedClientState.updateMutationState(b,"rejected",c),await jL(e,f)}catch(g){await dM(g)}}function jE(a,b){(a.hc.get(b)||[]).forEach(a=>{a.resolve()}),a.hc.delete(b)}function jF(a,b,c){var d;let e=d=a,f=e.ac[e.currentUser.toKey()];if(f){let g=f.get(b);g&&(c?g.reject(c):g.resolve(),f=f.remove(b)),e.ac[e.currentUser.toKey()]=f}}function jG(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a.ic.get(b)))a.sc.delete(d),c&&a.nc._c(d,c);a.ic.delete(b),a.isPrimaryClient&&a.cc.ls(b).forEach(b=>{a.cc.containsKey(b)||jH(a,b)})}function jH(a,b){a.rc.delete(b.path.canonicalString());let c=a.oc.get(b);null!==c&&(iN(a.remoteStore,c),a.oc=a.oc.remove(b),a.uc.delete(c),jK(a))}function jI(a,b,c){for(let d of c)d instanceof jp?(a.cc.addReference(d.key,b),jJ(a,d)):d instanceof jq?(c8("SyncEngine","Document no longer in limbo: "+d.key),a.cc.removeReference(d.key,b),a.cc.containsKey(d.key)||jH(a,d.key)):dc()}function jJ(a,b){let c=b.key,d=c.path.canonicalString();a.oc.get(c)||a.rc.has(d)||(c8("SyncEngine","New document in limbo: "+c),a.rc.add(d),jK(a))}function jK(a){for(;a.rc.size>0&&a.oc.size<a.maxConcurrentLimboResolutions;){let b=a.rc.values().next().value;a.rc.delete(b);let c=new dz(dw.fromString(b)),d=a.lc.next();a.uc.set(d,new jt(c)),a.oc=a.oc.insert(c,d),iM(a.remoteStore,new gU(fa(e4(c.path)),d,2,dZ.at))}}async function jL(a,b,c){var d;let e=d=a,f=[],g=[],h=[];e.sc.isEmpty()||(e.sc.forEach((a,d)=>{h.push(e.dc(d,b,c).then(a=>{if(a){e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,a.fromCache?"not-current":"current"),f.push(a);let b=h4.Ci(d.targetId,a);g.push(b)}}))}),await Promise.all(h),e.nc.Wo(f),await async function(a,b){var c;let d=c=a;try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>dN.forEach(b,b=>dN.forEach(b.Si,c=>d.persistence.referenceDelegate.addReference(a,b.targetId,c)).next(()=>dN.forEach(b.Di,c=>d.persistence.referenceDelegate.removeReference(a,b.targetId,c)))))}catch(e){if(!dS(e))throw e;c8("LocalStore","Failed to update sequence numbers: "+e)}for(let f of b){let g=f.targetId;if(!f.fromCache){let h=d.Ui.get(g),i=h.snapshotVersion,j=h.withLastLimboFreeSnapshotVersion(i);d.Ui=d.Ui.insert(g,j)}}}(e.localStore,g))}async function jM(a,b){var c,d,e;let f=c=a;if(!f.currentUser.isEqual(b)){c8("SyncEngine","User change. New user:",b.toKey());let g=await h8(f.localStore,b);f.currentUser=b,e="'waitForPendingWrites' promise is rejected due to a user change.",(d=f).hc.forEach(a=>{a.forEach(a=>{a.reject(new de(dd.CANCELLED,e))})}),d.hc.clear(),f.sharedClientState.handleUserChange(b,g.removedBatchIds,g.addedBatchIds),await jL(f,g.ji)}}function jN(a,b){var c;let d=c=a,e=d.uc.get(b);if(e&&e.ec)return f0().add(e.key);{let f=f0(),g=d.ic.get(b);if(!g)return f;for(let h of g){let i=d.sc.get(h);f=f.unionWith(i.view.Qu)}return f}}async function jO(a,b){var c;let d=c=a,e=await ie(d.localStore,b.query,!0),f=b.view.Zu(e);return d.isPrimaryClient&&jI(d,b.targetId,f.Yu),f}async function jP(a,b){var c;let d=c=a;return ih(d.localStore,b).then(a=>jL(d,a))}async function jQ(a,b,c,d){var e;let f=e=a,g=await function(a,b){var c,d;let e=c=a,f=d=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",a=>f.Tn(a,b).next(b=>b?e.localDocuments.getDocuments(a,b):dN.resolve(null)))}(f.localStore,b);null!==g?("pending"===c?await iZ(f.remoteStore):"acknowledged"===c||"rejected"===c?(jF(f,b,d||null),jE(f,b),function(a,b){var c,d;(d=(c=a).mutationQueue).An(b)}(f.localStore,b)):dc(),await jL(f,g)):c8("SyncEngine","Cannot apply mutation batch with id: "+b)}async function jR(a,b){var c;let d=c=a;if(jX(d),jY(d),!0===b&& !0!==d.fc){let e=d.sharedClientState.getAllActiveQueryTargets(),f=await jS(d,e.toArray());for(let g of(d.fc=!0,await i7(d.remoteStore,!0),f))iM(d.remoteStore,g)}else if(!1===b&& !1!==d.fc){let h=[],i=Promise.resolve();d.ic.forEach((a,b)=>{d.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(jG(d,b),id(d.localStore,b,!0))),iN(d.remoteStore,b)}),await i,await jS(d,h),function(a){var b;let c=b=a;c.uc.forEach((a,b)=>{iN(c.remoteStore,b)}),c.cc.fs(),c.uc=new Map,c.oc=new d1(dz.comparator)}(d),d.fc=!1,await i7(d.remoteStore,!1)}}async function jS(a,b,c){var d;let e=d=a,f=[],g=[];for(let h of b){let i,j=e.ic.get(h);if(j&&0!==j.length)for(let k of(i=await ic(e.localStore,fa(j[0])),j)){let l=e.sc.get(k),m=await jO(e,l);m.snapshot&&g.push(m.snapshot)}else{let n=await ig(e.localStore,h);i=await ic(e.localStore,n),await jw(e,jT(n),h,!1)}f.push(i)}return e.nc.Wo(g),f}function jT(a){return e3(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function jU(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).vi()}async function jV(a,b,c,d){var e;let f=e=a;if(f.fc)return void c8("SyncEngine","Ignoring unexpected query state notification.");let g=f.ic.get(b);if(g&&g.length>0)switch(c){case"current":case"not-current":{let h=await ih(f.localStore,fg(g[0])),i=f2.createSynthesizedRemoteEventForCurrentChange(b,"current"===c);await jL(f,h,i);break}case"rejected":await id(f.localStore,b,!0),jG(f,b,d);break;default:dc()}}async function jW(a,b,c){let d=jX(a);if(d.fc){for(let e of b){if(d.ic.has(e)){c8("SyncEngine","Adding an already active target "+e);continue}let f=await ig(d.localStore,e),g=await ic(d.localStore,f);await jw(d,jT(f),g.targetId,!1),iM(d.remoteStore,g)}for(let h of c)d.ic.has(h)&&await id(d.localStore,h,!1).then(()=>{iN(d.remoteStore,h),jG(d,h)}).catch(dM)}}function jX(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applyRemoteEvent=jz.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=jN.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=jB.bind(null,c),c.nc.Wo=jj.bind(null,c.eventManager),c.nc._c=jk.bind(null,c.eventManager),c}function jY(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applySuccessfulWrite=jC.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=jD.bind(null,c),c}class jZ{constructor(){this.synchronizeTabs=!1}async initialize(a){this.It=iD(a.databaseInfo.databaseId),this.sharedClientState=this.mc(a),this.persistence=this.gc(a),await this.persistence.start(),this.localStore=this.yc(a),this.gcScheduler=this.Ic(a,this.localStore),this.indexBackfillerScheduler=this.Tc(a,this.localStore)}Ic(a,b){return null}Tc(a,b){return null}yc(a){return h7(this.persistence,new h5,a.initialUser,this.It)}gc(a){return new hX(hZ.Bs,this.It)}mc(a){return new iv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j${async initialize(a,b){this.localStore||(this.localStore=a.localStore,this.sharedClientState=a.sharedClientState,this.datastore=this.createDatastore(b),this.remoteStore=this.createRemoteStore(b),this.eventManager=this.createEventManager(b),this.syncEngine=this.createSyncEngine(b,!a.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>jA(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=jM.bind(null,this.syncEngine),await i7(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new jg}createDatastore(a){var b,c,d,e,f;let g=iD(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new iA(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new iI(c,d,e,f)}createRemoteStore(a){var b,c,d,e,f;return b=this.localStore,c=this.datastore,d=a.asyncQueue,e=a=>jA(this.syncEngine,a,0),f=ix.C()?new ix:new iw,new iJ(b,c,d,e,f)}createSyncEngine(a,b){return function(a,b,c,d,e,f,g){let h=new ju(a,b,c,d,e,f);return g&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(a){var b;let c=b=a;c8("RemoteStore","RemoteStore shutting down."),c._u.add(5),await iL(c),c.mu.shutdown(),c.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class j_{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Ac(this.observer.next,a)}error(a){this.observer.error?this.Ac(this.observer.error,a):c9("Uncaught Error in snapshot listener:",a)}Rc(){this.muted=!0}Ac(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class j0{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new de(dd.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let b=await async function(a,b){var c;let d=c=a,e=gn(d.It)+"/documents",f={documents:b.map(a=>gj(d.It,a))},g=await d.fo("BatchGetDocuments",e,f,b.length),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.It,"found"in(c=a)?function(a,b){var c;b.found||dc(),b.found.name,b.found.updateTime;let d=gk(a,b.found.name),e=gg(b.found.updateTime),f=new eF({mapValue:{fields:b.found.fields}});return eH.newFoundDocument(d,e,f)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||dc(),!b.readTime&&dc();let e=gk(a,b.missing),f=gg(b.readTime);return eH.newNoDocument(e,f)}(b,c):dc());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||dc(),i.push(c)}),i}(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new fN(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=dz.fromPath(b);this.mutations.push(new fO(c,this.precondition(c)))}),await async function(a,b){var c;let d=c=a,e=gn(d.It)+"/documents",f={writes:b.map(a=>gr(d.It,a))};await d.co("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw dc();b=du.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new de(dd.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?b.isEqual(du.min())?fA.exists(!1):fA.updateTime(b):fA.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(du.min()))throw new de(dd.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fA.updateTime(b)}return fA.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */ class j1{constructor(a,b,c,d){this.authCredentials=a,this.appCheckCredentials=b,this.asyncQueue=c,this.databaseInfo=d,this.user=c4.UNAUTHENTICATED,this.clientId=dp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async a=>{c8("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(c,a=>(c8("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new de(dd.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new df;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=jb(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function j2(a,b){a.asyncQueue.verifyOperationInProgress(),c8("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await h8(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a.offlineComponents=b}async function j3(a,b){a.asyncQueue.verifyOperationInProgress();let c=await j4(a);c8("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>i6(b.remoteStore,a)),a.setAppCheckTokenChangeListener((a,c)=>i6(b.remoteStore,c)),a.onlineComponents=b}async function j4(a){return a.offlineComponents||(c8("FirestoreClient","Using default OfflineComponentProvider"),await j2(a,new jZ)),a.offlineComponents}async function j5(a){return a.onlineComponents||(c8("FirestoreClient","Using default OnlineComponentProvider"),await j3(a,new j$)),a.onlineComponents}async function j6(a){let b=await j5(a),c=b.eventManager;return c.onListen=jv.bind(null,b.syncEngine),c.onUnlisten=jx.bind(null,b.syncEngine),c}let j7=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j8(a,b,c){if(!c)throw new de(dd.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function j9(a){if(!dz.isDocumentKey(a))throw new de(dd.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function ka(a){if(dz.isDocumentKey(a))throw new de(dd.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function kb(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":dc()}function kc(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new de(dd.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=kb(a);throw new de(dd.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class kd{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new de(dd.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new de(dd.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new de(dd.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class ke{constructor(a,b,c,d){this._authCredentials=a,this._appCheckCredentials=b,this._databaseId=c,this._app=d,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new de(dd.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new de(dd.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kd(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new dh;switch(a.type){case"gapi":let b=a.client;return new dk(b,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new de(dd.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=j7.get(a);b&&(c8("ComponentProvider","Removing Datastore"),j7.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class kf{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kh(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new kf(this.firestore,a,this._key)}}class kg{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new kg(this.firestore,a,this._query)}}class kh extends kg{constructor(a,b,c){super(a,b,e4(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new kf(this.firestore,null,new dz(a))}withConverter(a){return new kh(this.firestore,a,this._path)}}function ki(a,b,...c){if(a=(0,q.m9)(a),j8("collection","path",b),a instanceof ke){let d=dw.fromString(b,...c);return ka(d),new kh(a,null,d)}{if(!(a instanceof kf||a instanceof kh))throw new de(dd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dw.fromString(b,...c));return ka(e),new kh(a.firestore,null,e)}}function kj(a,b,...c){if(a=(0,q.m9)(a),1===arguments.length&&(b=dp.R()),j8("doc","path",b),a instanceof ke){let d=dw.fromString(b,...c);return j9(d),new kf(a,null,new dz(d))}{if(!(a instanceof kf||a instanceof kh))throw new de(dd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dw.fromString(b,...c));return j9(e),new kf(a.firestore,a instanceof kh?a.converter:null,new dz(e))}}function kk(a){return function(a,b){if("object"!=typeof a||null===a)return!1;let c=a;for(let d of b)if(d in c&&"function"==typeof c[d])return!0;return!1}(a,["next","error","complete"])}class kl extends ke{constructor(a,b,c,d){super(a,b,c,d),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new iE(this,"async_queue_retry"),this.jc=()=>{let a=iC();a&&c8("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.bo()};let a=iC();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.Wc(),this.zc(a)}enterRestrictedMode(a){if(!this.Lc){this.Lc=!0,this.Gc=a||!1;let b=iC();b&&"function"==typeof b.removeEventListener&&b.removeEventListener("visibilitychange",this.jc)}}enqueue(a){if(this.Wc(),this.Lc)return new Promise(()=>{});let b=new df;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Bc.push(a),this.Hc()))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(a){if(!dS(a))throw a;c8("AsyncQueue","Operation failed with retryable error: "+a)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(a){let b=this.$c.then(()=>(this.Kc=!0,a().catch(a=>{var b;this.qc=a,this.Kc=!1;let c,d=(c=(b=a).message||"",b.stack&&(c=b.stack.includes(b.message)?b.stack:b.message+"\n"+b.stack),c);throw c9("INTERNAL UNHANDLED ERROR: ",d),a}).then(a=>(this.Kc=!1,a))));return this.$c=b,b}enqueueAfterDelay(a,b,c){this.Wc(),this.Qc.indexOf(a)> -1&&(b=0);let d=ja.createAndSchedule(this,a,b,c,a=>this.Jc(a));return this.Uc.push(d),d}Wc(){this.qc&&dc()}verifyOperationInProgress(){}async Yc(){let a;do await (a=this.$c);while(a!==this.$c)}Xc(a){for(let b of this.Uc)if(b.timerId===a)return!0;return!1}Zc(a){return this.Yc().then(()=>{for(let b of(this.Uc.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.Uc))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.Yc()})}ta(a){this.Qc.push(a)}Jc(a){let b=this.Uc.indexOf(a);this.Uc.splice(b,1)}},this._persistenceKey=(null==d?void 0:d.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ko(this),this._firestoreClient.terminate()}}function km(a,b){let c="object"==typeof a?a:(0,n.Mq)();return(0,n.qX)(c,"firestore").getImmediate({identifier:"string"==typeof a?a:b||"(default)"})}function kn(a){return a._firestoreClient||ko(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function ko(a){var b,c,d,e,f;let g=a._freezeSettings(),h=(c=a._databaseId,d=(null===(b=a._app)|| void 0===b?void 0:b.options.appId)||"",e=a._persistenceKey,f=g,new eg(c,d,e,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f.useFetchStreams));a._firestoreClient=new j1(a._authCredentials,a._appCheckCredentials,a._queue,h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class kp{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new de(dd.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dy(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class kq{constructor(a){this._byteString=a}static fromBase64String(a){try{return new kq(d8.fromBase64String(a))}catch(b){throw new de(dd.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new kq(d8.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class kr{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class ks{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new de(dd.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new de(dd.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return dq(this._lat,a._lat)||dq(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let kt=/^__.*__$/;class ku{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new fJ(a,this.data,this.fieldMask,b,this.fieldTransforms):new fI(a,this.data,b,this.fieldTransforms)}}class kv{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new fJ(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function kw(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dc()}}class kx{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.It=c,this.ignoreUndefinedProperties=d,void 0===e&&this.ea(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(a){return new kx(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.sa({path:c,ra:!1});return d.oa(a),d}ua(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.sa({path:c,ra:!1});return d.ea(),d}ca(a){return this.sa({path:void 0,ra:!0})}aa(a){return kM(a,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}ea(){if(this.path)for(let a=0;a<this.path.length;a++)this.oa(this.path.get(a))}oa(a){if(0===a.length)throw this.aa("Document fields must not be empty");if(kw(this.na)&&kt.test(a))throw this.aa('Document fields cannot begin and end with "__"')}}class ky{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.It=c||iD(a)}fa(a,b,c,d=!1){return new kx({na:a,methodName:b,la:c,path:dy.emptyPath(),ra:!1,ha:d},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function kz(a){let b=a._freezeSettings(),c=iD(a._databaseId);return new ky(a._databaseId,!!b.ignoreUndefinedProperties,c)}function kA(a,b,c,d,e,f={}){let g=a.fa(f.merge||f.mergeFields?2:0,b,c,e);kI("Data must be an object, but it was:",g,d);let h=kG(d,g),i,j;if(f.merge)i=new d7(g.fieldMask),j=g.fieldTransforms;else if(f.mergeFields){let k=[];for(let l of f.mergeFields){let m=kJ(b,l,c);if(!g.contains(m))throw new de(dd.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kN(k,m)||k.push(m)}i=new d7(k),j=g.fieldTransforms.filter(a=>i.covers(a.field))}else i=null,j=g.fieldTransforms;return new ku(new eF(h),i,j)}class kB extends null{_toFieldTransform(a){if(2!==a.na)throw 1===a.na?a.aa(`${this._methodName}() can only appear at the top level of your update data`):a.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof kB}}function kC(a,b,c){return new kx({na:3,la:b.settings.la,methodName:a._methodName,ra:c},b.databaseId,b.It,b.ignoreUndefinedProperties)}class kD extends kr{_toFieldTransform(a){return new fy(a.path,new fq)}isEqual(a){return a instanceof kD}}function kE(a,b,c,d=!1){return kF(c,a.fa(d?4:3,b))}function kF(a,b){if(kH(a=(0,q.m9)(a)))return kI("Unsupported field value:",b,a),kG(a,b);if(a instanceof kr)return function(a,b){if(!kw(b.na))throw b.aa(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b.aa(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.ra&&4!==b.na)throw b.aa("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=kF(e,b.ca(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,q.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return fl(b.It,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=dt.fromDate(a);return{timestampValue:ge(b.It,c)}}if(a instanceof dt){let d=new dt(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:ge(b.It,d)}}if(a instanceof ks)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof kq)return{bytesValue:gf(b.It,a._byteString)};if(a instanceof kf){let e=b.databaseId,f=a.firestore._databaseId;if(!f.isEqual(e))throw b.aa(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:gh(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.aa(`Unsupported field value: ${kb(a)}`)}(a,b)}function kG(a,b){let c={};return d0(a)?b.path&&b.path.length>0&&b.fieldMask.push(b.path):d_(a,(a,d)=>{let e=kF(d,b.ia(a));null!=e&&(c[a]=e)}),{mapValue:{fields:c}}}function kH(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof dt||a instanceof ks||a instanceof kq||a instanceof kf||a instanceof kr)}function kI(a,b,c){var d;if(!kH(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=kb(c);throw"an object"===e?b.aa(a+" a custom object"):b.aa(a+" "+e)}}function kJ(a,b,c){if((b=(0,q.m9)(b))instanceof kp)return b._internalPath;if("string"==typeof b)return kL(a,b);throw kM("Field path arguments must be of type string or ",a,!1,void 0,c)}let kK=RegExp("[~\\*/\\[\\]]");function kL(a,b,c){if(b.search(kK)>=0)throw kM(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new kp(...b.split("."))._internalPath}catch(d){throw kM(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function kM(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new de(dd.INVALID_ARGUMENT,h+a+i)}function kN(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class kO{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new kf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new kP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(kQ("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class kP extends kO{data(){return super.data()}}function kQ(a,b){return"string"==typeof b?kL(a,b):b instanceof kp?b._internalPath:b._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class kR{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class kS extends kO{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new kT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(a,b={}){if(this._document){let c=this._document.data.field(kQ("DocumentSnapshot.get",a));if(null!==c)return this._userDataWriter.convertValue(c,b.serverTimestamps)}}}class kT extends kS{data(a={}){return super.data(a)}}class kU{constructor(a,b,c,d){this._firestore=a,this._userDataWriter=b,this._snapshot=d,this.metadata=new kR(d.hasPendingWrites,d.fromCache),this.query=c}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new kT(this._firestore,this._userDataWriter,c.key,c,new kR(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(a={}){let b=!!a.includeMetadataChanges;if(b&&this._snapshot.excludesMetadataChanges)throw new de(dd.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===b||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>({type:"added",doc:new kT(a._firestore,a._userDataWriter,b.doc.key,b.doc,new kR(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),oldIndex:-1,newIndex:c++}))}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let c=new kT(a._firestore,a._userDataWriter,b.doc.key,b.doc,new kR(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),e=-1,f=-1;return 0!==b.type&&(e=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(f=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:kV(b.type),doc:c,oldIndex:e,newIndex:f}})}}(this,b),this._cachedChangesIncludeMetadataChanges=b),this._cachedChanges}}function kV(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kW(a){if("L"===a.limitType&&0===a.explicitOrderBy.length)throw new de(dd.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kX{}function kY(a,...b){for(let c of b)a=c._apply(a);return a}class kZ extends kX{constructor(a,b){super(),this.wa=a,this.ya=b,this.type="orderBy"}_apply(a){let b=function(a,b,c){if(null!==a.startAt)throw new de(dd.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==a.endAt)throw new de(dd.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let d=new e$(b,c);return function(a,b){if(null===e6(a)){let c=e7(a);null!==c&&k2(a,c,b.field)}}(a,d),d}(a._query,this.wa,this.ya);return new kg(a.firestore,a.converter,function(a,b){let c=a.explicitOrderBy.concat([b]);return new e2(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(a._query,b))}}function k$(a,b="asc"){let c=kQ("orderBy",a);return new kZ(c,b)}function k_(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof kO)return function(a,b,c,d,e){if(!d)throw new de(dd.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of e9(a))if(g.field.isKeyField())f.push(et(b,d.key));else{let h=d.data.field(g.field);if(ed(h))throw new de(dd.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new de(dd.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new eZ(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=kz(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new de(dd.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new de(dd.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!e8(a)&& -1!==j.indexOf("/"))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(dw.fromString(j));if(!dz.isDocumentKey(k))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new dz(k);h.push(et(b,l))}else{let m=kE(c,d,j);h.push(m)}}return new eZ(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function k0(a,b,c){if("string"==typeof(c=getModularInstance(c))){if(""===c)throw new de(dd.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e8(b)&& -1!==c.indexOf("/"))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(dw.fromString(c));if(!dz.isDocumentKey(d))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return et(a,new dz(d))}if(c instanceof kf)return et(a,c._key);throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kb(c)}.`)}function k1(a,b){if(!Array.isArray(a)||0===a.length)throw new de(dd.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new de(dd.INVALID_ARGUMENT,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function k2(a,b,c){if(!c.isEqual(b))throw new de(dd.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class k3{convertValue(a,b="none"){switch(en(a)){case 0:return null;case 1:return a.booleanValue;case 2:return eb(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(ec(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw dc()}}convertObject(a,b){let c={};return d_(a.fields,(a,d)=>{c[a]=this.convertValue(d,b)}),c}convertGeoPoint(a){return new ks(eb(a.latitude),eb(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=ee(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(ef(a));default:return null}}convertTimestamp(a){let b=ea(a);return new dt(b.seconds,b.nanos)}convertDocumentKey(a,b){var c;let d=dw.fromString(a);(c=gC(d))||dc();let e=new eh(d.get(1),d.get(3)),f=new dz(d.popFirst(5));return e.isEqual(b)||c9(`Document ${f} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function k4(a,b,c){return a?c&&(c.merge||c.mergeFields)?a.toFirestore(b,c):a.toFirestore(b):b}function k5(a,b){if((a=getModularInstance(a)).firestore!==b)throw new de(dd.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function k6(a){a=kc(a,kf);let b=kc(a.firestore,kl);return(function a(b,c,d={}){let e=new df;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new j_({next:f=>{b.enqueueAndForget(()=>ji(a,g));let h=f.docs.has(c);!h&&f.fromCache?e.reject(new de(dd.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&d&&"server"===d.source?e.reject(new de(dd.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):e.resolve(f)},error:a=>e.reject(a)}),g=new jm(e4(c.path),f,{includeMetadataChanges:!0,Nu:!0});return jh(a,g)})(await j6(b),b.asyncQueue,c,d,e)),e.promise})(kn(b),a._key).then(c=>lc(b,a,c))}class k7 extends k3{constructor(a){super(),this.firestore=a}convertBytes(a){return new kq(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new kf(this.firestore,null,b)}}function k8(a){a=kc(a,kg);let b=kc(a.firestore,kl),c=kn(b),d=new k7(b);return kW(a._query),(function a(b,c,d={}){let e=new df;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new j_({next:c=>{b.enqueueAndForget(()=>ji(a,g)),c.fromCache&&"server"===d.source?e.reject(new de(dd.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):e.resolve(c)},error:a=>e.reject(a)}),g=new jm(c,f,{includeMetadataChanges:!0,Nu:!0});return jh(a,g)})(await j6(b),b.asyncQueue,c,d,e)),e.promise})(c,a._query).then(c=>new kU(b,d,a,c))}function k9(a,b){let c=kc(a.firestore,kl),d=kj(a),e=k4(a.converter,b);return lb(c,[kA(kz(a.firestore),"addDoc",d._key,e,null!==a.converter,{}).toMutation(d._key,fA.exists(!1))]).then(()=>d)}function la(a,...b){var c,d,e;a=(0,q.m9)(a);let f={includeMetadataChanges:!1},g=0;"object"!=typeof b[g]||kk(b[g])||(f=b[g],g++);let h={includeMetadataChanges:f.includeMetadataChanges};if(kk(b[g])){let i=b[g];b[g]=null===(c=i.next)|| void 0===c?void 0:c.bind(i),b[g+1]=null===(d=i.error)|| void 0===d?void 0:d.bind(i),b[g+2]=null===(e=i.complete)|| void 0===e?void 0:e.bind(i)}let j,k,l;if(a instanceof kf)k=kc(a.firestore,kl),l=e4(a._key.path),j={next:c=>{b[g]&&b[g](lc(k,a,c))},error:b[g+1],complete:b[g+2]};else{let m=kc(a,kg);k=kc(m.firestore,kl),l=m._query;let n=new k7(k);j={next:a=>{b[g]&&b[g](new kU(k,n,m,a))},error:b[g+1],complete:b[g+2]},kW(a._query)}return function(a,b,c,d){let e=new j_(d),f=new jm(b,e,c);return a.asyncQueue.enqueueAndForget(async()=>jh(await j6(a),f)),()=>{e.Rc(),a.asyncQueue.enqueueAndForget(async()=>ji(await j6(a),f))}}(kn(k),l,h,j)}function lb(a,b){return function(a,b){let c=new df;return a.asyncQueue.enqueueAndForget(async()=>{var d;return jy(await (d=a,j5(d).then(a=>a.syncEngine)),b,c)}),c.promise}(kn(a),b)}function lc(a,b,c){let d=c.docs.get(b._key),e=new k7(a);return new kS(a,e,b._key,d,new kR(c.hasPendingWrites,c.fromCache),b.converter)}function ld(){return new kD("serverTimestamp")}!function(a,b=!0){var c;c5=n.Jn,(0,n.Xd)(new o.wA("firestore",(a,{instanceIdentifier:c,options:d})=>{let e=a.getProvider("app").getImmediate(),f=new kl(new di(a.getProvider("auth-internal")),new dm(a.getProvider("app-check-internal")),function(a,b){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new de(dd.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eh(a.options.projectId,b)}(e,c),e);return d=Object.assign({useFetchStreams:b},d),f._setSettings(d),f},"PUBLIC").setMultipleInstances(!0)),(0,n.KN)(c3,"3.4.15",void 0),(0,n.KN)(c3,"3.4.15","esm2017")}()},1153:function(a,b,c){"use strict";c.d(b,{Jt:function(){return aw},cF:function(){return ay},iH:function(){return ax},KV:function(){return av}});var d,e,f=c(5816),g=c(4444),h=c(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Constants used in the Firebase Storage library.
 */ /**
 * Domain name for firebase storage.
 */ let i="firebasestorage.googleapis.com",j="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An error returned by the Firebase Storage SDK.
 * @public
 */ class k extends g.ZR{constructor(a,b){super(l(a),`Firebase Storage: ${b} (${l(a)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,k.prototype)}_codeEquals(a){return l(a)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(a){this.customData.serverResponse=a,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function l(a){return"storage/"+a}function m(){return new k("unknown","An unknown error occurred, please check the error payload for server response.")}function n(){return new k("canceled","User canceled the upload/download.")}function o(){return new k("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function p(a){return new k("invalid-argument",a)}function q(){return new k("app-deleted","The Firebase app was deleted.")}function r(a,b){return new k("invalid-format","String does not match format '"+a+"': "+b)}function s(a){throw new k("internal-error","Internal error: "+a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Firebase Storage location data.
 *
 * @internal
 */ class t{constructor(a,b){this.bucket=a,this.path_=b}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let a=encodeURIComponent;return"/b/"+a(this.bucket)+"/o/"+a(this.path)}bucketOnlyServerUrl(){let a=encodeURIComponent;return"/b/"+a(this.bucket)+"/o"}static makeFromBucketSpec(a,b){var c;let d;try{d=t.makeFromUrl(a,b)}catch(e){return new t(a,"")}if(""===d.path)return d;throw c=a,new k("invalid-default-bucket","Invalid default bucket '"+c+"'.")}static makeFromUrl(a,b){let c=null,d="([A-Za-z0-9.\\-_]+)",e=RegExp("^gs://"+d+"(/(.*))?$","i");function f(a){a.path_=decodeURIComponent(a.path)}let g=b.replace(/[.]/g,"\\."),h=RegExp(`^https?://${g}/v[A-Za-z0-9_]+/b/${d}/o(/([^?#]*).*)?$`,"i"),j=RegExp(`^https?://${b===i?"(?:storage.googleapis.com|storage.cloud.google.com)":b}/${d}/([^?#]*)`,"i"),l=[{regex:e,indices:{bucket:1,path:3},postModify:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path_=a.path_.slice(0,-1))}},{regex:h,indices:{bucket:1,path:3},postModify:f},{regex:j,indices:{bucket:1,path:2},postModify:f}];for(let m=0;m<l.length;m++){let n=l[m],o=n.regex.exec(a);if(o){let p=o[n.indices.bucket],q=o[n.indices.path];q||(q=""),c=new t(p,q),n.postModify(c);break}}if(null==c){var r;throw r=a,new k("invalid-url","Invalid URL '"+r+"'.")}return c}}class u{constructor(a){this.promise_=Promise.reject(a)}getPromise(){return this.promise_}cancel(a=!1){}}function v(a){return"string"==typeof a||a instanceof String}function w(a){return x()&&a instanceof Blob}function x(){return"undefined"!=typeof Blob}function y(a,b,c,d){if(d<b)throw p(`Invalid value for '${a}'. Expected ${b} or greater.`);if(d>c)throw p(`Invalid value for '${a}'. Expected ${c} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z(a,b,c){let d=b;return null==c&&(d=`https://${b}`),`${c}://${d}/v0${a}`}function A(a){let b=encodeURIComponent,c="?";for(let d in a)if(a.hasOwnProperty(d)){let e=b(d)+"="+b(a[d]);c=c+e+"&"}return c.slice(0,-1)}(d=e||(e={}))[d.NO_ERROR=0]="NO_ERROR",d[d.NETWORK_ERROR=1]="NETWORK_ERROR",d[d.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */ class B{constructor(a,b,c,d,e,f,g,h,i,j,k){this.url_=a,this.method_=b,this.headers_=c,this.body_=d,this.successCodes_=e,this.additionalRetryCodes_=f,this.callback_=g,this.errorCallback_=h,this.timeout_=i,this.progressCallback_=j,this.connectionFactory_=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((a,b)=>{this.resolve_=a,this.reject_=b,this.start_()})}start_(){let a=(a,b)=>{if(b){a(!1,new C(!1,null,!0));return}let c=this.connectionFactory_();this.pendingConnection_=c;let d=a=>{let b=a.loaded,c=a.lengthComputable?a.total:-1;null!==this.progressCallback_&&this.progressCallback_(b,c)};null!==this.progressCallback_&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&c.removeUploadProgressListener(d),this.pendingConnection_=null;let b=c.getErrorCode()===e.NO_ERROR,f=c.getStatus();if(!b||this.isRetryStatusCode_(f)){let g=c.getErrorCode()===e.ABORT;a(!1,new C(!1,null,g));return}let h=-1!==this.successCodes_.indexOf(f);a(!0,new C(h,c))})},b=(a,b)=>{let c=this.resolve_,d=this.reject_,e=b.connection;if(b.wasSuccessCode)try{var f;let g=this.callback_(e,e.getResponse());(f=g,void 0!==f)?c(g):c()}catch(h){d(h)}else if(null!==e){let i=m();i.serverResponse=e.getErrorText(),d(this.errorCallback_?this.errorCallback_(e,i):i)}else if(b.canceled){let j=this.appDelete_?q():n();d(j)}else{let l=new k("retry-limit-exceeded","Max retry time for operation exceeded, please try again.");d(l)}};this.canceled_?b(!1,new C(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */ function(a,b,c){let d=1,e=null,f=null,g=!1,h=0;function i(){return 2===h}let j=!1;function k(...a){j||(j=!0,b.apply(null,a))}function l(b){e=setTimeout(()=>{e=null,a(n,i())},b)}function m(){f&&clearTimeout(f)}function n(a,...b){if(j){m();return}if(a){m(),k.call(null,a,...b);return}let c=i()||g;if(c){m(),k.call(null,a,...b);return}d<64&&(d*=2);let e;1===h?(h=2,e=0):e=(d+Math.random())*1e3,l(e)}let o=!1;function p(a){if(!o)o=!0,m(),!j&&(null!==e?(a||(h=2),clearTimeout(e),l(0)):a||(h=1))}return l(0),f=setTimeout(()=>{g=!0,p(!0)},c),p}(a,b,this.timeout_)}getPromise(){return this.promise_}cancel(a){if(this.canceled_=!0,this.appDelete_=a||!1,null!==this.backoffId_){var b;(b=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(a){let b=-1!==[408,429].indexOf(a),c=-1!==this.additionalRetryCodes_.indexOf(a);return a>=500&&a<600||b||c}}class C{constructor(a,b,c){this.wasSuccessCode=a,this.connection=b,this.canceled=!!c}}function D(...a){let b="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==b){let c=new b;for(let d=0;d<a.length;d++)c.append(a[d]);return c.getBlob()}if(x())return new Blob(a);throw new k("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An enumeration of the possible string formats for upload.
 * @public
 */ let E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(a,b){this.data=a,this.contentType=b||null}}function G(a){let b=[];for(let c=0;c<a.length;c++){let d=a.charCodeAt(c);if(d<=127)b.push(d);else if(d<=2047)b.push(192|d>>6,128|63&d);else if((64512&d)==55296){let e=c<a.length-1&&(64512&a.charCodeAt(c+1))==56320;if(e){let f=d,g=a.charCodeAt(++c);d=65536|(1023&f)<<10|1023&g,b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|63&d)}else b.push(239,191,189)}else(64512&d)==56320?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|63&d)}return new Uint8Array(b)}function H(a,b){switch(a){case E.BASE64:{let c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d){let e=c?"-":"_";throw r(a,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case E.BASE64URL:{let f=-1!==b.indexOf("+"),g=-1!==b.indexOf("/");if(f||g){let h=f?"+":"/";throw r(a,"Invalid character '"+h+"' found: is it base64 encoded?")}b=b.replace(/-/g,"+").replace(/_/g,"/")}}let i;try{var j;i=(j=b,atob(j))}catch(k){throw r(a,"Invalid character found")}let l=new Uint8Array(i.length);for(let m=0;m<i.length;m++)l[m]=i.charCodeAt(m);return l}class I{constructor(a){this.base64=!1,this.contentType=null;let b=a.match(/^data:([^,]+)?,/);if(null===b)throw r(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let c=b[1]||null;null!=c&&(this.base64=function(a,b){let c=a.length>=b.length;return!!c&&a.substring(a.length-b.length)===b}(c,";base64"),this.contentType=this.base64?c.substring(0,c.length-7):c),this.rest=a.substring(a.indexOf(",")+1)}}function J(a){let b=new I(a);return b.base64?H(E.BASE64,b.rest):function(a){let b;try{b=decodeURIComponent(a)}catch(c){throw r(E.DATA_URL,"Malformed data URL.")}return G(b)}(b.rest)}function K(a){let b=new I(a);return b.contentType}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */ class L{constructor(a,b){let c=0,d="";w(a)?(this.data_=a,c=a.size,d=a.type):a instanceof ArrayBuffer?(b?this.data_=new Uint8Array(a):(this.data_=new Uint8Array(a.byteLength),this.data_.set(new Uint8Array(a))),c=this.data_.length):a instanceof Uint8Array&&(b?this.data_=a:(this.data_=new Uint8Array(a.length),this.data_.set(a)),c=a.length),this.size_=c,this.type_=d}size(){return this.size_}type(){return this.type_}slice(a,b){if(w(this.data_)){var c,d,e;let f=this.data_,g=(c=f,d=a,e=b,c.webkitSlice?c.webkitSlice(d,e):c.mozSlice?c.mozSlice(d,e):c.slice?c.slice(d,e):null);return null===g?null:new L(g)}{let h=new Uint8Array(this.data_.buffer,a,b-a);return new L(h,!0)}}static getBlob(...a){if(x()){let b=a.map(a=>a instanceof L?a.data_:a);return new L(D.apply(null,b))}{let c=a.map(a=>v(a)?function a(b,c){switch(b){case E.RAW:return new F(G(c));case E.BASE64:case E.BASE64URL:return new F(H(b,c));case E.DATA_URL:return new F(J(c),K(c))}throw m()}(E.RAW,a).data:a.data_),d=0;c.forEach(a=>{d+=a.byteLength});let e=new Uint8Array(d),f=0;return c.forEach(a=>{for(let b=0;b<a.length;b++)e[f++]=a[b]}),new L(e,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */ function M(a){var b;let c;try{c=JSON.parse(a)}catch(d){return null}return"object"!=typeof(b=c)||Array.isArray(b)?null:c}function N(a){let b=a.lastIndexOf("/",a.length-2);return -1===b?a:a.slice(b+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O(a,b){return b}class P{constructor(a,b,c,d){this.server=a,this.local=b||a,this.writable=!!c,this.xform=d||O}}let Q=null;function R(){if(Q)return Q;let a=[];a.push(new P("bucket")),a.push(new P("generation")),a.push(new P("metageneration")),a.push(new P("name","fullPath",!0));let b=new P("name");b.xform=function(a,b){var c;return!v(c=b)||c.length<2?c:N(c)},a.push(b);let c=new P("size");return c.xform=function(a,b){return void 0!==b?Number(b):b},a.push(c),a.push(new P("timeCreated")),a.push(new P("updated")),a.push(new P("md5Hash",null,!0)),a.push(new P("cacheControl",null,!0)),a.push(new P("contentDisposition",null,!0)),a.push(new P("contentEncoding",null,!0)),a.push(new P("contentLanguage",null,!0)),a.push(new P("contentType",null,!0)),a.push(new P("metadata","customMetadata",!0)),Q=a}function S(a,b,c){let d=M(b);return null===d?null:function(a,b,c){var d,e;let f={};f.type="file";let g=c.length;for(let h=0;h<g;h++){let i=c[h];f[i.local]=i.xform(f,b[i.server])}return d=f,e=a,Object.defineProperty(d,"ref",{get:function(){let a=d.bucket,b=d.fullPath,c=new t(a,b);return e._makeStorageReference(c)}}),f}(a,d,c)}function T(a,b){let c={},d=b.length;for(let e=0;e<d;e++){let f=b[e];f.writable&&(c[f.server]=a[f.local])}return JSON.stringify(c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let U="prefixes",V="items";class W{constructor(a,b,c,d){this.url=a,this.method=b,this.handler=c,this.timeout=d,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws the UNKNOWN StorageError if cndn is false.
 */ function X(a){if(!a)throw m()}function Y(a,b){return function(c,d){let e=S(a,d,b);return X(null!==e),e}}function Z(a){return function(b,c){var d,e;let f;return(f=401===b.getStatus()?b.getErrorText().includes("Firebase App Check token is invalid")?new k("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new k("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===b.getStatus()?(d=a.bucket,new k("quota-exceeded","Quota for bucket '"+d+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===b.getStatus()?(e=a.path,new k("unauthorized","User does not have permission to access '"+e+"'.")):c).serverResponse=c.serverResponse,f}}function $(a){let b=Z(a);return function(c,d){let e=b(c,d);if(404===c.getStatus()){var f;e=(f=a.path,new k("object-not-found","Object '"+f+"' does not exist."))}return e.serverResponse=d.serverResponse,e}}function _(a,b,c){let d=Object.assign({},c);if(d.fullPath=a.path,d.size=b.size(),!d.contentType){var e,f;d.contentType=(e=null,f=b,e&&e.contentType||f&&f.type()||"application/octet-stream")}return d}function aa(a,b,c,d,e){let f=b.bucketOnlyServerUrl(),g={"X-Goog-Upload-Protocol":"multipart"},h=function(){let a="";for(let b=0;b<2;b++)a+=Math.random().toString().slice(2);return a}();g["Content-Type"]="multipart/related; boundary="+h;let i=_(b,d,e),j=T(i,c),k="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+j+"\r\n--"+h+"\r\nContent-Type: "+i.contentType+"\r\n\r\n",l=L.getBlob(k,d,"\r\n--"+h+"--");if(null===l)throw o();let m={name:i.fullPath},n=z(f,a.host,a._protocol),p=a.maxUploadRetryTime,q=new W(n,"POST",Y(a,c),p);return q.urlParams=m,q.headers=g,q.body=l.uploadData(),q.errorHandler=Z(b),q}class ab{constructor(a,b,c,d){this.current=a,this.total=b,this.finalized=!!c,this.metadata=d||null}}function ac(a,b){let c=null;try{c=a.getResponseHeader("X-Goog-Upload-Status")}catch(d){X(!1)}return X(!!c&& -1!==(b||["active"]).indexOf(c)),c}let ad={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ae(a){switch(a){case"running":case"pausing":case"canceling":return ad.RUNNING;case"paused":return ad.PAUSED;case"success":return ad.SUCCESS;case"canceled":return ad.CANCELED;default:return ad.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class af{constructor(a,b,c){var d;let e="function"==typeof(d=a)||null!=b||null!=c;if(e)this.next=a,this.error=null!=b?b:void 0,this.complete=null!=c?c:void 0;else{let f=a;this.next=f.next,this.error=f.error,this.complete=f.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function ag(a){return(...b)=>{Promise.resolve().then(()=>a(...b))}}class ah{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=e.NO_ERROR,this.sendPromise_=new Promise(a=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=e.ABORT,a()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=e.NETWORK_ERROR,a()}),this.xhr_.addEventListener("load",()=>{a()})})}send(a,b,c,d){if(this.sent_)throw s("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(b,a,!0),void 0!==d)for(let e in d)d.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,d[e].toString());return void 0!==c?this.xhr_.send(c):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw s("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw s("cannot .getStatus() before sending");try{return this.xhr_.status}catch(a){return -1}}getResponse(){if(!this.sent_)throw s("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw s("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(a){return this.xhr_.getResponseHeader(a)}addUploadProgressListener(a){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",a)}removeUploadProgressListener(a){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",a)}}class ai extends ah{initXhr(){this.xhr_.responseType="text"}}function aj(){return new ai}class ak extends null{initXhr(){this.xhr_.responseType="arraybuffer"}}class al extends null{initXhr(){this.xhr_.responseType="blob"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */ class am{constructor(a,b){this._service=a,b instanceof t?this._location=b:this._location=t.makeFromUrl(b,a.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(a,b){return new am(a,b)}get root(){let a=new t(this._location.bucket,"");return this._newRef(this._service,a)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return N(this._location.path)}get storage(){return this._service}get parent(){let a=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Contains helper methods for manipulating paths.
 */ /**
 * @return Null if the path is already at the root.
 */ function(a){if(0===a.length)return null;let b=a.lastIndexOf("/");if(-1===b)return"";let c=a.slice(0,b);return c}(this._location.path);if(null===a)return null;let b=new t(this._location.bucket,a);return new am(this._service,b)}_throwIfRoot(a){if(""===this._location.path){var b;throw b=a,new k("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}}async function an(a,b,c){let d=await ao(a,{pageToken:c});b.prefixes.push(...d.prefixes),b.items.push(...d.items),null!=d.nextPageToken&&await an(a,b,d.nextPageToken)}function ao(a,b){null!=b&&"number"==typeof b.maxResults&&y("options.maxResults",1,1e3,b.maxResults);let c=b||{},d=function(a,b,c,d,e){var f,g;let h={};b.isRoot?h.prefix="":h.prefix=b.path+"/",c&&c.length>0&&(h.delimiter=c),d&&(h.pageToken=d),e&&(h.maxResults=e);let i=b.bucketOnlyServerUrl(),j=z(i,a.host,a._protocol),k=a.maxOperationRetryTime,l=new W(j,"GET",(f=a,g=b.bucket,function(a,b){let c=function(a,b,c){let d=M(c);return null===d?null:function(a,b,c){let d={prefixes:[],items:[],nextPageToken:c.nextPageToken};if(c[U])for(let e of c[U]){let f=e.replace(/\/$/,""),g=a._makeStorageReference(new t(b,f));d.prefixes.push(g)}if(c[V])for(let h of c[V]){let i=a._makeStorageReference(new t(b,h.name));d.items.push(i)}return d}(a,b,d)}(f,g,b);return X(null!==c),c}),k);return l.urlParams=h,l.errorHandler=Z(b),l}(a.storage,a._location,"/",c.pageToken,c.maxResults);return a.storage.makeRequestWithTokens(d,aj)}function ap(a,b){if(a instanceof ar){let c=a;if(null==c._bucket)throw new k("no-default-bucket","No default bucket found. Did you set the '"+j+"' property when initializing the app?");let d=new am(c,c._bucket);return null!=b?ap(d,b):d}return void 0!==b?function a(b,c){let d=function(a,b){let c=b.split("/").filter(a=>a.length>0).join("/");return 0===a.length?c:a+"/"+c}(b._location.path,c),e=new t(b._location.bucket,d);return new am(b.storage,e)}(a,b):a}function aq(a,b){let c=null==b?void 0:b[j];return null==c?null:t.makeFromBucketSpec(c,a)}class ar{constructor(a,b,c,d,e){this.app=a,this._authProvider=b,this._appCheckProvider=c,this._url=d,this._firebaseVersion=e,this._bucket=null,this._host=i,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=d?this._bucket=t.makeFromBucketSpec(d,this._host):this._bucket=aq(this._host,this.app.options)}get host(){return this._host}set host(a){this._host=a,null!=this._url?this._bucket=t.makeFromBucketSpec(this._url,a):this._bucket=aq(a,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(a){y("time",0,Number.POSITIVE_INFINITY,a),this._maxUploadRetryTime=a}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(a){y("time",0,Number.POSITIVE_INFINITY,a),this._maxOperationRetryTime=a}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let a=this._authProvider.getImmediate({optional:!0});if(a){let b=await a.getToken();if(null!==b)return b.accessToken}return null}async _getAppCheckToken(){let a=this._appCheckProvider.getImmediate({optional:!0});if(a){let b=await a.getToken();return b.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(a=>a.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(a){return new am(this,a)}_makeRequest(a,b,c,d){if(this._deleted)return new u(q());{let e=function(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;let o=A(a.urlParams),p=a.url+o,q=Object.assign({},a.headers);return g=q,(h=b)&&(g["X-Firebase-GMPID"]=h),i=q,null!==(j=c)&&j.length>0&&(i.Authorization="Firebase "+j),k=q,l=f,k["X-Firebase-Storage-Version"]="webjs/"+(null!=l?l:"AppManager"),m=q,null!==(n=d)&&(m["X-Firebase-AppCheck"]=n),new B(p,a.method,q,a.body,a.successCodes,a.additionalRetryCodes,a.handler,a.errorHandler,a.timeout,a.progressCallback,e)}(a,this._appId,c,d,b,this._firebaseVersion);return this._requests.add(e),e.getPromise().then(()=>this._requests.delete(e),()=>this._requests.delete(e)),e}}async makeRequestWithTokens(a,b){let[c,d]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(a,b,c,d).getPromise()}}let as="@firebase/storage",at="0.9.9",au="storage";function av(a,b,c){return function a(b,c,d){b._throwIfRoot("uploadBytes");let e=aa(b.storage,b._location,R(),new L(c,!0),d);return b.storage.makeRequestWithTokens(e,aj).then(a=>({metadata:a,ref:b}))}(a=(0,g.m9)(a),b,c)}function aw(a){return function(a){a._throwIfRoot("getDownloadURL");let b=function(a,b,c){var d,e;let f=b.fullServerUrl(),g=z(f,a.host,a._protocol),h=a.maxOperationRetryTime,i=new W(g,"GET",(d=a,e=c,function(a,b){let c=S(d,b,e);return X(null!==c),function(a,b,c,d){let e=M(b);if(null===e||!v(e.downloadTokens))return null;let f=e.downloadTokens;if(0===f.length)return null;let g=encodeURIComponent,h=f.split(","),i=h.map(b=>{let e=a.bucket,f=a.fullPath,h="/b/"+g(e)+"/o/"+g(f),i=z(h,c,d),j=A({alt:"media",token:b});return i+j});return i[0]}(c,b,d.host,d._protocol)}),h);return i.errorHandler=$(b),i}(a.storage,a._location,R());return a.storage.makeRequestWithTokens(b,aj).then(a=>{if(null===a)throw new k("no-download-url","The given file does not have any download URLs.");return a})}(a=(0,g.m9)(a))}function ax(a,b){return function(a,b){var c,d,e;if(!(b&&(c=b,/^[A-Za-z]+:\/\//.test(c))))return ap(a,b);if(a instanceof ar)return d=a,e=b,new am(d,e);throw p("To use ref(service, url), the first argument must be a Storage instance.")}(a=(0,g.m9)(a),b)}function ay(a=(0,f.Mq)(),b){a=(0,g.m9)(a);let c=(0,f.qX)(a,au),d=c.getImmediate({identifier:b});return d}(0,f.Xd)(new h.wA(au,function a(b,{instanceIdentifier:c}){let d=b.getProvider("app").getImmediate(),e=b.getProvider("auth-internal"),g=b.getProvider("app-check-internal");return new ar(d,e,g,c,f.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,f.KN)(as,at,""),(0,f.KN)(as,at,"esm2017")},8679:function(a,b,c){"use strict";var d=c(1296),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g={"$$typeof":!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};function i(a){return d.isMemo(a)?g:h[a.$$typeof]||e}h[d.ForwardRef]={"$$typeof":!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h[d.Memo]=g;var j=Object.defineProperty,k=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,o=Object.prototype;function p(a,b,c){if("string"!=typeof b){if(o){var d=n(b);d&&d!==o&&p(a,d,c)}var e=k(b);l&&(e=e.concat(l(b)));for(var g=i(a),h=i(b),q=0;q<e.length;++q){var r=e[q];if(!f[r]&&!(c&&c[r])&&!(h&&h[r])&&!(g&&g[r])){var s=m(b,r);try{j(a,r,s)}catch(t){}}}}return a}a.exports=p},6103:function(a,b){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103,e=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,g=c?Symbol.for("react.strict_mode"):60108,h=c?Symbol.for("react.profiler"):60114,i=c?Symbol.for("react.provider"):60109,j=c?Symbol.for("react.context"):60110,k=c?Symbol.for("react.async_mode"):60111,l=c?Symbol.for("react.concurrent_mode"):60111,m=c?Symbol.for("react.forward_ref"):60112,n=c?Symbol.for("react.suspense"):60113,o=c?Symbol.for("react.suspense_list"):60120,p=c?Symbol.for("react.memo"):60115,q=c?Symbol.for("react.lazy"):60116,r=c?Symbol.for("react.block"):60121,s=c?Symbol.for("react.fundamental"):60117,t=c?Symbol.for("react.responder"):60118,u=c?Symbol.for("react.scope"):60119;function v(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case d:switch(a=a.type){case k:case l:case f:case h:case g:case n:return a;default:switch(a=a&&a.$$typeof){case j:case m:case q:case p:case i:return a;default:return b}}case e:return b}}}function w(a){return v(a)===l}b.AsyncMode=k,b.ConcurrentMode=l,b.ContextConsumer=j,b.ContextProvider=i,b.Element=d,b.ForwardRef=m,b.Fragment=f,b.Lazy=q,b.Memo=p,b.Portal=e,b.Profiler=h,b.StrictMode=g,b.Suspense=n,b.isAsyncMode=function(a){return w(a)||v(a)===k},b.isConcurrentMode=w,b.isContextConsumer=function(a){return v(a)===j},b.isContextProvider=function(a){return v(a)===i},b.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===d},b.isForwardRef=function(a){return v(a)===m},b.isFragment=function(a){return v(a)===f},b.isLazy=function(a){return v(a)===q},b.isMemo=function(a){return v(a)===p},b.isPortal=function(a){return v(a)===e},b.isProfiler=function(a){return v(a)===h},b.isStrictMode=function(a){return v(a)===g},b.isSuspense=function(a){return v(a)===n},b.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===f||a===l||a===h||a===g||a===n||a===o||"object"==typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===i||a.$$typeof===j||a.$$typeof===m||a.$$typeof===s||a.$$typeof===t||a.$$typeof===u||a.$$typeof===r)},b.typeOf=v},1296:function(a,b,c){"use strict";a.exports=c(6103)},3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(7226)}])},3632:function(a,b,c){"use strict";c.d(b,{I8:function(){return j},db:function(){return k},Ap:function(){return l},tO:function(){return i}});var d=c(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,d.KN)("firebase","9.9.4","app");var e=c(6690),f=c(5321),g=c(1153),h=(0,d.ZF)({apiKey:"AIzaSyDdZz8VL-q_PWpS_u2H9cE7nLLT84X6Eas",authDomain:"tripper-9fc71.firebaseapp.com",databaseURL:"https://tripper-9fc71.firebaseio.com",projectId:"tripper-9fc71",storageBucket:"tripper-9fc71.appspot.com",messagingSenderId:"297502223323",appId:"1:297502223323:web:a71b2a771ef85da5d655fe"}),i=(0,g.cF)(h),j=(0,e.v0)(h),k=(0,f.ad)(h),l=new e.hJ},7226:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return n}});var d=c(1799),e=c(5893),f=c(7406),g=c(3768),h=(0,f.xC)({reducer:{user:g.ZP}}),i=c(9473),j=c(7294),k=c(2986),l=c(3632),m=function(){var a=(0,i.I0)();return(0,j.useEffect)(function(){(0,k.Aj)(l.I8,function(b){if(b){var c,d;a((0,g.Lj)({uid:b.uid,displayName:null!==(c=b.displayName)&& void 0!==c?c:"",photoUrl:null!==(d=b.photoURL)&& void 0!==d?d:""}))}else a((0,g.Lj)({uid:"",displayName:"",photoUrl:""}))})},[a]),null},n=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsxs)(i.zt,{store:h,children:[(0,e.jsx)(m,{}),(0,e.jsx)(b,(0,d.Z)({},c)),";"]})}},3768:function(a,b,c){"use strict";c.d(b,{Lj:function(){return h},dy:function(){return i},x4:function(){return g}});var d,e=(0,c(7406).oM)({name:"user",initialState:{uid:"",photoUrl:"",displayName:""},reducers:{login:function(a,b){b.payload},logout:function(a){},updateUserProfile:function(a,b){a.uid=b.payload.uid,a.displayName=b.payload.displayName,a.photoUrl=b.payload.photoUrl}}}),f=e.actions,g=f.login,h=(f.logout,f.updateUserProfile),i=function(a){return a.user};b.ZP=e.reducer},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},9921:function(a,b){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c,d=Symbol.for("react.element"),e=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),j=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),o=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen");Symbol.for("react.module.reference")},9864:function(a,b,c){"use strict";c(9921)},9473:function(a,b,c){"use strict";c.d(b,{zt:function(){return x},I0:function(){return A},v9:function(){return s}});var d,e,f,g=c(1688),h=c(2798),i=c(3935);function j(a){a()}let k=j,l=()=>k;var m=c(7294);let n=(0,m.createContext)(null);function o(){let a=(0,m.useContext)(n);return a}let p=()=>{throw Error("uSES not initialized!")},q=p,r=(a,b)=>a===b,s=function(a=n){let b=a===n?o:()=>(0,m.useContext)(a);return function(a,c=r){let{store:d,subscription:e,getServerState:f}=b(),g=q(e.addNestedSub,d.getState,f||d.getState,a,c);return(0,m.useDebugValue)(g),g}}();c(8679),c(9864);let t={notify(){},get:()=>[]},u=!!("undefined"!=typeof window&& void 0!==window.document&& void 0!==window.document.createElement),v=u?m.useLayoutEffect:m.useEffect,w=null;var x=function({store:a,context:b,children:c,serverState:d}){let e=(0,m.useMemo)(()=>{let b=function(a,b){let c,d=t;function e(){g.onStateChange&&g.onStateChange()}function f(){c||(c=b?b.addNestedSub(e):a.subscribe(e),d=function(){let a=l(),b=null,c=null;return{clear(){b=null,c=null},notify(){a(()=>{let a=b;for(;a;)a.callback(),a=a.next})},get(){let a=[],c=b;for(;c;)a.push(c),c=c.next;return a},subscribe(a){let d=!0,e=c={callback:a,next:null,prev:c};return e.prev?e.prev.next=e:b=e,function(){d&&null!==b&&(d=!1,e.next?e.next.prev=e.prev:c=e.prev,e.prev?e.prev.next=e.next:b=e.next)}}}}())}let g={addNestedSub:function(a){return f(),d.subscribe(a)},notifyNestedSubs:function(){d.notify()},handleChangeWrapper:e,isSubscribed:function(){return Boolean(c)},trySubscribe:f,tryUnsubscribe:function(){c&&(c(),c=void 0,d.clear(),d=t)},getListeners:()=>d};return g}(a);return{store:a,subscription:b,getServerState:d?()=>d:void 0}},[a,d]),f=(0,m.useMemo)(()=>a.getState(),[a]);return v(()=>{let{subscription:b}=e;return b.onStateChange=b.notifyNestedSubs,b.trySubscribe(),f!==a.getState()&&b.notifyNestedSubs(),()=>{b.tryUnsubscribe(),b.onStateChange=void 0}},[e,f]),m.createElement((b||n).Provider,{value:e},c)};function y(a=n){let b=a===n?o:()=>(0,m.useContext)(a);return function(){let{store:a}=b();return a}}let z=y(),A=function(a=n){let b=a===n?z:y(a);return function(){let a=b();return a.dispatch}}();q=d=h.useSyncExternalStoreWithSelector,e=g.useSyncExternalStore,k=i.unstable_batchedUpdates},3250:function(a,b,c){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d=c(7294),e="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},f=d.useState,g=d.useEffect,h=d.useLayoutEffect,i=d.useDebugValue;function j(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!e(a,c)}catch(d){return!0}}function k(a,b){return b()}var l="undefined"==typeof window|| void 0===window.document|| void 0===window.document.createElement?k:function(a,b){var c=b(),d=f({inst:{value:c,getSnapshot:b}}),e=d[0].inst,k=d[1];return h(function(){e.value=c,e.getSnapshot=b,j(e)&&k({inst:e})},[a,c,b]),g(function(){return j(e)&&k({inst:e}),a(function(){j(e)&&k({inst:e})})},[a]),i(c),c};b.useSyncExternalStore=void 0!==d.useSyncExternalStore?d.useSyncExternalStore:l},139:function(a,b,c){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d=c(7294),e=c(1688),f="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},g=e.useSyncExternalStore,h=d.useRef,i=d.useEffect,j=d.useMemo,k=d.useDebugValue;b.useSyncExternalStoreWithSelector=function(a,b,c,d,e){var l=h(null);if(null===l.current){var m={hasValue:!1,value:null};l.current=m}else m=l.current;l=j(function(){function a(a){if(!i){if(i=!0,g=a,a=d(a),void 0!==e&&m.hasValue){var b=m.value;if(e(b,a))return h=b}return h=a}if(b=h,f(g,a))return b;var c=d(a);return void 0!==e&&e(b,c)?b:(g=a,h=c)}var g,h,i=!1,j=void 0===c?null:c;return[function(){return a(b())},null===j?void 0:function(){return a(j())}]},[b,c,d,e]);var n=g(a,l[0],l[1]);return i(function(){m.hasValue=!0,m.value=n},[n]),k(n),n}},1688:function(a,b,c){"use strict";a.exports=c(3250)},2798:function(a,b,c){"use strict";a.exports=c(139)},4942:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.d(b,{Z:function(){return d}})},5816:function(a,b,c){"use strict";c.d(b,{Jn:function(){return K},qX:function(){return H},Xd:function(){return G},Mq:function(){return M},ZF:function(){return L},KN:function(){return N}});var d,e=c(8463),f=c(3333),g=c(4444);let h=(a,b)=>b.some(b=>a instanceof b),i,j,k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return l.get(a);if("objectStoreNames"===b)return a.objectStoreNames||m.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return q(a[b])},set(a,b,c){return a[b]=c,!0},has(a,b){return a instanceof IDBTransaction&&("done"===b||"store"===b)||b in a}};function q(a){if(a instanceof IDBRequest)return function(a){let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("success",e),a.removeEventListener("error",f)},e=()=>{b(q(a.result)),d()},f=()=>{c(a.error),d()};a.addEventListener("success",e),a.addEventListener("error",f)});return b.then(b=>{b instanceof IDBCursor&&k.set(b,a)}).catch(()=>{}),o.set(b,a),b}(a);if(n.has(a))return n.get(a);let b=function(a){if("function"==typeof a){var b;return(b=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(b)?function(...a){return b.apply(r(this),a),q(k.get(this))}:function(...a){return q(b.apply(r(this),a))}:function(a,...c){let d=b.call(r(this),a,...c);return m.set(d,a.sort?a.sort():[a]),q(d)}}return(a instanceof IDBTransaction&&function(a){if(l.has(a))return;let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("complete",e),a.removeEventListener("error",f),a.removeEventListener("abort",f)},e=()=>{b(),d()},f=()=>{c(a.error||new DOMException("AbortError","AbortError")),d()};a.addEventListener("complete",e),a.addEventListener("error",f),a.addEventListener("abort",f)});l.set(a,b)}(a),h(a,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(a,p):a}(a);return b!==a&&(n.set(a,b),o.set(b,a)),b}let r=a=>o.get(a),s=["get","getKey","getAll","getAllKeys","count"],t=["put","add","delete","clear"],u=new Map;function v(a,b){if(!(a instanceof IDBDatabase&&!(b in a)&&"string"==typeof b))return;if(u.get(b))return u.get(b);let c=b.replace(/FromIndex$/,""),d=b!==c,e=t.includes(c);if(!(c in(d?IDBIndex:IDBObjectStore).prototype)||!(e||s.includes(c)))return;let f=async function(a,...b){let f=this.transaction(a,e?"readwrite":"readonly"),g=f.store;return d&&(g=g.index(b.shift())),(await Promise.all([g[c](...b),e&&f.done,]))[0]};return u.set(b,f),f}!function(a){p=a(p)}(a=>({...a,get:(b,c,d)=>v(b,c)||a.get(b,c,d),has:(b,c)=>!!v(b,c)||a.has(b,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(a){this.container=a}getPlatformInfoString(){let a=this.container.getProviders();return a.map(a=>{if(!x(a))return null;{let b=a.getImmediate();return`${b.library}/${b.version}`}}).filter(a=>a).join(" ")}}function x(a){let b=a.getComponent();return(null==b?void 0:b.type)==="VERSION"}let y="@firebase/app",z="0.7.32",A=new f.Yd("@firebase/app"),B="[DEFAULT]",C={[y]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,E=new Map;function F(a,b){try{a.container.addComponent(b)}catch(c){A.debug(`Component ${b.name} failed to register with FirebaseApp ${a.name}`,c)}}function G(a){let b=a.name;if(E.has(b))return A.debug(`There were multiple attempts to register component ${b}.`),!1;for(let c of(E.set(b,a),D.values()))F(c,a);return!0}function H(a,b){let c=a.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),a.container.getProvider(b)}let I=new g.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J{constructor(a,b,c){this._isDeleted=!1,this._options=Object.assign({},a),this._config=Object.assign({},b),this._name=b.name,this._automaticDataCollectionEnabled=b.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new e.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ let K="9.9.4";function L(a,b={}){if("object"!=typeof b){let c=b;b={name:c}}let d=Object.assign({name:B,automaticDataCollectionEnabled:!1},b),f=d.name;if("string"!=typeof f||!f)throw I.create("bad-app-name",{appName:String(f)});let h=D.get(f);if(h){if((0,g.vZ)(a,h.options)&&(0,g.vZ)(d,h.config))return h;throw I.create("duplicate-app",{appName:f})}let i=new e.H0(f);for(let j of E.values())i.addComponent(j);let k=new J(a,d,i);return D.set(f,k),k}function M(a=B){let b=D.get(a);if(!b)throw I.create("no-app",{appName:a});return b}function N(a,b,c){var d;let f=null!==(d=C[a])&& void 0!==d?d:a;c&&(f+=`-${c}`);let g=f.match(/\s|\//),h=b.match(/\s|\//);if(g||h){let i=[`Unable to register library "${f}" with version "${b}":`];g&&i.push(`library name "${f}" contains illegal characters (whitespace or "/")`),g&&h&&i.push("and"),h&&i.push(`version name "${b}" contains illegal characters (whitespace or "/")`),A.warn(i.join(" "));return}G(new e.wA(`${f}-version`,()=>({library:f,version:b}),"VERSION"))}let O="firebase-heartbeat-store",P=null;function Q(){return P||(P=(function(a,b,{blocked:c,upgrade:d,blocking:e,terminated:f}={}){let g=indexedDB.open(a,1),h=q(g);return d&&g.addEventListener("upgradeneeded",a=>{d(q(g.result),a.oldVersion,a.newVersion,q(g.transaction))}),c&&g.addEventListener("blocked",()=>c()),h.then(a=>{f&&a.addEventListener("close",()=>f()),e&&a.addEventListener("versionchange",()=>e())}).catch(()=>{}),h})("firebase-heartbeat-database",1,{upgrade:(a,b)=>{0===b&&a.createObjectStore(O)}}).catch(a=>{throw I.create("idb-open",{originalErrorMessage:a.message})})),P}async function R(a){var b;try{let c=await Q();return c.transaction(O).objectStore(O).get(T(a))}catch(d){if(d instanceof g.ZR)A.warn(d.message);else{let e=I.create("idb-get",{originalErrorMessage:null===(b=d)|| void 0===b?void 0:b.message});A.warn(e.message)}}}async function S(a,b){var c;try{let d=await Q(),e=d.transaction(O,"readwrite"),f=e.objectStore(O);return await f.put(b,T(a)),e.done}catch(h){if(h instanceof g.ZR)A.warn(h.message);else{let i=I.create("idb-set",{originalErrorMessage:null===(c=h)|| void 0===c?void 0:c.message});A.warn(i.message)}}}function T(a){return`${a.name}!${a.options.appId}`}class U{constructor(a){this.container=a,this._heartbeatsCache=null;let b=this.container.getProvider("app").getImmediate();this._storage=new X(b),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){let a=this.container.getProvider("platform-logger").getImmediate(),b=a.getPlatformInfoString(),c=V();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(a=>a.date===c))?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:b}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let b=new Date(a.date).valueOf(),c=Date.now();return c-b<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let a=V(),{heartbeatsToSend:b,unsentEntries:c}=W(this._heartbeatsCache.heartbeats),d=(0,g.L)(JSON.stringify({version:2,heartbeats:b}));return this._heartbeatsCache.lastSentHeartbeatDate=a,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function V(){let a=new Date;return a.toISOString().substring(0,10)}function W(a,b=1024){let c=[],d=a.slice();for(let e of a){let f=c.find(a=>a.agent===e.agent);if(f){if(f.dates.push(e.date),Y(c)>b){f.dates.pop();break}}else if(c.push({agent:e.agent,dates:[e.date]}),Y(c)>b){c.pop();break}d=d.slice(1)}return{heartbeatsToSend:c,unsentEntries:d}}class X{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,g.hl)()&&(0,g.eu)().then(()=>!0).catch(()=>!1)}async read(){let a=await this._canUseIndexedDBPromise;if(!a)return{heartbeats:[]};{let b=await R(this.app);return b||{heartbeats:[]}}}async overwrite(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:a.heartbeats})}}async add(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:[...d.heartbeats,...a.heartbeats]})}}}function Y(a){return(0,g.L)(JSON.stringify({version:2,heartbeats:a})).length}G(new e.wA("platform-logger",a=>new w(a),"PRIVATE")),G(new e.wA("heartbeat",a=>new U(a),"PRIVATE")),N(y,z,""),N(y,z,"esm2017"),N("fire-js","")},8463:function(a,b,c){"use strict";c.d(b,{H0:function(){return j},wA:function(){return e}});var d=c(4444);class e{constructor(a,b,c){this.name=a,this.instanceFactory=b,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class g{constructor(a,b){this.name=a,this.container=b,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){let b=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(b)){let c=new d.BH;if(this.instancesDeferred.set(b,c),this.isInitialized(b)||this.shouldAutoInitialize())try{let e=this.getOrInitializeService({instanceIdentifier:b});e&&c.resolve(e)}catch(f){}}return this.instancesDeferred.get(b).promise}getImmediate(a){var b;let c=this.normalizeInstanceIdentifier(null==a?void 0:a.identifier),d=null!==(b=null==a?void 0:a.optional)&& void 0!==b&&b;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(e){if(d)return null;throw e}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,this.shouldAutoInitialize()){if(i(a))try{this.getOrInitializeService({instanceIdentifier:f})}catch(b){}for(let[c,d]of this.instancesDeferred.entries()){let e=this.normalizeInstanceIdentifier(c);try{let g=this.getOrInitializeService({instanceIdentifier:e});d.resolve(g)}catch(h){}}}}clearInstance(a=f){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){let a=Array.from(this.instances.values());await Promise.all([...a.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...a.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return null!=this.component}isInitialized(a=f){return this.instances.has(a)}getOptions(a=f){return this.instancesOptions.get(a)||{}}initialize(a={}){let{options:b={}}=a,c=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let d=this.getOrInitializeService({instanceIdentifier:c,options:b});for(let[e,f]of this.instancesDeferred.entries()){let g=this.normalizeInstanceIdentifier(e);c===g&&f.resolve(d)}return d}onInit(a,b){var c;let d=this.normalizeInstanceIdentifier(b),e=null!==(c=this.onInitCallbacks.get(d))&& void 0!==c?c:new Set;e.add(a),this.onInitCallbacks.set(d,e);let f=this.instances.get(d);return f&&a(f,d),()=>{e.delete(a)}}invokeOnInitCallbacks(a,b){let c=this.onInitCallbacks.get(b);if(c)for(let d of c)try{d(a,b)}catch(e){}}getOrInitializeService({instanceIdentifier:a,options:b={}}){let c=this.instances.get(a);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:h(a),options:b}),this.instances.set(a,c),this.instancesOptions.set(a,b),this.invokeOnInitCallbacks(c,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,c)}catch(d){}return c||null}normalizeInstanceIdentifier(a=f){return this.component?this.component.multipleInstances?a:f:a}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function h(a){return a===f?void 0:a}function i(a){return"EAGER"===a.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class j{constructor(a){this.name=a,this.providers=new Map}addComponent(a){let b=this.getProvider(a.name);if(b.isComponentSet())throw Error(`Component ${a.name} has already been registered with ${this.name}`);b.setComponent(a)}addOrOverwriteComponent(a){let b=this.getProvider(a.name);b.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);let b=new g(a,this);return this.providers.set(a,b),b}getProviders(){return Array.from(this.providers.values())}}},3333:function(a,b,c){"use strict";var d,e;c.d(b,{Yd:function(){return j},in:function(){return d}});(e=d||(d={}))[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let f={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},g=d.INFO,h={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},i=(a,b,...c)=>{if(b<a.logLevel)return;let d=new Date().toISOString(),e=h[b];if(e)console[e](`[${d}]  ${a.name}:`,...c);else throw Error(`Attempted to log a message with an invalid logType (value: ${b})`)};class j{constructor(a){this.name=a,this._logLevel=g,this._logHandler=i,this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in d))throw TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel="string"==typeof a?f[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!=typeof a)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...a),this._logHandler(this,d.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...a),this._logHandler(this,d.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,d.INFO,...a),this._logHandler(this,d.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,d.WARN,...a),this._logHandler(this,d.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...a),this._logHandler(this,d.ERROR,...a)}}},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])