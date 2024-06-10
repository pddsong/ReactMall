/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  // 更新选中状态的映射表
  const pathToIndex = {
    "/": 0,
    "/category": 1,
    "/cart": 2,
    "/user": 3,
  };

  // 根据当前路径更新选中状态
  React.useEffect(() => {
    const path = location.pathname;
    if (Object.prototype.hasOwnProperty.call(pathToIndex, path)) {
      setValue(pathToIndex[path]);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 999 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/")}
          label="首页"
          icon={
            <svg
              className="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5f6368"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
          }
        />
        <BottomNavigationAction
          onClick={() => navigate("/category")}
          label="分类"
          icon={
            <svg
              className="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5f6368"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <rect height="2" width="11" x="3" y="10" />
                  <rect height="2" width="11" x="3" y="6" />
                  <rect height="2" width="7" x="3" y="14" />
                  <polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34" />
                </g>
              </g>
            </svg>
          }
        />
        <BottomNavigationAction
          onClick={() => navigate("/cart")}
          label="购物车"
          icon={
            <svg
              className="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5f6368"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          }
        />
        <BottomNavigationAction
          onClick={() => navigate("/user")}
          label="我的"
          icon={
            <svg
              className="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5f6368"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
                  <path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                </g>
              </g>
            </svg>
          }
        />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
