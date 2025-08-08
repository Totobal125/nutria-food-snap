# NutrIA - Landing Page

## Project info

**Repository**: https://github.com/Totobal125/nutria-food-snap
**Live URL**: https://nutria-food-snap.vercel.app

## Acerca del proyecto

Esta landing page fue desarrollada inicialmente por [Lovable](https://lovable.dev), quien nos proporcionó la base del proyecto. Posteriormente, se realizaron ajustes y mejoras en varios detalles para optimizar la experiencia del usuario y asegurar que la página se muestre correctamente en todos los dispositivos.

### Mejoras implementadas:
- Optimización del responsive design
- Ajustes en la tipografía y espaciado
- Mejoras en la accesibilidad
- Optimización del rendimiento
- Actualización del slogan principal
- Configuración optimizada para Vercel

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. **Conecta tu repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Importa este repositorio
   - Vercel detectará automáticamente que es un proyecto Vite/React

2. **Configuración automática:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables de entorno (si las necesitas):**
   - Añade cualquier variable de entorno en la configuración del proyecto

4. **Despliega:**
   - Haz clic en "Deploy"
   - Tu sitio estará disponible en `https://nutria-food-snap.vercel.app`

### Opción 2: Despliegue Manual

```bash
# 1. Instala Vercel CLI
npm i -g vercel

# 2. Inicia sesión en Vercel
vercel login

# 3. Despliega desde el directorio del proyecto
vercel

# 4. Para producción
vercel --prod
```

### Opción 3: GitHub Actions (Automático)

El proyecto incluye configuración para despliegue automático. Cada push a `main` desplegará automáticamente.

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📁 Estructura del Proyecto

```
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   ├── pages/             # Páginas principales
│   ├── hooks/             # Hooks personalizados
│   ├── utils/             # Utilidades
│   └── assets/            # Imágenes y recursos
├── vercel.json            # Configuración de Vercel
├── vite.config.ts         # Configuración de Vite
└── package.json           # Dependencias y scripts
```

## 🎨 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## 🔧 Configuración de Vercel

El proyecto incluye:
- ✅ `vercel.json` con configuración optimizada
- ✅ Rewrites para SPA routing
- ✅ Headers de seguridad
- ✅ Cache optimizado para assets
- ✅ Build optimizado con code splitting

## 📱 Características

- **Responsive Design**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags, sitemap, robots.txt
- **Performance**: Lazy loading, code splitting
- **Accessibility**: ARIA labels, keyboard navigation
- **Analytics Ready**: Preparado para Google Analytics

## 🔄 Actualizaciones

Para actualizar el sitio:
1. Haz cambios en tu código
2. Commit y push a GitHub
3. Vercel desplegará automáticamente
4. Tu sitio se actualizará en segundos

## 📞 Soporte

Si tienes problemas con el despliegue:
- Revisa los logs en Vercel Dashboard
- Verifica que el build local funcione: `npm run build`
- Consulta la [documentación de Vercel](https://vercel.com/docs)

---

**¡Tu landing page de NutrIA estará lista para el mundo! 🌍**
