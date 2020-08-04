import { TextField } from "@material-ui/core";
import React from "react";

interface SearchProps {
  value?: string;
  onChange(): void;
  placeholder: string;
}

const Search = (props: SearchProps) => {
  return (
    <form className="search">
      <TextField
        id="standard-basic"
        label="Pesquisar"
        name="area"
        value={props.value}
        onChange={props.onChange}
        type="text"
        placeholder={props.placeholder}
      />
    </form>
  );
};

export default Search;
