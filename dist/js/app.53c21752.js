(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)s=i[u],r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b8cabc56"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,c.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"57ab":function(e,t,n){e.exports=n.p+"img/header_logo.b9eea07a.png"},"5a4c":function(e,t,n){},"64e8":function(e,t,n){"use strict";var a=n("f27c"),r=n.n(a);r.a},6948:function(e,t,n){"use strict";var a=n("b5dd"),r=n.n(a);r.a},"6c50":function(e,t,n){"use strict";var a=n("5a4c"),r=n.n(a);r.a},"73cd":function(e,t,n){"use strict";var a=n("ee2d"),r=n.n(a);r.a},b5dd:function(e,t,n){},b69a:function(e,t,n){},c21b:function(e,t,n){},c5a6:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress",target:"_blank",rel:"noopener"}},[e._v("e2e-cypress")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[e._v("unit-mocha")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],c=n("c665"),l=n("dc0a"),u=n("d328"),p=n("11d9"),d=n("9ab4"),f=n("60a3"),b=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(f["c"]);d["a"]([Object(f["b"])()],b.prototype,"msg",void 0),b=d["a"]([f["a"]],b);var m=b,h=m,v=(n("6948"),n("2877")),g=Object(v["a"])(h,s,i,!1,null,"10411e28",null);g.options.__file="HelloWorld.vue";var _=g.exports,j={name:"app",components:{HelloWorld:_}},O=j,y=(n("034f"),Object(v["a"])(O,r,o,!1,null,null,null));y.options.__file="App.vue";var k=y.exports,P=(n("96cf"),n("3040")),w=(n("0fae"),n("9e2f")),x=n.n(w),T=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"container"},[n("el-header",{staticClass:"header",attrs:{height:"80px"}},[n("common-header")],1),n("label",{staticClass:"project-name"},[n("u",[n("b",[e._v(e._s(this.getProjectName()))])])]),n("div",{staticClass:"project-setting"},[e.editMode?n("div",{staticClass:"project-setting-row"},[n("label",[n("b",[e._v("編集用URL：")])]),n("label",[e._v(e._s(this.config.URL_BASE)+"/edit/"+e._s(this.getEditId()))])]):e._e(),n("br"),n("label",[n("b",[e._v("共有用URL：")])]),n("label",[e._v(e._s(this.config.URL_BASE)+"/ref/"+e._s(this.getReferenceId()))])]),n("el-container",{staticClass:"main"},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"300px"}},[n("el-menu",[n("el-form",{staticClass:"input-container",attrs:{inline:!0,model:e.sizeForm,size:"mini"}},[n("label",{staticClass:"label"},[n("b",[e._v("1チームあたりの人数")])]),n("el-input-number",{staticClass:"input",attrs:{tabindex:"1",min:1,max:50,id:"number-of-per-table"},model:{value:e.numberOfPerTables,callback:function(t){e.numberOfPerTables=t},expression:"numberOfPerTables"}})],1),n("br"),n("br"),n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("b",[e._v("参加メンバー （"+e._s(this.numberOfMembers)+"人）")])]),n("el-form",{staticClass:"input-container",attrs:{inline:!0}},[n("el-input",{attrs:{placeholder:"名前を入力してください",type:"text",tabindex:"1",name:"person-name",id:"person-name"},model:{value:e.personName,callback:function(t){e.personName=t},expression:"personName"}},[n("el-button",{attrs:{slot:"append"},on:{click:e.onAdd},slot:"append"},[e._v("追加")])],1)],1),n("div",e._l(e.getPersons(),function(e,t){return n("person-list-item",{key:t,staticClass:"person-list-container",attrs:{person:e,showRemove:!0,index:t}})}))],2)],1)],1),n("el-container",[n("el-main",[e.editMode?n("el-button",{on:{click:e.onShuffle}},[e._v("チームを決める")]):e._e(),n("span",{staticClass:"download-button-area"},[n("el-button",{on:{click:e.download}},[e._v("チーム表をダウンロード")])],1),e.editMode?n("span",{staticClass:"save-button-area"},[n("el-button",{on:{click:e.save}},[e._v("保存")])],1):e._e(),n("div",{staticClass:"table-container",attrs:{id:"table-container"}},e._l(e.tables,function(e,t){return n("my-table",{key:t,attrs:{table:e}})}))],1)],1)],1)],1)},I=[],E=n("c93e"),N=(n("c5f6"),n("6762"),n("34ef"),n("28a5"),n("7f7f"),n("4917"),n("aa9a")),R=n("2f62"),S=n("4bb5"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"title-container"},[n("span",{staticClass:"table-name"},[n("b",[e._v(e._s(e.table.name))])])]),n("div",{staticClass:"member-container"},[n("draggable",{attrs:{options:{group:"tableMember"}},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.table.members,callback:function(t){e.$set(e.table,"members",t)},expression:"table.members"}},e._l(e.table.members,function(e,t){return n("person-list-item",{key:t,attrs:{person:e,showRemove:!1}})}))],1)])},M=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card person-item"},[n("div",[e._v("\n    "+e._s(e.person.name)+"\n    "),e.showRemove?n("el-button",{staticClass:"button",staticStyle:{float:"right",padding:"3px 0"},attrs:{icon:"el-icon-circle-close-outline",type:"text"},on:{click:e.onRemove}}):e._e()],1)])},B=[],$=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(N["a"])(t,[{key:"onRemove",value:function(){this.removePerson(this.index)}}]),Object(l["a"])(t,e),t}(f["c"]);d["a"]([Object(S["b"])("Persons/remove")],$.prototype,"removePerson",void 0),d["a"]([Object(f["b"])()],$.prototype,"person",void 0),d["a"]([Object(f["b"])()],$.prototype,"showRemove",void 0),d["a"]([Object(f["b"])()],$.prototype,"index",void 0),$=d["a"]([f["a"]],$);var U=$,H=U,F=(n("6c50"),Object(v["a"])(H,L,B,!1,null,"203dbdda",null));F.options.__file="PersonListItem.vue";var D=F.exports,z=n("1516"),q=n.n(z),J=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(N["a"])(t,[{key:"mounted",value:function(){console.log("aaaaaaaaaaaaaaa")}}]),Object(l["a"])(t,e),t}(f["c"]);d["a"]([Object(f["b"])()],J.prototype,"table",void 0),J=d["a"]([Object(f["a"])({components:{PersonListItem:D,draggable:q.a}})],J);var W=J,K=W,G=(n("64e8"),Object(v["a"])(K,A,M,!1,null,"202ee616",null));G.options.__file="Table.vue";var Q=G.exports,V=function e(t,n){Object(c["a"])(this,e),this.name=t,this.members=n},X=function(){function e(){Object(c["a"])(this,e)}return Object(N["a"])(e,[{key:"URL_BASE",get:function(){return console.log("http://localhost:8080"),"http://localhost:8080"}},{key:"API_URL_BASE",get:function(){return console.log("http://localhost:3000"),"http://localhost:3000"}}]),e}(),Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"header-text"},[a("img",{staticClass:"header-logo",attrs:{height:"64px",alt:"Header logo",src:n("57ab")}})])}],ee=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(f["c"]);ee=d["a"]([Object(f["a"])({methods:{}})],ee);var te=ee,ne=te,ae=(n("e210"),Object(v["a"])(ne,Y,Z,!1,null,"92c69018",null));ae.options.__file="CommonHeader.vue";var re=ae.exports,oe=n("951f"),se=n.n(oe),ie=n("bc3a"),ce=n.n(ie),le=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.tables=[],e.personName="",e.config=new X,e.editMode=!1,e.loading=!1,e}return Object(N["a"])(t,[{key:"mounted",value:function(){this.tables=[],this.$route.path.match(/edit/)?this.bootEditMode():this.bootRefMode()}},{key:"bootRefMode",value:function(){var e=this;Object(P["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,ce.a.get("".concat(e.config.API_URL_BASE,"/projects/ref/").concat(e.$route.params.hash));case 3:n=t.sent,e.loading=!1,null!==n.data&&e.setProject({id:n.data.id,name:n.data.name,referenceId:n.data.referenceId});case 6:case"end":return t.stop()}},t,this)}))()}},{key:"bootEditMode",value:function(){var e=this;Object(P["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,ce.a.get("".concat(e.config.API_URL_BASE,"/projects/edit/").concat(e.$route.params.hash));case 3:n=t.sent,e.loading=!1,null!==n.data&&(e.editMode=!0,e.setProject({id:n.data.id,name:n.data.name,editId:n.data.editId,referenceId:n.data.referenceId}));case 6:case"end":return t.stop()}},t,this)}))()}},{key:"dummy",value:function(){}},{key:"download",value:function(){this.errorNoTeams()||se()(document.getElementById("table-container")).then(function(e){for(var t=e.toDataURL(),n=atob(t.split(",")[1]),a=new Uint8Array(n.length),r=0;r<n.length;r++)a[r]=n.charCodeAt(r);var o=new Blob([a]),s="table.png";if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,s),window.navigator.msSaveOrOpenBlob(o,s);else{var i=document.createElement("a");i.href=window.URL.createObjectURL(o),i.download=s,i.click()}})}},{key:"save",value:function(){if(!this.errorNoTeams()){var e={persons:this.getPersons(),teams:this.tables,numberOfPerTables:this.numberOfPerTables};ce()({method:"PUT",url:"".concat(this.config.API_URL_BASE,"/projects/").concat(this.getProjectId()),headers:{"EDIT-ID":this.getEditId()},data:{data:e}}).then(function(e){return console.log(e.status)})}}},{key:"errorNoTeams",value:function(){return this.tables.length<1&&(this.$alert("チーム表を作成してください。","",{confirmButtonText:"閉じる"}),!0)}},{key:"onClick",value:function(){console.log(this.getNumberOfPerTables())}},{key:"onAdd",value:function(){""!==this.personName&&null!==this.personName&&this.addPerson({name:this.personName})}},{key:"onShuffle",value:function(){this.createTables()}},{key:"createTables",value:function(){var e=this.getNumberOfPerTables(),t=this.getPersons().concat(),n=t.length,a=Math.floor(n/e),r=Array();e:for(var o=0;o<a;o++){for(var s=Array(),i=0;i<e;i++){if(t.length<1)break e;var c=Math.floor(Math.random()*t.length);s.push(t.splice(c,1)[0])}r.push(new V("チーム".concat(o+1),s))}var l=this.assignSurplus(r,t);this.tables=l}},{key:"assignSurplus",value:function(e,t){for(var n=t.length,a=[],r=function e(t){var n=Math.floor(Math.random()*t);return a.includes(n)?e(t):(a.push(n),n)},o=0;o<n;o++){var s=r(n);e[s].members.push(t.splice(0,1)[0])}return e}},{key:"numberOfPerTables",get:function(){return this.getNumberOfPerTables()},set:function(e){this.updateNumberOfPerTables(Number(e))}},{key:"numberOfMembers",get:function(){return this.getPersons().length}}]),Object(l["a"])(t,e),t}(f["c"]);d["a"]([Object(S["b"])("TableSetting/updateNumberOfPerTables")],le.prototype,"updateNumberOfPerTables",void 0),d["a"]([Object(S["b"])("Persons/add")],le.prototype,"addPerson",void 0),d["a"]([Object(S["b"])("Project/create")],le.prototype,"setProject",void 0),d["a"]([Object(S["a"])("Persons/getPersons")],le.prototype,"getPersons",void 0),d["a"]([Object(S["a"])("TableSetting/getNumberOfPerTables")],le.prototype,"getNumberOfPerTables",void 0),d["a"]([Object(S["a"])("Project/getName")],le.prototype,"getProjectName",void 0),d["a"]([Object(S["a"])("Project/getEditId")],le.prototype,"getEditId",void 0),d["a"]([Object(S["a"])("Project/getReferenceId")],le.prototype,"getReferenceId",void 0),d["a"]([Object(S["a"])("Project/getId")],le.prototype,"getProjectId",void 0),le=d["a"]([Object(f["a"])({components:{MyTable:Q,PersonListItem:D,CommonHeader:re},methods:Object(E["a"])({},Object(R["d"])("TableSetting",["updateNumberOfPersons"]))})],le);var ue=le,pe=ue,de=(n("efaa"),Object(v["a"])(pe,C,I,!1,null,"1074e371",null));de.options.__file="CreateTables.vue";var fe=de.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"container"},[n("el-header",{staticClass:"header",attrs:{height:"80px"}},[n("common-header")],1),n("el-main",{staticClass:"main input-container"},[n("el-form",{staticClass:"project-form",attrs:{"label-position":e.labelPosition,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"プロジェクト名"}},[n("el-input",{staticClass:"input",attrs:{tabindex:"1",placeholder:"プロジェクト名を入力してください"},model:{value:e.projectName,callback:function(t){e.projectName=t},expression:"projectName"}})],1),n("el-form-item",[n("el-button",{staticClass:"create-button",on:{click:e.onCreate}},[e._v("作成")])],1)],1)],1)],1)},me=[],he=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.labelPosition="left",e.projectName="",e.loading=!1,e}return Object(N["a"])(t,[{key:"onCreate",value:function(){var e=this,t=new X;Object(P["a"])(regeneratorRuntime.mark(function n(){var a;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm("プロジェクトを作成します。よろしいですか？","プロジェクト作成",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"info"});case 2:return e.loading=!0,n.next=5,ce.a.post("".concat(t.API_URL_BASE,"/projects"),{name:e.projectName});case 5:a=n.sent,e.loading=!1,e.$router.push({path:"/edit/".concat(a.data.editId)});case 8:case"end":return n.stop()}},n,this)}))().catch(function(e){console.error(e)})}}]),Object(l["a"])(t,e),t}(f["c"]);he=d["a"]([Object(f["a"])({components:{CommonHeader:re},methods:Object(E["a"])({},Object(R["d"])("Project",["updateName"]))})],he);var ve=he,ge=ve,_e=(n("73cd"),Object(v["a"])(ge,be,me,!1,null,"25d0a3c6",null));_e.options.__file="Top.vue";var je=_e.exports,Oe=new X;a["default"].use(T["a"]),a["default"].use(x.a);var ye=function(e,t,n){e.params.hash?Object(P["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ce.a.get("".concat(Oe.API_URL_BASE,"/projects/edit/").concat(e.params.hash));case 2:a=t.sent,null===a.data?n({name:"top"}):n();case 4:case"end":return t.stop()}},t,this)}))():n({name:"top"})},ke=function(e,t,n){e.params.hash?Object(P["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ce.a.get("".concat(Oe.API_URL_BASE,"/projects/ref/").concat(e.params.hash));case 2:a=t.sent,null===a.data?n({name:"top"}):n();case 4:case"end":return t.stop()}},t,this)}))():n({name:"top"})},Pe=function(e,t,n){n({name:"top"})},we=new T["a"]({mode:"history",base:"/",routes:[{path:"/edit/:hash",name:"editTeams",component:fe,beforeEnter:ye},{path:"/ref/:hash",name:"refTeams",component:fe,beforeEnter:ke},{path:"/",name:"top",component:je},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"*",component:je,beforeEnter:Pe}]}),xe={namespaced:!0,state:{numberOfPerTables:1},mutations:{updateNumberOfPersons:function(e,t){e.numberOfPersons=t},updateNumberOfPerTables:function(e,t){e.numberOfPerTables=t}},actions:{},getters:{getNumberOfPerTables:function(e,t){return function(){return e.numberOfPerTables}}}},Te={namespaced:!0,state:{persons:[]},mutations:{add:function(e,t){e.persons.push(t)},remove:function(e,t){e.persons.splice(t,1)}},actions:{},getters:{getPersons:function(e,t){return function(){return e.persons}}}},Ce={namespaced:!0,state:{id:0,name:"",editId:"",referenceId:""},mutations:{create:function(e,t){e.id=t.id,e.name=t.name,e.editId=t.editId,e.referenceId=t.referenceId}},actions:{},getters:{getId:function(e,t){return function(){return e.id}},getName:function(e,t){return function(){return e.name}},getEditId:function(e,t){return function(){return e.editId}},getReferenceId:function(e,t){return function(){return e.referenceId}}}};a["default"].use(R["a"]);var Ie=new R["a"].Store({modules:{TableSetting:xe,Persons:Te,Project:Ce}}),Ee=n("9483");Object(Ee["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("1951"),n("450d");var Ne=n("eedf"),Re=n.n(Ne),Se=n("c3ff"),Ae=n.n(Se),Me=n("4897"),Le=n.n(Me);Le.a.use(Ae.a),a["default"].use(Re.a),a["default"].config.productionTip=!1,new a["default"]({router:we,store:Ie,render:function(e){return e(k)}}).$mount("#app")},e210:function(e,t,n){"use strict";var a=n("b69a"),r=n.n(a);r.a},ee2d:function(e,t,n){},efaa:function(e,t,n){"use strict";var a=n("c5a6"),r=n.n(a);r.a},f27c:function(e,t,n){}});
//# sourceMappingURL=app.53c21752.js.map