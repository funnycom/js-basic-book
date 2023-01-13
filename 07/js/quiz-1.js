var numbers = [2, 4, 6, 8, 10];
showArray(numbers);

function showArray(arr) {
  var str = "<table><tr>";
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    str += "<td>" + arr[i] + "</td>";
  }

  str += `<td>${sum}</td></tr></table>`;
  document.write(str);
}
