import React from 'react';
import NodeItem from "./NodeItem/NodeItem";

const Nodes = (props) => {
    return (
        <div>
            <p>主机名 Address InternalAddress 角色 Action</p>
            {props.nodesData.map( item => <NodeItem key={item.id} Address={item.Address} InternalAddress={item.InternalAddress} nodeName={item.nodeName} role={item.role}/> ) }
        </div>
    );
};

export default Nodes;
