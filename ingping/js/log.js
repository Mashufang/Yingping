requirejs.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"rg":"log_reg"
	}
})
requirejs(["jquery","rg"],function($,rg){
	$("form").submit(function(){
		if(flagName&&flagPas){
			return true;
		}else{
			return false;
		}
	})
	var flagName=null;
	$("#lname").blur(function(){
		var strName=$(this).val();
		if(rg.checkName(strName)){
			$("#ln").html("用户名可用");
			flagName=true;
		}else{
			$("#ln").html("请输入2-10个字母、数字或下划线");
			flagName=false;
		}
	})
	var flagPas=null;
	$("#lpas").blur(function(){
		var strPas=$(this).val();
		if(rg.checkPas(strPas)){
			$("#lp").html("密码可用");
			flagPas=true;
		}else{
			$("#lp").html("请输入8-16位字符");
			flagPas=false;
		}
	})
})
