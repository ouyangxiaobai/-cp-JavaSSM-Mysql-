package com.ian.media.dao;


import com.ian.media.model.shoucang;
import com.ian.media.model.dingdan;


public interface shoucangMapper extends BaseDao<shoucang, String> {
	/*
    int countByExample(shoucangExample example);

    int deleteByExample(shoucangExample example);

    int insert(shoucang record);

    int insertSelective(shoucang record);

    List<shoucang> selectByExampleWithBLOBs(shoucangExample example);

    List<shoucang> selectByExample(shoucangExample example);

    //int updateByExampleSelective(@Param("record") shoucang record, @Param("example") shoucangExample example);

    int updateByExampleWithBLOBs(@Param("record") shoucang record, @Param("example") shoucangExample example);

    int updateByExample(@Param("record") shoucang record, @Param("example") shoucangExample example);
*/
	public int insertdingdan(dingdan paramT);

}