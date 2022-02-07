import {Form,Input} from 'antd';

const CQInput = (props:any) => {

    const { label, name, type, tooltip, required, addonBefore, addonAfter} = props;
    
    return(
        <Form.Item
            name={name}
            label={label}
            tooltip={tooltip}
            rules={[
                {
                    type : type,
                    message: `The input is not valid ${name}!`,
                },
                {
                    required: required,
                    message: `Please input your ${name}!`,
                },
            ]}
        >
            <Input addonBefore={addonBefore} addonAfter={addonAfter}/>
        </Form.Item>
    )
}

export default CQInput;