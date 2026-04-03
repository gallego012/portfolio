# Portfolio Profesional — Infraestructura, Redes & Ciberseguridad

> **Documentación Activa** · Este repositorio contiene la infraestructura como código (IaC) y la base estructural de un portfolio enfocado estrictamente en la administración de sistemas, seguridad y arquitecturas de red.

## Arquitectura del Proyecto

```text
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

## Pipeline CI/CD & Deploy Perimetral

El despliegue está orquestado mediante integraciones con Cloudflare Pages, asegurando alta disponibilidad a través de la red Edge global.

**Flujo Operativo:**
1. Mantenimiento del historial vía GitHub (`git push`).
2. Intercepción automatizada por webhook de integración estructurada.
3. Compilación de recursos estáticos pre-renderizados.
4. Distribución en CDN y validación de reglas WAF.

## Réplica de Entorno Local

Para auditoría técnica o validación del comportamiento local:

### Prerrequisitos
- Node.js (Versión ≥ 22.12.0)
- Gestor de paquetes nativo (npm)

### Secuencia de Arranque
```bash
git clone https://github.com/gallego012/portfolio.git
cd portfolio
npm install
npm run dev
```

## Estructura de la Documentación

| Módulo Principal | Función Estructural | Estado |
|--------|------------------------|--------|
| **Trayectoria** | Registro cronológico del perfil profesional y despliegues integrales | Operativo |
| **Casos de Uso** | Documentación de la Arquitectura CI/CD, filtrado DNS y políticas WAF | Operativo |
| **Dominio Técnico**| Matriz de competencias en administración de servidores y redes | Operativo |

## Filosofía Operativa

> *"La solidez de una infraestructura reside en su capacidad de ser documentada, auditada y replicada de forma inmutable."*

Este repositorio refleja la aplicación práctica de políticas de seguridad, *hardening* de aplicaciones web y resolución metódica de incidentes mediante documentación diligente.

---
*Motor principal: Astro Framework · Seguridad Perimetral: Cloudflare Edge*
