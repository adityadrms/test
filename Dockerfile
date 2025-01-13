# Menggunakan image Node.js resmi
FROM node:22.9.0

# Set working directory di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Menyalin seluruh isi direktori proyek ke dalam container
COPY . .

# Generate Prisma
RUN npx prisma generate

# Menyediakan port yang digunakan oleh aplikasi
EXPOSE 3001

# Menjalankan aplikasi
CMD ["node", "seed.js"]
