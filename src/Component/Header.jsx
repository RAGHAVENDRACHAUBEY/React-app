import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav,  Table } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Canvas from "./Canvas";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import {DLT} from "./Redux/action"

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);
  const dispatch = useDispatch();

  const dlt = (id)=>{
    dispatch(DLT(id))
}

// Total

const [price,setPrice] = useState(0);
    // console.log(price);
    const total = ()=>{
      let price = 0;
      getdata.map((ele,k)=>{
        price = ele.price * ele.qnty + price
      });
      setPrice(price);
  };

  useEffect(()=>{
      total();
  },[total])

  return (
    <>
      <div className="nav--0">
        <Navbar
          expand="lg"
          fixed="top"
          className="nsmc"
          style={{ backgroundColor: "#3478dd" }}
        >
          <Container>
            <Navbar.Brand
              href="/"
              style={{ color: "#d26e4b", fontSize: "25px" }}
            >
              R
              <span
                style={{ color: "black", fontSize: "30px", fontWeight: "600" }}
              >
                Shop
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0 head-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#action2">About Us </Nav.Link>
                <Nav.Link href="/product">Product</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>

              <div>
                <Badge
                  badgeContent={getdata.length}
                  style={{ color: "white" }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <HiOutlineShoppingBag
                    style={{
                      fontSize: "28px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {getdata.length ? (
                    <div
                      className="card_details"
                      style={{ width: "24rem", padding: 10 }}
                    >
                      {getdata.map((items) => {
                        return (
                          <div className="cart-po mt-2 mb-2">
                            <div className="product-cart pt-2">
                              <div
                                className="cart-img"
                                style={{ width: "45%" }}
                              >
                                <NavLink to={`/product/${items.id}`}  onClick={handleClose}>
                                  <img
                                    src={items.image}
                                    alt="cart-img"
                                    style={{ width: "70%", height: "100px" }}
                                  />
                                </NavLink>
                              </div>
                              <div className="" style={{ width: "45%" }}>
                                <NavLink to ={`/product/${items.id}`} style={{color:"black",textDecoration:"none"}}>
                                <div 
                              
                              style={{
                                fontSize: "18px",
                                fontWeight: "500",
                                display: " -webkit-box",
                                webkitBoxOrient: " vertical",
                                webkitLineClamp: "1",
                                overflow: " hidden",
                              }}
                            >
                              {items.title}
                          
                            </div>
                                </NavLink>
                                <div>Quantity :{items.qnty}</div>
                                <div> Price : ${items.price} </div>
                              </div>
                              <div className="detail-rem" onClick={()=>dlt(items.id)}>
                                <AiOutlineDelete />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div
                        style={{
                          fontSize: "21px",
                          borderTop: "1px solid gray",
                          padding: "12px",
                        }}
                      >
                        SubTotal : <span>${price}</span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="card_details d-flex justify-content-center align-items-center"
                      style={{
                        width: "24rem",
                        padding: 10,
                        position: "relative",
                      }}
                    >
                      <i
                        className="fas fa-close smallclose"
                        onClick={handleClose}
                        style={{
                          position: "absolute",
                          top: 2,
                          right: 20,
                          fontSize: 23,
                          cursor: "pointer",
                        }}
                      ></i>
                      <p style={{ fontSize: 22 }}>Your carts is empty</p>
                      <img
                        src="./cart.gif"
                        alt=""
                        className="emptycart_img"
                        style={{ width: "5rem", padding: 10 }}
                      />
                    </div>
                  )}
                </Menu>
              </div>
              {/* <div className="whit-09">
                <Badge badgeContent={0} color="primary">
                  <AiOutlineHeart
                    style={{ fontSize: "28px", color: "white" }}
                  />
                </Badge>
              </div> */}
              <div className="whit-09 use-si">
                <NavLink to="/register">
                  <BiUserCircle style={{ fontSize: "28px", color: "white" }} />
                </NavLink>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
