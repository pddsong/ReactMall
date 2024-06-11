import { useEffect, useRef, useState } from "react";
import { pink } from "@mui/material/colors";

import Checkbox from "@mui/material/Checkbox";
// eslint-disable-next-line react/prop-types
function Card({ data, isAllChecked, onCheckChange, setTotalPrice, inFo }) {
  const [conut, setCount] = useState(1);
  // eslint-disable-next-line react/prop-types
  const [isCheck, setIsCheck] = useState(false);

  // eslint-disable-next-line no-unused-vars

  const [datas, setDatas] = useState([]);

  let price = datas[0]?.price * conut;

  const prevConutRef = useRef();

  useEffect(() => {
    prevConutRef.current = conut;
  });

  useEffect(() => {
    const fetchProductsFromLocalStorage = () => {
      try {
        const products = JSON.parse(localStorage.getItem("products")) || [];

        const filteredProducts = products.filter((value) => {
          // eslint-disable-next-line react/prop-types
          if (value.id === data.productId) {
            return true;
          } else return false;
        });

        setDatas(filteredProducts);
      } catch (error) {
        console.error("Error fetching products from localStorage:", error);
      }
    };

    fetchProductsFromLocalStorage();
    // eslint-disable-next-line react/prop-types
  }, [data.id]);

  useEffect(() => {
    if (isAllChecked === "one") return;
    setIsCheck(isAllChecked);
    // eslint-disable-next-line react/prop-types
    inFo(data.id, "isCheck", isAllChecked);
    onCheckChange(price, isAllChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllChecked]);

  function handlejian() {
    if (conut > 1)
      setCount((value) => {
        // eslint-disable-next-line react/prop-types
        inFo(data.id, "num", Number(value) - 1);
        return Number(value) - 1;
      });
    if (isCheck) setTotalPrice((value) => value - datas[0]?.price);
  }

  function handlejia() {
    setCount((value) => {
      // eslint-disable-next-line react/prop-types
      inFo(data.id, "num", Number(value) + 1);
      return Number(value) + 1;
    });
    if (isCheck) setTotalPrice((value) => value + datas[0]?.price);
  }

  function handleChange() {
    if (isCheck) {
      setTotalPrice((number) => number - price);
    } else setTotalPrice((number) => number + price);
    setIsCheck(!isCheck);
    // eslint-disable-next-line react/prop-types
    inFo(data.id, "isCheck", !isCheck);
  }
  console.log(datas);
  return (
    <div className="card">
      <Checkbox
        className="fxc"
        checked={isCheck}
        onChange={handleChange}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
      <img src={`/imgs/products/${datas[0]?.image}`} alt="" />
      <div className="ms">
        <p>{datas[0]?.description1}</p>
        <p>{datas[0]?.description2}</p>
        <p>￥{price}</p>
        <div className="conut">
          <button onClick={handlejian}>-</button>
          <input
            value={conut}
            onChange={(e) => setCount(e.target.value)}
            className="text"
            type="number"
          />
          <button onClick={handlejia}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
