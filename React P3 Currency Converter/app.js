const { useState } = React;

function App() {
  const [TWD, setTWD] = useState("");
  const [currencylist, setCurrencylist] = useState([
    { name: "日幣", rate: 4.54 },
    { name: "美金", rate: 0.03 },
    { name: "澳幣", rate: 0.048 },
    { name: "韓幣", rate: 43 },
    { name: "印尼幣", rate: 500 },
  ]);
  //新增貨幣種類
  const [newcurrency, setNewcurrency] = useState();
  const [newrate, setNewrate] = useState();
  //錢包金額
  const [wallet, setWallet] = useState(5000);
  //兌換紀錄
  const [record, setRecord] = useState([]);

  //台幣兌換外幣
  const exchange = () => {
    if (TWD !== "" && TWD > 0) {
      const newcurrencylist = currencylist.map((c) => {
        c.result = TWD * c.rate;
        return c;
      });
      setCurrencylist(newcurrencylist);
    } else {
      alert("請輸入正確資料");
      return;
    }
  };

  const addnewcurrency = () => {
    if (newcurrency !== "" && newrate > 0) {
      const newone = { name: newcurrency, rate: newrate };
      setCurrencylist([...currencylist, newone]);
    } else {
      alert("請輸入正確資料");
      return;
    }
  };
  const convert = (currency, currencyValue) => {
    if (wallet - TWD < 0 || TWD == "") {
      alert("錢呢?");
      return;
    }
    setWallet(wallet - TWD);
    const newrecord = {
      TWD,
      currency,
      currencyValue,
    };

    setRecord([...record, newrecord]);
  };

  return (
    <div className="container-fluid">
      <div>
        <h4>新增幣種</h4>
        <input
          className="me-2"
          type="text"
          placeholder="幣種名稱"
          value={newcurrency}
          onChange={(e) => {
            setNewcurrency(e.target.value);
          }}
        />
        <input
          className="me-3"
          type="text"
          placeholder="匯率"
          value={newrate}
          onChange={(e) => {
            setNewrate(e.target.value);
          }}
        />
        <input
          type="button"
          value="新增幣種"
          onClick={addnewcurrency}
          className="btn btn-primary btn-sm "
        />
      </div>

      <hr />
      <div>
        <h4>您錢包還有 {wallet} 元</h4>
        <input
          className="me-3"
          type="text"
          placeholder="台幣"
          value={TWD}
          onChange={(e) => setTWD(e.target.value)}
        />
        <input
          type="button"
          value="計算"
          onClick={exchange}
          className="btn btn-primary btn-sm"
        />
        <p>可以換算</p>
        <ul>
          {currencylist.map((item, i) => {
            return (
              <li key={i}>
                {item.name}:{item.result}
                <input
                  type="button"
                  value="兌換"
                  onClick={() => {
                    convert(item.name, item.result);
                  }}
                  className="btn btn-secondary btn-sm m-2"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div>
        <h4>您的兌換記錄</h4>
        <ul>
          {record.map((item, i) => {
            return (
              <li key={i}>
                您用{item.TWD}元台幣，兌換了{item.currencyValue}
                {item.currency}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
