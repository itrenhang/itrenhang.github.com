function json2url(json){
	var arr=[];
	for(var i in json){
		arr.push(i+'='+json[i]);
	}
	return arr.join('&');
}
function jsonp(json){
	json=json||{};
	if(!json.url)return;
	json.data=json.data||{};
	json.cbName=json.cbName||'cb';
	var fnName='jsonp'+Math.random();
	fnName=fnName.replace('.','');
	window[fnName]=function(result){
		json.success&&json.success(result);
		oHead.removeChild(oS);
		window[fnName]=null;
	};
	var oHead=document.getElementsByTagName('head')[0];
	var oS=document.createElement('script');
	json.data[json.cbName]=fnName;
	oS.src=json.url+'?'+json2url(json.data);
	oHead.appendChild(oS);
	
}