"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1>Error 😵‍💫</h1>
      <p>Something went wrong</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
