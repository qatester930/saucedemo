# SauceDemo – Cypress E2E Test Automation

E2E test automation framework for SauceDemo (https://www.saucedemo.com/) using **Cypress** and **Page Object Model (POM)** architecture.

Tests cover: Login, Product Listing, Shopping Cart, and Checkout workflows.

---

## 🚀 Tech Stack

- Cypress (v15.11.0)
- Page Object Model (POM)
- Mochawesome Reporter
- Node.js & NPM
- Faker.js for test data

---

## 📋 Prerequisites

- **Node.js** v14+ - [Download](https://nodejs.org/)
- **NPM** (included with Node.js)
- **Chrome/Chromium** browser
- **Git**

Verify: `node --version && npm --version`

---

## 📂 Project Structure

```
suacedemo/
├── cypress/e2e/                   # Test files
│   ├── 1.LoginTestCases.cy.js
│   ├── 2.ProductListingCases.cy.js
│   ├── 3.CartTestCases.cy.js
│   └── 4.CheckoutFlow.cy.js
├── cypress/reports/html/          # Generated test reports
├── PageObjects/                   # Page Object classes
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
└── cypress.config.js
```

---

## ⚙️ Setup

```bash
# Clone repository
git clone <repository-url>
cd suacedemo

# Install dependencies
npm install
```

---

## ▶️ Running Tests

| Command | Description |
|---------|-------------|
| `npm run open` | Interactive Cypress UI |
| `npm run test-electron` | Headless mode (Electron) |
| `npm run report-chrome` | Headless mode (Chrome) - **Recommended** |
| `npm run report-chrome-headed` | Headed mode with Chrome (debug) |

**Run specific test file:**
```bash
npx cypress run --spec cypress/e2e/1.LoginTestCases.cy.js
```

**Run multiple test files:**
```bash
npx cypress run --spec "cypress/e2e/1.LoginTestCases.cy.js,cypress/e2e/2.ProductListingCases.cy.js"
```

---

## 📊 Test Coverage

- **Login Tests** - Valid/invalid credentials, locked-out users
- **Product Listing** - Display, sorting, filtering
- **Shopping Cart** - Add/remove items, quantity, totals
- **Checkout Flow** - Process steps, billing, confirmation

---

## 📈 Test Reports

HTML reports are auto-generated after test runs:
```
cypress/reports/html/Report-[datetime]-report.html
```

Features: Pass/fail stats, screenshots, failure details, charts

---

## 🏗️ Page Object Model

Tests use POM pattern with page-specific classes:
- Each page object encapsulates selectors & actions
- Makes tests readable and maintainable
- Easy to update locators in one place

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Tests won't run | `npm install`, then `npx cypress cache clear` |
| Timeout errors | Check internet connection to saucedemo.com |
| Browser not found | Ensure Chrome/Chromium is installed |

---

## 👨‍💻 Author

Created by: Talha

**License:** ISC

Run Tests in Headless Mode
npx cypress run

📊 Test Reporting (Mochawesome)

Mochawesome reporter is integrated for HTML & JSON reports

Reports are generated after test execution

Location:

cypress/reports/html

🔄 CI/CD – GitHub Actions

This project includes a GitHub Actions workflow to run Cypress tests automatically.

CI Features:

Runs on Ubuntu latest

Executes tests on Chrome

Supports parallel execution

Records results to Cypress Cloud

Uploads Mochawesome HTML reports as build artifacts

Can be triggered manually using workflow_dispatch

🔐 Required GitHub Secrets

Add the following secrets in
Repository → Settings → Secrets → Actions

CYPRESS_RECORD_KEY – Cypress Cloud record key

CIAN_TOKEN – GitHub personal access token