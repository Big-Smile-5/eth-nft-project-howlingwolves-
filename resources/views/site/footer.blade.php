<!-- footer section code  -->
<footer class="footer">
  <div class="container-fluid">
    <div class="ftr_inr">
      <a class="logo_ftr" href="index.html">Bite</a>
      <div class="ftr_icon">
        <a href="#0"><img src="{{url('assets/img/social1.png')}}" class="img-fluid" alt=""></a>
        <a href="#0"><img src="{{url('assets/img/twitter.png')}}" class="img-fluid" alt="twitter"></a>
      </div>
      <p>© 2021 Bite .All Rights Reserved</p>
    </div>
  </div>
</footer>
<!-- footer section code  end -->

<!-- Bootstrap Bundle with Popper -->

<script type="text/javascript" src="{{url('assets/js/site_common.min.js')}}"></script>
<!-- scroll spy code  -->
<script>
  $(document).ready(function() {

    var sectionIds = $('a.nav-link');

    $(document).scroll(function() {
      sectionIds.each(function() {
        var container = $(this).attr('href');
        var containerOffset = $(container).offset().top;
        var containerHeight = $(container).outerHeight();
        var containerBottom = containerOffset + containerHeight;
        var scrollPosition = $(document).scrollTop();

        if (scrollPosition < containerBottom - 370 && scrollPosition >= containerOffset - 370) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }


      });
    });
  });
</script>

<!-- header animation on scroll  -->
<script type="text/javascript">
  /*-- Scroll Up/Down add class --*/
  var lastScrollTop = 0;
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('#header').addClass('box-hover');
      } else {
        $('#header').removeClass('box-hover');
      }
    });
  });
</script>

<!-- nft slider code      -->
<script type="text/javascript">
  $(document).on('ready', function() {

    $('.center').slick({
      centerMode: true,
      arrows: false,
      centerPadding: '180px',
      slidesToShow: 4,
      responsive: [{
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 2
          }
        },

        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
          }
        }
      ]
    });

  });
</script>


<!-- code for accordion  -->
<!-- add class on main div  -->
<script>
  //Click event handler for nav-items
  $('.accordion-item').on('click', function() {
    //Remove any previous active classes
    $('.accordion-item').removeClass('active');
    //Add active class to the clicked item
    $(this).addClass('active');
  });

  $(document).ready(function() {
    $(".content_readmore").hide();
    $(".readmore_btn").on("click", function(event) {
      event.preventDefault();
      var txt = $(".content_readmore").is(':visible') ? 'Read More' : 'Read Less';
      $(".content_readmore").show();
      $(".readmore_btn span").text(txt).addClass('readmore_btn_color');
      $(".readmore_btn span").removeClass('readmore_btn_color_hover');
      if (txt == 'Read More') {
        $(".content_readmore").hide();
      }
      $(this).next('.content_readmore').slideToggle(200);
      $(".site_btn span").hover(function() {
        $(this).removeClass('readmore_btn_color');
        $(this).addClass('readmore_btn_color_hover');
      });
    });
  });
</script>


</body>

</html>