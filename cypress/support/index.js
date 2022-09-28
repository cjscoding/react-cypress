import "./commands";
import "cypress-react-selector";

//cypress의 내장메서드인 before 규칙에 따라 모든 spec file이 실행되기 전 각각 한번씩 실행된다.
before(() => {
  cy.log("cypress before");
});
