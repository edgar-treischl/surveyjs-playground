import { Model } from "survey-core";

export function addStartPage(survey: Model) {
  const startPage = survey.addNewPage("start");

  const startHtml = startPage.addNewQuestion("html", "start-html");

  startHtml.html = `
    <div style="text-align: center; padding: 20px 0;">
      <h1 style="font-size: 2.5rem; margin: 0 0 24px; color: #1a1a1a;">
        Your Feedback Matters
      </h1>

      <p style="font-size: 1.1rem; color: #666; margin: 0 0 16px; line-height: 1.6;">
        Help us improve our platform by sharing your experience. Your insights
        are valuable and help shape the future of our product.
      </p>

      <p style="font-size: 0.95rem; color: #888; margin: 0 0 40px;">
        ⏱️ Approximately 5 minutes to complete
      </p>

      <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid #e5e5e5;">
        <h3 style="margin: 0 0 20px; color: #1a1a1a;">What you'll be asked about</h3>

        <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: left;">
          <li style="color: #555;">✓ Your role and usage patterns</li>
          <li style="color: #555;">✓ Overall satisfaction with platform</li>
          <li style="color: #555;">✓ Areas for improvement</li>
          <li style="color: #555;">✓ Feature requests and feedback</li>
        </ul>
      </div>
    </div>
  `;
}
