 $(function () {
            $("#return").on("click", function () {
                history.go(-1);

            });


            var listrole = $.Params.create();
            listrole.ajax(getIP() + "meishileixing.action?list", function (data) {
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
            p.ajax(getIP() + "meishi.action?list", function (data) {
                var html = "";
                var val = data.rows[0];


                $("#a1").val(val.a1);
                $("#a2").val(val.a2);
                $("#a3").val(val.a3);


                $("#id").val(eid);

                ue.addListener("ready", function () {
                    ue.setContent(val.a6);
                })
            })

        });


            function  adds(){
	
            	
            	if($('#a2').val()=='请选择类型')
        		{
        		
        		alert('请选择类型');
        		return;
        		}
         
            	
                var ue = UE.getEditor('contents');
 
                var a1 = $("#a1").val();
                var a2 = $("#a2").val();
                var a3 = $("#a3").val();
                var a4 ='';
	
                var a5 = $("#imgurl").val();
                var a6 = ue.getContent();  
  	
                var id = $("#id").val();
                var edit=$.Params.create();
                var url=getIP()+"meishi.action?update";
                edit.addParams("a1",a1); 
                edit.addParams("a2",a2); 
                edit.addParams("a3",a3); 
                edit.addParams("a4",a4); 
                edit.addParams("a6",a6); 
   		
                if(a5=="")
                {
			
                }
                else
                { 
                    edit.addParams("a5",a5);
                }
                edit.addParams("id",id);
                edit.ajax(url,function (data){
                    if(data.success){
                        alert("保存成功");
                        window.location.href=getIP()+"media/meishi/meishiList.jsp";
                    }
                })
            }
            function GetQueryString(name)
            {
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  unescape(r[2]); return null;
            }
   
