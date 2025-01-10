# Project Title
Realtime Warning PDU

## Getting Started

### Prerequisites

### Installation

Panduan langkah demi langkah untuk menjalankan lingkungan pengembangan:

1. Clone repositori ini:
    ```bash
    git clone https://github.com/DTEDI-PDU/realtime_warning_be.git
    cd nama-repo
    ```

2. Ubah nama file `.env.example` menjadi `.env`:
    ```bash
    mv .env.example .env
    ```
    Sesuaikan isi file `.env` dengan kebutuhan.

3. Instal semua dependensi:
    ```bash
    npm install
    ```

4. Instal tambahan dependensi:
    ```bash
    npm install bcrypt kafkajs
    ```

5. Jalankan Docker Compose:
    ```bash
    docker-compose up -d
    ```
6. Jalankan seeder:
    ```bash
    node src/seeder/seed.js
    ```
7. Inisialisasi Prisma:
    ```bash
    npx prisma migrate dev --name init
    ```

## Usage

Contoh beberapa perintah atau tugas yang berguna:

* Menjalankan aplikasi:
    ```bash
    npm start
    ```

## Deployment


### Server

* **Live:** `http://live-server-url`
* **Release:** `http://release-server-url`
* **Development:** `http://localhost:3001`

### Branches


## Additional Documentation and Acknowledgments
