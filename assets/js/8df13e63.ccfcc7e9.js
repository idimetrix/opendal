"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[8143],{9613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9058:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(8126),r=(o(9496),o(9613));const a={title:"GSoC Project Proposal Guidance"},i=void 0,s={unversionedId:"events/gsoc-proposal-guide",id:"events/gsoc-proposal-guide",title:"GSoC Project Proposal Guidance",description:"This document contains a short guide on how to structure your OpenDAL Google Summer of Code (GSoC) project proposal and how to increase the chance of your project proposal being accepted.",source:"@site/community/events/gsoc-proposal-guide.md",sourceDirName:"events",slug:"/events/gsoc-proposal-guide",permalink:"/community/events/gsoc-proposal-guide",draft:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/community/events/gsoc-proposal-guide.md",tags:[],version:"current",frontMatter:{title:"GSoC Project Proposal Guidance"},sidebar:"docs",previous:{title:"Events",permalink:"/community/category/events"},next:{title:"Committers",permalink:"/community/category/committers"}},l={},p=[{value:"Choosing a project",id:"choosing-a-project",level:2},{value:"Interacting with the OpenDAL community",id:"interacting-with-the-opendal-community",level:2},{value:"Creating the project proposal",id:"creating-the-project-proposal",level:2},{value:"Project information and timeline",id:"project-information-and-timeline",level:2},{value:"How to increase your chance of being accepted?",id:"how-to-increase-your-chance-of-being-accepted",level:2},{value:"Don&#39;t forget to submit!",id:"dont-forget-to-submit",level:2},{value:"How to decrease your chance of being accepted?",id:"how-to-decrease-your-chance-of-being-accepted",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document contains a short guide on how to structure your OpenDAL Google Summer of Code (GSoC) project proposal and how to increase the chance of your project proposal being accepted."),(0,r.kt)("h2",{id:"choosing-a-project"},"Choosing a project"),(0,r.kt)("p",null,"You should start by deciding on which project do you want to work on. You can use our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/opendal/issues/4131"},"list of project ideas"),"\nas an inspiration, or you can come up with your own project idea. However, you should keep in mind that each GSoC project needs at least one mentor available. Therefore, if you come up with a completely new project idea, you should also try to find someone from the OpenDAL community who could mentor you on the project."),(0,r.kt)("p",null,"If you decide to propose your own project idea, you're most likely to be able to find a mentor if you can describe clearly the utility of the project to OpenDAL community."),(0,r.kt)("p",null,"We encourage you to think of your own interesting project ideas! There are plenty of things that can be done within the OpenDAL project and contributors are generally happy to discuss and help you narrow down your thoughts into a concrete proposal. Don't be shy!"),(0,r.kt)("h2",{id:"interacting-with-the-opendal-community"},"Interacting with the OpenDAL community"),(0,r.kt)("p",null,"If you want to discuss our suggested project ideas or your own idea, you can do so on the ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@opendal.apache.org"},"maillist")," or ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/XQy8yGR2dg"},"Discord"),". Make sure to listen to the feedback of the mentors, and try to incorporate it in your project proposal."),(0,r.kt)("p",null,"When communicating on the OpenDAL mail list or discord (and when interacting with the OpenDAL community in general), please remember to be polite and uphold the ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct"},"ASF Code of Conduct"),". Keep in mind that most OpenDAL contributors (and GSoC OpenDAL project mentors) are volunteers, and work on OpenDAL in their free time, so please treat them with respect and avoid spamming."),(0,r.kt)("h2",{id:"creating-the-project-proposal"},"Creating the project proposal"),(0,r.kt)("p",null,"Ultimately, the project proposal is the main deciding factor on whether your project will be accepted or not, so make sure that you put energy into making it as good as possible."),(0,r.kt)("p",null,"The proposal should contain (at least) the following things:\n1) A descriptive title of the project that you want to work on\n2) Information about yourself, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description of your programming experience, attained education, university and study programme that you're currently studying, etc. (a short CV would be ideal)"),(0,r.kt)("li",{parentName:"ul"},"Link to a portfolio of projects that you have worked on (e.g. a GitHub profile or a personal website)"),(0,r.kt)("li",{parentName:"ul"},"Your knowledge of OpenDAL, since most projects will probably require at least some OpenDAL knowledge"),(0,r.kt)("li",{parentName:"ul"},"Your existing open-source contribution experience. If you have already contributed to some open-source repositories, make sure to include a link to these contributions in your proposal!"),(0,r.kt)("li",{parentName:"ul"},"Your preferred time zone (for communicating with the mentor(s))"),(0,r.kt)("li",{parentName:"ul"},"Contact information\n3) ",(0,r.kt)("strong",{parentName:"li"},"Information about your proposed project"),". This should be as detailed as possible, see more details ",(0,r.kt)("a",{parentName:"li",href:"#project-information-and-timeline"},"below"),".\n4) Information about other commitments that might affect your ability to work on the project during the GSoC period. These can include vacations, exams, other jobs or internships etc. It's not necessarily an issue to have other commitments, but it would be great to know about them in advance, if possible.")),(0,r.kt)("h2",{id:"project-information-and-timeline"},"Project information and timeline"),(0,r.kt)("p",null,"This is the most important part of your project proposal. You should include an abstract that explains your project in one or two paragraphs, and then a very detailed description that explains what exactly do you want to achieve in the proposed project. The proposal should also clearly state the designated mentor(s) for your project (you should get in touch with them before submitting the proposal)."),(0,r.kt)("p",null,"In addition to describing what do you intend to work on in the project, you should also specify the size of the project, according to the GSoC ",(0,r.kt)("a",{parentName:"p",href:"https://google.github.io/gsocguides/student/time-management-for-students"},"documentation"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Small: ~90 hours"),(0,r.kt)("li",{parentName:"ul"},"Medium: ~175 hours"),(0,r.kt)("li",{parentName:"ul"},"Large: ~350 hours")),(0,r.kt)("p",null,"You should also create an approximate weekly plan of work and a list of deliverables. Recall that the default project duration is 12 weeks, but it can be ",(0,r.kt)("a",{parentName:"p",href:"https://google.github.io/gsocguides/student/time-management-for-students"},"extended")," (for medium and large projects) by up to 22 weeks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Describe a brief outline of the work that you plan to do, and try to estimate how will the work be split in the individual weeks of the project."),(0,r.kt)("li",{parentName:"ul"},"Define milestones that you intend to achieve in specific weeks (e.g. finish X in week 4, deliver Y in the middle of the project, have a final version prepared one week before the end of the project, etc.).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You should focus specifically on the midterm point (week 6), because your mentor(s) will evaluate your progress at this time. You should be slightly more than half done at this moment, and have something reasonable to show."),(0,r.kt)("li",{parentName:"ul"},'In week 11 (one week before the end of the project), you should consider doing a "code freeze", and spend the last week to polish tests and documentation.')))),(0,r.kt)("p",null,"Of course, it is quite difficult to predict this timeline exactly in advance, and it is not a problem to modify it while the project runs, but try to guesstimate it to the best of your ability."),(0,r.kt)("p",null,"Furthermore, let us know what is your intended time commitment for working on the project. How many hours per day can you work on it? Are there specific days of the week when you can work on it? Is there some period of time from May to August where you know in advance that you won't be able to work on it? Please include this information in the proposal."),(0,r.kt)("p",null,"There is a ",(0,r.kt)("a",{parentName:"p",href:"https://google.github.io/gsocguides/student/how-gsoc-works"},"Community bonding")," period before the contributors start working on their projects. It is designed to help you learn about the community that you're going to contribute to, and to start familiarizing yourself with the code and/or technology of your project. Please include a short description of preparatory work that you intend to work on during this community bonding period (should your project be accepted)."),(0,r.kt)("h2",{id:"how-to-increase-your-chance-of-being-accepted"},"How to increase your chance of being accepted?"),(0,r.kt)("p",null,"You can demonstrate your dedication (and ability) to work on the selected project proposal by contributing something related to it before your proposal is evaluated. This can encompass e.g. sending a pull request to the relevant repository, fixing a bug, writing documentation, etc. There is no specific template for these kinds of contributions, and it might not be possible to do for all types of projects. You can coordinate with the project mentors to find out if they can suggest some entry-level task for you."),(0,r.kt)("p",null,"You can also tell us more about your motivation in your proposal. Why did you choose OpenDAL for a GSoC project specifically? Do you like the OpenDAL language? Is the specific project that you want to work on sympathetic to you for some reason? We would like to know!"),(0,r.kt)("h2",{id:"dont-forget-to-submit"},"Don't forget to submit!"),(0,r.kt)("p",null,"You will need to submit your project proposal through the ",(0,r.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/"},"Google Summer of Code")," website. Please keep the ",(0,r.kt)("strong",{parentName:"p"},"deadline")," (",(0,r.kt)("strong",{parentName:"p"},"2nd April 2024"),") in mind, as there will be no extensions!"),(0,r.kt)("p",null,"Good luck! :)"),(0,r.kt)("h2",{id:"how-to-decrease-your-chance-of-being-accepted"},"How to decrease your chance of being accepted?"),(0,r.kt)("p",null,"There are some actions and behaviours that will make it much less likely that your application will be considered, so you should avoid these. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spamming or harassing mentors or other members of the OpenDAL community."),(0,r.kt)("li",{parentName:"ul"},"Letting AI automatically generate your project proposal (you should put effort in it, don't be lazy!)."),(0,r.kt)("li",{parentName:"ul"},"Suggesting unreasonably grandiose project proposals, e.g. adding a garbage collector to OpenDAL."),(0,r.kt)("li",{parentName:"ul"},"Suggesting unreasonably trivial project proposals, e.g. fixing a typo in the OpenDAL documentation. Remember that even the smallest ",(0,r.kt)("a",{parentName:"li",href:"https://google.github.io/gsocguides/student/time-management-for-students"},"project size")," should take about 90 hours!")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This guide was inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/google-summer-of-code/blob/main/proposal-guide.md"},"https://github.com/rust-lang/google-summer-of-code/blob/main/proposal-guide.md"),".")))}d.isMDXComponent=!0}}]);