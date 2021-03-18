Feature: Calculator

    Scenario: Calculaton addition

        Given I am at the unconventional calculator
        When I add 1 and 7 together
        Then the result is 8

    Scenario: Calculaton subtraction

        Given I am at the unconventional calculator
        When I subtract 8 from 2
        Then the result is 6

    Scenario: Calculaton multiplication

        Given I am at the unconventional calculator
        When I multiply 3 and 5 together
        Then the result is 15

    Scenario: Calculaton division

        Given I am at the unconventional calculator
        When I divide 10 by 2
        Then the result is 5

    Scenario: Calculaton dividing by zero

        Given I am at the unconventional calculator
        When I divide 0 by 0
        Then the result is NaN

    Scenario: Calculaton with negative numbers

        Given I am at the unconventional calculator
        When I add -5 to -5
        Then the result is -10

    Scenario: Calculaton with decimal points

        Given I am at the unconventional calculator
        When I multiply 0.5 by 2
        Then the result is 1