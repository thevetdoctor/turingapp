(this["webpackJsonpturingapp-ui"]=this["webpackJsonpturingapp-ui"]||[]).push([[0],{36:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},68:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(24),i=n.n(r),o=(n(48),n(19)),d=n(11),u=n(15),l=n(2),j=(n(49),n(4)),h=n.n(j),p=n(12),b=n(8),f=n.n(b),O=n(16),k=(n(68),Object(c.createContext)()),x=function(e){var t=e.reducer,n=e.initialState,s=e.children;return Object(a.jsx)(k.Provider,{value:Object(c.useReducer)(t,n),children:s})},v=function(){return Object(c.useContext)(k)},m=n(41),g=n.n(m),T=function(){return console.log(window.location.host),window.location.host.indexOf("localhost")>-1?"http://localhost:5000":"https://daychecker.herokuapp.com"},y=T();function _(e){var t=e.checked,n=v(),c=Object(d.a)(n,2);Object(o.a)(c[0]);var s=c[1],r=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"DELETE_TASK",taskId:t}),e.next=3,f()({method:"DELETE",url:"".concat(y,"/tasks/").concat(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,console.log("API deleteTask data",n.data),e.next=7,f()({method:"GET",url:"".concat(y,"/tasks"),headers:{"Content-Type":"application/json"}});case 7:a=e.sent,console.log("API data",a.data),s({type:"GET_TASKS",tasks:a.data});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"EDIT_TASK",taskId:t}),e.next=3,f()({method:"PATCH",url:"".concat(y,"/tasks/").concat(t),headers:{"Content-Type":"application/json"},data:{name:"edited",type:"edited"}});case 3:return n=e.sent,console.log("API editTask data",n.data),e.next=7,f()({method:"GET",url:"".concat(y,"/tasks"),headers:{"Content-Type":"application/json"}});case 7:a=e.sent,console.log("API data",a.data),s({type:"GET_TASKS",tasks:a.data});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var t=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"CHECK_TASK",taskId:e.id}),t.next=3,f()({method:"PATCH",url:"".concat(y,"/tasks/").concat(e.id),headers:{"Content-Type":"application/json"},data:{checked:"strike",done:!0}});case 3:n=t.sent,console.log("API data",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(p.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"UNCHECK_TASK",taskId:e.id}),t.next=3,f()({method:"PATCH",url:"".concat(y,"/tasks/").concat(e.id),headers:{"Content-Type":"application/json"},data:{checked:"",done:!1}});case 3:a=t.sent,console.log("API data",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"task ".concat(e.checked),children:[Object(a.jsx)("input",{className:"task_checkbox",type:"checkbox",checked:t,onChange:function(){t?(console.log("unchecked"),l(e.id)):(console.log("checked"),u(e.id))}}),Object(a.jsxs)("div",{className:"task_main",children:[e.name,Object(a.jsx)("span",{children:Object(a.jsx)(g.a,{fromNow:!0,children:e.createdOn})})]}),Object(a.jsxs)("div",{className:"task_btn",children:[Object(a.jsx)("div",{className:"task_delete",onClick:function(){return r(e.id)},children:Object(a.jsx)(O.d,{})}),Object(a.jsx)("div",{className:"task_edit",onClick:function(){return i(e.id)},children:Object(a.jsx)(O.a,{})})]})]})}n(36);var C=n(25),A=n.n(C),S=T(),E={content:{backgroundColor:"rgb(79, 165, 199)",fontSize:"1.2em",top:"44%",left:"50%",right:"auto",bottom:"auto",marginRight:"50%",transform:"translate(-50%, -50%)",display:"flex",flexFlow:"column",width:"75vw",alignItems:"center",borderRadius:"2em",justifyContent:"center"}};function w(e){var t=v(),n=Object(d.a)(t,2),s=n[0].tasks,r=n[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(c.useState)(!1),k=Object(d.a)(b,2),x=k[0],m=k[1];A.a.setAppElement("div"),Object(c.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",url:"".concat(S,"/tasks"),headers:{"Content-Type":"application/json"}});case 2:t=e.sent,console.log("API data",t.data),r({type:"GET_TASKS",tasks:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){j(!1),m(!1)}),[s]);var g=function(){var e=Object(p.a)(h.a.mark((function e(t,n){var a,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Math.trunc(100*Math.random()),c="5fa82b63f201f705d1a3ab".concat(a),t&&n){e.next=5;break}return console.log("Input fields must be filled"),e.abrupt("return",!1);case 5:return j(!0),r({type:"ADD_TASK",task:{id:c,name:t,type:n}}),e.next=9,f()({method:"POST",url:"".concat(S,"/tasks/new"),headers:{"Content-Type":"application/json"},data:{name:t,type:n}});case 9:return s=e.sent,console.log("API data",s.data,s.status,c),j(!1),200===s.status&&m(!1),e.abrupt("return");case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(e){e.preventDefault(),console.log(e.target.value)},y=s.filter((function(e){return"strike"!==e.checked}));return console.log("within Task component: ",y),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["My Pending Tasks : ",null===y||void 0===y?void 0:y.length]}),Object(a.jsxs)(A.a,{isOpen:x,style:E,children:[Object(a.jsxs)("div",{className:"closeBtn",onClick:function(){return m(!1)},children:[Object(a.jsx)("span",{children:"close"}),Object(a.jsx)(O.c,{})]}),Object(a.jsx)("h2",{children:" Schedule a new task! "}),Object(a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=e.target[0].value,n=e.target[1].value;console.log(e.target[1].value),g(t,n)}(e)},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Task"}),Object(a.jsx)("input",{type:"text",placeholder:"Enter your task e.g. Laundry",onChange:function(e){T(e)},required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Category"}),Object(a.jsx)("input",{type:"text",placeholder:"Enter category, e.g chores",onChange:function(e){T(e)},required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Date & Time"}),Object(a.jsx)("input",{type:"datetime-local",onChange:function(e){T(e)},required:!0})]}),Object(a.jsx)("input",{type:"submit",value:l?"Submitting":"Submit"})]})]}),Object(a.jsxs)("div",{className:"tasks_main",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"tasks_new",onClick:function(){return m(!0)},children:[Object(a.jsx)(O.b,{}),Object(a.jsx)("span",{children:"Add Task"})]}),Object(a.jsx)(u.b,{to:"/done",children:Object(a.jsx)("div",{className:"tasks_new",children:Object(a.jsx)("span",{children:"Finished Tasks"})})})]}),null===y||void 0===y?void 0:y.map((function(e){return Object(a.jsx)(_,{id:e._id,name:e.name,type:e.type,status:e.status,checked:e.checked,done:e.done,createdOn:e.createdOn,updatedOn:e.updatedOn,finishedOn:e.finishedOn},e._id?e._id:e.id)}))]})]})}var I=T();function K(e){var t=v(),n=Object(d.a)(t,2),s=n[0].tasks,r=n[1];Object(c.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",url:"".concat(I,"/tasks"),headers:{"Content-Type":"application/json"}});case 2:t=e.sent,console.log("API data",t.data),r({type:"GET_TASKS",tasks:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=s.filter((function(e){return"strike"===e.checked}));return console.log("within Task component: ",i),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["My Finished Tasks : ",null===i||void 0===i?void 0:i.length]}),Object(a.jsxs)("div",{className:"tasks_main",children:[Object(a.jsx)("div",{children:Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("div",{className:"tasks_new",children:Object(a.jsx)("span",{children:"Pending Tasks"})})})}),null===i||void 0===i?void 0:i.map((function(e){return Object(a.jsx)(_,{id:e._id,name:e.name,type:e.type,status:e.status,checked:e.checked,done:e.done,createdOn:e.createdOn,updatedOn:e.updatedOn,finishedOn:e.finishedOn},e._id?e._id:e.id)}))]})]})}function P(){return Object(a.jsx)("h2",{children:"Daily Task Manager"})}var N=function(){var e=v(),t=Object(d.a)(e,2);return Object(o.a)(t[0]),t[1],Object(a.jsx)(u.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.c,{children:[Object(a.jsxs)(l.a,{exact:!0,path:"/",children:[Object(a.jsx)(P,{}),Object(a.jsx)(w,{})]}),Object(a.jsxs)(l.a,{path:"/done",children:[Object(a.jsx)(P,{}),Object(a.jsx)(K,{})]})]})})})},D=n(17),G=n(10),L=function(e,t){switch(console.log(t),t.type){case"ADD_TASK":return console.log("ADD_TASK:reducer: ",t.task),Object(G.a)(Object(G.a)({},e),{},{tasks:[t.task].concat(Object(D.a)(e.tasks))});case"GET_TASKS":return console.log("GET_TASKS:reducer: ",t.tasks),Object(G.a)(Object(G.a)({},e),{},{tasks:Object(D.a)(t.tasks)});case"DELETE_TASK":console.log("DELETE_TASK:reducer ",t.taskId);var n=Object(D.a)(e.tasks),a=n.findIndex((function(e){return e._id===t.taskId}));return n.splice(a,1),console.log("taskIndex: ",a,"taskList: ",n),Object(G.a)(Object(G.a)({},e),{},{tasks:n});case"CHECK_TASK":console.log("CHECK_TASK:reducer ",t.taskId);var c=Object(D.a)(e.tasks),s=c.findIndex((function(e){return e._id===t.taskId}));c[s].done=!0,c[s].checked="strike";var r=c.filter((function(e){return"strike"===e.checked}));return console.log("taskIndex: ",s,"taskList: ",c,"checkedTasks: ",r),Object(G.a)(Object(G.a)({},e),{},{tasks:c});case"UNCHECK_TASK":console.log("UNCHECK_TASK:reducer ",t.taskId);var i=Object(D.a)(e.tasks),o=i.findIndex((function(e){return e._id===t.taskId}));i[o].done=!1,i[o].checked="";var d=i.filter((function(e){return"strike"===e.checked}));return console.log("taskIndex: ",o,"taskList: ",i,"checkedTasks: ",d),Object(G.a)(Object(G.a)({},e),{},{tasks:i});default:return e}},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{reducer:L,initialState:{tasks:[{name:"flying",type:"social",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7e"},{name:"swimming",type:"social",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7f"},{name:"reading",type:"social",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7g"},{name:"travelling",type:"social",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7h"},{name:"sleeping",type:"social",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7i"},{name:"studying",type:"social",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7j"}],user:null},children:Object(a.jsx)(N,{})})}),document.getElementById("root")),H()}},[[85,1,2]]]);
//# sourceMappingURL=main.0b68909f.chunk.js.map