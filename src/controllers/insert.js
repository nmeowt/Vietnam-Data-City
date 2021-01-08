import TinhThanh from "../models/tinhThanh";
import QuanHuyen from "../models/quanHuyen";
import XaPhuong from "../models/xaPhuong";

exports.insertData = async function (req, res) {
  await TinhThanh.insertData(function (err) {
    if (err)
      res.status(400).send({ status: 400, err });
  });
  await QuanHuyen.insertData(function (err) {
    if (err)
      res.status(400).send({ status: 400, err });
  });
  await XaPhuong.insertData(function (err) {
    if (err)
      res.status(400).send({ status: 400, err });
  });

  res.status(200).send({
    status: 200,
    success: 'true',
    message: 'inserted successfully',
  });
}

exports.insertQuanHuyen = async function (req, res) {
  console.log("hello");
  await QuanHuyen.insertData(function (err) {
    if (err)
      res.status(400).send({ status: 400, err });
  });
  res.status(200).send({
    status: 200,
    success: 'true',
    message: 'inserted successfully',
  });
}