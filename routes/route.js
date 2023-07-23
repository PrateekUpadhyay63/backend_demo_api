const express = require("express");

const router = express.Router();
const postModel = require("../models/postData");
const prePostModel = require("../models/prepostData");

router.post("/postApi", async (req, res) => {
  try {
    const createData = new postModel(req.body);
    await createData.save();
    if (!createData) throw new Error("Unable to create Data");
    return res.status(200).json({
      success: true,
      message: "Created",
      data: createData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
router.get("/getApi", async (req, res) => {
  try {
    const data = await postModel.find(
      {},
      { first_name: 1, last_name: 1, pan: 1, office_addr: 1 }
    );
    if (!data.length) {
      return res
        .status(404)
        .json({ success: false, message: "Data Not Found" });
    }
    return res.status(200).json({
      success: true,
      message: "Data found",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.delete("/deleteApi", async (req, res) => {
  try {
    await postModel.deleteMany();
    return res.status(200).json({
      success: true,
      message: "Data Deleted Succesfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
// router.post("/prePostApi", async (req, res) => {
//   try {
//     const createData = new prePostModel(req.body);
//     await createData.save();
//     if (!createData) throw new Error("Unable to create Data");
//     return res.status(200).json({
//       success: true,
//       message: "Created",
//       data: createData,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });
router.get("/", async (req, res) => {
  res.send("No Data");
});

module.exports = router;
