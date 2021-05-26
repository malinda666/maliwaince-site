import { Button, Card, Col, Row, Typography } from "antd";

import PropTypes from "prop-types";
import { useAppState } from "./AppProvider";

const { Text, Title } = Typography;

const StatCard = ({ type, title, value, icon, color, clickHandler }) => {
  const [state] = useAppState();
  let before = null,
    after = null;

  const cardIcon = (
    <Col>
      <Button
        size="large"
        type="primary"
        style={{
          backgroundColor: color,
          borderColor: color,
          borderRadius: "1rem",
        }}
        className={
          type !== "fill"
            ? `${state.direction === "rtl" ? "ml-4" : "mr-4"}`
            : null
        }
        onClick={clickHandler}
      >
        {icon}
      </Button>
    </Col>
  );

  if (icon) {
    type === "fill" ? (after = cardIcon) : (before = cardIcon);
  }

  return (
    <Card
      className="mb-4"
      style={type === "fill" ? { backgroundColor: color } : null}
    >
      <Row
        type="flex"
        align="middle"
        justify="start"
        style={{ maxWidth: "200px" }}
        wrap={false}
      >
        <Col>{before}</Col>
        <Col style={{ maxWidth: "125px" }}>
          <Title
            level={5}
            className={`mb-0 ${type === "fill" ? "text-white" : null}`}
            ellipsis
          >
            {value}
          </Title>
          <Text ellipsis className={type === "fill" ? "text-white-50" : null}>
            {title}
          </Text>
        </Col>
        <span className="mr-auto" />
      </Row>
    </Card>
  );
};

StatCard.propTypes = {
  type: PropTypes.oneOf(["fill"]),
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string,
};

export default StatCard;
