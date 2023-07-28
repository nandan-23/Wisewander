
<script>
// Your existing JavaScript code for handling the form steps
var $firstButton = $(".first"),
  $secondButton = $(".second"),
  $input = $("input"),
  $name = $(".name"),
  $more = $(".more"),
  $yourname = $(".yourname"),
  $reset = $(".reset"),
  $ctr = $(".container");

// Add the event handlers and form progression logic here
$firstButton.on("click", function(e){
  $(this).text("Saving...").delay(900).queue(function(){
    $ctr.addClass("center slider-two-active").removeClass("full slider-one-active");
  });
  e.preventDefault();
});

$secondButton.on("click", function(e){
  $(this).text("Saving...").delay(900).queue(function(){
    $ctr.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
    var name = $name.val();
    if(name == "") {
      $yourname.html("Anonymous!");
    }
    else { $yourname.html(name + "!"); }
  });
  e.preventDefault();
});

// balapaCop function to add attribution
balapaCop("Step by Step Form", "#999");

function balapaCop(title, theFontColor) {
  var style = "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,700);.attribution{position:fixed;right:15px;bottom:15px;font-family:Quicksand}.attribution span{line-height:30px;color:" + theFontColor +";margin-right:7.5px;float:left}.attribution span a{font-weight:400;text-decoration:none;color:#ea4c89}.attribution .balapa{width:24px;height:24px;display:block;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/balapa.jpg);background-size:cover;border-radius:50%;border:3px solid rgba(0,0,0,.25);float:right}";
  
  var tag = "<span>" + title + " by</span><a class='balapa' href='http://balap.us' target='_blank'></a>";
  
  var genTag, genStyle;
  
  genStyle = document.createElement("style");
  genStyle.innerHTML = style;
  
  genTag = document.createElement("div");
  genTag.className = "attribution";
  genTag.innerHTML = tag;
  
  document.body.appendChild(genStyle);
  document.body.appendChild(genTag);
}
</script>