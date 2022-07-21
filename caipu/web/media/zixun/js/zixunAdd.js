
        $(function(){
            var ue = UE.getEditor('contents');
            $("#return").on("click",function(){
                history.go(-1);
            });

 
            /*
            var listrole=$.Params.create();
            listrole.ajax(getIP()+"zixunleixing.action?list",function (data){
                if(data.success){
                    var html="<option>请选择类型</option>";
                    $.each(data.rows,function(i,val){
                        html+="<option value='"+val.id+"'>"+val.a1+"</option>";
                    })
                    $("#a2").html(html);
                }
            });
            */
 
        })

  

        function  addsstu(){
	 
 
 
            var a2 = $("#imgurl").val();
 	
            var ue = UE.getEditor('contents');
            var a3 = ue.getContent();  
	
 
	
            var url=getIP()+"zixun.action?add";
  	
	
            $.ajax({
                type: "post",
                url: url,
                data: {
                    a1:$('#a1').val(),
                    a2:a2,
                    a3:a3,
                    a4:usersId,
                    a5:userName
                },
                dataType: "json",
                success: function (data) {
            
                    if(data.success){
                        alert("添加成功");
                        window.location.href=getIP()+"media/zixun/zixunList.jsp";
                    }
                    else{
        				
                        alert('添加失败');

                    }
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

