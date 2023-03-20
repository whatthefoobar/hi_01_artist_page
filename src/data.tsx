interface IPicture {
  id: number;
  name: string;
  route: string;
  source: string;
}
import { p1, p2, p3, p5, p6, p7, p8, p9 } from "./assets";
const data: IPicture[] = [
  {
    id: 1,
    name: "Picture 1",
    route: "picture1",
    source: p1,
  },
  {
    id: 2,
    name: "Picture 2",
    route: "picture2",
    source: p2,
  },
  {
    id: 3,
    name: "Picture 3",
    route: "picture3",
    source: p3,
  },

  {
    id: 5,
    name: "Picture 5",
    route: "picture5",
    source: p5,
  },
  {
    id: 6,
    name: "Picture 6",
    route: "picture6",
    source: p6,
  },
  {
    id: 7,
    name: "Picture 7",
    route: "picture7",
    source: p7,
  },
  {
    id: 8,
    name: "Picture 8",
    route: "picture8",
    source: p8,
  },
  {
    id: 9,
    name: "Picture 9",
    route: "picture1",
    source: p9,
  },
];

export default data;
