import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BiPlus, BiMinus } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD,DLT,REMOVE } from "./Redux/action";

const SingalProduct = () => {
  const { id } = useParams();
 
  const dispatch = useDispatch();

  // const history = useHistory();
  
  

 // add data
  

 const addToCart = (el) => {
  dispatch(ADD(el));
};

// Delete

const dlt = (id)=>{
  dispatch(DLT(id));
  window.location.assign("/product");
}


// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}


  const [sproducts, setproducts] = useState({});
  // console.log(sproducts, "fojeihnk m");

  async function getUsers() {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      if (response.status === 200) {
        setproducts(response.data);
      } else {
        alert("Something went worng");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  
  }, []);
  return (
    <>
      <Header />
      <div className="singals-details">
        <div className="container">
          <div className="singal-0">
            <div className="row">
              <div className="col-md-6 col-sm-6">

                <div className="singal-img">
                 <div >
                 <img
                    src={sproducts.image}
                    alt="singal-image"
                    style={{ width: "100%" }}
                  />
                 </div>
                
                
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="dtail-0">
                  <div className="pro-de-0">
                    <h2>{sproducts.title}</h2>
                    <p
                      style={{ textTransform: "capitalize", fontSize: " 21px" }}
                    >
                      {sproducts.category}
                    </p>
                  </div>
                  <div className="namo-product">
                    Price : $ {sproducts.price} <span> $ 8,999</span>
                  </div>
                  <div className="namo-product">
                    Rating : {sproducts.rating && sproducts.rating.rate}{" "}
                    <b>
                      <AiFillStar style={{ color: "#FFDF00" }} />
                    </b>
                  </div>

                  <div className="pt-3 pb-4">
                    <h4 className="disc">PRODUCT DESCRIPTION</h4>
                    <p>{sproducts.description}</p>
                  </div>
                  <div className="namo-product">
                    Total : $ {sproducts.price*sproducts.qnty}
                  </div>
                  <div className="free">
                    <div className="free-0">
                      <div className="incree" onClick={() => addToCart(sproducts)}>
                        <BiPlus />
                      </div>
                      <span>{sproducts.qnty}</span>
                      <div className="dicre" onClick={setproducts.qnty <=1 ? ()=>dlt(sproducts.id) : ()=>remove(sproducts)}>
                        <BiMinus />
                      </div>
                    </div>
                    <div className="free-1">
                      <button
                        className="fr-pro-9"
                         onClick={() => addToCart(sproducts)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingalProduct;
