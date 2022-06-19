/* eslint-disable no-undef */
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Photo Gallery Smart Tv App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders topic in url params', () => {
    cy.url().should('include', 'topic');
  });
  it('renders Menu when Grid is inactive', () => {
    cy.get('#menu').should('exist');
  });

  it('renders Menu with active indicator on a single topic when Grid is inactive', () => {
    cy.get('#menu').should('exist').then(() => {
      cy.get('#menu').find('.activeIndicator').should('have.length', 1);
    });
  });

  it('renders Menu when Grid is inactive and contains topic(s)', () => {
    cy.get('#menu').should('exist').then(() => {
      cy.get('#menuList').find('div').should('have.length.at.least', 1);
    });
  });

  it('renders Grid', () => {
    cy.get('#grid').should('exist');
  });
  it('renders Grid and has photo(s)', () => {
    cy.get('#grid').find('.photo-image').should('have.lengthOf.at.least', 4);
  });
  it('renders Grid and has 14 photos', () => {
    cy.get('#grid').find('.photo-image').should('have.length', 14);
  });

  it('does not render Pagination controls (Previous & Next) when Grid is inActive', () => {
    cy.get('#grid').should('exist').then(() => {
      cy.get('.pagination-control').should('not.exist');
    });
  });

  it('does not render Menu when Grid is active', () => {
    cy.get('#grid').should('exist').then(() => {
      cy.get('#grid').find('.photo-image').first().click()
        .then(() => {
          cy.get('#menu').should('not.be.visible');
        });
    });
  });

  it('renders pagination controls (Previous & Next) when Grid is active', () => {
    cy.get('#grid').should('exist').then(() => {
      cy.get('#grid').find('.photo-image').first().click()
        .then(() => {
          cy.get('.page-container').find('.pagination-control').should('have.length', 2);
        });
    });
  });
  it('renders top grid controls (Exit Grid View &/ Show/Hide Grid Info) when Grid is active', () => {
    cy.get('#grid').should('exist').then(() => {
      cy.get('#grid').find('.photo-image').first().click()
        .then(() => {
          cy.get('.page-container').find('.grid-control-item').should('have.length', 2);
        });
    });
  });

  it('renders Menu after "Exit Grid View" button is clicked when Grid is active state', () => {
    cy.get('#grid').should('exist').then(() => {
      cy.get('#grid').find('.photo-image').first().click()
        .then(() => {
          cy.get('.page-container').find('#exitGridControl').click().then(() => {
            cy.get('#menu').should('be.visible');
          });
        });
    });
  });

  it('renders Photo Info after "Show Photo Info" button is clicked once and Grid is active state', () => {
    cy.get('#grid').should('exist').then(() => {
      cy.get('#grid').find('.photo-image').first().click()
        .then(() => {
          cy.get('.page-container').find('#toggleShowInfoDisplayControl').click().then(() => {
            cy.get('#grid').find('.info-card-container').should('have.length.above', 0);
          });
        });
    });
  });

  it('does not render Photo Info after "Show Photo Info" button is clicked 2n times and Grid is active state', () => {
    cy.get('#grid').should('exist').then(() => {
      cy.get('#grid').find('.photo-image').first().click()
        .then(() => {
          cy.get('.page-container').find('#toggleShowInfoDisplayControl').dblclick().then(() => {
            cy.get('#grid').find('.info-card-container').should('have.length.above', 0);
          });
        });
    });
  });
});
