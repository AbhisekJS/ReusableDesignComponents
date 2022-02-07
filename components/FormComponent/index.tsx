import React, { useState } from 'react';
import { Form, Select, Button,Checkbox, Dropdown} from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import CQInput from './CQInput';
import CQSelect from './CQSelect';
import CQTextArea from './CQTextArea';
import CQInputRange from './CQInputNumber';
import CQButton from './CQButton';
import CQCheckBox from './CQCheckBox';
import CQMenu from './CQMenu';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CalcuquoteForm = () => {

  const [form] = Form.useForm();
  const [range, setRange] = React.useState<string | number>();


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  function onChange(checkedValues:any) {
    console.log('checked = ', checkedValues);
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  function onChangeOrg(value: any): void {
    console.log(value)
  }

  //Sample Data

  const data : string[] = ['Italy', 'India', 'USA', 'Japan', 'Korea']
  const gender: string[] = ['Male', 'Female', 'Other']
  const options = [
    { label: 'Small', value: 'Small' },
    { label: 'Medium', value:  'Medium'},
    { label: 'Large', value: 'Large' },
  ];

  const menu = <CQMenu/>

  return (
    <Form
      {...formItemLayout}
      form={form}

      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >

      <CQInput label="First Name" name="firstName" required="true" />
      <CQInput label="Last Name" name="lastName" required="true" />
      <CQInput label="E-mail" name="email" type="email" tooltip="Please Enter Your Email" required="true" addonBefore={<MailOutlined />} />
    
      <CQInput label="Nickname" name="nickname" tooltip="What do you want others to call you?" required="true" addonBefore={<UserOutlined/>} />

      <CQInput label="Phone Number" name="phone" tooltip="Please Enter Your Phone Number" required="true" addonBefore={prefixSelector} />
      <CQInput label="Donation" name="donation" tooltip="Please Enter Your Phone Number" required="true" addonAfter={suffixSelector} />

      <CQInputRange label="No of Items" name="no of items" tooltip="Please Select No Of Items" 
      min={1} max={10} 
      value={range}
      onChange={(e:any)=>setRange(e)}/>

      <CQSelect
        placeholder="Select a Org"
        label="Nation"
        data={data}
        onChange={onChangeOrg}
        key="org"
      />

      <CQSelect
        placeholder="Select Your Gender"
        label="Gender"
        tooltip="Select Gender"
        data={gender}
        onChange={onChangeOrg}
        key="gender"
      />

      <CQCheckBox label="Select Size" options={options} onChange={onChange} defaultValue="Medium"/>

      <CQTextArea name="intro" label="Intro" required={true} showCount={true} />

      <CQButton label="Register" type="primary" {...tailFormItemLayout} htmlType="submit"/>

     <CQMenu/>
     <Dropdown overlay={menu}>
        <Button>Select</Button>
     </Dropdown>
    </Form>
  );
};

export default CalcuquoteForm;