
const ageCheck = {
  type: "survey_text",
  questions: [{ prompt: baseStimulus(stmAge), required: true }],
  on_finish: (data) => {
    data.uniqueId = "uniqueId"; // TODO deal with unique id
    data.prompt = [stmAge];
    data.answer = JSON.parse(data.responses)["Q0"];
    console.log(data.answer);
  },
};