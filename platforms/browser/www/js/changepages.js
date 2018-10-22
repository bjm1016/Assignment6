	
//for(i = 1; i <= 10; i++)
//{
	//$(document).ready(function(){
			//$("#book"+i+"content").load("../pages/book"+i+".html");
		//("#book" + i + "content").load("../pages/test.html");
	//})
//}

function changepage(pageNumber)
{
	document.write("here");
	$("book" + pageNumber).load("../test.html book" + pageNumber);
	//$change("#book"+pageNumber);
}