# Menggunakan image Node.js resmi
FROM node:22.9.0

# Set working directory di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json terlebih dahulu
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --include=dev

# Menyalin seluruh isi direktori proyek ke dalam container
COPY . .

# Menyediakan port yang digunakan oleh aplikasi
EXPOSE 3001

# Menjalankan aplikasi
CMD ["node", "seed.js"]
