Feature: Account creation and Login	

Background:
    Given user is in the home page

	@demo
	Scenario: Navigate to SignUp page
		When user clicks on SignUp link
		Then user should be redirected to the SignUp Page

	Scenario Outline: New user SignUp
		When user clicks on SignUp link
		And user enters login details <userName>, <emailId> and <password>
		And clicks on SignIn
		Then the user should be signed up successfully and navigated to the Home Page

		Examples:
		| userName | emailId | password |
		| User777 | use7@prokarma.com | Night@2018 |
		| Name111 | nam11@prokarma.com | Day@2018 |
