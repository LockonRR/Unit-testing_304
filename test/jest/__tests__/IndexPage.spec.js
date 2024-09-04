// IndexPage.spec.js
import IndexPage from "src/pages/IndexPage.vue";
///src\pages\IndexPage.vue
import { shallowMount } from "@vue/test-utils";

describe("IndexPage", () => {
  it("ตรวจสอบหัวข้อ(title)", () => {
    const wrapper = shallowMount(IndexPage);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text())
      .toBe("ชื่อ");
  });

  it("ชื่อ", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "ก้องภพ",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("ก้องภพ");
  });

  it("นามสกุล", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "มูลวงค์",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("มูลวงค์");
  });

    it("รหัสนักศึกษา", () => {
      const wrapper = shallowMount(IndexPage, {
        data() {
          return {
            title: "6604101304",
          };
        },
      });
      let header = wrapper.find(".htmlClass h1");
      expect(header.text()).toBe("6604101304");
    });

    it("ชื่อเล่น", () => {
      const wrapper = shallowMount(IndexPage, {
        data() {
          return {
            title: "ไบเบิ้ล",
          };
        },
      });
      let header = wrapper.find(".htmlClass h1");
      expect(header.text()).toBe("ไบเบิ้ล");
    });
});
test("ทดสอบว่ามีฟอร์ม (form)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form").exists()).toBe(true);
});

test("ทดสอบว่าในฟอร์ม (form) มีการรับค่า (input)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form > input").exists()).toBe(true);
});

test("ทดสอบว่ามีปุ่ม (button)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("button").exists()).toBe(true);
});
