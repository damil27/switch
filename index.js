document.getElementById("calculate").addEventListener("click", function () {
  var list = document.getElementById("main-input").value;
  list = list.replaceAll(" ", "");
  list = list.split(",");

  list = list.map((item, index) => {
    return parseInt(item);
  });

  var operator = document.getElementById("operator").value;

  switch (operator) {
    // sum calculation
    case "sum":
      var sum = 0;
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list[i]);
      }
      document.getElementById("output").innerHTML = sum;
      break;
    // average calculation
    case "average":
      var sum = 0;
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list[i]);
      }
      document.getElementById("output").innerHTML = sum / list.length;
      break;
    // min calculation
    case "min":
      var min = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] < min) {
          min = list[i];
        }
      }
      document.getElementById("output").innerHTML = min;
      break;

    // max calculation
    case "max":
      var max = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] > max) {
          max = list[i];
        }
      }
      document.getElementById("output").innerHTML = max;
      break;

    //median calculation
    case "median":
      // sort list
      for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
          if (list[i] < list[j]) {
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      // get median
      var median = 0;
      if (list.length % 2 == 0) {
        median = (list[list.length / 2] + list[list.length / 2 - 1]) / 2;
      } else {
        median = list[Math.floor(list.length / 2)];
      }
      document.getElementById("output").innerHTML = median;
      break;
    // mode calculation
    // mode calculation
    case "mode":
      var counters = {};
      var mode = [];
      var highestFrequency = 0;
      for (var i = 0; i < list.length; i++) {
        const num = list[i];
        counters[num] = (counters[num] || 0) + 1;
        if (counters[num] > highestFrequency) {
          highestFrequency = counters[num];
        }
      }

      for (const [key, val] of Object.entries(counters)) {
        if (val === highestFrequency) {
          mode.push(parseInt(key));
        }
      }

      if (mode.length === list.length) {
        document.getElementById("output").innerHTML = "No mode";
      } else {
        document.getElementById("output").innerHTML = mode.join(", ");
      }
      break;

    // ranger calculation
    case "range":
      var min = list[0];
      var max = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] < min) {
          min = parseInt(list[i]);
        }
        if (list[i] > max) {
          max = parseInt(list[i]);
        }
      }
      document.getElementById("output").innerHTML = max - min;
      break;
    // default ca
    default:
      document.getElementsById("output").innerHTML = "Invalid Operator";
      break;
  }
});
