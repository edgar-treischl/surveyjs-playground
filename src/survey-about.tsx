import { Model } from "survey-core";

export function addAboutPage(survey: Model) {
  const aboutPage = survey.addNewPage("about");
  aboutPage.title = "About you";
  aboutPage.description = "Tell us a little bit about yourself.";
  aboutPage.showNavigationButtons = true;

  const name = aboutPage.addNewQuestion("text", "name");
  name.title = "Dein Name";
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

  const experience = aboutPage.addNewQuestion("radiogroup", "experience");
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
}
