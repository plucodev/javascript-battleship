/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let board_div = document.querySelector(".playerBoard");
  // board_div.addEventListener("click", shoot, false);
  let num_rows = 10;
  let num_cols = 10;

  // Create board
  let board = [];

  // Create Rows
  for (var y = 0; y < num_rows; y++) {
    let arr = [];

    // Create the row div with bootstrap
    let row = document.createElement("div");
    board_div === "enemyBoard"
      ? (row.className = "row enemyRow")
      : (row.className = "row enemyRow");

    // Create Columns
    for (var x = 0; x < num_cols; x++) {
      arr.push(0);

      // Add a class id.. THEY CAN NOT START WITH A NUMBER!!!
      let square = document.createElement("div");
      board_div === "enemyBoard"
        ? (square.className = "enemyCell-" + y + x)
        : (square.className = "playerCell-" + y + x);

      row.appendChild(square);
    }

    board.push(arr);
    board_div.appendChild(row);
  }
};
