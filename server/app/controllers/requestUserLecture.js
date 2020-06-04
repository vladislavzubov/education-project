const LectureModel = require('../models/lecture');
const UserResponseModel = require('../models/userResponse');

const Lecture = LectureModel;
const UserResponse = UserResponseModel;

const requestUserLecture = async (req, res) => {
  const lectureId = req.body.lectureId;
  const resolveSerch = await serachForUserResponse(req.body);
  
  if (!resolveSerch) {
    await Lecture.findOne({ _id: lectureId })
      .exec()
      .then((lecture) => res.json(lecture))
      .catch((err) => res.status(500).json(err));
  }
  if (resolveSerch.response.length!==0) {
    await Lecture.findOne({ _id: lectureId })
      .exec()
      .then((lecture) => res.json(lecture))
      .catch((err) => res.status(500).json(err));
  }
  res.json({ exersice: resolveSerch.exersice });
};

// const getOneLecture = (lectureId, res) => {
//   Lecture.findOne({ _id: lectureId })
//     .exec()
//     .then((lecture) => res.json(lecture))
//     .catch((err) => res.status(500).json(err));
// };

const serachForUserResponse = async (body) => {
  const { userId, lectureId } = body;

  const res = await UserResponse.findOne({ $and: [{ userId }, { lectureId }] });

  return res;
};

module.exports = {
  requestUserLecture,
};
