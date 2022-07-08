import Image from "next/image";
import React from "react";

interface msgProps {
  message: string;
}

export const Header = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-2">
      <img
        className="mt-8 object-none h-96 w-screen"
        src="cover.jpg"
        alt="Man looking at item at a store"
      />
      <h1
        className="text-2xl mt-8 md:text-4xl 
        font-bold font-redhat text-rose-500 text-center mx-auto"
      >
        {message ? message : "WE'RE LAUNCHING SOON"}
      </h1>
      <p className="mt-3 md:mt-8 font-redhat text-rose-500 text-center mx-auto text-xl md:text-2xl">
        🎉Congratulation Kai Lun and Hui Bao🎉
      </p>
    </header>
  );
};
