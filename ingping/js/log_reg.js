define(function(){
	return {
		checkName:function(strName){
			var re=/^\w{2,10}$/;
			if(re.test(strName)){
				return true;
			}else{
				return false;
			}
		},
		checkPas:function(strPas){
			var re=/^.{8,16}$/;
			if(re.test(strPas)){
				return true;
			}else{
				return false;
			}
		},
		checkSpas:function(oldPas,newPas){
			if(oldPas===newPas){
				return true;
			}else{
				return false;
			}
		},
		checkTel:function(strTel){
			var re=/^1[3|5|7|8|9][0-9]{9}$/;
			if(re.test(strTel)){
				return true;
			}else{
				return false;
			}
		}
	}
})