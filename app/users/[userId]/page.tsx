import Head from "next/head";
import { Suspense } from "react";
import Gallery from "@/app/components/Gallery";
import Navbar from "@/app/components/Navbar";
import UserProfile from "@/app/components/UserProfile";
import Loading from "@/app/loading";

async function getUser(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  return res.json();
}

async function getUserPhotos(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${userId}/photos`,
    { cache: "no-store" }
  );
  return res.json();
}

const User = async ({ params: { userId } }: { params: { userId: number } }) => {
  const userData = await getUser(userId);
  const userPhotos = await getUserPhotos(1);
  const [user, photos] = await Promise.all([userData, userPhotos]);

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
      <Navbar />
      <Suspense fallback={<Loading />}>
        <UserProfile userData={user} />
        <Gallery userPhotos={photos} />
      </Suspense>
    </div>
  );
};

export default User;
