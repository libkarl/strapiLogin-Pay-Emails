import dynamic from "next/dynamic";

let object = {
  "homepage.testimonials": dynamic(
    () => import("components/Home/Testimonials"),
    {
      suspense: true,
    }
  ),
};

export default object;
