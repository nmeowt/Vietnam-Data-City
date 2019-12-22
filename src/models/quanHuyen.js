import connection from "../connection"
import listQuanHuyen from "../../data/quan_huyen.json";

const QuanHuyen = function (quanHuyen) {
  this.code = quanHuyen.code;
  this.name = quanHuyen.name;
  this.type = quanHuyen.type;
  this.nameWithType = quanHuyen.nameWithType;
  this.slug = quanHuyen.slug;
  this.path = quanHuyen.path;
  this.pathWithType = quanHuyen.pathWithType;
  this.parentCode = quanHuyen.parentCode;
}

QuanHuyen.insertData = function (result) {
  let districtArray = [];
  for (let item in listQuanHuyen) {
    districtArray.push(listQuanHuyen[item]);
    connection.query("Insert into quanHuyen set ?", listQuanHuyen[item], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
    })
  }
  result(null, districtArray);
}

module.exports = QuanHuyen;