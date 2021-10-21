 // solar card - Click to show
 function myFunction(season, elm) {
    elm.style.display = "none";
    document.getElementById("others-"+season).style.display = "block";
  }


  // header - Smooth scrolling using jQuery easing
  $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
    //手機版 nav click 收合
    if($(window).innerWidth() <= 769) {
      $('.navbar-toggler').trigger('click');
      }
      
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
  var winH=$(window).outerHeight(true)

    menuItems.on('click',function(e){
      e.preventDefault();
      var seasonName=$(this).attr('href');
      var $target=$(seasonName);
      $('html,body').animate({ scrollTop: $target.offset().top + 1 }, 800);
      return false;
    });

    $(window).on('scroll',function(){
      var scrollDistance = $(this).scrollTop()+headerH,
          seasonsY=$('#seasons').offset().top,
          cerebrityY=$('#cerebrity').offset().top;
      if (scrollDistance > (seasonsY-200)&& (cerebrityY-scrollDistance)>winH-100) {
        $('#sideNav').addClass('active');
      } else {
        $('#sideNav').removeClass('active');
      }
      var cur = scrollItems.map(function(){
        if ($(this).offset().top <= scrollDistance + 60){
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