import{W as d,j as s,Y as l}from"./app-DP6y9lV8.js";import{G as p}from"./GuestLayout-BG2ePnik.js";import{T as c,I as u}from"./TextInput-BWzSXzkz.js";import{I as f}from"./InputLabel-H2mOLoeZ.js";import{P as x}from"./PrimaryButton-MJc20_5l.js";function g(){const{data:a,setData:e,post:o,processing:t,errors:i,reset:m}=d({password:""}),n=r=>{r.preventDefault(),o(route("password.confirm"),{onFinish:()=>m("password")})};return s.jsxs(p,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(c,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(u,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{g as default};
