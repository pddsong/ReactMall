import "./Clothing.scss";
function Furniture() {
  const datas = JSON.parse(localStorage.getItem("classify"))
    ? JSON.parse(localStorage.getItem("classify")).furniture
    : [];

  return (
    <div className="clothing">
      {datas.length
        ? datas.map((data) => (
            <div key={data.img}>
              <img src={`imgs/classify/furniture/${data.img}`} alt="" />
              <span>{data.name}</span>
            </div>
          ))
        : null}
    </div>
  );
}

export default Furniture;
