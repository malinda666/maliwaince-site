import { Row, Col, Typography, Input, Space, Button } from "antd";

const { Title, Text, Paragraph } = Typography;
const Subscriber = () => {
  return (
    <Row
      type="flex"
      align="start"
      justify="start"
      className="px-3 mh-page"
      style={{ margin: "8rem 0" }}
    >
      <Col span={16}>
        <Typography>
          <Title level={2}>
            Be the first to know about <br />
            Crypto news everyday
          </Title>
        </Typography>
        <Typography>
          <Paragraph>
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don't miss a single newsletter
          </Paragraph>
        </Typography>
        <Space>
          <Input placeholder="Enter your email" size="middle" />
          <Button type="primary" size="middle">
            Subscribe
          </Button>
        </Space>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

export default Subscriber;
