package com.ian.media.dao;


import com.ian.media.model.zixun;
import com.ian.media.model.dingdan;


public interface zixunMapper extends BaseDao<zixun, String> {
	/*
    int countByExample(zixunExample example);

    int deleteByExample(zixunExample example);

    int insert(zixun record);

    int insertSelective(zixun record);

    List<zixun> selectByExampleWithBLOBs(zixunExample example);

    List<zixun> selectByExample(zixunExample example);

    //int updateByExampleSelective(@Param("record") zixun record, @Param("example") zixunExample example);

    int updateByExampleWithBLOBs(@Param("record") zixun record, @Param("example") zixunExample example);

    int updateByExample(@Param("record") zixun record, @Param("example") zixunExample example);
*/
	public int insertdingdan(dingdan paramT);

}