import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>Hello, this is home</h1>
    </div>
  );
}
