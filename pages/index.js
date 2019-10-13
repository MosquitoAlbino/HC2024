import React from "react";
import Link from "next/link";
import Layout from "../components/MyLayout";

const Index = () => (
  <Layout>
    <div className="home">
      <Link href="/clinic-history">
        <a>Historia clinica</a>
      </Link>
    </div>

    <style jsx>{`
      .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    `}</style>
  </Layout>
);

export default Index;
