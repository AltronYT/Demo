var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "250px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};

function scrollpage() {		
	function f() 
	{
		window.scrollTo(0,i);
		if(status==0) {
   			i=i+40;
			if(i>=Height){	status=1; } 
		} else {
			i=i-40;
			if(i<=1){	status=0; }  // if you don't want continue scroll then remove this line
		}
	setTimeout( f, 0.01 );
	}f();
}
var Height=document.documentElement.scrollHeight;
var i=1,j=Height,status=0;
scrollpage();
</script>

$(document).ready(main);
