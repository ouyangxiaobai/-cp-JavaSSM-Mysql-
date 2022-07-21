$(function () {
            //    var aboutusId = $("#aboutusId").val();
            //    if(aboutusId == undefined || aboutusId == ""){
            //        window.top.location.href = getIP()+"admin/login.jsp";
            //    }
            // $.ajax(getIP()+"powerMenu.action?getUserMenu").done(function(data){
 
            $.ajax({
                type: "post",
                url: getIP() + "powerMenu.action?getUserMenu",
                data: {

                },
                dataType: "json",
                async:false,
                success: function (data) {
                    var html = "";
                    var htmltwo = "";
                    $.each(data, function (i, val) {
                        html += "<li class =''>" +
                            " <a href='javascript:;'><i><img src='media/images/menu1.png' />" +
                        "</i><span class='title'>" + val.menuName + "</span><span class='arrow'>" +
                        "</span></a>"
                        html += "<ul class='sub-menu'>";

                        htmltwo += '<li>' +
                            '<div class="link"><i class="fa fa-leaf"></i>'+val.menuName+'<i class="fa fa-chevron-down"></i></div>' +
                            '<ul class="submenu">';

                        $.each(val.subMenuList, function (y, val) {
                            if (i == 0 && y == 0) {
                                html += "<li class='active'><a  target='right' href='" + val.url + "'>" + val.menuName1 + "</a></li>"
                            } else {
                                html += "<li><a  target='right' href='" + val.url + "'>" + val.menuName1 + "</a></li>"
                            }

                            htmltwo += "<li id='shop'><a  target='right' href='" + val.url + "'>" + val.menuName1 + "</a></li>";

                        });
                        html += "</ul></li>";
                        htmltwo += "</ul></li>";
                    });
                    $('#leftmenuclick').html(html);
                    $('#accordion').html(htmltwo);


                }
            })
        });

