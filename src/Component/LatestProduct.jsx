import React from "react";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";


export const LatestProduct = () => {

  return (
    <>
      <div className="categorie">
        <div className="container">
          <div className="pro-cate">
            <h3>Latest Product</h3>
          </div>
          <div className="la-pro">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="/Images/product-1.jpg"
                    className="brand-iphone tit-0"
                    alt="Card Back"
                    style={{ height: "300px" }}
                  />
                  <img
                    src="/Images/apple-iphone.webp"
                    className="img-top"
                    alt="Card Front"
                    style={{ height: "300px" }}
                  />
                  {/* <div class="overlay">QUICK VIEW</div>
                  <div class="overlay-0">
                    <div className="icon-pro">
                      <div className="icon-pro-09">
                        <AiOutlineShopping />
                      </div>
                      <div className="icon-pro-10 mt-2">
                        <AiOutlineHeart />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="/Images/headphone-1.jpg"
                    className="brand-iphone tit-0"
                    alt="Card Back"
                    style={{ height: "300px" }}
                  />
                  <img
                    src="/Images/headphone-2.webp"
                    className="img-top"
                    alt="Card Front"
                    style={{ height: "300px" }}
                  />
                  {/* <div class="overlay">QUICK VIEW</div>
                  <div class="overlay-0">
                    <div className="icon-pro">
                      <div className="icon-pro-09">
                        <AiOutlineShopping />
                      </div>
                      <div className="icon-pro-10 mt-2">
                        <AiOutlineHeart />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="/Images/watch-2.jpg"
                    className="brand-iphone tit-0"
                    alt="Card Back"
                    style={{ height: "300px" }}
                  />
                  <img
                    src="/Images/watch-3.jpg"
                    className="img-top"
                    alt="Card Front"
                    style={{ height: "300px" }}
                  />
                  {/* <div class="overlay">QUICK VIEW</div>
                  <div class="overlay-0">
                    <div className="icon-pro">
                      <div className="icon-pro-09">
                        <AiOutlineShopping />
                      </div>
                      <div className="icon-pro-10 mt-2">
                        <AiOutlineHeart />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="/Images/product-1.jpg"
                    className="brand-iphone tit-0"
                    alt="Card Back"
                    style={{ height: "300px" }}
                  />
                  <img
                    src="/Images/apple-iphone.webp"
                    className="img-top"
                    alt="Card Front"
                    style={{ height: "300px" }}
                  />
                  {/* <div class="overlay">QUICK VIEW</div>
                  <div class="overlay-0">
                    <div className="icon-pro">
                      <div className="icon-pro-09">
                        <AiOutlineShopping />
                      </div>
                      <div className="icon-pro-10 mt-2">
                        <AiOutlineHeart />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
