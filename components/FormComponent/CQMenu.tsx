

import { Menu } from 'antd';


const CQMenu = (props: any) => {
    const { label, name, required, showCount } = props;

    return (
        <Menu onClick={(item) => { console.log(item.key) }}>
            <Menu.Item key="Vitals">Vitals</Menu.Item>
            <Menu.Item key="Sleep">Sleep</Menu.Item>
            <Menu.Item key="Body Presence">Body Presence</Menu.Item>
            <Menu.Item key="In/Out">In/Out</Menu.Item>
            <Menu.Item key="SoS Messages">SoS Messages</Menu.Item>
            <Menu.Item key="Movement">Movement</Menu.Item>
        </Menu>
    )
}

export default CQMenu;
