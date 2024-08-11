import{r as n,j as e,M as G,a as H,Y as J}from"./app-CfL7hliQ.js";import{D as Q,C as W,N as X,S as O}from"./CreateBook-DMn65NKx.js";import{u as I}from"./Url-Bx3CnFKe.js";import{E as Z}from"./EditUser-DJGN9p-S.js";import{B as k}from"./Button-BMlf9uxg.js";import{D as ee,P as se}from"./Pagination-Bvt6Ig2L.js";import{D as c}from"./Dropdown-i5d019Ij.js";import{P as te}from"./PopOver-B8NNJgjJ.js";import{u as le}from"./index-Bhk56uz1.js";import"./index-BEtTa2Fv.js";import"./transition-Dg0qxj0_.js";function re({id:l,handleClose:m}){const{data:i,setData:d,put:j}=le({caption:"",kategori:"",stok:"",penerbit:"",tahun:"",edisi:"",desc:"",imageUrl:null});n.useEffect(()=>{(async()=>{try{const o=await axios.get(`/admin/buku/${l}`);d({caption:o.data.caption,kategori:o.data.kategori,stok:o.data.stok,penerbit:o.data.penerbit,tahun:o.data.tahun,edisi:o.data.edisi,desc:o.data.desc,imageUrl:o.data.imageUrl})}catch(o){console.error(o)}})()},[l]);const f=r=>{r.preventDefault(),j(`/admin/buku-update/${l}`),window.location.reload()};return e.jsxs("div",{className:"bg-white p-5 rounded-lg w-[700px] shadow-lg",children:[e.jsx("div",{className:"flex justify-end",onClick:m,children:e.jsx("img",{src:"/close.png",alt:"",className:"w-5 h-5"})}),e.jsxs("form",{className:"mt-5 text-xs mx-5 flex flex-row gap-5",onSubmit:f,encType:"multipart/form-data",children:[e.jsxs("div",{className:"w-full mt-3",children:[e.jsx("a",{href:`/admin/buku-foto/${l}`,children:e.jsx("img",{src:i.imageUrl==="null"|i.imageUrl===null?"/default-book.jpg":I+i.imageUrl,alt:"",className:"w-full h-64 object-cover brightness-95 rounded-lg"})}),e.jsx("p",{className:"font-bold mt-5",children:"Caption"}),e.jsx("input",{type:"text",name:"caption",className:"w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:i.caption,onChange:r=>d("caption",r.target.value),required:!0}),e.jsx("p",{className:"font-bold",children:"Kategori"}),e.jsx("input",{type:"text",name:"kategori",className:"w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:i.kategori,onChange:r=>d("kategori",r.target.value),required:!0}),e.jsx("p",{className:"font-bold mt-3",children:"Stok"}),e.jsx("input",{type:"number",name:"stok",className:"w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:i.stok,onChange:r=>d("stok",r.target.value),required:!0})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"font-bold mt-3",children:"Penerbit"}),e.jsx("input",{type:"text",name:"penerbit",className:"w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:i.penerbit,onChange:r=>d("penerbit",r.target.value),required:!0}),e.jsx("p",{className:"font-bold mt-3",children:"Tahun"}),e.jsx("input",{type:"number",name:"tahun",className:"w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:i.tahun,onChange:r=>d("tahun",r.target.value),required:!0}),e.jsx("p",{className:"font-bold mt-3",children:"Edisi"}),e.jsx("input",{type:"text",name:"edisi",className:"w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:i.edisi,onChange:r=>d("edisi",r.target.value),required:!0}),e.jsx("p",{className:"font-bold mt-3",children:"Deskripsi"}),e.jsx("textarea",{name:"desc",className:"w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:i.desc,rows:10,onChange:r=>d("desc",r.target.value),required:!0}),e.jsx("button",{type:"submit",className:"bg-blue-500 text-white mt-3 rounded-md text-xs p-2 w-full",children:"Simpan perubahan"})]})]})]})}function ae({data:l}){const m=n.useRef(),{value:i,setValue:d}=n.useContext(G),j=[...new Set(l.map(s=>s.kategori.toLocaleLowerCase()))],f=[...new Set(l.map(s=>s.tahun.toLocaleLowerCase()))],r=[...new Set(l.map(s=>s.penerbit.toLocaleLowerCase()))],o=[...new Set(l.map(s=>s.edisi.toLocaleLowerCase()))],y=10,[D,L]=n.useState(1),[b,g]=n.useState([]),[u,C]=n.useState(null),[P,S]=n.useState(null),[N,z]=n.useState(null),[p,w]=n.useState(null),[h,v]=n.useState(null),[U,E]=n.useState(!1),[B,K]=n.useState(),q=s=>{E(!0),K(s)},R=()=>{S(null),z(null),w(null),v(null),d(null)},F=Math.ceil(l.length/y),_=s=>{L(s)},A=(s,t)=>{s.target.checked?g([...b,t]):g(b.filter(a=>a!==t))},V=s=>{if(s.target.checked){const t=l.map(a=>a.id);g(t)}else g([])},T=()=>{const s=(D-1)*y,t=s+y;let a=l;return i&&(a=a.filter(x=>x.caption.toLowerCase().includes(i.toLowerCase()))),P&&(a=a.filter(x=>x.tahun.toLowerCase().includes(P.toLowerCase()))),N&&(a=a.filter(x=>x.kategori.toLowerCase().includes(N.toLowerCase()))),h&&(a=a.filter(x=>x.edisi.toLowerCase().includes(h.toLowerCase()))),p&&(a=a.filter(x=>x.penerbit.toLowerCase().includes(p.toLowerCase()))),a.slice(s,t)},$=s=>b.includes(s),Y=()=>{b.forEach(async s=>{try{await H.delete(`/admin/buku/${s}`),window.location.reload()}catch(t){console.error("Error deleting data:",t)}})},M="data-buku";return e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute z-50 top-8 right-20",children:l.filter(s=>s.id===u).map((s,t)=>e.jsx("div",{className:"w-[300px] h-[460px]",children:e.jsx("img",{src:s.imageUrl==="null"|s.imageUrl===null?"/default-book.jpg":I+s.imageUrl,alt:"",className:"w-full h-full object-cover brightness-95 rounded-lg"})},t))}),e.jsxs("div",{className:"flex justify-between mb-2 items-center",children:[e.jsx("div",{className:"flex items-center relative",children:e.jsxs("div",{className:"flex text-xs items-center relative",children:[e.jsx("div",{onClick:R,children:e.jsx(k,{name:"Refresh All"})}),b.length>0&&e.jsx("div",{className:"w-10 ml-3",onClick:Y,children:e.jsx("img",{src:"/delete.png",alt:"",className:"w-5 h-5"})})]})}),e.jsxs("div",{className:"text-xs flex gap-5",children:[e.jsx("div",{children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(k,{name:`${N!==null?N:"Kategori"}`,className:"bg-opacity-10 bg-white/50"})}),e.jsxs(c.Content,{children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>z(null),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3 cursor-pointer"})}),e.jsx("div",{className:`${j.length>20?"h-[600px] overflow-auto":""}`,children:j.map((s,t)=>e.jsx("div",{className:"p-2 px-5 cursor-pointer",onClick:()=>z(s),children:e.jsx("p",{children:s})},t))})]})]})}),e.jsx("div",{children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(k,{name:`${P!==null?P:"Tahun"}`,className:"bg-opacity-10 bg-white/50"})}),e.jsxs(c.Content,{children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>S(null),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3 cursor-pointer"})}),e.jsx("div",{className:`${f.length>20?"h-[600px] overflow-auto":""}`,children:f.map((s,t)=>e.jsx("div",{className:"p-2 px-5 cursor-pointer",onClick:()=>S(s),children:e.jsx("p",{children:s})},t))})]})]})}),e.jsx("div",{children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(k,{name:`${p!==null?p:"Penerbit"}`,className:"bg-opacity-10 bg-white/50"})}),e.jsxs(c.Content,{children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>w(null),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3 cursor-pointer"})}),e.jsx("div",{className:`${r.length>20?"h-[600px] overflow-auto":""}`,children:r.map((s,t)=>e.jsx("div",{className:"p-2 px-5 cursor-pointer",onClick:()=>w(s),children:e.jsx("p",{children:s})},t))})]})]})}),e.jsx("div",{children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(k,{name:`${h!==null?h:"Edisi"}`,className:"bg-opacity-10 bg-white/50"})}),e.jsxs(c.Content,{children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>v(null),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3 cursor-pointer"})}),e.jsx("div",{className:`${o.length>20?"h-[600px] overflow-auto":""}`,children:o.map((s,t)=>e.jsx("div",{className:"p-2 px-5 cursor-pointer",onClick:()=>v(s),children:e.jsx("p",{children:s})},t))})]})]})}),e.jsx("div",{children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(k,{name:"Download",className:"bg-blue-50"})}),e.jsx(c.Content,{children:e.jsxs("div",{className:"flex flex-col gap-3 p-3 justify-start text-xs",children:[e.jsx(ee,{elementId:M}),e.jsx(Q,{pdfRef:m,fileName:"Daftar Buku"})]})})]})})]})]}),T().length===0&&e.jsx("p",{className:"text-red-500 text-center mb-5 text-xs",children:"Data tidak ditemukan, tidak ada data dengan nama tersebut"}),e.jsxs("div",{className:"flex flex-col md:flex-row",children:[e.jsxs("table",{ref:m,className:"absolute mt-0 table-auto w-full shadow-lg rounded-lg p-5",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm",children:"No"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Nama Buku"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Kategori"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Penerbit"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Tahun"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Edisi"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Edit"})]})}),e.jsx("tbody",{className:"relative text-sm",children:T().map((s,t)=>e.jsxs("tr",{className:`border-t ${$(s.id)?"bg-blue-100":""}`,children:[e.jsx("td",{className:"border-r px-3 py-2",children:t+1}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.caption}),e.jsx("td",{className:"border-r border-l py-1 px-3 capitalize leading-6",children:s.kategori}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.penerbit}),e.jsx("td",{className:"border-r border-l py-1 px-3 capitalize leading-6",children:s.tahun}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.edisi}),e.jsx("td",{className:"relative group border-r py-1 px-3 capitalize text-center hover:bg-blue-50 cursor-pointer",onClick:()=>q(s.id),children:e.jsx("button",{children:e.jsx("img",{src:"/edit.png",alt:"",className:"w-3 h-3"})})})]},t))})]}),e.jsxs("table",{id:M,className:"hidden mt-10 md:mt-0 table-auto w-full shadow-lg rounded-lg p-5 bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm",children:"No"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Nama Buku"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-56",children:"Kategori"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Penerbit"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Tahun"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Edisi"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Deskripsi"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Cover"})]})}),e.jsx("tbody",{className:"relative text-sm",children:l.map((s,t)=>e.jsxs("tr",{className:`h-10 border-t ${$(s.id)?"bg-blue-100":""}`,children:[e.jsx("td",{className:"border-r px-3 py-2",children:t+1}),e.jsx("td",{className:"border-r py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.caption}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.kategori}),e.jsx("td",{className:"border-r py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.penerbit}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.tahun}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.edisi}),e.jsx("td",{className:"border-r py-1 px-3 capitalize",children:s.desc}),e.jsx("td",{className:"border-r py-1 px-3 capitalize",children:s.imageUrl})]},t))})]}),e.jsxs("table",{className:"relative mt-10 md:mt-0 table-auto w-full shadow-lg rounded-lg p-5 bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"border-r px-2 md:px-3 py-2 font-bold rounded-tl text-start text-blue-500",children:e.jsx("input",{type:"checkbox",className:"rounded outline-0",onChange:V})}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Nama Buku"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Kategori"}),e.jsx("th",{className:"px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Penerbit"}),e.jsx("th",{className:"border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Tahun"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96",children:"Edisi"}),e.jsx("th",{className:"border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20",children:"Edit"})]})}),e.jsx("tbody",{className:"relative text-sm",children:T().map((s,t)=>e.jsxs("tr",{className:`h-10 border-t ${$(s.id)|u===s.id?"bg-blue-100":""}`,children:[e.jsx("td",{className:"border-r px-3 py-2",children:e.jsx("input",{type:"checkbox",id:`select-${s.id}`,className:"rounded outline-0",checked:$(s.id),onChange:a=>A(a,s.id)})}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.caption}),e.jsx("td",{className:"border-r border-l py-1 px-3 capitalize leading-6",children:s.kategori}),e.jsx("td",{className:"py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden",children:s.penerbit}),e.jsx("td",{className:"border-r border-l py-1 px-3 capitalize leading-6",children:s.tahun}),e.jsx("td",{className:"border-r py-1 px-3 capitalize leading-6",children:s.edisi}),e.jsx("td",{className:"relative group border-r py-1 px-3 capitalize text-center hover:bg-blue-50 cursor-pointer",onClick:()=>q(s.id),onMouseOver:()=>C(s.id),onMouseOut:()=>C(null),children:e.jsx("button",{children:e.jsx("img",{src:"/edit.png",alt:"",className:"w-3 h-3"})})})]},t))})]})]}),e.jsx("div",{}),U&&e.jsx(te,{children:e.jsx("div",{className:"",children:e.jsx(re,{id:B,handleClose:()=>E(!1)})})}),e.jsx("div",{className:"mb-20",children:e.jsx(se,{currentPage:D,totalPages:F,onPageChange:_,data:l})})]})})}function ge({auth:l,bukus:m,users:i,pinjamans:d}){const j=d.filter(B=>B.status_peminjaman==="meminjam"),f=d.filter(B=>B.status_peminjaman==="dikembalikan"),r=m.length,o=i.length,y=d.length,D=r/o,L=Math.round(D),b=Math.round(y/o),g=l.user.role;n.useEffect(()=>{g==="anggota"&&(window.location.href="/daftar-buku")});const[u,C]=n.useState(!1),[P,S]=n.useState(!1),N="/logo.png",z=()=>{C(!u),S(!1)},[p,w]=n.useState(!1),[h,v]=n.useState(!1),U=()=>{w(!p)},E=()=>{v(!h)};return e.jsx("div",{children:g==="admin"&&e.jsxs("div",{children:[e.jsx("div",{className:`transition-all duration-500 h-screen absolute z-50 backdrop-blur-md bg-opacity-10 bg-white/30 ${p?"w-[300px]":"w-0"}`,children:e.jsxs("div",{className:`transition-all duration-200 p-5 ${p?"block":"hidden"}`,children:[e.jsx("div",{className:"flex justify-end cursor-pointer",onClick:()=>w(!1),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3"})}),e.jsx(Z,{id:l.user.id})]})}),e.jsx("div",{className:`transition-all duration-500 h-screen absolute z-50 bg-white ${h?"w-[300px]":"w-0"}`,children:e.jsxs("div",{className:`transition-all duration-200 p-5 ${h?"block":"hidden"}`,children:[e.jsx("div",{className:"flex justify-end cursor-pointer",onClick:()=>v(!1),children:e.jsx("img",{src:"/close.png",alt:"",className:"w-3 h-3"})}),e.jsx(W,{id:l.user.id})]})}),e.jsx(J,{title:"Daftar Buku"}),e.jsx(X,{profile:I+l.user.foto_profil,logo:N,handleMenu:z,showIcon:!u,auth:l.user.nama,handleSetting:U,handleBookmark:E}),e.jsx("div",{className:"absolute w-20 overflow-hidden",children:e.jsx(O,{})}),e.jsxs("div",{className:`absolute transition-all duration-500 w-[300px] z-50 backdrop-blur-sm bg-white/75 h-screen ${u?"ml-0":"-ml-96"}`,children:[e.jsx("button",{onClick:()=>C(!u),children:e.jsx("img",{src:"/close.png",alt:"",className:`transition-all duration-1000 w-5 h-5 relative top-4 left-64 ${u?"rotate-0":"rotate-90"}`})}),e.jsx("div",{className:"-mt-7",children:e.jsx(O,{viewicon:!0,bukus:m.length,pinjamans:d.length,bukuDikembalikan:f.length,bukuDipinjam:j.length,users:i.length,ratio:L,probabilitas:b})})]}),e.jsx("div",{children:e.jsxs("div",{className:"w-full h-screen",children:[e.jsx("img",{src:"/footer.jpg",alt:"",className:"w-full h-screen object-cover"}),e.jsx("div",{className:"inset-0 absolute top-20 left-0 ml-20 p-5 bg-opacity-10 bg-white/75 rounded-lg",children:e.jsx(ae,{data:m})})]})})]})})}export{ge as default};
