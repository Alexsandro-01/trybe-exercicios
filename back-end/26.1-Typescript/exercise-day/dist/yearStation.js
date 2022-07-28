"use strict";
var months;
(function (months) {
    months[months["january"] = 1] = "january";
    months[months["february"] = 2] = "february";
    months[months["march"] = 3] = "march";
    months[months["april"] = 4] = "april";
    months[months["may"] = 5] = "may";
    months[months["juny"] = 6] = "juny";
    months[months["julhy"] = 7] = "julhy";
    months[months["august"] = 8] = "august";
    months[months["septemble"] = 9] = "septemble";
    months[months["octuble"] = 10] = "octuble";
    months[months["novemble"] = 11] = "novemble";
    months[months["decemble"] = 12] = "decemble";
})(months || (months = {}));
var stations;
(function (stations) {
    stations[stations["autumn"] = 0] = "autumn";
    stations[stations["winter"] = 1] = "winter";
    stations[stations["sprin"] = 2] = "sprin";
    stations[stations["summer"] = 3] = "summer";
})(stations || (stations = {}));
console.log(stations[0]);
