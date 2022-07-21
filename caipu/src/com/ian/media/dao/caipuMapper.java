package com.ian.media.dao;


import com.ian.media.model.caipu;
import com.ian.media.model.dingdan;


public interface caipuMapper extends BaseDao<caipu, String> {
	/*
    int countByExample(xingchengExample example);

    int deleteByExample(xingchengExample example);

    int insert(xingcheng record);

    int insertSelective(xingcheng record);

    List<xingcheng> selectByExampleWithBLOBs(xingchengExample example);

    List<xingcheng> selectByExample(xingchengExample example);

    //int updateByExampleSelective(@Param("record") xingcheng record, @Param("example") xingchengExample example);

    int updateByExampleWithBLOBs(@Param("record") xingcheng record, @Param("example") xingchengExample example);

    int updateByExample(@Param("record") xingcheng record, @Param("example") xingchengExample example);
*/
	public int insertdingdan(dingdan paramT);

}