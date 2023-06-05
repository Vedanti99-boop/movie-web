import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setQuery ,isError} = useGlobalContext();
  return (
    <section>
      <div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col"></div>
            <div>
                <p className="text-center">{isError.show && isError.msg}</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
