import{j as e}from"./app-CMY_fCVd.js";import{u as m}from"./index-C8ZNB1VX.js";import{u as c}from"./Url-CW4JorIc.js";import"./index-DEXsKbtK.js";function g({buku:s}){const{data:a,setData:i,post:r,progress:t}=m({_method:"PUT",imageUrl:null}),o=l=>{i("imageUrl",l.target.files[0])},n=l=>{l.preventDefault(),r(`/admin/buku-foto/${s.id}`,{forceFormData:!0})};return e.jsxs("div",{className:"w-full h-screen",children:[e.jsx("img",{src:"/footer.jpg",alt:"",className:"w-full h-screen object-cover"}),e.jsx("div",{className:"inset-0 absolute left-0 p-5 bg-opacity-10 bg-white/75",children:e.jsxs("div",{className:"bg-white p-5 rounded-lg shadow-lg w-96 mx-auto",children:[e.jsx("a",{href:"/admin/buku",children:e.jsx("div",{className:"flex justify-end mb-5",children:e.jsx("img",{src:"/close.png",alt:"",className:"w-5 h-5"})})}),e.jsxs("form",{onSubmit:n,encType:"multipart/form-data",children:[e.jsx("div",{className:"mb-4",children:e.jsx("img",{src:a.imageUrl?URL.createObjectURL(a.imageUrl):c+s.imageUrl,alt:"Current Book",className:"w-full h-64 object-cover rounded-lg"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"file",name:"foto_profil",accept:"image/*",className:`block w-full text-sm text-gray-500
                                   file:mr-4 file:py-2 file:px-4
                                   file:rounded-full file:border-0
                                   file:text-sm file:font-semibold
                                   file:bg-blue-50 file:text-blue-700
                                   hover:file:bg-blue-100`,onChange:o})}),e.jsx("div",{className:"text-right",children:e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-md text-sm",children:"Update Foto"})}),t&&e.jsx("div",{className:"w-full bg-gray-200 mt-4",children:e.jsxs("div",{className:"bg-blue-500 text-xs leading-none py-1 text-center text-white",style:{width:`${t.percentage}%`},children:[t.percentage,"%"]})})]})]})})]})}export{g as default};
