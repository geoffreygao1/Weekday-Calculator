import Dates from "./weekday.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


document.querySelector('#dateForm').addEventListener("submit", convertDateHandler);

function convertDateHandler(event) {
  event.preventDefault();
  let date = new Dates();
  let dateInput = document.getElementById("dateInput").value;
  date.longDate = dateInput;
  date.getDay();
  document.getElementById("result").innerText = ("This day is a " + date.weekday);
}
