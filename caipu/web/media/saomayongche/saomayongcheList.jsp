<%@page language="java" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
 <html lang="en">
<head>

<title></title>
	<meta charset="utf-8" />
 <script type="text/javascript" src="<%=basePath%>media/saomayongche/js/jquery-1.10.2.min.js"></script>
 <script type="text/javascript" src="<%=basePath%>media/saomayongche/js/getIp.js"></script>
 <script type="text/javascript" src="<%=basePath%>media/saomayongche/js/ian.js"></script>
  <script type="text/javascript" src="<%=basePath%>media/saomayongche/js/page.js"></script>
  <script type="text/javascript" src="<%=basePath%>media/saomayongche/js/pageMedia.js"> </script>
<script type="text/javascript" src="<%=basePath%>media/saomayongche/js/commcom.js"></script>
 
<script type="text/javascript" src="<%=basePath%>media/saomayongche/js/saomayongcheList.js"></script>
<link rel="stylesheet" href="<%=basePath%>media/saomayongche/css/bootstrap.min.css" type="text/css"></link>
 
 

</head>


<style type="text/css">
select {
    width: 100px;
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-image: initial;
}

.btn-group
{
margin-left:50px;
font-size:12px;
}


</style>
<body class="page-header-fixed" >
<div class="tab-content contents"> 
	<h3 class="form-section">&nbsp;&nbsp;&nbsp;<font style="font-weight:bold" >预订</font></h3>
	<div class="row-fluid">
		<div class="span12">
		 	<div class="btn-group listsearch horizontal">
		 	
		 	行程名：<input type="text"  id="a1"/>
		 	
		 	
	        <span id="searchList" onclick="serarch()" class="btn btn-success"> 查 询</span> 
	     </div> 
	     <div class="btn-group pull-right listsearch">
	
		</div>

</div>
	 <div class="portlet-body list">
		<table class="table table-striped tableshort" id="listtable">
	           <thead>
	               <tr>
	                   <th style="width:5%;"><input type="checkbox"  id="queryCheckbox"  name="queryCheckbox" value=""></th>
	                        <th style="width:10%;">行程名</th>
	                    <th style="width:10%;">行程价格</th> 
	                    <th style="width:10%;">价格</th> 
	                    <th style="width:10%;">图片</th> 
	                   <th style="width:10%;">操作</th>
	               </tr>
	           </thead>
				<tbody id="qkList">
				<tr>
					<td colspan="10">暂无数据</td>
				</tr>
				</tbody>
	
	       </table>
	       
	      <div class="pagination" id="pagination" >
	                    <div class="float_right padding5 paging" >
	                        <div id="divFood" class="float_left padding_top4">
	                        <span float="left">每页<font id="rowscount">0</font>条/共<font id="allcount">0</font>条 第<font id="nowpage">0</font>页/共<font id="allpage">0</font>页</span>
	                        <span onclick="firstPage()" float="left" class="pagefl"><a>首页</a></span>
	                        <span onclick="prePage()" float="left" class="pagefl"><a>上一页</a></span>
	                        <span onclick="nextPage()" float="left" class="pagefl"><a>下一页</a></span>
	                        <span onclick="lastPage()" float="left" class="pagefl"><a>末页</a></span>
	                       <!--  <span display="" float="left" class="pagefl" style="margin-right:10px;">跳转到第 <input style="width:20px;height:15px;margin-top:6px;" type="text" /> 页</span> -->
	                       <span display="" float="left" class="pagefl">跳转到第 
	                       		<select onchange="jumpPage(this)">
	                       			<option selected="selected" value="0">1</option>
	                       		</select> 页</span>
	                        </div>
	                   </div>
	           </div>
		</div>
		</div>
	</div>
</div>

</body>
 
</html>