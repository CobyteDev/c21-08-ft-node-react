# Dockerfile para backend
FROM node:20.13.1

# Crear un directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la API
EXPOSE 3000
EXPOSE 3170

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
