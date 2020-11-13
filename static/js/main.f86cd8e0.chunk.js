(this["webpackJsonpturingapp-ui"]=this["webpackJsonpturingapp-ui"]||[]).push([[0],{36:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},68:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),r=n(24),i=n.n(r),d=(n(48),n(19)),o=n(10),u=n(16),l=n(2),j=(n(49),n(5)),h=n.n(j),O=n(11),f=n(12),p=n.n(f),b=n(18),k=(n(68),Object(c.createContext)()),x=function(e){var t=e.reducer,n=e.initialState,s=e.children;return Object(a.jsx)(k.Provider,{value:Object(c.useReducer)(t,n),children:s})},v=function(){return Object(c.useContext)(k)},m=n(41),g=n.n(m);function T(e){var t=e.checked,n=v(),c=Object(o.a)(n,2);Object(d.a)(c[0]);var s=c[1],r=function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"DELETE_TASK",taskId:t}),e.next=3,p()({method:"GET",url:"http://localhost:5000/tasks",headers:{"Content-Type":"application/json"}});case 3:n=e.sent,console.log("API data",n.data),s({type:"GET_TASKS",tasks:n.data});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var t=Object(O.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"CHECK_TASK",taskId:e.id}),t.next=3,p()({method:"PATCH",url:"http://localhost:5000/tasks/".concat(e.id),headers:{"Content-Type":"application/json"},data:{checked:"strike",done:!0}});case 3:n=t.sent,console.log("API data",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(O.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"UNCHECK_TASK",taskId:e.id}),t.next=3,p()({method:"PATCH",url:"http://localhost:5000/tasks/".concat(e.id),headers:{"Content-Type":"application/json"},data:{checked:"",done:!1}});case 3:a=t.sent,console.log("API data",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"task ".concat(e.checked),children:[Object(a.jsx)("input",{className:"task_checkbox",type:"checkbox",checked:t,onChange:function(){t?(console.log("unchecked"),u(e.id)):(console.log("checked"),i(e.id))}}),Object(a.jsxs)("div",{className:"task_main",children:[e.name,Object(a.jsx)("span",{children:Object(a.jsx)(g.a,{fromNow:!0,children:e.createdOn})})]}),Object(a.jsx)("div",{className:"task_delete",onClick:function(){return r(e.id)},children:Object(a.jsx)(b.c,{})})]})}n(36);var y=n(25),_=n.n(y),C={content:{backgroundColor:"rgb(79, 165, 199)",fontSize:"1.5em",top:"40%",left:"50%",right:"auto",bottom:"auto",marginRight:"50%",transform:"translate(-50%, -50%)",display:"flex",flexFlow:"column",width:"100vw",alignItems:"center",borderRadius:"1em",justifyContent:"center"}};function E(e){var t=v(),n=Object(o.a)(t,2),s=n[0].tasks,r=n[1],i=Object(c.useState)(!1),d=Object(o.a)(i,2),l=d[0],j=d[1];_.a.setAppElement("div"),Object(c.useEffect)((function(){(function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"GET",url:"http://localhost:5000/tasks",headers:{"Content-Type":"application/json"}});case 2:t=e.sent,console.log("API data",t.data),r({type:"GET_TASKS",tasks:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(e){e.preventDefault(),console.log(e.target.value)},k=s.filter((function(e){return"strike"!==e.checked}));return console.log("within Task component: ",k),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["My Tasks : ",null===k||void 0===k?void 0:k.length]}),Object(a.jsxs)(_.a,{isOpen:l,style:C,children:[Object(a.jsx)("div",{className:"closeBtn",onClick:function(){return j(!1)},children:Object(a.jsx)(b.b,{})}),Object(a.jsx)("h2",{children:" Plan a new task! "}),Object(a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(e.target)}(e)},children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter your task e.g. Read",onChange:function(e){f(e)}}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",placeholder:"Enter category, e.g sports",onChange:function(e){f(e)}}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit"})]})]}),Object(a.jsxs)("div",{className:"tasks_main",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"tasks_new",onClick:function(){return j(!0)},children:[Object(a.jsx)(b.a,{}),Object(a.jsx)("span",{children:"Add Task"})]}),Object(a.jsx)(u.b,{to:"/done",children:Object(a.jsx)("div",{className:"tasks_new",children:Object(a.jsx)("span",{children:"Finished Tasks"})})})]}),null===k||void 0===k?void 0:k.map((function(e){return Object(a.jsx)(T,{id:e._id,name:e.name,type:e.type,status:e.status,checked:e.checked,done:e.done,createdOn:e.createdOn,updatedOn:e.updatedOn,finishedOn:e.finishedOn},e._id)}))]})]})}function A(e){var t=v(),n=Object(o.a)(t,2),s=n[0].tasks,r=n[1];Object(c.useEffect)((function(){(function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"GET",url:"http://localhost:5000/tasks",headers:{"Content-Type":"application/json"}});case 2:t=e.sent,console.log("API data",t.data),r({type:"GET_TASKS",tasks:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=s.filter((function(e){return"strike"===e.checked}));return console.log("within Task component: ",i),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["My Finished Tasks : ",null===i||void 0===i?void 0:i.length]}),Object(a.jsxs)("div",{className:"tasks_main",children:[Object(a.jsx)("div",{children:Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("div",{className:"tasks_new",children:Object(a.jsx)("span",{children:"Back to Tasks"})})})}),null===i||void 0===i?void 0:i.map((function(e){return Object(a.jsx)(T,{id:e._id,name:e.name,type:e.type,status:e.status,checked:e.checked,done:e.done,createdOn:e.createdOn,updatedOn:e.updatedOn,finishedOn:e.finishedOn},e._id)}))]})]})}function S(){return Object(a.jsx)("h2",{children:"Turing Task Manager"})}var w=function(){var e=v(),t=Object(o.a)(e,2);return Object(d.a)(t[0]),t[1],Object(a.jsx)(u.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.c,{children:[Object(a.jsxs)(l.a,{exact:!0,path:"/",children:[Object(a.jsx)(S,{}),Object(a.jsx)(E,{})]}),Object(a.jsxs)(l.a,{path:"/done",children:[Object(a.jsx)(S,{}),Object(a.jsx)(A,{})]})]})})})},I=n(15),K=n(9),N=function(e,t){switch(console.log(t),t.type){case"ADD_TASK":return console.log("ADD_TASK:reducer: ",t.task),Object(K.a)(Object(K.a)({},e),{},{tasks:[].concat(Object(I.a)(e.tasks),Object(I.a)(t.task))});case"GET_TASKS":return console.log("GET_TASKS:reducer: ",t.tasks),Object(K.a)(Object(K.a)({},e),{},{tasks:Object(I.a)(t.tasks)});case"DELETE_TASK":console.log("DELETE_TASK:reducer ",t.taskId);var n=Object(I.a)(e.tasks),a=n.findIndex((function(e){return e._id===t.taskId}));return n.splice(a,1),console.log("taskIndex: ",a,"taskList: ",n),Object(K.a)(Object(K.a)({},e),{},{tasks:n});case"CHECK_TASK":console.log("CHECK_TASK:reducer ",t.taskId);var c=Object(I.a)(e.tasks),s=c.findIndex((function(e){return e._id===t.taskId}));c[s].done=!0,c[s].checked="strike";var r=c.filter((function(e){return"strike"===e.checked}));return console.log("taskIndex: ",s,"taskList: ",c,"checkedTasks: ",r),Object(K.a)(Object(K.a)({},e),{},{tasks:c});case"UNCHECK_TASK":console.log("UNCHECK_TASK:reducer ",t.taskId);var i=Object(I.a)(e.tasks),d=i.findIndex((function(e){return e._id===t.taskId}));i[d].done=!1,i[d].checked="";var o=i.filter((function(e){return"strike"===e.checked}));return console.log("taskIndex: ",d,"taskList: ",i,"checkedTasks: ",o),Object(K.a)(Object(K.a)({},e),{},{tasks:i});default:return e}},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{reducer:N,initialState:{tasks:[{name:"flying",type:"social",status:"active",checked:"",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7e"},{name:"swimming",type:"social",status:"active",checked:"",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7f"},{name:"reading",type:"social",status:"active",checked:"",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7g"},{name:"travelling",type:"social",status:"active",checked:"",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7h"},{name:"sleeping",type:"social",status:"active",checked:"",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7i"},{name:"studying",type:"social",status:"active",checked:"",createdOn:1604856675826,updatedOn:1604856675827,finishedOn:1604856675827,_id:"5fa82b63f201f705d1a3ab7j"}],user:null},children:Object(a.jsx)(w,{})})}),document.getElementById("root")),P()}},[[85,1,2]]]);
//# sourceMappingURL=main.f86cd8e0.chunk.js.map