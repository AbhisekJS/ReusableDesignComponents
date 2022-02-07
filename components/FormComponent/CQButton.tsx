import { Button, Form } from 'antd';

const CQButton = (props: any) => {
    const { type ,label, htmlType , ...rest} = props;

    return (
        <Form.Item {...rest}>
            <Button type={type} htmlType={htmlType}>
                 {label}
            </Button>
        </Form.Item>
    );
};

export default CQButton;