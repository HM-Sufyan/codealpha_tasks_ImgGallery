let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");
let item10 = document.getElementById("item10");
let item11 = document.getElementById("item11");
let item12 = document.getElementById("item12");
let grid_container = document.getElementById("grid_container");

item1.addEventListener("click", handle);
item2.addEventListener("click", handle);
item3.addEventListener("click", handle);
item4.addEventListener("click", handle);
item5.addEventListener("click", handle);
item6.addEventListener("click", handle);
item7.addEventListener("click", handle);
item8.addEventListener("click", handle);
item9.addEventListener("click", handle);
item10.addEventListener("click", handle);
item11.addEventListener("click", handle);
item12.addEventListener("click", handle);

function handle() {
  this.classList.add("run");

  const ionIcon = document.createElement("ion-icon");
  ionIcon.setAttribute("name", "close-circle-outline");
  ionIcon.setAttribute("id", "close_icon");
  grid_container.appendChild(ionIcon);

  // ================ For Close the pop-up image ==============
  let close_pop = document.getElementById("close_icon");
  close_pop.addEventListener("click", () => {
    this.classList.remove("run");
    ionIcon.remove();
    const AllItems = document.querySelectorAll(".AllItems");
    AllItems.forEach((ele) => {
      ele.classList.remove("AllItems_none");
      // ================ For add again Event Listner ===================
      if (this == item1) {
        item1.addEventListener("click", handle);
      }
      if (this == item2) {
        item2.addEventListener("click", handle);
      }
      if (this == item3) {
        item3.addEventListener("click", handle);
      }
      if (this == item4) {
        item4.addEventListener("click", handle);
      }
      if (this == item5) {
        item5.addEventListener("click", handle);
      }
      if (this == item6) {
        item6.addEventListener("click", handle);
      }
      if (this == item7) {
        item7.addEventListener("click", handle);
      }
      if (this == item8) {
        item8.addEventListener("click", handle);
      }
      if (this == item9) {
        item9.addEventListener("click", handle);
      }
      if (this == item10) {
        item10.addEventListener("click", handle);
      }
      if (this == item11) {
        item11.addEventListener("click", handle);
      }
      if (this == item12) {
        item12.addEventListener("click", handle);
      }
    });
  });

  // ==================== For Display None for others ==================

  if (!this.classList.add("AllItems")) {
    this.classList.remove("AllItems");
    const AllItems = document.querySelectorAll(".AllItems");
    AllItems.forEach((ele) => {
      ele.classList.add("AllItems_none");
    });
    this.classList.add("AllItems");
  }

  // ===================== For remove click event Listner so after one attempt it wont run function again otherwies it will create more close icon and it wont work ============================
  if (this == item1) {
    item1.removeEventListener("click", handle);
  }
  if (this == item2) {
    item2.removeEventListener("click", handle);
  }
  if (this == item3) {
    item3.removeEventListener("click", handle);
  }
  if (this == item4) {
    item4.removeEventListener("click", handle);
  }
  if (this == item5) {
    item5.removeEventListener("click", handle);
  }
  if (this == item6) {
    item6.removeEventListener("click", handle);
  }
  if (this == item7) {
    item7.removeEventListener("click", handle);
  }
  if (this == item8) {
    item8.removeEventListener("click", handle);
  }
  if (this == item9) {
    item9.removeEventListener("click", handle);
  }
  if (this == item10) {
    item10.removeEventListener("click", handle);
  }
  if (this == item11) {
    item11.removeEventListener("click", handle);
  }
  if (this == item12) {
    item12.removeEventListener("click", handle);
  }
}

// ========= For Toogle the Column and Slide View ==============
const toogle = () => {
  let toogle_text = document.getElementById("toogle_text");
  let grid_icon = document.getElementById("grid_icon");
  let slide_icon = document.getElementById("slide_icon");
  let hero_section = document.getElementById("hero_section");
  let grid_container = document.getElementById("grid_container");
  let slide_container = document.getElementById("slide_container");

  if (toogle_text.innerText == "Column View") {
    toogle_text.innerText = "Slide View";
    grid_icon.style.display = "none";
    slide_icon.style.display = "block";
    grid_container.style.display = "none";
    slide_container.style.display = "block";
    hero_section.classList.remove("hero");
    hero_section.add("hero_slider");
  } else if (toogle_text.innerText == "Slide View") {
    toogle_text.innerText = "Column View";
    slide_icon.style.display = "none";
    grid_icon.style.display = "block";
    slide_container.style.display = "none";
    grid_container.style.display = "grid";
    hero_section.classList.remove("hero_slider");
    hero_section.classList.add("hero");
  }
};
