const VenderService = require("../models/venderModel");
const mongoose = require("mongoose");

// get all services
const getServices = async (req, res) => {
  try {
    const services = await VenderService.find({});
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get one service
const getOneService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such VenderService" });
  }

  try {
    const service = await VenderService.findById(id);

    if (!service) {
      return res.status(404).json({ error: "no such VenderService" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a new VenderService
const createService = async (req, res) => {


  try {
    const service = await VenderService.create({...req.body});
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete service
const deleteService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid service ID" });
  }

  try {
    const service = await VenderService.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ error: "No such service" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update service
const updateService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid service ID" });
  }

  try {
    const service = await VenderService.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!service) {
      return res.status(404).json({ error: "No such service" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getServices,
  getOneService,
  updateService,
  deleteService,
  createService,
};
