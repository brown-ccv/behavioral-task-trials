import { showImage } from "../trials/showImage.js";
import { init } from "../app.js";

describe("showImage trial", () => {
  it("showImage without photodiode box", () => {
    const config = init({ USE_PHOTODIODE: false });
    let data = { code: null };
    const result = showImage(config, "", {
      duration: 100,
    });
    expect(result.prompt).not.toContain("photodiode-spot");
    expect(result.on_load()).toEqual(undefined);
    result.on_finish(data)
    expect(data.code).toEqual(1);
  });

  it("showImage with photodiode box and task code", () => {
    const config = init({ USE_PHOTODIODE: true });
    let data = { code: null };
    const result = showImage(config, "", {
      duration: 100,
      taskCode: 10,
    });
    expect(result.prompt).toContain("photodiode-spot");
    expect(result.on_load()).toEqual(undefined);
    result.on_finish(data)
    expect(data.code).toEqual(10);
  });
});
