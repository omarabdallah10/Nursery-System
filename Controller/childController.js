const Child = require("../Model/childSchema");

//get all children
exports.getAllChildren = (request, response, next) => {
  Child.find({})
    .populate({ path: "class" }) //to get the department data
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

//Add child
exports.addNewChild = (request, response, next) => {
  // response.json({body: request.body, file: request.file});

  //create object from child schema
  const object = new Child({
    _id: request.body.id,
    name: request.body.name,
    age: request.body.age,
    class: request.body.class,
    image: request.file.filename,
  });

  //save the object to the database
  object
    .save()
    .then((data) => {
      response.status(201).json({ message: "A new child added", data });
    })
    .catch((error) => {
      next(error);
    });
};

//update child data
exports.updateChildData = (request, response, next) => {
  //update the child data included the image
  Child.findByIdAndUpdate(request.params.id, {
    name: request.body.name,
    age: request.body.age,
    class: request.body.class,
    image: request.file.filename,
  })
    .then((data) => {
      if (!data) throw new Error("No child found with that id");
      response
        .status(201)
        .json({ message: "Child updated successfully", data });
    })
    .catch((error) => next(error));
  // Child.findByIdAndUpdate(request.params.id, request.body)
  //   .then((data) => {
  //     if (!data) throw new Error("No child found with that id");
  //     response
  //       .status(201)
  //       .json({ message: "Child updated successfully", data });
  //   })
  //   .catch((error) => next(error));
  // response.json({ data: "Update child data" });
};

//get a child by id
exports.getChildById = (request, response, next) => {
  Child.find({ _id: request.params.id })
    .populate({ path: "class", select: { name: 1 } }) //to get the department data
    .then((data) => {
      if (data.length === 0)
        // if no child found
        throw new Error("No child found with that id");

      response.status(200).json({ message: "Get a child by id", data });
    })
    .catch((error) => next(error));
};

//delete a child by id
exports.deleteChild = (request, response, next) => {
  Child.deleteOne({ _id: request.params.id })
    .then((data) => {
      if (data.deletedCount === 0)
        // if no child found
        throw new Error("No child found with that id");

      response.status(200).json({ message: "Child deleted successfully" });
    })
    .catch((error) => next(error));
};
