"use strict";(self.webpackChunkohpretty_gatsby_blog=self.webpackChunkohpretty_gatsby_blog||[]).push([[703],{7857:function(e,t,o){o.r(t),o.d(t,{default:function(){return L}});var a=o(7294),n=o(8631),r=o(396),s=o(807),i=o(9),l=o(1597),c=i.default.section.withConfig({displayName:"post-list__PostsList",componentId:"sc-1gx585e-0"})(["display:grid;margin:0 -12px;grid-template-columns:33.3% 33.3% 33.3%;grid-row-gap:24px;margin-top:36px;@media only screen and (max-width:768px){grid-template-columns:50% 50%;}@media only screen and (max-width:425px){grid-template-columns:100%;}"]),d=i.default.div.withConfig({displayName:"post-list__PostsItem",componentId:"sc-1gx585e-1"})(["width:100%;padding:0 12px;user-select:none;ion-icon{height:16px;margin-right:4px;margin-bottom:2px;vertical-align:middle;}"]),m=i.default.div.withConfig({displayName:"post-list__PostsImageWapper",componentId:"sc-1gx585e-2"})(["width:100%;height:200px;overflow:hidden;@media only screen and (max-width:1080px){height:calc(20vw - 25px);}@media only screen and (max-width:768px){height:calc(30vw - 25px);}@media only screen and (max-width:425px){height:calc(50vw);}"]),p=(0,i.default)(r.G).withConfig({displayName:"post-list__PostsImage",componentId:"sc-1gx585e-3"})(["width:100%;height:100%;border-radius:8px;overflow:hidden;isolation:isolate;transition:transform 0.3s ease-out;-webkit-transition:transform 0.3s ease-out;-moz-transition:transform 0.3s ease-out;-o-transition:transform 0.3s ease-out;:hover{transform:scale(0.97);-ms-transform:scale(0.97);-webkit-transform:scale(0.97);-o-transform:scale(0.97);-moz-transform:scale(0.97);box-shadow:0 0 0 4px rgba(0,0,0,0.075);}"]),g=(0,i.default)(l.Link).withConfig({displayName:"post-list__PostsLink",componentId:"sc-1gx585e-4"})(["text-decoration:none;"]),u=i.default.div.withConfig({displayName:"post-list__PostsContent",componentId:"sc-1gx585e-5"})(["margin:6px 0 0 0;"]),f=i.default.span.withConfig({displayName:"post-list__PostsCategories",componentId:"sc-1gx585e-6"})(["font-size:0.75rem;color:#adb5bd;"]),y=(0,i.default)(l.Link).withConfig({displayName:"post-list__PostsCategoriesLink",componentId:"sc-1gx585e-7"})(["color:#adb5bd;text-decoration:none;transition:color 0.2s ease;:hover{color:#868e96;}"]),x=i.default.h3.withConfig({displayName:"post-list__PostsTitle",componentId:"sc-1gx585e-8"})(["width:100%;margin-top:2px;overflow:hidden;color:var(--text);font-size:1.15rem;letter-spacing:-1px;word-break:break-all;white-space:normal;"]),h=i.default.p.withConfig({displayName:"post-list__PostsSubTitle",componentId:"sc-1gx585e-9"})(["margin-top:4px;color:var(--text-secondary);font-size:0.9rem;word-break:break-all;white-space:normal;"]),w=i.default.div.withConfig({displayName:"post-list__PostSub",componentId:"sc-1gx585e-10"})(["margin-top:6px;font-size:0.8rem;"]),b=i.default.span.withConfig({displayName:"post-list__PostsReadTime",componentId:"sc-1gx585e-11"})(["margin-right:10px;color:#adb5bd;"]),_=i.default.span.withConfig({displayName:"post-list__PostsDate",componentId:"sc-1gx585e-12"})(["color:#adb5bd;"]),k=i.default.div.withConfig({displayName:"style__CategoryList",componentId:"sc-1b6bl28-0"})(["margin-top:56px;padding:0;margin-bottom:4px;overflow:auto;white-space:nowrap;"]),E=i.default.div.withConfig({displayName:"style__CategoryItem",componentId:"sc-1b6bl28-1"})(["display:inline-block;margin:0 12px 14px 0;zoom:1;font-size:0.8rem;font-weight:500;cursor:pointer;border-radius:96px;border:solid 1px var(--category-border);user-select:none;background-color:var(--category-background);-ms-user-select:none;-moz-user-select:-moz-none;-webkit-user-select:none;-khtml-user-select:none;"]),C=i.default.p.withConfig({displayName:"style__CategoryItemPressed",componentId:"sc-1b6bl28-2"})(["display:inline-block;padding:4px 12px;color:var(--text);cursor:default;opacity:0.8;"]),v=(0,i.default)(l.Link).withConfig({displayName:"style__CategoryItemLink",componentId:"sc-1b6bl28-3"})(["display:inline-block;padding:4px 12px;color:var(--text-secondary);text-decoration:none;opacity:0.5;transition:0.3s ease opacity;:hover{opacity:0.9;}"]),I=a.memo((function(e){var t=e.categories,o=e.categoryQuery,n=e.totalPosts;return a.createElement(k,null,a.createElement(E,{key:"total"},null===o?a.createElement(C,null,"All (",n,")"):a.createElement(v,{to:"/post/"},"All (",n,")")),t.map((function(e){var t=e.fieldValue,n=e.totalCount;return a.createElement(E,{key:t},o===t?a.createElement(C,null,t," (",n,")"):a.createElement(v,{to:"/category/"+t.toLowerCase()+"/"},t," (",n,")"))})))})),P=i.default.div.withConfig({displayName:"style__PaginationContainer",componentId:"sc-jng8za-0"})(["display:flex;margin:42px 0;align-items:center;justify-content:space-between;"]),N=(0,i.default)(l.Link).withConfig({displayName:"style__PaginationItem",componentId:"sc-jng8za-1"})(["padding:10px 16px;margin:0;color:#343a40;font-size:0.95rem;text-decoration:none;user-select:none;-ms-user-select:none;-moz-user-select:-moz-none;-webkit-user-select:none;-khtml-user-select:none;background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:2px;transition:background-color 0.3s ease;:hover{background-color:#e9ecef;}"]),z=function(e){var t=e.cur,o=e.max,n=e.categoryQuery,r=n?n.toLowerCase():null,s=[];return 1!==t?s.push(a.createElement(N,{key:"back",to:null===r?t-1==1?"/post/":"/post/"+(t-1)+"/":t-1==1?"/category/"+r+"/":"/category/"+r+"/"+(t-1)+"/"},"←  Newer Posts")):s.push(a.createElement("div",{key:"empty"})),t!=o&&s.push(a.createElement(N,{key:"foward",to:null===r?"/post/"+(t+1)+"/":"/category/"+r+"/"+(t+1)+"/"},"Older Posts  →")),a.createElement(P,null,s)},L=a.memo((function(e){var t,o=e.data,i=e.pageContext,l=i.cur,k=i.max,E=i.totalPosts,C=i.categoryQuery,v=i.categories;return(0,n.I0)()({type:"CHANGETITLE",value:C||"Post"}),t=C?"Uncategorized"===C?o.uncategorizedPosts.edges:o.categoryPosts.edges:o.defaultPosts.edges,a.createElement(s.H,null,a.createElement(I,{categories:v,categoryQuery:C,totalPosts:E}),a.createElement(c,null,t.map((function(e){var t=e.node;return a.createElement(d,{key:t.id},a.createElement(g,{to:"/post"+t.fields.slug},a.createElement(m,null,a.createElement(p,{image:(0,r.d)(t.frontmatter.cover),alt:t.frontmatter.title}))),a.createElement(u,null,a.createElement(f,null,a.createElement("ion-icon",{name:"bookmark-outline"}),t.frontmatter.categories&&t.frontmatter.categories.map((function(e,o){return a.createElement(a.Fragment,{key:e},a.createElement(y,{to:"/category/"+e.toLowerCase()},e),o!==t.frontmatter.categories.length-1&&", ")})),!t.frontmatter.categories&&a.createElement(y,{to:"/category/uncategorized"},"Uncategorized")),a.createElement(g,{to:"/post"+t.fields.slug},a.createElement(x,null,t.frontmatter.title),a.createElement(h,null,t.frontmatter.subtitle)),a.createElement(w,null,a.createElement(b,null,a.createElement("ion-icon",{name:"time-outline"}),t.timeToRead," MIN READ"),a.createElement(_,null,a.createElement("ion-icon",{name:"calendar-outline"}),t.frontmatter.date))))}))),a.createElement(z,{cur:l,max:k,categoryQuery:C}))}))}}]);