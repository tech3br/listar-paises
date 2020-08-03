import React from "react";

interface SearchProps {
  value: string;
  onChange(): void;
  onClick(): void;
}

const Search = (props: SearchProps) => {

  return (
    <form className="search">
      <input
        value={props.value}
        onChange={props.onChange}
        type="text"
      />
      <input onClick={props.onClick} type="submit" value="Digite" />
    </form>
  );
};

export default Search;
