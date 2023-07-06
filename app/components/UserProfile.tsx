"use client";

import Image from "next/image";
import Link from "next/link";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import "animate.css";
import userImage from "@/public/Images/placeholder-img.jpg";
import { useFollowStore } from "../store/followButtonStore";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  id: number;
}
interface UserDataProps {
  userData: UserData;
}

const UserProfile = ({ userData }: UserDataProps) => {
  const [error, setError] = useState("");
  useEffect(() => {
    if (isNaN(userData.id)) {
      setError("Invalid userID. Please provide a valid number");
    }
  }, [userData.id]);

  const isFollowed = useFollowStore((state) =>
    state.followedUsers.includes(userData.id)
  );
  const toggleFollow = useFollowStore((state) => state.toggleFollow);

  console.log("Follow state: ", isFollowed);

  const handleFollowButton = (userId: number) => {
    toggleFollow(userId);
  };

  const width = Math.min(300, userImage.width);
  const height = (width / userImage.width) * userImage.height;

  return (
    <div className="flex flex-col items-center justify-center bg-[#FEFAF5] dark:bg-black py-10">
      <Image
        src={userImage}
        alt="user image"
        width={width}
        height={height}
        priority
        className="rounded drop-shadow-md animate__animated animate__fadeInTopRight"
      />
      {error ? (
        <p className="py-3">{error}</p>
      ) : (
        <h1 className="py-3 tracking-wide animate__animated animate__fadeIn animate__delay-1s">
          {userData.name}
        </h1>
      )}
      <Link
        href="/"
        className="underline decoration-1 text-purple-600 lg:text-lg py-3"
      >
        View Website
      </Link>
      <button onClick={() => handleFollowButton(userData.id)}>
        {!isFollowed ? (
          <span className="flex items-center justify-center gap-2">
            <BiSolidUserPlus fontSize={22} />
            Follow
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Followed
            <FaRegHeart color="red" fontSize={22} />
          </span>
        )}
      </button>
    </div>
  );
};

export default UserProfile;
