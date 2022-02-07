import { Button, Form } from 'antd';

const CQButton = (props: any) => {
    const { type, label, htmlType, ghost , ...rest} = props;

    return (
        <Form.Item {...rest}>
            <Button type={type} htmlType={htmlType} ghost={ghost}>
                 {label}
            </Button>
        </Form.Item>
    );
};

export default CQButton;