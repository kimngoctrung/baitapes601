document.getElementById('btnTinhLuong').onclick = (event) =>{
   let arrinput = document.querySelectorAll('#form input, #form select');
   let nhanVien = {};
   for (let i = 0 ; i < arrinput.length; i++ ){
       let taginput = arrinput[i];
       let {id,value} = taginput;
    //    console.log(id,value);
       nhanVien = {...nhanVien,[id]:value};
   }
   let contentTR = ``;
contentTR += `
<h3 class="text-white">Thông tin nhân viên</h3>
<p class="text-warning">Mã nhân viên: ${nhanVien.maNV}</p>
<p class="text-warning">Tên nhân viên: ${nhanVien.tenNV}</p>
<p class="text-warning">Chức vụ: ${nhanVien.chucVu} </p>
<p class="text-warning">Tổng lương: ${
  nhanVien.hsLuong * nhanVien.luongCB
}</p>`

document.getElementById("showInfo").innerHTML = contentTR;

}