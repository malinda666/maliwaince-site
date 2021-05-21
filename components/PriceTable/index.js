import { Row, Tabs, Button, Space, Table } from "antd";
import { table1, table1Cols } from "../../lib/tableContent";

const TabPane = Tabs.TabPane;
const PriceTable = () => {
  const operations = (
    <Space>
      <Button>Extra Action</Button>
      <Button>Extra 2</Button>
    </Space>
  );
  return (
    <Row
      type="flex"
      align="start"
      justify="start"
      className="px-3 mh-page my-4 bg-white"
    >
      <Tabs
        defaultActiveKey="1"
        style={{ height: "100%" }}
        tabBarExtraContent={operations}
      >
        <TabPane tab="Cryptocurrencies" key="1">
          <Table columns={table1Cols} dataSource={table1} />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          Content of tab 4
        </TabPane>
        <TabPane tab="Tab 5" key="5">
          Content of tab 5
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          Content of tab 6
        </TabPane>
        <TabPane tab="Tab 7" key="7">
          Content of tab 7
        </TabPane>
        <TabPane tab="Tab 8" key="8">
          Content of tab 8
        </TabPane>
        <TabPane tab="Tab 9" key="9">
          Content of tab 9
        </TabPane>
        <TabPane tab="Tab 10" key="10">
          Content of tab 10
        </TabPane>
        <TabPane tab="Tab 11" key="11">
          Content of tab 11
        </TabPane>
      </Tabs>
    </Row>
  );
};

export default PriceTable;
