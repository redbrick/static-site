$(document).ready(function(){
    $('#menu-buttons a').each(function(index) {
        if(this.href.trim() == window.location)
            $(this).addClass("active");
    });
});
