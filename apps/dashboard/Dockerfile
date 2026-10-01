# ------------------------------------
# ---------- Stage 1: Build ----------
# ------------------------------------
FROM node:lts-alpine3.22 AS builder

WORKDIR /app

RUN corepack enable

# Copy package files first for caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/dashboard/package.json ./apps/dashboard/package.json

COPY configs/tsup-config/package.json ./configs/tsup-config/package.json
COPY configs/vitest-config/package.json ./configs/vitest-config/package.json
COPY configs/eslint-config/package.json ./configs/eslint-config/package.json
COPY configs/typescript-config/package.json ./configs/typescript-config/package.json
COPY configs/prettier-config/package.json ./configs/prettier-config/package.json

COPY packages/ui/package.json ./packages/ui/package.json
COPY packages/utils/package.json ./packages/utils/package.json
COPY packages/data/package.json ./packages/data/package.json
COPY packages/styles/package.json ./packages/styles/package.json
COPY packages/env/package.json ./packages/env/package.json
COPY packages/types/package.json ./packages/types/package.json

# Install pnpm and all dependencies (dev + prod)
RUN pnpm install --ignore-scripts --frozen-lockfile

# Copy source code
COPY . .

# Declare build args (secrets for prerender)

ARG VITE_DASHBOARD_APP_HOST
ARG DATABASE_URL
ARG TOKEN_SECRET
ARG SALT_ROUND
ARG DASHBOARD_APP_HOST

# Set temporary ENV for build (not persisted in final image)
ENV \
  VITE_DASHBOARD_APP_HOST=$VITE_DASHBOARD_APP_HOST \
  DATABASE_URL=$DATABASE_URL \
  TOKEN_SECRET=$TOKEN_SECRET \
  SALT_ROUND=$SALT_ROUND \
  DASHBOARD_APP_HOST=$DASHBOARD_APP_HOST 

# Create a env file at the root of the proj
RUN cat > .env.production <<EOF
VITE_DASHBOARD_APP_HOST=$VITE_DASHBOARD_APP_HOST
DATABASE_URL=$DATABASE_URL
TOKEN_SECRET=$TOKEN_SECRET
SALT_ROUND=$SALT_ROUND
DASHBOARD_APP_HOST=$DASHBOARD_APP_HOST
EOF

# Build app (uses build-time ENV)
ENV NODE_ENV=production
RUN pnpm build --filter dashboard



# -----------------------------------------
# ---------- Stage 2: Production ----------
# -----------------------------------------
FROM node:lts-alpine3.22 AS runner

WORKDIR /app

# Install pnpm (needed to serve)
RUN corepack enable

# Copy only package.json
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/dashboard/package.json ./apps/dashboard/package.json

COPY packages/ui/package.json ./packages/ui/package.json
COPY packages/utils/package.json ./packages/utils/package.json
COPY packages/data/package.json ./packages/data/package.json
COPY packages/styles/package.json ./packages/styles/package.json
COPY packages/env/package.json ./packages/env/package.json
COPY packages/types/package.json ./packages/types/package.json

# install prod deps
RUN pnpm install --prod --frozen-lockfile

# Copy built output from builder
COPY --from=builder /app/apps/dashboard/dist ./apps/dashboard/dist

COPY --from=builder /app/packages/ui/dist ./packages/ui/dist
COPY --from=builder /app/packages/utils/dist ./packages/utils/dist
COPY --from=builder /app/packages/data/dist ./packages/data/dist
COPY --from=builder /app/packages/styles/dist ./packages/styles/dist
COPY --from=builder /app/packages/env/dist ./packages/env/dist
COPY --from=builder /app/packages/types/dist ./packages/types/dist

ENV NODE_ENV=production
EXPOSE 3000

ENTRYPOINT ["node","apps/dashboard/dist/server/index.mjs"]
