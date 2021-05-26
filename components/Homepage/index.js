import { Banner, PriceTable, Subscriber, PageFooter } from "../homeComponents";
import { Col, Row } from "antd";

const Homepage = () => {
  return (
    <div>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={24} md={22}>
          <Banner />
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={24} md={22}>
          <PriceTable />
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={24} md={22}>
          <Subscriber />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
