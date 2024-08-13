import{l as re,r as oe}from"./app-CycvKacP.js";import{d as ae}from"./index-BI6bIyZt.js";var ue;function $(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ie=$(re),o=oe;$(o);var b=ae;function h(){return(h=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(e[f]=c[f])}return e}).apply(this,arguments)}function Z(e,i){var c=o.useState(function(){var C=b.Inertia.restore(i);return C!==void 0?C:e}),f=c[0],s=c[1];return o.useEffect(function(){b.Inertia.remember(f,i)},[f,i]),[f,s]}var _=o.createContext();_.displayName="InertiaPageContext";var z=o.createContext();function ce(e){var i=e.children,c=e.initialPage,f=e.resolveComponent,s=e.titleCallback,C=e.onHeadUpdate,m=o.useState({component:e.initialComponent||null,page:c,key:null}),l=m[0],I=m[1],u=o.useMemo(function(){return b.createHeadManager(typeof window>"u",s||function(d){return d},C||function(){})},[]);if(o.useEffect(function(){b.Inertia.init({initialPage:c,resolveComponent:f,swapComponent:function(d){var g=d.component,v=d.page,y=d.preserveState;try{return I(function(S){return{component:g,page:v,key:y?S.key:Date.now()}}),Promise.resolve()}catch(S){return Promise.reject(S)}}})},[]),!l.component)return o.createElement(z.Provider,{value:u},o.createElement(_.Provider,{value:l.page},null));var O=i||function(d){var g=d.Component,v=d.props,y=o.createElement(g,h({key:d.key},v));return typeof g.layout=="function"?g.layout(y):Array.isArray(g.layout)?g.layout.concat(y).reverse().reduce(function(S,k){return o.createElement(k,h({children:S},v))}):y};return o.createElement(z.Provider,{value:u},o.createElement(_.Provider,{value:l.page},O({Component:l.component,key:l.key,props:l.page.props})))}z.displayName="InertiaHeadContext",ce.displayName="Inertia";var se=["children","as","data","href","method","preserveScroll","preserveState","replace","only","headers","queryStringArrayFormat","onClick","onCancelToken","onBefore","onStart","onProgress","onFinish","onCancel","onSuccess","onError"],P=function(){};o.forwardRef(function(e,i){var c=e.children,f=e.as,s=f===void 0?"a":f,C=e.data,m=C===void 0?{}:C,l=e.href,I=e.method,u=I===void 0?"get":I,O=e.preserveScroll,d=O!==void 0&&O,g=e.preserveState,v=g===void 0?null:g,y=e.replace,S=y!==void 0&&y,k=e.only,D=k===void 0?[]:k,N=e.headers,T=N===void 0?{}:N,L=e.queryStringArrayFormat,Q=L===void 0?"brackets":L,w=e.onClick,A=w===void 0?P:w,q=e.onCancelToken,B=q===void 0?P:q,H=e.onBefore,M=H===void 0?P:H,j=e.onStart,x=j===void 0?P:j,E=e.onProgress,n=E===void 0?P:E,r=e.onFinish,t=r===void 0?P:r,p=e.onCancel,a=p===void 0?P:p,R=e.onSuccess,G=R===void 0?P:R,J=e.onError,K=J===void 0?P:J,ee=function(F,te){if(F==null)return{};var W,U,X={},Y=Object.keys(F);for(U=0;U<Y.length;U++)te.indexOf(W=Y[U])>=0||(X[W]=F[W]);return X}(e,se),ne=o.useCallback(function(F){A(F),b.shouldIntercept(F)&&(F.preventDefault(),b.Inertia.visit(l,{data:m,method:u,preserveScroll:d,preserveState:v??u!=="get",replace:S,only:D,headers:T,onCancelToken:B,onBefore:M,onStart:x,onProgress:n,onFinish:t,onCancel:a,onSuccess:G,onError:K}))},[m,l,u,d,v,S,D,T,A,B,M,x,n,t,a,G,K]);s=s.toLowerCase(),u=u.toLowerCase();var V=b.mergeDataIntoQueryString(u,l||"",m,Q);return l=V[0],m=V[1],s==="a"&&u!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="`+l+'" method="'+u+'" as="button">...</Link>'),o.createElement(s,h({},ee,s==="a"?{href:l}:{},{ref:i,onClick:ne}),c)});ue=function(){var e=[].slice.call(arguments),i=o.useRef(null),c=typeof e[0]=="string"?e[0]:null,f=o.useState((typeof e[0]=="string"?e[1]:e[0])||{}),s=f[0],C=f[1],m=o.useRef(null),l=o.useRef(null),I=c?Z(s,c+":data"):o.useState(s),u=I[0],O=I[1],d=c?Z({},c+":errors"):o.useState({}),g=d[0],v=d[1],y=o.useState(!1),S=y[0],k=y[1],D=o.useState(!1),N=D[0],T=D[1],L=o.useState(null),Q=L[0],w=L[1],A=o.useState(!1),q=A[0],B=A[1],H=o.useState(!1),M=H[0],j=H[1],x=function(n){return n};o.useEffect(function(){return i.current=!0,function(){i.current=!1}},[]);var E=o.useCallback(function(n,r,t){t===void 0&&(t={});var p=h({},t,{onCancelToken:function(a){if(m.current=a,t.onCancelToken)return t.onCancelToken(a)},onBefore:function(a){if(B(!1),j(!1),clearTimeout(l.current),t.onBefore)return t.onBefore(a)},onStart:function(a){if(T(!0),t.onStart)return t.onStart(a)},onProgress:function(a){if(w(a),t.onProgress)return t.onProgress(a)},onSuccess:function(a){if(i.current&&(T(!1),w(null),v({}),k(!1),B(!0),j(!0),l.current=setTimeout(function(){i.current&&j(!1)},2e3)),t.onSuccess)return t.onSuccess(a)},onError:function(a){if(i.current&&(T(!1),w(null),v(a),k(!0)),t.onError)return t.onError(a)},onCancel:function(){if(i.current&&(T(!1),w(null)),t.onCancel)return t.onCancel()},onFinish:function(){if(i.current&&(T(!1),w(null)),m.current=null,t.onFinish)return t.onFinish()}});n==="delete"?b.Inertia.delete(r,h({},p,{data:x(u)})):b.Inertia[n](r,x(u),p)},[u,v]);return{data:u,setData:function(n,r){var t;O(typeof n=="string"?h({},u,((t={})[n]=r,t)):typeof n=="function"?function(p){return n(p)}:n)},isDirty:!ie(u,s),errors:g,hasErrors:S,processing:N,progress:Q,wasSuccessful:q,recentlySuccessful:M,transform:function(n){x=n},setDefaults:function(n,r){C(n===void 0?function(){return u}:function(t){var p;return h({},t,r?((p={})[n]=r,p):n)})},reset:function(){var n=[].slice.call(arguments);O(n.length===0?s:Object.keys(s).filter(function(r){return n.includes(r)}).reduce(function(r,t){return r[t]=s[t],r},h({},u)))},setError:function(n,r){v(function(t){var p,a=h({},t,r?((p={})[n]=r,p):n);return k(Object.keys(a).length>0),a})},clearErrors:function(){var n=[].slice.call(arguments);v(function(r){var t=Object.keys(r).reduce(function(p,a){var R;return h({},p,n.length>0&&!n.includes(a)?((R={})[a]=r[a],R):{})},{});return k(Object.keys(t).length>0),t})},submit:E,get:function(n,r){E("get",n,r)},post:function(n,r){E("post",n,r)},put:function(n,r){E("put",n,r)},patch:function(n,r){E("patch",n,r)},delete:function(n,r){E("delete",n,r)},cancel:function(){m.current&&m.current.cancel()}}};export{ue as u};
