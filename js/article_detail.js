$(document).ready(function(){
	var article_id = $.getUrlVar("article_id");
	get_article_detail(article_id, function(data){
		setup_post(data.post);
		setup_comments(data.comments);
	});
})
function get_article_detail(article_id, completion)
{
	$.getJSON("http://127.0.0.1:5000/api/v1.0/article/",{article_id: article_id},function(data){
			completion(data.data);
	})
}
function setup_post(post)
{
	var qb_post = new QBPost(post);
	var cell = new QBCell(qb_post);
	$("title").text(qb_post.post_text);
	$("#article-block").append(cell);
}
function setup_comments(comments)
{
	var comment_count_text = "评论(" + comments.length + ")";
	$("#comments-num").text(comment_count_text);
	$(comments).each(function(index, comment){
		var cell = new CommentCell(comment);
		$(".comments-list").append(cell);
	})
}