# Utiliser une image de Node.js comme base
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de package.json et package-lock.json (ou yarn.lock) dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet dans le répertoire de travail
COPY . .

# Exposer le port 3000 (le port par défaut utilisé par React en développement)
EXPOSE 3000

# Commande de démarrage pour exécuter l'application React
CMD ["npm", "start"]
