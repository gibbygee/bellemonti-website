# Bellemonti Website

A professional business website built with Jekyll and hosted on GitHub Pages.

## Features

- Clean, modern design inspired by bellemonti.com
- Responsive layout (mobile, tablet, desktop)
- Fixed header with scroll shadow effect
- Smooth scroll-to-anchor navigation
- Fade-in animations on scroll
- Ocean blue and teal color scheme
- Professional typography with Courier New font

## Local Development

### Prerequisites

- Ruby 3.3.5 or higher
- Bundler

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit http://localhost:4000 in your browser

### Making Changes

- Content pages are in the root directory (`index.html`, `about.html`, etc.)
- Layouts are in `_layouts/`
- Reusable components are in `_includes/`
- Styles are in `_sass/`
- JavaScript is in `assets/js/`
- Navigation menu is defined in `_data/navigation.yml`

## Deployment

This site is configured to work with GitHub Pages. Once pushed to GitHub:

1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `main` / `(root)`
4. Site will be live at `https://[username].github.io/bellemonti-website`

## Customization

### Colors

Edit `_sass/_variables.scss` to customize the color scheme:
- `$color-ocean-blue`: Ocean blue accent
- `$color-teal`: Teal accent for CTAs
- `$color-text-primary`: Main text color

### Contact Form

To enable the contact form:
1. Sign up for a free account at [Formspree](https://formspree.io/)
2. Replace `YOUR_FORM_ID` in `contact.html` with your Formspree form ID

### Logo

Add your logo image to `assets/images/logo.png` (recommended size: 184×73px)

## Technology Stack

- **Jekyll 4.4**: Static site generator
- **Sass**: CSS preprocessor
- **Vanilla JavaScript**: No framework dependencies
- **GitHub Pages**: Free hosting

## License

All rights reserved.
