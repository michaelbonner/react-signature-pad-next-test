import Head from "next/head";
import ReactSignatureCanvas from "react-signature-canvas";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Signature Pad Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ReactSignatureCanvas
          penColor={"#1e293b"}
          backgroundColor={"#f7fafc"}
          canvasProps={{ width: 400, height: 200, className: "border" }}
          minWidth={1}
          maxWidth={4}
        />
      </main>
    </div>
  );
}
