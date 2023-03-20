interface IPicture {
  name: string;
  route: string;
  source: string;
}
import { p1, p2, p3, p5, p6, p7, p8, p9 } from "./assets";
const data: IPicture[] = [
  {
    name: "Picture 1",
    route: "picture1",
    source: p1,
  },
  {
    name: "Picture 2",
    route: "picture2",
    source: p2,
  },
  {
    name: "Picture 3",
    route: "picture3",
    source: p3,
  },

  {
    name: "Picture 5",
    route: "picture5",
    source: p5,
  },
  {
    name: "Picture 6",
    route: "picture6",
    source: p6,
  },
  {
    name: "Picture 7",
    route: "picture7",
    source: p7,
  },
  {
    name: "Picture 8",
    route: "picture8",
    source: p8,
  },
  {
    name: "Picture 9",
    route: "picture1",
    source: p9,
  },
];

export default data;
