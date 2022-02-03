$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("child/Child.feature");
formatter.feature({
  "line": 1,
  "name": "Записване на дете в класиране",
  "description": "",
  "id": "записване-на-дете-в-класиране",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Записване на дете, което вече съществува",
  "description": "",
  "id": "записване-на-дете-в-класиране;записване-на-дете,-което-вече-съществува",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за регистрация на дете в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за регистрация на дете",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителят въвежда име на детето \"Иван Петров\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителят определя дали единият от родителите работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителят определя дали и другият родител работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителят определя дали детето има увреждания \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителят определя дали детето има близнак \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Потребителят определя дали детето има брат/сестра в детското заведение \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Потребителят въвежда име на брат/сестра в детското заведение \"Иванa Петровa\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска бутона въвеждане на ново дете в системата",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Изписва се съобщение \"В системата има запис за това дете!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Изписва се общия брой точки \"Проверено! Детето ви има 3 точки!\"",
  "keyword": "And "
});
formatter.match({
  "location": "ChildSteps.openChildRegScreen()"
});
formatter.result({
  "duration": 170072400,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.openChildRegForm()"
});
formatter.result({
  "duration": 75900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Иван Петров",
      "offset": 36
    }
  ],
  "location": "ChildSteps.addFullName(String)"
});
formatter.result({
  "duration": 2000400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "ChildSteps.addWorkingMother(String)"
});
formatter.result({
  "duration": 63500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "ChildSteps.addWorkingFather(String)"
});
formatter.result({
  "duration": 74500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "ChildSteps.addDisability(String)"
});
formatter.result({
  "duration": 132600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 47
    }
  ],
  "location": "ChildSteps.addTwin(String)"
});
formatter.result({
  "duration": 135000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    }
  ],
  "location": "ChildSteps.addRelative(String)"
});
formatter.result({
  "duration": 135300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Иванa Петровa",
      "offset": 62
    }
  ],
  "location": "ChildSteps.addRelativeName(String)"
});
formatter.result({
  "duration": 169900,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.clickChildRegButton()"
});
formatter.result({
  "duration": 3046800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "В системата има запис за това дете!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 1441900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проверено! Детето ви има 3 точки!",
      "offset": 29
    }
  ],
  "location": "ChildSteps.checkTotalPoints(String)"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Успешнo записване на дете в класирането",
  "description": "",
  "id": "записване-на-дете-в-класиране;успешнo-записване-на-дете-в-класирането",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Потребителят отваря екрана за регистрация на дете в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Отваря се формата за регистрация на дете",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Потребителят въвежда име на детето \"Юлия Тодорова\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Потребителят определя дали единият от родителите работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Потребителят определя дали и другият родител работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Потребителят определя дали детето има увреждания \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Потребителят определя дали детето има близнак \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Потребителят определя дали детето има брат/сестра в детското заведение \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Потребителят въвежда име на брат/сестра в детското заведение \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Натиска бутона въвеждане на ново дете в системата",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Изписва се съобщение \"Регистрирахте детето си успешно!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Изписва се общия брой точки \"Детето ви има 4 точки!\"",
  "keyword": "And "
});
formatter.match({
  "location": "ChildSteps.openChildRegScreen()"
});
formatter.result({
  "duration": 304800,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.openChildRegForm()"
});
formatter.result({
  "duration": 93500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Юлия Тодорова",
      "offset": 36
    }
  ],
  "location": "ChildSteps.addFullName(String)"
});
formatter.result({
  "duration": 89700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "ChildSteps.addWorkingMother(String)"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "ChildSteps.addWorkingFather(String)"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "ChildSteps.addDisability(String)"
});
formatter.result({
  "duration": 106100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 47
    }
  ],
  "location": "ChildSteps.addTwin(String)"
});
formatter.result({
  "duration": 84700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    }
  ],
  "location": "ChildSteps.addRelative(String)"
});
formatter.result({
  "duration": 63200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 62
    }
  ],
  "location": "ChildSteps.addRelativeName(String)"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.clickChildRegButton()"
});
formatter.result({
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Регистрирахте детето си успешно!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 168100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Детето ви има 4 точки!",
      "offset": 29
    }
  ],
  "location": "ChildSteps.checkTotalPoints(String)"
});
formatter.result({
  "duration": 76900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Грешка при бало-/точкообразуване на детето",
  "description": "",
  "id": "записване-на-дете-в-класиране;грешка-при-бало-/точкообразуване-на-детето",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Потребителят отваря екрана за регистрация на дете в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Отваря се формата за регистрация на дете",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Потребителят въвежда име на детето \"Валентин Атанасов\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Потребителят определя дали единият от родителите работи \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Потребителят определя дали и другият родител работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Потребителят определя дали детето има увреждания \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Потребителят определя дали детето има близнак \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Потребителят определя дали детето има брат/сестра в детското заведение \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Потребителят въвежда име на брат/сестра в детското заведение \"Георги Атанасов\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Натиска бутона въвеждане на ново дете в системата",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Изписва се съобщение \"Неправилни стойности за точки на детето Ви!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Изписва се общия брой точки \"Грешка!\"",
  "keyword": "And "
});
formatter.match({
  "location": "ChildSteps.openChildRegScreen()"
});
formatter.result({
  "duration": 186000,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.openChildRegForm()"
});
formatter.result({
  "duration": 87300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Валентин Атанасов",
      "offset": 36
    }
  ],
  "location": "ChildSteps.addFullName(String)"
});
formatter.result({
  "duration": 113200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 57
    }
  ],
  "location": "ChildSteps.addWorkingMother(String)"
});
formatter.result({
  "duration": 76400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "ChildSteps.addWorkingFather(String)"
});
formatter.result({
  "duration": 62700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "ChildSteps.addDisability(String)"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "ChildSteps.addTwin(String)"
});
formatter.result({
  "duration": 91900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    }
  ],
  "location": "ChildSteps.addRelative(String)"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Георги Атанасов",
      "offset": 62
    }
  ],
  "location": "ChildSteps.addRelativeName(String)"
});
formatter.result({
  "duration": 79600,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.clickChildRegButton()"
});
formatter.result({
  "duration": 128600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неправилни стойности за точки на детето Ви!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 152600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешка!",
      "offset": 29
    }
  ],
  "location": "ChildSteps.checkTotalPoints(String)"
});
formatter.result({
  "duration": 72700,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Успешнo записване на дете, което има брат/сестра в детското заведение, в класирането",
  "description": "",
  "id": "записване-на-дете-в-класиране;успешнo-записване-на-дете,-което-има-брат/сестра-в-детското-заведение,-в-класирането",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "Потребителят отваря екрана за регистрация на дете в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Отваря се формата за регистрация на дете",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Потребителят въвежда име на детето \"Валентин Атанасов\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Потребителят определя дали единият от родителите работи \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Потребителят определя дали и другият родител работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Потребителят определя дали детето има увреждания \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Потребителят определя дали детето има близнак \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Потребителят определя дали детето има брат/сестра в детското заведение \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Потребителят въвежда име на брат/сестра в детското заведение \"Георги Атанасов\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Натиска бутона въвеждане на ново дете в системата",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Изписва се съобщение \"Регистрирахте детето си успешно!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Изписва се общия брой точки \"Проверено! Детето ви има 3 точки!\"",
  "keyword": "And "
});
formatter.match({
  "location": "ChildSteps.openChildRegScreen()"
});
formatter.result({
  "duration": 225900,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.openChildRegForm()"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Валентин Атанасов",
      "offset": 36
    }
  ],
  "location": "ChildSteps.addFullName(String)"
});
formatter.result({
  "duration": 85800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 57
    }
  ],
  "location": "ChildSteps.addWorkingMother(String)"
});
formatter.result({
  "duration": 101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "ChildSteps.addWorkingFather(String)"
});
formatter.result({
  "duration": 109400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "ChildSteps.addDisability(String)"
});
formatter.result({
  "duration": 62900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "ChildSteps.addTwin(String)"
});
formatter.result({
  "duration": 51400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    }
  ],
  "location": "ChildSteps.addRelative(String)"
});
formatter.result({
  "duration": 71200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Георги Атанасов",
      "offset": 62
    }
  ],
  "location": "ChildSteps.addRelativeName(String)"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.clickChildRegButton()"
});
formatter.result({
  "duration": 126200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Регистрирахте детето си успешно!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 177100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проверено! Детето ви има 3 точки!",
      "offset": 29
    }
  ],
  "location": "ChildSteps.checkTotalPoints(String)"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Грешни входни данни за име нa брат/сестра в детското заведение на детето",
  "description": "",
  "id": "записване-на-дете-в-класиране;грешни-входни-данни-за-име-нa-брат/сестра-в-детското-заведение-на-детето",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "Потребителят отваря екрана за регистрация на дете в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Отваря се формата за регистрация на дете",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Потребителят въвежда име на детето \"Юлия Атанасова\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Потребителят определя дали единият от родителите работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Потребителят определя дали и другият родител работи \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Потребителят определя дали детето има увреждания \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Потребителят определя дали детето има близнак \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Потребителят определя дали детето има брат/сестра в детското заведение \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Потребителят въвежда име на брат/сестра в детското заведение \"Теодор Атанасов\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Натиска бутона въвеждане на ново дете в системата",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Изписва се съобщение \"Проверете въведеното име за брат/сестра в детското заведение!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Изписва се общия брой точки \"Няма такова дете в системата! Детето ви има 4 точки!\"",
  "keyword": "And "
});
formatter.match({
  "location": "ChildSteps.openChildRegScreen()"
});
formatter.result({
  "duration": 331200,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.openChildRegForm()"
});
formatter.result({
  "duration": 73800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Юлия Атанасова",
      "offset": 36
    }
  ],
  "location": "ChildSteps.addFullName(String)"
});
formatter.result({
  "duration": 445500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "ChildSteps.addWorkingMother(String)"
});
formatter.result({
  "duration": 82100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "ChildSteps.addWorkingFather(String)"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "ChildSteps.addDisability(String)"
});
formatter.result({
  "duration": 110700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 47
    }
  ],
  "location": "ChildSteps.addTwin(String)"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    }
  ],
  "location": "ChildSteps.addRelative(String)"
});
formatter.result({
  "duration": 52600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Теодор Атанасов",
      "offset": 62
    }
  ],
  "location": "ChildSteps.addRelativeName(String)"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "location": "ChildSteps.clickChildRegButton()"
});
formatter.result({
  "duration": 135300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проверете въведеното име за брат/сестра в детското заведение!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 143400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Няма такова дете в системата! Детето ви има 4 точки!",
      "offset": 29
    }
  ],
  "location": "ChildSteps.checkTotalPoints(String)"
});
formatter.result({
  "duration": 56300,
  "status": "passed"
});
formatter.uri("login/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата;вход-в-системата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителят избира типа потребител \"0\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителят въвежда парола \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Изписва се съобщение \"Успешен вход в профила!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 331200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 118400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 186100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 122200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 2800400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешен вход в профила!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 86800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Вход в системата с грешен тип на потребителя",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-грешен-тип-на-потребителя",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Потребителят отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Потребителят избира типа потребител \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Потребителят въвежда парола \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Изписва се съобщение \"Такъв тип на потребителя не съществува!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 327300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 83700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 258000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 89400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 87800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 172700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Такъв тип на потребителя не съществува!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 99200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Вход в системата с грешна парола",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-грешна-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Потребителят отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Потребителят избира типа потребител \"0\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Потребителят въвежда парола \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Изписва се съобщение \"Грешна парола!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 204500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 137700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 98900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 81400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешна парола!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Вход в системата без да има регистрация",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-да-има-регистрация",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "Потребителят отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Потребителят избира типа потребител \"0\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Потребителят въвежда потребителско име \"vancho\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Потребителят въвежда парола \"654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Изписва се съобщение \"Няма регистрация за този потребител!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 427000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 81800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 257200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vancho",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 107900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "654321",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 121100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Няма регистрация за този потребител!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.uri("restore/RestorePass.feature");
formatter.feature({
  "line": 1,
  "name": "Възстановяване на забравена парола",
  "description": "",
  "id": "възстановяване-на-забравена-парола",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Възстановяване на паролата чрез email",
  "description": "",
  "id": "възстановяване-на-забравена-парола;възстановяване-на-паролата-чрез-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за забравена парола",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителят постъпва към потвърждаване на самоличността си \"iv11_v@abv.bg\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Изписва се съобщение \"Изпратен е линк в пощата Ви за възстановяване на паролата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassScreen()"
});
formatter.result({
  "duration": 378900,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassForm()"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 148900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iv11_v@abv.bg",
      "offset": 61
    }
  ],
  "location": "RestorePassSteps.addApproval(String)"
});
formatter.result({
  "duration": 107100,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.clickRestorePassButton()"
});
formatter.result({
  "duration": 1673500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Изпратен е линк в пощата Ви за възстановяване на паролата!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 82600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Невъзможно възстановяване на паролата, защото са въведени неправилни потребителски данни",
  "description": "",
  "id": "възстановяване-на-забравена-парола;невъзможно-възстановяване-на-паролата,-защото-са-въведени-неправилни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Потребителят отваря екрана за забравена парола",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Отваря се формата за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Потребителят въвежда потребителско име \"ivane\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Потребителят постъпва към потвърждаване на самоличността си \"anemail123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Натиска бутона за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Изписва се съобщение \"Няма информация за този потребител в базата данни!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassScreen()"
});
formatter.result({
  "duration": 201200,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassForm()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivane",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anemail123@gmail.com",
      "offset": 61
    }
  ],
  "location": "RestorePassSteps.addApproval(String)"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.clickRestorePassButton()"
});
formatter.result({
  "duration": 81300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Няма информация за този потребител в базата данни!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 45300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Възстановяване на паролата чрез телефонен номер",
  "description": "",
  "id": "възстановяване-на-забравена-парола;възстановяване-на-паролата-чрез-телефонен-номер",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Потребителят отваря екрана за забравена парола",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Отваря се формата за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Потребителят постъпва към потвърждаване на самоличността си \"0984572021\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Натиска бутона за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Изписва се съобщение \"Изпратен е код за възстановяване на паролата в телефона Ви!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassScreen()"
});
formatter.result({
  "duration": 174500,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassForm()"
});
formatter.result({
  "duration": 39400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 144100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0984572021",
      "offset": 61
    }
  ],
  "location": "RestorePassSteps.addApproval(String)"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.clickRestorePassButton()"
});
formatter.result({
  "duration": 93600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Изпратен е код за възстановяване на паролата в телефона Ви!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 63300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Възстановяване на паролата чрез телефонен номер",
  "description": "",
  "id": "възстановяване-на-забравена-парола;възстановяване-на-паролата-чрез-телефонен-номер",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Потребителят отваря екрана за забравена парола",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Отваря се формата за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Потребителят постъпва към потвърждаване на самоличността си \"0984572221\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Натиска бутона за възстановяване на паролата",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Изписва се съобщение \"Няма информация за този потребител в базата данни!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassScreen()"
});
formatter.result({
  "duration": 224900,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.openRestorePassForm()"
});
formatter.result({
  "duration": 62600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 280800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0984572221",
      "offset": 61
    }
  ],
  "location": "RestorePassSteps.addApproval(String)"
});
formatter.result({
  "duration": 88700,
  "status": "passed"
});
formatter.match({
  "location": "RestorePassSteps.clickRestorePassButton()"
});
formatter.result({
  "duration": 123600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Няма информация за този потребител в базата данни!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.uri("signup/SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Регистрация на потребител, който вече съществува",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител,-който-вече-съществува",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителят избира типа потребител \"0\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителят въвежда парола \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителят натиска бутона за правене на паролата видима",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Потребителят въвежда е-mail \"iv11_v@abv.bg\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Потребителят въвежда телефонен номер \"0984572021\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Изписва се съобщение \"Потребителят съществува!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpSteps.openSignUpScreen()"
});
formatter.result({
  "duration": 227600,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.openSignUpForm()"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 72800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 87600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 150400,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickPassVisibilityButton()"
});
formatter.result({
  "duration": 217700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iv11_v@abv.bg",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addEmail(String)"
});
formatter.result({
  "duration": 163200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0984572021",
      "offset": 38
    }
  ],
  "location": "SignUpSteps.addPhone(String)"
});
formatter.result({
  "duration": 157900,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickSignUpButton()"
});
formatter.result({
  "duration": 3500200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Потребителят съществува!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Успешна регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;успешна-регистрация-на-потребител",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Потребителят отваря екрана за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Отваря се формата за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Потребителят избира типа потребител \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Потребителят въвежда потребителско име \"marko44\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Потребителят въвежда парола \"nomoreMercy60\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Потребителят натиска бутона за правене на паролата видима",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Потребителят въвежда е-mail \"markmark56@outlook.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Потребителят въвежда телефонен номер \"0884672955\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Изписва се съобщение \"Регистрирахте се успешно!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpSteps.openSignUpScreen()"
});
formatter.result({
  "duration": 335300,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.openSignUpForm()"
});
formatter.result({
  "duration": 136600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 92900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marko44",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nomoreMercy60",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 75800,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickPassVisibilityButton()"
});
formatter.result({
  "duration": 56800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "markmark56@outlook.com",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addEmail(String)"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0884672955",
      "offset": 38
    }
  ],
  "location": "SignUpSteps.addPhone(String)"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickSignUpButton()"
});
formatter.result({
  "duration": 84800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Регистрирахте се успешно!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 42600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Регистрация с грешен тип на потребителя",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-с-грешен-тип-на-потребителя",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Потребителят отваря екрана за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Отваря се формата за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Потребителят избира типа потребител \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Потребителят въвежда потребителско име \"vankos\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Потребителят въвежда парола \"heyyo87\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Потребителят натиска бутона за правене на паролата видима",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Потребителят въвежда е-mail \"vanks@outlook.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Потребителят въвежда телефонен номер \"0884567758\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Изписва се съобщение \"Такъв тип на потребителя не съществува!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpSteps.openSignUpScreen()"
});
formatter.result({
  "duration": 689800,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.openSignUpForm()"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 76500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vankos",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "heyyo87",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickPassVisibilityButton()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vanks@outlook.com",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addEmail(String)"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0884567758",
      "offset": 38
    }
  ],
  "location": "SignUpSteps.addPhone(String)"
});
formatter.result({
  "duration": 27300,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickSignUpButton()"
});
formatter.result({
  "duration": 81100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Такъв тип на потребителя не съществува!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 360400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Невъведени email и телефон при регистрация",
  "description": "",
  "id": "регистрация-на-потребител;невъведени-email-и-телефон-при-регистрация",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Потребителят отваря екрана за регистрация в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Отваря се формата за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Потребителят избира типа потребител \"0\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Потребителят въвежда потребителско име \"ivanella11\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Потребителят въвежда парола \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Потребителят натиска бутона за правене на паролата видима",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Потребителят въвежда е-mail \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Потребителят въвежда телефонен номер \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Изписва се съобщение \"Това e/са задължителни полета!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpSteps.openSignUpScreen()"
});
formatter.result({
  "duration": 363000,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.openSignUpForm()"
});
formatter.result({
  "duration": 67700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "SignUpSteps.addUserType(String)"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanella11",
      "offset": 40
    }
  ],
  "location": "SignUpSteps.addUsername(String)"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addPassword(String)"
});
formatter.result({
  "duration": 55700,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickPassVisibilityButton()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "SignUpSteps.addEmail(String)"
});
formatter.result({
  "duration": 56900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "SignUpSteps.addPhone(String)"
});
formatter.result({
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.clickSignUpButton()"
});
formatter.result({
  "duration": 133900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Това e/са задължителни полета!",
      "offset": 22
    }
  ],
  "location": "SignUpSteps.checkSignUpMessage(String)"
});
formatter.result({
  "duration": 106900,
  "status": "passed"
});
});