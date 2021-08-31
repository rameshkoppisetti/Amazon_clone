<div>
  <Head>
    <title>Test</title>
    <link href="/static/master.css" rel="stylesheet" key="test" />
  </Head>
</div>;
function Footee() {
  return (
    <footer>
      <div className="items-center space-x-3 p-1 pl-4 bg-amazon_blue-light text-white text-sm ">
        <p className="text-white p-5">Part1</p>
      </div>
      <div className="items-center space-x-3 p-1 pl-4 bg-amazon_blue text-white text-sm">
        <div className="flex flex-column items-center space-x-3 ">
          <div className="p-3 ">sub1</div>
          <div>sub2</div>
          <div>sub3</div>
          <div>sub4</div>
          <div>sub5</div>
          <div>sub6</div>
        </div>
        <p className="text-white p-5">Part2</p>
      </div>
    </footer>
  );
}

export default Footee;
