(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),s=n(7),h=n(6),l=n(0),b=function(e){var t=e.name,n=e.email,c=e.id;return Object(l.jsxs)("div",{className:"tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"stag?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("h3",{children:n})]})]})},u=function(e){var t=e.robot;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=function(e){var t=e.SearchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"SearchBox",onChange:t})})},j=(n(14),function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"900px"},children:e.children})}),f=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robot:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robot:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robot,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{children:"ROBOFRIENDS"}),Object(l.jsx)(d,{SearchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(u,{robot:c})})]})}}]),n}(c.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};n(15);o.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.bf46f246.chunk.js.map