import { Checkbox,Form } from 'antd';

const CQCheckBox = (props: any) => {
    const { label, name, tooltip, options, onChange,defaultValue} = props;

    return (
        <Form.Item
            name={name}
            label={label}
            tooltip={tooltip}>
            <Checkbox.Group options={options} defaultValue={[defaultValue]} onChange={onChange} />    
        </Form.Item>
    );
};

export default CQCheckBox;