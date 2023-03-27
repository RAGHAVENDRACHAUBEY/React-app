// import React from "react";
// import { useDispatch } from "react-redux";
// import { data } from "./Productdata";
// import { ADD } from "./Redux/action";

// const ProductItem = () => {
//   const dispatch = useDispatch();

//   const addToCart = (e) => {
//     dispatch(ADD(e));
//   };
//   return (
//     <div className="">
//       <div className="container">
//         <div className="row">
//           { data.filter(
//                                 (item) =>
//                                   item.minSalary >= min &&
//                                   item.maxSalary <= price
//                               ).map((e, id) => {
//             return (
//               <div className="col-md-4 col-sm-4">
//                 <div className="product-item-2 pt-3">
//                   <div className="items-po">
//                     <a href="">
//                       <img
//                         src={e.image}
//                         alt="product"
//                         className="optr"
//                         style={{ width: "100%", height: "350px" }}
//                       />
//                     </a>
//                     <div className="namo pt-3">
//                       <a href="">{e.disc}</a>
//                       <div className="namo-product">
//                         Price : ₹{e.price} <span>₹{e.mainprice}</span>
//                       </div>
//                     </div>
//                     <div className="troser">
//                       <button className="btr-0" onClick={() => addToCart(e)}>
//                         Add Cart
//                       </button>
//                       <button className="btr-0">Views</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { GrPowerReset } from "react-icons/gr";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { data } from "./Productdata";
// import { ADD } from "./Redux/action";

// const Product = () => {
//   // const dispatch = useDispatch();

//   // const addToCart = (e) => {
//   //   dispatch(ADD(e));
//   // };

//   //   let fillterData = [];
//   function valuetext(value) {
//     setprice(value);
//     return `${value}°C`;
//   }
//   const [min, setmin] = useState(0);
//   const [max, setmax] = useState(2000);
//   const [price, setprice] = useState(2000);

//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//     getProduct();
//     getUser();
//   }, []);

//   // api
//   const [product, setproduct] = useState([]);
//   const [items, setitems] = useState([]);
//   const [item1, setitem1] = useState([]);

//   // console.log(items)
//   // console.log(product);
//   const getProduct = async () => {
//     const config = {
//       url: "/products",
//       method: "get",
//       baseURL: "https://fakestoreapi.com",
//       headers: { "content-type": "application/json" },
//     };
//     try {
//       const result = await axios(config);

//       if (result.status === 200) {
//         setproduct(result.data);
//       } else {
//         alert("Something went worng");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   // categorie
//   async function getUser() {
//     try {
//       const response = await axios.get(
//         "https://fakestoreapi.com/products/categories"
//       );
//       if (response.status === 200) {
//         setitems(response.data);
//       } else {
//         alert("Something went worng");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   }

//   const filterItem = (curcat) => {
//     const newItem = product.filter((newVal) => {
//       return newVal.category === curcat;
//       // comparing category for displaying data
//     });
//     setitem1(newItem);
//   };
//   //   console.log(item1);
//   const Loading = () => {
//     <>Loading....</>;
//   };

//   return (
//     <>
//       <Header />
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <>
//           <div className="">
//             <div className="container-fluid">
//               <div className="product-lk ">
//                 <div className="filter">
//                   <div className="farzo">
//                     <h2>Filter</h2>
//                   </div>
//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>Latest Categories</h5>
//                       <div className="itrm">
//                         <ul className="list-product">
//                           <li onClick={() => setitem1(product)}>All</li>
//                           {items.map((pro) => {
//                             return (
//                               <li onClick={() => filterItem(pro)}>{pro}</li>
//                             );
//                           })}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>Product Categories</h5>
//                       <div className="itrm">
//                         <div className="item-categori">
//                           <label style={{ fontSize: "17px" }}>Mobile</label>
//                           <input type="checkbox" className="short" />
//                         </div>
//                         <div className="item-categori">
//                           <label style={{ fontSize: "17px" }}>Watch</label>
//                           <input type="checkbox" className="short" />
//                         </div>
//                         <div className="item-categori">
//                           <label style={{ fontSize: "17px" }}>HadePhones</label>
//                           <input type="checkbox" className="short" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>Filter by Price</h5>
//                       <Box sx={{ width: 250 }}>
//                         <Slider
//                           aria-label="Temperature"
//                           defaultValue={40}
//                           getAriaValueText={valuetext}
//                           valueLabelDisplay="auto"
//                           step={1}
//                           min={min}
//                           max={max}
//                         />
//                       </Box>
//                     </div>
//                   </div>

//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>
//                         Reset Filters
//                         <span
//                           style={{ paddingLeft: "20px", cursor: "pointer" }}
//                         >
//                           <GrPowerReset />
//                         </span>
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-filter" style={{ width: "70%" }}>
//                   <div className="farzo">
//                     <h4>
//                       Product
//                       <span></span>
//                     </h4>
//                     <div className="">
//                       <div className="row">
//                         {item1.length === 0 ? (
//                           <>
//                             {" "}
//                             {product

//                               .filter((e) => e.price >= min && e.price <= price)
//                               .map((e) => {
//                                 return (
//                                   <div className="col-md-4 col-sm-4">
//                                     <div className="product-item-2 pt-3">
//                                       <div className="items-po">
//                                         <a href="">
//                                           <img
//                                             src={e.image}
//                                             alt="product"
//                                             className="optr"
//                                             style={{
//                                               width: "100%",
//                                               height: "350px",
//                                             }}
//                                           />
//                                         </a>
//                                         <div className="namo pt-3">
//                                           <a href="">{e.title}</a>
//                                           <div className="namo-product">
//                                             Price : ₹{e.price}{" "}
//                                             <span>₹{e.mainprice}</span>
//                                           </div>
//                                         </div>
//                                         <div className="troser">
//                                           <button
//                                             className="btr-0"
//                                             // onClick={() => addToCart(e)}
//                                           >
//                                             Add Cart
//                                           </button>
//                                           <button className="btr-0">
//                                             Views
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 );
//                               })}
//                           </>
//                         ) : (
//                           <>
//                             {item1
//                               .filter((e) => e.price >= min && e.price <= price)
//                               .map((e) => {
//                                 return (
//                                   <div className="col-md-4 col-sm-4">
//                                     <div className="product-item-2 pt-3">
//                                       <div className="items-po">
//                                         <a href="">
//                                           <img
//                                             src={e.image}
//                                             alt="product"
//                                             className="optr"
//                                             style={{
//                                               width: "100%",
//                                               height: "350px",
//                                             }}
//                                           />
//                                         </a>
//                                         <div className="namo pt-3">
//                                           <a href="">{e.title}</a>
//                                           <div className="namo-product">
//                                             Price : ₹{e.price}{" "}
//                                             <span>₹{e.mainprice}</span>
//                                           </div>
//                                         </div>
//                                         <div className="troser">
//                                           <button
//                                             className="btr-0"
//                                             // onClick={() => addToCart(e)}
//                                           >
//                                             Add Cart
//                                           </button>
//                                           <button className="btr-0">
//                                             Views
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 );
//                               })}
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Product;








// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import { GrPowerReset } from "react-icons/gr";

// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import axios from "axios";
// import { Form } from "react-bootstrap";
// // import { useDispatch } from "react-redux";
// // import { data } from "./Productdata";
// // import { ADD } from "./Redux/action";

// const Product = () => {
//   // const dispatch = useDispatch();

//   // const addToCart = (e) => {
//   //   dispatch(ADD(e));
//   // };

//   //   let fillterData = [];
//   function valuetext(value) {
//     setprice(value);
//     return `${value}°C`;
//   }
//   const [min, setmin] = useState(0);
//   const [max, setmax] = useState(2000);
//   const [price, setprice] = useState(2000);

//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//     getProduct();
//     getUser();
//   }, []);

//   // api
//   const [product, setproduct] = useState([]);
//   const [items, setitems] = useState([]);
//   const [item1, setitem1] = useState([]);

//   // const [rating, setrating] = useState();
//   // function valuetexts(value) {
//   //   setrating(value);
//   //   return `${value}°C`;
//   // }
//   const [mini, setmani] = useState(0);
//   const [maximum, setmaximum] = useState(5);

//   console.log(items);
//   console.log(product);
//   const getProduct = async () => {
//     const config = {
//       url: "/products",
//       method: "get",
//       baseURL: "https://fakestoreapi.com",
//       headers: { "content-type": "application/json" },
//     };
//     try {
//       const result = await axios(config);

//       if (result.status === 200) {
//         setproduct(result.data);
//       } else {
//         alert("Something went worng");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   // categorie
//   async function getUser() {
//     try {
//       const response = await axios.get(
//         "https://fakestoreapi.com/products/categories"
//       );
//       if (response.status === 200) {
//         setitems(response.data);
//       } else {
//         alert("Something went worng");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   }

//   const filterItem = (curcat) => {
//     const newItem = product.filter((newVal) => {
//       return newVal.category === curcat;
//       // comparing category for displaying data
//     });
//     setitem1(newItem);
//   };
//   //   console.log(item1);
//   const Loading = () => {
//     <>Loading....</>;
//   };

//   // sort filter

//   const [objectsToShow, setToShow] = useState([]);
//   console.log(objectsToShow, objectsToShow.length, "sdfdgdfgfgfnf");

//   const compare = (a, b, ascendingOrder) => {
//     if (a < b) {
//       return ascendingOrder ? 1 : -1;
//     }
//     if (a > b) {
//       return ascendingOrder ? -1 : 1;
//     }
//     return 0;
//   };
//   const handleChange = (value) => {
//     if (value == "none") {
//       setToShow([...product]);
//     } else {
//       let toType, toAscending;
//       switch (value) {
//         case "ascending":
//           toType = true;
//           toAscending = true;
//           break;
//         case "descending":
//           toType = true;
//           toAscending = false;
//           break;
//         case "high":
//           toType = false;
//           toAscending = true;
//           break;
//         case "low":
//           toType = false;
//           toAscending = false;
//           break;
//       }
//       let current = [...product];
//       current.sort((a, b) =>
//         toType
//           ? compare(a.category, b.category, toAscending)
//           : compare(a.price, b.price, toAscending)
//       );
//       setToShow([...current]);
//     }
//   };

//   return (
//     <>
//       <Header />
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <>
//           <div className="">
//             <div className="container-fluid">
//               <div className="product-lk ">
//                 <div className="filter">
//                   <div className="farzo">
//                     <h2>Filter</h2>
//                   </div>
//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>Latest Categories</h5>
//                       <div className="itrm">
//                         <ul className="list-product">
//                           <li onClick={() => setitem1(product)}>All</li>
//                           {items.map((pro) => {
//                             return (
//                               <li onClick={() => filterItem(pro)}>{pro}</li>
//                             );
//                           })}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>ratings</h5>
//                       <div className="itrm">
//                         <ul className="list-product">
//                           <li
//                             onClick={() => {
//                               setmani(0);
//                               setmaximum(1);
//                             }}
//                           >
//                             <input type="checkbox" className="short" />1 rating
//                           </li>
//                           <li
//                             onClick={() => {
//                               setmani(1);
//                               setmaximum(2);
//                             }}
//                           >
//                             <input type="checkbox" className="short" />2 rating
//                           </li>
//                           <li
//                             onClick={() => {
//                               setmani(2);
//                               setmaximum(3);
//                             }}
//                           >
//                             <input type="checkbox" className="short" />3 rating
//                           </li>
//                           <li
//                             onClick={() => {
//                               setmani(3);
//                               setmaximum(4);
//                             }}
//                           >
//                             <input type="checkbox" className="short" />4 rating
//                           </li>
//                           <li
//                             onClick={() => {
//                               setmani(4);
//                               setmaximum(5);
//                             }}
//                           >
//                             <input type="checkbox" className="short" />5 rating
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>Product Categories</h5>
//                       <div className="itrm">
//                         <div className="item-categori">
//                           <label style={{ fontSize: "17px" }}>Mobile</label>
//                           <input type="checkbox" className="short" />
//                         </div>
//                         <div className="item-categori">
//                           <label style={{ fontSize: "17px" }}>Watch</label>
//                           <input type="checkbox" className="short" />
//                         </div>
//                         <div className="item-categori">
//                           <label style={{ fontSize: "17px" }}>HadePhones</label>
//                           <input type="checkbox" className="short" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>Filter by Price</h5>
//                       <Box sx={{ width: 250 }}>
//                         <Slider
//                           aria-label="Temperature"
//                           defaultValue={40}
//                           getAriaValueText={valuetext}
//                           valueLabelDisplay="auto"
//                           step={1}
//                           min={min}
//                           max={max}
//                         />
//                       </Box>
//                     </div>
//                   </div>

//                   <div className="categories-o">
//                     <div className="simp-categorie">
//                       <h5>
//                         Reset Filters
//                         <span
//                           style={{ paddingLeft: "20px", cursor: "pointer" }}
//                         >
//                           <GrPowerReset />
//                         </span>
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-filter" style={{ width: "70%" }}>
//                   <div className="farzo">
//                     <div className="sort-fi-0">
//                       <div clasname="">
//                         <h4>
//                           Product
//                           <span></span>
//                         </h4>
//                       </div>
//                       <div className="sort">
//                         <Form.Select
//                           aria-label="Default select example"
//                           onChange={(e) => handleChange(e.target.value)}
//                         >
//                           <option value="none">Default</option>
//                           <option value="ascending">Alphabetically A-Z</option>
//                           <option value="descending">Alphabetically Z-A</option>
//                           <option value="high">Low to high</option>
//                           <option value="low">High to low</option>
//                         </Form.Select>
//                       </div>
//                     </div>
//                     <div className="">
//                       <div className="row">
//                         {item1.length === 0 ? (
//                           <>
//                             {" "}
//                             {objectsToShow.length === 0 ? (
//                               <>
//                                 {product
//                                   ?.filter(
//                                     (e) =>
//                                       e?.rating?.rate >= mini &&
//                                       e?.rating?.rate <= maximum
//                                   )
//                                   ?.filter(
//                                     (e) => e.price >= min && e.price <= price
//                                   )
//                                   ?.map((e) => {
//                                     return (
//                                       <div className="col-md-4 col-sm-4">
//                                         <div className="product-item-2 pt-3">
//                                           <div className="items-po">
//                                             <a href="">
//                                               <img
//                                                 src={e?.image}
//                                                 alt="product"
//                                                 className="optr"
//                                                 style={{
//                                                   width: "100%",
//                                                   height: "350px",
//                                                 }}
//                                               />
//                                             </a>
//                                             <div className="namo pt-3">
//                                               <a href="">{e.title}</a>
//                                               <a href="">
//                                                 {e.rating && e.rating.rate}
//                                               </a>

//                                               <div className="namo-product">
//                                                 Price : ₹{e.price}{" "}
//                                                 <span>₹{e.mainprice}</span>
//                                               </div>
//                                             </div>
//                                             <div className="troser">
//                                               <button
//                                                 className="btr-0"
//                                                 // onClick={() => addToCart(e)}
//                                               >
//                                                 Add Cart
//                                               </button>
//                                               <button className="btr-0">
//                                                 Views
//                                               </button>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     );
//                                   })}
//                               </>
//                             ) : (
//                               <>
//                                 {objectsToShow
//                                   ?.filter(
//                                     (e) =>
//                                       e?.rating?.rate >= mini &&
//                                       e?.rating?.rate <= maximum
//                                   )
//                                   ?.filter(
//                                     (e) => e.price >= min && e.price <= price
//                                   )
//                                   ?.map((e) => {
//                                     return (
//                                       <div className="col-md-4 col-sm-4">
//                                         <div className="product-item-2 pt-3">
//                                           <div className="items-po">
//                                             <a href="">
//                                               <img
//                                                 src={e?.image}
//                                                 alt="product"
//                                                 className="optr"
//                                                 style={{
//                                                   width: "100%",
//                                                   height: "350px",
//                                                 }}
//                                               />
//                                             </a>
//                                             <div className="namo pt-3">
//                                               <a href="">{e.title}</a>
//                                               <a href="">
//                                                 {e.rating && e.rating.rate}
//                                               </a>

//                                               <div className="namo-product">
//                                                 Price : ₹{e.price}{" "}
//                                                 <span>₹{e.mainprice}</span>
//                                               </div>
//                                             </div>
//                                             <div className="troser">
//                                               <button
//                                                 className="btr-0"
//                                                 // onClick={() => addToCart(e)}
//                                               >
//                                                 Add Cart
//                                               </button>
//                                               <button className="btr-0">
//                                                 Views
//                                               </button>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     );
//                                   })}
//                               </>
//                             )}
//                           </>
//                         ) : (
//                           <>
//                             {item1
//                               .filter(
//                                 (e) =>
//                                   e.rating?.rate >= mini &&
//                                   e.rating?.rate <= maximum
//                               )
//                               .filter((e) => e.price >= min && e.price <= price)
//                               .map((e) => {
//                                 return (
//                                   <div className="col-md-4 col-sm-4">
//                                     <div className="product-item-2 pt-3">
//                                       <div className="items-po">
//                                         <a href="">
//                                           <img
//                                             src={e.image}
//                                             alt="product"
//                                             className="optr"
//                                             style={{
//                                               width: "100%",
//                                               height: "350px",
//                                             }}
//                                           />
//                                         </a>
//                                         <div className="namo pt-3">
//                                           <a href="">{e.title}</a>
//                                           <a href="">
//                                             {e.rating && e.rating.rate}
//                                           </a>
//                                           <div className="namo-product">
//                                             Price : ₹{e.price}{" "}
//                                             <span>₹{e.mainprice}</span>
//                                           </div>
//                                         </div>
//                                         <div className="troser">
//                                           <button
//                                             className="btr-0"
//                                             // onClick={() => addToCart(e)}
//                                           >
//                                             Add Cart
//                                           </button>
//                                           <button className="btr-0">
//                                             Views
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 );
//                               })}
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Product;