"use strict";(self.webpackChunkohpretty_gatsby_blog=self.webpackChunkohpretty_gatsby_blog||[]).push([[703],{5319:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var o=a(7294),n=a(1597),r=a(8631),i=a(396),s=a(9),l=a(9940),c=s.default.ul.withConfig({displayName:"PageCategory__CategoryList",componentId:"sc-13afrs6-0"})(["margin-top:56px;padding:0;margin-bottom:4px;list-style:none;"]),m=s.default.li.withConfig({displayName:"PageCategory__CategoryItem",componentId:"sc-13afrs6-1"})(["display:inline-block;margin:0 12px 14px 0;font-size:0.8rem;font-weight:500;cursor:pointer;border-radius:96px;border:solid 1px var(--category-border);user-select:none;background-color:var(--category-background);-ms-user-select:none;-moz-user-select:-moz-none;-webkit-user-select:none;-khtml-user-select:none;"]),d=s.default.p.withConfig({displayName:"PageCategory__CategoryItemPressed",componentId:"sc-13afrs6-2"})(["display:inline-block;padding:4px 12px;color:var(--text);cursor:default;opacity:0.8;"]),p=(0,s.default)(n.rU).withConfig({displayName:"PageCategory__CategoryItemLink",componentId:"sc-13afrs6-3"})(["display:inline-block;padding:4px 12px;color:var(--text-secondary);text-decoration:none;opacity:0.5;transition:0.3s ease opacity;:hover{opacity:0.9;}"]),g=o.memo((function(e){var t=e.categories,a=e.categoryQuery,n=e.totalPosts;return o.createElement(c,null,o.createElement(m,{key:"total"},null===a?o.createElement(d,null,"All (",n,")"):o.createElement(p,{to:"/post/"},"All (",n,")")),t.map((function(e){var t=e.fieldValue,n=e.totalCount;return o.createElement(m,{key:t},a===t?o.createElement(d,null,t," (",n,")"):o.createElement(p,{to:"/category/"+t.toLowerCase()+"/"},t," (",n,")"))})))})),u=s.default.div.withConfig({displayName:"PagePagination__Pagination",componentId:"sc-132feal-0"})(["display:flex;margin:42px 0;align-items:center;justify-content:space-between;"]),f=(0,s.default)(n.rU).withConfig({displayName:"PagePagination__PaginationItem",componentId:"sc-132feal-1"})(["padding:10px 16px;margin:0;color:#343a40;font-size:0.95rem;text-decoration:none;user-select:none;-ms-user-select:none;-moz-user-select:-moz-none;-webkit-user-select:none;-khtml-user-select:none;background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:2px;transition:background-color 0.3s ease;:hover{background-color:#e9ecef;}"]),y=function(e){var t=e.cur,a=e.max,n=e.categoryQuery,r=n?n.toLowerCase():null,i=[];return 1!==t?i.push(o.createElement(f,{key:"back",to:null===r?t-1==1?"/post/":"/post/"+(t-1)+"/":t-1==1?"/category/"+r+"/":"/category/"+r+"/"+(t-1)+"/"},"←  Newer Posts")):i.push(o.createElement("div",{key:"empty"})),t!=a&&i.push(o.createElement(f,{key:"foward",to:null===r?"/post/"+(t+1)+"/":"/category/"+r+"/"+(t+1)+"/"},"Older Posts  →")),o.createElement(u,null,i)},v=s.default.section.withConfig({displayName:"PostListTemplate__PostsList",componentId:"sc-1vbvvat-0"})(["display:grid;margin:0 -12px;grid-template-columns:33.3% 33.3% 33.3%;grid-row-gap:24px;margin-top:36px;@media only screen and (max-width:768px){grid-template-columns:50% 50%;}@media only screen and (max-width:425px){grid-template-columns:100%;}"]),h=s.default.div.withConfig({displayName:"PostListTemplate__PostsItem",componentId:"sc-1vbvvat-1"})(["width:100%;padding:0 12px;user-select:none;ion-icon{height:16px;margin-right:4px;margin-bottom:2px;vertical-align:middle;}"]),x=s.default.div.withConfig({displayName:"PostListTemplate__PostsImageWapper",componentId:"sc-1vbvvat-2"})(["width:100%;height:200px;overflow:hidden;@media only screen and (max-width:1080px){height:calc(20vw - 25px);}@media only screen and (max-width:800px){height:calc(30vw - 25px);}@media only screen and (max-width:560px){height:calc(50vw);}"]),b=(0,s.default)(i.G).withConfig({displayName:"PostListTemplate__PostsImage",componentId:"sc-1vbvvat-3"})(["width:100%;height:100%;border-radius:8px;overflow:hidden;isolation:isolate;transition:transform 0.3s ease-out;-webkit-transition:transform 0.3s ease-out;-moz-transition:transform 0.3s ease-out;-o-transition:transform 0.3s ease-out;:hover{transform:scale(0.97);-ms-transform:scale(0.97);-webkit-transform:scale(0.97);-o-transform:scale(0.97);-moz-transform:scale(0.97);box-shadow:0 0 0 4px rgba(0,0,0,0.075);}"]),w=(0,s.default)(n.rU).withConfig({displayName:"PostListTemplate__PostsLink",componentId:"sc-1vbvvat-4"})(["text-decoration:none;"]),P=s.default.div.withConfig({displayName:"PostListTemplate__PostsContent",componentId:"sc-1vbvvat-5"})(["margin:6px 0 0 0;"]),_=s.default.span.withConfig({displayName:"PostListTemplate__PostsCategories",componentId:"sc-1vbvvat-6"})(["font-size:0.75rem;color:#adb5bd;"]),C=(0,s.default)(n.rU).withConfig({displayName:"PostListTemplate__PostsCategoriesLink",componentId:"sc-1vbvvat-7"})(["color:#adb5bd;text-decoration:none;transition:color 0.2s ease;:hover{color:#868e96;}"]),E=s.default.h3.withConfig({displayName:"PostListTemplate__PostsTitle",componentId:"sc-1vbvvat-8"})(["width:100%;margin-top:2px;overflow:hidden;color:var(--text);font-size:1.15rem;letter-spacing:-1px;word-break:break-all;white-space:normal;"]),k=s.default.p.withConfig({displayName:"PostListTemplate__PostsExcerpt",componentId:"sc-1vbvvat-9"})(["display:-webkit-box;margin-top:4px;color:var(--text-secondary);font-size:0.9rem;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;"]),I=s.default.div.withConfig({displayName:"PostListTemplate__PostSub",componentId:"sc-1vbvvat-10"})(["margin-top:6px;font-size:0.8rem;"]),L=s.default.span.withConfig({displayName:"PostListTemplate__PostsReadTime",componentId:"sc-1vbvvat-11"})(["margin-right:10px;color:#adb5bd;"]),N=s.default.span.withConfig({displayName:"PostListTemplate__PostsDate",componentId:"sc-1vbvvat-12"})(["color:#adb5bd;"]),T=o.memo((function(e){var t,a=e.data,n=e.pageContext,s=n.cur,c=n.max,m=n.totalPosts,d=n.categoryQuery,p=n.categories;return(0,r.I0)()({type:"CHANGETITLE",value:d||"Post"}),t=d?"Uncategorized"===d?a.uncategorizedPosts.edges:a.categoryPosts.edges:a.defaultPosts.edges,o.createElement(l.H,null,o.createElement(g,{categories:p,categoryQuery:d,totalPosts:m}),o.createElement(v,null,t.map((function(e){var t=e.node;return o.createElement(h,{key:t.id,"data-sal":"slide-up","data-sal-duration":"300","data-sal-easing":"ease"},o.createElement(w,{to:t.fields.slug},o.createElement(x,null,o.createElement(b,{image:(0,i.d)(t.frontmatter.cover),alt:t.frontmatter.title}))),o.createElement(P,null,o.createElement(_,null,o.createElement("ion-icon",{name:"bookmark-outline"}),t.frontmatter.categories&&t.frontmatter.categories.map((function(e,a){return o.createElement(o.Fragment,{key:e},o.createElement(C,{to:"/category/"+e.toLowerCase()},e),a!==t.frontmatter.categories.length-1&&", ")})),!t.frontmatter.categories&&o.createElement(C,{to:"/category/uncategorized"},"Uncategorized")),o.createElement(w,{to:t.fields.slug},o.createElement(E,null,t.frontmatter.title),o.createElement(k,null,t.excerpt)),o.createElement(I,null,o.createElement(L,null,o.createElement("ion-icon",{name:"time-outline"}),t.timeToRead," MIN READ"),o.createElement(N,null,o.createElement("ion-icon",{name:"calendar-outline"}),t.frontmatter.date))))}))),o.createElement(y,{cur:s,max:c,categoryQuery:d}))}))}}]);