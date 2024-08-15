import{r as o,j as a,a as d}from"./app-CMY_fCVd.js";import{u as p}from"./Url-CW4JorIc.js";import{u as c}from"./index-C8ZNB1VX.js";import"./index-DEXsKbtK.js";function h({id:l,handleClose:r}){const m=e=>{s("status_peminjaman",e.target.value)},{data:t,setData:s,put:i}=c({nama_peminjam:"",kontak_peminjam:"",nama_buku:"",tanggal_pinjam:"",tanggal_pengembalian:"",status_peminjaman:"",keterangan:"",user_id:"",buku_id:"",foto_buku:""});o.useEffect(()=>{(async()=>{try{const n=await d.get(`/admin/daftarpinjaman/${l}`);s({nama_peminjam:n.data.nama_peminjam,kontak_peminjam:n.data.kontak_peminjam,nama_buku:n.data.nama_buku,tanggal_pinjam:n.data.tanggal_pinjam,tanggal_pengembalian:n.data.tanggal_pengembalian,status_peminjaman:n.data.status_peminjaman,keterangan:n.data.keterangan,user_id:n.data.user_id,buku_id:n.data.buku_id,foto_buku:n.data.buku.imageUrl})}catch(n){console.error(n)}})()},[l]);const u=e=>{e.preventDefault(),i(`/admin/daftarpinjaman-update/${l}`)};return a.jsxs("div",{className:"bg-white p-5 rounded-lg w-[650px]",children:[a.jsx("div",{className:"flex justify-end",onClick:r,children:a.jsx("img",{src:"/close.png",alt:"",className:"w-5 h-5 cursor-pointer"})}),a.jsx("form",{action:"",onSubmit:u,children:a.jsxs("div",{className:"flex gap-8",children:[a.jsx("div",{className:"w-full h-[450px]",children:a.jsx("img",{src:t.foto_buku==="null"|t.foto_buku===null?"/default-book.jpg":p+t.foto_buku,alt:"",className:"w-full h-full object-cover brightness-95 rounded-lg"})}),a.jsxs("div",{className:"w-full text-xs",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Nama peminjam"}),a.jsx("input",{type:"text",name:"nama_peminjam",className:"w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0 capitalize",value:t.nama_peminjam,onChange:e=>s("nama_peminjam",e.target.value),required:!0})]}),a.jsxs("div",{children:[a.jsx("p",{className:"mt-3 font-bold",children:"Nama Buku"}),a.jsx("input",{type:"text",name:"nama_buku",className:"w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:t.nama_buku,onChange:e=>s("nama_buku",e.target.value),required:!0})]}),a.jsxs("div",{children:[a.jsx("p",{className:"mt-3 font-bold",children:"Tanggal pinjam"}),a.jsx("input",{type:"text",name:"tanggal_pinjam",className:"w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:t.tanggal_pinjam,onChange:e=>s("tanggal_pinjam",e.target.value),required:!0})]}),a.jsxs("div",{children:[a.jsx("p",{className:"mt-3 font-bold",children:"Tanggal pengembalian"}),a.jsx("input",{type:"text",name:"tanggal_pengembalian",className:"w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:t.tanggal_pengembalian,onChange:e=>s("tanggal_pengembalian",e.target.value),required:!0})]}),a.jsxs("div",{children:[a.jsx("p",{className:"mt-3 font-bold",children:"Status peminjaman"}),a.jsxs("div",{className:"flex gap-3 mt-3",children:[a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"radio",name:"status_peminjaman",value:"meminjam",checked:t.status_peminjaman==="meminjam",onChange:m,className:"cursor-pointer"}),a.jsx("span",{className:"ml-2",children:"Meminjam"})]}),a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"radio",name:"status_peminjaman",value:"dikembalikan",checked:t.status_peminjaman==="dikembalikan",onChange:m,className:"cursor-pointer"}),a.jsx("span",{className:"ml-2",children:"Dikembalikan"})]})]})]}),a.jsx("p",{className:"mt-3 font-bold",children:"Keterangan"}),a.jsx("textarea",{name:"keterangan",className:"text-xs w-full mt-3 bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0",value:t.keterangan===null?"":t.keterangan,onChange:e=>s("keterangan",e.target.value),required:!0}),a.jsx("button",{type:"submit",className:"bg-blue-500 text-white mt-3 rounded-md text-xs p-2 w-full",children:"Konfirmasi perubahan"})]})]})})]})}export{h as default};
