import StatsDisplay from "@/components/StatsDisplay";
import { shallowMount } from "@vue/test-utils";

describe("StatsDisplay", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(StatsDisplay);
  });
  it("should mount", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
