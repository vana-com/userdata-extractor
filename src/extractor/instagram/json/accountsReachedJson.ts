import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AccountsReached } from "../models/accountsReached.js";

class AccountsReachedJson extends JsonExtractor {
  async process() {
    const accountsReached = this.query(
      `$.organic_insights_reach[*].string_map_data`
    );

    const processedAccountsReached = accountsReached.map(
      (accountsReachedEntry) =>
        new AccountsReached({
          dateRange: accountsReachedEntry["date range"].value,
          accountsReached: accountsReachedEntry["accounts reached"].value,
          accountsReachedDelta:
            accountsReachedEntry["accounts reached delta"].value,
          followers: accountsReachedEntry.followers.value,
          nonFollowers: accountsReachedEntry["non-followers"].value,
          impressions: accountsReachedEntry.impressions.value,
          impressionsDelta: accountsReachedEntry["impressions delta"].value,
          profileVisits: accountsReachedEntry["profile visits"].value,
          profileVisitsDelta:
            accountsReachedEntry["profile visits delta"].value,
          emailButtonTaps: accountsReachedEntry["email button taps"].value,
          emailButtonTapsDelta:
            accountsReachedEntry["email button taps delta"].value,
        })
    );

    this.table.rows.push(...processedAccountsReached);
  }
}

export const accountsReachedJson = new AccountsReachedJson(
  config.SERVICE_INSTAGRAM,
  ".*/accounts_reached.json",
  "accounts_reached"
);