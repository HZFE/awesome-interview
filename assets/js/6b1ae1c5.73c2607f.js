"use strict";(self.webpackChunkjjbook=self.webpackChunkjjbook||[]).push([[6015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_label:"\u7b97\u6cd5\uff1a\u53cd\u8f6c\u94fe\u8868",sidebar_position:11},i="\u53cd\u8f6c\u94fe\u8868",o={unversionedId:"book2/algorithm-reverse-linked-list",id:"book2/algorithm-reverse-linked-list",title:"\u53cd\u8f6c\u94fe\u8868",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/book2/algorithm-reverse-linked-list.md",sourceDirName:"book2",slug:"/book2/algorithm-reverse-linked-list",permalink:"/awesome-interview/book2/algorithm-reverse-linked-list",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"\u7b97\u6cd5\uff1a\u53cd\u8f6c\u94fe\u8868",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u7801\uff1a\u5b9e\u73b0\u8282\u6d41\u9632\u6296\u51fd\u6570",permalink:"/awesome-interview/book2/coding-throttle-debounce"},next:{title:"\u7efc\u5408\uff1a\u591a\u56fe\u7ad9\u70b9\u6027\u80fd\u4f18\u5316",permalink:"/awesome-interview/book2/topic-multi-pics-site-optimize"}},p={},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u6cd5\u4e00\uff1a\u8fed\u4ee3\uff08\u53cc\u6307\u9488\uff09",id:"\u89e3\u6cd5\u4e00\u8fed\u4ee3\u53cc\u6307\u9488",level:2},{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",level:3},{value:"\u89e3\u6cd5\u4e8c\uff1a\u9012\u5f52",id:"\u89e3\u6cd5\u4e8c\u9012\u5f52",level:2},{value:"\u590d\u6742\u5ea6\u5206\u6790\uff1a",id:"\u590d\u6742\u5ea6\u5206\u6790-1",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53cd\u8f6c\u94fe\u8868"},"\u53cd\u8f6c\u94fe\u8868"),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u8f93\u5165\u4e00\u4e2a\u94fe\u8868\u7684\u5934\u8282\u70b9\uff0c\u53cd\u8f6c\u8be5\u94fe\u8868\u5e76\u8f93\u51fa\u53cd\u8f6c\u540e\u94fe\u8868\u7684\u5934\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15681693/137571934-63ebc223-0a1f-4cf5-8217-1a4644aff2e3.png",alt:"\u53cd\u8f6c\u94fe\u8868"})),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n\u8f93\u5165: 1->2->3->4->5->NULL\n\u8f93\u51fa: 5->4->3->2->1->NULL\n\n")),(0,a.kt)("h2",{id:"\u89e3\u6cd5\u4e00\u8fed\u4ee3\u53cc\u6307\u9488"},"\u89e3\u6cd5\u4e00\uff1a\u8fed\u4ee3\uff08\u53cc\u6307\u9488\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hzfe-suanfa-omcjw?file=/index.html"},"\u5728\u7ebf\u94fe\u63a5")),(0,a.kt)("p",null,"\u672c\u65b9\u6cd5\u662f\u5bf9\u94fe\u8868\u8fdb\u884c\u904d\u5386\uff0c\u7136\u540e\u5728\u8bbf\u95ee\u5404\u8282\u70b9\u65f6\u4fee\u6539 next \u7684\u6307\u5411\uff0c\u8fbe\u5230\u53cd\u8f6c\u94fe\u8868\u7684\u76ee\u7684\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316 cur \u548c pre \u4e24\u4e2a\u8282\u70b9\uff0c\u5206\u522b\u6307\u5411 head \u548c null\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u94fe\u8868\u8fdb\u884c\u5faa\u73af\uff0c\u58f0\u660e temp \u8282\u70b9\u7528\u6765\u4fdd\u5b58\u5f53\u524d\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5f53\u524d\u8282\u70b9 cur \u7684 next \u6307\u9488\u6307\u5411\u4e3a pre \u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"pre \u8282\u70b9\u4fee\u6539\u4e3a cur \u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"cur \u8282\u70b9\u4fee\u6539\u4e3a temp \u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7ee7\u7eed\u8fdb\u884c\u5904\u7406\uff0c\u76f4\u5230 cur \u8282\u70b9\u4e3a null\uff0c\u8fd4\u56de pre \u8282\u70b9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nconst reverseList = (head) => {\n  let cur = head; // \u6b63\u5411\u94fe\u8868\u7684\u5934\u6307\u9488\n  let pre = null; // \u53cd\u5411\u94fe\u8868\u7684\u5934\u6307\u9488\n  while (cur) {\n    const temp = cur.next; // \u6682\u5b58\u5f53\u524d\u8282\u70b9\u7684\u540e\u7eed\u8282\u70b9\uff0c\u7528\u4e8e\u66f4\u65b0\u6b63\u5411\u94fe\u8868\n    cur.next = pre; // \u5c06\u5f53\u524d\u8282\u70b9\u6307\u5411\u53cd\u5411\u94fe\u8868\uff0c\u8fd9\u662f\u4e00\u4e2a\u5efa\u7acb\u53cd\u5411\u94fe\u63a5\u7684\u8fc7\u7a0b\n    pre = cur; // \u66f4\u65b0\u53cd\u5411\u94fe\u8868\u7684\u5934\u6307\u9488\u4e3a\u5f53\u524d\u5df2\u5904\u7406\u7684\u8282\u70b9\uff0c\u53cd\u5411\u94fe\u8868\u7684\u8be5\u8f6e\u6784\u5efa\u5b8c\u6210\n    cur = temp; // \u5c06\u6b63\u5411\u94fe\u8868\u5934\u6307\u9488\u66ff\u6362\u4e3a\u6682\u5b58\u7684\u8282\u70b9\uff0c\u6b63\u5411\u94fe\u8868\u5904\u7406\u5b8c\u6210\uff0c\u5f00\u59cb\u4e0b\u4e00\u8f6e\u5904\u7406\n  }\n  return pre;\n};\n")),(0,a.kt)("h3",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(N)\uff1a\u904d\u5386\u94fe\u8868\u4f7f\u7528\u7ebf\u6027\u5927\u5c0f\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff1a\u53d8\u91cf pre \u548c cur \u4f7f\u7528\u5e38\u6570\u5927\u5c0f\u989d\u5916\u7a7a\u95f4\u3002")),(0,a.kt)("h2",{id:"\u89e3\u6cd5\u4e8c\u9012\u5f52"},"\u89e3\u6cd5\u4e8c\uff1a\u9012\u5f52"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hzfe-suan-fa-fan-zhuan-lian-biao-di-gui-fa-forked-my3i4"},"\u5728\u7ebf\u94fe\u63a5")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528\u9012\u5f52\u5bf9\u94fe\u8868\u8fdb\u884c\u5904\u7406\u65f6\uff0c\u4ece\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\u51fa\u53d1\uff0c\u7136\u540e\u627e\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\uff0c\u8be5\u8282\u70b9\u5c31\u662f\u53cd\u8f6c\u94fe\u8868\u7684\u5934\u7ed3\u70b9\uff0c\u7136\u540e\u8fdb\u884c\u56de\u6eaf\u5904\u7406\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u94fe\u8868\u7684\u5934\u7ed3\u70b9\uff0chead \u6807\u8bc6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c head \u4e3a\u7a7a\u6216\u8005 head.next \u4e3a\u7a7a\uff0c\u8fd4\u56de head\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49 reverseHead \u8282\u70b9\uff0c\u4fdd\u5b58\u53cd\u8f6c\u7684\u94fe\u8868\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u8ba9 head \u4e0b\u4e00\u4e2a\u8282\u70b9\u7684 next \u6307\u5411 head\uff0c\u5f62\u6210\u53cd\u8f6c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9012\u5f52\u5904\u7406\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\uff0c\u8fd4\u56de reverseHead\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nconst reverseList = (head) => {\n  // \u5224\u65ad\u5f53\u524d\u8282\u70b9\u662f\u5426\u8fd8\u9700\u8981\u5904\u7406\n  if (head == null || head.next == null) {\n    return head;\n  }\n  // \u9012\u5f52\u5904\u7406\u540e\u7eed\u8282\u70b9\n  const reverseHead = reverseList(head.next);\n  // \u5c40\u90e8\u53cd\u8f6c\u8282\u70b9\n  head.next.next = head;\n  head.next = null;\n  return reverseHead;\n};\n")),(0,a.kt)("h3",{id:"\u590d\u6742\u5ea6\u5206\u6790-1"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(N)\uff1an \u662f\u94fe\u8868\u7684\u957f\u5ea6\uff0c\u9700\u8981\u5bf9\u94fe\u8868\u7684\u6bcf\u4e2a\u8282\u70b9\u8fdb\u884c\u53cd\u8f6c\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(N)\uff1an \u662f\u94fe\u8868\u7684\u957f\u5ea6\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3b\u8981\u53d6\u51b3\u4e8e\u9012\u5f52\u8c03\u7528\u7684\u6808\u7a7a\u95f4\uff0c\u6700\u591a\u4e3a n \u5c42\u3002")),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://book.douban.com/subject/6966465/"},"\u5251\u6307 offer"))))}d.isMDXComponent=!0}}]);