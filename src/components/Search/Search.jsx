import React from "react";

import { Input, Button } from "../styled";

const Search = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input type="search" onChange={onChange} name="city" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Search;
