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
"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";
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
        var imageUrl = "https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg";
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
        var imageUrl = "https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg";
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
        var imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
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


