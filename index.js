(function(){

	//[[title#chapter1]] ==> {% post_link '' %}
    hexo.extend.filter.register('before_post_render', function (data) {
		let reg = /\[\[(.+?)\]\]/g;
		let obsLinkArr = data.content.match(reg);
		let linkArr = [];
		if(obsLinkArr == null){
			return data;
		}
		
		for(let i=0;i < obsLinkArr.length;i++){
			if(!obsLinkArr[i].startsWith("[[")){
				continue;
			}
			let obsLinks = obsLinkArr[i].split("/");
			let link = obsLinks[obsLinks.length - 1].replace("]]", "").replace("[[", "");
			data.content = data.content.replace(obsLinkArr[i], "{% post_link '" + link + "' %}");
			
		}
        return data;
    });
})();
