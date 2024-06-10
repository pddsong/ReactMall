import "./Clothing.scss";
function Electrical() {
  const datas = JSON.parse(localStorage.getItem("classify"))
    ? JSON.parse(localStorage.getItem("classify")).electrical
    : [];

  return (
    <div className="clothing">
      {datas.length
        ? datas.map((data) => (
            <div key={data.img}>
              <img src={`imgs/classify/electrical/${data.img}`} alt="" />
              <span>{data.name}</span>
            </div>
          ))
        : null}
    </div>
  );
}

export default Electrical;
