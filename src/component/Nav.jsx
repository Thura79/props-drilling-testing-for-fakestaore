import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ items, setItems }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {items}, [search, setSearch])

  const formHandle = (e) => {
    e.preventDefault();
    const filterdata = items.filter((i) =>
      i.title.toLowerCase().includes(search)
    );
    console.log(filterdata);
    setItems(filterdata);
    setSearch('')
  };
  return (
    <div className=" border shadow rounded p-5">
      <div className="flex items-center justify-between ">
        <Link to={"/"}>
          <h1 className=" text-2xl md:text-4xl lg:text-6xl ">Shotify</h1>
        </Link>
        <form onSubmit={formHandle}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className=" outline-none border rounded px-2 py-1 md:px-3 md:py-2 "
          />
        </form>
      </div>
    </div>
  );
};

export default Nav;
