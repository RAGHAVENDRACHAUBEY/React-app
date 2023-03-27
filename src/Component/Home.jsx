import React from "react";
import Header1 from "./Header1";
import Slider from "react-slick";
import { BsArrowRight, BsTruck } from "react-icons/bs";
import {TbPhonePlus } from "react-icons/tb";
import {GrSecure } from "react-icons/gr";
import Categories from "./Categories";
import { LatestProduct } from "./LatestProduct";
import Header from "./Header";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <Header/>
      {/* <Header1 /> */}
      <div className="banner" style={{ backgroundColor: "#33b1e8" }}>
        <div className="container">
          <Slider {...settings}>
            <div>
              <div className="banner-img">
                <div className="baner-text">
                  <div class="sl-anime slideshow__subtitle">
                    <span class="d-block">Mobile</span>
                    <span>Collection</span>
                  </div>
                  <div className="description">
                    Get Free Shipping on all orders over €99,00
                  </div>
                  <div className="shop-bu pt-4">
                    <button className="shop-no-bu">
                      Shop Now{" "}
                      <span style={{ paddingLeft: "8px", color: "white" }}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="ban-image">
                  <img
                    src="/Images/banner2-removebg-preview.jpg"
                    alt=""
                    style={{ width: "100%", height: "501px" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="banner-img">
                <div className="baner-text">
                  <div class="sl-anime slideshow__subtitle">
                    <span class="d-block">Mobile</span>
                    <span>Collection</span>
                  </div>
                  <div className="description">
                    Get Free Shipping on all orders over €99,00
                  </div>
                  <div className="shop-bu pt-4">
                    <button className="shop-no-bu">
                      Shop Now{" "}
                      <span style={{ paddingLeft: "8px", color: "white" }}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="ban-image">
                  <img
                    src="/Images/banner-1-removebg-preview.jpg"
                    alt=""
                    style={{ width: "100%", height: "501px" }}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* ============== */}
      <div className="ship ">
        <div className="container shipping">
          <div className="row">
            <div className="col-md-4 col-sm-4">
            <div className="customer">
              <div className="icon-0">
                <BsTruck style={{fontSize:"35px"}}/>
              </div>
              <div className="customer-text">
                <div style={{fontWeight:"600"}}>Free Shipping & Return</div>
                <div style={{color:"gray"}}>Free shipping on orders over $99</div>
              </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div className="customer">
              <div className="icon-0">
                <TbPhonePlus style={{fontSize:"35px"}}/>
              </div>
              <div className="customer-text">
                <div style={{fontWeight:"600"}}>Customer Support 24/7</div>
                <div style={{color:"gray"}}>Instant access to perfect support</div>
              </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div className="customer">
              <div className="icon-0">
                <GrSecure style={{fontSize:"35px"}}/>
              </div>
              <div className="customer-text">
                <div style={{fontWeight:"600"}}>100% Secure Payment</div>
                <div style={{color:"gray"}}>We ensure secure payment!</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== */}
      <Categories/>
      <LatestProduct/>
    </>
  );
}

export default Home;
