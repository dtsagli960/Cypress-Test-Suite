/// <reference types="cypress" />

import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    it('renders the start button initially', () => {
        mount(<Quiz />);
        cy.get('button').contains('Start Quiz').should('exist');
      });
    
      it('starts the quiz and displays the first question', () => {
        mount(<Quiz />);
        cy.get('button').contains('Start Quiz').should('exist');
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card.p-4').should('exist'); 
        cy.wait(500);
        cy.get('.alert').should('exist'); 
      });
    
      it('completes the quiz and displays the score', () => {
        mount(<Quiz />);
        cy.get('button').as('btn').click()
        cy.wait(500); 
    
        // Simulate answering all questions
        cy.get('button').contains('1').click(); 
     
        cy.get('h2').contains('Quiz Completed').should('exist');
        cy.get('.alert.alert-success').should('contain', 'Your score:');
      });
});