import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "../../Context/Context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { userInput } = useGlobalContext();
  const result = useQuery({
    queryKey: ["images", userInput],
    queryFn: async () => {
      const res = await axios(`${url}&query=${userInput}`);
      return res.data;
    },
  });

  const getImages = result.data?.results?.map((item) => {
    const imgUrl = item?.urls?.regular;
    return (
      <div
        key={item.id}
        className="flex justify-center items-center w-full h-full 
       "
      >
        <img
          src={imgUrl}
          alt={item.alt_description}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    );
  });
  return (
    <>
      <div className="grid max-w-[560px] sm:max-w-[620px] md:max-w-[820px] lg:max-w-[960px] gap-3 sm:grid-cols-2 md:grid-cols-3 mx-auto mt-4 md:mt-8">
        {getImages}
      </div>
    </>
  );
};

export default Gallery;
