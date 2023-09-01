import React from 'react';
import {
    Button,
    Checkbox,
    Col,
    Form,
    FormItem,
    FormList,
    Input, Notify,
    notify,
    RadioGroup,
    Row,
    useForm,
    Select
} from "@kubed/components";

const NodeAdder = (props) => {
    const onFinish = (values) => {
        props.onNodeAddHandler(values)
        console.log(values)
    };
    const triggerSuccess = () => notify.success('添加节点成功');
    return (
        <Form onFinish={onFinish}>
            <Row columns={15} gutter={[10, 40]}>
                <Col span={2}>
                    <FormItem
                        label="主机名"
                        name="nodeName"
                        help="节点主机名"
                        rules={[{ required: true, message: 'Please input your nodeName!' }]}
                    >
                        <Input />
                    </FormItem>
                </Col>
                <Col span={2}>
                    <FormItem
                        label="Address"
                        name="Address"
                        help="节点的IP地址"
                        rules={[{ required: true, message: 'Please input your Address!' }]}
                    >
                        <Input />
                    </FormItem>
                </Col>
                <Col span={2}>
                    <FormItem label="InternalAddress" name="InternalAddress" help="节点的内网IP" tooltip="tooltip 内容 content">
                        <Input />
                    </FormItem>
                </Col>
                <Col span={2}>
                    <FormItem label="角色" name="role" help="节点角色选择">
                        <Select  placeholder="请选择" allowClear mode="multiple" showArrow>
                            <Select.Option value="Master">Master</Select.Option>
                            <Select.Option value="Worker">Worker</Select.Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span={2}>
                    <FormItem label="用户名" name="user" help="节点的用户名" tooltip="该用户需能通过ssh连通">
                        <Input />
                    </FormItem>
                </Col>
                <Col span={2}>
                    <FormItem label="密码" name="password" help="密码" tooltip="该用户名对应密码">
                        <Input />
                    </FormItem>
                </Col>
            </Row>
            <Button onClick={triggerSuccess} type="submit">添加</Button>
            <Notify position="top-right" />
        </Form>
    );
};

export default NodeAdder;
