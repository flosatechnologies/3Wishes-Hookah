import React from "react";
import { Button, Image } from "react-bootstrap";
import "../css/ProductAdd.css";

const ProductAdd = () => {
  return (
    <div className="  main text-center">
      <div className="pt-5 ">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className=" pt-5 ">
            <h4 className="fw-bold pt-5  titles">SPECIAL SUBSCRIPTION PACKS</h4>
            <div className="px-5">
              <h2 className="p-2 title1 pt-3 ">fOR YOU</h2>
            </div>
            <Button variant="dark" href="#subscriptionTextId">
              SHOP NOW
            </Button>{" "}
          </div>
          <div className="py-3">
            <Image
              src="https://hakunasupply.com/wp-content/uploads/2021/06/New-Bundle-Design.png"
              className="img-fluid w-60  pl-4 img"
              alt="New Bundle Design"
              loading="lazy"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
