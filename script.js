function myFunction() {
    var x = document.getElementById("menubar");
    var width = screen.width;
    if ((width<=720) && (x.style.display === "block")) {
      x.style.display = "none";
    } else if(width>=720){
      x.style.display = "flex";
    }
    else{
      x.style.display="block";
    }
  }

  $(document).ready(function(){
    $("#menubar li a").click(function(){
        $("#menubar li a").removeClass('active');
        $(this).toggleClass('active');
    });
    $("#logo").click(function(){
        $("#menubar li a").removeClass('active');
        $("#topmenu").toggleClass('active');
    });
    $("#top span").click(function(){
        $("#menubar li a").removeClass('active');
        $("#topmenu").toggleClass('active');
    });
});

$(document).ready(function(){
    $("#edit span").click(function(){
        $("#to-edit").toggleClass('hide');
    });
});

$(document).ready(function() {
    var isImage1 = true;
    $("#img1").click(function() {
        var imageUrl =
"https://cdn.pixabay.com/photo/2016/06/16/13/00/rain-stoppers-1461288_1280.jpg";
        var imageUrl1 = "Assets/background_hungry.jpg";
        if(isImage1){
            $("#background span").css("background-image", "url(" + imageUrl + ")");
            $("#img1").css("background-image", "url(" + imageUrl1 + ")");
            isImage1 = false;
        }
        else{
            $("#background span").css("background-image", "url(" + imageUrl1 + ")");
            $("#img1").css("background-image", "url(" + imageUrl + ")");
            isImage1 = true;
        }
    });

    $("#img2").click(function() {
        var imageUrl = "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg";
        var imageUrl1 = "Assets/background_hungry.jpg";
        if(isImage1){
            $("#background span").css("background-image", "url(" + imageUrl + ")");
            $("#img2").css("background-image", "url(" + imageUrl1 + ")");
            isImage1 = false;
        }
        else{
            $("#background span").css("background-image", "url(" + imageUrl1 + ")");
            $("#img2").css("background-image", "url(" + imageUrl + ")");
            isImage1 = true;
        }
    });

    $("#img3").click(function() {
        var imageUrl = "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg";
        var imageUrl1 = "Assets/background_hungry.jpg";
        if(isImage1){
            $("#background span").css("background-image", "url(" + imageUrl + ")");
            $("#img3").css("background-image", "url(" + imageUrl1 + ")");
            isImage1 = false;
        }
        else{
            $("#background span").css("background-image", "url(" + imageUrl1 + ")");
            $("#img3").css("background-image", "url(" + imageUrl + ")");
            isImage1 = true;
        }
    });

    $("#img4").click(function() {
        var imageUrl = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg";
        var imageUrl1 = "Assets/background_hungry.jpg";
        if(isImage1){
            $("#background span").css("background-image", "url(" + imageUrl + ")");
            $("#img4").css("background-image", "url(" + imageUrl1 + ")");
            isImage1 = false;
        }
        else{
            $("#background span").css("background-image", "url(" + imageUrl1 + ")");
            $("#img4").css("background-image", "url(" + imageUrl + ")");
            isImage1 = true;
        }
    });
});

window.addEventListener("scroll", function(){
    const scrollPosition = this.window.scrollY;
    const threshold = 170;

    const menuItems = document.querySelectorAll('#menubar li a');
    menuItems.forEach(function(menuItem){
        const section = document.querySelector(menuItem.getAttribute('href'));
        if(section.offsetTop <= scrollPosition+threshold &&
            section.offsetTop + section.offsetHeight > scrollPosition+threshold){
                menuItem.classList.add('active');
            }else{
                menuItem.classList.remove('active');
            }
    });
})


