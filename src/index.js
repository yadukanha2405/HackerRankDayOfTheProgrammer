import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function main(year) {
  var y = year;
  var leap = 0;
  var date = "";
  if (y < 1918) {
    if (y % 4 === 0) {
      leap = -1;
    }
    date = 13 + leap + ".09." + y;
  } else if (y > 1918) {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      leap = -1;
    }
    date = 13 + leap + ".09." + y;
  } else {
    date = "26.09.1918";
  }
  return date;
}
let result = main(2014);
console.log(result);
