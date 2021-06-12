import React from "react";
import "../css/Footer.css";

function FooterPage() {
  return (
    <div className="text-center" variant="light" style={{ height: "20px" }}>
      <footer
        variant="white"
        style={{
          color: "#000",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0px 25px",
          background: "#20D9D0",
        }}
      >
        <div>
          Copyright &copy; 2021
          <span
            style={{ fontWeight: "bold", fontSize: "15px", marginLeft: "4px" }}
          >
            3wishesLounge
          </span>
        </div>
        <div>
          Powered by
          <m style={{ color: "white", marginLeft: "3px" }}>
            Flosa Technologies
          </m>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;
