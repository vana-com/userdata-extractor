import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AdvertisersUsingYourActivityOrInformation } from "../models/advertisersUsingYourActivityOrInformation.js";

class AdvertisersUsingYourActivityOrInformationJson extends JsonExtractor {
  async process() {
    const advertiserData = this.query(`$.ig_custom_audiences_all_types[*]`);

    const processedAdvertiserData = advertiserData.map(
      (advertiser: { [key: string]: string | boolean }) =>
        new AdvertisersUsingYourActivityOrInformation(advertiser)
    );

    this.table.rows.push(...processedAdvertiserData);
  }
}

export const advertisersUsingYourActivityOrInformationJson =
  new AdvertisersUsingYourActivityOrInformationJson(
    config.SERVICE_INSTAGRAM,
    ".*/advertisers_using_your_activity_or_information.json",
    "advertisers_using_your_activity_or_information"
  );
