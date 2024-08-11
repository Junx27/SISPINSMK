import{j as e,W as g,Y as h,b as f}from"./app-CfL7hliQ.js";import{T as i,I as l}from"./TextInput-D-eP1Wqe.js";import{I as n}from"./InputLabel-CWBqLwzY.js";import{P as j}from"./PrimaryButton-C7yKUSpA.js";function b({className:a="",...o}){return e.jsx("input",{...o,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+a})}function k({status:a,canResetPassword:o,handleClose:d}){const{data:r,setData:t,post:c,processing:u,errors:m,reset:x}=g({email:"",password:"",remember:!1}),p=s=>{s.preventDefault(),c(route("login"),{onFinish:()=>x("password")})};return e.jsxs("div",{className:"bg-white p-5 rounded-lg w-[350px]",children:[e.jsx("div",{className:"flex justify-end mb-2 cursor-pointer",onClick:d,children:e.jsx("img",{src:"/close.png",alt:"",className:"w-5 h-5"})}),e.jsx(h,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>t("email",s.target.value)}),e.jsx(l,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password",value:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>t("password",s.target.value)}),e.jsx(l,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(b,{name:"remember",checked:r.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(f,{href:route("password.request"),className:"underline text-xs text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(j,{className:"ms-4",disabled:u,children:"Log in"})]})]})]})}export{k as default};
