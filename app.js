import { db } from "./firebase.js";
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const paidRef = ref(db, "payments");

let paidData = {};

onValue(paidRef, (snapshot) => {
    paidData = snapshot.val() || {};
    renderGrid();
});

function togglePayment(unit) {

    let current = paidData[unit] ? false : true;

    set(ref(db, "payments/" + unit), current);
}

function renderGrid() {

    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    const floors = ["62", "61", "60", "59", "58", "57", "56", "55", "54", "53"];
    const units = ["2", "1", "0"];

    floors.forEach(floor => {

        units.forEach(unit => {

            let unitNumber = floor + "." + unit;

            let div = document.createElement("div");
            div.className = "unit";

            if (paidData[unitNumber])
                div.classList.add("paid");
            else
                div.classList.add("unpaid");

            div.innerText = unitNumber;

            div.onclick = function () {
                togglePayment(unitNumber);
            }

            grid.appendChild(div);

        });

    });

}