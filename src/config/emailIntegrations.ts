export type EmailIntegrationConfig = {
  name: string;
  files: string[];
};

export const EMAIL_INTEGRATION_CONFIG = [
  {
    name: "Facebook",
    files: [
      "activity_messages",
      "ads_information",
      "apps_and_websites_off_of_facebook",
      "bug_bounty",
      "comments_and_reactions",
      "communities",
      "dating",
      "events",
      "facebook_accounts_center",
      "facebook_assistant",
      "facebook_gaming",
      "facebook_marketplace",
      "facebook_news",
      "facebook_payments",
      "facebook_portal",
      "feed",
      "friends_and_followers",
      "fundraisers",
      "groups",
      "live_audio_rooms",
      "location",
      "messages",
      "music_recommendations",
      "notifications",
      "other_activity",
      "other_logged_information",
      "other_personal_information",
      "pages",
      "polls",
      "posts",
      "preferences",
      "privacy_checkup",
      "profile_information",
      "reviews",
      "saved_items_and_collections",
      "search",
      "security_and_login_information",
      "shops_questions_&_answers",
      "short_videos",
      "soundbites",
      "spark_ar",
      "stories",
      "volunteering",
      "voting_location_and_reminders",
      "your_interactions_on_facebook",
      "your_places",
      "your_problem_reports",
      "your_topics",
    ],
  },
  {
    name: "Google",
    files: [
      "Takeout/Access Log Activity/",
      "Takeout/Android Device Configuration Service/",
      "Takeout/Calendar/",
      "Takeout/Chrome/",
      "Takeout/Contacts/",
      "Takeout/Drive/",
      "Takeout/Google Account/",
      "Takeout/Google Business Profile/",
      "Takeout/Google Pay/",
      "Takeout/Google Play Movies _ TV/",
      "Takeout/Google Play Store/",
      "Takeout/Google Shopping/",
      "Takeout/Google Workspace Marketplace/",
      "Takeout/Hangouts/",
      "Takeout/Home App/",
      "Takeout/Location History/",
      "Takeout/Mail/",
      "Takeout/Maps/",
      "Takeout/My Activity/",
      "Takeout/News/",
      "Takeout/Profile/",
      "Takeout/Search Contributions/",
      "Takeout/Tasks/",
      "Takeout/YouTube and YouTube Music/",
      "Takeout/archive_browser.html",
    ],
  },
  {
    name: "Netflix",
    files: [],
  },
  {
    name: "Instagram",
    files: [
      "account_information/",
      "ads_and_businesses/",
      "ads_and_topics/",
      "apps_and_websites/",
      "autofill_information/",
      "avatars_store/",
      "comments/",
      "comments_settings/",
      "contacts/",
      "content/",
      "device_information/",
      "events/",
      "followers_and_following/",
      "fundraisers/",
      "guides/",
      "information_about_you/",
      "likes/",
      "login_and_account_creation/",
      "loyalty_accounts/",
      "media/",
      "messages/",
      "monetization/",
      "past_instagram_insights/",
      "recent_searches/",
      "reports/",
      "saved/",
      "shopping/",
      "story_sticker_interactions/",
      "your_topics/",
    ],
  },
  {
    name: "Twitter",
    files: [
      "assets/images/",
      "assets/js/",
      "assets/fonts/",
      "data/manifest.js",
      "data/account-creation-ip.js",
      "data/account-label.js",
      "data/account-suspension.js",
      "data/account-timezone.js",
      "data/account.js",
      "data/ad-engagements.js",
      "data/ad-impressions.js",
      "data/ad-mobile-conversions-attributed.js",
      "data/ad-mobile-conversions-unattributed.js",
      "data/ad-online-conversions-attributed.js",
      "data/ad-online-conversions-unattributed.js",
      "data/ageinfo.js",
      "data/app.js",
      "data/birdwatch-note-rating.js",
      "data/birdwatch-note.js",
      "data/block.js",
      "data/branch-links.js",
      "data/community-tweet.js",
      "data/community_tweet_media/",
      "data/connected-application.js",
      "data/contact.js",
      "data/device-token.js",
      "data/direct-message-group-headers.js",
      "data/direct-message-headers.js",
      "data/direct-message-mute.js",
      "data/direct-messages-group.js",
      "data/direct-messages.js",
      "data/direct_messages_group_media/",
      "data/direct_messages_media/",
      "data/email-address-change.js",
      "data/follower.js",
      "data/following.js",
      "data/ip-audit.js",
      "data/like.js",
      "data/lists-created.js",
      "data/lists-member.js",
      "data/lists-subscribed.js",
      "data/moment.js",
      "data/moments_media/",
      "data/moments_tweets_media/",
      "data/mute.js",
      "data/ni-devices.js",
      "data/periscope-account-information.js",
      "data/periscope-ban-information.js",
      "data/periscope-broadcast-metadata.js",
      "data/periscope-comments-made-by-user.js",
      "data/periscope-expired-broadcasts.js",
      "data/periscope-followers.js",
      "data/periscope-profile-description.js",
      "data/personalization.js",
      "data/phone-number.js",
      "data/professional-data.js",
      "data/profile.js",
      "data/profile_media/",
      "data/protected-history.js",
      "data/reply-prompt.js",
      "data/saved-search.js",
      "data/screen-name-change.js",
      "data/smartblock.js",
      "data/spaces-metadata.js",
      "data/sso.js",
      "data/tweet.js",
      "data/tweet_media/",
      "data/tweetdeck.js",
      "data/user-link-clicks.js",
      "data/verified.js",
      "Your archive.html",
    ],
  },
  {
    name: "Linkedin",
    files: [
      "Account Status History.csv",
      "Ad_Targeting.csv",
      "Ads Clicked.csv",
      "Certifications.csv",
      "Comments.csv",
      "Company Follows.csv",
      "Connections.csv",
      "Contacts.csv",
      "Education.csv",
      "Email Addresses.csv",
      "Endorsement Received Info.csv",
      "Endorsement_Given_Info.csv",
      "Endorsement_Received_Info.csv",
      "Hashtag_Follows.csv",
      "Inferences_about_you.csv",
      "Invitations.csv",
      "Jobs/Job Seeker Preferences.csv",
      "Languages.csv",
      "Learning.csv",
      "Logins.csv",
      "Member_Follows.csv",
      "messages.csv",
      "Mobile Applications.csv",
      "PhoneNumbers.csv",
      "Positions.csv",
      "Profile.csv",
      "Projects.csv",
      "Reactions.csv",
      "Recommendations_Given.csv",
      "Registration.csv",
      "Rich Media.csv",
      "SearchQueries.csv",
      "Skills.csv",
    ],
  },
];
