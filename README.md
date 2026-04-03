# 🛡️ Portfolio Profesional — Infraestructura, Redes & Ciberseguridad

[![Deploy Status](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange?style=for-the-badge&logo=cloudflare)](https://pages.cloudflare.com)
[![Astro](https://img.shields.io/badge/Framework-Astro%206-blueviolet?style=for-the-badge&logo=astro)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **Documentación Viva** · Este repositorio es más que un portfolio: es la documentación técnica en tiempo real de mis competencias como Técnico en Sistemas Microinformáticos y Redes (SMR), Especialista en Infraestructura, y Ciberseguridad.

---

## 🏗️ Arquitectura del Proyecto

```
portfolio/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          
│   ├── pages/
│   │   └── index.astro           
│   └── components/
│       ├── Header.astro          
│       ├── Hero.astro            
│       ├── Experience.astro      
│       ├── Labs.astro            
│       ├── TechStack.astro       
│       └── Footer.astro          
├── public/                       
├── astro.config.mjs              
├── package.json
└── README.md
```

## 🚀 Pipeline CI/CD — Despliegue en Cloudflare Edge

Este proyecto utiliza **Cloudflare Pages** como plataforma de despliegue, conectado directamente al repositorio GitHub. El flujo es:

```
[git push main] → [GitHub Webhook] → [Cloudflare Pages Build] → [CDN Edge Deploy]
```

**Variables de entorno en Cloudflare Pages:**
- `NODE_VERSION`: `22`
- `BUILD_COMMAND`: `npm run build`
- `OUTPUT_DIR`: `dist`

## ⚡ Ejecución Local

### Prerrequisitos
- Node.js ≥ 22.12.0
- npm ≥ 10

### Desarrollo
```bash
git clone https://github.com/gallego012/portfolio.git
cd portfolio
npm install
npm run dev
# → http://localhost:4321
```

## 🔬 Secciones Documentadas

| Sección | Descripción | Estado |
|---------|-------------|--------|
| **Hero** | Presentación con estética terminal macOS | ✅ Activo |
| **Experience** | Timeline de formación SMR y trayectoria profesional | ✅ Activo |
| **Labs** | Documentación de la Arquitectura CI/CD interactiva (WAF/DNS) | ✅ Activo |
| **Tech Stack** | Stack categorizado: Debian Server, Redes, Docker, Obsidian | ✅ Activo |
| **Contacto** | Links de contacto corporativo | ✅ Activo |

## 🧪 Laboratorios Incluidos

1. **Arquitectura CI/CD & Servidores Edge** — Documentación del pipeline continuo, hardening de headers, y reglas WAF personalizadas que sostienen este proyecto.

## 🛡️ Filosofía

> *"La infraestructura bien documentada es infraestructura segura."*

Este repositorio sigue un enfoque riguroso de resolución de problemas (troubleshooting) y gestión exhaustiva del conocimiento técnico, priorizando siempre la estabilidad en entornos de producción.

---

**Desplegado en la red Edge de Cloudflare** · Construido con Astro 6 · Interfaz Nativa macOS
