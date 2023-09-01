import React, {useState} from 'react';
import {
    Button,
    Col,
    Form,
    FormItem,
    Input,
    notify,
    Notify,
    Radio,
    RadioGroup,
    Row,
    Select,
    Switch
} from "@kubed/components";

const KubernetesSettingContent = (props) => {

    const [KubernetesSetting, setKubernetesSetting] = useState(
        {
            clusterName : '',
            clusterVersion : '',
            containerManager : '',
            autoRenewCert : true
        }
    )
    const [KubernetesVersionData,setKubernetesVersionData] = useState([
        'v1.2',
        'v1.3',
        'v1.4',
        'v1.5',
        'v1.6'
    ])
    const [containerManagerData,setContainerManagerData] = useState(
        ['docker','containerd']
    )
    const onFinish = (values) => {
        // props.onNodeAddHandler(values)
        console.log(values)
    };
    const changeAutoRenewHandler = (e) => {
        props.onChangeKubernetesSettingHandler({...props.KubernetesSetting,autoRenewCert:e})
    }
    const changeClusterNameHandler = (e) => {
        props.onChangeKubernetesSettingHandler({...props.KubernetesSetting,clusterName:e.target.value})
    }
    const changeClusterVersionHandler = (e) => {
        console.log(e)
        props.onChangeKubernetesSettingHandler({...props.KubernetesSetting,clusterVersion:e})
    }
    const changeContainerManagerHandler = (e) => {
        // console.log(e)
        props.onChangeKubernetesSettingHandler({...props.KubernetesSetting,containerManager:e})
    }
    const triggerSuccess = () => notify.success('添加节点成功');
    return (
        <div>
            <Row columns={24}>
                <Col span={3}>
                    Kubernetes版本：
                </Col>
                <Col span={21}>
                    <Select value={props.KubernetesSetting.clusterVersion} onChange={changeClusterVersionHandler}  style={{width:'100%'}}  placeholder="请选择Kubernetes版本"  allowClear>
                        {KubernetesVersionData.map(item => <Select.Option key={item} value={item} label={item}>{item}</Select.Option>)}
                    </Select>
                </Col>
            </Row>
            <Row columns={24}>
                <Col span={3}>Kubernetes集群名称:</Col>
                <Col span={21}>
                    <Input style={{width:'100%'}} onChange={changeClusterNameHandler} value={props.KubernetesSetting.clusterName} placeholder="请输入Kubernetes集群名称" />
                </Col>
            </Row>
            <Row columns={24}>
                <Col span={3}>是否自动续费证书:</Col>
                <Switch defaultChecked={props.KubernetesSetting.autoRenewCert} onChange={changeAutoRenewHandler} okText="开启" offText="关闭" />
            </Row>
            <Row columns={24}>
                <Col span={3}>
                    容器运行时：
                </Col>
                <Col span={21}>
                    <Select style={{width:'100%'}} value={props.KubernetesSetting.containerManager} onChange={changeContainerManagerHandler} placeholder="请选择集群容器运行时"  allowClear>
                        {containerManagerData.map(item => <Select.Option key={item} value={item} >{item}</Select.Option>)}
                    </Select>
                </Col>
            </Row>
        </div>
    );
};

export default KubernetesSettingContent;
