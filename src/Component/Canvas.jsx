import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

import { useEffect } from "react";

function Canvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="" onClick={handleShow}>
        <HiOutlineShoppingBag
          style={{ fontSize: "28px", color: "white", cursor: "pointer" }}
        />
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart-po">
            <div className="product-cart pt-2">
              <div className="cart-img" style={{ width: "45%" }}>
                <a href="#">
                  <img src="" alt="cart-img" style={{ width: "70%" }} />
                </a>
              </div>
              <div className="" style={{ width: "45%" }}>
                <div>title...</div>
                <div>Quantity :</div>
                <div>Price: ₹ </div>
              </div>
              <div className="detail-rem">
                <AiOutlineDelete />
              </div>
            </div>

            <div
              style={{
                fontSize: "21px",
                borderTop: "1px solid gray",
                padding: "12px",
              }}
            >
              SubTotal : <span>₹ </span>
            </div>
          </div>
          {/* ) : (
            <>
              <div className="text-center">
                <h5>Your cart is currently empty.</h5>
              </div>
            </>
          )} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Canvas;
