webpackJsonp([1],{JaTe:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("bvUf"),n=e("w0H3"),a=!1;var o=function(t){a||e("vAsT")},r=e("VU/8")(i.a,n.a,!1,o,"data-v-286199e1",null);r.options.__file="pages/_slug.vue",s.default=r.exports},bvUf:function(t,s,e){"use strict";var i=e("fQ5t"),n=e.n(i);s.a={asyncData:function(t){var s=t.params,e=(t.error,t.payload);return e?{post:e}:n.a.getEntries({content_type:"post","fields.slug":s.slug}).then(function(t){return{post:t.items[0]}}).catch(function(t){return console.log(t)})},head:function(){return{title:this.post.fields.title}}}},vAsT:function(t,s,e){var i=e("y5Iz");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("9e422378",i,!1,{sourceMap:!1})},w0H3:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section tl-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-offset-1 is-offset-2+tablet is-8 is-10-tablet "},[e("p",{staticClass:"subtitle is-6"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Back to home")])],1),e("h1",{staticClass:"title is-2"},[t._v("\n          "+t._s(t.post.fields.title)+"\n        ")]),e("hr"),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.post.fields.content))}}),t._l(t.post.fields.images,function(t,s){return e("img",{key:s,attrs:{src:t.fields.file.url,alt:t.fields.file.name}})})],2)])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};s.a=n},y5Iz:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])}});