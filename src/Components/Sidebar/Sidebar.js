import React from 'react';
import {Button, Divider, Group} from "@kubed/components";
import VerticalLine from "./VerticalLine/VerticalLine";
import StepItem from "./StepItem/StepItem";
const Sidebar = (props) => {
    return (
        <div>
            {props.stepData.map(item => <StepItem onChangeStepHandler={props.onChangeStepHandler} curStepId={props.curStepId} key={item.id} {...item}/>)}
        </div>
    );
};

export default Sidebar;
