import Head from "next/head";
import AdminPage from "../components/AdminPage";

const Admin = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/react-vis.css" />
        <title>Admin</title>
      </Head>
      <AdminPage />
    </>
  );
};

export default Admin;
