"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013,3479],{6165:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(3366),l=a(7294),n=a(6010),s=a(8446),c=a(6742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",f="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",E=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,E.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];var _=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,r.Z)(e,v),o=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(g,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},a))))}},5776:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),l=a(6165),n=a(7211),s=a(3773),c="tag_21yA";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,e))}))),r.createElement("hr",null))}var o=function(e){var t=e.tags,a=(0,s.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))};var m=function(e){var t=e.tags,a=e.sidebar,n=(0,s.MA)();return r.createElement(l.Z,{title:n,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,n),r.createElement(o,{tags:Object.values(t)}))}},7211:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),l=a(6010),n=a(6742),s="tag_1Okp",c="tagRegular_3MiF",i="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,m=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[c]=!m,t[i]=m,t))},o,m&&r.createElement("span",null,m))}},546:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(7462),l=a(3366),n=a(7294),s=a(6010),c=a(6742),i=a(3773),o=a(4996),m=a(3919),u="footerLogoLink_qW4Z",f=a(8465),d=a(8617),E=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,s=e.label,i=e.prependBaseUrlToHref,u=(0,l.Z)(e,E),f=(0,o.Z)(t),g=(0,o.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,r.Z)({className:"footer__link-item"},a?{href:i?g:a}:{to:f},u),a&&!(0,m.Z)(a)?n.createElement("span",null,s,n.createElement(d.Z,null)):s)}var v=function(e){var t=e.sources,a=e.alt;return n.createElement(f.Z,{className:"footer__logo",alt:a,sources:t})};var _=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,m=t.logo,f=void 0===m?{}:m,d={light:(0,o.Z)(f.src),dark:(0,o.Z)(f.srcDark||f.src)};return e?n.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container__div"},n.createElement("div",{className:"footer__container"},f&&(f.src||f.srcDark)&&n.createElement("div",{className:"footer__logo"},f.href?n.createElement(c.Z,{href:f.href,className:u},n.createElement(v,{alt:f.alt,sources:d})):n.createElement(v,{alt:f.alt,sources:d})),l&&l.length>0&&n.createElement("div",{className:"footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"footer__col"},null!=e.title?n.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(g,e))}))):null)})))),(f||a)&&n.createElement("div",{className:"footer__bottom text--center"},a?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);