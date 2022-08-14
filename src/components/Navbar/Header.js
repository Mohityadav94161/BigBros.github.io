import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="flex items-center my-2 flex-row-reverse">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <p className=" p-2 rounded-full px-4 py-3 text-sm  text-white  bg-gradient-to-r  from-blue-500 to-red-600 transition ease-in-out delay-150 hover:bg-red-600">
            advertisement for bussiness
          </p>
        </NavLink>
        <NavLink to="/signin" style={{ textDecoration: "none" }}>
          <p className="m-1 px-2 text-yellow-600 font-semibold">Log In</p>
        </NavLink>
      </div>
      <div className={`header`}>
        <Navbar light expand="xl" className="rounded-2xl">
          <NavLink to="/">
            <img
              src={
                "https://static.wixstatic.com/media/dc3a90_9388d01a50534335af696457bbc39fe6~mv2.png/v1/crop/x_8,y_19,w_269,h_216/fill/w_74,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20200622_231556_0000-removebg-preview%20(1.png"
              }
              className="mx-auto w-20 h-16"
              alt="logo"
            />
          </NavLink>
          <div>
            <h3 className="text-black text-3xl  font-bold relative mb-1 pl-1  ">
              BigBros
            </h3>
            <h5 className="pl-1 -mt-1 font-bold font-italic text-xl">
              Creative corner
            </h5>
          </div>
          {/* <NavbarToggler className="ml-auto" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar> */}
          <Nav className="m-auto text-xs" navbar>
            <NavItem>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <p className=" hover:text-yellow-400  font-semibold  ">HOME</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <p className=" hover:text-yellow-400  font-semibold  ">
                  ABOUT US
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="" style={{ textDecoration: "none" }}>
                <p className=" hover:text-yellow-400  font-semibold  ">
                  JOIN US
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/shop" style={{ textDecoration: "none" }}>
                <p className=" hover:text-yellow-400  font-semibold  ">
                  FIND TALENTS
                </p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/contact" style={{ textDecoration: "none" }}>
                <p className=" hover:text-yellow-400  font-semibold  ">
                  CAREERS
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" style={{ textDecoration: "none" }}>
                <p className=" hover:text-yellow-400  font-semibold  ">
                  READ & WRITE
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="" style={{ textDecoration: "none" }}>
                <p className=" hover:text-yellow-400"> Bookings Checkout</p>
              </NavLink>
            </NavItem>
          </Nav>

          {/* </Collapse> */}
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
