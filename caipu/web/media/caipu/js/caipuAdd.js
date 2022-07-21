$(function(){
	var ue = UE.getEditor('contents');
$("#return").on("click",function(){
	history.go(-1);
	});

 
var listrole=$.Params.create();
listrole.ajax(getIP()+"caipuleixing.action?list",function (data){
	if(data.success){
		var html="<option>请选择类型</option>";
		$.each(data.rows,function(i,val){
			html+="<option value='"+val.id+"'>"+val.a1+"</option>";
		})
		$("#a2").html(html);
	}
});

 
})

  

 function  addsstu(){
	 
 
 	var edit=$.Params.create();
 
	var a6 = $("#imgurl").val();
 	
	var ue = UE.getEditor('contents');
	var a7 = ue.getContent();  
	

 
	
  	var url=getIP()+"caipu.action?add";
  
 	edit.addParams("a1",$('#a1').val());

	edit.addParams("a6",a6);
	edit.addParams("a7",a7);
   
   		edit.ajax(url,function (data){
			if(data.success){
			alert("添加成功");
			window.location.href=getIP()+"media/caipu/caipuList.jsp";
			}
		else{
				
				alert('添加失败');
	}
	})
		 
  	/*
		       $.ajax({
                type: "post",
               url: url,
              data: {
                  a1:a1,
                  a2:a2,
                  a3:a3,
                  a4:a4
               },
                dataType: "json",
                success: function (dataMs) {
                   
              	alert(111);

               }
           }
          );
 
		*/
	}


   	


