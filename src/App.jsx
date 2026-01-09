import React from "react";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";

function App() {
  return (
    <Layout sidebar={<Sidebar />}>
      <Terminal />
    </Layout>
  );
}

export default App;
