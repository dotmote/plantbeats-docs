"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[627],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(o,".").concat(h)]||c[h]||s[h]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9879:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],p={id:"graphs",title:"Graphs",sidebar_position:3},o="Graphs",u={unversionedId:"graphs",id:"graphs",isDocsHomePage:!1,title:"Graphs",description:"The Graphs page displays all of your graphs. Here, you can create, edit, and delete graphs.",source:"@site/docs/graphs.md",sourceDirName:".",slug:"/graphs",permalink:"/graphs",version:"current",sidebarPosition:3,frontMatter:{id:"graphs",title:"Graphs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/dashboard"},next:{title:"Nodes",permalink:"/nodes"}},d=[{value:"Creating a Graph",id:"creating-a-graph",children:[]},{value:"Editing a Graph",id:"editing-a-graph",children:[]},{value:"Annotating a Graph",id:"annotating-a-graph",children:[]},{value:"Graph Details",id:"graph-details",children:[]},{value:"Favorite-ing a Graph",id:"favorite-ing-a-graph",children:[]}],s={toc:d};function c(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphs"},"Graphs"),(0,i.kt)("p",null,"The Graphs page displays all of your graphs. Here, you can create, edit, and delete graphs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add a graph popup",src:a(8469).Z})),(0,i.kt)("h3",{id:"creating-a-graph"},"Creating a Graph"),(0,i.kt)("p",null,"To create a graph comparing a single attribute among multiple nodes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Graphs page, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," near the top left corner of your screen.\nThis popup will appear:\n",(0,i.kt)("img",{alt:"Add a graph popup",src:a(7562).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"By Node")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"Add a Graph"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graph Title"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the node ids of the nodes you want to compare.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the node attribute you would like to compare.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),"."))),(0,i.kt)("p",null,"To create a graph comparing a single attribute among multiple nodes with the same properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Graphs page, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," near the top left corner of your screen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"By Property")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"Add a Graph"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graph Title"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the node attribute you would like to compare.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Plant Type")," you would like your nodes to have.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Node Location")," you would like your nodes to have.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Plant Location")," you would like your nodes to have.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the node ids of the nodes you want to compare.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),"."))),(0,i.kt)("p",null,"A newly created graph will display 24 hours worth of data with graph lines of different colors. You are able to change these values by editing the graph."),(0,i.kt)("h3",{id:"editing-a-graph"},"Editing a Graph"),(0,i.kt)("p",null,"Click the graph you would like to edit. You will be redirected to a page that lets you to reconfigure your graph. "),(0,i.kt)("p",null,"The following properties can be modified:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Graph title"),(0,i.kt)("li",{parentName:"ul"},"Node(s) being compared"),(0,i.kt)("li",{parentName:"ul"},"Attribute(s) being compared"),(0,i.kt)("li",{parentName:"ul"},"Date range of the data"),(0,i.kt)("li",{parentName:"ul"},"X axis range"),(0,i.kt)("li",{parentName:"ul"},"Y axis range"),(0,i.kt)("li",{parentName:"ul"},"Annotations"),(0,i.kt)("li",{parentName:"ul"},"Graph colors"),(0,i.kt)("li",{parentName:"ul"},"Graph type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Line graph"),(0,i.kt)("li",{parentName:"ul"},"Bar graph"),(0,i.kt)("li",{parentName:"ul"},"Scatter plot"))),(0,i.kt)("li",{parentName:"ul"},"Tags")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"details",src:a(5912).Z})),(0,i.kt)("h3",{id:"annotating-a-graph"},"Annotating a Graph"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the graph you would like to annotate. You will be redirected to a page that lets you to annotate your graph. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+ ANNOTATE")," button. This popup will appear:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add annotation popup",src:a(1786).Z})))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the annotation label in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Label")," field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select your annotation type.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the date you would like your annotation on.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the label position x value.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the label position y value."))),(0,i.kt)("h3",{id:"graph-details"},"Graph Details"),(0,i.kt)("p",null,"To view a particular graph in greater detail, click on the graph. You will be redirected to a page that will let you view a graph in greater detail as well as edit that graph."),(0,i.kt)("p",null,"The following details can be viewed:"),(0,i.kt)("h4",{id:"graph"},"Graph"),(0,i.kt)("p",null,"A graph of bigger size can be viewed and analyzed in greater detail."),(0,i.kt)("p",null,"Features of this include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Annotations display when graph is in range."),(0,i.kt)("li",{parentName:"ul"},"Tooltips that display data when hovering over points."),(0,i.kt)("li",{parentName:"ul"},"Dynamically updating graph fields and types.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"graph",src:a(2390).Z})),(0,i.kt)("h4",{id:"node-info"},"Node Info"),(0,i.kt)("p",null,"Node info of the node(s) being used is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node info",src:a(6147).Z})),(0,i.kt)("p",null,"Information displayed includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node ID"),(0,i.kt)("li",{parentName:"ul"},"Registration time"),(0,i.kt)("li",{parentName:"ul"},"Message history"),(0,i.kt)("li",{parentName:"ul"},"Node location"),(0,i.kt)("li",{parentName:"ul"},"Plant location"),(0,i.kt)("li",{parentName:"ul"},"Plant Type"),(0,i.kt)("li",{parentName:"ul"},"Status"),(0,i.kt)("li",{parentName:"ul"},"Heat pulse duration"),(0,i.kt)("li",{parentName:"ul"},"Sleep interval")),(0,i.kt)("h4",{id:"raw-data"},"Raw Data"),(0,i.kt)("p",null,"Raw data of the node(s)' sapflows is displayed."),(0,i.kt)("p",null,"Features of this include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to switch between raw data of different nodes"),(0,i.kt)("li",{parentName:"ul"},"Export raw data to .csv")),(0,i.kt)("p",null,"Information displayed includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Timestamp"),(0,i.kt)("li",{parentName:"ul"},"Node ID"),(0,i.kt)("li",{parentName:"ul"},"Mean Heat Ratio"),(0,i.kt)("li",{parentName:"ul"},"Mean Outside Temperature"),(0,i.kt)("li",{parentName:"ul"},"Mean Soil Moisture"),(0,i.kt)("li",{parentName:"ul"},"Mean Outside Humidity")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data",src:a(8218).Z})),(0,i.kt)("h4",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Annotations made of the graph can be viewed."),(0,i.kt)("h4",{id:"edit-history"},"Edit History"),(0,i.kt)("p",null,"If any property of the graph is changed, it will be documented in the edit history."),(0,i.kt)("h3",{id:"favorite-ing-a-graph"},"Favorite-ing a Graph"),(0,i.kt)("p",null,"To favorite/un-favorite a graph, click the star icon next to the graph. Favorite graphs are indicated by a full yellow star icon. "),(0,i.kt)("p",null,"Alternatively, you can click on the graph. You will be redirected to a page that lets you view your graph in greater detail. You can can on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Favorite")," Button from there."))}c.isMDXComponent=!0},1786:function(e,t,a){t.Z=a.p+"assets/images/add_annotation_popup-937b70774636645a50861cf4f34bbb34.png"},7562:function(e,t,a){t.Z=a.p+"assets/images/create_graph-82e8d6ad3ff91921e22a31b8c2115cc2.png"},8218:function(e,t,a){t.Z=a.p+"assets/images/data-ea57b8de9d92a6094d4534dfabc28963.png"},5912:function(e,t,a){t.Z=a.p+"assets/images/fields-49155234f064a648d0c80f658154d30c.png"},2390:function(e,t,a){t.Z=a.p+"assets/images/graph-c48cabe18706b4c8f238fe1c3468012c.png"},8469:function(e,t,a){t.Z=a.p+"assets/images/graphs_page-d0a68368eded0be4bb7c80f57aaa91bd.png"},6147:function(e,t,a){t.Z=a.p+"assets/images/node_info-f9e9f0c4a233c591fca339e0fedc8ac4.png"}}]);