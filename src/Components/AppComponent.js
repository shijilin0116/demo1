import React, {useState} from 'react';
import {Banner, Button, Col, Row} from "@kubed/components";
import {Check, Forward, TableChart} from "@kubed/icons";
import Nodes from "./Nodes/Nodes";
import Sidebar from "./Sidebar/Sidebar";
import NodeAdder from "./Nodes/NodeAdder/NodeAdder";
import NodeSettingContent from "./SidebarItemContent/NodeSettingContent";
import ETCDSettingContent from "./SidebarItemContent/ETCDSettingContent";
import KubernetesSettingContent from "./SidebarItemContent/KubernetesSettingContent";
import Ceshi from "./Ceshi";

const AppComponent = () => {
    const [KubernetesSetting, setKubernetesSetting] = useState(
        {
            clusterName : '',
            clusterVersion : '',
            containerManager : '',
            autoRenewCert : true
        }
    )
    const changeKubernetesSettingHandler = (newV) => {
        setKubernetesSetting(newV)
    }
    const [ETCD,setETCD] = useState([])
    const [curStepId,setCurStepId] = useState(0)
    // const [autoRenewCert,setAutoRenewCert] = useState(true)
    const [nodesData,setNodesData] = useState([
        {
            id :'1',
            nodeName : 'node1',
            Address : '192.168.6.2',
            InternalAddress : '192.168.6.2',
            role : ['Master'],
            userName : 'root',
            password : '123456'
        },
        {
            id :'2',
            nodeName : 'node2',
            Address : '192.168.6.2',
            InternalAddress : '192.168.6.2',
            role : ['Worker'],
            userName : 'root',
            password : '123456'
        },
        {
            id :'3',
            nodeName : 'node3',
            Address : '192.168.6.2',
            InternalAddress : '192.168.6.2',
            role : ['Worker'],
            userName : 'root',
            password : '123456'
        }
    ])
    const [stepData,setStepData] = useState(
        [
            {
                id : 0,
                title : '主机设置',
                description: '主机设置下可以设置要创建的K8s集群的节点信息'
            },
            {
                id : 1,
                title : 'ETCD设置',
                description: 'ETCD设置为待创建集群选择一个或多个ETCD'
            },
            {
                id : 2,
                title : '集群设置',
                description: '集群设置用于配置待创建K8s集群的集群信息'
            },
            {
                id : 3,
                title : '网络设置',
                description: '主机设置下可以选择创建的K8s集群的主机信息'
            },
            {
                id : 4,
                title : '存储设置',
                description: '主机设置下可以选择创建的K8s集群的主机信息'
            },
            {
                id : 5,
                title : '镜像仓库设置',
                description: '镜像仓库设置为待创建集群选择合适的镜像仓库'
            },
            {
                id : 6,
                title : 'Kubesphere设置',
                description: '主机设置下可以选择创建的K8s集群的主机信息'
            },
            {
                id : 7,
                title : '安装',
                description: '主机设置下可以选择创建的K8s集群的主机信息'
            }
        ]
    )
    const nodeAddHandler = (node) => {
        setNodesData((prevState)=>[...prevState,node])
    }
    const ETCDChangeHandler = (nodeNames) => {
        setETCD(nodeNames)
    }
    const changeStepHandler = (id) => {
        setCurStepId(id)
    }
    const lastStepHandler = () => {
        setCurStepId((prevState) => prevState-1)
    }
    const nextStepHandler = () =>{
        setCurStepId((prevState) => prevState+1)
    }
    const PlaceHolder = ({ children }) => (
        <div style={{ background: 'papayawhip' }}>{children}</div>
    );
    return (
        <div>
            <Row>
                <Col span={2}>
                    <PlaceHolder>
                        <img src="https://github.com/kubesphere/kubekey/blob/master/docs/img/kubekey-logo.svg?raw=true" alt='描述'></img>
                    </PlaceHolder>
                </Col>
            </Row>
            <Row>
                <Col span={2} offset>
                    <PlaceHolder>
                        <Sidebar onChangeStepHandler={changeStepHandler} stepData={stepData} curStepId={curStepId}></Sidebar>
                    </PlaceHolder>
                </Col>
                <Col span={10}>
                    <PlaceHolder>
                        <Banner
                            // icon={<TableChart />}
                            title={stepData[curStepId].title}
                            description={stepData[curStepId].description}
                        ></Banner>
                        {curStepId === 0 && <NodeSettingContent nodesData={nodesData} onNodeAddHandler={nodeAddHandler} />}
                        {curStepId === 1 && <ETCDSettingContent nodesData={nodesData} ETCD={ETCD} onETCDChangeHandler={ETCDChangeHandler}/>}
                        {curStepId === 2 && <KubernetesSettingContent KubernetesSetting={KubernetesSetting} onChangeKubernetesSettingHandler={changeKubernetesSettingHandler}/>}
                        {/*<Ceshi/>*/}
                        {curStepId !== stepData.length-1 &&<Button onClick={nextStepHandler}>下一步</Button>}
                        {curStepId !== 0 && <Button onClick={lastStepHandler}>上一步</Button>}
                        {curStepId === stepData.length-1 &&<Button>安装</Button>}
                    </PlaceHolder>
                </Col>
            </Row>
        </div>
    )
}
export default AppComponent;
