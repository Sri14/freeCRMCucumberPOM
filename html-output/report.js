$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM login feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate FreeCRM homepage test",
  "description": "",
  "id": "freecrm-login-feature;validate-freecrm-homepage-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sri"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on FreeCRM site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in to homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_is_on_FreeCRM_site()"
});
formatter.result({
  "duration": 4880741229,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_enters_username_and_password()"
});
formatter.result({
  "duration": 6604936547,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_is_logged_in_to_homepage()"
});
formatter.result({
  "duration": 154789845,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User clicks on New Deal under deals",
  "description": "",
  "id": "freecrm-login-feature;user-clicks-on-new-deal-under-deals",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sri"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is logged in and on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user clicks on new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters firstname and lastname",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user saves the deal",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDef.user_is_logged_in_and_on_homepage()"
});
formatter.result({
  "duration": 9647103751,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDef.user_clicks_on_new_deal()"
});
formatter.result({
  "duration": 6671790319,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDef.user_enters_firstname_and_lastname()"
});
formatter.result({
  "duration": 3207942763,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDef.user_saves_the_deal()"
});
formatter.result({
  "duration": 1665770981,
  "status": "passed"
});
});