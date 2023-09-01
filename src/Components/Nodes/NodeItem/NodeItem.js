import React from 'react';
import {Button,Tag} from "@kubed/components";

const NodeItem = (props) => {
    console.log(props.role)
    return (
        <div>
            {props.nodeName}
            {props.Address}
            {props.InternalAddress}
            {props.role.includes('Master') && <Tag color="error">MASTER</Tag>}
            {props.role.includes('Worker') && <Tag color="secondary">WORKER</Tag>}
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    );
};

export default NodeItem;
