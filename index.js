// FIRST CONTAINER
$(document).ready(function(){
  $(".btn").on("click", function(){
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore);
  var yourName =  prompt("YOUR NAME");
  var crushName =  prompt("THE NAME OF YOUR CRUSH");

    // alert("Hello " + yourName + " and " + crushName + ", Your Love Chemistry is " + loveScore + "%")


   if (loveScore >= 70){
     $("p").text("Hello " + yourName + " and " + crushName + ", You guys are the greatest of all time😏 (" + loveScore + "%)")


   } else if (loveScore > 50 && loveScore < 70){
     $("p").text("Hello " + yourName + " and " + crushName + ", Your love chemistry is phenomenal, surely there is hope for you love birds 🤞, if one of you doesn't mess up 😈 (" + loveScore + "%)")


   } else{
     $("p").text("Hello " + yourName + " and " + crushName + ", Your love score is " + loveScore + "%. There's no hope for you two 😒, BETTER BREAK UP. I MEAN AM ");

   }


  });
});


// HOVER SECTION
$(document).ready(function(){
  $(".calculator").hover(function(){
    $(this).css("color", "white")
  }, function(){
    $(this).css("color", "black")
  })
})


$(document).ready(function(){
  $(".calculator").hover(function(){
    $(this).css("font-size", "52px")
  }, function(){
    $(this).css("font-size", "50px")
  })
});


$(document).ready(function(){
  $(".btn").hover(function(){
    $(".now").css("display", "block")
  }, function(){
    $(".now").css("display", "none")

  })
});



$(document).ready(function(){
  $(".btn").hover(function(){
    $(this).css("background-color", "purple")
  }, function(){
    $(this).css("background-color", "royalblue")

  })
});
