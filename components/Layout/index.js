import { useState } from "react";
import Link from "next/link";
import { Container, Inner } from "../styles/Page";
import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Drawer,
  Divider,
  Button,
} from "antd";
import { BiMenu } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa";
import { IconContext } from "react-icons";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const AppLayout = ({ children }) => {
  const [menuOpen, setmenuOpen] = useState(false);

  const openMenu = () => setmenuOpen(true);
  const closeMenu = () => setmenuOpen(false);
  return (
    <>
      <Header
        style={{
          position: "relative",
          flexDirection: "row",
          flexWrap: "nowrap",
          display: "flex",
          alignItems: "center",
          minHeight: "60px",
          zIndex: "11",
          padding: "0 .3rem",
          boxShadow:
            "0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02)",
        }}
      >
        <Menu
          mode="horizontal"
          style={{
            width: "100%",
            position: "relative",
            flexDirection: "row",
            flexWrap: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Menu.Item>
            <span className="brand text-black">
              <FaBitcoin />
              <strong>CryptoTracker</strong>
            </span>
          </Menu.Item>
          <span className="mx-auto" />
          <Menu.Item onClick={() => openMenu()}>
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <BiMenu />
            </IconContext.Provider>
          </Menu.Item>
        </Menu>
      </Header>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={closeMenu}
        visible={menuOpen}
        width={384}
        footer={
          <div style={{ paddingBottom: "4rem" }}>
            <Typography>
              <Text strong>Email :</Text>
              <Text type="secondary">example@gmail.com</Text>
            </Typography>
            <Typography>
              <Text strong>Telephone :</Text>
              <Text type="secondary">+9144 8843 403</Text>
            </Typography>
          </div>
        }
      >
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
        <p>
          <Link href="/admin">
            <a>Dashboard</a>
          </Link>
        </p>
        <p>
          <Link href="">
            <a>Pricing</a>
          </Link>
        </p>
        <Divider />
        <Button style={{ marginRight: 8 }}>
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Button type="primary">
          <Link href="/signin">Log In</Link>
        </Button>
        <Divider />
      </Drawer>
      <Container>
        <Content style={{ padding: "0 0" }}>
          <Breadcrumb style={{ margin: "16px 0", padding: "0 1rem" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Inner>{children}</Inner>
        </Content>
      </Container>
    </>
  );
};

export default AppLayout;
