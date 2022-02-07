
import {useState} from 'react';
import { InputNumber, Form } from 'antd';

const CQInputRange = (props:any) => {
    const { label, name, tooltip, step, min, max, value, onChange}= props;

    return (
        <Form.Item
            name={name}
            label={label}
            tooltip={tooltip}>
            <InputNumber step={step} min={min} max={max} value={value} onChange={onChange} />
        </Form.Item>
    );
};

export default CQInputRange;