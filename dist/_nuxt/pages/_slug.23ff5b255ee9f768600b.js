webpackJsonp([2],{JaTe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("bvUf"),n=s("w0H3"),a=!1;var o=function(t){a||s("vAsT")},r=s("VU/8")(i.a,n.a,!1,o,"data-v-286199e1",null);r.options.__file="pages/_slug.vue",e.default=r.exports},bvUf:function(t,e,s){"use strict";var i=s("fQ5t"),n=s.n(i);e.a={asyncData:function(t){var e=t.params,s=(t.error,t.payload);return s?{post:s}:n.a.getEntries({content_type:"post","fields.slug":e.slug}).then(function(t){return{post:t.items[0]}}).catch(function(t){return console.log(t)})},head:function(){return{title:this.post.fields.title}}}},vAsT:function(t,e,s){var i=s("y5Iz");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("9e422378",i,!1,{sourceMap:!1})},w0H3:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section tl-content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-offset-1 is-offset-2+tablet is-8 is-10-tablet "},[s("p",{staticClass:"subtitle is-6"},[s("nuxt-link",{attrs:{to:"/"}},[t._v("Back to home")])],1),s("h1",{staticClass:"title is-2"},[t._v("\n          "+t._s(t.post.fields.title)+"\n        ")]),s("hr"),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.post.fields.content))}}),t._l(t.post.fields.images,function(e,i){return s("div",{key:i,staticClass:"projectImgWrapper"},[s("p",[t._v(t._s(e.fields.title))]),s("img",{key:i,attrs:{src:e.fields.file.url,alt:e.fields.title}})])})],2)])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},y5Iz:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".projectImgWrapper[data-v-286199e1]{margin-bottom:60px}.projectImgWrapper p[data-v-286199e1]{font-size:13px;text-transform:uppercase;color:#898989;margin-bottom:4px;font-family:Poppins,sans-serif}.content[data-v-286199e1],.content p[data-v-286199e1]{font-size:16px;line-height:1.9em;margin-bottom:60px}.content [data-v-286199e1]{color:#6e6e6e!important}.title[data-v-286199e1]{font-weight:500;color:#898989;font-size:16px!important;margin-bottom:20px;margin-top:0!important}.subtitle[data-v-286199e1]{font-size:12px!important;margin-bottom:5px;margin-top:0!important}",""])}});