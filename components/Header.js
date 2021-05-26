import {
  Avatar,
  Badge,
  Layout,
  List,
  Menu,
  Drawer,
  Button,
  Divider,
  Typography,
} from "antd";
import {
  BellTwoTone,
  CaretDownOutlined,
  InteractionTwoTone,
  PlaySquareTwoTone,
  SettingTwoTone,
  MenuOutlined,
} from "@ant-design/icons";
import DashHeader, { Notification } from "./styles/Header";

import Link from "next/link";
import { withRouter } from "next/router";
import MockNotifications from "../demos/mock/notifications";
import { useAppState } from "./shared/AppProvider";
import { useState } from "react";

const { SubMenu } = Menu;
const { Header } = Layout;
const { Text, Title } = Typography;

const NonDashboardRoutes = [
  "/signin",
  "/signup",
  "/forgot",
  "/lockscreen",
  "/_error",
  "/",
];

const MainHeader = ({ router }) => {
  const [state, dispatch] = useAppState();
  const [notifications] = useState(MockNotifications);
  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);
  const [menuOpen, setmenuOpen] = useState(false);

  const openMenu = () => setmenuOpen(true);
  const closeMenu = () => setmenuOpen(false);
  return (
    <DashHeader>
      <Header>
        <Menu mode="horizontal">
          {state.mobile && !isNotDashboard && (
            <Menu.Item>
              <a
                onClick={() => dispatch({ type: "mobileDrawer" })}
                className="trigger"
              >
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 384.97 384.97"
                  style={{ enableBackground: "new 0 0 384.97 384.97" }}
                  xmlSpace="preserve"
                >
                  <g id="Menu_1_">
                    <path
                      d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                      c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"
                    />
                    <path
                      d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                      S379.58,180.455,372.939,180.455z"
                    />
                    <path
                      d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                      c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"
                    />
                  </g>
                </svg>
              </a>
            </Menu.Item>
          )}
          <Menu.Item>
            <Link href="/">
              <a className="brand">
                <PlaySquareTwoTone style={{ fontSize: "20px" }} />
                <strong className="text-black">{state.name}</strong>
              </a>
            </Link>
          </Menu.Item>

          {/* 
          {!state.mobile && (
            <Menu.Item>
              <Link href="/apps/messages">
                <a>Messages</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="/apps/social">
                <a>Social</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="/apps/chat">
                <a>Chat</a>
              </Link>
            </Menu.Item>
          )} */}

          {/* {state.mobile && (
            <SubMenu title={<CaretDownOutlined style={{ fontSize: '12px' }} />}>
              <Menu.Item>Calendar</Menu.Item>
              <Menu.Item>Messages</Menu.Item>
              <Menu.Item>Social</Menu.Item>
              <Menu.Item>Chat</Menu.Item>
            </SubMenu>
          )} */}

          <span className="mr-auto" />

          {!state.mobile && (
            <Menu.Item onClick={() => dispatch({ type: "fullscreen" })}>
              <InteractionTwoTone style={{ fontSize: "20px" }} />
            </Menu.Item>
          )}
          {!isNotDashboard && (
            <Menu.Item onClick={() => dispatch({ type: "options" })}>
              <SettingTwoTone style={{ fontSize: "20px" }} />
            </Menu.Item>
          )}
          {isNotDashboard && (
            <Menu.Item onClick={() => openMenu()}>
              <MenuOutlined style={{ fontSize: "20px", color: "#007bff" }} />
            </Menu.Item>
          )}

          {!isNotDashboard && (
            <SubMenu
              title={
                <Badge count={5}>
                  <span className="submenu-title-wrapper">
                    <BellTwoTone style={{ fontSize: "20px" }} />
                  </span>
                </Badge>
              }
            >
              <Menu.Item
                className="p-0 bg-transparent"
                style={{ height: "auto" }}
              >
                <List
                  className="header-notifications"
                  itemLayout="horizontal"
                  dataSource={notifications}
                  footer={<div>5 Notifications</div>}
                  renderItem={(item) => (
                    <Notification>
                      <List.Item>
                        <List.Item.Meta
                          avatar={item.avatar}
                          title={<a href="/">{item.title}</a>}
                          description={<small>{item.description}</small>}
                        />
                      </List.Item>
                    </Notification>
                  )}
                />
              </Menu.Item>
            </SubMenu>
          )}

          {!isNotDashboard && (
            <SubMenu title={<Avatar src="/images/avatar.jpg" />}>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Notifications</Menu.Item>
              <Menu.Divider />
              <Menu.Item>
                <Link href="//one-readme.fusepx.com">
                  <a>Help?</a>
                </Link>
              </Menu.Item>
              <Menu.Item>Signout</Menu.Item>
            </SubMenu>
          )}
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
        <Button style={{ marginRight: 8 }} shape="round">
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Button type="primary" shape="round">
          <Link href="/signin">Sign In</Link>
        </Button>
        <Divider />
      </Drawer>
    </DashHeader>
  );
};

export default withRouter(MainHeader);
