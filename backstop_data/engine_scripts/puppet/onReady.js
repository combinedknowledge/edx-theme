module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  let isPhone = vp.label === "phone",
    isSmallPhone = vp.label === "small-phone";

  await page.waitFor("body");

  if(scenario.label === "Homepage [header menu]" && (isPhone || isSmallPhone)) {
    await page.waitFor(".global-header .hamburger-menu");
    await page.click(".global-header .hamburger-menu");
    await page.waitFor(4000);
  }

  if (scenario.label === "Courses page [facet options]" && await page.$(".search-facets-lists") !== null) {
    await page.waitFor(".search-facets-lists button[data-facet='modes'][data-value='verified']");
    await page.click(".search-facets-lists button[data-facet='modes'][data-value='verified']");
    await page.waitFor(".search-facets-lists button[data-facet='org'][data-value='edX']");
    await page.click(".search-facets-lists button[data-facet='org'][data-value='edX']");
    await page.waitFor(".find-courses .filters.is-animated");
    await page.waitFor(2000);
  }

  if (scenario.url.includes("/login?next=")) {
    await page.waitFor("#login-email");
    await page.type("#login-email", "edx@example.com");
    await page.type("#login-password", "edx");
    await page.click(".login-button");
    await page.waitForNavigation();

    if (scenario.label.includes("Course [instructor]")) {
      await page.waitFor(4000);
    }

    if(scenario.label === "Course [instructor][membership]") {
      await page.click("button[data-section='membership']");
    }

    if(scenario.label === "Course [instructor][cohort_management]") {
      await page.click("button[data-section='cohort_management']");
    }

    if(scenario.label === "Course [instructor][extensions]") {
      await page.click("button[data-section='extensions']");
    }

    if(scenario.label === "Course [instructor][student_admin]") {
      await page.click("button[data-section='student_admin']");
    }

    if(scenario.label === "Course [instructor][data_download]") {
      await page.click("button[data-section='data_download']");
    }

    if(scenario.label === "Course [instructor][send_email]") {
      await page.click("button[data-section='send_email']");
    }

    if(scenario.label === "Course [instructor][certificates]") {
      await page.click("button[data-section='certificates']");
    }

    if(scenario.label === "Course [instructor][open_response_assessment]") {
      await page.click("button[data-section='open_response_assessment']");
    }

    if (scenario.label.includes("Course [instructor]")) {
      await page.waitFor(4000);
    }
  }

  if (scenario.url.includes("localhost")) {
    await page.evaluate(() => {
      const debugButton = document.getElementById("djDebug");
      if(debugButton) debugButton.style.display = "none";
    });
  }
};
