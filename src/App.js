import React from 'react';
import {
  Typography,
  Space,
  Divider,
} from 'antd';
import './App.less';

const { Title } = Typography;

const App = () => (
  <>
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
      <Space align="start">
        {/* <img
          style={{width: 40, height: 40 }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        /> */}
        <Title level={2} style={{ marginBottom: 0 }}>
          Wi-Stem Encyclopedia
        </Title>
      </Space>
    </section>
    {/* <h4>Our goal is to inspire women and girls everywhere by showing them the women that paved the way</h4> */}
    <Divider style={{ marginBottom: 60 }}>Notable Women</Divider>
  </>
);

export default App;