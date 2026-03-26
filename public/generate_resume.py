#!/usr/bin/env python3
"""Generate a classic professional resume PDF for Sarawut Nawawisitkul."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
import os

# ── Color Palette (classic professional) ───────────────────────
NAVY = HexColor("#1b2a4a")
DARK_TEXT = HexColor("#222222")
MEDIUM_TEXT = HexColor("#444444")
LIGHT_TEXT = HexColor("#666666")
RULE_COLOR = HexColor("#1b2a4a")
LIGHT_RULE = HexColor("#cccccc")

# ── Page Setup ─────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
MARGIN_L = 20 * mm
MARGIN_R = 20 * mm
CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R


def draw_header(c, y):
    """Draw the name and contact header — centered, classic style."""
    # Name
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(PAGE_W / 2, y, "SARAWUT NAWAWISITKUL")
    y -= 7 * mm

    # Title
    c.setFillColor(MEDIUM_TEXT)
    c.setFont("Helvetica", 10)
    c.drawCentredString(PAGE_W / 2, y, "Senior Backend Engineer")
    y -= 6 * mm

    # Horizontal rule
    c.setStrokeColor(NAVY)
    c.setLineWidth(1.5)
    c.line(MARGIN_L, y, PAGE_W - MARGIN_R, y)
    y -= 5 * mm

    # Contact info line
    c.setFillColor(MEDIUM_TEXT)
    c.setFont("Helvetica", 8)
    contact = "sarawut.nawawisitkul@gmail.com  |  +66 91-836-3922  |  github.com/mamochiro  |  linkedin.com/in/sarawut-nawawisitkul"
    c.drawCentredString(PAGE_W / 2, y, contact)
    y -= 3 * mm

    # Thin rule under contact
    c.setStrokeColor(LIGHT_RULE)
    c.setLineWidth(0.5)
    c.line(MARGIN_L, y, PAGE_W - MARGIN_R, y)

    return y - 7 * mm


def draw_section_title(c, y, title):
    """Draw a section title with a full-width underline."""
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(MARGIN_L, y, title.upper())
    y -= 2.5 * mm
    c.setStrokeColor(NAVY)
    c.setLineWidth(1)
    c.line(MARGIN_L, y, PAGE_W - MARGIN_R, y)
    return y - 5 * mm


def draw_job_header(c, y, title, company, period):
    """Draw job title (bold), company (italic), and dates (right-aligned)."""
    c.setFillColor(DARK_TEXT)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(MARGIN_L, y, title)

    c.setFillColor(LIGHT_TEXT)
    c.setFont("Helvetica-Oblique", 8.5)
    c.drawRightString(PAGE_W - MARGIN_R, y, period)
    y -= 4 * mm

    c.setFillColor(MEDIUM_TEXT)
    c.setFont("Helvetica-Oblique", 8.5)
    c.drawString(MARGIN_L, y, company)
    return y - 5 * mm


def draw_bullet(c, y, text):
    """Draw a bullet point with proper text wrapping."""
    max_width = CONTENT_W - 8 * mm
    indent = MARGIN_L + 6 * mm

    # Bullet character
    c.setFillColor(NAVY)
    c.setFont("Helvetica", 7.8)
    c.drawString(MARGIN_L + 1.5 * mm, y, "\u2022")

    # Text
    c.setFillColor(MEDIUM_TEXT)
    c.setFont("Helvetica", 7.8)

    words = text.split()
    line = ""
    for word in words:
        test = line + (" " if line else "") + word
        if c.stringWidth(test, "Helvetica", 7.8) > max_width:
            c.drawString(indent, y, line)
            y -= 3.5 * mm
            line = word
        else:
            line = test
    if line:
        c.drawString(indent, y, line)
        y -= 4.2 * mm

    return y


def draw_skills_row(c, y, label, items_text):
    """Draw a single skills row: bold label followed by regular text."""
    c.setFillColor(DARK_TEXT)
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(MARGIN_L, y, label + ":")
    label_w = c.stringWidth(label + ":  ", "Helvetica-Bold", 7.8)

    c.setFillColor(MEDIUM_TEXT)
    c.setFont("Helvetica", 7.8)

    # Wrap text if needed
    max_width = CONTENT_W - label_w
    words = items_text.split()
    line = ""
    x = MARGIN_L + label_w
    first_line = True
    for word in words:
        test = line + (" " if line else "") + word
        w = max_width if first_line else CONTENT_W - 8 * mm
        if c.stringWidth(test, "Helvetica", 7.8) > w:
            c.drawString(x, y, line)
            y -= 3.5 * mm
            line = word
            if first_line:
                x = MARGIN_L + 8 * mm
                first_line = False
        else:
            line = test
    if line:
        c.drawString(x, y, line)
        y -= 4.5 * mm

    return y


def generate_resume(output_path):
    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("Sarawut Nawawisitkul - Senior Backend Engineer")
    c.setAuthor("Sarawut Nawawisitkul")

    y = PAGE_H - 18 * mm

    # ── Header ─────────────────────────────────────────────────
    y = draw_header(c, y)

    # ── Professional Summary ───────────────────────────────────
    y = draw_section_title(c, y, "Professional Summary")

    summary = (
        "Senior Backend Engineer with 7+ years of experience designing and building "
        "high-throughput backend systems for trading and investment platforms in the "
        "FinTech industry. Expert in Golang-based microservices, financial APIs, and "
        "data-intensive architectures serving 500K+ API calls daily. Proven track record "
        "of improving system performance, reducing deployment times, and leading "
        "technical decisions from architecture through production delivery."
    )
    c.setFillColor(MEDIUM_TEXT)
    c.setFont("Helvetica", 7.8)
    words = summary.split()
    line = ""
    for word in words:
        test = line + (" " if line else "") + word
        if c.stringWidth(test, "Helvetica", 7.8) > CONTENT_W:
            c.drawString(MARGIN_L, y, line)
            y -= 3.5 * mm
            line = word
        else:
            line = test
    if line:
        c.drawString(MARGIN_L, y, line)
        y -= 6 * mm

    # ── Work Experience ────────────────────────────────────────
    y = draw_section_title(c, y, "Work Experience")

    # Job 1: Robowealth
    y = draw_job_header(c, y,
                        "Senior Software Engineer",
                        "Robowealth Co., Ltd.",
                        "March 2020 \u2013 Present")

    for bullet in [
        "Designed and developed Open APIs for 3 trading/investment platforms (Finvest, Odini, FinPlus), serving 500K+ daily API requests across mutual fund products.",
        "Architected 15+ Golang-based microservices with well-defined API contracts, data models, and service boundaries, reducing inter-service latency by 40%.",
        "Designed Elasticsearch schemas for financial data search, improving query response times from 2s to under 200ms for complex fund lookups.",
        "Optimized PostgreSQL database schemas and indexing strategies, handling 10M+ financial transaction records with sub-second query performance.",
        "Implemented and managed API gateway (APISIX/Traefik) with rate limiting, authentication, and traffic routing policies, handling 500K+ daily requests with zero downtime during deployments.",
        "Conducted load testing with k6, identifying and resolving bottlenecks to achieve 99.9% uptime under 3x peak traffic loads.",
        "Led technical design discussions and sprint planning, mentoring 3 junior engineers and establishing team coding standards.",
    ]:
        y = draw_bullet(c, y, bullet)

    y -= 2 * mm

    # Job 2: Workmotion
    y = draw_job_header(c, y,
                        "Software Developer",
                        "Workmotion Creative",
                        "July 2018 \u2013 February 2020")

    for bullet in [
        "Developed backend APIs and services supporting high-traffic campaign websites for major cinema clients, handling 100K+ concurrent users during launch events.",
        "Built RESTful APIs with PHP/Laravel powering 5+ campaign microsites with real-time user engagement features.",
        "Provided technical guidance and API integration support to 4 frontend developers, accelerating delivery timelines by 25%.",
    ]:
        y = draw_bullet(c, y, bullet)

    y -= 2 * mm

    # Job 3: Spoon Labs
    y = draw_job_header(c, y,
                        "Research & Development Intern",
                        "Spoon Laboratories Co., Ltd.",
                        "August 2017 \u2013 December 2017")

    for bullet in [
        "Analyzed user access data across 10K+ daily active users and generated actionable system usage reports for stakeholders.",
        "Developed internal web service APIs to improve cross-team data accessibility, reducing manual reporting effort by 60%.",
    ]:
        y = draw_bullet(c, y, bullet)

    y -= 3 * mm

    # ── Technical Skills ───────────────────────────────────────
    y = draw_section_title(c, y, "Technical Skills")

    skills = [
        ("Languages", "Golang, Scala, TypeScript, JavaScript, PHP, Python"),
        ("Backend & API", "REST, gRPC, GraphQL, Microservices, Clean Architecture"),
        ("Databases", "PostgreSQL, MySQL, Elasticsearch, MongoDB, Redis, InfluxDB, Oracle"),
        ("DevOps & Infrastructure", "Docker, Kubernetes, Helm, GCP, OpenShift, Terraform"),
        ("CI/CD & Tools", "GitLab CI/CD, Jenkins, ArgoCD, k6, Traefik, APISIX"),
        ("Observability", "Grafana, Prometheus, Jaeger, ELK Stack"),
    ]
    for label, items in skills:
        y = draw_skills_row(c, y, label, items)

    y -= 3 * mm

    # ── Education ──────────────────────────────────────────────
    y = draw_section_title(c, y, "Education")

    c.setFillColor(DARK_TEXT)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(MARGIN_L, y, "Bachelor of Engineering, Software Engineering")

    c.setFillColor(LIGHT_TEXT)
    c.setFont("Helvetica-Oblique", 8.5)
    c.drawRightString(PAGE_W - MARGIN_R, y, "2014 \u2013 2018")
    y -= 4 * mm

    c.setFillColor(MEDIUM_TEXT)
    c.setFont("Helvetica-Oblique", 8.5)
    c.drawString(MARGIN_L, y, "Prince of Songkla University, College of Computing")

    # ── Save ───────────────────────────────────────────────────
    c.save()
    print(f"Resume generated: {output_path}")


if __name__ == "__main__":
    output_dir = os.path.dirname(os.path.abspath(__file__))
    output_path = os.path.join(output_dir, "resume.pdf")
    generate_resume(output_path)
