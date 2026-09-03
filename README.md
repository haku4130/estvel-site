# estvel.ru

Site for an electrical contracting company, live at **[estvel.ru](https://estvel.ru)**.

A brochure site rather than an application: one page presenting the company's
services — wiring, distribution boards, underfloor heating — with photographs of
finished work. There are no models and no database; Django serves a single
template and the static assets are delivered directly by the web server.

## Layout

```
estvel-django/     Django project: settings, urls, one view, one template
public_html/       static assets served by the web server — styles, script, photos
passenger_wsgi.py  entry point for Phusion Passenger on shared hosting
.htaccess          enables Passenger and points it at the virtualenv
```

## Stack

- **[Django 5.0](https://www.djangoproject.com)** — routing, templating, admin
- Plain HTML, CSS and JavaScript on the front end, no build step
- **[Phusion Passenger](https://www.phusionpassenger.com)** on Apache shared hosting

## Running locally

```bash
python -m venv venv && source venv/bin/activate
pip install -r estvel-django/requirements.txt
python estvel-django/manage.py runserver
```

The site is then on `http://127.0.0.1:8000`.

## Deployment

Shared hosting with Passenger: `.htaccess` turns Passenger on and names the
interpreter, `passenger_wsgi.py` puts the project and its virtualenv on
`sys.path` and hands off to Django's WSGI application. Touching
`tmp/restart.txt` restarts the app.

Paths inside `passenger_wsgi.py` and `.htaccess` are absolute and specific to
the hosting account, so they need editing for any other host.
