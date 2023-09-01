import React, {useState} from 'react';
import {Alert, Button} from "@kubed/components";
import NodeAdder from "../Nodes/NodeAdder/NodeAdder";
import Nodes from "../Nodes/Nodes";
const NodeSettingContent = (props) => {
    // const nodeAddHandler = (node) => {
    //     props.onNodeAddHandler([...props.nodesData,node])
    //
    // }
    const [showNodeAdder,setShowNodeAdder] = useState(false)
    const ChangeNodeAdderStatusHandler = () => {
        setShowNodeAdder((prevState) => !prevState)
    }
    const nodeItemDeleteHandler = () => {

    }
    return (
        <div>
            {!showNodeAdder && <Button onClick={ChangeNodeAdderStatusHandler}>添加节点</Button>}
            {showNodeAdder && <Button onClick={ChangeNodeAdderStatusHandler}>关闭添加</Button>}
            {showNodeAdder && <NodeAdder onNodeAddHandler={props.onNodeAddHandler}/>}
            <Nodes nodesData={props.nodesData}></Nodes>
        </div>
    );
};

export default NodeSettingContent;
