const VenderService = require("../models/venderModel");

const mongoose = require("mongoose");

// get all services
const getServices = async (req, res) => {
  const services = VenderService.find({});
  res.status(200).json(services);
};

// get one service
const getOneService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such VenderService" });
  }

  const service = VenderService.findById(id);

  if (!service) {
    return res.status(404).json({ error: "no such VenderSerice" });
  }

  res.status(200).json(service);
};

// create a new VenderServcie

const createService = async (req, res) => {
  const { name, discription, venderName } = req.body;

  const emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }

  if (!discription) {
    emptyFields.push("discription");
  }

  if (!venderName) {
    emptyFields.push("venderName");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all the fields", emptyFields });
  }

  // add to data base

  try {
    const service = await VenderService.create({ ...req.body });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete service
const deleteService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such servie" });
  }

  const service = await VenderService.findOneAndDelete({ _id: id });

  if (!service) {
    return res.status(400).json({ error: "no such service" });
  }

  res.status(200).json(service);
};

// update servie

const updateService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such service" });
  }

  const service = await VenderService.FindOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!service) {
    return res.status(400).json({ error: "no such service" });
  }

  res.status(200).json(service);
};

module.exports = {
  getServices,
  getOneService,
  updateService,
  deleteService,
  createService,
};
