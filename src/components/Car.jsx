import "./Clothing.scss";
function Car() {
  // eslint-disable-next-line no-unused-vars

  const datas = JSON.parse(localStorage.getItem("classify"))
    ? JSON.parse(localStorage.getItem("classify")).car
    : [];

  return (
    <div className="clothing">
      {datas.length
        ? datas.map((data) => (
            <div key={data.img}>
              <img src={`imgs/classify/car/${data.img}`} alt="" />
              <span>{data.name}</span>
            </div>
          ))
        : null}
    </div>
  );
}

export default Car;
