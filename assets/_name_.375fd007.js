import{d,u as _,m as k,a as f,w as x,o as a,c as r,e,t as n,f as t,F as b,n as h,p as v,b as y,q as N,r as C,k as w}from"./index.5fe476ed.js";const V=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),g={"text-sm":"","opacity-75":""},B={key:0,"text-sm":"","mt-4":""},E={"opacity-75":""},$=d({__name:"[name]",props:{name:null},setup(u){const l=u,m=_(),i=k(),{t:o}=f();return x(()=>{i.setNewName(l.name)}),(F,c)=>{const p=C("router-link");return a(),r("div",null,[V,e("p",null,n(t(o)("intro.hi",{name:l.name})),1),e("p",g,[e("em",null,n(t(o)("intro.dynamic-route")),1)]),t(i).otherNames.length?(a(),r("p",B,[e("span",E,n(t(o)("intro.aka"))+":",1),e("ul",null,[(a(!0),r(b,null,h(t(i).otherNames,s=>(a(),r("li",{key:s},[y(p,{to:`/hi/${s}`,replace:""},{default:N(()=>[w(n(s),1)]),_:2},1032,["to"])]))),128))])])):v("",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:c[0]||(c[0]=s=>t(m).back())},n(t(o)("button.back")),1)])])}}});export{$ as default};
