import { Row, Typography, Divider } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

const Banner = () => {
  return (
    <Row
      type="flex"
      align="middle"
      justify="start"
      className="px-3 mh-page"
      style={{ minHeight: "20vh" }}
    >
      <div style={{ margin: "4px 0", display: "block", width: "100%" }} />
      <Typography>
        <Text>
          Go to{" "}
          <Link href="/admin">
            <a>admin</a>
          </Link>{" "}
          page
        </Text>
      </Typography>
      <Divider style={{ margin: "8px 0" }} />
      <Typography>
        <div style={{ margin: "4px 0", display: "block", width: "100%" }} />
        <Title level={2}>Today's Cryptocurrency Prices by Market Cap</Title>
        <Paragraph type="secondary">
          The global crypto market cap is{" "}
          <Text strong type="success">
            {" "}
            $1.68T{" "}
          </Text>
          , a{" "}
          <Text strong type="danger">
            10.08%
          </Text>{" "}
          decrease over the last day. Read more
        </Paragraph>
      </Typography>
      <div style={{ margin: "4px 0", display: "block", width: "100%" }} />
    </Row>
  );
};

export default Banner;
