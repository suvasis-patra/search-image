import React, { useState } from "react";
import { useGlobalContext } from "../../Context/Context";
// api_key = zmRc3ARawkfqktCXr_TsXwvUzrDZ37LBFOaU2JZl2fg
const SearchForm = () => {
  const { setUserInput } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUserInput(inputValue);
  };
  return (
    <div>
      <form className="flex justify-center gap-2 mt-4" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="cat"
          name="search"
          className="border-2 border-black w-2/5 p-2 outline-none rounded-md "
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-500 text-yellow-50 py-2 px-4 rounded-sm hover:bg-indigo-800"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
