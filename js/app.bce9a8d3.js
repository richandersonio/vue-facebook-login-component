(function(t){function e(e){for(var o,r,i=e[0],c=e[1],d=e[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={app:0},a=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d645d":"85846382"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=s[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t);var d=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}s[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2309:function(t,e,n){},"34fe":function(t,e,n){"use strict";var o=n("8a6f"),s=n.n(o);s.a},"40fd":function(t){t.exports=JSON.parse('{"name":"vue-facebook-login-component","version":"1.5.2","description":"A renderless component for composing Facebook login","author":"Adi Sahar","license":"MIT","main":"dist/vue-facebook-login-component.umd.min.js","private":false,"scripts":{"start":"npm run build:watch","serve":"vue-cli-service serve","build":"vue-cli-service build --target lib --name %npm_package_name% ./src/main.js","build:watch":"npm run build -- --watch","build:stats":"vue-cli-service build --report","test:unit":"vue-cli-service test:unit","lint":"vue-cli-service lint","link":"cd ./docs && npm link %npm_package_name%","unlink":"npm unlink","unlink-docs":"cd ./docs && npm unlink --no-save %npm_package_name%","predocs":"npm link && npm run link","docs":"npm run serve --prefix ./docs","deploy":"cd ./docs && npm run deploy","deploy-initial":"cd ./docs && npm run deploy-initial","prerelease":"npm run build && npm version patch","prerelease-minor":"npm run build && npm version minor","prerelease-major":"npm run build && npm version major","postrelease":"git push --follow-tags","postrelease-minor":"git push --follow-tags","postrelease-major":"git push --follow-tags","release":"npm publish","release-minor":"npm publish","release-major":"npm publish"},"repository":{"type":"git","url":"https://github.com/adi518/vue-facebook-login-component"},"bugs":{"url":"https://github.com/adi518/vue-facebook-login-component/issues"},"peerDependencies":{"vue":"^2.x","core-js":"^3.x"},"devDependencies":{"@vue/cli-plugin-babel":"^4.2.3","@vue/cli-plugin-eslint":"^4.2.3","@vue/cli-service":"^4.2.3","babel-eslint":"^10.1.0","eslint":"^6.8.0","eslint-plugin-vue":"^6.2.1","sass":"^1.26.1","sass-loader":"^8.0.2","vue-template-compiler":"^2.6.11"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{"space-before-function-paren":0,"comma-dangle":0}},"browserslist":["> 1%","last 2 versions"]}')},"490c":function(t,e,n){"use strict";var o=n("2309"),s=n.n(o);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1"),n("db4d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-menu",{attrs:{items:2,routes:t.routes,"token-style":{backgroundImage:"url("+t.menuToken+")"}}},[n("template",{slot:"item-2"},[n("v-show-at",{attrs:{"no-match":""}},[n("span",[n("a",{staticClass:"github-button",attrs:{href:t.pkg.repository.url,"data-icon":"octicon-star","data-show-count":"true","aria-label":"Star adi518/vue-facebook-login-component on GitHub"}},[t._v("Star")])])])],1)],2),n("router-view")],1)},a=[],r=n("40fd"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["v-menu","clearfix",t.classes]},[n("div",{class:["token",{"is-open":t.classes["is-open"]}],style:t.computedTokenStyle,on:{"&touchstart":function(e){return t.toggle(e)},click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggle(e)}}}),n("ul",{ref:"menu",class:["menu",{"is-open":t.classes["is-open"]}],style:t.computedMenuStyle,on:{"&touchstart":function(t){}}},[t._l(t.computedRoutes,(function(e,o){return[e.name?n("li",{key:o},[n("router-link",{attrs:{to:{name:e.name}},domProps:{innerHTML:t._s(e.name)}})],1):t._e()]})),t._l(t.computedItems,(function(e,o){return[t.$slots["item-"+(o+1)]?n("li",{key:"item-"+o},[t._t("item-"+(o+1))],2):t._e()]})),t.$slots["last-child"]?n("li",{key:"item-last-child-"+t.index},[t._t("last-child")],2):t._e()],2)])},c=[],d=(n("e28c"),n("22f4"),n("966c"),n("0ffc"),n("7e9e"),n("241c"),n("33d3"),n("e0d3"),n("5a85"),n("96cf"),n("1da1")),l=n("5530"),u=n("0db4"),p=n.n(u),m=n("eae1"),h={name:"VMenu",props:{items:{type:Number,default:0},routes:{type:Array,default:function(){return[]}},exclude:{type:Array,default:function(){return[]}},tokenStyle:{type:Object,default:function(){return{}}},menuStyle:{type:Object,default:function(){return{}}}},data:function(){return{flags:{open:!1}}},watch:{"flags.open":function(t){this.emitToggle(t)}},mounted:function(){document.addEventListener("click",this.dismiss),document.addEventListener("touchstart",this.dismiss),window.addEventListener("resize",this.handleResize)},destroyed:function(){document.removeEventListener("click",this.dismiss),document.removeEventListener("touchstart",this.dismiss),window.removeEventListener("resize",this.handleResize)},computed:{classes:function(){return{"is-open":this.flags.open}},computedRoutes:function(){var t=this;return p()(Object(m["flattenRoutes"])(this.routes),(function(e){return t.exclude.includes(e.name||e.path)}))},computedItems:function(){return Array.from(Array(this.items)).map((function(t,e){return e+1}))},computedTokenStyle:function(){return Object(l["a"])({backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTYuMzIgMTcwLjAyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQyYjg4Mzt9LmNscy0ye2ZpbGw6IzM1NDk1ZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ288L3RpdGxlPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMjAuODMgMCA5OC4xNiAzOS4yNiA3NS40OSAwIDAgMCA5OC4xNiAxNzAuMDIgMTk2LjMyIDAgMTIwLjgzIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTIwLjgzIDAgOTguMTYgMzkuMjYgNzUuNDkgMCAzOS4yNiAwIDk4LjE2IDEwMi4wMSAxNTcuMDYgMCAxMjAuODMgMCIvPjwvc3ZnPg==)"},this.tokenStyle)},computedMenuStyle:function(){return Object(l["a"])({backgroundColor:"rgba(0, 0, 0, 0.5)"},this.menuStyle)}},methods:{toggle:function(t){[!0,!1].includes(t)?this.flags.open=t:this.flags.open=!this.flags.open,this.$emit("toggle",this.flags.open)},dismiss:function(){this.toggle(!1)},emitToggle:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.t0=e,n.t1=t?"open":"close",n.next=4,e.getWidth();case 4:n.t2=n.sent,n.t3={width:n.t2},n.t0.$emit.call(n.t0,n.t1,n.t3);case 7:case"end":return n.stop()}}),n)})))()},handleResize:function(){this.emitToggle(this.flags.open)},getWidth:function(){var t=this;return new Promise((function(e){window.requestAnimationFrame((function(){e(t.$refs.menu.getBoundingClientRect().width)}))}))}}},f=h,g=(n("34fe"),n("2877")),b=Object(g["a"])(f,i,c,!1,null,"7a3f3d56",null),v=b.exports,k=n("a9cf"),y=n.n(k),w=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs"},[n("div",{staticClass:"docs-container docs-container--has-jumbotron",style:{height:t.breakpoint.innerHeight+"px"}},[n("div",{staticClass:"docs-jumbotron container",class:t.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("a",{staticClass:"docs-github",attrs:{href:t.pkg.repository.url,target:"_blank"}},[n("img",{attrs:{src:"octocat.png",alt:"Go to GitHub"}})]),n("div",{staticClass:"docs-clearfix text-center"},[n("img",{staticClass:"docs-vue-logo mb-10",attrs:{src:t.assets.logo}}),n("h1",[t._v("Vue Facebook Login")]),n("p",{staticClass:"docs-tagline text-center ml-auto mr-auto mb-20",style:{width:t.breakpoint.noMatch?"71%":"auto"}},[t._v(t._s(t.pkg.description))])]),n("div",{staticClass:"d-flex mb-25"},[n("div",{staticClass:"docs-facebook-button d-inline-flex mx-auto"},[n("v-facebook-login",{attrs:{"app-id":t.facebook.appId,"button-style":t.buttonStyle,transition:["padding-right 0.15s ease-in-out"]},on:{"sdk-init":t.handleSdkInit,connect:t.handleConnect,logout:t.handleLogout,click:t.handleClick},scopedSlots:t._u([{key:"after",fn:function(e){return[n("span",{staticClass:"docs-avatar",class:{"docs-avatar--is-visible":t.connected&&t.computed.picture},style:t.avatarStyle})]}}]),model:{value:t.facebook.model,callback:function(e){t.$set(t.facebook,"model",e)},expression:"facebook.model"}})],1)]),n("v-hide-at",{attrs:{"no-match":""}},[n("div",{staticClass:"d-flex justify-content-center"},[n("span",{staticClass:"docs-downloads"},[n("img",{attrs:{alt:"npm",src:"https://img.shields.io/npm/dt/vue-facebook-login-component"}})]),n("div",{staticClass:"github-star ml-10"},[n("a",{staticClass:"github-button",attrs:{href:t.pkg.repository.url,"data-icon":"octicon-star","data-show-count":"true","aria-label":"Star adi518/vue-facebook-login-component on GitHub"}},[t._v("Star")])])])]),n("div",{staticClass:"docs-version"},[t._v(" "+t._s(t.pkg.version)+" - "+t._s(t.docs.version)+" "),n("DevOnly",[t.facebook.scope.logout?n("span",{staticClass:"docs-button docs-logout",on:{click:t.facebook.scope.logout}},[t._v("logout")]):t._e()])],1),n("v-a",{staticClass:"docs-fixed-anchor",attrs:{"scroll-to":t.$refs.docs}},[t._v("Install, Examples & Documentation")])],1)]),n("div",{ref:"docs",staticClass:"docs-container"},[n("div",{staticClass:"container docs-clearfix",class:t.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("div",{staticClass:"docs-markdown",domProps:{innerHTML:t._s(t.markdowns.readme)}})])]),n("footer",{staticClass:"docs-footer"},[n("div",{staticClass:"container",class:t.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[t._m(0)])]),n("v-breakpoint",{model:{value:t.breakpoint,callback:function(e){t.breakpoint=e},expression:"breakpoint"}})],1)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-credit"},[n("span",{staticClass:"d-flex"},[t._v("Made by")]),n("div",{staticClass:"d-flex"},[n("a",{staticClass:"docs-credit-anchor",attrs:{href:"https://github.com/adi518",target:"_blank"}},[t._v("🦊 @adi518")]),n("a",{staticClass:"docs-credit-anchor",attrs:{href:"https://github.com/iliran11",target:"_blank"}},[t._v("🐙 @iliran11")])])])}],j=n("c197"),C=n.n(j),_=n("3637"),O=n.n(_),M=n("4bc4"),T=n.n(M),I=n("c3cc"),A=n.n(I),L=n("9224"),D=n("eceb"),E=n.n(D),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"v-a",attrs:{href:t.href,target:t.computedTarget,tabindex:t.tabindex},on:{click:t.handleClick}},[t._t("default")],2)},F=[],z={name:"VA",props:{name:{type:String,default:""},href:{type:String,default:""},tabindex:{type:String,default:""},refs:{type:Object,default:function(){return{}}},scrollTo:{type:[String,Element],default:""},target:{type:String,default:"_blank"},prevent:{type:Boolean,default:!1},static:{type:Boolean,default:!1}},computed:{computedTarget:function(){if(!this.scrollTo)return this.target}},methods:{handleClick:function(t){(this.prevent||this.scrollTo||this.static)&&t.preventDefault(),this.scrollTo&&this.$scrollTo(this.scrollTo),this.$emit("click",{href:this.href})},getElementByRef:function(t,e){e=e||this.$refs;var n=!e;if(!n){var o=e[t];return o instanceof Element||e[t]&&(o=e[t].el,o instanceof Element)?o:(console.error('[getElementByRef warn]: No such ref as "'.concat(t,'".')),null)}console.error("[getElementByRef warn]: No refs found.")},$scrollTo:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=t instanceof Element?t:this.getElementByRef(t,this.refs),e&&e.scrollIntoView(Object(l["a"])({behavior:"smooth",block:"start"},n))}}},B=z,P=Object(g["a"])(B,N,F,!1,null,null,null),R=P.exports,V={name:"DevOnly",functional:!0,render:function(t,e){return null}},$={name:"Docs",components:{VA:R,DevOnly:V,VHideAt:k["VHideAt"],VBreakpoint:y.a,VFacebookLogin:T.a},data:function(){return{pkg:r,docs:L,assets:{logo:A.a},markdowns:{readme:E.a},facebook:{FB:{},model:{},scope:{},appId:"2146252248983683"},flags:{nopicture:!1},user:{picture:{data:{url:""}}},breakpoint:new k["Model"]}},mounted:function(){window.setTimeout(C.a.highlightAll)},computed:{computed:function(){var t=this.user.name,e=O()(this.user,"picture.data.url").safeString;return{name:t,picture:e}},connected:function(){return this.facebook.model.connected},disconnected:function(){return!this.connected},buttonStyle:function(){var t={position:"relative"};return this.connected&&this.computed.picture&&(t.paddingRight="3.375rem"),t},avatarStyle:function(){return{backgroundImage:"url(".concat(this.computed.picture,")")}}},methods:{getUserData:function(){var t=this,e=this.facebook.FB.api;e("/me",{fields:"id, name"},(function(n){t.user=Object.assign({},t.user,n),e("".concat(t.user.id,"/picture?width=9999&redirect=false"),(function(e){e?e.data.url===t.user.picture.data.url||t.$set(t.user,"picture",e):t.flags.nopicture=!0}))}))},handleSdkInit:function(t){var e=t.FB,n=t.scope;this.facebook.scope=n,this.facebook.FB=e},handleConnect:function(){this.getUserData()},handleLogout:function(){console.info("[V-Facebook-Login info]: Logged `logout` event.")},handleClick:function(){console.info("[V-Facebook-Login info]: Logged `click` event.")}}},H=$,q=Object(g["a"])(H,S,x,!1,null,null,null),G=q.exports;o["a"].use(w["a"]);var U=[{path:"/",name:"Documentation",component:G},{path:"/privacy-policy",name:"Privacy Policy",component:function(){return n.e("chunk-2d0d645d").then(n.bind(null,"729e"))}}],Z=new w["a"]({routes:U}),Y={name:"app",components:{VMenu:v,VShowAt:k["VShowAt"]},data:function(){return{pkg:r,routes:U,menuToken:A.a}}},K=Y,J=(n("5c0b"),n("490c"),Object(g["a"])(K,s,a,!1,null,null,null)),W=J.exports,X=n("0284"),Q=n.n(X);o["a"].config.productionTip=!1,o["a"].use(Q.a,{id:"UA-48463434-6",router:Z}),new o["a"]({router:Z,render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),s=n.n(o);s.a},"8a6f":function(t,e,n){},9224:function(t){t.exports=JSON.parse('{"name":"docs","version":"1.0.45","description":"","author":"Adi Sahar","license":"MIT","private":true,"scripts":{"start":"npm run serve","serve":"vue-cli-service serve --https","build":"cross-env NODE_OPTIONS=--max_old_space_size=8192 vue-cli-service build","lint":"vue-cli-service lint","predeploy":"npm install & npm version patch --no-git-tag-version && npm run build","predeploy-initial":"npm version 1.0.0 --allow-same-version --no-git-tag-version && npm run build","deploy":"node gh-pages","deploy-initial":"node gh-pages","postdeploy":"node ./post-deploy","postdeploy-initial":"node ./post-deploy"},"dependencies":{"babel-polyfill":"^6.26.0","bootstrap":"^4.4.1","lodash.reject":"^4.6.0","prismjs":"^1.19.0","typy":"^2.0.1","vue":"^2.6.11","vue-analytics":"^5.22.1","vue-breakpoint-component":"^1.2.6","vue-facebook-login-component":"^1.5.2","vue-flatten-routes":"^1.1.0","vue-router":"^3.1.6"},"devDependencies":{"@vue/cli-plugin-babel":"^4.2.3","@vue/cli-plugin-eslint":"^4.2.3","@vue/cli-service":"^4.2.3","cross-env":"^7.0.0","gh-pages":"^2.2.0","html-loader":"^0.5.5","markdown-loader":"^3.0.0","sass":"^1.26.1","sass-loader":"^8.0.2","stylus":"^0.54.7","stylus-loader":"^3.0.2","vue-template-compiler":"^2.6.11"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"]}')},"9c0c":function(t,e,n){},c3cc:function(t,e,n){t.exports=n.p+"img/vue-logo-facebook.9339b73e.svg"},eceb:function(t,e){t.exports='<h2 id="install">Install</h2>\n<pre><code class="language-console">npm install --save vue-facebook-login-component</code></pre>\n<h2 id="usage">Usage</h2>\n<p>To use the component in your template, simply import and register with your component.</p>\n<h3 id="script">Script</h3>\n<pre><code class="language-js">import VFacebookLogin from &#39;vue-facebook-login-component&#39;\n\nexport default {\n  components: {\n    VFacebookLogin\n  }\n}</code></pre>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-facebook-login app-id=&quot;966242223397117&quot;&gt;&lt;/v-facebook-login&gt;</code></pre>\n<h2 id="props">Props</h2>\n<div id="props-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>value</td>\n<td>Object</td>\n<td><code>{ connected: false }</code></td>\n<td>Used for one-way V-Model. [ &ast;&ast;&ast; ]</td>\n</tr>\n<tr>\n<td>app-id</td>\n<td>String</td>\n<td>None</td>\n<td>Required. [ &ast;&ast;&ast; ]</td>\n</tr>\n<tr>\n<td>version</td>\n<td>String</td>\n<td><code>&#39;v3.1&#39;</code></td>\n<td>[ &ast;&ast;, &ast;&ast;&ast; ]</td>\n</tr>\n<tr>\n<td>options</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td>[ &ast;, &ast;&ast;, &ast;&ast;&ast; ]</td>\n</tr>\n<tr>\n<td>login-options</td>\n<td>Object</td>\n<td><code>{ scope: &#39;email&#39; }</code></td>\n<td>[ &ast;, &ast;&ast;, &ast;&ast;&ast; ]</td>\n</tr>\n<tr>\n<td>button-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>loader-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>token-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>text-style</td>\n<td>Object</td>\n<td><code>{}</code></td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>transition</td>\n<td>Array</td>\n<td><code>[]</code></td>\n<td>Array of CSS transition values. Example:<br><br><code>[ &#39;background-color 0.15s ease-in-out&#39;, &#39;padding 0.15s ease-in-out&#39;, ... ]</code>.</td>\n</tr>\n</tbody></table>\n</div>\n\n<p>[ &ast; ] - Properties should be camel-case.<br>\n[ &ast;&ast; ] - See <a href="https://developers.facebook.com/docs/javascript/reference/FB.init/">Facebook</a> for available values.<br>\n[ &ast;&ast;&ast; ] - Scope-component property.</p>\n<h2 id="slots">Slots</h2>\n<div id="slots-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>login</td>\n<td><code>&#39;Sign in with Facebook&#39;</code></td>\n<td></td>\n</tr>\n<tr>\n<td>logout</td>\n<td><code>&#39;Sign out with Facebook&#39;</code></td>\n<td></td>\n</tr>\n<tr>\n<td>working</td>\n<td><code>&#39;Please wait...&#39;</code></td>\n<td></td>\n</tr>\n<tr>\n<td>before</td>\n<td><code>NONE</code></td>\n<td>Before all nested elements.</td>\n</tr>\n<tr>\n<td>after</td>\n<td><code>NONE</code></td>\n<td>After all nested elements.</td>\n</tr>\n<tr>\n<td>error</td>\n<td><code>&#39;⛔ Network Error&#39;</code></td>\n<td>Shown on SDK load failure.</td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="events">Events</h2>\n<div id="events-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Payload</th>\n<th>Description</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>sdk-init</td>\n<td>(sdk[Object])</td>\n<td>Returns an object with <br> Facebook SDK instance and <a href="#-sdk-init-event"><code>scope</code></a> object.</td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>login</td>\n<td>(response[Object])</td>\n<td>User attempted login.</td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>logout</td>\n<td>(response[Object])</td>\n<td>User attempted logout.</td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>connect</td>\n<td>Boolean</td>\n<td>User is connected.</td>\n<td>[ &ast; ]</td>\n</tr>\n<tr>\n<td>click</td>\n<td>None</td>\n<td>&nbsp;</td>\n<td>[ &ast; ]</td>\n</tr>\n</tbody></table>\n</div>\n\n<p>[ &ast; ] - Scope-component event.</p>\n<h3 id="-sdk-init-event">⚠️ <a href="#sdk-init-event">Sdk-Init Event</a></h3>\n<p>You can use this event to grab the Facebook SDK instance, but <strong>also</strong> the underlying component <code>scope</code> object. Using this object, you can control the component empirically, similarly to how you would with <code>ref</code>. See example:</p>\n<pre><code class="language-html">&lt;template&gt;\n  &lt;v-facebook-login @sdk-init=&quot;handleSdkInit&quot; /&gt;\n  &lt;button v-if=&quot;facebook.scope.logout&quot; @click=&quot;facebook.scope.logout&quot;&gt;\n    Logout\n  &lt;/button&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\n  export default = {\n    data: () =&gt; ({\n      facebook: {\n        FB: {},\n        scope: {},\n      }\n    }),\n    methods: {\n      handleSdkInit({ FB, scope }) {\n        this.facebook.scope = scope\n        this.facebook.FB = FB\n      }\n    }\n  }\n&lt;/script&gt;</code></pre>\n<h2 id="scope-component-advanced-customization-">Scope component (Advanced Customization)</h2>\n<p>If props, slots and events do not satisfy your customization needs, you can use an underlying component called <code>v-fb-login-scope</code>. This component uses the render prop (known as &quot;scoped-slot&quot; in Vue) approach for composition. This means, it does not render <strong>any</strong> html or css, hence it has no added-value on its own. It only exposes a scoped-slot with attributes and methods that are committed as API.</p>\n<h3 id="props-events">Props/Events</h3>\n<p>Refer to the <a href="#props-table-wrap">tables</a> above for scope-component <strong>specific</strong> props/events.</p>\n<h3 id="scoped-slot-scope-attributes-and-methods-">Scoped-Slot Scope (Attributes and Methods)</h3>\n<div id="scope-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>login</td>\n<td>Function</td>\n<td>Login handler.</td>\n</tr>\n<tr>\n<td>logout</td>\n<td>Function</td>\n<td>Logout handler.</td>\n</tr>\n<tr>\n<td>toggleLogin</td>\n<td>Function</td>\n<td>Toggles login/logout.</td>\n</tr>\n<tr>\n<td>working</td>\n<td>Boolean</td>\n<td>SDK-initialization/login/logout is currently taking place.</td>\n</tr>\n<tr>\n<td>connected</td>\n<td>Boolean</td>\n<td>User is logged in.</td>\n</tr>\n<tr>\n<td>disconnected</td>\n<td>Boolean</td>\n<td>User is logged out.</td>\n</tr>\n<tr>\n<td>enabled</td>\n<td>Boolean</td>\n<td>Button is enabled.</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>Button is disabled.</td>\n</tr>\n</tbody></table>\n</div>\n\n<h3 id="scope-component-example-for-a-full-example-see-source-">Scope component example (for a full example see <a href="https://github.com/adi518/vue-facebook-login-component/blob/master/src/components/FBLogin.vue">source</a>).</h3>\n<pre><code class="language-html">&lt;template&gt;\n  &lt;v-facebook-login-scope&gt;\n    &lt;!-- Compose HTML/CSS here, otherwise nothing will be rendered --&gt;\n    &lt;button slot-scope=&quot;scope&quot;&gt;\n      &lt;!-- Compose with `scope` here --&gt;\n    &lt;/button&gt;\n  &lt;/v-facebook-login-scope&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\n  import { VFBLoginScope } from &#39;vue-facebook-login-component&#39;\n\n  export default {\n    components: {\n      VFBLoginScope\n    }\n  }\n&lt;/script&gt;</code></pre>\n<h2 id="loading-facebook-sdk">Loading Facebook SDK</h2>\n<p>This component embeds the <a href="https://developers.facebook.com/docs/javascript/quickstart/">Facebook SDK snippet</a>, so you don&#39;t have to do it yourself. However, if you want to embed it yourself, you can do so and the component will pick up the SDK instance instead.</p>\n<h2 id="uncaught-referenceerror-regeneratorruntime-is-not-defined">Uncaught ReferenceError: regeneratorRuntime is not defined</h2>\n<p>This package uses <code>async/await</code> syntax, which is based on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">generators</a>. In short, if you target old browsers (think about that carefully) you&#39;ll have to add <a href="https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime">regenerator-runtime</a> to your dependencies. See this <a href="https://github.com/adi518/vue-facebook-login-component/issues/17">issue</a> for more details.</p>\n<pre><code class="language-console">npm install --save regenerator-runtime</code></pre>\n<p>Then, import it at the topmost of your <code>main.js</code> (or similar entry-point).</p>\n<pre><code class="language-js">import &#39;regenerator-runtime&#39;\n\n// ...rest of your imports</code></pre>\n<h2 id="ie-support">IE support</h2>\n<p>Add <a href="https://babeljs.io/docs/en/babel-polyfill">babel-polyfill</a> to your dependencies.</p>\n<h2 id="development">Development</h2>\n<p>Fork, clone and use the following scripts.</p>\n<p>For component:</p>\n<pre><code class="language-console">npm start</code></pre>\n<p>For documentation (includes a demo):</p>\n<pre><code class="language-console">npm run docs</code></pre>\n<h2 id="support">Support</h2>\n<p>Please open an <a href="https://github.com/adi518/vue-facebook-login-component/issues">issue</a> for support.</p>\n<h2 id="license">License</h2>\n<p>Copyright (c) 2018 by <a href="https://opensource.org/licenses/MIT">MIT</a></p>\n'}});
//# sourceMappingURL=app.bce9a8d3.js.map