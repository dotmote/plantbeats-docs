"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[486],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5073:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905));const i={id:"dashboard",title:"Dashboard",sidebar_position:2},o="Dashboard",l={unversionedId:"dashboard",id:"dashboard",title:"Dashboard",description:"The dashboard provides an overview of your nodes and graphs at a glance. You can navigate to the dashboard through the navigation bar at the top of the screen after you log in.",source:"@site/docs/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/dashboard",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"dashboard",title:"Dashboard",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Graphs",permalink:"/graphs"}},s={},d=[{value:"Widgets",id:"widgets",level:2},{value:"Summary",id:"summary",level:3},{value:"Node Info",id:"node-info",level:3},{value:"Last Heard",id:"last-heard",level:3},{value:"Last Viewed",id:"last-viewed",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"The dashboard provides an overview of your nodes and graphs at a glance. You can navigate to the dashboard through the navigation bar at the top of the screen after you log in."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard",src:a(9071).Z,width:"1256",height:"830"})),(0,r.kt)("p",null,"Features of this include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resizable containers"),(0,r.kt)("li",{parentName:"ul"},"Active node filters"),(0,r.kt)("li",{parentName:"ul"},"Attribute filters"),(0,r.kt)("li",{parentName:"ul"},"Google map")),(0,r.kt)("h2",{id:"widgets"},"Widgets"),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Summary")," widget provides a numerical overview of all node properties. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"summary",src:a(455).Z,width:"1131",height:"177"})),(0,r.kt)("p",null,"Information shown includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node status: Displays the number of active or inactive nodes."),(0,r.kt)("li",{parentName:"ul"},"Plant location: Displays the number of nodes in each plant location."),(0,r.kt)("li",{parentName:"ul"},"Node location: Displays the number of nodes in each node location."),(0,r.kt)("li",{parentName:"ul"},"Plant type: Displays the number of nodes with each plant type.")),(0,r.kt)("h3",{id:"node-info"},"Node Info"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Node Info")," widget provides an overview of individual node info. Clicking on any node will direct you to the details page of that node. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"node info",src:a(5403).Z,width:"819",height:"305"})),(0,r.kt)("p",null,"Information shown includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node ID"),(0,r.kt)("li",{parentName:"ul"},"Registration time"),(0,r.kt)("li",{parentName:"ul"},"Message history"),(0,r.kt)("li",{parentName:"ul"},"Node location"),(0,r.kt)("li",{parentName:"ul"},"Status"),(0,r.kt)("li",{parentName:"ul"},"Heat pulse duration"),(0,r.kt)("li",{parentName:"ul"},"Plant location"),(0,r.kt)("li",{parentName:"ul"},"Plant type"),(0,r.kt)("li",{parentName:"ul"},"Sleep interval")),(0,r.kt)("h3",{id:"last-heard"},"Last Heard"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Last Heard")," widget provides the last heard values of attributes from individual nodes. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"last heard",src:a(5611).Z,width:"397",height:"302"})),(0,r.kt)("p",null,"Information shown includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node ID"),(0,r.kt)("li",{parentName:"ul"},"Node location"),(0,r.kt)("li",{parentName:"ul"},"Plant location"),(0,r.kt)("li",{parentName:"ul"},"Attribute"),(0,r.kt)("li",{parentName:"ul"},"Last heard timestamp")),(0,r.kt)("h3",{id:"last-viewed"},"Last Viewed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Last Viewed")," widget provides thumbnails and shortcuts to your last viewed graphs. Click on any graph to be directed to a more detailed view of the graph."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"last viewed",src:a(33).Z,width:"1239",height:"478"})),(0,r.kt)("p",null,"Information shown includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Graph"),(0,r.kt)("li",{parentName:"ul"},"Graph title"),(0,r.kt)("li",{parentName:"ul"},"Node ids"),(0,r.kt)("li",{parentName:"ul"},"Attribute"),(0,r.kt)("li",{parentName:"ul"},"Favorite status")))}c.isMDXComponent=!0},9071:function(e,t,a){t.Z=a.p+"assets/images/dashboard-509334e0190d8beb9f4c5b4594e5303b.png"},5611:function(e,t,a){t.Z=a.p+"assets/images/last_heard-c8e7fba5d22320f956fe7e78b0d8b1b9.png"},33:function(e,t,a){t.Z=a.p+"assets/images/last_viewed-283f4eddd46414e2e5f03fd8dd6875f3.png"},5403:function(e,t,a){t.Z=a.p+"assets/images/nodes_info-47aab8d608f8df8e57ad6a55793503e0.png"},455:function(e,t,a){t.Z=a.p+"assets/images/summary-d66407472951db6a88e1ecacf0bd74f9.png"}}]);