import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div
      onMouseEnter={() => mover(count)}
      className="w-full py-20 h-[23rem]"
    >
      <div className="max-w-screen-xl mx-auto px-20 flex items-start justify-between">
        <h1 className="text-6xl capitalize font-medium">
          {val.title}
        </h1>

        <div className="w-1/3">
          <p className="mb-10">
            {val.description}
          </p>

          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;