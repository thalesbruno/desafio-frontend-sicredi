import { Dragon } from "../model/Dragon";

export default function compareAZ(a: Dragon, b: Dragon) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
}
