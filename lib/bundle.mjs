const e=(t,s,r,c,o)=>{Object.keys(t).forEach((a=>{const n=t[a],l=`${r}__${(e=>{let t="";const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=s.length;for(let c=0;c<e;c++)t+=s.charAt(Math.floor(Math.random()*r));return t})(6)}`,d=`${o?o+" ":""}${l}`;if("object"==typeof n)e(n,s,`${r}-${a}`,a,d);else{const e=c||"base";s[e]||(s[e]={cssStr:"",originClassName:l,renderClassName:d}),s[e].cssStr+=`${h=a,h.replace(/([A-Z])/g,"-$1").toLowerCase()}:${n};`}var h}))},t=(t,s)=>{const r={},c={};return e(s,c,t),(e=>{let t="";const s=document.createElement("style");s.setAttribute("type","text/css"),Object.keys(e).forEach((s=>{const{originClassName:r,cssStr:c}=e[s];t+=`.${r}{${c}}`}));const r=document.createTextNode(t);s.appendChild(r),document.head.appendChild(s)})(c),Object.keys(c).forEach((e=>{r[e]=c[e].renderClassName})),r};export{t as css};
