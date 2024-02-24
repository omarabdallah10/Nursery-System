const Class = require("../Model/classSchema");

//get all classes
exports.getAllClass = (request, response, next) => {
  Class.find({})
    .then((data) => {
      response.status(200).json({ message: "Get all classes!", data });
    })
    .catch((error) => next(error));
};

//add new class
exports.addNewClass = (request, response, next) => {
  const object = new Class(request.body);
  object
    .save()
    .then((data) => {
      response.status(201).json({ message: "A new class added", data });
    })
    .catch((error) => {
      next(error);
    });

  // response.json({ data: "New class added!" });
};

//update class data
exports.updateClassData = (request, response, next) => {
  Class.findByIdAndUpdate(request.params.id, request.body)
    .then((data) => {
      if (!data) 
        throw new Error("No class found with that id");

      response.status(201).json({ message: "Class updated successfully", data });
    })
    .catch((error) => next(error));
  // response.json({ data: "Update class data" });
};

//delete class data
exports.deleteClassData = (request, response, next) => {
  Class.deleteOne({ _id: request.params.id })
    .then((data) => {
      if (data.deletedCount === 0) 
        throw new Error("No class found with that id");

      response.status(200).json({ message: "Class deleted successfully" });
    })
    .catch((error) => next(error));
  // response.json({ data: "Delete class data" });
};

//get a class by id
exports.getClassById = (request, response, next) => {
  Class.find({ _id: request.params.id })
    .then((data) => {
      if (data.length === 0) 
        throw new Error("No class found with that id");

      response.status(200).json({ message: "Get a class by id", data });
    })
    .catch((error) => next(error));
};

//get class children info
exports.getClassChildren = (request, response, next) => {
  Class.find({ _id: request.params.id })
    .populate({ path: "children", select: { name: 1 } }) //to get the children data
    .then((data) => {
      if (data.length === 0) 
        throw new Error("No class found with that id");

      response.status(200).json({ message: "Get class children info", data });
    })
    .catch((error) => next(error));
  // response.json({ data: "Get class children info" });
};

//get the class supervisor info
exports.getClassSupervisor = (request, response, next) => {
  Class.find({ _id: request.params.id })
    .populate({ path: "supervisor", select: { name: 1 } }) //to get the supervisor data
    .then((data) => {
      if (data.length === 0) 
        throw new Error("No class found with that id");

      response.status(200).json({ message: "Get class supervisor info", data });
    })
    .catch((error) => next(error));
  // response.json({ data: "Get class Teacher info" });
};
