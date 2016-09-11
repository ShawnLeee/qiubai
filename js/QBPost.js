$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});
function QBPost(post){
	user = post.user;

	this.post_id = post.post_id;
	this.user_name = user.user_name;
	this.user_img = user.avatar;

	this.post_text = post.post_text;
	this.like_count = post.like_count;
	this.comment_count = post.comment_count;
}

function QBCell(qb_post)
{
	var cell = $("<div id=\"qb-cell\"><div class=\"qb-user clearfix\"> <a class=\"user-img\" href=\"#\"> <img src=\"\"> </a> <a class=\"user_name\" href=\"#\"> <h2></h2> </a> </div> <div class=\"qb-content\"> <p> </p> </div> <div class=\"qb-stats\"> <span class=\"stats-vote\"> <i class=\"number\">8888</i> 好笑 </span> <span class=\"stats-comment\"> <span class=\"dash\"> . </span> <a href=\"\"> <i class=\"number\">444</i> 评论 </a> </span></div><div class=\"action-bar clearfix\"> <ul class=\"clearfix\"> <li class=\"up\"> <a href=\"javascript:;\"> <i></i> </a> </li> <li class=\"down\"> <a href=\"javascript:;\"> <i></i> </a> </li> <li class=\"comment\"> <a href=\"javascript:;\"> <i></i> </a> </li> </ul> </div> <div class=\"share-bar clearfix\"> <a class=\"share-wechat\"href=\"\"></a> <a class=\"share-qq\"href=\"\"></a> <a class=\"share-qzone\"href=\"\"></a> <a class=\"share-weibo\"href=\"\"></a> </div> <div class=\"clearfix\"></div></div>");
	$(cell).find(".user-img").find("img").attr("src",qb_post.user_img);
	$(cell).find(".user_name").find("h2").text(qb_post.user_name);
	$(cell).find(".qb-content").find("p").text(qb_post.post_text);
	$(cell).find(".stats-vote").find("i").text(qb_post.like_count);
	$(cell).find(".stats-comment").find("i").text(qb_post.comment_count);

	$(cell).find(".qb-content").find("p").click(function(){
		var detailurl =  "article_detail.html?article_id=" + qb_post.post_id;
		window.open(detailurl);
	});

	$(cell).find(".action-bar").find(".up").find("a").click(function(){
		like_post(qb_post.post_id, 1, function(status){
			if(status == 1)
			{
				$(cell).find(".stats-vote").find("i").text(qb_post.like_count+1);
			}
		});
	});

	$(cell).find(".action-bar").find(".down").find("a").click(function(){
		like_post(qb_post.post_id, -1, function(status){
			if(status == 1)
			{
				$(cell).find(".stats-vote").find("i").text(qb_post.like_count-1);
			}
		});
	});
	return cell;
}
function like_post(post_id, like_count,completion) 
{
	$.getJSON("http://52.43.221.136/api/v1.0/likeit/",{post_id: post_id,like: like_count},function(response){
			completion(response.status);
	})
}
function CommentCell(comment)
{
	var cell = $("<div class=\"comment-block clearfix\"> <div class=\"avatars\"><a href=\"#\"><img></a> </div> <div class=\"reply\"> <a href=\"\" class=\"userlogin\"></a> <span></span> </div> </div>");
	$(cell).find(".avatars").find("img").attr("src", comment.user.avatar);
	$(cell).find(".reply").find("a").text(comment.user.user_name);
	$(cell).find(".reply").find("span").text(comment.comment_text);

	return cell;
}
