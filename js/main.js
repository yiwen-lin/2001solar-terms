 // solar card - Click to show
 function myFunction() {
    document.getElementById("others-spring").style.display = "block";
    document.getElementById("others-summer").style.display = "block";
    document.getElementById("others-fall").style.display = "block";
    document.getElementById("others-winter").style.display = "block";
  }


  // header - Smooth scrolling using jQuery easing
  $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000);
        // return false;
      }
    }
  });

  // side Nav & background color
  var lastId,
	 seasonsY=$('#seasons').offset().top,
	 headerH=$('.header').outerHeight(true),
	 menuItems = $('#sideNav').find("a"),
	 scrollItems = menuItems.map(function(){
		 var item = $($(this).attr("href"));
		 if (item.length) { return item; }
	 });

    $(window).on('scroll',function(){
        var scrollDistance = $(this).scrollTop()+headerH,
            seasonsY=$('#seasons').offset().top;
        if (scrollDistance > (seasonsY-200)) {
            $('#sideNav').addClass('active');
        } else {
            $('#sideNav').removeClass('active');
        }
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < scrollDistance){
            return this;
        }
    });
        
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
        lastId = id;
            $('#seasons').removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
            $('#seasons').addClass('color-' + id);
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#"+id+"]").parent().addClass("active");
    }
    });