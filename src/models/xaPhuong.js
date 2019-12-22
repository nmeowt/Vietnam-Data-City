import connection from "../connection"
import listXaPhuong from "../../data/xa_phuong.json";

const XaPhuong = function (xaPhuong) {
  this.code = xaPhuong.code;
  this.name = xaPhuong.name;
  this.type = xaPhuong.type;
  this.nameWithType = xaPhuong.nameWithType;
  this.slug = xaPhuong.slug;
  this.path = xaPhuong.path;
  this.pathWithType = xaPhuong.pathWithType;
  this.parentCode = xaPhuong.parentCode;
}

XaPhuong.insertData = function (result) {
  let communeArray = [];
  for (let item in listXaPhuong) {
    communeArray.push(listXaPhuong[item]);
    connection.query("Insert into xaPhuong set ?", listXaPhuong[item], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
    })
  }
  result(null, communeArray);
}

module.exports = XaPhuong;