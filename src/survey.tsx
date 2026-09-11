import { Model } from "survey-core";
import { PlainLightPanelless } from "survey-core/themes";


export function createSurvey() {
  const survey = new Model();
  survey.applyTheme(PlainLightPanelless);

  survey.showProgressBar = "top";
  survey.showNavigationButtons = false;
  survey.firstPageIsStartPage = true;
  survey.startSurveyText = "Start questionnaire";

  const startPage = survey.addNewPage("start");
  startPage.title = "We'd love your feedback";
  startPage.description = `
    <p>This questionnaire will help us understand how you use the platform and where we can improve it.</p>
    <p>It takes approximately <strong>5 minutes</strong> to complete.</p>
    <h4>What you'll be asked about</h4>
    <ul>
      <li>Your role and usage of the platform</li>
      <li>Your overall experience</li>
      <li>Areas where we could improve</li>
    </ul>
  `;
  startPage.showNavigationButtons = false;


  

  // ------------------------------------------------------------
  // Page 1: About you
  // ------------------------------------------------------------

  const aboutPage = survey.addNewPage("about");
  aboutPage.title = "About you";
  aboutPage.description =
    "Tell us a little bit about yourself.";
  aboutPage.showNavigationButtons = true;

  const name = aboutPage.addNewQuestion("text", "name");
  name.title = "Your name";
  name.isRequired = false;

  const email = aboutPage.addNewQuestion("text", "email");
  email.title = "Email address";
  email.inputType = "email";
  email.isRequired = false;

  const role = aboutPage.addNewQuestion("dropdown", "role");
  role.title = "What is your role?";
  role.isRequired = false;
  role.choices = [
    { value: "developer", text: "Developer" },
    { value: "manager", text: "Manager" },
    { value: "analyst", text: "Analyst" },
    { value: "other", text: "Other" },
  ];

  const experience = aboutPage.addNewQuestion(
    "radiogroup",
    "experience",
  );
  experience.title = "How long have you been using the platform?";
  experience.isRequired = false;
  experience.choices = [
    "Less than 3 months",
    "3–12 months",
    "1–3 years",
    "More than 3 years",
  ];

  const areas = aboutPage.addNewQuestion("checkbox", "areas");
  areas.title = "Which areas do you use?";
  areas.description = "Select all that apply.";
  areas.choices = [
  "Dashboards",
  "Reports",
  "Data analysis",
  "Data entry",
  "Administration",
  "Other",
];


  const otherArea = aboutPage.addNewQuestion("text", "otherArea");
  otherArea.title = "Other area";
  otherArea.visibleIf = "{areas} contains 'Other'";

  // ------------------------------------------------------------
  // Page 2: Your experience
  // ------------------------------------------------------------

  const experiencePage = survey.addNewPage("feedback");
  experiencePage.title = "Your experience";
  experiencePage.description =
    "A few questions about your experience.";
  experiencePage.showNavigationButtons = true;

  const satisfaction = experiencePage.addNewQuestion(
    "rating",
    "satisfaction",
  );
  satisfaction.title = "How satisfied are you with the platform?";
  satisfaction.isRequired = false;
  satisfaction.rateMin = 1;
  satisfaction.rateMax = 5;
  satisfaction.minRateDescription = "Very dissatisfied";
  satisfaction.maxRateDescription = "Very satisfied";

  const recommend = experiencePage.addNewQuestion(
    "boolean",
    "recommend",
  );
  recommend.title = "Would you recommend the platform to a colleague?";
  recommend.isRequired = false;
  recommend.labelTrue = "Yes";
  recommend.labelFalse = "No";

  const usageFrequency = experiencePage.addNewQuestion(
    "dropdown",
    "usageFrequency",
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

  const improvements = experiencePage.addNewQuestion(
    "comment",
    "improvements",
  );
  improvements.title = "What could we improve?";
  improvements.isRequired = false;

  const additionalFeedback = experiencePage.addNewQuestion(
    "comment",
    "additionalFeedback",
  );
  additionalFeedback.title = "Anything else you would like to tell us?";

  return survey;
}
