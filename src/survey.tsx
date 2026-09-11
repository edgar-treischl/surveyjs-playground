import { Model } from "survey-core";
import { PlainLightPanelless } from "survey-core/themes";
import { addStartPage } from "./survey-start";
import { addAboutPage } from "./survey-about";
import { addExperiencePage } from "./survey-experience";

export function createSurvey() {
  const survey = new Model();
  survey.applyTheme(PlainLightPanelless);

  survey.showProgressBar = "top";
  survey.showNavigationButtons = true;
  survey.startSurveyText = "Let's get started ...";

  addStartPage(survey);
  addAboutPage(survey);
  addExperiencePage(survey);

  // Must be set after the pages are added, otherwise there is no first page
  // to turn into the start page and the flag has no effect.
  survey.firstPageIsStartPage = true;

  return survey;
}
