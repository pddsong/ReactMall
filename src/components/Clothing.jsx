import "./Clothing.scss";

function Clothing() {
  // eslint-disable-next-line no-unused-vars
  const datas = JSON.parse(localStorage.getItem("classify"))
    ? JSON.parse(localStorage.getItem("classify")).clothes
    : [];

  return (
    <div className="clothing">
      {datas.length
        ? datas.map((data) => (
            <div key={data.img}>
              <img src={`imgs/classify/clothes/${data.img}`} alt="" />
              <span>{data.name}</span>
            </div>
          ))
        : null}
    </div>
  );
}

export default Clothing;
