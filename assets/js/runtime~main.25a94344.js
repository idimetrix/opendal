(()=>{"use strict";var e,a,c,t,b,r={},f={};function d(e){var a=f[e];if(void 0!==a)return a.exports;var c=f[e]={exports:{}};return r[e].call(c.exports,c,c.exports,d),c.exports}d.m=r,e=[],d.O=(a,c,t,b)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],b=e[i][2];for(var f=!0,o=0;o<c.length;o++)(!1&b||r>=b)&&Object.keys(d.O).every((e=>d.O[e](c[o])))?c.splice(o--,1):(f=!1,b<r&&(r=b));if(f){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[c,t,b]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var b=Object.create(null);d.r(b);var r={};a=a||[null,c({}),c([]),c(c)];for(var f=2&t&&e;"object"==typeof f&&!~a.indexOf(f);f=c(f))Object.getOwnPropertyNames(f).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,d.d(b,r),b},d.d=(e,a)=>{for(var c in a)d.o(a,c)&&!d.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,c)=>(d.f[c](e,a),a)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",217:"b56f9725",380:"ab10c306",455:"07df3158",533:"b2b675dd",716:"a0405932",1011:"cc62039a",1163:"434bbc94",1372:"1db64337",1477:"b2f554cd",1513:"9897d641",1652:"8cc9519e",1713:"a7023ddc",1846:"054cd2fb",2379:"d5c31a96",2505:"14a24c8e",2535:"814f3328",2652:"8bf4b5be",2804:"2cbf1097",3057:"136e1c50",3085:"1f391b9e",3089:"a6aa9e1f",3358:"f3200a52",3608:"9e4087bc",3661:"3806ecb0",3845:"e892cec6",3880:"7caca07b",3922:"6eb7fe18",4013:"01a85c17",4157:"283e63f8",4195:"c4f5d8e4",4477:"1957547a",4536:"22d8fa67",4538:"f1ca5a39",4719:"8f4159f2",4832:"ece86388",5214:"bb5b2057",5555:"37896f57",5606:"beae818e",5822:"be97ea89",6089:"62a401e9",6103:"ccc49370",6427:"5a65e608",6611:"209227ae",6948:"e19a6781",6983:"ae4554eb",7289:"c6ab695b",7309:"4fb2b91a",7757:"57a16c1d",7794:"02514dc9",7918:"17896441",8610:"6875c492",9319:"4b02d014",9514:"1be78505",9817:"14eb3368"}[e]||e)+"."+{53:"917b7ba9",217:"d766ce96",380:"db5f0876",455:"bea29bdc",533:"856b2c0d",716:"66c36dcb",1011:"21630fa6",1163:"2abddc5d",1372:"53a79ce2",1477:"4cc89a31",1506:"7a372cde",1513:"c2c9574f",1652:"9fdfef9a",1713:"7a4d520b",1846:"b1ee4952",2379:"d453475f",2505:"616b7940",2529:"ea72b266",2535:"f44033d6",2652:"7ce94c8c",2804:"370ee635",3057:"332e9410",3085:"fc747d21",3089:"66019f66",3358:"117ebfb8",3608:"822525bd",3661:"7d81778c",3845:"c2577106",3880:"31b6335a",3922:"921b4855",4013:"4316cd6e",4157:"a74b6771",4195:"acdec80a",4477:"456e3906",4536:"9e51b3ed",4538:"35babdd9",4719:"dc3b551b",4832:"c7f148e3",4972:"f7d54065",5214:"d83afcd3",5555:"fc5a447b",5606:"d058c3d4",5822:"b2399ce4",6089:"094d6b98",6103:"ba4b09b5",6427:"d85c45c8",6611:"b4b413b1",6948:"8576bf3f",6983:"d9ad7c41",7289:"3f029a72",7309:"4e640a3e",7757:"a8f20693",7794:"f65c569b",7918:"fa99442c",8610:"a3ea2b2f",9319:"e06cd8f0",9514:"d888abe5",9817:"5d4ade20"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},b="opendal-website:",d.l=(e,a,c,r)=>{if(t[e])t[e].push(a);else{var f,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+c){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.setAttribute("data-webpack",b+c),f.src=e),t[e]=[a];var l=(a,c)=>{f.onerror=f.onload=null,clearTimeout(s);var b=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),b&&b.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",d.gca=function(e){return e={17896441:"7918","935f2afb":"53",b56f9725:"217",ab10c306:"380","07df3158":"455",b2b675dd:"533",a0405932:"716",cc62039a:"1011","434bbc94":"1163","1db64337":"1372",b2f554cd:"1477","9897d641":"1513","8cc9519e":"1652",a7023ddc:"1713","054cd2fb":"1846",d5c31a96:"2379","14a24c8e":"2505","814f3328":"2535","8bf4b5be":"2652","2cbf1097":"2804","136e1c50":"3057","1f391b9e":"3085",a6aa9e1f:"3089",f3200a52:"3358","9e4087bc":"3608","3806ecb0":"3661",e892cec6:"3845","7caca07b":"3880","6eb7fe18":"3922","01a85c17":"4013","283e63f8":"4157",c4f5d8e4:"4195","1957547a":"4477","22d8fa67":"4536",f1ca5a39:"4538","8f4159f2":"4719",ece86388:"4832",bb5b2057:"5214","37896f57":"5555",beae818e:"5606",be97ea89:"5822","62a401e9":"6089",ccc49370:"6103","5a65e608":"6427","209227ae":"6611",e19a6781:"6948",ae4554eb:"6983",c6ab695b:"7289","4fb2b91a":"7309","57a16c1d":"7757","02514dc9":"7794","6875c492":"8610","4b02d014":"9319","1be78505":"9514","14eb3368":"9817"}[e]||e,d.p+d.u(e)},(()=>{var e={1303:0,532:0};d.f.j=(a,c)=>{var t=d.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((c,b)=>t=e[a]=[c,b]));c.push(t[2]=b);var r=d.p+d.u(a),f=new Error;d.l(r,(c=>{if(d.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var b=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;f.message="Loading chunk "+a+" failed.\n("+b+": "+r+")",f.name="ChunkLoadError",f.type=b,f.request=r,t[1](f)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,c)=>{var t,b,r=c[0],f=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(t in f)d.o(f,t)&&(d.m[t]=f[t]);if(o)var i=o(d)}for(a&&a(c);n<r.length;n++)b=r[n],d.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return d.O(i)},c=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();