import { Row, Typography, Col, Space } from "antd";

const { Text, Title } = Typography;
const PageFooter = () => {
  return (
    <Row
      type="flex"
      align="start"
      justify="start"
      className="px-3 mh-page bg-white py-4 mt-4"
      style={{ flexDirection: "column" }}
    >
      <Row style={{ margin: "2rem 0" }}>
        <Col xs={12} sm={12} md={6} lg={6} className="my-2">
          <Typography>
            <Title level={5}>Products</Title>
          </Typography>
          <Space direction="vertical">
            <Text type="secondary">Link 1</Text>
            <Text type="secondary">Link 2</Text>
            <Text type="secondary">Link 3</Text>
            <Text type="secondary">Link 4</Text>
            <Text type="secondary">Link 5</Text>
          </Space>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="my-2">
          <Typography>
            <Title level={5}>Company</Title>
          </Typography>
          <Space direction="vertical">
            <Text type="secondary">Link 1</Text>
            <Text type="secondary">Link 2</Text>
            <Text type="secondary">Link 3</Text>
            <Text type="secondary">Link 4</Text>
            <Text type="secondary">Link 5</Text>
          </Space>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="my-2">
          <Typography>
            <Title level={5}>Support</Title>
          </Typography>
          <Space direction="vertical">
            <Text type="secondary">Link 1</Text>
            <Text type="secondary">Link 2</Text>
            <Text type="secondary">Link 3</Text>
            <Text type="secondary">Link 4</Text>
            <Text type="secondary">Link 5</Text>
          </Space>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="my-2">
          <Typography>
            <Title level={5}>Socials</Title>
          </Typography>
          <Space direction="vertical">
            <Text type="secondary">Link 1</Text>
            <Text type="secondary">Link 2</Text>
            <Text type="secondary">Link 3</Text>
            <Text type="secondary">Link 4</Text>
            <Text type="secondary">Link 5</Text>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ margin: "2rem 0" }}>
          <Typography>
            <Text style={{ textAlign: "center" }}>
              ©2021 by Maliwaince. All rights reserved.
            </Text>
          </Typography>
        </Col>
      </Row>
    </Row>
  );
};

export default PageFooter;
