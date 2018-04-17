($ => {
  const toTop = $('#sidebar').height() - $(window).height() + 60;
  // Caption
  $('.article-entry').each(function articleEntry(i) {
    $(this)
      .find('img')
      .each(function fancybox() {
        if (
          $(this)
            .parent()
            .hasClass('fancybox')
        ) {
          return;
        }
        const { alt } = this;
        if (alt) {
          $(this).after(`<span class="caption">${alt}</span>`);
        }

        $(this).wrap(`<a href="${this.src}" title="${alt}" class="fancybox"></a>`);
      });

    $(this)
      .find('.fancybox')
      .each(function article() {
        $(this).attr('rel', `article${i}`);
      });
  });
  if ($.fancybox) {
    $('.fancybox').fancybox();
  }

  // Profile card
  $(document)
    .on('click', () => {
      $('#profile').removeClass('card');
    })
    .on('click', '#profile-anchor', e => {
      e.stopPropagation();
      $('#profile').toggleClass('card');
    })
    .on('click', '.profile-inner', e => {
      e.stopPropagation();
    });

  // To Top
  if ($('#sidebar').length) {
    $(document)
      .on('scroll', function scroll() {
        if ($(document).width() >= 800) {
          if ($(this).scrollTop() > toTop && $(this).scrollTop() > 0) {
            $('#toTop').fadeIn();
            $('#toTop').css('left', $('#sidebar').offset().left);
          } else {
            $('#toTop').fadeOut();
          }
        } else {
          $('#toTop').fadeIn();
          $('#toTop').css('right', 20);
        }
      })
      .on('click', '#toTop', () => {
        $('body, html').animate({ scrollTop: 0 }, 600);
      });
  }
})(jQuery);
