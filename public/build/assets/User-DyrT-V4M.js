import{r,M as R,j as e,a as A,Y as L}from"./app-DVTEHDja.js";import{D as _,C as T,N as F,S as M}from"./CreateBook-CAyNMaUW.js";import{u as O}from"./Url-Bx3CnFKe.js";import{E as G}from"./EditUser-CpOPVfFn.js";import{B as P}from"./Button-Tpo8AKeD.js";import{D as K,P as V}from"./Pagination-s9rACRNi.js";import{D as i}from"./Dropdown-NPiCgCaW.js";import{P as q}from"./PopOver-DfInlYEL.js";import"./index-BqUHl1JM.js";import"./index-D2pZPc5z.js";import"./transition-LP_tDFXK.js";function Y({data:l}){const u=r.useRef(),{value:c,setValue:x}=r.useContext(R),E=[...new Set(l.map(s=>s.gender))],v=[...new Set(l.map(s=>s.status))],b=10,[g,$]=r.useState(1),[d,m]=r.useState([]),[N,p]=r.useState(),[n,f]=r.useState(null),[h,j]=r.useState(null),w=()=>{j(null),j(null),x(null),p(null)},C=Math.ceil(l.length/b),y=s=>{$(s)},S=(s,t)=>{s.target.checked?m([...d,t]):m(d.filter(a=>a!==t))},U=s=>{if(s.target.checked){const t=l.map(a=>a.id);m(t)}else m([])},z=s=>{p(s),fetchUserData(s)},o=()=>{const s=(g-1)*b,t=s+b;let a=l;return c&&(a=a.filter(k=>k.nama.toLowerCase().includes(c.toLowerCase()))),h&&(a=a.filter(k=>k.gender.toLowerCase().includes(h.toLowerCase()))),n&&(a=a.filter(k=>k.status.toLowerCase().includes(n.toLowerCase()))),a.slice(s,t)},D=s=>d.includes(s),I=()=>{d.forEach(async s=>{try{await A.delete(`/admin/user/${s}`),window.location.reload()}catch(t){console.error("Error deleting data:",t)}})},B="data-buku";return e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[N&&e.jsx(q,{children:e.jsxs("div",{className:"bg-white w-[350px] p-5 rounded-lg",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("img",{src:"/close.png",alt:"",className:"w-4 h-4",onClick:()=>p(null)})}),e.jsx(G,{id:N})]})}),e.jsxs("div",{className:"flex justify-between mb-2 items-center",children:[e.jsxs("div",{className:"flex text-xs items-center relative",children:[e.jsx("div",{onClick:w,children:e.jsx(P,{name:"Refresh All"})}),d.length>0&&e.jsx("div",{className:"w-10 ml-3",onClick:I,children:e.jsx("img",{src:"/delete.png",alt:"",className:"w-5 h-5"})})]}),e.jsxs("div",{className:"text-xs flex gap-5",children:[e.jsx("div",{children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx(P,{name:`${h!==null?h:"Gender"}`,className:"bg-opacity-10 bg-white/50"})}),e.jsxs(i.Content,{children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>j(null),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3 cursor-pointer"})}),E.map((s,t)=>e.jsx("div",{className:"p-2 px-5 cursor-pointer",onClick:()=>j(s),children:e.jsx("p",{children:s})},t))]})]})}),e.jsx("div",{children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx(P,{name:`${n!==null?n:"Status"}`,className:"bg-opacity-10 bg-white/50"})}),e.jsxs(i.Content,{children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>f(null),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3 cursor-pointer"})}),e.jsx("div",{className:`${v.length>20?"h-[600px] overflow-auto":""}`,children:v.map((s,t)=>e.jsx("div",{className:"p-2 px-5 cursor-pointer",onClick:()=>f(s),children:e.jsx("p",{children:s})},t))})]})]})}),e.jsx("div",{children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx(P,{name:"Download",className:"bg-blue-50"})}),e.jsx(i.Content,{children:e.jsxs("div",{className:"flex flex-col gap-3 p-3 justify-start text-xs",children:[e.jsx(K,{elementId:B}),e.jsx(_,{pdfRef:u,fileName:"Daftar User"})]})})]})})]})]}),o().length===0&&e.jsx("p",{className:"text-red-500 text-center mb-5 text-xs",children:"Data tidak ditemukan, tidak ada data dengan nama tersebut"}),e.jsxs("div",{className:"flex flex-col md:flex-row",children:[e.jsxs("table",{ref:u,className:"absolute mt-0 table-auto w-full shadow-lg rounded-lg p-5",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm",children:"No"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Nama Anggota"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Email"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Kontak"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Gender"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Status"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Edit"})]})}),e.jsx("tbody",{className:"relative text-sm",children:o().map((s,t)=>e.jsxs("tr",{className:`border-t ${D(s.id)?"bg-blue-100":""}`,children:[e.jsx("td",{className:"border-r px-3 py-2",children:t+1}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.nama}),e.jsx("td",{className:"border-r border-l py-1 px-3 leading-6",children:s.email}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.kontak}),e.jsx("td",{className:"border-r border-l py-1 px-3 capitalize leading-6",children:s.gender}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.status}),e.jsx("td",{className:"border-r py-1 px-3 capitalize text-center",children:e.jsx("button",{className:"p-2 rounded-md",onClick:()=>z(s.id),children:e.jsx("img",{src:"/edit.png",alt:"",className:"w-3 h-3"})})})]},t))})]}),e.jsxs("table",{id:B,className:"hidden mt-10 md:mt-0 table-auto w-full shadow-lg rounded-lg p-5 bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm",children:"No"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Nama Anggota"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Email"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Kontak"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Gender"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Status"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Role"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-10",children:"Foto Profil"})]})}),e.jsx("tbody",{className:"relative text-sm",children:l.map((s,t)=>e.jsxs("tr",{className:`h-10 border-t ${D(s.id)?"bg-blue-100":""}`,children:[e.jsx("td",{className:"border-r px-3 py-2",children:t+1}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.nama}),e.jsx("td",{className:"border-r border-l py-1 px-3 leading-6",children:s.email}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.kontak}),e.jsx("td",{className:"border-r border-l py-1 px-3 capitalize leading-6",children:s.gender}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.status}),e.jsx("td",{className:"border-r py-1 px-3 capitalize",children:s.role}),e.jsx("td",{className:"border-r py-1 px-3 capitalize",children:s.foto_profil})]},t))})]}),e.jsxs("table",{className:"relative mt-10 md:mt-0 table-auto w-full shadow-lg rounded-lg p-5 bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"border-r px-2 md:px-3 py-2 font-bold rounded-tl text-start text-blue-500",children:e.jsx("input",{type:"checkbox",className:"rounded outline-0",onChange:U})}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Nama Anggota"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Email"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Kontak"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Gender"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Status"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Edit"})]})}),e.jsx("tbody",{className:"relative text-sm",children:o().map((s,t)=>e.jsxs("tr",{className:`h-10 border-t ${D(s.id)||N===s.id?"bg-blue-100":""}`,children:[e.jsx("td",{className:"border-r px-3 py-2",children:e.jsx("input",{type:"checkbox",id:`select-${s.id}`,className:"rounded outline-0",checked:D(s.id),onChange:a=>S(a,s.id)})}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize",children:s.nama}),e.jsx("td",{className:"border-r border-l py-1 px-3 leading-6",children:s.email}),e.jsx("td",{className:"py-1 leading-6 px-3",children:s.kontak}),e.jsx("td",{className:"border-r border-l py-1 px-3 capitalize leading-6",children:s.gender}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.status}),e.jsx("td",{className:"border-r py-1 px-3 capitalize text-center",children:e.jsx("button",{className:"p-2 rounded-md",onClick:()=>z(s.id),children:e.jsx("img",{src:"/edit.png",alt:"",className:"w-3 h-3"})})})]},t))})]})]}),e.jsx("div",{className:"mb-20",children:e.jsx(V,{currentPage:g,totalPages:C,onPageChange:y,data:l})})]})})}function re({auth:l,bukus:u,users:c,pinjamans:x}){const E=x.filter(o=>o.status_peminjaman==="meminjam"),v=x.filter(o=>o.status_peminjaman==="dikembalikan"),b=u.length,g=c.length,$=x.length,d=b/g,m=Math.round(d),N=Math.round($/g),p=l.user.role;r.useEffect(()=>{p==="anggota"&&(window.location.href="/daftar-buku")});const[n,f]=r.useState(!1),h="/logo.png",j=()=>{f(!n)},[w,C]=r.useState(!1),[y,S]=r.useState(!1),U=()=>{C(!w)},z=()=>{S(!y)};return e.jsx("div",{children:p==="admin"&&e.jsxs("div",{children:[e.jsx("div",{className:`transition-all duration-500 h-screen absolute z-50 backdrop-blur-md bg-opacity-10 bg-white/30 ${w?"w-[300px]":"w-0"}`,children:e.jsxs("div",{className:`transition-all duration-200 p-5 ${w?"block":"hidden"}`,children:[e.jsx("div",{className:"flex justify-end cursor-pointer",onClick:()=>C(!1),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3"})}),e.jsx(G,{id:l.user.id})]})}),e.jsx("div",{className:`transition-all duration-500 h-screen absolute z-50 bg-white ${y?"w-[300px]":"w-0"}`,children:e.jsxs("div",{className:`transition-all duration-200 p-5 ${y?"block":"hidden"}`,children:[e.jsx("div",{className:"flex justify-end cursor-pointer",onClick:()=>S(!1),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3"})}),e.jsx(T,{id:l.user.id})]})}),e.jsx(L,{title:"Daftar User"}),e.jsx(F,{profile:O+l.user.foto_profil,logo:h,handleMenu:j,showIcon:!n,auth:l.user.nama,handleSetting:U,handleBookmark:z}),e.jsx("div",{className:"absolute w-20 overflow-hidden",children:e.jsx(M,{})}),e.jsxs("div",{className:`absolute transition-all duration-500 w-[300px] z-50 backdrop-blur-sm bg-white/75 h-screen ${n?"ml-0":"-ml-96"}`,children:[e.jsx("button",{onClick:()=>f(!n),children:e.jsx("img",{src:"/close.png",alt:"",className:`transition-all duration-1000 w-5 h-5 relative top-4 left-64 ${n?"rotate-0":"rotate-90"}`})}),e.jsx("div",{className:"-mt-7",children:e.jsx(M,{viewicon:!0,bukus:u.length,pinjamans:x.length,bukuDikembalikan:v.length,bukuDipinjam:E.length,users:c.length,ratio:m,probabilitas:N})})]}),e.jsx("div",{children:e.jsxs("div",{className:"w-full h-screen",children:[e.jsx("img",{src:"/footer.jpg",alt:"",className:"w-full h-screen object-cover"}),e.jsx("div",{className:"inset-0 absolute top-20 left-0 ml-20 p-5 bg-opacity-10 bg-white/75 rounded-lg",children:e.jsx(Y,{data:c})})]})})]})})}export{re as default};
