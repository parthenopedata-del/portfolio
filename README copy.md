# Parthenope Data Advisory Portfolio

A polished multilingual Streamlit portfolio and consultancy landing page built to showcase professional experience, business advisory services, AI/data consulting work, and contact information for Nicola Menale / Parthenope Data Advisory.

This project is a single-page application designed as a modern personal brand site. It presents a narrative around data strategy, advanced analytics, machine learning, and Generative AI, while also providing contact avenues for potential clients, collaborators, and organizations.

---

## Overview

This application was built as a digital portfolio and business profile for a data-focused advisory practice. The interface is intentionally clean, executive-friendly, and visually branded with a high-end corporate aesthetic.

It includes:

- a hero section with value proposition and call-to-action
- mission and brand story
- services offering details
- portfolio and case study sections
- professional history and education
- multilingual support (English, Italian, Spanish, Danish)
- client/logo strip
- contact information and location details
- footer branding and identity

The app is meant to be used as a personal portfolio website, consultancy brochure, or lead-generation landing page.

---

## Project purpose

The site is designed to help the owner:

- present expertise in data science, AI, analytics, and strategy
- build trust with enterprise and startup clients
- communicate impact through case studies and business examples
- give a strong first impression in a modern web format
- support multilingual communication for international audiences
- create a central professional hub that can link to a portfolio, LinkedIn, and contact channels

---

## Tech stack

- Python 3
- Streamlit
- HTML/CSS via Streamlit markdown and inline styling
- Local static image assets
- Multi-language text dictionary structure

Core dependencies:

- streamlit==1.50.0

---

## App features

### 1. Executive-style landing page
The main page uses a wide layout and a highly styled visual system with a clean corporate look. It projects a premium consulting identity with:

- navy and cyan branding palette
- minimal but polished card layouts
- modern typography
- accent sections for metrics and key value propositions
- compact navigational controls

### 2. Multi-language support
The interface supports four languages:

- English (EN)
- Italian (IT)
- Spanish (ES)
- Danish (DA)

Language selection is handled through a dropdown in the top navigation and the texts are centralized in the translation dictionary in [utils/i18n.py](utils/i18n.py).

### 3. Navigation sections
The app is organized around a horizontal menu that routes to different content sections:

- Home
- Mission
- Services
- About
- Portfolio & Case Studies
- Contact

This makes it easy to structure a small consultancy website as a single-page experience.

### 4. Services presentation
The app presents three main service categories:

- Customer & Market Intelligence
- AI Implementation & Automation
- Executive & In-Company Training

Each service is styled as a visual card and includes supporting context about real-world business impact.

### 5. Case study / portfolio experience
The portfolio section includes multiple professional experience entries, including work at:

- Lenus eHealth
- Danske Bank
- Radiometer A/S
- Hollister Inc.
- Oticon A/S
- DIS Copenhagen

These entries are framed as business value and strategic impact rather than just a simple employment timeline.

### 6. Contact and trust-building elements
The contact section includes:

- email address
- phone number
- LinkedIn link
- live demo app link
- office or hub locations

This supports conversion and makes the page useful for business inquiries.

---

## Repository structure

```text
nime_portfolio/
├── main.py
├── README.md
├── requirements.txt
├── assets/
│   ├── ai_workflow.png
│   ├── dashboard.jpeg
│   ├── hero.jpeg
│   ├── parthenope_logo.png
│   ├── lenus.png
│   ├── danske_bank.png
│   ├── radiometer.png
│   ├── hollister.jpeg
│   ├── Cameo.png
│   ├── DIS.png
│   ├── oticon_logo.png
│   ├── Executive_training.jpeg
│   └── mission_background.png
├── utils/
│   ├── __init__.py
│   ├── config.py
│   ├── i18n.py
│   └── sections.py
└── .venv/
```

### Main files

- [main.py](main.py): application entry point and page routing
- [utils/config.py](utils/config.py): page configuration and custom styling
- [utils/i18n.py](utils/i18n.py): all multilingual text content
- [utils/sections.py](utils/sections.py): landing page sections and layout builders
- [assets/](assets): visual media and brand assets

---

## How the app is structured

### Entry point
The app is launched from [main.py](main.py). It:

1. configures the Streamlit page
2. applies custom CSS styles
3. displays a top navigation bar with language chooser
4. renders the selected section depending on the user’s choice
5. shows the logo strip and footer

### Styling system
Custom styling is defined in [utils/config.py](utils/config.py). It configures:

- color palette
- typography
- button styling
- cards and badges
- responsive layout
- selected radio button theme
- general app background and page spacing

### Text and localization
All user-facing content is centralized in [utils/i18n.py](utils/i18n.py) inside a `TEXTS` dictionary. The app uses the selected language to display the right copy for the interface.

### Content blocks
The visual sections are organized in [utils/sections.py](utils/sections.py) and include:

- `render_hero()`
- `render_mission()`
- `render_services()`
- `render_about()`
- `render_portfolio()`
- `render_contact()`
- `render_logo_strip()`
- `render_footer()`

Each function renders a relevant portion of the landing page and uses translations from the i18n data.

---

## Requirements

This project expects:

- Python 3.9+
- pip
- a virtual environment recommended
- access to local asset files stored in the `assets/` directory

The current dependency list is in [requirements.txt](requirements.txt):

```txt
streamlit==1.50.0
```

---

## Local setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd nime_portfolio
```

### 2. Create a virtual environment

On macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

On Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the app

```bash
streamlit run main.py
```

Then open the local Streamlit URL shown in the terminal, usually:

```text
http://localhost:8501
```

---

## Usage notes

### Running the app locally
The app is intended to be run from the project root so that relative asset paths work properly.

Examples:

```bash
cd /path/to/nime_portfolio
source .venv/bin/activate
streamlit run main.py
```

### Navigation behavior
The interface uses a `st.radio` horizontal menu to switch between main sections. This is intentionally designed to feel like a compact tabs-style navigation system, without a sidebar.

### Language switching
The language selector is at the top of the page. It chooses the translation dictionary key strings for the current session. If you want to add more lang support, update the `TEXTS` mapping in [utils/i18n.py](utils/i18n.py) and the selector options in [main.py](main.py).

---

## Customization guide

### Update branding and business identity
You can modify the project identity in several places:

- [main.py](main.py): page title and brand header text
- [utils/config.py](utils/config.py): colors, spacing, and global styling
- [utils/sections.py](utils/sections.py): section content and visual structure
- [utils/i18n.py](utils/i18n.py): text, narration, messaging, and translations

### Replace business information
Current contact details are embedded in the contact section inside [utils/sections.py](utils/sections.py). Update these details if needed:

- email
- phone number
- LinkedIn URL
- app demo URL
- office locations

### Replace the logo and hero image
Put your own files in [assets/](assets) and update the file references in the source code if necessary.

### Update the case studies
The portfolio text is defined in the translation dictionary in [utils/i18n.py](utils/i18n.py). The most relevant keys include:

- `case_lenus_title`
- `case_danske_title`
- `case_radiometer_title`
- `case_hollister_title`
- `case_oticon_title`
- `case_dis_title`

These can be edited to change the narrative around your professional history.

---

## Deployment

This project is well suited for deployment on Streamlit Cloud or any similar static/web Python hosting service.

### Streamlit Community Cloud
Recommended steps:

1. Push the repository to GitHub
2. Create a new app in Streamlit Cloud
3. Select the repository
4. Set the main file to `main.py`
5. Ensure the `requirements.txt` file is recognized
6. Deploy

### Important deployment tips

- Keep the asset files inside the project and reference them with relative paths
- Do not rely on local environment paths when deploying to remote hosting
- Confirm the file names in the assets directory exactly match those used in the code
- Make sure your app does not depend on any local-only files outside the project directory

---

## Troubleshooting

### Missing image assets
If images do not render, check:

- file paths are correct
- the image files exist in [assets/](assets)
- the app is launched from the project root

### Streamlit errors
If you see runtime issues:

- confirm dependencies are installed
- activate the virtual environment
- check that the Python version is compatible
- review the console output for missing module errors

### Styling issues
The styling is embedded in the app code rather than external CSS files. If the page looks off, inspect the CSS in [utils/config.py](utils/config.py) and make sure browser caching is not hiding stale results during local dev.

---

## Potential customization ideas

This project can easily be extended with:

- a contact form
- blog/news section
- downloadable CV/PDF
- case-study detail pages
- dark mode variation
- additional languages
- analytics tracking
- CRM or lead integration

---

## About the project

This repository is a personal portfolio and advisory site centered on data-driven decision-making and AI adoption. It balances a professional visual identity with practical business storytelling, making it suitable for:

- consulting services
- personal branding
- showcasing expertise
- attracting business inquiries
- presenting research and applied experience

---

## Contact

For business or project inquiries, use the details embedded in the app and contact section in [utils/sections.py](utils/sections.py).

This project is intended to represent a modern professional profile and consultancy brand with strong emphasis on analytics, AI, and strategic decision support.

---

## License

This project does not currently include a formal license file. If you plan to publish or reuse it publicly, make sure to add a LICENSE file appropriate for your use case.

---

## Notes

This README is written to match the current application structure and functionality present in the repository. If the business branding, company name, project scope, or content needs to change, update both the presentation layer and the translation files so the application remains consistent.
