import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css"

const Sidebar = ({ text }) => {
    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    };
    const SideNavbarData = [{
        home: " Home",
        profile: "Profile"
    }]
    return (
        <div className="modal_first">
            {SideNavbarData.map((item, index) => (
                <ul key={index}>
                    <div style={{ height: "89vh", marginTop: "100px", display: "flex", flexDirection: "column", width: "100%", alignItems: "center", textAlign: "center" }}>
                        <h1 style={{ margin: "40px 0", fontSize: "50px", color: "white", fontFamily: "math"}}>{text}</h1>
                    <div style={{ padding: "15px 0", width: "100%" }}>
                        <Button variant="outlined" className="sidebar_button" onClick={() => navigate("/")}>{item?.home}</Button>
                    </div>
                    <div style={{ padding: "15px 0", width: "100%" }}>
                        <Button variant="outlined" className="sidebar_button" onClick={() => navigate("/Profile")}>{item?.profile}</Button>
                    </div>
                </div>
                </ul>
    ))
}
        </div >
    )
}

export default Sidebar