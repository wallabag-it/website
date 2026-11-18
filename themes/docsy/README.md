# Docsy assets

The styles and scripts of [Docsy](https://github.com/google/docsy), the theme the site was built with
when it was a Hugo site. The pages keep the markup of Docsy (`td-*` classes), so its styles are still
used, under the wallabag.it design of `assets/scss/wbit/`.

This is an assets-only [Cecil theme](https://cecil.app/documentation/templates/#theme): the templates
are in the `layouts/` directory of the site.

| Directory | Content | Version | License |
| --- | --- | --- | --- |
| `assets/scss/` | Sass files of Docsy (`main.scss` is the style sheet of the site) | 0.12.0 | Apache-2.0 |
| `assets/js/base.js` | Script of Docsy (tooltips) | 0.12.0 | Apache-2.0 |
| `assets/vendor/bootstrap/` | Sass files and JavaScript bundle of [Bootstrap](https://getbootstrap.com) | 5.3.6 | MIT |
| `assets/vendor/Font-Awesome/` | Sass files of [Font Awesome Free](https://fontawesome.com) | 6.7.2 | MIT (code) |
| `static/webfonts/` | Fonts of Font Awesome Free (solid and brands) | 6.7.2 | SIL OFL 1.1 |

The files are the ones of these projects, unchanged. `_variables_project.scss` and
`_styles_project.scss` of Docsy are not here: `main.scss` imports the ones of the site
(`assets/scss/`), which set the variables of Bootstrap and add the wallabag.it design.

To update a library, replace its files with the ones of the new version (npm packages `bootstrap`
and `@fortawesome/fontawesome-free`), then run `cecil cache:clear:assets` and build the site.
