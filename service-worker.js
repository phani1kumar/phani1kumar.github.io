/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/bower_components/URL/url.js","289ed9864b9b97d74ce3ed991d116dd5"],["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","74f283cd62b93889924d828fd7c17f4d"],["/bower_components/app-layout/app-drawer/app-drawer.html","7b165493040d53eca129c6754f470d2d"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","82c98805a7b8dd3adc56aff5602186cb"],["/bower_components/app-layout/app-header/app-header.html","32a53af03ab9bc3283eb6cc4f3d53da2"],["/bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","3626af95d9630a44549b425d08be6062"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","417244d6a3ce8a61adf75333f3c61601"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","fad90269cea2f83e1f4df1950bb2b053"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","53b76bbbe9355ae85a1f8ca7b0e451db"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-scroll-position/app-scroll-position.html","891305cb3d5a64aed3e8f5094cb7f074"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","a47ecab24082246eb44fdea323923a70"],["/bower_components/app-layout/helpers/helpers.html","622fdf24cb1be262a74da1da959c9085"],["/bower_components/app-route/app-location.html","812c2961002e76d8ce7e1fe4ba404946"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","c4962d6ce8a0f98b6a4b438c031f7785"],["/bower_components/custom-elements/custom-elements.min.js","02d45d04e8dd492295348a9a1389d5c0"],["/bower_components/es6-promise/dist/es6-promise.auto.min.js","e811120513b7baa01b5b752fa11a123f"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/html-imports/gulpfile.js","452651bbb120d6a85455489806309632"],["/bower_components/html-imports/html-imports.min.js","0bc0d6654661d3e14fd1a856c0994e35"],["/bower_components/html-imports/src/Loader.js","34f52952510c9257b91d32c904a10774"],["/bower_components/html-imports/src/Observer.js","79941816b6e8cec5062222febcae5a65"],["/bower_components/html-imports/src/base.js","255986bb17f39184e60ad741fd8b092b"],["/bower_components/html-imports/src/boot.js","37f4814df368ef8431df59473a8314e5"],["/bower_components/html-imports/src/dynamic.js","f9f8a1c55d78a8561c7de48d3242aac3"],["/bower_components/html-imports/src/html-imports.js","bd54cd15c484d24711756fa59235e7f1"],["/bower_components/html-imports/src/importer.js","aca7d88f2a68540c1bdebcb14b4841b2"],["/bower_components/html-imports/src/module.js","c425dd815f4da926c5d8722c1c3b9b3d"],["/bower_components/html-imports/src/parser.js","45a7ca1e18f83fb4f46719dfc9a2337d"],["/bower_components/html-imports/src/path.js","bfbe31c4b316fdf2b6eb3cb87f493f9f"],["/bower_components/html-imports/src/xhr.js","0d556c29479fd43075e5b903736dd458"],["/bower_components/html-imports/tests/html/HTMLImports.html","752d9abe955e8f671d778f10b36e0c8e"],["/bower_components/html-imports/tests/html/HTMLImportsLoaded-native.html","05702c77c9cba4cef260cd729c9b65ec"],["/bower_components/html-imports/tests/html/base/load-base.html","88d29a4c0172ef302f2f766eee2efd1c"],["/bower_components/html-imports/tests/html/csp.html","dff6465474cf2cdf152b8ced16a1f987"],["/bower_components/html-imports/tests/html/csp.js","cd6d6bdf1113bcb08b7f4e27df8ecc60"],["/bower_components/html-imports/tests/html/currentScript.html","c6d752100d5d96d948f2440377cd214a"],["/bower_components/html-imports/tests/html/customevent-detail.html","d1ee9723db75dd32ed8fb88c8bcdb34a"],["/bower_components/html-imports/tests/html/dedupe.html","8f2b2cf79f856401ca6e8fa11f326bd2"],["/bower_components/html-imports/tests/html/dynamic-all-imports-detail.html","b26fdb0cff6d1a390e10f11e439d1159"],["/bower_components/html-imports/tests/html/dynamic-elements.html","18968f122e78c2be36254495fdc9517c"],["/bower_components/html-imports/tests/html/dynamic-errors-detail.html","e1ebe9e969df9ade6f4f414dd37a02c6"],["/bower_components/html-imports/tests/html/dynamic.html","a20734f69c09950e26416fc3c44ccc06"],["/bower_components/html-imports/tests/html/encoding.html","baca50fc320b4e2d4ef8e314b9217559"],["/bower_components/html-imports/tests/html/imports/abs.html","4c60bfd9a8fa173d2ecde9014a9e4265"],["/bower_components/html-imports/tests/html/imports/csp-import-1.html","4f792b91106b90771b1bebe729659802"],["/bower_components/html-imports/tests/html/imports/csp-import-2.html","01cc8067ffb0a8d73fc7b6c3849cc863"],["/bower_components/html-imports/tests/html/imports/csp-script-1.js","d58792e9767cd1fb92a51822526282b2"],["/bower_components/html-imports/tests/html/imports/csp-script-2.js","7e4c13750c70a92efacbf46b21b682b2"],["/bower_components/html-imports/tests/html/imports/current-script.js","8dcca1c20c68be009d739a046ff06b42"],["/bower_components/html-imports/tests/html/imports/dedupe.html","a2e55d5df8d73ef027d94325ada351bb"],["/bower_components/html-imports/tests/html/imports/dynamic-elements-import.html","8a99861beefc88b6e415c08d6b758b72"],["/bower_components/html-imports/tests/html/imports/encoding-import.html","04cf3cbc807cad74142097be95157fd4"],["/bower_components/html-imports/tests/html/imports/external-script.js","2842e3a31752db8ebdc0eb05dd74360f"],["/bower_components/html-imports/tests/html/imports/import-1-1.html","4cb5c95a260ba442aa136133d4359722"],["/bower_components/html-imports/tests/html/imports/import-1-2.html","731e5957279241df401c6b4c1bcb63fb"],["/bower_components/html-imports/tests/html/imports/import-1-3.html","a9e8ea3a3b19cab623d11534824a9aaa"],["/bower_components/html-imports/tests/html/imports/import-1.html","dba14812a4f2a5cb0c44c5a8c03278d9"],["/bower_components/html-imports/tests/html/imports/load-1.html","7b4c53d472548430910bc7f63951fec2"],["/bower_components/html-imports/tests/html/imports/load-2.html","9757fbd2367972568c6fea12e550ab9d"],["/bower_components/html-imports/tests/html/imports/load-a.html","3d3b14f6f68afad5fb546c4cdc3d278a"],["/bower_components/html-imports/tests/html/imports/load-b.html","8634291a45e23b4e0afe3b1450976023"],["/bower_components/html-imports/tests/html/imports/load-c.html","a6bf75a43499c25e4508a9c03014bc4b"],["/bower_components/html-imports/tests/html/imports/load-d.html","9a1cdeb73f0d3ed156385a72b94790be"],["/bower_components/html-imports/tests/html/imports/load-empty-async.html","086707e4369f60afedcafb16050a7618"],["/bower_components/html-imports/tests/html/imports/load-empty.html","086707e4369f60afedcafb16050a7618"],["/bower_components/html-imports/tests/html/imports/parsed-import-1.html","a44d89c253897f5e2de30852de814744"],["/bower_components/html-imports/tests/html/imports/parsed-import-2.html","851e2e9813c9d0387350e7ca97098b15"],["/bower_components/html-imports/tests/html/imports/script-1.html","61ebf0da45b6097adb49b28cf16b5c7b"],["/bower_components/html-imports/tests/html/imports/script-2.html","4e7ffd279c50525cd62a5a692f249ae1"],["/bower_components/html-imports/tests/html/imports/sheet1.css","2f295e60dcd56313a5fce68eb92f2f9f"],["/bower_components/html-imports/tests/html/imports/sheet2.css","ef0bf743950baa492e740561bff5a1fc"],["/bower_components/html-imports/tests/html/imports/sheet3.css","0feb8efa25251e9c892e9c8016107845"],["/bower_components/html-imports/tests/html/imports/sheet4.css","05a63ce7befb49e26afdc54c98cf7b65"],["/bower_components/html-imports/tests/html/imports/style-elements-import.html","4e0874a265d550c4ad7716db2597b4e5"],["/bower_components/html-imports/tests/html/imports/style-links-import.html","01efb9354c00353ac4169423c21eb802"],["/bower_components/html-imports/tests/html/imports/style-paths-import.html","8a457198b106363c25dc02d729f9e449"],["/bower_components/html-imports/tests/html/imports/styles.css","de6ab0f4af57bb1f173562d1af9d4a8f"],["/bower_components/html-imports/tests/html/imports/template-import.html","e988dbd443eb25a11a1fdb0ac0531b54"],["/bower_components/html-imports/tests/html/load-404.html","b0ed4a4fcf31e87054f3b7eedbd3db1e"],["/bower_components/html-imports/tests/html/load-empty.html","fe945916d7e1bfa40d12ba33c6fc7d1c"],["/bower_components/html-imports/tests/html/load-loop.html","9527555ebf8639d1ebb79fb1c754eab3"],["/bower_components/html-imports/tests/html/load.html","89c01ba071d18dbff26ce432727ff439"],["/bower_components/html-imports/tests/html/parser.html","fd893c64baa1a6c35b581f0b60ddbe65"],["/bower_components/html-imports/tests/html/redirect/imports/load.html","7b401ff1421a8bc27966e2120e2bb69c"],["/bower_components/html-imports/tests/html/redirect/imports/redirect/load.html","43d00e68a5effc801cb631f86d522e91"],["/bower_components/html-imports/tests/html/redirect/load-redirect.html","7f114151c17b5bd08bdb94bd5c249214"],["/bower_components/html-imports/tests/html/style-links.html","f27da26c9911a1032a686fea32dd0f61"],["/bower_components/html-imports/tests/html/style-paths.html","db12ae5de9e93fcf8eaf5a9508c09334"],["/bower_components/html-imports/tests/runner.html","627c50a954c470ae01712a4eb939c332"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","f447b9f3ace32edea2bb709cb00d5231"],["/bower_components/iron-flex-layout/iron-flex-layout.html","6caccff4b25aaa58046ded8b25e40228"],["/bower_components/iron-icon/iron-icon.html","ee255fe1244b452fb49487e45c25f583"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","98daee17e1a5111dada5e78b71555179"],["/bower_components/iron-image/iron-image.html","f5fbb96fb99392abee5832550b5dcc14"],["/bower_components/iron-location/iron-location.html","f9cc517a1e3fad60207f91d1cf30b282"],["/bower_components/iron-location/iron-query-params.html","0fa51c76df2f675b425ddb8024d6908c"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","d3f30152b76f2fa27e02739a99060a29"],["/bower_components/iron-meta/iron-meta.html","b0dd584cc0fb40593f54a303cf6cea51"],["/bower_components/iron-pages/iron-pages.html","ca437b69308022a4e2b63751006fcdf9"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","80b965510d729f475edfbc0e5444a748"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","b880f68d8e3bb2dd15b80ecae41101d9"],["/bower_components/iron-selector/iron-multi-selectable.html","9bcfb042e542dbc1a7d4d2a2fec2c315"],["/bower_components/iron-selector/iron-selectable.html","3b1e76ffe8758f66ae9b7add9883aa9f"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","285991a9e3841cc2ead15f1ee3801026"],["/bower_components/paper-fab/paper-fab.html","f9f575b267a2415a8006d789f89e3d7b"],["/bower_components/paper-icon-button/paper-icon-button.html","992d080512b46e2c9355b89b2fb4bb27"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-shared-styles.html","dacdcb506be7c94c6f6d6abb599126cb"],["/bower_components/paper-item/paper-item.html","b604d0c4dad3e06716d35c5bbdd8f641"],["/bower_components/paper-listbox/paper-listbox.html","9bfe64a46a532800c7711a375915e0b8"],["/bower_components/paper-material/paper-material-shared-styles.html","634cd7ac6b379c308509537aeb854c35"],["/bower_components/paper-ripple/paper-ripple.html","fd9fc57855dc779cea098b4ee15fbb3f"],["/bower_components/paper-styles/color.html","82dbec2ec9a01e6afafde0d85fd40d6f"],["/bower_components/paper-styles/default-theme.html","0b2cec855eb353d63d8ad6f31b2b5ab6"],["/bower_components/paper-styles/shadow.html","2711fa1b87c8add6ca441be99dee9b9b"],["/bower_components/paper-styles/typography.html","40f99dbf49af5dea9a4ff2bb35659a39"],["/bower_components/polymer/polymer-element.html","9e641ad9a6c9e68723657165be9f2888"],["/bower_components/polymer/polymer-legacy.html","17f353ff211096994499cc35fc161309"],["/bower_components/polymer/polymer.html","b9394a0c7dcb461f63792202c8a4484e"],["/bower_components/polymer/src/attributes/attributes.html","0c1fa82b9e8096ffbb5bbafc1724a944"],["/bower_components/polymer/src/elements/element.html","7c51c376d8eb897d5154e4b945ff930d"],["/bower_components/polymer/src/elements/legacy-element.html","585b88dbfa6772ee16cb24e395c0ffb1"],["/bower_components/polymer/src/events/event-listeners.html","3f6d2d01fa9fdaa0a2f9170aa22e1343"],["/bower_components/polymer/src/events/gesture-event-listeners.html","4649418eaf7e399f1ac1b7df22c229fb"],["/bower_components/polymer/src/legacy/class.html","7c667c0fc811af70375656f94d89697c"],["/bower_components/polymer/src/legacy/dom-module.html","f58a02a3825bcf0a3a204fb0867d2a28"],["/bower_components/polymer/src/legacy/logging.html","87ddd38befed1176470cd50e1fd0d1a1"],["/bower_components/polymer/src/legacy/polymer-fn.html","8a02028074bd868594f01df2fb9ab1a0"],["/bower_components/polymer/src/properties/property-accessors.html","405aa7c48e9590ba46104d0420a2410b"],["/bower_components/polymer/src/properties/property-effects.html","01dcb214260d50468f2447e75701a1f1"],["/bower_components/polymer/src/styling/custom-style.html","ddb9ca0ea78ddedffcf022bd6b7a8e47"],["/bower_components/polymer/src/styling/style-gather.html","d3a73e92539d76d9fb0ce7866d3c777b"],["/bower_components/polymer/src/styling/style-util.html","a6893af7742c5b1364aeee93b6f6a4db"],["/bower_components/polymer/src/template/annotations.html","0b85a890410bda35e229895ff174dcc2"],["/bower_components/polymer/src/template/resolve-url.html","efe9a3fc5e8168a168dccd660d23e7b0"],["/bower_components/polymer/src/template/template-stamp.html","476aaedf1a309e80b6eec19e1f31bb02"],["/bower_components/polymer/src/templatizer/array-selector.html","d298e71c48df82e82d77468b1fa1fdd4"],["/bower_components/polymer/src/templatizer/dom-bind.html","733c2fac6f95645284792f19ecf6d254"],["/bower_components/polymer/src/templatizer/dom-if.html","5cb2f91a0afb97b1a7666df1168c8989"],["/bower_components/polymer/src/templatizer/dom-repeat.html","463bd2062b1f17c5d4c4ba9fda0128d0"],["/bower_components/polymer/src/templatizer/templatizer.html","4716500ac87d475647652eab646a5be1"],["/bower_components/polymer/src/utils/array-splice.html","f41c84e515583941bf745bbf7235ca29"],["/bower_components/polymer/src/utils/async-render.html","6597c934e65d8c01006c9c40446a3876"],["/bower_components/polymer/src/utils/async.html","b362b265facb1573e25e5e7ac1df012d"],["/bower_components/polymer/src/utils/boot.html","392f3b590cdf59b2b109ee87aae044d8"],["/bower_components/polymer/src/utils/case-map.html","ea4f98507b9293ca93fb50fae1795a60"],["/bower_components/polymer/src/utils/debounce.html","f39ec95e50cb480d81505fc2a79e9227"],["/bower_components/polymer/src/utils/path.html","e7621cc68adc30eaafba80463170c55f"],["/bower_components/polymer/src/utils/polymer.dom.html","d3a9cdf3f8a07e91d0aec43f93b7e6f0"],["/bower_components/polymer/src/utils/unresolved.html","9f1ef6534253f280f12c8de1e7c00697"],["/bower_components/polymer/src/utils/utils.html","749e5cbd184dfe4401dd2c9245bcc783"],["/bower_components/s-html/s-html.html","c77d1095e3e91e5812772e3e843a0091"],["/bower_components/shadycss/shadycss.min.js","f578830d47a04213e25c53b7e7245454"],["/bower_components/shadydom/shadydom.min.js","e89105ea902d3ede3737208c77904925"],["/bower_components/template/template.js","316862d34c1078c397aec05758147bfa"],["/bower_components/webcomponents-platform/webcomponents-platform.js","7eb51db16cd0881e3d4ce7955b053a2e"],["/bower_components/webcomponentsjs/src/post-polyfill.js","399b414f4ff6a6c788f24762260720ab"],["/bower_components/webcomponentsjs/src/pre-polyfill.js","afd1d7fbebd40ce25e8bdf06029626f7"],["/bower_components/webcomponentsjs/src/unresolved.js","92cdc8f23b80a05e187aca3c116a8050"],["/bower_components/webcomponentsjs/webcomponents-lite.js","388f0ed9715fa5c200615ae26ba24747"],["/images/phanui/PASS_Logo.png","cf8870a2bf3dbc87a44ab976b76f869b"],["/images/phanui/PhAnuiBegining.jpg","c9791a232f3321462ad371ee81261f5f"],["/images/phanui/logo/favicon.png","8274bedbd49196d63df7b0a1096a0ea0"],["/images/phanui/logo/phanui_logo_128x58.png","6d753485db4733b6e585122624768c99"],["/images/phanui/logo/phanui_logo_192x86.png","e3beb9211312e0b5cb7ebfe36210abf2"],["/images/phanui/logo/phanui_logo_384x172.png","4cabf8c06766f8ce45225671821a3e06"],["/images/phanui/shakehand_2.png","c34499dc62b1153e5e3446ec8afff443"],["/images/ruai/RuIntroduction.png","742bac81c882befb610d38a289212744"],["/images/ruai/SunSigns.png","055a38c2b454136074315aeb72aa6eb0"],["/images/ruai/Wisdom.jpg","722d534ccd17874933bbd4067530a7e8"],["/images/ruai/workplace.jpg","d1d235c621458fcc1140688abf04c75a"],["/index.html","35ba14800737393570f0ba20de56bf72"],["/manifest.json","2b19cda1cdb2ae3b3d7eabb07fe212f8"],["/src/article-detail.html","cf00a4d8267d769efde32f20a2433d81"],["/src/article-headline.html","2b0190de93f45896549c6083ca2752a9"],["/src/lazy-resources.html","60e89d1bc2312d19bd8b44c29e02237e"],["/src/phanui-app.html","45ab1995105aa76bd5615a6f26047bad"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!.*\\.html$|\\/data\\/).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||d.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||d.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||d.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||d.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);l=l?l.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),d.preCacheItems=d.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var l,d=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){return t?t:o.fetchAndCache(e,n)})})}var o=e("../helpers");t.exports=r},{"../helpers":1}],8:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e)})}var o=e("../helpers");t.exports=r},{"../helpers":1}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var o,s,a=[];if(c){var u=new Promise(function(n){o=setTimeout(function(){t.match(e).then(function(e){e&&n(e)})},1e3*c)});a.push(u)}var f=i.fetchAndCache(e,n).then(function(e){if(o&&clearTimeout(o),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return a.push(f),Promise.race(a)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e){for(var t,n=[],r=0,o=0,i="";null!=(t=x.exec(e));){var c=t[0],s=t[1],a=t.index;if(i+=e.slice(o,a),o=a+c.length,s)i+=s[1];else{var f=e[o],h=t[2],p=t[3],l=t[4],d=t[5],g=t[6],m=t[7];i&&(n.push(i),i="");var v=null!=h&&null!=f&&f!==h,w="+"===g||"*"===g,y="?"===g||"*"===g,b=t[2]||"/",E=l||d||(m?".*":"[^"+b+"]+?");n.push({name:p||r++,prefix:h||"",delimiter:b,optional:y,repeat:w,partial:v,asterisk:!!m,pattern:u(E)})}}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function o(e){return s(r(e))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){for(var o=r(e),i=g(o,n),c=0;c<o.length;c++)"string"!=typeof o[c]&&t.push(o[c]);return f(i,t)}function g(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,o="",i=e[e.length-1],c="string"==typeof i&&/\/$/.test(i),s=0;s<e.length;s++){var u=e[s];if("string"==typeof u)o+=a(u);else{var f=a(u.prefix),p="(?:"+u.pattern+")";u.repeat&&(p+="(?:"+f+p+")*"),p=u.optional?u.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")",o+=p}}return n||(o=(c?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&c?"":"(?=\\/|$)",new RegExp("^"+o,h(t))}function m(e,t,n){return t=t||[],v(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=g;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/\/bower_components\/.*\/.*/, toolbox.cacheFirst, {"cache":{"maxAgeSeconds":864000,"maxEntries":400,"name":"elements-cache"}});
toolbox.router.get(/\/src\/.*\.html/, toolbox.cacheFirst, {"cache":{"maxAgeSeconds":86400,"maxEntries":50,"name":"src-elements-cache"}});
toolbox.router.get(/\/data\/images\/.*/, toolbox.cacheFirst, {"cache":{"maxAgeSeconds":864000,"maxEntries":200,"name":"items-cache"}});
toolbox.router.get(/lh3\.googleusercontent\.com\/.*/, toolbox.cacheFirst, {"cache":{"maxEntries":200,"name":"images-cache"}});
toolbox.router.get(/\/data\/.*json/, toolbox.fastest, {"cache":{"maxAgeSeconds":864000,"maxEntries":100,"name":"data-cache"}});




