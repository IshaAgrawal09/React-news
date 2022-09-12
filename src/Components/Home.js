import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
import "./Home.css";
import Trending from "./Trending";
import RecentNews from "./RecentNews";
import SearchNews from "./SearchNews";
import { Drawer, List } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Home = () => {
  const { query, setQuery, submit, isSubmit, setIsSubmit, theme, mode } =
    useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = (event) => {
    if (toggle) {
      mode(event);
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="mainHome">
      {/* NAVBAR  */}
      <div className="nav" style={{ backgroundColor: theme.backgroundColor }}>
        <Link to="/">
          <img src="logo.gif" alt="" />
        </Link>
      </div>

      {/* HEADER  */}
      <div className="header">
        <div id="searchBox">
          <input
            type="text"
            id="search"
            placeholder="Search Here.."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyPress={submit}
          />
        </div>
      </div>
      {!isSubmit ? (
        <>
          {setIsSubmit(false)}
          <Trending />
          <RecentNews />
        </>
      ) : query === "" ? (
        <>
          {setIsSubmit(false)}
          <Trending />
          <RecentNews />
        </>
      ) : (
        <SearchNews />
      )}
      {/* <div className="accessbility">
        <i className="fa-solid fa-person" onClick={() => setOpen(true)}></i>
      </div> */}

      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        className="drawer"
      >
        <List
          style={{ width: "290px", textAlign: "center" }}
          className="listDrawer"
        >
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={toggle} onChange={handleToggle} />}
              label="Vision Impaired Profile  "
            />
          </FormGroup>

          <br />

          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Seizure Safe Profile  "
            />
          </FormGroup>
          <br />
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Cognitive Disability Profile  "
            />
          </FormGroup>
          <br />
        </List>
      </Drawer>
    </div>
  );
};

export default Home;
