import React from 'react';
import {CaretRight, Check} from "@kubed/icons";
import {Button, Center, Col, Row, Text} from "@kubed/components";
import "./StepItem.css"
const StepItem = (props) => {
    const buttonContent = (item) => {
        if(item.id < props.curStepId) return(<Check/>)
        else if(item.status === props.curStepId) return(+item.id+1)
        else return(+item.id+1)
    }

    const changeStepHandler = () => {
        props.onChangeStepHandler(props.id)
    }
    return (
        <div>
            <Row>
                <Col span={4}>
                    <Button onClick={changeStepHandler} disabled={props.id > props.curStepId}>
                        {buttonContent(props)}
                    </Button>
                </Col>
                <Col span={8} className="step-col">
                        <Text>{props.title}</Text>
                </Col>
            </Row>


        </div>
    );
};

export default StepItem;
