# CRUD Blog in React

## 用 React 寫簡單的部落格前端，JSON-Server 當作本地資料庫，練習 CRUD 互動

### 1.功能

- 新增文章
- 刪除文章
- 編輯文章

#### \*需先啟動 JSON-Server :

- 指令: npx json-server --watch data/db.json --port 8000 (不安裝啟動)

### 2.練習

- React
- JSON-Server

### 3.一些筆記

- POST 請求時未自定義 ID，使用 JSON-Server 自動產生 ID 的功能
- 使用 React-Router v5 useHistory，在 v6 已被 useNavigate 取代
- 如果 fetch 資料失敗，使用 AbortController 中斷
- input / textarea 在 react 當中 defaultValue 和 value 的差別?

### 4.尚可改進

- 教學把 fetch data 寫成一個 component，因自己試著新增編輯文章頁面，載入頁面時需要把 fetch 到的 blog 資料存入 state，目前放在.then 裡面執行，重寫了 useFetch 元件 內很多重複的 code，更好的寫法?

### Source: [Full Modern React Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d) by The Net Ninja
