	
for(i = 1; i <= 10; i++)
{
	$(document).ready(function(){
			$("#book"+i+"content").load("../pages/book"+i+".html");
	})
}

function changepage(pageNumber)
{
	$change("#book"+pageNumber);
}