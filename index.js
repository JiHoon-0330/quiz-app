const quiz = [
  {
    question: "제 이름은 무엇일까요?",
    a: "이지훈",
    b: "이지금",
    c: "이지은",
    d: "이지동",
    answer: "a"
  },
  {
    question: "아이유 팬카페 이름은?",
    a: "아이유",
    b: "이지금",
    c: "유애나",
    d: "블루밍",
    answer: "c"
  }
  //   {
  //     question: "",
  //     a: "",
  //     b: "",
  //     c: "",
  //     d: ""
  //   }
];

let currentQuestion = 0;

const loadQuiz = () => {
  for (let keys in quiz[currentQuestion]) {
    if (keys === "answer") {
      break;
    }
    document.querySelector(`.${keys}`).textContent =
      quiz[currentQuestion][keys];
  }
};

document.querySelector("button").addEventListener("click", () => {
  const { answer } = quiz[currentQuestion];
  console.log(
    ``,
    document.querySelector("input[name='answer']:checked").id,
    answer
  );
  if (answer === document.querySelector("input[name='answer']:checked").id) {
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      loadQuiz();
      document.querySelector(`#${answer}`).checked = false;
    } else {
      alert("모든 퀴즈를 풀었습니다");
    }
  } else {
    alert("다시 한 번 생각해보세요");
  }
});

loadQuiz();
