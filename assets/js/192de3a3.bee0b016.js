"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[627],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(a),h=l,g=s["".concat(p,".").concat(h)]||s[h]||c[h]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5395:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var n=a(3117),l=(a(7294),a(3905));const i={id:"graphs",title:"Graphs",sidebar_position:3},r="Graphs",o={unversionedId:"graphs",id:"graphs",title:"Graphs",description:"The Graphs page displays all of your graphs. Here, you can create, edit, and delete graphs.",source:"@site/docs/graphs.md",sourceDirName:".",slug:"/graphs",permalink:"/graphs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"graphs",title:"Graphs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/dashboard"},next:{title:"Nodes",permalink:"/nodes"}},p={},u=[{value:"Creating a Graph",id:"creating-a-graph",level:3},{value:"Editing a Graph",id:"editing-a-graph",level:3},{value:"Annotating a Graph",id:"annotating-a-graph",level:3},{value:"Graph Details",id:"graph-details",level:3},{value:"Graph",id:"graph",level:4},{value:"Node Info",id:"node-info",level:4},{value:"Raw Data",id:"raw-data",level:4},{value:"Annotations",id:"annotations",level:4},{value:"Edit History",id:"edit-history",level:4},{value:"Favorite-ing a Graph",id:"favorite-ing-a-graph",level:3},{value:"Deleting a Graph",id:"deleting-a-graph",level:2}],d={toc:u},s="wrapper";function c(e){let{components:t,...i}=e;return(0,l.kt)(s,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"graphs"},"Graphs"),(0,l.kt)("p",null,"The Graphs page displays all of your graphs. Here, you can create, edit, and delete graphs."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add a graph popup",src:a(6055).Z,width:"1220",height:"703"})),(0,l.kt)("h3",{id:"creating-a-graph"},"Creating a Graph"),(0,l.kt)("p",null,"To create a graph comparing a single attribute among multiple nodes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the Graphs page, click the ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," near the top left corner of your screen.\nThis popup will appear:\n",(0,l.kt)("img",{alt:"Add a graph popup",src:a(6373).Z,width:"649",height:"434"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"By Node")," under ",(0,l.kt)("inlineCode",{parentName:"p"},"Add a Graph"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter a ",(0,l.kt)("inlineCode",{parentName:"p"},"Graph Title"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the node ids of the nodes you want to compare.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the node attribute you would like to compare.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create"),"."))),(0,l.kt)("p",null,"To create a graph comparing a single attribute among multiple nodes with the same properties:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the Graphs page, click the ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," near the top left corner of your screen.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"By Property")," under ",(0,l.kt)("inlineCode",{parentName:"p"},"Add a Graph"),".\n",(0,l.kt)("img",{alt:"Add a graph popup",src:a(207).Z,width:"653",height:"644"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter a ",(0,l.kt)("inlineCode",{parentName:"p"},"Graph Title"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the node attribute you would like to compare.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"Plant Type")," you would like your nodes to have.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"Node Location")," you would like your nodes to have.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"Plant Location")," you would like your nodes to have.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the node ids of the nodes you want to compare.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create"),"."))),(0,l.kt)("p",null,"A newly created graph will display 24 hours worth of data with graph lines of different colors. You are able to change these values by editing the graph."),(0,l.kt)("h3",{id:"editing-a-graph"},"Editing a Graph"),(0,l.kt)("p",null,"Click the graph you would like to edit. You will be redirected to a page that lets you to reconfigure your graph. "),(0,l.kt)("p",null,"Features of this include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Favorite/unfavorite the graph"),(0,l.kt)("li",{parentName:"ul"},"Add annotations to the graph"),(0,l.kt)("li",{parentName:"ul"},"Delete the graph"),(0,l.kt)("li",{parentName:"ul"},"Modify specific properties of the graph")),(0,l.kt)("p",null,"The following properties can be modified:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Graph title"),(0,l.kt)("li",{parentName:"ul"},"Node(s) being compared"),(0,l.kt)("li",{parentName:"ul"},"Attribute(s) being compared"),(0,l.kt)("li",{parentName:"ul"},"Date range of the data"),(0,l.kt)("li",{parentName:"ul"},"X axis range"),(0,l.kt)("li",{parentName:"ul"},"Y axis range"),(0,l.kt)("li",{parentName:"ul"},"Annotations"),(0,l.kt)("li",{parentName:"ul"},"Graph colors"),(0,l.kt)("li",{parentName:"ul"},"Graph type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Line graph"),(0,l.kt)("li",{parentName:"ul"},"Bar graph"),(0,l.kt)("li",{parentName:"ul"},"Scatter plot"))),(0,l.kt)("li",{parentName:"ul"},"Tags")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"details",src:a(809).Z,width:"1253",height:"324"})),(0,l.kt)("h3",{id:"annotating-a-graph"},"Annotating a Graph"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the graph you would like to annotate. You will be redirected to a page that lets you to annotate your graph. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the ",(0,l.kt)("inlineCode",{parentName:"p"},"+ ANNOTATE")," button. This popup will appear:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"add annotation popup",src:a(5806).Z,width:"649",height:"593"})))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the annotation label in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Label")," field.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select your annotation type.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the date you would like your annotation on.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the label position x value.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the label position y value."))),(0,l.kt)("h3",{id:"graph-details"},"Graph Details"),(0,l.kt)("p",null,"To view a particular graph in greater detail, click on the graph. You will be redirected to a page that will let you view a graph in greater detail as well as edit that graph."),(0,l.kt)("p",null,"The following details can be viewed:"),(0,l.kt)("h4",{id:"graph"},"Graph"),(0,l.kt)("p",null,"A bigger graph can be viewed and analyzed in greater detail."),(0,l.kt)("p",null,"Features of this include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Annotations display when graph is in range."),(0,l.kt)("li",{parentName:"ul"},"Tooltips that display data when hovering over points."),(0,l.kt)("li",{parentName:"ul"},"Dynamically updating graph fields and types.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"graph",src:a(1941).Z,width:"927",height:"646"})),(0,l.kt)("h4",{id:"node-info"},"Node Info"),(0,l.kt)("p",null,"Node info of the node(s) being used is displayed."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Node info",src:a(5242).Z,width:"842",height:"168"})),(0,l.kt)("p",null,"Information displayed includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node ID"),(0,l.kt)("li",{parentName:"ul"},"Registration time"),(0,l.kt)("li",{parentName:"ul"},"Message history"),(0,l.kt)("li",{parentName:"ul"},"Node location"),(0,l.kt)("li",{parentName:"ul"},"Plant location"),(0,l.kt)("li",{parentName:"ul"},"Plant Type"),(0,l.kt)("li",{parentName:"ul"},"Status"),(0,l.kt)("li",{parentName:"ul"},"Heat pulse duration"),(0,l.kt)("li",{parentName:"ul"},"Sleep interval")),(0,l.kt)("h4",{id:"raw-data"},"Raw Data"),(0,l.kt)("p",null,"Raw data of the node(s)' sapflows is displayed."),(0,l.kt)("p",null,"Features of this include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ability to switch between raw data of different nodes"),(0,l.kt)("li",{parentName:"ul"},"Export raw data to .csv")),(0,l.kt)("p",null,"Information displayed includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Date"),(0,l.kt)("li",{parentName:"ul"},"Timestamp"),(0,l.kt)("li",{parentName:"ul"},"Node ID"),(0,l.kt)("li",{parentName:"ul"},"Mean Heat Ratio"),(0,l.kt)("li",{parentName:"ul"},"Mean Outside Temperature"),(0,l.kt)("li",{parentName:"ul"},"Mean Soil Moisture"),(0,l.kt)("li",{parentName:"ul"},"Mean Outside Humidity")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"data",src:a(1316).Z,width:"1265",height:"566"})),(0,l.kt)("h4",{id:"annotations"},"Annotations"),(0,l.kt)("p",null,"Annotations made of the graph can be viewed."),(0,l.kt)("p",null,"Features of this include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ability to switch between annotations of different nodes"),(0,l.kt)("li",{parentName:"ul"},"Export raw data to .csv")),(0,l.kt)("p",null,"Information displayed includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Graph id"),(0,l.kt)("li",{parentName:"ul"},"Label"),(0,l.kt)("li",{parentName:"ul"},"Annotation type"),(0,l.kt)("li",{parentName:"ul"},"From Timestamp"),(0,l.kt)("li",{parentName:"ul"},"To Timestamp"),(0,l.kt)("li",{parentName:"ul"},"Color")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"annotations",src:a(704).Z,width:"1271",height:"379"})),(0,l.kt)("h4",{id:"edit-history"},"Edit History"),(0,l.kt)("p",null,"If any property of the graph is changed, it will be documented in the edit history."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"edit history",src:a(6741).Z,width:"1244",height:"234"})),(0,l.kt)("p",null,"Information displayed includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Created timestamp"),(0,l.kt)("li",{parentName:"ul"},"Edited timestamp with specific edit messages")),(0,l.kt)("h3",{id:"favorite-ing-a-graph"},"Favorite-ing a Graph"),(0,l.kt)("p",null,"To favorite/un-favorite a graph, click the star icon next to the graph. Favorite graphs are indicated by a full yellow star icon. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"favorite star",src:a(7086).Z,width:"294",height:"317"})),(0,l.kt)("p",null,"Alternatively, you can click on the graph. You will be redirected to a page that lets you view your graph in greater detail. You can can on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Favorite")," Button from there."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"favorite button",src:a(2887).Z,width:"242",height:"65"})),(0,l.kt)("h2",{id:"deleting-a-graph"},"Deleting a Graph"),(0,l.kt)("p",null,"To delete a graph, select a graph on the graphs page and click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")," button next to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Select All"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"delete button",src:a(323).Z,width:"128",height:"43"})),(0,l.kt)("p",null,"Alternatively, you can click on the graph. You will be redirected to a page that lets you view your graph in greater detail. You can can on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")," Button from there."))}c.isMDXComponent=!0},5806:function(e,t,a){t.Z=a.p+"assets/images/add_annotation_popup-937b70774636645a50861cf4f34bbb34.png"},704:function(e,t,a){t.Z=a.p+"assets/images/annotations-da5bd381d6007e7ec19bdf106ea1014a.png"},6373:function(e,t,a){t.Z=a.p+"assets/images/by_node-424a47c54d4edb9365b629134b11214d.png"},207:function(e,t,a){t.Z=a.p+"assets/images/by_property-85ac00fe3c2a364b24429f18f5734260.png"},1316:function(e,t,a){t.Z=a.p+"assets/images/data-ea57b8de9d92a6094d4534dfabc28963.png"},323:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAArCAYAAACw5YDmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK6SURBVHhe7Zw9a9tQFIb7V/wn5MX4B3RrRi8eYzpk9NqluHRoijCFUFJKiJM5gUKNB+OYbM7kpbiLPRkPBQ3F2sSp3gQhSzr6oopa6ZwDz2Dp3kOs95GuIpBfkJboUgGElwogvGIFGI/H1Ov1qNVqUbPZVCoGckN+yDGpWAFM06Rut0uz2Yxs2ybHcZSKgdyQH3JEnnEVEQDGYJIGXw+QI/KMuxJEBMBlA+ZwzZRqgjyRK1cRAbB26NlfL5AncuUqIgBuILgmSrVBrlypAEJQAYSjAghHBRDOPxNgu93SfD4PgG3cWOX5KFWAyWRCo8vLRz6entK7wSAAtnn7MZbroRRLqQJcjUaR0OPAWK5HMhZN3xjUaDQCtF91qG/e0GIXnbP6ehQZ79E+WwbGGZ/8zxypvX59pz6zL0x/bLn9+O/i8TSG/zvyUKoAYLPZ0Hq9ToWbm86Obl436Ph2d7DNJmu3ounZMbWNDg0fgg+zFqZ7QM1FYBtHlnFZe/ksaOiGOXzg9nHfpXhKF4A72zm4uekkH7TN7QkZxlu6/+1vUwEECeA4S/r8MrhfBRAlgBvSh2BIKoA0AUIhPX52Q4jSoYuf8fM4svbySReA7ecuY9ODZexvECaATfcD9wCGBXg/JcuyQuS/WczayyfDFeB6Fe1XUPhAmABP9wAn3/z9WYIFmQXI0MtHl4BYuLnpJB80/S8gigAB9DlAEjUT4HmfBHJjgLekZO3ls6ShcUQXP8LbQU2fBHJhc3BzleIpXYAv5+ds4IdgDDdXKZ7SBdjv9zS/u0sEY7i5SvGULoDyf6ECCEcFEI4KIJzMAuibQfUj15tB+m5g/cj1bqC+HVwvkGOut4NR+vsA1Qe5IT/kmOv3AbyCMbhsYO3ADYRSLZAb8os7872KFUBLRqkAwksFEF4qgPBSAUQX0R93ZDpS+xQVUwAAAABJRU5ErkJggg=="},6741:function(e,t,a){t.Z=a.p+"assets/images/edit_history-6d10ae468d3cc0c6f969961f74c6720b.png"},2887:function(e,t){t.Z="data:image/png;base64,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"},7086:function(e,t,a){t.Z=a.p+"assets/images/favorite_star-863e14f56350f238bc870060e3ccfb5a.png"},809:function(e,t,a){t.Z=a.p+"assets/images/fields-49155234f064a648d0c80f658154d30c.png"},1941:function(e,t,a){t.Z=a.p+"assets/images/graph-c48cabe18706b4c8f238fe1c3468012c.png"},6055:function(e,t,a){t.Z=a.p+"assets/images/graphs_page-d0a68368eded0be4bb7c80f57aaa91bd.png"},5242:function(e,t,a){t.Z=a.p+"assets/images/node_info-f9e9f0c4a233c591fca339e0fedc8ac4.png"}}]);