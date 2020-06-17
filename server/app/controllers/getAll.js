const CategoryModel = require('../models/category');
const LectureModel = require('../models/lecture');
const ExerciseModel = require('../models/exercise');
const UserResponseModel = require('../models/userResponse');
const UserModel = require('../models/user');

const User = UserModel;
const UserResponse = UserResponseModel;
const Exercise = ExerciseModel;
const Lecture = LectureModel;
const Category = CategoryModel;

const getAll = async (req, res) => {
  let categoryes;
  let lectures;
  let exercises;
  let userResponses;
  let userInfo;

  await Category.find()
    .exec()
    .then((category) => (categoryes = category))
    .catch((err) => res.status(500).json(err));

  await Lecture.find()
    .then((lecture) => (lectures = lecture))
    .catch((err) => res.status(500).json(err));

  await Exercise.find()
    .exec()
    .then((exercise) => (exercises = exercise))
    .catch((err) => res.status(500).json(err));

  await UserResponse.find({ userId: req.params.id })
    .exec()
    .then((userResponse) => {
      userResponses = userResponse;
    })
    .catch((err) => res.status(500).json(err));

  await User.findById(req.params.id)
    .exec()
    .then((us) => (userInfo = us))
    .catch((err) => res.status(500).json(err));

  const lecturesFull = lectures.reduce((currentValue, lecture) => {
    const value = {
      lectureId: lecture._id,
      categoryId: lecture.category,
      title: lecture.title,
      value: lecture.value,
      link: lecture.link,
      numberOfText: lecture.numberOfText,
      numberOfTest: lecture.numberOfTest,
      numberOfCode: lecture.numberOfCode,
    };

    const response = userResponses.find((resp) => {
      return resp.lectureId === String(lecture._id);
    });

    let texts = [];
    let codes = [];
    let tests = [];

    if (!!response) {
      if (!!response.exercise) {
        response.exercise.texts.map((text) => {
          const ans = response.response[text._id];
          if (ans) {
            texts.push({
              question: text.question,
              answerUser: ans,
            });
          } else {
            texts.push({
              question: text.question,
            });
          }
        });
        response.exercise.codes.map((code) => {
          const ans = response.response[code._id];
          if (ans) {
            codes.push({
              question: code.question,
              answerUser: ans,
            });
          } else {
            codes.push({
              question: code.question,
            });
          }
        });

        response.exercise.tests.map((test) => {
          const ans = response.response[test._id];

          if (ans) {
            let answerUser = test.quantity;

            const exercise = exercises.find((resp) => {
              return String(resp._id) === String(test._id);
            });
            let right;
            for (
              let index = 0;
              index < Object.keys(answerUser).length;
              index++
            ) {
              const truthfulness = ans.filter(
                (title) => title === answerUser[index]
              );
              let resolveTruthfulness;
              if (truthfulness.length === 0) {
                resolveTruthfulness = undefined;
              } else {
                resolveTruthfulness = true;
              }

              const rigth = Object.keys(exercise.correctAnswers).includes(
                String(index)
              );

              const answer = (answerUser[index] = {
                title: answerUser[index],
                rigth,
                answersUser: resolveTruthfulness,
                question: test.question,
              });
              console.log(answer);
              //встваить answer в right индекс это ключ пример ниже
            //   var tempData = {};
            //   for ( var index in data ) {
            //     if ( data[index].Status == "Valid" ) { 
            //       tempData[index] = data; 
            //     } 
            //    }
            //   data = tempData;

              right = answer;
            }

            tests.push({
              question: test.question,
              answerUser: ans,
            });
          } else {
            texts.push({
              question: test.question,
            });
          }
        });
      }
    }
    console.log({ texts, codes, tests });

    if (!response) {
      return [
        ...currentValue,
        {
          ...value,
          status: 'start',
        },
      ];
    }
    if (!response.response) {
      return [
        ...currentValue,
        {
          ...value,
          status: 'middle',
          response,
          exercise: response.exercise,
        },
      ];
    }
    return [
      ...currentValue,
      {
        ...value,
        status: 'end',
        exercise: {
          texts,
          tests,
          codes,
        },
      },
    ];
  }, []);

  const categoryesFull = categoryes.reduce((currentValue, category) => {
    const value = {
      name: category.name,
      alias: category.alias,
      categoryId: category._id,
    };

    const response = lecturesFull.filter((resp) => {
      return resp.categoryId === String(category._id);
    });

    const lectureStatusEnd = response.filter((resp) => {
      return resp.status === 'end';
    });

    const percent = Math.round(
      (lectureStatusEnd.length * 100) / response.length
    );

    if (!response) {
      return [
        ...currentValue,
        {
          ...value,
          response,
          percent,
        },
      ];
    }
    return [
      ...currentValue,
      {
        ...value,
        percent,
        lectures: response,
      },
    ];
  }, []);

  resolve = {
    userInfo,
    answers: categoryesFull,
  };

  res.json(resolve);
};

module.exports = {
  getAll,
};

// const exercise =
//   {
//     texts: [{ question: '90 aram zamzam', answerUser: 'fddfsdffsdsdfdsf' },{ question: '90 aram zamzam', answersUser: 'fddfsdffsdsdfdsf' },{ question: '90 aram zamzam', answersUser: 'fddfsdffsdsdfdsf' }],
//     tests: [
//       {
//         question: '90 aram zamzam',
//         answerUser: {
//           1: { title: 'fdsg1', rigth: false, answersUser: true },
//           2: { title: 'fdsg2', rigth: false },
//           3: { title: 'fdsg3', rigth: false, answersUser: true },
//           4: { title: 'fdsg4', rigth: true },
//           5: { title: 'fdsg5', rigth: false },
//         },
//         _id: '5ed8fd5685ceda4f33636942',
//         lecture: '5ed8c883ff3c470dd70dab90',
//         type: 'test',
//       },
//      {
//         question: '91 aram zamzam',
//         resolve: {
//           1: { title: 'fdsg1', rigth: false, answersUser: true },
//           2: { title: 'fdsg2', rigth: false },
//           3: { title: 'fdsg3', rigth: false, answersUser: true },
//           4: { title: 'fdsg4', rigth: true },
//           5: { title: 'fdsg5', rigth: false },
//         },
//         _id: '5ed8fd5685ceda4f33636942',
//         lecture: '5ed8c883ff3c470dd70dab90',
//         type: 'test',
//       },

//     ],
//     codes: [{ question: '90 aram zamzam', answersUser: 'fddfsdffsdsdfdsf' }],
//   },
