import React, { useState } from 'react'
import {
  ExternalLink,
  Download,
  Copy,
  Check,
  FileText,
  Printer,
  Moon,
  Sun,
  Code2,
  Cpu,
  Sprout,
  BarChart3
} from 'lucide-react'
import './App.css'

interface Project {
  title: string
  url: string
  displayUrl: string
  description: string
  tag?: string
  icon: React.ReactNode
}

interface ProfessionalLink {
  label: string
  url: string
  displayUrl: string
  icon: React.ReactNode
}

// Crisp brand icons
const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.69-1.69c0-.93-.76-1.69-1.69-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.69 1.69 1.69m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
)

function App() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleCopy = (text: string, id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedLink(id)
    setTimeout(() => setCopiedLink(null), 2000)
  }

  const handleCardNavigate = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleCopyAll = () => {
    const allLinksText = `Priyanshu Anand - Portfolio & Project Links
Software Engineer | Full-Stack & AI-Powered Applications

Portfolio:
- Central Engineering Portfolio: https://priyanshu.cv/

Selected Projects:
- EduSphere: https://edusphere.live/ (Educational platform with academic resources and AI-powered learning support)
- ArgonAI: https://argon.priyanshu.cv/ (AI-powered productivity workspace for email and meeting workflows)
- Krishi-Saathi: https://kishansaathi.priyanshu.cv/ (AI-powered agricultural platform)
- Retail BI: https://retail-bi.priyanshu.cv/ (Retail analytics and business intelligence project)

Professional Profiles:
- Resume: https://sde.priyanshu.cv/
- GitHub: https://github.com/priyanshwho
- LinkedIn: https://linkedin.com/in/priyanswho`

    navigator.clipboard.writeText(allLinksText)
    setCopiedAll(true)
    setTimeout(() => setCopiedAll(false), 2200)
  }

  const handlePrint = () => {
    window.print()
  }

  const projects: Project[] = [
    {
      title: 'EduSphere',
      url: 'https://edusphere.live/',
      displayUrl: 'edusphere.live',
      description: 'Educational platform with academic resources and AI-powered learning support.',
      tag: 'EdTech & AI',
      icon: <Code2 className="card-inline-icon" size={17} />
    },
    {
      title: 'ArgonAI',
      url: 'https://argon.priyanshu.cv/',
      displayUrl: 'argon.priyanshu.cv',
      description: 'AI-powered productivity workspace for email and meeting workflows.',
      tag: 'AI Productivity',
      icon: <Cpu className="card-inline-icon" size={17} />
    },
    {
      title: 'Krishi-Saathi',
      url: 'https://kishansaathi.priyanshu.cv/',
      displayUrl: 'kishansaathi.priyanshu.cv',
      description: 'AI-powered agricultural platform.',
      tag: 'AgriTech AI',
      icon: <Sprout className="card-inline-icon" size={17} />
    },
    {
      title: 'Retail BI',
      url: 'https://retail-bi.priyanshu.cv/',
      displayUrl: 'retail-bi.priyanshu.cv',
      description: 'Retail analytics and business intelligence project.',
      tag: 'Analytics & BI',
      icon: <BarChart3 className="card-inline-icon" size={17} />
    }
  ]

  const professionalLinks: ProfessionalLink[] = [
    {
      label: 'RESUME',
      url: 'https://sde.priyanshu.cv/',
      displayUrl: 'sde.priyanshu.cv',
      icon: <FileText size={16} />
    },
    {
      label: 'GITHUB',
      url: 'https://github.com/priyanshwho',
      displayUrl: 'github.com/priyanshwho',
      icon: <GitHubIcon size={16} />
    },
    {
      label: 'LINKEDIN',
      url: 'https://linkedin.com/in/priyanswho',
      displayUrl: 'linkedin.com/in/priyanswho',
      icon: <LinkedInIcon size={16} />
    }
  ]

  return (
    <div className={`page-wrapper ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Top Floating Controls (Hidden in Print) */}
      <header className="action-bar no-print">
        <div className="action-bar-inner">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">Live Web Link Sheet</span>
          </div>

          <div className="action-buttons">
            <button
              onClick={handleCopyAll}
              className="action-btn"
              title="Copy all links formatted to clipboard"
              type="button"
            >
              {copiedAll ? <Check size={15} /> : <Copy size={15} />}
              <span>{copiedAll ? 'Copied!' : 'Copy All'}</span>
            </button>

            <a
              href="/Priyanshu_Anand_Portfolio_Links_Corrected.pdf"
              download="Priyanshu_Anand_Portfolio_Links_Corrected.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn primary"
              title="Download or view corrected PDF document"
            >
              <Download size={15} />
              <span>PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="action-btn icon-only"
              title="Print / Save as PDF"
              aria-label="Print document"
              type="button"
            >
              <Printer size={16} />
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="action-btn icon-only"
              title={isDarkMode ? 'Switch to Paper Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
              type="button"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Document Container */}
      <main className="document-sheet">
        {/* Document Header */}
        <header className="doc-header">
          <h1 className="name-title">PRIYANSHU ANAND</h1>
          <p className="subtitle">
            SOFTWARE ENGINEER <span className="separator">|</span> FULL-STACK & AI-POWERED APPLICATIONS
          </p>
          <div className="header-divider" />
        </header>

        {/* Section: Portfolio Website */}
        <section className="section-block">
          <div className="section-title-wrap">
            <h2 className="section-title">PORTFOLIO WEBSITE</h2>
          </div>

          <div
            className="portfolio-hero-card clickable-card"
            onClick={() => handleCardNavigate('https://priyanshu.cv/')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleCardNavigate('https://priyanshu.cv/')
              }
            }}
          >
            <div className="portfolio-card-left">
              <div className="accent-bar" />
              <div className="portfolio-info">
                <span className="portfolio-heading">
                  Central Engineering Portfolio & Interactive Demos
                </span>
                <span className="portfolio-subtext no-print">
                  Full project showcase, technical writeups & live demos
                </span>
              </div>
            </div>

            <div className="link-cluster" onClick={(e) => e.stopPropagation()}>
              <a
                href="https://priyanshu.cv/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-badge primary-badge"
              >
                <span className="link-text">priyanshu.cv</span>
                <ExternalLink size={14} className="external-arrow" />
              </a>
              <button
                type="button"
                className="copy-chip no-print"
                onClick={(e) => handleCopy('https://priyanshu.cv/', 'portfolio', e)}
                title="Copy link"
                aria-label="Copy portfolio link"
              >
                {copiedLink === 'portfolio' ? <Check size={13} /> : <Copy size={13} />}
              </button>
            </div>
          </div>
        </section>

        {/* Section: Selected Projects */}
        <section className="section-block">
          <div className="section-title-wrap">
            <h2 className="section-title">SELECTED PROJECTS</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card clickable-card"
                onClick={() => handleCardNavigate(project.url)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardNavigate(project.url)
                  }
                }}
              >
                <div className="project-card-header">
                  <div className="project-title-group">
                    <span className="project-title">{project.title}</span>
                    {project.tag && (
                      <span className="project-tag no-print">{project.tag}</span>
                    )}
                  </div>

                  <div className="link-cluster" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-badge"
                    >
                      <span className="link-text">{project.displayUrl}</span>
                      <ExternalLink size={13} className="external-arrow" />
                    </a>
                    <button
                      type="button"
                      className="copy-chip no-print"
                      onClick={(e) => handleCopy(project.url, `proj-${index}`, e)}
                      title="Copy link"
                      aria-label={`Copy link for ${project.title}`}
                    >
                      {copiedLink === `proj-${index}` ? <Check size={13} /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Professional Links */}
        <section className="section-block">
          <div className="section-title-wrap">
            <h2 className="section-title">PROFESSIONAL LINKS</h2>
          </div>

          <div className="professional-grid">
            {professionalLinks.map((item, index) => (
              <div
                key={item.label}
                className="professional-card clickable-card"
                onClick={() => handleCardNavigate(item.url)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardNavigate(item.url)
                  }
                }}
              >
                <div className="prof-card-top">
                  <span className="prof-label">{item.label}</span>
                  <div className="prof-icon no-print">{item.icon}</div>
                </div>

                <div className="prof-link-row" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prof-link-anchor"
                  >
                    <span className="prof-link-text">{item.displayUrl}</span>
                    <ExternalLink size={14} className="external-arrow" />
                  </a>
                  <button
                    type="button"
                    className="copy-chip no-print"
                    onClick={(e) => handleCopy(item.url, `prof-${index}`, e)}
                    title={`Copy ${item.label} link`}
                    aria-label={`Copy ${item.label} link`}
                  >
                    {copiedLink === `prof-${index}` ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notice Callout Box */}
        <div className="callout-card">
          <div className="callout-content">
            <p>
              This document is a portfolio link sheet for application forms that require a file upload.
              Open the links above to view the live portfolio, projects, resume, and professional profiles.
            </p>
          </div>
        </div>

        {/* Document Footer */}
        <footer className="doc-footer">
          <div className="footer-left">
            <span>Priyanshu Anand — Portfolio Sheet</span>
          </div>
          <div className="footer-right">
            <span>Page 1 of 1</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
