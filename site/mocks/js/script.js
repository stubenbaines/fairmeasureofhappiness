/* Author:

*/
$(document).ready(function() {
    anchor.init();
    // Copy the content from the item into the more details pane. 
    $('.show-details').click(function() {
        var id = $(this).attr('data-item');
        $('#more-details').html($('div[data-item='+id+']').html()); 
    });
   $(".show-details").colorbox({inline:true, width:"60%"});
});

anchor = {
    init : function()  {

        $("nav a").click(function () {   
            $("nav li").removeClass("active");
            $(this).closest("li").addClass("active");
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top- 80;
            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1300,"easeOutExpo", function(){
                
            } );
            return false;
        })
    }
}

