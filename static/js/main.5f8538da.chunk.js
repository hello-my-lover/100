(this.webpackJsonp100=this.webpackJsonp100||[]).push([[0],{14:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(20),a=n.n(s),r=n(10),d=n(2),o=n(8),j=n(9),l=n(12),b=n(11),h=(n(26),n(14),n(1)),u=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container fade-in",children:Object(h.jsx)(r.b,{className:"link",to:"/game",children:Object(h.jsx)("img",{className:"start__image",src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdVYISK%2FbtqZjvNAHJp%2Fo9T97LclTN2t4RKXOqySFK%2Fimg.png",alt:"start"})})})}}]),n}(i.a.Component);n(33),n(34);var m=function(e){var t=e.id,n=e.image,c=e.isEnded;return c&&20===t?Object(h.jsx)("div",{className:"image",children:Object(h.jsx)(r.b,{className:"link",to:"/letter",children:Object(h.jsx)("img",{className:"ending__image fade-in",src:n,alt:t})})}):c&&21===t?Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("a",{href:"http://kko.to/9hHQ6tIY0",children:Object(h.jsx)("img",{className:"ending__image fade-in",src:n,alt:t})})}):Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{className:"game__image",src:n,alt:t})})};n(35);var O=function(e){e.id;var t=e.desc,n=e.isChoice,c=e.choice,i=e.onClick,s=e.nextId,a=e.ending,r=e.isEnded;return n&&!a?Object(h.jsxs)("div",{className:"quest",children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("button",{onClick:function(){return i(c[0].id)},children:c[0].name}),Object(h.jsx)("button",{onClick:function(){return i(c[1].id)},children:c[1].name})]}):a?Object(h.jsxs)("div",{className:"quest",children:[Object(h.jsx)("span",{children:t}),Object(h.jsxs)("button",{onClick:function(){return i(s)},children:["\u25bc ",a]})]}):r?Object(h.jsx)("div",{}):Object(h.jsxs)("div",{className:"quest",children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("button",{onClick:function(){return i(s)},children:"\u25bc"})]})},x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,currentId:0,list:[]},e.handleClick=function(t){e.setState({currentId:t})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){fetch("content.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then(function(e){console.log(e),this.setState({list:e,isLoading:!1})}.bind(this))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.currentId,c=e.list;return t?Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"Loading"})}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m,{id:c[n].id,image:c[n].image,isEnded:c[n].isEnded}),Object(h.jsx)(O,{id:c[n].id,desc:c[n].desc,isChoice:c[n].isChoice,choice:c[n].choice,onClick:this.handleClick,nextId:c[n].nextId,ending:c[n].ending,isEnded:c[n].isEnded})]})}}]),n}(i.a.Component),p=(n(36),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container letter__container fade-in",children:[Object(h.jsx)("span",{children:"\ud83d\udc9c"}),Object(h.jsx)("span",{className:"letter",children:"\ud615, \uc548\ub155. \ub098 \uc2b9\ubbfc\uc774. \uc804\uc5d0 \uc37c\uc744 \ub54c\ub791\uc740 \ub290\ub08c\uc774 \ub2e4\ub974\ub124. \uc74c, \uc77c\ub2e8 \ubc31 \uc77c\uc774\ub77c\ub294 \uae34 \uc2dc\uac04 \ub3d9\uc548 \ub098\ub791 \ud568\uaed8 \ud574 \uc918\uc11c \uace0\ub9d9\ub2e4\ub294 \uc774\uc57c\uae30\ub97c \uc81c\uc77c \uba3c\uc800 \ud558\uace0 \uc2f6\uc5b4. \uace0\ub9c8\uc6cc, \ud615. \ub098\ub984 100 \uc77c\uc774\ub77c\uace0 \ud2b9\ubcc4\ud55c \uac78 \ud574 \ubcf4\uace0 \uc2f6\uc5c8\ub294\ub370 \ud3ec\ud1a0\uc0f5\uc740 \uc81c\ub300\ub85c \ud574 \ubcf8 \uc801\ub3c4 \uc5c6\uace0, \uc544\uc774\ub514\uc5b4\ub3c4 \uc5c6\uc5b4\uc11c \uadf8\ub0e5 \ub0b4\uac00 \ud560 \uc218 \uc788\ub294 \uac78 \ud558\uc790 \uc2f6\uc5b4\uc11c \ub9cc\ub4e4\uc5b4 \ubcf8 \uac70\uc57c. \uc880 \ud5c8\uc220\ud558\uc9c0? \uadf8\ub798\ub3c4 \uaf64 \uc624\ub798 \uac78\ub838\uc5b4....... \uc815\uc131\uc5d0 \ube44\ud574 \uacb0\uacfc\ubb3c\uc740 \ud5c8\uc220\ud55c \uac83 \uac19\uc740\ub370 \ub9c8\uc74c\uc774\ub77c\ub3c4 \uc804\ud574\uc84c\uc73c\uba74 \uc88b\uaca0\ub2e4. \ub204\uad70\uac00\ub97c \uc0dd\uac01\ud558\uba74\uc11c \ubb34\uc5b8\uac00\uc5d0 \ubab0\ub450\ud558\ub294 \uac8c \uad49\uc7a5\ud788 \uc18c\uc911\ud558\ub2e4\ub294 \uac78 \ud558\ub8e8\ud558\ub8e8 \ub290\ub07c\uace0 \uc788\uc5b4. \uadf8\uac8c \uc0ac\ub791\uc774\ub4e0 \uc774\ub807\uac8c \ud5c8\uc220\ud55c \uac8c\uc784\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774\ub4e0 \ud615\uc73c\ub85c \uadc0\uacb0\ub41c\ub2e4\ub294 \uac8c \ucc38 \uc88b\ub2e4. \uc815\ub9d0 \uc0ac\ub791\uc740 \uc608\uc0c1\uce58 \ubabb\ud558\uac8c \ucc3e\uc544\uc628\ub2e4\ub294 \uac8c \ub9de\ub294 \ub9d0\uc778\uac00 \ubd10. \uc544\uc9c1\ub3c4 \ud615\uc744 \ucc98\uc74c \ub9cc\ub0ac\ub358 \uc21c\uac04\uacfc \uc88b\uc544\ud558\ub294 \uac10\uc815\uc774 \uc0dd\uae30\ub294 \uadf8 \uc21c\uac04\ub4e4\uc744 \uc78a\uc744 \uc218\uac00 \uc5c6\ub2e4. \uc774\ubbf8 \ud615 \ub9cc\ub09c \uac78\ub85c \ubaa8\ub4e0 \uc6b4\uc744 \ub2e4 \uc368\uc11c \ub85c\ub610\ub294 \uc695\uc2ec \ubc84\ub824\uc57c\uaca0\uc5b4. \uadf8 \uc815\ub3c4\ub85c \ub0b4 \uc778\uc0dd\uc5d0 \ud070 \ubcc0\ud654\ub97c \uac00\uc838\ub2e4\uc900 \uc0ac\ub78c\uc774\uc57c, \ud615\uc740. \ud615\uc774 \uc120\ubb3c\ud574 \uc900 \ucc45\uc5d0 \uc815\ub9d0 \uacf5\uac10\ub3fc\uc11c \uacc4\uc18d \uae30\uc5b5\uc5d0 \ub0a8\ub294 \uad6c\uc808\uc774 \uc788\uc5b4. \uc5b4\uc774\uc5c6\uc74c\uacfc \uc0ac\ub791\uc744 \ub3d9\uc2dc\uc5d0 \ub290\ub080\ub2e4\ub294 \ub9d0. \uc6b0\ub9ac \uc5b4\uc774\uc5c6\ub2e4\ub294 \ub9d0 \ucc38 \ub9ce\uc774 \ud558\uc796\uc544. \ud615\uc740 \uc815\ub9d0 \uc5b4\uc774\uc5c6\uc5b4\uc11c \ud558\ub294 \ub9d0\uc77c \uc218\ub3c4 \uc788\uaca0\uc9c0\ub9cc \ub098\ub294 \uadf8 \uc548\uc5d0\uc11c \uc815\ub9d0 \ud070 \uc0ac\ub791\uc744 \ub290\ub07c\uac70\ub4e0. \uc544\ub2c8, \ud615\ub3c4 \ub098 \uc0ac\ub791\ud574\uc11c \ud558\ub294 \ub9d0\uc778 \uac70 \ub9de\ub294 \uac83 \uac19\uc544. \ub9de\uc9c0? \uc5b8\uc81c\uae4c\uc9c0\uace0 \uc5f0\uc560\uc5d0 \uc11c\ud234\ub2e4\ub294 \ub9d0\ub85c \ud551\uacc4 \ub308 \uc218\ub294 \uc5c6\uaca0\uc9c0\ub9cc \uc0ac\ub791\ud558\ub294 \ub9c8\uc74c \ud558\ub098\ub294 \ub108\ubb34\ub098\ub3c4 \ud655\uc2e4\ud558\uace0 \uadf8\uac8c \ud615\ud55c\ud14c \uc804\ub2ec\ub418\uc5c8\uc73c\uba74 \ud558\ub294 \ub9c8\uc74c\uc73c\ub85c \uc784\ud558\uace0 \uc788\uc73c\ub2c8\uae4c \uc55e\uc73c\ub85c\ub3c4 \ub098 \uc624\ub798 \ub370\ub9ac\uace0 \uc0b4\uc544 \uc918."}),Object(h.jsx)("span",{className:"letter",children:"P.S. \uc120\ubb3c \uba3c\uc800 \uace8\ub790\uc744\uc9c0 \ud3b8\uc9c0 \uba3c\uc800 \uace8\ub790\uc744\uc9c0\ub294 \ubaa8\ub974\uaca0\uc9c0\ub9cc \ud3b8\uc9c0 \uba3c\uc800 \uace8\ub790\uc73c\uba74 \uc120\ubb3c\ub3c4 \uaf2d \uac00. \ucf54\ub529 \uc774\uc0c1\ud558\uac8c \ud574\uc11c \uc120\ubb3c \uc120\ud0dd\uc9c0\uae4c\uc9c0 \uac00\ub824\uba74 \uac8c\uc784\uc744 \ub2e4\uc2dc \ucc98\uc74c\ubd80\ud130 \ud574\uc57c \ud558\uc9c0\ub9cc...... \uace0\ub974\uc9c0 \uc54a\uc558\ub358 \uc120\ud0dd\uc9c0 \uace0\ub974\uba74\uc11c \ub2e4\uc2dc \ud574 \ubd10. \uadf8\uac78 \ub2e4 \ub9cc\ub4e4\uace0 \uae68\ub2ec\uc544\uc11c \ub2e4\uc2dc \uc5ce\uae30\uc5d0\ub294 \uc2dc\uac04\uc774 \uc5c6\uc5c8\uc5b4. \ub098\ub294 \ud56d\uc0c1 \uc774\ub807\uac8c \ud558\ub098\uc529 \ud5c8\uc810\uc774 \uc788\ub2e4\ub2c8\uae4c. \uc778\uac04\ubbf8\ub85c \ud3ec\uc7a5\ud558\uc790. \uadf8\ub7ec\uba74 \uc9c4\uc9dc \ub05d. \uc0ac\ub791\ud574."}),Object(h.jsx)("span",{children:"\ud83d\udc9c"}),Object(h.jsx)("img",{className:"letter__image",src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0L8As%2FbtqZlQF4Jgi%2FBWkEw1VUsen4kDH6NpV1g0%2Fimg.png",alt:"ending"}),Object(h.jsx)("span",{children:"\ud83d\udc9c"})]})}}]),n}(i.a.Component));var g=function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(d.a,{path:"/",exact:!0,component:u}),Object(h.jsx)(d.a,{path:"/game",component:x}),Object(h.jsx)(d.a,{path:"/letter",component:p})]})};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5f8538da.chunk.js.map