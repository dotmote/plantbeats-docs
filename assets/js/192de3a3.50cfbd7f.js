"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[627],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,g=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return a?r.createElement(g,l(l({ref:t},s),{},{components:a})):r.createElement(g,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9879:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"graphs",title:"Graphs",sidebar_position:3},p="Graphs",u={unversionedId:"graphs",id:"graphs",isDocsHomePage:!1,title:"Graphs",description:"The Graphs page displays all of your graphs. Here, you can create, edit, and delete graphs.",source:"@site/docs/graphs.md",sourceDirName:".",slug:"/graphs",permalink:"/plantbeats-docs/graphs",version:"current",sidebarPosition:3,frontMatter:{id:"graphs",title:"Graphs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/plantbeats-docs/dashboard"},next:{title:"Nodes",permalink:"/plantbeats-docs/nodes"}},s=[{value:"Creating a Graph",id:"creating-a-graph",children:[]},{value:"Editing a Graph",id:"editing-a-graph",children:[]},{value:"Graph Details",id:"graph-details",children:[]},{value:"Favorite-ing a Graph",id:"favorite-ing-a-graph",children:[]}],d={toc:s};function c(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphs"},"Graphs"),(0,i.kt)("p",null,"The Graphs page displays all of your graphs. Here, you can create, edit, and delete graphs."),(0,i.kt)("h3",{id:"creating-a-graph"},"Creating a Graph"),(0,i.kt)("p",null,"To create a graph comparing a single attribute among multiple nodes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the Graphs page, click the ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," near the top left corner of your screen."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"By Node")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"Add a Graph"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a Graph Title."),(0,i.kt)("li",{parentName:"ol"},"Select the node ids of the nodes you want to compare."),(0,i.kt)("li",{parentName:"ol"},"Select the node attribute you would like to compare."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,"A newly created graph will display 24 hours worth of data with graph lines of different colors. You are able to change these values by editing the graph."),(0,i.kt)("h3",{id:"editing-a-graph"},"Editing a Graph"),(0,i.kt)("p",null,"Click the graph you would like to edit. You will be redirected to a page that lets you to reconfigure your graph. "),(0,i.kt)("p",null,"The following properties can be modified:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Graph title"),(0,i.kt)("li",{parentName:"ul"},"Node(s) being compared"),(0,i.kt)("li",{parentName:"ul"},"Attribute(s) being compared"),(0,i.kt)("li",{parentName:"ul"},"Date range of the data"),(0,i.kt)("li",{parentName:"ul"},"X axis range"),(0,i.kt)("li",{parentName:"ul"},"Y axis range"),(0,i.kt)("li",{parentName:"ul"},"Annotations"),(0,i.kt)("li",{parentName:"ul"},"Graph colors"),(0,i.kt)("li",{parentName:"ul"},"Graph type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Line graph"),(0,i.kt)("li",{parentName:"ul"},"Bar graph"),(0,i.kt)("li",{parentName:"ul"},"Scatter plot"))),(0,i.kt)("li",{parentName:"ul"},"Tags")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"details",src:a(5912).Z})),(0,i.kt)("h3",{id:"graph-details"},"Graph Details"),(0,i.kt)("p",null,"To view a particular graph in greater detail, click on the graph. You will be redirected to a page that will let you view a graph in greater detail as well as edit that graph."),(0,i.kt)("p",null,"The following details can be viewed:"),(0,i.kt)("h4",{id:"graph"},"Graph"),(0,i.kt)("p",null,"A graph of bigger size can be viewed and analyzed in greater detail."),(0,i.kt)("p",null,"Features of this include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Annotations display when graph is in range."),(0,i.kt)("li",{parentName:"ul"},"Tooltips that display data when hovering over points."),(0,i.kt)("li",{parentName:"ul"},"Dynamically updating graph fields and types.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"graph",src:a(2390).Z})),(0,i.kt)("h4",{id:"node-info"},"Node Info"),(0,i.kt)("p",null,"Node info of the node(s) being used is displayed."),(0,i.kt)("p",null,"Information displayed includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node ID"),(0,i.kt)("li",{parentName:"ul"},"Registration time"),(0,i.kt)("li",{parentName:"ul"},"Message history"),(0,i.kt)("li",{parentName:"ul"},"Node location"),(0,i.kt)("li",{parentName:"ul"},"Plant location"),(0,i.kt)("li",{parentName:"ul"},"Plant Type"),(0,i.kt)("li",{parentName:"ul"},"Status"),(0,i.kt)("li",{parentName:"ul"},"Heat pulse duration"),(0,i.kt)("li",{parentName:"ul"},"Sleep interval")),(0,i.kt)("h4",{id:"raw-data"},"Raw Data"),(0,i.kt)("p",null,"Raw data of the node(s)' sapflows is displayed."),(0,i.kt)("p",null,"Features of this include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to switch between raw data of different nodes"),(0,i.kt)("li",{parentName:"ul"},"Export raw data to .csv")),(0,i.kt)("p",null,"Information displayed includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Timestamp"),(0,i.kt)("li",{parentName:"ul"},"Node ID"),(0,i.kt)("li",{parentName:"ul"},"Mean Heat Ratio"),(0,i.kt)("li",{parentName:"ul"},"Mean Outside Temperature"),(0,i.kt)("li",{parentName:"ul"},"Mean Soil Moisture"),(0,i.kt)("li",{parentName:"ul"},"Mean Outside Humidity")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data",src:a(8218).Z})),(0,i.kt)("h4",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Annotations made of the graph can be viewed."),(0,i.kt)("h4",{id:"edit-history"},"Edit History"),(0,i.kt)("p",null,"If any property of the graph is changed, it will be documented in the edit history."),(0,i.kt)("h3",{id:"favorite-ing-a-graph"},"Favorite-ing a Graph"),(0,i.kt)("p",null,"To favorite/un-favorite a graph, click the star icon next to the graph. Favorite graphs are indicated by a full yellow star icon. "),(0,i.kt)("p",null,"Alternatively, you can click on the graph. You will be redirected to a page that lets you view your graph in greater detail. You can can on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Favorite")," Button from there."))}c.isMDXComponent=!0},8218:function(e,t,a){t.Z=a.p+"assets/images/data-ea57b8de9d92a6094d4534dfabc28963.png"},5912:function(e,t,a){t.Z=a.p+"assets/images/fields-49155234f064a648d0c80f658154d30c.png"},2390:function(e,t,a){t.Z=a.p+"assets/images/graph-c48cabe18706b4c8f238fe1c3468012c.png"}}]);