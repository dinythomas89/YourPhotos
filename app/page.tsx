import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crawling and Indexing</title>
        {/* instead of example.com use the domain you want to consider for ranking */}
        <link
          rel="canonical"
          href="https://example.com/users"
          key="canonical"
        />
        <meta name="robots" content="all" />
        <meta name="google" content="all" />
      </Head>
      <h1>Home Page</h1>
    </div>
  );
}
