describe('Quiz E2E Test', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:3001/'); // Visit the homepage
    });
  
    it('completes the quiz and displays the score', () => {
      // Mock the API response for questions
      cy.intercept('GET', '/api/questions/random', {
        fixture: 'questions.json', // Mocked questions data
      }).as('getQuestions');
  
      // Start the quiz
      cy.contains('Start Quiz').click();
      cy.wait('@getQuestions'); // Wait for the API call to complete
  
      // Answer all questions
      cy.get('button.q').each(($el) => {
        cy.wrap($el).click(); // Click each answer button
      });
  
      // Verify the quiz is completed and the score is displayed
      cy.contains('Quiz Completed').should('be.visible');
    });
  });