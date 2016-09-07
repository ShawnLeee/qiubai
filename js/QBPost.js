function QBPost(post){
	user = post.user;

	this.user_name = user.user_name;
	this.user_img = user.avatar;

	this.post_text = post.post_text;
	this.like_count = post.like_count;
	this.comment_count = post.comment_count;
}

function QBCell(qb_post)
{
	var cell = $("<div id=\"qb-cell\"><div class=\"qb-user clearfix\"> <a class=\"user-img\" href=\"#\"> <img src=\"\"> </a> <a class=\"user_name\" href=\"#\"> <h2></h2> </a> </div> <div class=\"qb-content\"> <p> </p> </div> <div class=\"qb-stats\"> <span class=\"stats-vote\"> <i class=\"number\">8888</i> 好笑 </span> <span class=\"stats-comment\"> <span class=\"dash\"> . </span> <a href=\"\"> <i class=\"number\">444</i> 评论 </a> </span></div><div class=\"action-bar clearfix\"> <ul class=\"clearfix\"> <li class=\"up\"> <a href=\"\"> <i></i> </a> </li> <li class=\"down\"> <a href=\"\"> <i></i> </a> </li> <li class=\"comment\"> <a href=\"\"> <i></i> </a> </li> </ul> </div> <div class=\"share-bar clearfix\"> <a class=\"share-wechat\"href=\"\"></a> <a class=\"share-qq\"href=\"\"></a> <a class=\"share-qzone\"href=\"\"></a> <a class=\"share-weibo\"href=\"\"></a> </div> <div class=\"clearfix\"></div></div>");
	$(cell).find(".user-img").find("img").attr("src",qb_post.user_img);
	$(cell).find(".user_name").find("h2").text(qb_post.user_name);
	$(cell).find(".qb-content").find("p").text(qb_post.post_text);
	$(cell).find(".stats-vote").find("i").text(qb_post.like_count);
	$(cell).find(".stats-comment").find("i").text(qb_post.comment_count);
	return cell;
}
