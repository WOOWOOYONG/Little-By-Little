const schedulesEl = document.querySelector("#schedules");
const loadingEl = document.querySelector("#loading");
let loading = false;

const getSchedulesFromBackend = async () => {
  loading = true;
  const res = await fetch("http://localhost:5000/schedules");
  const data = await res.json();
  loading = false;
  return data;
};

const addSchedulesToDom = async () => {
  const schedules = await getSchedulesFromBackend();
  if (!loading) {
    loadingEl.innerHTML = "";
  }

  schedules.forEach((item) => {
    const div = document.createElement("div");
    div.className = "schedules";
    div.innerHTML = `
    <h3>${item.title}</h3>
    <ul>
    <li><strong>Date: </strong> ${item.date} </li>
    <li><strong>Description: </strong> ${item.description} </li>
    </ul>
    <div class="tags"> ${item.tags} </div>
    `;
    schedulesEl.appendChild(div);
  });
};

addSchedulesToDom();
