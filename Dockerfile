# Gunakan image Node.js
FROM node:22.9.0

# Direktori kerja
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install semua dependensi
RUN npm install

# Salin seluruh direktori src ke dalam container
COPY src /src

# Expose port aplikasi
EXPOSE 3001

# Jalankan seed script
CMD ["node", "/src/seeder/seed.js"]
