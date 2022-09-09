import React, { useContext } from "react";

import { Layout, Menu } from "antd"; // , Switch
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  // Outlet,
  // Switch,
  // Redirect,
} from "react-router-dom";

import { Ingresar } from "./Ingresar";
import { Cola } from "./Cola";
import { CrearTicket } from "./CrearTicket";
import { Escritorio } from "./Escritorio";
import { UiContext } from "../context/UiContext";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { ocultarMenu } = useContext(UiContext);

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
          <div className="logo" />
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/ingresar">Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/cola">Cola de tickets</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crear">Crear tickets</Link>
            </Menu.Item>
          </Menu> */}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                // label: "Ingresar",
                // label: <Link to="/ingresar">Ingresar</Link>,
                label: ingresar(),
              },
              // <Link to ="/ingresar">Ingresar</Link>
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                // label: "Cola",
                // label: <Link to="/cola">Cola de tickets</Link>,
                label: cola_tickets(),
              },
              // <Link to ="/cola">Cola de tickets</Link>
              {
                key: "3",
                icon: <UploadOutlined />,
                // label: "Crear ticket",
                // label: <Link to="/crear">Crear tickets</Link>,
                label: crear_tickets(),
              },
              // <Link to="/crear">Crear tickets</Link>,
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {/* <Switch> */}
            {/* <Outlet> */}
            {/* <Route path="/ingresar" component={Ingresar} /> */}
            <Route path="/ingresar" element={<Ingresar />} />
            {/* <Route path="/cola" component={Cola} /> */}
            <Route path="/cola" element={<Cola />} />
            {/* <Route path="/crear" component={CrearTicket} /> */}
            <Route path="/crear" element={<CrearTicket />} />

            {/* <Route path="/escritorio" component={Escritorio} /> */}
            <Route path="/escritorio" element={<Escritorio />} />

            {/* <Redirect to="ingresar" /> */}

            <Route path="*" element={<Navigate to="/ingresar" replace />} />
            {/* </Outlet> */}
            {/* </Switch> */}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

const ingresar = () => {
  return <Link to="/ingresar">Ingresar</Link>;
};
const cola_tickets = () => {
  return <Link to="/cola">Cola de tickets</Link>;
};
const crear_tickets = () => {
  return <Link to="/crear">Crear tickets</Link>;
};

//.................................HASTA AQUI...............................

// import { Layout, Menu } from "antd";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Router,
//   // Redirect,
//   Link,
//   Navigate,
// } from "react-router-dom";

// import { Ingresar } from "./Ingresar";
// import { Cola } from "./Cola";
// import { CrearTicket } from "./CrearTicket";
// import { Escritorio } from "./Escritorio";

// const { Sider, Content } = Layout;

// export const RouterPage = () => {
//   return (
//     <Router>
//       <Layout>
//         <Sider trigger={null} collapsible collapsed={collapsed}>
//           <div className="logo" />
//           <Menu
//             theme="dark"
//             mode="inline"
//             defaultSelectedKeys={["1"]}
//             items={[
//               {
//                 key: "1",
//                 icon: <UserOutlined />,
//                 label: "nav 1",
//               },
//               {
//                 key: "2",
//                 icon: <VideoCameraOutlined />,
//                 label: "nav 2",
//               },
//               {
//                 key: "3",
//                 icon: <UploadOutlined />,
//                 label: "nav 3",
//               },
//             ]}
//           />
//         </Sider>
//         <Layout className="site-layout">
//           <Header
//             className="site-layout-background"
//             style={{
//               padding: 0,
//             }}
//           >
//             {React.createElement(
//               collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
//               {
//                 className: "trigger",
//                 onClick: () => setCollapsed(!collapsed),
//               }
//             )}
//           </Header>
//           <Content
//             className="site-layout-background"
//             style={{
//               margin: "24px 16px",
//               padding: 24,
//               minHeight: 280,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     </Router>
//   );
// };

// <Layout style={{ height: "100vh" }}>
//   <Sider>
//     <div className="logo" />
//     <Menu
//       theme="dark"
//       mode="inline"
//       defaultSelectedKeys={["1"]}
//       items={[
//         {
//           key: "1",
//           icon: <UserOutlined />,
//           label: <Link to="/ingresar">Ingresar</Link>,
//         },
//         {
//           key: "2",
//           icon: <VideoCameraOutlined />,
//           label: <Link to="/cola">Cola de tickets</Link>,
//         },
//         {
//           key: "3",
//           icon: <UploadOutlined />,
//           label: <Link to="/crear">Crear tickets</Link>,
//         },
//       ]}
//     />
//     {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
//       <Menu.Item key="1" icon={<UserOutlined />}>
//         <Link to="/ingresar">Ingresar</Link>
//       </Menu.Item>
//       <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//         <Link to="/cola">Cola de tickets</Link>
//       </Menu.Item>
//       <Menu.Item key="3" icon={<UploadOutlined />}>
//         <Link to="/crear">Crear tickets</Link>
//       </Menu.Item>
//     </Menu> */}
//   </Sider>
//   <Layout className="site-layout">
//     <Content
//       className="site-layout-background"
//       style={{
//         margin: "24px 16px",
//         padding: 24,
//         minHeight: 280,
//       }}
//     >
//       {/* <Routes> */}
//       <Route path="/ingresar" element={<Ingresar />} />
//       <Route path="/cola" element={<Cola />} />
//       <Route path="/crear" element={<CrearTicket />} />

//       <Route path="/escritorio" element={<Escritorio />} />

//       {/* <Redirect to="/ingresar" /> */}

//       {/* <Route path="*" to="/ingresar" replace /> */}

//       {/* <Route path="*" element={<Navigate to="/ingresar" replace />} /> */}
//       <Route path="*" element={<Navigate to="/ingresar" replace />} />
//       {/* </Routes> */}
//     </Content>
//   </Layout>
// </Layout>;

// ................................AQUI................................

// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu } from "antd";
// import React, { useState } from "react";
// const { Header, Sider, Content } = Layout;

// export const RouterPage = () => {
//   return (
//     <Layout>
//       <Sider
//       // trigger={null} collapsible collapsed={collapsed}
//       >
//         <div className="logo" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={["1"]}
//           items={[
//             {
//               key: "1",
//               icon: <UserOutlined />,
//               label: "nav 1",
//             },
//             {
//               key: "2",
//               icon: <VideoCameraOutlined />,
//               label: "nav 2",
//             },
//             {
//               key: "3",
//               icon: <UploadOutlined />,
//               label: "nav 3",
//             },
//           ]}
//         />
//       </Sider>
//       <Layout className="site-layout">
//         {/* <Header
//       className="site-layout-background"
//       style={{
//         padding: 0,
//       }}
//     >
//       {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//         className: "trigger",
//         onClick: () => setCollapsed(!collapsed),
//       })}
//     </Header> */}
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 280,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// ................................AQUI................................

// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu } from "antd";
// import React, { useState } from "react";

// const { Header, Sider, Content } = Layout;

// export const RouterPage=()=>{
//   return <Layout>
//   <Sider
//   // trigger={null} collapsible collapsed={collapsed}
//   >
//     <div className="logo" />
//     <Menu
//       theme="dark"
//       mode="inline"
//       defaultSelectedKeys={["1"]}
//       items={[
//         {
//           key: "1",
//           icon: <UserOutlined />,
//           label: "nav 1",
//         },
//         {
//           key: "2",
//           icon: <VideoCameraOutlined />,
//           label: "nav 2",
//         },
//         {
//           key: "3",
//           icon: <UploadOutlined />,
//           label: "nav 3",
//         },
//       ]}
//     />
//   </Sider>
//   {/* <Layout className="site-layout">
//     <Header className="site-layout-background" style={{ padding: 0 }}>
//       {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//         className: "trigger",
//         onClick: () => setCollapsed(!collapsed),
//       })}
//     </Header> */}
//     <Content
//       className="site-layout-background"
//       style={{
//         margin: "24px 16px",
//         padding: 24,
//         minHeight: 280,
//       }}
//     >
//       Content
//     </Content>
//   </Layout>
// </Layout>;
// }
