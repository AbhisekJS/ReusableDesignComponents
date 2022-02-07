import { Form, Select } from 'antd';
const { Option } = Select;


const CQSelect = (props: any) => {
    const { label, name, tooltip, onChange, status,onSearch,data,required,placeholder} = props;

    return (
        <Form.Item
            name={name}
            label={label}
            tooltip={tooltip}
            rules={[{ required: required, message: `Please select ${name}!` }]}
        >
            <Select
                onChange={onChange}
                disabled={status}
                onSearch={onSearch}
                placeholder={placeholder}
            >

                {data?.map((item: any, i: number) => (
                <Option key={i} role="option" value={item} >{item}</Option>
                ))}

            </Select>
        </Form.Item>
    )
}

export default CQSelect;
