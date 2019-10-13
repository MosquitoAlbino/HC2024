import Head from "next/head";

const Layout = props => (
  <div className="container">
    <Head>
      <title>Historia clinica</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
    </Head>

    {props.children}

    <style jsx>{`
      .container {
        margin: 20;
        padding: 20;
        border: "1px solid #DDD";
      }
    `}</style>

    <style jsx global>{`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      html,
      body {
        font-family: helvetica, sans-serif;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        padding: 0 0.5rem;
      }
    `}</style>
  </div>
);

export default Layout;
