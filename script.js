let addressbookarr = [
  { id: 1, name: "Roobinee", phonenumber: 6380749031 },
  { id: 2, name: "Jayanthi", phonenumber: 9790805958 },
  { id: 3, name: "Rajesh", phonenumber: 9380012420 },
];

const nameRef = document.getElementById("name");
const phonenumberRef = document.getElementById("phonenumber");
const btnRef = document.getElementById("btn");
const listRef = document.getElementById("list");

const deleteId = (delid) => {
  addressbookarr = addressbookarr.filter((retainId) => {
    if (retainId.id !== delid) {
      return retainId;
    }
  });
  render();
};

let editid=0;

const editId = (id) => {
  editid = id;
  const clickedname = addressbookarr.find((element) => element.id === id);
  btnRef.innerText = "Edit";
  nameRef.value = clickedname.name;
  phonenumberRef.value = clickedname.phonenumber;
};
const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

const render = () => {
  let addressbookDiv = "";

  for (let item of addressbookarr) {
    addressbookDiv += `<div class="d-flex align-items-center justify-content-between p-2 border-bottom border-primary">
                  <p class="fs-5 m-0">${item.name}</p>
                  <p class="fs-5 m-0">${item.phonenumber}</p>
                  <div>
                    <button class="btn" onclick="editId(${item.id})">Edit</button>
                    <button onclick="deleteId(${item.id})" class="btn text-danger" >Delete</button>
                  </div>
                </div>`;
  }
  listRef.innerHTML = addressbookDiv;
};

btnRef.addEventListener("click", () => {
  console.log("clicked");
  if (nameRef.value !== "" && phonenumberRef.value !== "") {
    if (editid === 0) {
      console.log(editid);
        addressbookarr.push({
        id: getRandomNumber(),
        name: nameRef.value,
        phonenumber: phonenumberRef.value,
      });
    } else {
      addressbookarr = addressbookarr.map((element) => {
        if (element.id === editid)
          return {
            ...element,
            name: nameRef.value,
            phonenumber: phonenumberRef.value,
          };
        else return element;
      });
      editid = 0;
      
      btnRef.innerText="Add";
      
    }
    nameRef.value = "";
      phonenumberRef.value = "";
    render();

  } else {
    nameRef.classList.replace("border-primary", "is-invalid");
    phonenumberRef.classList.replace("border-primary", "is-invalid");
  }
});


nameRef.addEventListener("keyup", () => {
  if (nameRef.value !== "") {
    nameRef.classList.replace("is-invalid", "border-primary");
  } else {
    nameRef.classList.replace("border-primary", "is-invalid");
  }
});

phonenumberRef.addEventListener("keyup", () => {
  if (phonenumberRef !== "") {
    phonenumberRef.classList.replace("is-invalid", "border-primary");
  } else {
    phonenumberRef.classList.replace("is-invalid", "border-primary");
  }
});

render();
