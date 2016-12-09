$(document).ready(function(){
	$('.channel-prview li').click(function(){
		var liId = $(this).attr('id');
		$(this).removeClass('inactive').siblings().addClass('inactive');
		$('.day-content').hide();

		$('#'+liId+'-content').fadeIn(1000);
	});



	$('#navbar li').click(function() {
    $(this).addClass('active').siblings('li').removeClass('active');
});
(function(){
  $('#series123').carousel({ interval: 2000 });
  $('#programs123').carousel({ interval: 2000 });
  $('#movies123').carousel({ interval: 2000 });

}());
(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());

function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        header = document.querySelector("header");
    if (distanceY > shrinkOn) {
      header.setAttribute("class","smaller");
    } else {
        header.removeAttribute("class");
    }
  });
}
window.onload = init();


});

