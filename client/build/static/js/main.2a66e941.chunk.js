(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{194:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(174),i=n.n(s),r=n(28),o=(n(194),n(175)),j=n.n(o),u=n(106),h=n.n(u),l=n(110),b=n(176),d=n(189),O=n(3);var m=function(e){var t=e.socket,n=e.username,a=e.room,s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],u=Object(c.useState)([]),m=Object(r.a)(u,2),x=m[0],p=m[1],f=function(){var e=Object(b.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===o){e.next=6;break}return c={room:a,author:n,message:o,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=4,t.emit("send_message",c);case 4:p((function(e){return[].concat(Object(l.a)(e),[c])})),j("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t.on("receive_message",(function(e){p((function(t){return[].concat(Object(l.a)(t),[e])}))}))}),[t]),Object(O.jsxs)("div",{className:"chat-window",children:[Object(O.jsx)("div",{className:"chat-header",children:Object(O.jsx)("p",{children:"Live Chat"})}),Object(O.jsx)("div",{className:"chat-body",children:Object(O.jsx)(d.a,{className:"message-container",children:x.map((function(e){return Object(O.jsx)("div",{className:"message",id:n===e.author?"you":"other",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"message-content",children:Object(O.jsx)("p",{children:e.message})}),Object(O.jsxs)("div",{className:"message-meta",children:[Object(O.jsx)("p",{id:"time",children:e.time}),Object(O.jsx)("p",{id:"author",children:e.author})]})]})})}))})}),Object(O.jsxs)("div",{className:"chat-footer",children:[Object(O.jsx)("input",{type:"text",value:o,placeholder:"Hey...",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}),Object(O.jsx)("button",{onClick:f,children:"\u25ba"})]})]})},x=j.a.connect("http://localhost:3001");var p=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],u=Object(c.useState)(!1),h=Object(r.a)(u,2),l=h[0],b=h[1];return Object(O.jsx)("div",{className:"App",children:l?Object(O.jsx)(m,{socket:x,username:n,room:o}):Object(O.jsxs)("div",{className:"joinChatContainer",children:[Object(O.jsx)("h3",{children:"Join A Chat"}),Object(O.jsx)("input",{type:"text",placeholder:"John...",onChange:function(e){a(e.target.value)}}),Object(O.jsx)("input",{type:"text",placeholder:"Room ID...",onChange:function(e){j(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){""!==n&&""!==o&&(x.emit("join_room",o),b(!0))},children:"Join A Room"})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,384)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),f()}},[[383,1,2]]]);
//# sourceMappingURL=main.2a66e941.chunk.js.map