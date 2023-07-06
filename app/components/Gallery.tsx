"use client";
import { useState } from "react";
import Card from "./Card";

interface UserPhoto {
  id: number;
  url: string;
}

interface GalleryProps {
  userPhotos: UserPhoto[];
}

const Gallery = ({ userPhotos }: GalleryProps) => {
  const imagePerLoad = 8;
  const [next, setNext] = useState(imagePerLoad);

  const handleMoreImage = () => {
    setNext(next + imagePerLoad);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10 px-2 bg-[#FEFAF5] dark:bg-black">
      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 md:px-4 lg:px-8">
        {userPhotos?.slice(0, next)?.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
      {next < userPhotos?.length ? (
        <button onClick={handleMoreImage}>View More</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gallery;
