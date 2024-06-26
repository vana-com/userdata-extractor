/* eslint-disable no-restricted-syntax */
import { professionalInformationJson } from "../../../../src/extractor/instagram/json/professionalInformationJson";
import { loadTestFileAsJson } from "../../../helper";

describe("Professional Information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/account_information/professional_information.json"
    );

    professionalInformationJson.setJsonDocument(data);
    professionalInformationJson.process();

    const { rows } = professionalInformationJson.table;
    const row = rows[0];

    /**
     * TODO: actually perform a test
     */

    expect(row).toBeTruthy();
  });
});
