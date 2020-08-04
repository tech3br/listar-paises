
import React from "react";

interface SearchProps {
  value?: string;
  onChange(): string;
  placeholder: string;
}

const Search = (props: SearchProps) => {
  return (
    <form className="search">

    </form>
  );
};

export default Search;
