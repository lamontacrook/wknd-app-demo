(this["webpackJsonpaem-guides-wknd-pwa"]=this["webpackJsonpaem-guides-wknd-pwa"]||[]).push([[0],{28:function(e,t,n){},46:function(e,t,n){},77:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(48),c=n.n(i),o=n(14),s=(n(77),n(8)),l=n(6),d={primary:"#202020",accent:"#FFEB00",background:"#202020",detailBackground:"#fff",surface:"#202020",error:"#B00020",text:"#fff",detailText:"#202020",onSurface:"#000000",disabled:"rgb(255, 69, 58)",placeholder:"rgb(255, 69, 58)",backdrop:"rgb(255, 69, 58)",notification:"rgb(255, 69, 58)"},p=n(3),m=(n(28),"wcm/foundation/components/responsivegrid"),h={emptyLabel:"Layout Container",isEmpty:function(e){return null==e.cqItemsOrder||0===e.cqItemsOrder.length},resourceType:m};Object(p.MapTo)(m)(p.ResponsiveGrid,h);var u=Object(p.withMappable)(p.ResponsiveGrid,h),j=n(5);Object(p.MapTo)("core/wcm/components/container/v1/container")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(p.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(p.MapTo)("dam/cfm/components/grid")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(p.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});var g=n(13),b=n(29),v=n(30),y=n(34),O=n(33),f=n(16),x=(n(46),n(1)),T=function(e){Object(y.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"getHTML",value:function(e){return{__html:e}}},{key:"getFragmentGrid",value:function(e){var t=!1;if(this.props.cqItemsOrder.includes(e)&&this.props.cqItems[e]){var n=p.Utils.modelToProps(this.props.cqItems[e]);if(n){var a=p.ComponentMapping.get(n.cqType);a&&(t=this.connectComponentWithItem(a,n,e))}}return t}},{key:"connectComponentWithItem",value:function(e,t,n){var r=this.getItemPath(n);return Object(a.createElement)(e,Object(g.a)(Object(g.a)({},t),{},{key:"".concat(n,"-").concat(r,"}"),cqPath:r,isInEditor:this.props.isInEditor,containerProps:this.getItemComponentProps(t,n,r)}))}},{key:"getItemPath",value:function(e){return this.props&&this.props.cqPath?this.props.cqPath+"/"+e:e}},{key:"getItemComponentProps",value:function(e,t,n){return{}}},{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"contentfragment ".concat(this.props.componentProperties.containerProps.className),children:Object(x.jsxs)("article",{id:this.props.id,className:"cmp-contentfragment","data-cmp-contentfragment-model":this.props.model,"data-cmp-data-layer":JSON.stringify(this.props.dataLayer),children:[Object(x.jsx)("h3",{className:"cmp-contentfragment__title",children:this.props.title}),Object(x.jsx)("div",{className:"cmp-contentfragment__elements",children:this.props.paragraphs&&this.props.paragraphs.map((function(t,n){return Object(x.jsxs)(r.a.Fragment,{children:[e.getFragmentGrid("par".concat(n)),Object(x.jsx)("div",{dangerouslySetInnerHTML:e.getHTML(t)},n)]},n)}))})]})})}}]),n}(f.ContentFragmentV1);Object(p.MapTo)("core/wcm/components/contentfragment/v1/contentfragment")(T,{isEmpty:f.ContentFragmentV1IsEmptyFn});Object(p.withMappable)(T,{isEmpty:f.ContentFragmentV1IsEmptyFn});var w="core/wcm/components/experiencefragment/v1/experiencefragment",P={emptyLabel:"Experience Fragment",isEmpty:j.ContainerV1IsEmptyFn,resourceType:w};Object(p.MapTo)(w)(j.ContainerV1,P);Object(p.withMappable)(j.ContainerV1,P);var I=n(4),k="core/wcm/components/teaser/v1/teaser",E={emptyLabel:"Teaser",isEmpty:I.TeaserV1IsEmptyFn,resourceType:k};Object(p.MapTo)(k)(I.TeaserV1,E);Object(p.withMappable)(I.TeaserV1,E);var C="core/wcm/components/image/v2/image",S={emptyLabel:"Image",isEmpty:I.ImageV2IsEmptyFn,resourceType:C};Object(p.MapTo)(C)(I.ImageV2,S);var A=Object(p.withMappable)(I.ImageV2,S);Object(p.MapTo)("core/wcm/components/text/v2/text")(I.TextV2,{isEmpty:I.TextV2IsEmptyFn});Object(p.withMappable)(I.TextV2,{isEmpty:I.TextV2IsEmptyFn});var _="core/wcm/components/title/v2/title",V={emptyLabel:"Title",isEmpty:I.TitleV2IsEmptyFn,resourceType:_};Object(p.MapTo)(_)(I.TitleV2,V);var F=Object(p.withMappable)(I.TitleV2,V);Object(p.MapTo)("wknd/components/container")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(p.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});var M=function(e){Object(y.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"getHTML",value:function(e){return{__html:e}}},{key:"getFragmentGrid",value:function(e){var t=!1;if(this.props.cqItemsOrder.includes(e)&&this.props.cqItems[e]){var n=p.Utils.modelToProps(this.props.cqItems[e]);if(n){var a=p.ComponentMapping.get(n.cqType);a&&(t=this.connectComponentWithItem(a,n,e))}}return t}},{key:"connectComponentWithItem",value:function(e,t,n){var r=this.getItemPath(n);return Object(a.createElement)(e,Object(g.a)(Object(g.a)({},t),{},{key:"".concat(n,"-").concat(r,"}"),cqPath:r,isInEditor:this.props.isInEditor,containerProps:this.getItemComponentProps(t,n,r)}))}},{key:"getItemPath",value:function(e){return this.props&&this.props.cqPath?this.props.cqPath+"/"+e:e}},{key:"getItemComponentProps",value:function(e,t,n){return{}}},{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"contentfragment ".concat(this.props.componentProperties.containerProps.className),children:Object(x.jsxs)("article",{id:this.props.id,className:"cmp-contentfragment","data-cmp-contentfragment-model":this.props.model,"data-cmp-data-layer":JSON.stringify(this.props.dataLayer),children:[Object(x.jsx)("h3",{className:"cmp-contentfragment__title",children:this.props.title}),Object(x.jsx)("div",{className:"cmp-contentfragment__elements",children:this.props.paragraphs&&this.props.paragraphs.map((function(t,n){return Object(x.jsxs)(r.a.Fragment,{children:[e.getFragmentGrid("par".concat(n)),Object(x.jsx)("div",{dangerouslySetInnerHTML:e.getHTML(t)},n)]},n)}))})]})})}}]),n}(f.ContentFragmentV1);Object(p.MapTo)("wknd/components/contentfragment")(M,{isEmpty:f.ContentFragmentV1IsEmptyFn});Object(p.withMappable)(M,{isEmpty:f.ContentFragmentV1IsEmptyFn});Object(p.MapTo)("wknd/components/experiencefragment")(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(p.withMappable)(j.ContainerV1,{isEmpty:j.ContainerV1IsEmptyFn});Object(p.MapTo)("wknd/components/teaser")(I.TeaserV1,{isEmpty:I.TeaserV1IsEmptyFn});Object(p.withMappable)(I.TeaserV1,{isEmpty:I.TeaserV1IsEmptyFn});Object(p.MapTo)("wknd/components/image")(I.ImageV2,{isEmpty:I.ImageV2IsEmptyFn});Object(p.withMappable)(I.ImageV2,{isEmpty:I.ImageV2IsEmptyFn});Object(p.MapTo)("wknd/components/text")(I.TextV2,{isEmpty:I.TextV2IsEmptyFn});Object(p.withMappable)(I.TextV2,{isEmpty:I.TextV2IsEmptyFn});Object(p.MapTo)("wknd/components/title")(I.TitleV2,{isEmpty:I.TitleV2IsEmptyFn});Object(p.withMappable)(I.TitleV2,{isEmpty:I.TitleV2IsEmptyFn});var N=n(9),L="Validation error of type FieldUndefined: Field 'adventureList' in type 'QueryType' is undefined @ 'adventureList'",H="Unexpected token < in JSON at position 0";function R(e){var t=e.error;try{return Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h1",{children:"Error"}),Object(x.jsx)("pre",{style:W.pre,children:t}),t===L&&Object(x.jsx)("span",{children:"The Adventures, Articles Content Fragment Models are either not created and installed, or need to be resaved."}),t===L&&Object(x.jsx)("a",{style:W.a,href:"/libs/dam/cfm/models/console/content/models.html/conf",children:"Setup Content Fragments"}),t===H&&Object(x.jsx)("span",{children:"The global GraphQL endpoint appears to not exist or not be setup."}),t===H&&Object(x.jsx)("a",{style:W.a,href:"/libs/cq/graphql/sites/admin/content/console.html",children:"Setup Global GraphQL Endpoint"})]})}catch(n){return Object(x.jsx)("div",{children:"Error with the Error"})}}var W={pre:{border:"1px solid rgba(255, 255, 255, .1)",borderRadius:"4px",padding:"1rem",width:"120ch",whiteSpace:"normal"},a:{color:d.text}},z=n(88).AEMHeadless,D=Object({NODE_ENV:"production",PUBLIC_URL:"/wknd-app-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZATION:"api:mitty20",REACT_APP_CONTENT_PATH:"/en/index",REACT_APP_DEV_TOKEN:"abc123",REACT_APP_GRAPHQL_ENDPOINT:"/content/_cq_graphql/global/endpoint.json",REACT_APP_HOST_URI:"https://author-p24020-e217804.adobeaemcloud.com",REACT_APP_PUBLIC_URI:"/",REACT_APP_SERVICE_TOKEN:"auth/service-token.json",REACT_APP_SITE:"wknd-app"}),G=D.REACT_APP_PUBLIC_URI,q=D.REACT_APP_GRAPHQL_ENDPOINT,B=D.REACT_APP_AUTHORIZATION;function U(e,t){var n=Object(a.useState)(null),r=Object(N.a)(n,2),i=r[0],c=r[1],o=Object(a.useState)(null),s=Object(N.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){var n=new z({serviceURL:G,endpoint:q,auth:B.split(":")});(e?n.runQuery.bind(n):n.runPersistedQuery.bind(n))(e||t).then((function(e){var t=e.data,n=e.errors;n&&d(function(e){return e.map((function(e){return e.message?e.message:e})).join(",")}(n)),t&&c(t)})).catch((function(e){d(e)}))}),[e,t]),{data:i,errors:l}}var K="wknd-app",Q="/content/".concat("wknd-app").concat("/en/index"),J=window.location.pathname;J.startsWith("/editor.html/content/")||J.includes("/content/")&&J.endsWith("/en/index.html")?(K=J.replace("/content/","").replace("/en/index.html",""),Q="/content/".concat(K,"/en/index")):(null===window.localStorage.getItem("aemGuidesWkndPwa.site")?window.localStorage.setItem("aemGuidesWkndPwa.site",K):K=window.localStorage.getItem("aemGuidesWkndPwa.site"),null===window.localStorage.getItem("aemGuidesWkndPwa.contentPath")?window.localStorage.setItem("aemGuidesWkndPwa.contentPath",Q):Q=window.localStorage.getItem("aemGuidesWkndPwa.contentPath"));var Y=Q,Z=K;var X=n(15),$=n.n(X),ee=n(32),te="aem-site-template-wknd-spa",ne="com.adobe.aem.wcm.site.manager.config.SiteConfig";function ae(){return re.apply(this,arguments)}function re(){return(re=Object(ee.a)($.a.mark((function e(){var t,n,a,r,i,c,o,s;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,fetch("/content.1.json",{mode:"no-cors"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=Object.keys(a).filter((function(e){return"object"===typeof a[e]&&"cq:Page"===a[e]["jcr:primaryType"]})),e.t0=$.a.keys(r);case 10:if((e.t1=e.t0()).done){e.next=34;break}return i=e.t1.value,e.prev=12,e.next=15,fetch("/conf/".concat(r[i],"/sling:configs.1.json"));case 15:return c=e.sent,e.next=18,c.json();case 18:return o=e.sent,e.next=21,o;case 21:if(e.t2=e.sent,!e.t2){e.next=24;break}e.t2=o.hasOwnProperty(ne);case 24:if(!e.t2){e.next=27;break}(s=o[ne].siteTemplatePath)&&s.includes(te)&&t.push(r[i]);case 27:e.next=32;break;case 29:e.prev=29,e.t3=e.catch(12),console.log("Error fetching site conf data",e.t3);case 32:e.next=10;break;case 34:return e.abrupt("return",t);case 37:return e.prev=37,e.t4=e.catch(0),console.log("Error fetching AEM Content",e.t4),e.abrupt("return",[]);case 41:case"end":return e.stop()}}),e,null,[[0,37],[12,29]])})))).apply(this,arguments)}n(96);function ie(){var e=Object(a.useState)(!1),t=Object(N.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),c=Object(N.a)(i,2),o=c[0],l=c[1],d=Object(a.useState)([]),p=Object(N.a)(d,2),m=p[0],h=p[1],u=U("{\n  adventureList {\n    items {\n      _path\n      adventureActivity\n      adventureTitle\n      adventurePrimaryImage {\n        ...on ImageRef {\n          _path\n          mimeType\n          width\n          height\n        }\n      }\n    }\n  }\n}"),j=u.data,g=u.errors;if(g||!1===j)return Object(x.jsx)(R,{error:g});if(null===j)return Object(x.jsx)("div",{children:"Loading..."});!o&&j.adventureList.items&&l(function(e){var t={};return e.forEach((function(e){if(e.adventureActivity){var n=function(e){return e.toLowerCase().replace(" ","-")}(e.adventureActivity);t.hasOwnProperty(n)||(t[n]=e)}else t.miscellaneous=e})),t}(j.adventureList.items));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"search-by-category-container",children:Object(x.jsx)("ul",{className:"search-by-category",children:o&&Object.keys(o).map((function(e,t){var a=o[e],i=n===a.adventureActivity?"selected":"";return Object(x.jsxs)("li",{className:"search-by-category-item",onClick:function(){return e=a.adventureActivity,r(e),void h(function(e,t){return e.filter((function(e){return e.adventureActivity===t}))}(j.adventureList.items,e));var e},children:[Object(x.jsx)("img",{className:"search-by-category-item-image ".concat(i),src:a.adventurePrimaryImage._path,alt:a.adventureTitle}),Object(x.jsx)("p",{children:a.adventureActivity||"Miscellaneous"})]},e)}))})}),Object(x.jsx)("div",{className:"search-by-category-container",children:Object(x.jsx)("ul",{className:"search-by-category",children:m&&m.map((function(e,t){return Object(x.jsx)("li",{className:"search-by-category-item",children:Object(x.jsxs)(s.Link,{to:"/detail?_path=".concat(e._path),children:[Object(x.jsx)("img",{className:"search-by-category-item-image",src:e.adventurePrimaryImage._path,alt:e.adventureTitle}),Object(x.jsx)("p",{children:e.adventureTitle})]})},t)}))})})]})}function ce(){var e="".concat(Y,"/adventures");return o.ModelManager.initializeAsync(e),Object(x.jsxs)("div",{className:"content",style:oe.container,children:[Object(x.jsxs)("div",{style:oe.searchBox,children:[Object(x.jsx)("div",{style:oe.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(x.jsx)(A,{styles:oe.homepageHeroImage,pagePath:e,itemPath:"root/image"},"search-image")}),Object(x.jsxs)("div",{style:oe.homepageHeroTitleSearch,children:[Object(x.jsx)("div",{style:oe.homepageHeroTitle,children:Object(x.jsx)(F,{styles:oe.homepageHeroTitle,pagePath:e,itemPath:"root/title"},"search-title")}),Object(x.jsx)("input",{style:oe.homepageHeroSearch,placeholder:"Find Your Next Adventure"})]})]}),Object(x.jsxs)("div",{style:oe.searchByCategory,children:[Object(x.jsx)(F,{styles:oe.homepageHeroTitle,pagePath:e,itemPath:"root/title-categories"},"search-title-categories"),Object(x.jsx)(ie,{})]})]})}var oe={container:{},searchBox:{height:"10rem",minHeight:"10rem",position:"relative",overflow:"hidden"},searchResults:{padding:"1rem"},homepageHero:{flex:1,position:"relative"},homepageHeroTitleSearch:{position:"absolute",top:".5rem",left:0,right:0,marginTop:".5rem",textAlign:"center",zIndex:10},homepageHeroTitle:{color:d.background},homepageHeroImage:{position:"absolute",top:0,right:0,bottom:0,left:0},homepageHeroSearch:{gridArea:"overlay",alignSelf:"flex-start",justifySelf:"center",padding:".5rem 1rem",marginTop:".25rem",borderRadius:"5rem",border:"none",boxShadow:"0 0 5px rgba(0,0,0,.1)"},searchByCategory:{padding:"1rem"}},se=n(25);function le(e){var t,n=e.imgSrc,a=e.title;return Object(x.jsx)("div",{style:de.imageContainer,className:"loading-skeleton",children:n&&Object(x.jsx)("img",{src:(t=n,!!t&&(t.startsWith("http")||(t="".concat("/").concat(t))&&t.includes("//content")&&(t=t.replace("//content","/content")),t)),style:de.image,alt:a})})}var de={imageContainer:{position:"relative",paddingTop:"55%",overflow:"hidden"},image:{width:"100%",maxWidth:"100%",position:"absolute",top:0,right:0,bottom:0,left:0,objectFit:"cover"}};function pe(){var e,t=Object(a.useState)(!1),n=Object(N.a)(t,2),r=n[0],i=n[1],c=U(function(e){return'{\n  adventureByPath (_path: "'.concat(e,'") {\n    item {\n      _path\n      adventureTitle\n      adventureActivity\n      adventureType\n      adventurePrice\n      adventureTripLength\n      adventureGroupSize\n      adventureDifficulty\n      adventurePrice\n      adventurePrimaryImage {\n        ... on ImageRef {\n          _path\n          mimeType\n          width\n          height\n        }\n      }\n      adventureDescription {\n        html\n        json\n      }\n      adventureItinerary {\n        html\n        json\n      }\n    }\n  }\n}')}(new URLSearchParams(Object(l.l)().search).get("_path"))),o=c.data,s=c.errors;if(null!==s)return i(!0),Object(x.jsx)(R,{error:s});if(!r&&null===o)return Object(x.jsx)("div",{className:"content detail-screen",style:me.container,children:Object(x.jsxs)("div",{style:me.headerContainer,children:[Object(x.jsx)(se.a,{onClick:function(){return window.history.back()},size:"2rem"}),Object(x.jsx)("div",{className:"loading-skeleton",style:me.titleSkeleton})]})});if(r&&!(null===o||void 0===o||null===(e=o.adventureByPath)||void 0===e?void 0:e.item))return Object(x.jsx)(R,{error:"There was an error with the returned data."});if(null!==o){var d,p;r||i(!0);var m=o.adventureByPath.item,h=m.adventureTitle||!1,u=(null===(d=m.adventureDescription)||void 0===d?void 0:d.json)||!1,j=(null===(p=m.adventurePrimaryImage)||void 0===p?void 0:p._path)||!1,g=[];return m.adventureActivity&&g.push({key:"Activity",value:m.adventureActivity}),m.adventureType&&g.push({key:"Adventure Type",value:m.adventureType}),m.adventureTripLength&&g.push({key:"Trip Length",value:m.adventureTripLength}),m.adventureGroupSize&&g.push({key:"Group Size",value:m.adventureGroupSize}),m.adventureDifficulty&&g.push({key:"Difficulty",value:m.adventureDifficulty}),m.adventurePrice&&g.push({key:"Activity",value:m.adventurePrice}),Object(x.jsxs)("div",{className:"content detail-screen",style:me.container,children:[Object(x.jsxs)("div",{style:me.headerContainer,children:[Object(x.jsx)(se.a,{onClick:function(){return window.history.back()},size:"2rem"}),!h&&Object(x.jsx)("div",{className:"loading-skeleton",style:me.titleSkeleton}),h&&Object(x.jsx)("h1",{style:me.title,children:h})]}),Object(x.jsx)(le,{imgSrc:j,alt:h}),Object(x.jsxs)("div",{style:me.description,children:[Object(x.jsx)("div",{style:me.adventureDetails,children:g.map((function(e,t){var n=e.key,a=e.value;return Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{style:me.adventureDetailsKey,children:n}),Object(x.jsx)("p",{style:me.adventureDetailsValue,children:a})]},t)}))}),u&&u.map((function(e,t){var n="header"===e.nodeType?"".concat(e.style):"p";return Object(x.jsx)(n,{children:e.content.map((function(e){return e.value}))},t)}))]})]})}}var me={container:{flex:1},title:{paddingLeft:".5rem",fontSize:"1.5rem",textTransform:"uppercase",maxWidth:"100%",margin:0},description:{padding:"1rem",backgroundColor:d.detailBackground,color:d.detailText,flex:1},titleSkeleton:{height:"2.5rem",width:"85%",margin:"1rem"},headerContainer:{display:"flex",flexDirection:"row",padding:"1rem 0",alignItems:"center"},adventureDetails:{display:"grid",gap:"1rem",gridTemplateColumns:"repeat(3, 1fr)",marginBottom:"1rem"},adventureDetailsKey:{fontSize:".75rem"},adventureDetailsValue:{fontWeight:"700"}};n(97);function he(){return o.ModelManager.initializeAsync(Y),Object(x.jsxs)("div",{className:"content",style:ue.container,children:[Object(x.jsxs)(s.Link,{to:"/adventures",style:ue.homepageHero,children:[Object(x.jsx)("div",{style:ue.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(x.jsx)(A,{styles:ue.homepageHeroImage,pagePath:Y,itemPath:"root/image"},"search-image")}),Object(x.jsxs)("div",{style:ue.homepageHeroTitleSearch,children:[Object(x.jsx)("div",{style:ue.homepageHeroTitle,children:Object(x.jsx)(F,{styles:ue.homepageHeroTitle,pagePath:Y,itemPath:"root/title"},"search-title")}),Object(x.jsx)("input",{style:ue.homepageHeroSearch,placeholder:"Find Adventures Near You"})]})]}),Object(x.jsxs)(s.Link,{to:"/magazine",style:ue.homepageHero,children:[Object(x.jsx)("div",{style:ue.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(x.jsx)(A,{styles:ue.homepageHeroImage,pagePath:Y,itemPath:"root/image-featured-articles"},"featured-article-image")}),Object(x.jsx)("div",{style:ue.homepageHeroTitleSearch,children:Object(x.jsx)("div",{style:Object(g.a)(Object(g.a)({},ue.homepageHeroTitle),{},{textAlign:"left",paddingLeft:"1rem"}),children:Object(x.jsx)(F,{styles:ue.homepageHeroTitle,pagePath:Y,itemPath:"root/title-featured-articles"},"featured-article-title")})})]})]})}var ue={container:{},homepageHero:{flex:1,position:"relative"},homepageHeroTitleSearch:{position:"absolute",top:".5rem",left:0,right:0,marginTop:".5rem",textAlign:"center",zIndex:10},homepageHeroTitle:{color:d.background},homepageHeroImage:{position:"absolute",top:0,right:0,bottom:0,left:0},homepageHeroSearch:{gridArea:"overlay",alignSelf:"flex-start",justifySelf:"center",padding:".5rem 1rem",marginTop:".25rem",borderRadius:"5rem",border:"none",boxShadow:"0 0 5px rgba(0,0,0,.1)",width:"14rem",textAlign:"center"},adventureListContainer:{overflow:"hidden",flex:1},adventureList:{display:"flex",flexDirection:"row",overflowX:"auto"}};function je(){var e="".concat(Y,"/magazine");return o.ModelManager.initializeAsync(e),Object(x.jsxs)("div",{className:"content",style:ge.container,children:[Object(x.jsx)("div",{style:ge.pageTitle,children:Object(x.jsx)(F,{pagePath:e,itemPath:"root/title"},"title")}),Object(x.jsx)(u,{pagePath:e,itemPath:"root/responsivegrid"})]})}var ge={container:{},pageTitle:{padding:"1rem"},adventureCard:{padding:"1rem"}};function be(){var e=Object(l.l)().pathname.split(".html")[0];return o.ModelManager.initializeAsync(e),Object(x.jsxs)("div",{className:"content",style:ve.container,children:[Object(x.jsxs)("div",{style:ve.headerWrapper,children:[Object(x.jsxs)("div",{style:ve.headerContainer,children:[Object(x.jsx)(se.a,{onClick:function(){return window.history.back()},size:"2rem"}),Object(x.jsx)(F,{style:ve.pageTitle,pagePath:e,itemPath:"root/title"})]}),Object(x.jsx)("div",{style:ve.featuredImage,children:Object(x.jsx)(A,{pagePath:e,itemPath:"root/featured-image"})})]}),Object(x.jsx)("div",{style:ve.contentStyles,children:Object(x.jsx)(u,{pagePath:e,itemPath:"root/responsivegrid"})})]})}var ve={container:{},pageTitle:{padding:"1rem"},featuredImage:{margin:"1rem"},contentStyles:{backgroundColor:d.detailBackground,color:d.detailText,paddingTop:"1rem"},adventureCard:{padding:"1rem"},titleSkeleton:{height:"2.5rem",width:"85%",margin:"1rem"},headerWrapper:{display:"flex",flexDirection:"column"},headerContainer:{display:"flex",flexDirection:"row",padding:"1rem 0 0",alignItems:"center"}},ye=n(55);function Oe(){var e="--select-site--",t=Object(a.useState)(!1),n=Object(N.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(Z||e),o=Object(N.a)(c,2),s=o[0],l=o[1],d=Object(a.useState)([Z]),p=Object(N.a)(d,2),m=p[0],h=p[1],u=Object(a.useState)("/en/index"),j=Object(N.a)(u,1)[0];Object(a.useEffect)((function(){function t(){return(t=Object(ee.a)($.a.mark((function t(){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=h,t.t1=[e],t.t2=ye.a,t.next=5,ae();case 5:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.t5=t.t1.concat.call(t.t1,t.t4),(0,t.t0)(t.t5),console.log("spaSites",m);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r||(!function(){t.apply(this,arguments)}(),i(!0))}),[r,m]);var g=function(e){return"/content/".concat(e).concat(j)};return Object(x.jsxs)("div",{className:"content",style:fe.container,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Settings"}),Object(x.jsxs)("div",{style:fe.selectContainer,children:[Object(x.jsx)("strong",{children:"Site to Render"}),Object(x.jsx)("select",{style:fe.select,value:s,onChange:function(e){var t=e.target.value;t!==localStorage.getItem("aemGuidesWkndPwa.site")&&(window.localStorage.setItem("aemGuidesWkndPwa.contentPath",g(t)),window.localStorage.setItem("aemGuidesWkndPwa.site",t),l(t),window.location.reload())},children:m.map((function(e){return Object(x.jsx)("option",{value:e,children:e})}))})]}),Object(x.jsxs)("dl",{children:[Object(x.jsx)("dt",{children:Object(x.jsx)("strong",{children:"Connected Site"})}),Object(x.jsxs)("dd",{children:["/content/",s]}),Object(x.jsx)("dt",{children:Object(x.jsx)("strong",{children:"Root Page"})}),Object(x.jsx)("dd",{children:g(s)})]})]}),Object(x.jsx)("em",{style:fe.explanation,children:"If no content appears on the Home Screen, ensure that you have created a site using the WKND SPA Site template. The default name is WKND-App, but you can select any name and configure it here."})]})}var fe={container:{padding:"1rem",justifyContent:"space-between"},selectContainer:{margin:"1rem 0"},select:{marginTop:".5rem",padding:".5rem",borderRadius:"5px",backgroundColor:"#999",fontWeight:700,display:"block",width:"100%"},explanation:{marginBottom:"2rem"}},xe=n(51),Te=n(52),we=n(53),Pe=n(54);function Ie(){var e="2rem",t=Object(l.l)(),n="/"===t.pathname,a="/adventures"===t.pathname,r="/magazine"===t.pathname,i="/settings"===t.pathname,c=function(e){return Object(g.a)(Object(g.a)({},ke.tab),{},{color:e?d.accent:d.text})};return Object(x.jsx)("div",{style:ke.tabsContainer,children:Object(x.jsxs)("nav",{style:ke.tabs,children:[Object(x.jsxs)(s.Link,{to:"/",style:c(n),children:[Object(x.jsx)(xe.a,{size:e}),Object(x.jsx)("span",{style:ke.tabText,children:"Home"})]}),Object(x.jsxs)(s.Link,{to:"/adventures",style:c(a),children:[Object(x.jsx)(Te.a,{size:e}),Object(x.jsx)("span",{style:ke.tabText,children:"Adventures"})]}),Object(x.jsxs)(s.Link,{to:"/magazine",style:c(r),children:[Object(x.jsx)(we.a,{size:e}),Object(x.jsx)("span",{style:ke.tabText,children:"Magazine"})]}),Object(x.jsxs)(s.Link,{to:"/settings",style:c(i),children:[Object(x.jsx)(Pe.a,{size:e}),Object(x.jsx)("span",{style:ke.tabText,children:"Settings"})]})]})})}var ke={tabsContainer:{zIndex:10,backgroundColor:d.background,height:"6rem"},tabs:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",height:"100%",listStyle:"none",margin:0,padding:0,overflow:"hidden"},tab:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:d.text,flex:1,textDecoration:"none"},tabText:{fontFamily:"Source Sans Pro"}};n(98);function Ee(){return Object(x.jsx)("div",{id:"app-container",style:Ce.container,children:Object(x.jsxs)(s.HashRouter,{children:[Object(x.jsxs)(l.g,{children:[Object(x.jsx)(l.d,{exact:!0,path:"/adventures",children:Object(x.jsx)(ce,{})}),Object(x.jsx)(l.d,{path:"/detail",children:Object(x.jsx)(pe,{})}),Object(x.jsx)(l.d,{path:"/magazine",children:Object(x.jsx)(je,{})}),Object(x.jsx)(l.d,{path:"".concat(Y,"/magazine/:id"),children:Object(x.jsx)(be,{})}),Object(x.jsx)(l.d,{path:"/settings",children:Object(x.jsx)(Oe,{})}),Object(x.jsx)(l.d,{path:"/",children:Object(x.jsx)(he,{})})]}),Object(x.jsx)(Ie,{})]})})}var Ce={container:{position:"relative",backgroundColor:d.background,paddingTop:"10px",color:d.text}},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.ModelManager.initializeAsync(Y),c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Ee,{})}),document.getElementById("root")),Se(),function(e){if("serviceWorker"in navigator){if(new URL("/wknd-app-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/wknd-app-demo","/service-worker.js");Ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_e(t,e)}))}}()}},[[99,1,2]]]);
//# sourceMappingURL=main.d6900b70.chunk.js.map