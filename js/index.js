$(document).ready(function(){
	//加载数据
	get_data(function(data){
		var posts = convert2post(data);
		$(posts).each(function(index,qb_post){
			var cell = QBCell(qb_post);
			$(".qb-cell-container").append(cell);
		});
	});
})
function convert2post(posts)
{
	var qb_posts = []
	$(posts).each(function(index,server_post_data){
		var qb_post = new QBPost(server_post_data);
		qb_posts.push(qb_post);
	});
	return qb_posts;
}
function get_data(completetion){
$.ajax({
	url:encodeURI("http://52.43.221.136/api/v1.0/posts/"),
	type:"POST",
	// data:JSON.stringify(data),
	// contentType:"application/json",
	dataType:"json",
	success:function(data,textStatus,jqXHR){
		completetion(data.data.posts);
		},
	complete:function(XMLHttpRequest,textStatus){
		// console.log("dhgidhgi");
		// alert("complete");
		},
	error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.status);
        // alert(thrownError);
	    }
 });
}

