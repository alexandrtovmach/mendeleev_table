(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),i=(t("Z2Ku"),t("L9s1"),t("xfY5"),t("TSYQ")),o=t.n(i),s=t("q/KU"),l=t.n(s);var c=function(e){return"-"===e?0:1*e>0?"+"+e:e},m=function(e){var a=e.isLantanoid,t=e.isActinoid,r=e.periodicalNumber,n=e.group,i=e.period,o=a?Number(r)-57:t?Number(r)-89:0,s=3*Number(a||t);return{xPos:Number(n)+o,yPos:Number(i)+s}},u=function(e){return[5,14,32,33,51,52,84,85].includes(Number(e))},d=function(e){return Number(e)%1?e:"["+e+"]"},N=function(e){var a,t;function r(){for(var a,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(a=e.call.apply(e,[this].concat(r))||this).state={selectedElementIdx:32},a.nodeToElementComponent=function(e,t){var r=e.node,i=r.id,o=r.periodicalNumber,s=r.symbol,l=r.relativeAtomicWeight,N=r.stableOxidationState,p=r.rusName,f=r.engName,v=r.color,E=r.hexColor,b=r.group,g=r.period,y=r.atomicRadius,C=r.radioactivity,x=u(o),I=Boolean(Number(C)),w=2===Number(v),A=o>=58&&o<=71,S=o>=90&&o<=103,R=d(l),k=c(N),P=m({isLantanoid:A,isActinoid:S,periodicalNumber:o,group:b,period:g}),T=P.xPos,L=P.yPos;return n.a.createElement(h,{key:i,onClick:a.handleSelectElement(t),periodicalNumber:o,xPos:T,yPos:L,symbol:s,mainName:p,secondaryName:f,relativeAtomicWeight:R,stableOxidationState:k,hexColor:E,atomicRadius:y,isSemimetal:x,isLantanoid:A,isActinoid:S,isInversedColor:w,isRadioactive:I})},a.handleSelectElement=function(e){return function(){void 0!==e&&a.setState({selectedElementIdx:e})}},a}return t=e,(a=r).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,r.prototype.render=function(){var e=this.props,a=e.elements,t=e.sortColors,r=this.state.selectedElementIdx;return n.a.createElement("div",{className:l.a.tableContainer},n.a.createElement(g,{colorList:t},this.nodeToElementComponent(a[r])),a.map(this.nodeToElementComponent),n.a.createElement("div",{className:o()(l.a.line,l.a.light),style:{gridRow:6}}),n.a.createElement("div",{className:o()(l.a.line,l.a.dark),style:{gridRow:7}}),n.a.createElement("div",{className:o()(l.a.line,l.a.dashed),style:{gridRow:8}}),n.a.createElement("div",{className:o()(l.a.line,l.a.light),style:{gridRow:9}}),n.a.createElement("div",{className:o()(l.a.line,l.a.dark),style:{gridRow:10}}))},r}(n.a.Component),p=t("8dDs"),f=t.n(p),v=function(e){return{width:Math.round(8*e||10)+"%",height:Math.round(8*e||10)+"%"}},h=function(e){var a,t,r=e.periodicalNumber,i=e.symbol,s=e.mainName,l=e.secondaryName,c=e.relativeAtomicWeight,m=e.xPos,u=e.yPos,d=e.stableOxidationState,N=e.hexColor,p=e.atomicRadius,h=e.isSemimetal,E=e.isRadioactive,b=e.isInversedColor,g=e.onClick;return n.a.createElement("div",{className:o()(f.a.elementContainer,(a={},a[f.a.lanthanum]=57===Number(r),a[f.a.actinium]=89===Number(r),a[f.a.cerium]=58===Number(r),a[f.a.thorium]=90===Number(r),a[f.a.semimetal]=h,a)),style:{backgroundColor:N,gridColumn:m,gridRow:u},onClick:g},n.a.createElement("div",{className:f.a.main},n.a.createElement("span",{className:f.a.symbol},i),n.a.createElement("span",{className:f.a.periodicalNumber},r)),n.a.createElement("div",{className:f.a.details},n.a.createElement("div",{className:f.a.weightRow},n.a.createElement("span",{className:f.a.weight},c),n.a.createElement("span",{className:f.a.oxidationState},d)),n.a.createElement("div",{className:f.a.names},n.a.createElement("p",{className:f.a.mainName},s),n.a.createElement("p",{className:f.a.secondaryName},l))),n.a.createElement("div",{className:o()(f.a.atomicRadius,(t={},t[f.a.inversedColor]=b,t[f.a.radioactive]=E,t)),style:v(p)}))},E=(t("91GP"),t("Vd3H"),t("y9bx")),b=t.n(E),g=function(e){var a=e.children,t=function(e){return e.reduce((function(e,a){var t,r=a.nodes[0],n=r.id,i=r.hexColor,o=r.color,s=r.sort;return Object.assign({},e,((t={})[s]={id:n,hexColor:e[s]?[e[s].hexColor,i]:i,color:o,sort:s},t))}),{})}(e.colorList);return n.a.createElement("div",{className:b.a.legendContainer},n.a.createElement("div",{className:b.a.cellDescription},n.a.createElement("div",{className:b.a.legendElementScale},a)),n.a.createElement("div",{className:b.a.sortList},["s","p","d","f"].map((function(e){var a,r=t[e],i=r.id,o=r.hexColor;return n.a.createElement("div",{className:b.a.sortItem},n.a.createElement("div",{key:i,className:b.a.sortColorBlock,style:{background:(a=o,"string"==typeof a?a:"linear-gradient(30deg, "+a[1]+" 0, "+a[1]+" 50%, "+a[0]+" 50%)")}}),n.a.createElement("span",{className:b.a.sortSign},e),n.a.createElement("span",null,"-elements"))}))))};t.d(a,"query",(function(){return y}));var y="922665873";a.default=function(e){var a=e.data.allPeriodicalTableJson,t=a.edges,r=a.group;return n.a.createElement(N,{elements:t,sortColors:r})}},TSYQ:function(e,a,t){var r;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},xfY5:function(e,a,t){"use strict";var r=t("dyZX"),n=t("aagx"),i=t("LZWt"),o=t("Xbzi"),s=t("apmT"),l=t("eeVq"),c=t("kJMx").f,m=t("EemH").f,u=t("hswa").f,d=t("qncB").trim,N=r.Number,p=N,f=N.prototype,v="Number"==i(t("Kuth")(f)),h="trim"in String.prototype,E=function(e){var a=s(e,!1);if("string"==typeof a&&a.length>2){var t,r,n,i=(a=h?a.trim():d(a,3)).charCodeAt(0);if(43===i||45===i){if(88===(t=a.charCodeAt(2))||120===t)return NaN}else if(48===i){switch(a.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+a}for(var o,l=a.slice(2),c=0,m=l.length;c<m;c++)if((o=l.charCodeAt(c))<48||o>n)return NaN;return parseInt(l,r)}}return+a};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof N&&(v?l((function(){f.valueOf.call(t)})):"Number"!=i(t))?o(new p(E(a)),t,N):E(a)};for(var b,g=t("nh4g")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;g.length>y;y++)n(p,b=g[y])&&!n(N,b)&&u(N,b,m(p,b));N.prototype=f,f.constructor=N,t("KroJ")(r,"Number",N)}}}]);
//# sourceMappingURL=component---src-pages-index-js-387ade23c90b1662fd21.js.map