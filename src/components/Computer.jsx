import "./Clothing.scss";
function Computer() {
  const datas = JSON.parse(localStorage.getItem("classify"))
    ? JSON.parse(localStorage.getItem("classify")).computer
    : [];

  return (
    <div className="clothing">
      {datas.length
        ? datas.map((data) => (
            <div key={data.img}>
              <img src={`imgs/classify/computer/${data.img}`} alt="" />
              <span>{data.name}</span>
            </div>
          ))
        : null}
    </div>
  );
}

export default Computer;
