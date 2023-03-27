import React, { useEffect, useState } from "react";
import Header from "./Header";
import { GrPowerReset } from "react-icons/gr";
import Spinner from "react-bootstrap/Spinner";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD } from "./Redux/action";


const Product = () => {
  //Cart
  const dispatch = useDispatch();
  const addToCart = (el) => {
    dispatch(ADD(el));
  };

  function valuetext(value) {
    setprice(value);
    return `${value}°C`;
  }
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(2000);
  const [price, setprice] = useState(2000);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    getProduct();
    getUser();
  }, []);

  // api
  const [product, setproduct] = useState([]);
  const [items, setitems] = useState([]);
  const [item1, setitem1] = useState([]);

  // console.log(items)
  // console.log(product);
  const getProduct = async () => {
    setLoading(true);
    const config = {
      url: "/products",
      method: "get",
      baseURL: "https://fakestoreapi.com",
      headers: { "content-type": "application/json" },
    };
    try {
      const result = await axios(config);

      if (result.status === 200) {
        setproduct(result.data);
        setLoading(false);
      } else {
        alert("Something went worng");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // categorie
  async function getUser() {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      if (response.status === 200) {
        setitems(response.data);
      } else {
        alert("Something went worng");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  // rating filter

  const [minimum, setminimum] = useState(0);
  const [maximum, setmaximum] = useState(5);

  // category filter
  const filterItem = (curcat) => {
    const newItem = product.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setitem1(newItem);
  };
  console.log(item1);

  // sorting filter

  const [objectsToShow, setToShow] = useState([]);
  console.log(objectsToShow);

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };
  const handleChange = (value) => {
    if (value == "none") {
      setToShow([...product]);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let current = [...product];
      current.sort((a, b) =>
        toType
          ? compare(a.rname, b.rname, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      setToShow([...current]);
    }
  };

  // check box filter

  const fillterData = [];

  const [Electronics, setElectronics] = useState(false);
  console.log(Electronics, "fjwijsa");
  if (Electronics) {
    const Electronicsdata = item1.filter(
      (data) => data.category === "Electronics"
    );
    for (let i = 0; i < Electronicsdata.length; i++) {
      fillterData.push(Electronicsdata[i]);
    }
  }
  const Loading = () => {
    return (
      <>
        {" "}
        <div
          className="text-center"
          style={{
            position: "absolute",
            top: " 50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="">
            <div className="container-fluid">
              <div className="product-lk ">
                <div className="filter">
                  <div className="farzo">
                    <h2>Filter</h2>
                  </div>
                  <div className="categories-o">
                    <div className="simp-categorie">
                      <h5>Latest Categories</h5>
                      <div className="itrm">
                        <ul className="list-product">
                          <li onClick={() => setitem1(product)}>All</li>
                          {items.map((pro) => {
                            return (
                              <li onClick={() => filterItem(pro)}>{pro} </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="categories-o">
                    <div className="simp-categorie">
                      <h5>Product Categories</h5>
                      <div className="itrm">
                        <div className="item-categori">
                          <label style={{ fontSize: "17px" }}>
                            Electronics
                          </label>
                          <input
                            type="checkbox"
                            className="short"
                            onChange={(e) => setElectronics(!Electronics)}
                          />
                        </div>
                        <div className="item-categori">
                          <label style={{ fontSize: "17px" }}>Jewelery</label>
                          <input type="checkbox" className="short" />
                        </div>
                        <div className="item-categori">
                          <label style={{ fontSize: "17px" }}>
                            Men's Clothing
                          </label>
                          <input type="checkbox" className="short" />
                        </div>
                        <div className="item-categori">
                          <label style={{ fontSize: "17px" }}>
                            Women's Clothing
                          </label>
                          <input type="checkbox" className="short" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories-o">
                    <div className="simp-categorie">
                      <h5>Rating</h5>
                      <div className="itrm-0">
                        <ul
                          className="list-product"
                          style={{ display: "flex", gap: "7px" }}
                        >
                          <li
                            className="raring-0"
                            onClick={() => {
                              setminimum(0);
                              setmaximum(1);
                            }}
                          >
                            1 <AiFillStar style={{ color: "#FFDF00" }} />
                          </li>
                          <li
                            className="raring-0"
                            onClick={() => {
                              setminimum(1);
                              setmaximum(2);
                            }}
                          >
                            2 <AiFillStar style={{ color: "#FFDF00" }} />
                          </li>
                          <li
                            className="raring-0"
                            onClick={() => {
                              setminimum(2);
                              setmaximum(3);
                            }}
                          >
                            3 <AiFillStar style={{ color: "#FFDF00" }} />
                          </li>
                          <li
                            className="raring-0"
                            onClick={() => {
                              setminimum(3);
                              setmaximum(4);
                            }}
                          >
                            4 <AiFillStar style={{ color: "#FFDF00" }} />
                          </li>
                          <li
                            className="raring-0"
                            onClick={() => {
                              setminimum(4);
                              setmaximum(5);
                            }}
                          >
                            5 <AiFillStar style={{ color: "#FFDF00" }} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="categories-o">
                    <div className="simp-categorie">
                      <h5>Filter by Price</h5>
                      <Box sx={{ width: 250 }}>
                        <Slider
                          aria-label="Temperature"
                          defaultValue={2000}
                          getAriaValueText={valuetext}
                          valueLabelDisplay="auto"
                          step={1}
                          min={min}
                          max={max}
                        />
                      </Box>
                    </div>
                  </div>

                  <div className="categories-o">
                    <div className="simp-categorie">
                      <h5>
                        Reset Filters
                        <span
                          style={{ paddingLeft: "20px", cursor: "pointer" }}
                        >
                          <GrPowerReset
                            onClick={() => window.location.reload(false)}
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="product-filter" style={{ width: "70%" }}>
                  <div className="farzo">
                    <div className="sort-fi-0">
                      <div clasname="">
                        <h4>
                          Product
                          <span></span>
                        </h4>
                      </div>
                      {/* <div className="ver-grid">
                        <div className="vertical" onClick={()=>{setverticals(true);}}>
                          <BsFillGrid3X3GapFill />
                        </div>
                        <div className="vertical-09">
                          <BiDotsVertical />
                        </div>
                        <div className="sort">
                          <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => handleChange(e.target.value)}
                          >
                            <option value="none">Default</option>
                            <option value="ascending">
                              Alphabetically A-Z
                            </option>
                            <option value="descending">
                              Alphabetically Z-A
                            </option>
                            <option value="high">Low to high</option>
                            <option value="low">High to low</option>
                          </Form.Select>
                        </div>
                      </div> */}
                    </div>

                    <div className="">
                      <div className="row">
                        {item1.length === 0 ? (
                          <>
                            {" "}
                            {product
                              .filter(
                                (ele) =>
                                  ele.rating.rate >= minimum &&
                                  ele.rating.rate <= maximum
                              )
                              .filter(
                                (ele) => ele.price >= min && ele.price <= price
                              )
                              .map((e) => {
                                return (
                                  <div className="col-md-4 col-sm-4">
                                    <div className="product-item-2 pt-3">
                                      <div className="items-po">
                                        <a href={`/product/${e.id}`}>
                                          <img
                                            src={e.image}
                                            alt="product"
                                            className="optr"
                                            style={{
                                              width: "100%",
                                              height: "350px",
                                            }}
                                          />
                                        </a>
                                        <div className="namo pt-3">
                                          <a href={`/product/${e.id}`}>
                                            {e.title}
                                          </a>
                                          <div className="namo-product">
                                            Price : ${e.price}{" "}
                                            {/* <span>₹{e.mainprice}</span> */}
                                          </div>
                                          <div className="namo-product">
                                            Rating : ${e.rating.rate}
                                            <AiFillStar
                                              style={{ color: "#FFDF00" }}
                                            />
                                            {/* <span>₹{e.mainprice}</span> */}
                                          </div>
                                        </div>
                                        <div className="troser">
                                          <button
                                            className="btr-0"
                                            onClick={() => addToCart(e)}
                                          >
                                            Add Cart
                                          </button>
                                          <a href={`/product/${e.id}`}>
                                            <button className="btr-0">
                                              Views
                                            </button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </>
                        ) : (
                          <>
                            {item1
                              .filter(
                                (ele) =>
                                  ele.rating.rate >= minimum &&
                                  ele.rating.rate <= maximum
                              )
                              .filter(
                                (ele) => ele.price >= min && ele.price <= price
                              )
                              .map((e) => {
                                return (
                                  <div className="col-md-4 col-sm-4">
                                    <div className="product-item-2 pt-3">
                                      <div className="items-po">
                                        <a href={`/product/${e.id}`}>
                                          <img
                                            src={e.image}
                                            alt="product"
                                            className="optr"
                                            style={{
                                              width: "100%",
                                              height: "350px",
                                            }}
                                          />
                                        </a>
                                        <div className="namo pt-3">
                                          <a href={`/product/${e.id}`}>
                                            {e.title}
                                          </a>
                                          <div className="namo-product">
                                            Price : ${e.price}{" "}
                                            {/* <span>₹{e.mainprice}</span> */}
                                          </div>
                                          <div className="namo-product">
                                            Rating : ${e.rating.rate}
                                            <AiFillStar
                                              style={{ color: "#FFDF00" }}
                                            />
                                            {/* <span>₹{e.mainprice}</span> */}
                                          </div>
                                        </div>
                                        <div className="troser">
                                          <button
                                            className="btr-0"
                                            onClick={() => addToCart(e)}
                                          >
                                            Add Cart
                                          </button>
                                          <a href={`/product/${e.id}`}>
                                            <button className="btr-0">
                                              Views
                                            </button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
