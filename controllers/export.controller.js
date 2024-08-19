const Exportation = require("../model/exportatiion");

const getExportation = async (req, res) => {
  const exportations = await Exportation.find();
  res.json(exportations);
};

const postExportation = async (req, res) => {
  let msg = "New exportation added";
  const body = req.body;
  try {
    const exportation = new Exportation(body);
    await exportation.save();
  } catch (error) {
    msg = error;
  }
  res.json({ msg: msg });
};

module.exports = {
  getExportation,
  postExportation,
};
