requirejs.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"rg":"log_reg"
	}
})
requirejs(["jquery","rg"],function($,rg){
	$("form").submit(function(){
		if(flagName&&flagPas&&flagSpas&&flagTel){
			return true;
		}else{
			return false;
		}
	})
	var flagName=null;
	$("#rname").blur(function(){
		var strName=$(this).val();
		if(rg.checkName(strName)){
			$("#n").html("用户名可用");
			flagName=true;
		}else{
			$("#n").html("请输入2-10个字母、数字或下划线");
			flagName=false;
		}
	})
	var flagPas=null;
	$("#rpas").blur(function(){
		var strPas=$(this).val();
		if(rg.checkPas(strPas)){
			$("#p").html("密码可用");
			flagPas=true;
		}else{
			$("#p").html("请输入8-16位字符");
			flagPas=false;
		}
	})
	var flagSpas=null;
	$("#rRepas").blur(function(){
		var strSpas=$(this).val();
		var strPas=$("#rpas").val();
		if(strSpas==null){
			$("#sp").html("请确认密码");
			flagSpas=false;
		}else if(rg.checkSpas(strPas,strSpas)){
			$("#sp").html("密码正确");
			flagSpas=true;
		}else{
			$("#sp").html("两次密码不一致，请重新输入");
			flagSpas=false;
		}
	})
	var flagTel=null;
	$("#rtel").blur(function(){
		var strTel=$(this).val();
		if(rg.checkTel(strTel)){
			$("#t").html("号码可用");
			flagTel=true;
		}else{
			$("#t").html("请输入长度为11以1开头3,5,7,8,9为第二位的号码");
			flagName=false;
		}
	})
})
