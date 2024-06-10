import lala from "../image/lala.jpg";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>adim信息管理首页</h1>
      <img src={lala} alt="首页图片" width={"650px"} />
    </div>
  );
}

export default Home;
