import React from "react";

function Categories() {
  return (
    <>
      <div className="categorie">
        <div className="container">
          <div className="pro-cate">
            <h3>Our Categories</h3>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 ">
                <div className="brand">
                  <a href="/product">
                    <img src="/Images/apple-iphone.webp" alt="" className="brand-iphone" />
               </a> </div>

            </div>
            <div className="col-md-4 col-sm-4">
            <div className="brand">
                    <img src="/Images/watch.webp" alt="" className="brand-iphone" />
                </div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div className="brand">
                    <img src="/Images/headphone-1.jpg" alt="" className="brand-iphone" />
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* ADD */}
      <div className="categorie">
        <div className="container">
          <div className="">
            <img src="/Product/95.png" alt="" style={{width:"100%"}} />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Categories;
