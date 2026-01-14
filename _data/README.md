# Navigation Configuration

The `navigation.yml` file controls which pages appear in the site menu.

## How to Show/Hide Menu Items

Edit `navigation.yml` and set `visible: true` or `visible: false` for each menu item.

### Example

```yaml
- name: Home
  link: /
  visible: true        # Shows in menu

- name: About
  link: /about/
  visible: false       # Hidden from menu

- name: Services
  link: /services/
  visible: false       # Hidden from menu

- name: Dispatches
  link: /blog/
  visible: true        # Shows in menu

- name: Contact
  link: /contact/
  visible: false       # Hidden from menu
```

## To Show a Hidden Page

Change `visible: false` to `visible: true`:

```yaml
- name: About
  link: /about/
  visible: true        # Now visible in menu!
```

## To Hide a Visible Page

Change `visible: true` to `visible: false`:

```yaml
- name: Contact
  link: /contact/
  visible: false       # Now hidden from menu
```

## Notes

- Pages still exist at their URLs even when hidden from the menu
- Users can still access hidden pages if they know the URL
- The content files remain in `_pages/` - only the menu visibility changes
- Changes take effect immediately after committing to GitHub
