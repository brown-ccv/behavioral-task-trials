const countdown = require("../trials/countdown.js");
const htmlKeyboardResponse = require("@jspsych/plugin-html-keyboard-response");

describe("Countdown trial", () => {
  it("counts to 10 with a message countdown", () => {
    const returnobject = {
      type: htmlKeyboardResponse,
      stimulus: "<h3>Countdown</h3>",
      trial_duration: 1000,
      timeline: [
        { prompt: "<h1>10</h1>" },
        { prompt: "<h1>9</h1>" },
        { prompt: "<h1>8</h1>" },
        { prompt: "<h1>7</h1>" },
        { prompt: "<h1>6</h1>" },
        { prompt: "<h1>5</h1>" },
        { prompt: "<h1>4</h1>" },
        { prompt: "<h1>3</h1>" },
        { prompt: "<h1>2</h1>" },
        { prompt: "<h1>1</h1>" },
      ],
      response_ends_trial: false,
    };
    expect(
      countdown({
        duration: 1000,
        message: "Countdown",
        time: 10,
      })
    ).toEqual(returnobject);
  });
});
