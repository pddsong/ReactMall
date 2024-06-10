import MyLayout from "./com/MyLayout";

import Order from "./Order";
import Products from "./Products";
import Activity from "./Activity";
import Role from "./Role";
import Menus from "./Menus";
import User from "./User";

import { useEffect, useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

function Adim2() {
  const [isJ, setIsJ] = useState(true);
  const [isP, setIsP] = useState(false);

  const [isO, setIsO] = useState(false);
  const [isH, setIsH] = useState(false);
  const [isQ, setIsQ] = useState(false);
  const [isU, setIsU] = useState(false);
  const { isAdim } = useAuth();
  const navigator = useNavigate();
  useEffect(() => {
    if (!isAdim) {
      // 如果权限检查未通过，在useEffect中进行重定向
      navigator("/adimLogin");
    }
  }, [isAdim, navigator]); // 依赖数组中包含authChecked和navigate
  return (
    <MyLayout
      setIsH={setIsH}
      setIsO={setIsO}
      setIsP={setIsP}
      setIsQ={setIsQ}
      setIsU={setIsU}
      setIsJ={setIsJ}
    >
      {isJ && <Home />}
      {isP && <Products />}

      {isO && <Order />}
      {isH && <Activity />}
      {isQ && <Role />}
      {isU && <User />}
    </MyLayout>
  );
}

export default Adim2;
