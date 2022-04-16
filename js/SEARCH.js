var input = document.getElementById("txtSearch");
function myFunction() {
    var filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    if (!filter) {
      ul.style.display = "none";
    }else{   
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              ul.style.display = "block";
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
              li[i].style.position ="absolute";

          }
      }
    }
}
input.addEventListener("keyup", myFunction);
function myClick(){
            
  if(confirm("Xác nhận mua mặt hàng này")){
        alert("Cảm ơn bạn tin tưởng sản phẩm của chúng tôi");
  }else{
        alert("Mời bạn quay lại tham khảo sản phẩm khác");	
  }
}