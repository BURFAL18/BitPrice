import Navbar from "./Navbar";
import Footer from './Footer';
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>BitPrice</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/materia/bootstrap.min.css"
      />
    </Head>
    <Navbar />

    <div className="container">{props.children}</div>
    <Footer/>
  </div>
);

export default Layout;
