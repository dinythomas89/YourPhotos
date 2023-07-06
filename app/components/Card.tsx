import Image from "next/image";

interface CardProps {
  photo: {
    id: number;
    url: string;
  };
}

const Card = ({ photo }: CardProps) => {
  return (
    <>
      <Image
        src={photo.url}
        alt="the photo album of the user"
        width={200}
        height={200}
        className="border-4 border-gray-400 md:w-52 lg:w-60"
      />
    </>
  );
};

export default Card;
