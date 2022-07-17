import { makeAutoObservable } from "mobx";

class MatchChange {
  match2 = "appic";
  constructor() {
    makeAutoObservable(this);
  }
  change(ourmatch) {
    this.match2 = ourmatch;
  }
}

export default new MatchChange();
