import React, {useState} from 'react';
import {Button, Col, Row, Select, Tag} from "@kubed/components";
import './ETCDSettingContent.css'
const ETCDSettingContent = (props) => {
    const changeHandler=(e) => {
        // console.log(e)
        props.onETCDChangeHandler(e)

    }
    const ETCDOptionContent = (item) => {
        return (
            <Select.Option key={item.nodeName} value={item.nodeName} label={item.nodeName}>
                <div>{item.nodeName}</div>
                <div className='etcd-select'>
                    {item.role.includes('Master') && <Tag color="error">MASTER</Tag>}
                    {item.role.includes('Worker') && <Tag color="secondary">WORKER</Tag>}
                </div>
            </Select.Option>
        )
    }
    return (
        <div>
            <Row columns={24}>
                <Col span={3}>ETCD部署节点：</Col>
                <Col span={21}>
                    <Select style={{ width:'100%'}} defaultValue={props.ETCD} onChange={changeHandler} style={{minWidth:400}} placeholder="请选择" allowClear mode="multiple" showArrow optionLabelProp="label">
                        {props.nodesData.map(item=>ETCDOptionContent(item))}
                    </Select>
                </Col>
            </Row>
            <Row columns={24}>
                <Col span={3}>ETCD类型：</Col>
                <Col span={21}>
                    <Select style={{ width:'100%'}} defaultValue={'kubekey'} style={{minWidth:400}} >
                        <Select.Option value={'kubekey'}>kubekey</Select.Option>
                    </Select>
                </Col>
            </Row>

        </div>
    );
};

export default ETCDSettingContent;
