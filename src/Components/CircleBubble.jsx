import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/CircleBubble.css";

const CircleBubble = () => {
  const [background, setBackground] = useState(null);

  function HandleBackground(e) {
    console.log(e._reactName);
    console.log(e.target);
    console.log(e);

    if (e._reactName == "onMouseEnter") {
      setBackground(
        "https://images.unsplash.com/photo-1542395975-d6d3ddf91d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      );
    } else {
      setBackground(null);
    }
  }
  return (
    <>
      <Container
        className="mainScreen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          {/* 1 */}
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Link
              to="/"
              url="https:google.com"
              onMouseEnter={HandleBackground}
              onMouseLeave={HandleBackground}
            >
              <Box
                className="boxEffect"
                style={{
                  // border: "2px solid red",
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                }}
              ></Box>
            </Link>
            <Typography>cognitive</Typography>
          </Box>
        </Box>

        {/* row */}
        {/* 2 & 3 */}
        <Box
          style={{
            // border: "2px solid red",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              className="boxEffect"
              style={{
                border: "2px solid red",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography>cognitive</Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              className="boxEffect"
              style={{
                border: "2px solid red",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography>cognitive</Typography>
          </Box>
        </Box>

        {/* 4 */}
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // margin: "20px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Box
              className="boxEffect"
              style={{
                border: "2px solid red",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography>cognitive</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default CircleBubble;
