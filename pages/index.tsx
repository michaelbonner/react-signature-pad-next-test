import Head from "next/head";
import SignatureCanvas from "react-signature-canvas";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Signature Pad Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          margin: "auto",
          maxWidth: "600px",
          padding: "20px",
        }}
      >
        <h1>React Signature Pad Test</h1>
        <SignatureCanvas
          penColor={"#1e293b"}
          backgroundColor={"#f7fafc"}
          canvasProps={{ width: 400, height: 200, className: "border" }}
          minWidth={1}
          maxWidth={4}
        />
        <p>
          Use the pad above to draw a signature. See the weird artifacts that
          show up.
        </p>
      </main>
    </div>
  );
}
