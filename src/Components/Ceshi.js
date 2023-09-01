import React from 'react';
import {Select, Tag} from "@kubed/components";

const Ceshi = () => {
    const options=[{value:'gold'},{value:'lime'},{value:'green'}]
    function tagRender(props){
        const {label,value,closable,onClose} = props;
        const onPreventMouseDown = event => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
            >
                {label}
            </Tag>
        );
    }
    return (
        <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            defaultValue={['gold','cyan']}
            style={{ width: '100%'}}
            options={options}
        />
    )
}

export default Ceshi;
