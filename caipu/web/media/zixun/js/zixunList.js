var sel=$.Params.create();
$(function(){

    getData();
    
    
   	$("#addbutton").on("click",function(){
   		
   		window.location.href=getIP()+"media/zixun/zixunAdd.jsp";
   	})
   	
   
     /**
     * 查询
     */
    $("#searchList").on("click",function(){
  
    	var a1=$("#a1").val();
    	if(a1!=null || a1!="")
    	{
    		sel.addParams("a1",a1);
    	}
    	getData();
    })
    
     
    /**
     * 删除
     */
    $("#delbutton").on("click",function(){
    	var params=getcheckdata();
    	if(params == ""){
    		alert("请选择记录");
    		return false;
    	}
    	if(confirm("确定要删除吗？")){
    		var del=$.Params.create();
        	del.addParams("id",params);
        	del.ajax(getIP()+"zixun.action?delMore",function(data){
        		if(data.success){
        			$("#queryCheckbox").removeAttr("checked");
        			$("#queryCheckbox").parent().removeClass("checked");
        			getData();
        		}
        	})
    	}
    })
    //获取活动数据
    function getData(){  
   		 
	   	sel.addParams("page",0);
	   	sel.addParams("rows",rows);
	   	
	   	if(userName=='管理员')//管理员看所有订单
			{
			
			}
		else
			{
			sel.addParams("a4",usersId);	//普通用户看自己的订单
			}
		
	   	
	   	
	   	getPageData(sel,getIP()+"zixun.action?list",function(data){
	   		
	   		if(data.success){
	   			var len=data.total;
	   			 
	   			 
		   		var html="";
				if(len >0){
					$.each(data.rows,function(i,val){
				 

						var ddm="<a onclick='update(\""+val.id+"\")' class='btn btn-info'>修改</a>&nbsp;<a onclick='shoucang(\""+val.id+"\")' class='btn btn-info'>收藏</a>";
					 
						html+="<tr>" +
								"<td><input id='"+val.id+"' name='checkbox' type='checkbox'></td>" +
								
								"<td>"+val.a1+"</td>" +  
																											
								"<td><img style='width:85px;' src="+getIP()+val.a2+"></img></td>" +
								"<td>"+val.a6+"</td>" + 
								"<td>"+val.a5+"</td>" +  
								"<td>"+
								ddm+
								//"<span onclick='getDetail(\""+val.id+"\")' class='checkDetailsBtn'>查看详情</span>"+
								
								
								"</td>"+
								"</tr>";
					})
				}else{
					html="<tr><td colspan='10'>暂无数据</td></tr>";
					
				
				}
				$("table tbody").html(html);
				App.init();
				$("#loading").hide();
	   		}else{
	   			alert(data.msg);
	   				
	   		}
	   		
	   	});
	}
   
})
//修改
function update(id){
 
	 window.location.href=getIP()+"media/zixun/zixunModify.jsp?eid="+id;
}


//收藏
function shoucang(id){
	var edit=$.Params.create();
	var url=getIP()+"shoucang.action?add";
   		edit.addParams("a1",id);
 		edit.ajax(url,function (data){
			if(data.success){
			alert("收藏成功");
			
			}
		})
}
//修改
function jieshu(id){
	window.location.href=getIP()+"media/zhiwei/zhiweiModify.jsp?eid="+id;
	var url=getIP()+"zhiwei.action?jieshu";
   		edit.addParams("a1",a1);
 		edit.addParams("a2",a2);
 		edit.addParams("a3",a3);
 		edit.addParams("a4",a4);
   		edit.addParams("id",id);
   		edit.ajax(url,function (data){
			if(data.success){
			alert("保存成功");
			window.location.href=getIP()+"media/zhiwei/zhiweiList.jsp";
			}
		})
}

 
