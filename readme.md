# TechAura 2024
Official website used for the TechAura 2024 college technical festival Of School of Engineering and Technology, Kohima.

---

## Tech Stack

- **Backend**: Python 3.10+, Flask 3.x, Gunicorn
- **Frontend**: Jinja2 Templates, HTML5, Vanilla CSS3, Bootstrap 4.5.2, JavaScript / jQuery
- **Deployment**: Google Cloud Platform (GCP) App Engine

---

## Project Structure

```text
techaura24/
├── app.py              # Flask application routes and configuration
├── app.yaml            # Google App Engine deployment configuration
├── requirements.txt    # Python dependencies
├── static/             # Static assets (CSS, JS, images, videos)
└── templates/          # Jinja2 HTML templates
```

---

## Getting Started Locally

### 1. Prerequisites
- Python 3.10 or higher
- `pip` package manager

### 2. Setup Virtual Environment
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Application
```bash
python3 app.py
```
Or using the Flask CLI with debug reload:
```bash
flask --app app run --debug --port 5000
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## Deployment (GCP App Engine)

Deploy using the Google Cloud SDK:
```bash
gcloud app deploy
```
