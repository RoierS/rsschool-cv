const year = document.getElementById("year");
const actualYear = new Date().getFullYear();
year.setAttribute("datetime", actualYear);
year.textContent = actualYear;
