 $(function () {
            $("#return").on("click", function () {
                history.go(-1);

            });


            var listrole = $.Params.create();
            listrole.ajax(getIP() + "caipuleixing.action?list", function (data) {
                if (data.success) {
                    var html = "<option>请选择类型</option>";
                    $.each(data.rows, function (i, val) {
                        html += "<option value='" + val.id + "'>" + val.a1 + "</option>";
                    })
                    $("#a2").html(html);
                }
            });

            var ue = UE.getEditor('contents');

            var eid = GetQueryString("eid");


            var p = $.Params.create();
            p.addParams("id", eid);
            p.ajax(getIP() + "caipu.action?list", function (data) {
                var html = "";
                var val = data.rows[0];


                $("#a1").val(val.a1);
      
                $("#a6").val(val.a6);


                $('#thumbnailImage')[0].src=val.a6;
                
                $('#imgurl').val(val.a6);
                
                $("#id").val(eid);

                ue.addListener("ready", function () {
                    ue.setContent(val.a7);
                })
            })

        });


            function  adds(){
	
            	
            
         
            	
                var ue = UE.getEditor('contents');
 
                var a1 = $("#a1").val();
          
                
                var a6 = $("#imgurl").val();
                var a7 = ue.getContent();  
  	
                var id = $("#id").val();
                var edit=$.Params.create();
                var url=getIP()+"caipu.action?update";
                edit.addParams("a1",a1); 
         
                edit.addParams("a7",a7); 
   		
                if(a6=="")
                {
			
                }
                else
                { 
                    edit.addParams("a6",a6);
                }
                edit.addParams("id",id);
                edit.ajax(url,function (data){
                    if(data.success){
                        alert("保存成功");
                        window.location.href=getIP()+"media/caipu/caipuList.jsp";
                    }
                })
            }
            function GetQueryString(name)
            {
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  unescape(r[2]); return null;
            }
   
