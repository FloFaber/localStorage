window.storage: function(name, value){
	if(typeof name !== "undefined" && typeof value !== "undefined"){
		localStorage.setItem(name, (is_array(value) || is_object(value) ? JSON.stringify(value) : value));return true;
	}else if(typeof name !== "undefined" && !typeof value !== "undefined"){
		if(localStorage.getItem(name)){try{return JSON.parse(localStorage.getItem(name))}catch(e){return localStorage.getItem(name)}}else{return false}
	}
}
