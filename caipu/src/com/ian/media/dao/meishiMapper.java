package com.ian.media.dao;


import com.ian.media.model.meishi;
import com.ian.media.model.dingdan;


public interface meishiMapper extends BaseDao<meishi, String> {
	/*
    int countByExample(meishiExample example);

    int deleteByExample(meishiExample example);

    int insert(meishi record);

    int insertSelective(meishi record);

    List<meishi> selectByExampleWithBLOBs(meishiExample example);

    List<meishi> selectByExample(meishiExample example);

    //int updateByExampleSelective(@Param("record") meishi record, @Param("example") meishiExample example);

    int updateByExampleWithBLOBs(@Param("record") meishi record, @Param("example") meishiExample example);

    int updateByExample(@Param("record") meishi record, @Param("example") meishiExample example);
*/
	public int insertdingdan(dingdan paramT);

}