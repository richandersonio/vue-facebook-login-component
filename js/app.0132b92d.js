(function(t){function e(e){for(var o,a,i=e[0],c=e[1],d=e[2],p=0,u=[];p<i.length;p++)a=i[p],s[a]&&u.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="./";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18a4":function(t,e,n){},"40fd":function(t){t.exports={name:"vue-facebook-login-component",version:"1.0.0",description:"A fully customizable component for Facebook login integration",author:"Adi Sahar",private:!1,main:"dist",scripts:{test:'echo "Error: no test specified" && exit 1',build:"node_modules/.bin/webpack --config webpack.config.js",start:"node_modules/.bin/webpack --config webpack.config.js --watch",link:"cd ./docs && npm link vue-facebook-login-component",unlink:"npm unlink","unlink-docs":"cd ./docs && npm unlink --no-save vue-facebook-login-component",predocs:"npm link && npm run link",docs:"npm run serve --prefix ./docs",deploy:"cd ./docs && npm run deploy","deploy-first":"cd ./docs && npm run deploy-first","prerelease-patch":"npm run build && npm version patch","prerelease-minor":"npm run build && npm version minor","prerelease-major":"npm run build && npm version major","postrelease-patch":"git push --follow-tags","postrelease-minor":"git push --follow-tags","postrelease-major":"git push --follow-tags","release-patch":"npm publish","release-minor":"npm publish","release-major":"npm publish"},repository:{type:"git",url:"https://github.com/adi518/vue-facebook-login-component"},bugs:{url:"https://github.com/adi518/vue-facebook-login-component/issues"},peerDependencies:{vue:"^2.x"},devDependencies:{"@babel/core":"^7.0.0-beta.51","@babel/helper-module-imports":"^7.0.0-beta.54","@babel/plugin-syntax-jsx":"^7.0.0-beta.54","@babel/preset-env":"^7.0.0-beta.54","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^8.0.0-beta.4","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-vue-jsx":"^4.0.1","babel-polyfill":"^6.26.0","css-loader":"^1.0.0",eslint:"^4.19.1","eslint-config-standard":"^11.0.0","eslint-plugin-import":"^2.12.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.8.0","eslint-plugin-standard":"^3.1.0","node-sass":"^4.9.2","sass-loader":"^7.0.3","url-loader":"^1.0.1","vue-loader":"^15.2.4","vue-style-loader":"^4.1.0","vue-template-compiler":"^2.5.16",webpack:"^4.12.0","webpack-bundle-analyzer":"^2.13.1","webpack-cli":"^3.0.8"},dependencies:{}}},"490c":function(t,e,n){"use strict";var o=n("6ab6"),s=n.n(o);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-menu",{attrs:{routes:t.routes,items:"2"}},[n("template",{slot:"item-2"},[n("v-show-at",{attrs:{"no-match":""}},[n("span",[n("a",{staticClass:"github-button",attrs:{href:t.pkg.repository.url,"data-icon":"octicon-star","data-show-count":"true","aria-label":"Star adi518/vue-facebook-login-component on GitHub"}},[t._v("Star")])])])],1)],2),n("router-view")],1)},r=[],a=n("40fd"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["v-menu","clearfix",t.classes]},[n("div",{staticClass:"token",on:{"&touchstart":function(e){return t.toggle(e)},click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggle(e)}}}),n("ul",{ref:"menu",staticClass:"menu",style:t.menuStyle,on:{"&touchstart":function(t){}}},[t._l(t.computedRoutes,function(e,o){return n("li",{key:o},[e.name?n("router-link",{attrs:{to:{name:e.name}},domProps:{innerHTML:t._s(e.name)}}):t._e()],1)}),t._l(t.computedItems,function(e,o){return[t.$slots["item-"+(o+1)]?n("li",{key:"item-"+o},[t._t("item-"+(o+1))],2):t._e()]}),t.$slots["last-child"]?n("li",[t._t("last-child")],2):t._e()],2)])},c=[],d=(n("6762"),n("2fdb"),n("c5f6"),n("1c4c"),n("3846"),n("f60b")),l={name:"VMenu",props:{items:{type:String,default:"0"},routes:{type:Array,default:function(){return[]}},menuStyle:{type:Object,default:function(){return{backgroundColor:"rgba(28, 40, 76, 0.8)"}}}},data:function(){return{flags:{open:!1}}},watch:{"flags.open":function(t){this.emitToggle(t)}},mounted:function(){document.addEventListener("click",this.dismiss),document.addEventListener("touchstart",this.dismiss),window.addEventListener("resize",this.handleResize)},destroyed:function(){document.removeEventListener("click",this.dismiss),document.removeEventListener("touchstart",this.dismiss),window.removeEventListener("resize",this.handleResize)},computed:{classes:function(){return{"is-open":this.flags.open}},computedRoutes:function(){return Object(d["flattenRoutes"])(this.routes)},computedItems:function(){return Array.from(Array(Number(this.items))).map(function(t,e){return e+1})}},methods:{toggle:function(t){[!0,!1].includes(t)?this.flags.open=t:this.flags.open=!this.flags.open,this.$emit("toggle",this.flags.open)},dismiss:function(){this.toggle(!1)},emitToggle:function(t){this.$emit(t?"open":"close",{width:this.getWidth()})},handleResize:function(){this.emitToggle(this.flags.open)},getWidth:function(){return this.$refs.menu.getBoundingClientRect().width}}},p=l,u=(n("72ae"),n("2877")),g=Object(u["a"])(p,i,c,!1,null,"122f40b6",null),m=g.exports,h=n("dc27"),b=n.n(h),f=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs"},[n("div",{staticClass:"docs-container docs-container--has-jumbotron",style:{height:t.breakpoint.innerHeight+"px"}},[n("div",{staticClass:"docs-jumbotron container",class:t.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("a",{staticClass:"docs-github",attrs:{href:t.pkg.repository.url,target:"_blank"}},[n("img",{attrs:{src:"octocat.png",alt:"Go to GitHub"}})]),n("div",{staticClass:"docs-clearfix text-center"},[n("v-hide-at",{attrs:{"no-match":""}},[n("img",{staticClass:"docs-vue-logo mb-10",attrs:{src:t.assets.vueLogo}})]),n("h1",[t._v("Facebook Login")]),n("p",{staticClass:"docs-tagline text-center mb-20"},[t._v("\n          Integrate Facebook Login and "),t.breakpoint.noMatch?n("br"):t._e(),t._v(" access the benefits quickly and easily.\n        ")])],1),n("v-facebook-login",{staticClass:"docs-facebook-button mx-auto mb-35",attrs:{"app-id":t.facebook.appId},on:{"sdk-init":t.handleSdkInit,connect:t.handleConnect,logout:t.handleLogout,click:t.handleClick},model:{value:t.facebook.model,callback:function(e){t.$set(t.facebook,"model",e)},expression:"facebook.model"}}),n("div",{staticClass:"docs-user mx-auto",class:t.breakpoint.noMatch?null:"mb-35"},[n("div",{staticClass:"docs-user-picture",class:{"docs-user-picture--is-visible":t.computed.picture},style:{backgroundImage:"url("+(t.connected&&t.computed.picture||"")}}),t.connected&&t.flags.nopicture?[t._v(t._s(t.computed.name))]:t._e(),t.disconnected?n("div",{staticClass:"docs-user-state-placeholder"},[t._v("Disconnected")]):t._e(),n("div",{staticClass:"docs-user-state-indicator",class:{"docs-user-state-indicator--green":t.connected}})],2),n("v-hide-at",{attrs:{"no-match":""}},[n("div",{staticClass:"d-flex justify-content-center"},[n("span",[n("a",{staticClass:"github-button",attrs:{href:t.pkg.repository.url,"data-icon":"octicon-star","data-show-count":"true","aria-label":"Star adi518/vue-facebook-login-component on GitHub"}},[t._v("Star")])])])]),n("div",{staticClass:"docs-version"},[t._v(t._s(t.pkg.version)+" - "+t._s(t.docspkg.version))]),n("v-a",{staticClass:"docs-fixed-anchor",attrs:{"scroll-to":t.$refs.docs}},[t._v("Install, Examples & Documentation")])],1)]),n("div",{ref:"docs",staticClass:"docs-container"},[n("div",{staticClass:"container docs-clearfix",class:t.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("div",{staticClass:"docs-markdown",domProps:{innerHTML:t._s(t.markdowns.readme)}})])]),n("footer",{staticClass:"docs-footer"},[n("div",{staticClass:"container",class:t.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[t._m(0)])]),n("v-breakpoint",{model:{value:t.breakpoint,callback:function(e){t.breakpoint=e},expression:"breakpoint"}})],1)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-credit"},[n("span",{staticClass:"d-flex"},[t._v("Made by")]),n("div",{staticClass:"d-flex"},[n("a",{staticClass:"docs-credit-anchor",attrs:{href:"https://github.com/adi518",target:"_blank"}},[t._v("🦊 @adi518")]),n("a",{staticClass:"docs-credit-anchor",attrs:{href:"https://github.com/iliran11",target:"_blank"}},[t._v("🐙 @iliran11")])])])}],y=(n("7f7f"),n("c197")),w=n.n(y),S=n("3637"),_=n.n(S),x=n("6d76"),C=n.n(x),j=n("c3cc"),L=n.n(j),F=n("9224"),O=n("eceb"),B=n.n(O),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"v-a",attrs:{href:t.href,target:t.computedTarget,tabindex:t.tabindex},on:{click:t.handleClick}},[t._t("default")],2)},E=[],D=n("c93e"),P={name:"VA",props:{name:{type:String,default:""},href:{type:String,default:""},tabindex:{type:String,default:""},refs:{type:Object,default:function(){return{}}},scrollTo:{type:[String,Element],default:""},target:{type:String,default:"_blank"},prevent:{type:Boolean,default:!1},static:{type:Boolean,default:!1}},computed:{computedTarget:function(){if(!this.scrollTo)return this.target}},methods:{handleClick:function(t){(this.prevent||this.scrollTo||this.static)&&t.preventDefault(),this.scrollTo&&this.$scrollTo(this.scrollTo),this.$emit("click",{href:this.href})},getElementByRef:function(t,e){e=e||this.$refs;var n=!e;if(!n){var o=e[t];return o instanceof Element?o:e[t]&&(o=e[t].el,o instanceof Element)?o:(console.error('[getElementByRef warn]: No such ref as "'.concat(t,'".')),null)}console.error("[getElementByRef warn]: No refs found.")},$scrollTo:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=t instanceof Element?t:this.getElementByRef(t,this.refs),e&&e.scrollIntoView(Object(D["a"])({behavior:"smooth",block:"start"},n))}}},V=P,M=Object(u["a"])(V,T,E,!1,null,null,null),$=M.exports,A={name:"Docs",components:{VA:$,VHideAt:h["VHideAt"],VBreakpoint:b.a,VFacebookLogin:C.a},data:function(){return{pkg:a,docspkg:F,assets:{vueLogo:L.a},markdowns:{readme:B.a},facebook:{FB:{},model:{},appId:"2146252248983683"},flags:{nopicture:!1},user:{},breakpoint:new h["Model"]}},mounted:function(){window.setTimeout(w.a.highlightAll)},computed:{computed:function(){var t=this.user.name,e=_()(this.user,"picture.data.url").safeString;return{name:t,picture:e}},connected:function(){return this.facebook.model.connected},disconnected:function(){return!this.connected}},methods:{getUserData:function(){var t=this,e=this.facebook.FB.api;e("/me",{fields:"id, name"},function(n){t.user=n,e("".concat(t.user.id,"/picture?width=9999&redirect=false"),function(e){e?t.$set(t.user,"picture",e):t.flags.nopicture=!0})})},handleSdkInit:function(t){var e=t.FB;this.facebook.FB=e},handleConnect:function(){this.getUserData()},handleLogout:function(){console.info("[V-Facebook-Login info]: Logged `logout` event.")},handleClick:function(){console.info("[V-Facebook-Login info]: Logged `click` event.")}}},I=A,R=Object(u["a"])(I,v,k,!1,null,null,null),z=R.exports;o["a"].use(f["a"]);var N=[{path:"/",name:"Documentation",component:z}],H=new f["a"]({routes:N}),U={name:"app",components:{VMenu:m,VShowAt:h["VShowAt"]},data:function(){return{pkg:a,routes:N}}},q=U,G=(n("5c0b"),n("490c"),Object(u["a"])(q,s,r,!1,null,null,null)),J=G.exports;o["a"].config.productionTip=!1,new o["a"]({router:H,render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("18a4"),s=n.n(o);s.a},"6ab6":function(t,e,n){},"72ae":function(t,e,n){"use strict";var o=n("b456"),s=n.n(o);s.a},9224:function(t){t.exports={name:"docs",version:"1.0.0",private:!0,scripts:{serve:"vue-cli-service serve --https",build:"vue-cli-service build",lint:"vue-cli-service lint",predeploy:"npm version patch --no-git-tag-version && npm run build","predeploy-first":"npm version 1.0.0 --allow-same-version --no-git-tag-version && npm run build",deploy:"node gh-pages","deploy-first":"node gh-pages",postdeploy:"node ./post-deploy","postdeploy-first":"node ./post-deploy"},dependencies:{bootstrap:"^4.1.3",prismjs:"^1.15.0",typy:"^2.0.1",vue:"^2.5.16","vue-breakpoint-component":"^1.0.3","vue-flatten-routes":"^1.0.2","vue-router":"^3.0.1"},devDependencies:{"@vue/cli-plugin-babel":"^3.0.0-rc.8","@vue/cli-plugin-eslint":"^3.0.0-rc.8","@vue/cli-service":"^3.0.0-rc.8","gh-pages":"^1.2.0","html-loader":"^0.5.5","markdown-loader":"^3.0.0",stylus:"^0.54.5","stylus-loader":"^3.0.2","vue-template-compiler":"^2.5.16"},eslintConfig:{root:!0,env:{node:!0},extends:["plugin:vue/essential","eslint:recommended"],rules:{},parserOptions:{parser:"babel-eslint"}},postcss:{plugins:{autoprefixer:{}}},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},b456:function(t,e,n){},c3cc:function(t,e,n){t.exports=n.p+"img/vue-logo-facebook.9339b73e.svg"},eceb:function(t,e){t.exports='<h2 id="install">Install</h2>\n<pre><code class="language-bash">npm install --save vue-facebook-login-component</code></pre>\n<h2 id="usage">Usage</h2>\n<p>To use the component in your template, simply import and register with your component.</p>\n<h3 id="script">Script</h3>\n<pre><code class="language-js">import VFBLogin from &#39;vue-facebook-login-component&#39;\n\n// OR, use cherry-pick export (better consistency)\nimport { VFBLogin } from &#39;vue-facebook-login-component&#39;\n\nexport default {\n  components: {\n    VFBLogin\n  }\n}</code></pre>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-facebook-login app-id=&quot;966242223397117&quot;&gt;&lt;/v-facebook-login&gt;</code></pre>\n<h2 id="props">Props</h2>\n<div id="props-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>value</td>\n<td>Object</td>\n<td><code>{ connected: false }</code></td>\n<td><strong>Scope-component prop</strong>.<br><br>Used for one-way V-model.</td>\n</tr>\n<tr>\n<td>app-id</td>\n<td>String</td>\n<td>None</td>\n<td><strong>Scope-component prop</strong>.<br><br><strong>Required prop</strong>.</td>\n</tr>\n<tr>\n<td>version</td>\n<td>String</td>\n<td><code>&#39;v3.1&#39;</code></td>\n<td><strong>Scope-component prop</strong>.<br><br>See <a href="https://developers.facebook.com/docs/apps/changelog/">Facebook Docs</a> for available values.</td>\n</tr>\n<tr>\n<td>options</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td><strong>Scope-component prop</strong>.<br><br>See <a href="https://developers.facebook.com/docs/javascript/reference/FB.init/">Facebook Docs</a> for available values.<br><br><strong>Properties should be camel-case</strong>.</td>\n</tr>\n<tr>\n<td>login-options</td>\n<td>Object</td>\n<td><code>{ scope: &#39;email&#39; }</code></td>\n<td><strong>Scope-component prop</strong>.<br><br>See <a href="https://developers.facebook.com/docs/reference/javascript/FB.login/">Facebook Docs</a> for available values.<br><br><strong>Properties should be camel-case</strong>.</td>\n</tr>\n<tr>\n<td>button-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td><strong>Properties should be camel-case.</strong></td>\n</tr>\n<tr>\n<td>loader-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td><strong>Properties should be camel-case.</strong></td>\n</tr>\n<tr>\n<td>token-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td><strong>Properties should be camel-case.</strong></td>\n</tr>\n<tr>\n<td>text-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td><strong>Properties should be camel-case.</strong></td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="slots">Slots</h2>\n<div id="slots-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>login</td>\n<td><code>&#39;Log in to Facebook&#39;</code></td>\n</tr>\n<tr>\n<td>logout</td>\n<td><code>&#39;Log out from Facebook&#39;</code></td>\n</tr>\n<tr>\n<td>working</td>\n<td><code>&#39;Please wait...&#39;</code></td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="events">Events</h2>\n<div id="events-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Payload</th>\n<th>Description</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>sdk-init</td>\n<td>(sdk[Object])</td>\n<td>Returns an object with <br> a Facebook SDK instance.</td>\n<td><strong>Scope-component event</strong></td>\n</tr>\n<tr>\n<td>login</td>\n<td>(response[Object])</td>\n<td>User attempted login.</td>\n<td><strong>Scope-component event</strong>.</td>\n</tr>\n<tr>\n<td>logout</td>\n<td>(response[Object])</td>\n<td>User attempted logout.</td>\n<td><strong>Scope-component event</strong>.</td>\n</tr>\n<tr>\n<td>connect</td>\n<td>Boolean</td>\n<td>User is connected.</td>\n<td><strong>Scope-component event</strong>.</td>\n</tr>\n<tr>\n<td>click</td>\n<td>None</td>\n<td>&nbsp;</td>\n<td><strong>Scope-component event</strong>.</td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="advanced-customization-scope-component-">Advanced Customization (Scope component)</h2>\n<p>If props, slots and events do not satisfy your customization needs, you can use an underlying component called <code>v-fb-login-scope</code>. This component uses the render prop (known as &quot;scoped-slot&quot; in Vue) approach for composition. This means, it does not render <strong>any</strong> html or css, hence it has no added-value on its own. It only exposes a scoped-slot with attributes and methods that are committed as API. Advise the table below for reference.</p>\n<p>Short example how to use it (for a full example see <a href="https://github.com/adi518/vue-facebook-login-component/blob/master/src/components/FBLogin.vue">source</a>).</p>\n<pre><code class="language-html">&lt;template&gt;\n  &lt;v-facebook-login-scope&gt;\n    &lt;template slot-scope=&quot;scope&quot;&gt;\n      &lt;!-- Compose HTML/CSS here, otherwise nothing will be rendered! --&gt;\n    &lt;/template&gt;\n  &lt;/v-facebook-login-scope&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nimport { VFBLoginScope } from &#39;vue-facebook-login-component&#39;\n\nexport default {\n  components: {\n    VFBLoginScope\n  }\n}\n&lt;/script&gt;</code></pre>\n<h3 id="scope-component-props-events">Scope Component Props/Events</h3>\n<p>Refer to the tables above for scope-component <strong>specific</strong> props/events.</p>\n<h3 id="scope-component-scoped-slot-scope-attributes-and-methods-">Scope Component Scoped-Slot Scope (Attributes and Methods)</h3>\n<div id="scope-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>login</td>\n<td>Function</td>\n<td>Login handler.</td>\n</tr>\n<tr>\n<td>logout</td>\n<td>Function</td>\n<td>Logout handler.</td>\n</tr>\n<tr>\n<td>toggleLogin</td>\n<td>Function</td>\n<td>Toggles login/logout.</td>\n</tr>\n<tr>\n<td>working</td>\n<td>Boolean</td>\n<td>SDK-initialization/login/logout is currently taking place.</td>\n</tr>\n<tr>\n<td>connected</td>\n<td>Boolean</td>\n<td>User was logged in.</td>\n</tr>\n<tr>\n<td>disconnected</td>\n<td>Boolean</td>\n<td>User was logged out.</td>\n</tr>\n<tr>\n<td>enabled</td>\n<td>Boolean</td>\n<td>Button is enabled.</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>Button is disabled.</td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="development">Development</h2>\n<p>Fork, clone and use the following scripts.</p>\n<p>For component:</p>\n<pre><code class="language-bash">npm start</code></pre>\n<p>For documentation (includes a demo):</p>\n<pre><code class="language-bash">npm run docs</code></pre>\n<h2 id="support">Support</h2>\n<p>Please open an <a href="https://github.com/adi518/vue-facebook-login-component/issues">issue</a> for support.</p>\n<h2 id="license">License</h2>\n<p>Copyright (c) 2018 by <a href="https://opensource.org/licenses/MIT">MIT</a></p>\n'}});
//# sourceMappingURL=app.0132b92d.js.map