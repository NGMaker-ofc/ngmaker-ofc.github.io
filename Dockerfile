FROM node:iron AS buildcontainer

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm files
COPY package.json pnpm-*.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the code
COPY . .

# Build the Nuxt application
RUN pnpm run build

# Production stage
FROM node:iron-slim AS prodcontainer

# Set working directory
WORKDIR /app

# Copy only the built application from the build stage
COPY --from=buildcontainer /app/dist/ngmaker ./

# Declare volumes raw assets
VOLUME ["/app/browser/assets"]

# Expose the port the app will run on
EXPOSE 4000

# Set environment variables
ENV NODE_ENV=production

# Command to run the application
CMD ["node", "server/server.mjs"]
