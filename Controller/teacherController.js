const Teacher = require("../Model/teacherSchema");

//get all teachers
exports.getAllTeachers = (request, response, next) => {
  Teacher.find({})
    .populate({ path: "class", select: { name: 1 } })
    .then((data) => {
      response.status(200).json({ message: "Get all teachers!", data });
    })
    .catch((error) => next(error));

  // response.json({data: "Get all teachers!"})
};

//get a teacher by id
exports.getTeacherById = (request, response, next) => {
  Teacher.find({ _id: request.params.id })
    .populate({ path: "class", select: { name: 1 } })
    .then((data) => {
      if (data.length === 0) throw new Error("No teacher found with that id");
      response.status(200).json({ message: "Get a teacher by id", data });
    })
    .catch((error) => next(error));
  // response.json({data: "Get a teacher by id!"})
};

//add a new teacher
exports.addNewTeacher = (request, response, next) => {
  const object = new Teacher({
    _id: request.body.id,
    name: request.body.name,
    age: request.body.age,
    class: request.body.class,
    image: request.file.filename,
  });
  object
    .save()
    .then((data) => {
      response.status(201).json({ message: "A new teacher added", data });
    })
    .catch((error) => next(error));
  // response.json({data: "New teacher added!"})
};

//update a teacher
exports.updateTeacher = (request, response, next) => {
  //update the teacher data included the image
  Teacher.findByIdAndUpdate(request.params.id, {
    name: request.body.name,
    age: request.body.age,
    class: request.body.class,
    image: request.file.filename,
  })
    .then((data) => {
      if (!data) throw new Error("No teacher found with that id");
      response
        .status(201)
        .json({ message: "Teacher updated successfully", data });
    })
    .catch((error) => next(error));
  // response.json({data: "Edit a teacher!"})
};

//delete a teacher by id
exports.deleteTeacher = (request, response, next) => {
  Teacher.deleteOne({ _id: request.params.id })
    .then((data) => {
      if (data.deletedCount === 0)
        throw new Error("No teacher found with that id");
      response.status(200).json({ message: "Teacher deleted successfully!" });
    })
    .catch((error) => next(error));

  // response.json({data: "Delete a teacher by id!"})
};

//get all supervisors
exports.getAllSupervisors = (request, response, next) => {
  response.json({ data: "Get all supervisors!" });
};
