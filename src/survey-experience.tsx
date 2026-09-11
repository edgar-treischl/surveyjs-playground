import { Model } from "survey-core";

export function addExperiencePage(survey: Model) {
  const experiencePage = survey.addNewPage("feedback");
  experiencePage.title = "Your experience";
  experiencePage.description = "A few questions about your experience.";
  experiencePage.showNavigationButtons = true;

  const satisfaction = experiencePage.addNewQuestion("rating", "satisfaction");
  satisfaction.title = "How satisfied are you with the platform?";
  satisfaction.isRequired = false;
  satisfaction.rateMin = 1;
  satisfaction.rateMax = 5;
  satisfaction.minRateDescription = "Very dissatisfied";
  satisfaction.maxRateDescription = "Very satisfied";

  const recommend = experiencePage.addNewQuestion("boolean", "recommend");
  recommend.title = "Would you recommend the platform to a colleague?";
  recommend.isRequired = false;
  recommend.labelTrue = "Yes";
  recommend.labelFalse = "No";

  const usageFrequency = experiencePage.addNewQuestion(
    "dropdown",
    "usageFrequency"
  );
  usageFrequency.title = "How often do you use the platform?";
  usageFrequency.choices = [
    "Several times a day",
    "Daily",
    "Several times a week",
    "Weekly",
    "Less often",
  ];

  const hours = experiencePage.addNewQuestion("text", "hoursPerWeek");
  hours.title = "Approximately how many hours per week do you use it?";
  hours.inputType = "number";
  hours.min = 0;
  hours.max = 168;
  hours.visibleIf = "{usageFrequency} notempty";

  const date = experiencePage.addNewQuestion("text", "lastUsed");
  date.title = "When did you last use the platform?";
  date.inputType = "date";

  const improvements = experiencePage.addNewQuestion("comment", "improvements");
  improvements.title = "What could we improve?";
  improvements.isRequired = false;

  const additionalFeedback = experiencePage.addNewQuestion(
    "comment",
    "additionalFeedback"
  );
  additionalFeedback.title = "Anything else you would like to tell us?";
}
