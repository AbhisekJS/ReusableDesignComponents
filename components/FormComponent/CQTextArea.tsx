import { Form, Select, Input } from 'antd';
const { Option } = Select;


const CQTextArea = (props: any) => {
    const { label, name, required, showCount } = props;

    return (
        <Form.Item
            name={name}
            label={label}
            rules={[{ required , message: `Please input ${name}` }]}
        >
            <Input.TextArea showCount={showCount} maxLength={100} />
        </Form.Item>
    )
}

export default CQTextArea;
