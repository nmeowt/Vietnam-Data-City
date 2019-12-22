import connection from "../connection"
import listCity from "../../data/tinh_tp.json";

const TinhThanh = function (tinhThanh) {
  this.code = tinhThanh.code;
  this.name = tinhThanh.name;
  this.type = tinhThanh.type;
  this.nameWithType = tinhThanh.nameWithType;
  this.slug = tinhThanh.slug;
}

TinhThanh.insertData = function (result) {
  let cityArray = [];
  for (let item in listCity) {
    cityArray.push(listCity[item]);
    connection.query("Insert into tinhThanhPho set ?", listCity[item], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
    })
  }
  result(null, cityArray);
}

module.exports = TinhThanh;