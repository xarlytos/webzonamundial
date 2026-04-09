# Plan de Sincronización de Noticias — ZonaMundial

## Qué vamos a hacer
Sincronizar noticias de fútbol/Mundial 2026 desde RSS feeds públicos, reescribirlas con IA para contenido original, y publicarlas automáticamente en la web.

---

## Lo que necesitas conseguir ANTES de la sesión

### 1. API Key de IA (para reescribir textos)
**Opción recomendada: Anthropic (Claude)**
- Ve a: https://console.anthropic.com/
- Crea cuenta → Settings → API Keys → Create Key
- Modelo recomendado: `claude-haiku-4-5-20251001` (más barato, suficiente para reescribir)
- Coste estimado: ~$0.005 por artículo (~$5/mes con 30 artículos/día)

**Alternativa: OpenAI**
- Ve a: https://platform.openai.com/
- Crea cuenta → API Keys → Create new secret key
- Modelo: `gpt-4o-mini` (barato y rápido)

### 2. Sanity Project (para almacenar artículos)
**Opción A: Configurar Sanity (recomendado)**
- Ve a: https://www.sanity.io/
- Crea cuenta gratuita → Nuevo proyecto → Copia el Project ID
- En el proyecto, ve a Settings → API → Tokens → Add API Token (con permisos de Editor/Write)
- Actualiza `.env.local`:
  ```
  NEXT_PUBLIC_SANITY_PROJECT_ID="tu-project-id-real"
  SANITY_API_TOKEN="tu-token-de-escritura"
  ```

**Opción B: Sin Sanity (JSON local)**
- Si no quieres configurar Sanity, podemos guardar en un JSON local
- Más simple pero sin CMS visual para gestionar artículos

### 3. Deploy en Vercel (para cron jobs automáticos)
- Si ya tienes Vercel: perfecto, usaremos Vercel Cron
- Si no: el cron se puede ejecutar manualmente o con un servicio gratuito como cron-job.org

---

## Arquitectura que implementaremos

```
RSS Feeds (FIFA, Marca, ESPN, AS...)
        │
        ▼
/api/noticias/sync  (API Route - Next.js)
        │
        ├─ 1. Fetch RSS feeds con rss-parser
        ├─ 2. Filtrar artículos nuevos (no duplicados)
        ├─ 3. Enviar a Claude/OpenAI para reescribir
        │     → Título original en español
        │     → Cuerpo reescrito (300-500 palabras)
        │     → Extracto SEO (150 chars)
        │     → Categoría automática
        ├─ 4. Guardar en Sanity (o JSON local)
        └─ 5. Responder con count de artículos creados
        
Vercel Cron (cada 30 min)
        │
        ▼
GET /api/noticias/sync?secret=TU_CRON_SECRET
```

## RSS Feeds que usaremos (gratuitos, sin API key)

| Fuente | URL del Feed | Idioma |
|--------|-------------|--------|
| FIFA News | https://www.fifa.com/fifaplus/en/articles/rss | EN |
| Marca Fútbol | https://e00-marca.uecdn.es/rss/futbol/futbol-internacional.xml | ES |
| AS Fútbol | https://feeds.as.com/mrss-s/pages/as/site/as.com/portada/videos/futbol/ | ES |
| ESPN FC | https://www.espn.com/espn/rss/soccer/news | EN |
| BBC Sport Football | https://feeds.bbci.co.uk/sport/football/rss.xml | EN |

*Nota: Algunos feeds pueden cambiar URLs. Los verificaremos en la sesión.*

---

## Dependencias a instalar

```bash
npm install rss-parser @anthropic-ai/sdk
# O si usas OpenAI:
npm install rss-parser openai
```

---

## Variables de entorno necesarias (.env.local)

```env
# Sanity (almacenamiento)
NEXT_PUBLIC_SANITY_PROJECT_ID="xxxxxxxx"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="skxxxxxxxxxxxxxxxxxx"

# IA para reescribir
ANTHROPIC_API_KEY="sk-ant-xxxxxxxxxxxxx"
# O alternativamente:
# OPENAI_API_KEY="sk-xxxxxxxxxxxxx"

# Seguridad del cron
CRON_SECRET="una-clave-secreta-larga-aleatoria"
```

---

## Archivos que crearemos

```
src/app/api/noticias/sync/route.ts     → API endpoint de sincronización
src/app/api/noticias/cron/route.ts     → Endpoint para Vercel Cron
src/lib/rss-feeds.ts                    → Configuración de feeds RSS
src/lib/ai-rewriter.ts                  → Lógica de reescritura con IA
src/lib/news-sync.ts                    → Orquestador del pipeline
vercel.json                             → Configuración de cron jobs
```

---

## Estimación de costes mensuales

| Concepto | Coste |
|----------|-------|
| RSS Feeds | Gratis |
| Sanity (plan free) | Gratis (hasta 100K documentos) |
| Claude Haiku (reescritura) | ~$5-10/mes |
| Vercel (hosting + cron) | Gratis (plan hobby) |
| **TOTAL** | **~$5-10/mes** |

---

## Checklist para mañana

- [ ] API Key de Anthropic o OpenAI
- [ ] Sanity Project ID configurado (o decidir JSON local)
- [ ] Sanity API Token con permisos de escritura
- [ ] Decidir frecuencia del cron (cada 30 min recomendado)
- [ ] Verificar que los RSS feeds funcionan (abrir URLs en navegador)
