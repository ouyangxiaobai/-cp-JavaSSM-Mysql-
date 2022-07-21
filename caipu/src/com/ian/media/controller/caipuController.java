package com.ian.media.controller;

 
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ian.media.dao.caipuMapper;
import com.ian.media.model.caipu;
import com.ian.media.model.dingdan;

@Controller("caipu")
@Scope("prototype")
@RequestMapping("caipu.action")
public class caipuController  extends BaseController<caipu>{
	
	public caipuMapper caipuMapper; 
	@Autowired
	  public void setPlansMapperDao(caipuMapper caipuMapper) {
        this.caipuMapper = caipuMapper;
    }
	@PostConstruct
	public void setBaseDao(){
		super.setBaseDao(caipuMapper);
	}
	@RequestMapping(params = "add")
	@ResponseBody
	public Map<Object, Object> add(HttpSession session,HttpServletRequest request,caipu params){
		
		System.out.println("你好1111111111111");
		Map<Object, Object> map = new HashMap<Object, Object>();
		
		System.out.print("你好"+params);
		caipu ss=new caipu();
		 
		String a1=request.getParameter("a1");
		String a2=request.getParameter("a2");
		String a3=request.getParameter("a3");
		String a4=request.getParameter("a4");
		String a5=request.getParameter("a5");
		String a6=request.getParameter("a6");
		String a7=request.getParameter("a7");
		
		
		ss.setA1(a1);
		ss.setA2(a2);
		ss.setA3(a3);
		ss.setA4(a4);
		ss.setA5(a5);
		ss.setA6(a6);
		ss.setA7(a7);
		 
		try {
			caipuMapper.insertSelective(ss);
				map.put("msg", "添加 成功");
			map.put("success", true);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("success", false);	
			map.put("msg", "添加失败");
		}
		return map;
	}
	@RequestMapping(params = "update")
	@ResponseBody
	public Map<Object, Object> update(HttpSession session,HttpServletRequest request,caipu params){
		Map<Object, Object> map = new HashMap<Object, Object>();
		try {
			caipuMapper.updateByPrimaryKeySelective(params);
				map.put("success", true);
				map.put("msg", "修改 成功");
			
		} catch (Exception e) {
			e.printStackTrace();
			map.put("success", false);	
			map.put("msg", "修改失败");
		}
		return map;
	}
	@RequestMapping(params = "yuding")
	@ResponseBody
	public Map<Object, Object> yuding(HttpSession session,HttpServletRequest request,dingdan params){
		Map<Object, Object> map = new HashMap<Object, Object>();
		try {
			
			//caipuMapper.updateByPrimaryKeySelective(params);
			
			//写入订单信息
			
			dingdan _dingdan=new dingdan();
			
			_dingdan.setA1(params.getA1());//房间编号
			_dingdan.setA2(params.getA5()); //扫码人姓名
			_dingdan.setA3(params.getA6());//扫码人联系方式
			_dingdan.setA4(params.getA3());//房间价格
			_dingdan.setA8(String.valueOf(params.getId()));//房间id 
			_dingdan.setA9(params.getA7());//当前登录用户id
			
			
			Date day=new Date();    
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
			System.out.println(df.format(day));   
			//下单的时候一起支付
			_dingdan.setA7(params.getA8());
			_dingdan.setA10(params.getA10());
			//_dingdan.setA11(df.format(day));
			
			_dingdan.setA11(params.getA11());
			_dingdan.setA12(params.getA12());
			_dingdan.setA13(params.getA13());
			
			
			System.out.println("iddddddddddddddd::::::::::::."+params.getId()+"   a11::::::::::::"+params.getA11()+" a12::::"+params.getA12()+" a13::"+params.getA13());
			 
		    caipuMapper.insertdingdan(_dingdan);
			 
			
				map.put("success", true);
				map.put("msg", "修改 成功");
			
		} catch (Exception e) {
			e.printStackTrace();
			map.put("success", false);	
			map.put("msg", "修改失败");
		}
		return map;
	}
}
