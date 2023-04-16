import Login from "../components/Login";
import Register from "../components/Register";
import { Link, useNavigate } from "react-router-dom";
import { forwardRef, useContext, useEffect, useState } from "react";
import { Button, Dropdown, Figure, Nav, NavDropdown } from "react-bootstrap";
import Dropdownn from "../image/Ellipse1.png";
import bill from "../image/bill.png";
import { CgProfile, CgFilm } from "react-icons/cg";
import { MdPayment, MdLogout } from "react-icons/md";
import userr from "../image/userr.png";
import logout from "../image/logout.png";
import filmm from "../image/filmm.png";
import { UserContext } from "../context/userContext";
import * as jose from "jose";
function Header() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  //validasi Login
  const [validlogin, setValidlogin] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  const [claims, setClaims] = useState({});
  const [handleDropdown, setHandleDropdown] = useState(false);
  // const [user, setUser] = useContext(UserContext)
  // const [dropdown, setDropdown] = useContext(DropdownContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') || false);
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") || false
  );

  let navigate = useNavigate();

  let user = localStorage.getItem("token");
console.log("sate",state)
  //Active Pages
  let activeStyle = {
    textDecoration: "none",
    fontWeight: "10px",
    color: "white",
  };

  let nonActive = {
    textDecoration: "none",
    color: "grey",
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  //   handle login form
  const openLogin = () => {
    setLogin(true);
  };
  const closeLogin = () => {
    setLogin(false);
  };

  //   handle register form
  const openRegister = () => {
    setRegister(true);
  };
  const closeRegister = () => {
    setRegister(false);
  };

  useEffect(() => {
    if (user) {
      setValidlogin(true);
      setClaims(jose.decodeJwt(user));
    } else {
      setValidlogin(false);
    }
  }, [user]);

  return (
    <nav>
      <div className="left-side">
        <ul>
          <li>
            <Link to={"/"} className="text-white">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to={"Tvshow"} className="text-white">
              {" "}
              Tv show
            </Link>
          </li>
          <li>
            <Link to={"/Movies"} className="text-white">
              {" "}
              Movies
            </Link>
          </li>
        </ul>
      </div>
      <img src={require("../image/netflic.png")} alt="gambar"></img>
      <Nav className="right-side">
        {validlogin ? (
          <Dropdown>
            <Dropdown.Toggle className="bg-dark">
              <img
                type="button"
                // data-bs-toggle="dropdownn"
                onClick={() => setHandleDropdown(!handleDropdown)}
                src={Dropdownn}
                alt="gam"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark mt-3 ms-3">
              <div
                style={{
                  position: "absolute",
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderBottom: "20px solid #212529",
                  // marginLeft: "130px",
                  marginTop: "-25px",
                }}
              ></div>
              {state.user.role === "admin" ? (
                <>
                  <Dropdown.Item className="bg-dark d-flex align-items-center">
                    <Link
                      to="/Film"
                      className="text-white fw-semibold text-decoration-none"
                    >
                      <CgProfile
                        color="red"
                        style={{ fontSize: "20px" }}
                        className="me-2"
                      />
                      Film
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex align-items-center gap-2 text-white fw-semibold fs-6 pb-2 border-bottom border-white">
                    <Link
                      to="/Transaction"
                      className="text-white fw-semibold text-decoration-none"
                    >
                      <mdPayment
                        color="red"
                        style={{ fontSize: "20px" }}
                        className="me-2"
                      />
                      Transaction
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="d-flex align-items-center gap-2 text-white fw-semibold"
                    onClick={logout}
                  >
                    <MdLogout color="red" style={{ fontSize: "20px" }} />
                    Logout
                  </Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item className="bg-dark d-flex align-items-center">
                    <Link
                      to="/Profile"
                      className="bg-dark text-white fw-semibold text-decoration-none"
                    >
                      <CgProfile
                        color="red"
                        style={{ fontSize: "20px" }}
                        className="me-2"
                      />
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-dark d-flex align-items-center">
                    <Link
                      to="/Pay"
                      className="bg-dark text-white fw-semibold text-decoration-none"
                    >
                      <CgFilm
                        color="red"
                        style={{ fontSize: "20px" }}
                        className="me-2"
                      />
                      Pay
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="bg-dark d-flex align-items-center gap-2 text-white fw-semibold"
                    onClick={logout}
                  >
                    <MdLogout color="red" style={{ fontSize: "20px" }} />
                    Logout
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <>
            <div className="right-side">
              <Register
                register={register}
                closeRegister={closeRegister}
                openLogin={openLogin}
              />

              <Login
                // className="py-"
                login={login}
                closeLogin={closeLogin}
                openRegister={openRegister}
                setValidlogin={setValidlogin}
              />
            </div>
          </>
        )}
      </Nav>

      {/* <Nav className="right-side">
   {validlogin ? (
    <Dropdown className="bg-dark">
      <Dropdown.Toggle className="">
      <img
            type="button"
            // data-bs-toggle="dropdownn"
            onClick={() => setHandleDropdown(!handleDropdown)}
            src={Dropdownn}
            alt="gam"
          />
      </Dropdown.Toggle>
      {handleDropdown && (
        <Dropdown.Menu className="bg-dark">
     {claims.isAdmin === false ? (
            <>
          <Dropdown.Item  className="bg-dark d-flex align-items-center gap-2 text-white fw-semibold fs-6 pb-2 border-bottom border-white">
            <img src={bill}/>
            <Link to="/Profile"className="text-white fw-semibold text-decoration-none">
              Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item  className="bg-dark d-flex align-items-center gap-2 text-white fw-semibold fs-6 pb-2 border-bottom border-white">
              <img src={userr}/>
            <Link to="/Pay"className="text-white fw-semibold text-decoration-none">
              Pay</Link>
              </Dropdown.Item>
              <Dropdown.Item
              className="d-flex align-items-center gap-2 text-white fw-semibold"
               onClick={logout}>
              <MdLogout color="red" style={{ fontSize: "20px" }} />
                Logout
              </Dropdown.Item>
             </> 
          ) : (
            <>
              <Dropdown.Item className="bg-dark" style={{

              }}>
              <img src={filmm}/>
            <Link to="/Film"className="text-white fw-semibold text-decoration-none">
              Film </Link>
          </Dropdown.Item>
              <Dropdown.Item className="bg-dark">
              <img src={userr}/>
            <Link to="/Transaction">
              Transaction </Link>
          </Dropdown.Item>
            </>

          )}
          <NavDropdown.Divider />
         <NavDropdown.Item className="bg-dark text-white" style={{padding:"10px"}}>
          <img src={logout}/>
          Logout 
         </NavDropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  ) : (
    <>
      <div className="right-side">
        <Register
        register={register}
        closeRegister={closeRegister}
        openLogin={openLogin}/>
     
        <Login 
        login={login}
          closeLogin={closeLogin}
          openRegister={openRegister}
          setValidlogin={setValidlogin} />
      </div>
    </>
  )}
</Nav> */}
    </nav>
  );
}
export default Header;

// {
  /* <Nav className="right-side">
            {validlogin ? (
              <Dropdown>
                <Dropdown.Toggle className="bg-dark">
       <img
            type="button"
            // data-bs-toggle="dropdownn"
            onClick={() => setHandleDropdown(!handleDropdown)}
            src={Dropdownn}
            alt="gam"
          />
      </Dropdown.Toggle>
                <Dropdown.Menu className="bg-dark mt-3 ms-3">
                  <div
                    style={{
                      position: "absolute",
                      width: 0,
                      height: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderBottom: "20px solid #212529",
                      // marginLeft: "130px",
                      marginTop: "-25px",
                    }}></div>
                  {claims.isAdmin === false ? (
                    <>
                      <Dropdown.Item className="bg-dark d-flex align-items-center">
                        <Link
                          to={`/Profile/${claims.id}`}
                          className="text-white fw-semibold text-decoration-none">
                          <CgProfile
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex align-items-center gap-2 text-white fw-semibold fs-6 pb-2 border-bottom border-white">
                        <Link
                          to="/pay"
                          className="text-white fw-semibold text-decoration-none">
                          <mdPayment
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Pay
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="d-flex align-items-center gap-2 text-white fw-semibold"
                        onClick={logout}>
                        <MdLogout color="red" style={{ fontSize: "20px" }} />
                        Logout
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item className="bg-dark d-flex align-items-center">
                        <Link
                          to="/Profile"
                          className="bg-dark text-white fw-semibold text-decoration-none">
                          <CgProfile
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="bg-dark d-flex align-items-center">
                        <Link
                          to="/Film"
                          className="bg-dark text-white fw-semibold text-decoration-none">
                          <CgFilm
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Film
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="bg-dark d-flex align-items-center gap-2 text-white fw-semibold"
                        onClick={logout}>
                        <MdLogout color="red" style={{ fontSize: "20px" }} />
                        Logout
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
              <div className="right-side">

                <Register
                  register={register}
                  closeRegister={closeRegister}
                  openLogin={openLogin}
                />

                <Login
                // className="py-"
                  login={login}
                  closeLogin={closeLogin}
                  openRegister={openRegister}
                  setValidlogin={setValidlogin}
                />
                </div>
              </>
            )}
          </Nav> */
// }
// {`/Transaction/${claims.id}`}