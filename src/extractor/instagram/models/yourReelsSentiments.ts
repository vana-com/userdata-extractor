import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class YourReelsSentiments extends InstagramBaseModel {
  sentiment?: TextTableValue;

  constructor(sentiment: string) {
    super();
    this.sentiment = new TextTableValue(sentiment);
  }
}
