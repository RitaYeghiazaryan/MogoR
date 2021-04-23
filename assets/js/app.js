$(function(){
  var header=$("header")
  var introH=$("#intro").innerHeight();
  var scrollOffSet=$(window).scrollTop();
//  Fixed Header 
    checkScroll(scrollOffSet)

    $(window).on("scroll", function(){
        scrollOffSet=$(this).scrollTop();
      checkScroll(scrollOffSet)

      
    });
    function checkScroll(scrollOffSet){
         if(scrollOffSet >=introH){
            header.addClass("fixed")
        }else{
            header.removeClass("fixed")

        }
    }
    // Smooth scroll
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        var $this=$(this)
        var blockId=$this.data('scroll')
        var blockOffSet=  $(blockId).offset().top;

        $("#nav a").removeClass("active")
        $this.addClass("active")
        $("#nav").removeClass("active")
       
     
        
       $("html,body").animate({
           scrollTop:blockOffSet
       },500);
    });

    // Menu nav toggle
    $("#nav__toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
  });

//   Collapse
$("[data-collapse]").on('click', function(event){
    event.preventDefault();

    var $this=$(this)
    var blockId=$this.data('collapse')

    $this.toggleClass("active")
});

// Slider
$("[data-slider]").slick({
    infinite: true,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1
});


});