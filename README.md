# Backend Development
## Pengertian Backend 
Backend disini merupakan segala macam teknologi yang ada di sisi server dari sebuah aplikasi atau sebuah website.

## Apa itu Backend Development?
Backend Development adalah proses pembuatan sebuah website atau aplikasi yang berfokus pada bagian server. Backend Development biasanya menggunakan bahasa pemrograman seperti PHP, Python, Ruby, Java, dan lain-lain. Backend Development juga biasanya menggunakan database seperti MySQL, PostgreSQL, dan lain-lain.

## Bahasa Pemrograman Backend
1. C
2. Java
3. Python
4. Rust
5. C++
6. Javascript
7. Golang

## Server Backend
Server disini merupakan sebuah jaringan komputer yang menyediakan jenis layanan-layanan tertentu pada komputer lain. Server biasanya digunakan untuk menyimpan data-data yang dibutuhkan oleh aplikasi atau website. Server juga digunakan untuk mengirimkan data-data tersebut ke komputer lain.

## Database Backend
Database disini merupakan sebuah kumpulan data yang disimpan secara sistematis yang dapat diolah dan juga di manipulasi. Database biasanya digunakan untuk menyimpan data-data yang dibutuhkan oleh aplikasi atau website.

## API
API disini merupakan sebuah interface yang digunakan untuk menghubungkan antara aplikasi atau website dengan server. API juga digunakan untuk menghubungkan antara aplikasi atau website dengan database. Contoh API yang digunakan saat ini:
1. REST API
2. GraphQL API

## MERN Stack
MERN Stack disini merupakan sebuah teknologi yang digunakan untuk membuat sebuah website atau aplikasi. MERN Stack sendiri merupakan singkatan dari:
1. MongoDB
2. Express
3. React
4. Node.js
selain itu juga MERN Stack juga merupakan sebuah Teknologi Full-stack yang menggunakan bahasa pemrograman Javascript, dan juga mendukung Arsitektur MVC (Model View Controller).

# MySQL Lanjutan
Kita bisa menggunakan MySQL untuk melakukan manipulasi database dengan menggunakan query-query yang sudah diberikan berikut merupakan beberapa dari query yang bisa kita gunakan:
1. CREATE DATABASE
2. CREATE TABLE
3. INSERT INTO
4. SELECT
5. UPDATE
6. DELETE
7. DROP TABLE
8. DROP DATABASE
Kemudian selain hal tersebut terdapat beberapa relations yang bisa kita buat menggunakan MySQL:
1. One to One : Satu baris dalam tabel dapat memiliki satu baris dalam tabel relasinya dengan kondisi tambahan foreign key merupakan primary key dari tabel relasinya.
2. One to Many : Satu baris dalam tabel dapat memiliki beberapa baris di tabel relasinya
3. Many to Many : Kedua tabel yang berelasi dapat memiliki beberapa baris di tabel relasinya

## Database Normalization
Database Normalization disini merupakan sebuah proses untuk mengubah sebuah database yang tidak terstruktur menjadi sebuah database yang terstruktur. Proses Database Normalization ini biasanya dilakukan untuk menghindari duplikasi data dan juga untuk menghindari data yang tidak terkait. Proses Database Normalization ini biasanya dilakukan dengan menggunakan 3 tahapan yaitu:
1. First Normal Form (1NF)
   Syarat terpenuhi ketika:
    - Semua kolom harus memiliki nilai tunggal
    - Semua kolom harus memiliki nama yang unik
    - Urutan penyimpanan data tidak menjadi masalah
2. Second Normal Form (2NF)
   Syarat terpenuhi ketika:
    - Tabel sudah dalam 1NF
    - Semua kolom harus tergantung pada primary key
    - Menghapus beberapa subset data yang ada pada tabel dan menempatkan mereka pada tabel terpisah.
3. Third Normal Form (3NF)
   Syarat terpenuhi ketika
    - Tabel sudah dalam 2NF
    - Tidak ada kolom yang tergantung pada kolom lain yang bukan primary key
namun terdapat beberapa bentuk dari Database Normalization selain yang 3 tahapan diatas yaitu:
1. Boyce-Codd Normal Form (BCNF)
2. Fourth Normal Form (4NF)
3. Fifth Normal Form (5NF)
4. Sixth Normal Form (6NF)

## Keys Dalam MySQL
Keys disini merupakan sebuah kolom yang digunakan untuk mengidentifikasi sebuah baris dalam sebuah tabel. Keys ini biasanya digunakan untuk melakukan manipulasi data dalam sebuah tabel. Keys ini biasanya terdiri dari 2 jenis yaitu:
1. Primary Key :
   Contoh penggunaan Primary Key:
    - Mengidentifikasi sebuah baris dalam sebuah tabel
    - Tidak boleh ada 2 baris yang memiliki Primary Key yang sama
    - Tidak boleh ada Primary Key yang bernilai NULL
    - Tidak boleh ada Primary Key yang berubah
    bentuk query yang digunakan:
    ```sql
    CREATE TABLE table_name (
        column_name1 data_type,
        column_name2 data_type,
        column_name3 data_type,
        PRIMARY KEY (column_name1)
    );
    ```
2. Foreign Key
    Contoh penggunaan Foreign Key:
      - Mengidentifikasi sebuah baris dalam sebuah tabel
      - Tidak boleh ada 2 baris yang memiliki Foreign Key yang sama
      - Tidak boleh ada Foreign Key yang bernilai NULL
      - Tidak boleh ada Foreign Key yang berubah
      bentuk query yang digunakan:
      ```sql
      CREATE TABLE table_name (
          column_name1 data_type,
          column_name2 data_type,
          column_name3 data_type,
          FOREIGN KEY (column_name1) REFERENCES table_name(column_name1)
      );
      ```
namun selain 2 jenis keys diatas terdapat juga beberapa jenis keys lainnya yaitu:
1. Super Key
2. Candidate Key
3. Alternate Key
4. Unique Key

## Join Dalam MySQL
Join disini merupakan sebuah proses untuk menggabungkan beberapa tabel yang berelasi. Join ini biasanya digunakan untuk mengambil data-data yang ada di beberapa tabel yang berelasi. Join ini biasanya terdiri dari 3 jenis yaitu:
1. Inner Join : Menggabungkan 2 tabel yang berelasi dengan syarat kolom yang digunakan untuk join harus memiliki nilai yang sama.
   Contoh penggunaan Inner Join:
    ```sql
    SELECT column_name(s)
    FROM table1
    INNER JOIN table2
    ON table1.column_name = table2.column_name;
    ```
2. Left Join : Menggabungkan 2 tabel yang berelasi dengan syarat kolom yang digunakan untuk join harus memiliki nilai yang sama dan juga mengambil semua data dari tabel kiri.
    Contoh penggunaan Left Join:
      ```sql
      SELECT column_name(s)
      FROM table1
      LEFT JOIN table2
      ON table1.column_name = table2.column_name;
      ```
3. Right Join : Menggabungkan 2 tabel yang berelasi dengan syarat kolom yang digunakan untuk join harus memiliki nilai yang sama dan juga mengambil semua data dari tabel kanan.
    Contoh penggunaan Right Join:
      ```sql
      SELECT column_name(s)
      FROM table1
      RIGHT JOIN table2
      ON table1.column_name = table2.column_name;
      ```
namun selain 3 jenis join diatas terdapat juga beberapa jenis join lainnya yaitu:
1. Full Join : Menggabungkan 2 tabel yang berelasi dengan syarat kolom yang digunakan untuk join harus memiliki nilai yang sama dan juga mengambil semua data dari tabel kiri dan juga tabel kanan.
2. Cross Join : Menggabungkan 2 tabel yang berelasi dengan syarat kolom yang digunakan untuk join tidak harus memiliki nilai yang sama.
3. Self Join : Menggabungkan 1 tabel dengan dirinya sendiri.

## Aggregate Function Dalam MySQL
Aggregate Function disini merupakan sebuah fungsi yang digunakan untuk mengambil data-data dari sebuah tabel dan mengembalikan sebuah nilai. Aggregate Function ini biasanya digunakan untuk melakukan manipulasi data dalam sebuah tabel. Aggregate Function ini biasanya terdiri dari 5 jenis yaitu:
1. COUNT() : Mengembalikan jumlah baris yang ada dalam sebuah tabel.
   Contoh penggunaan COUNT():
    ```sql
    SELECT COUNT(column_name)
    FROM table_name;
    ```
2. SUM() : Mengembalikan jumlah dari semua nilai dalam sebuah kolom.
    Contoh penggunaan SUM():
      ```sql
      SELECT SUM(column_name)
      FROM table_name;
      ```
3. AVG() : Mengembalikan rata-rata dari semua nilai dalam sebuah kolom.
    Contoh penggunaan AVG():
      ```sql
      SELECT AVG(column_name)
      FROM table_name;
      ```
4. MIN() : Mengembalikan nilai terkecil dari semua nilai dalam sebuah kolom.
    Contoh penggunaan MIN():
      ```sql
      SELECT MIN(column_name)
      FROM table_name;
      ```
5. MAX() : Mengembalikan nilai terbesar dari semua nilai dalam sebuah kolom.
    Contoh penggunaan MAX():
      ```sql
      SELECT MAX(column_name)
      FROM table_name;
      ```
namun selain 5 jenis aggregate function diatas terdapat juga beberapa jenis aggregate function lainnya yaitu:
1. COUNT(DISTINCT) : Mengembalikan jumlah baris yang berbeda dalam sebuah tabel.
   Contoh penggunaan COUNT(DISTINCT):
    ```sql
    SELECT COUNT(DISTINCT column_name)
    FROM table_name;
    ```
2. GROUP BY : Mengelompokkan baris yang memiliki nilai yang sama dalam sebuah kolom.
    Contoh penggunaan GROUP BY:
      ```sql
      SELECT column_name, COUNT(*)
      FROM table_name
      GROUP BY column_name;
      ```
3. HAVING : Mengembalikan baris yang memiliki nilai yang sama dalam sebuah kolom.
    Contoh penggunaan HAVING:
      ```sql
      SELECT column_name, COUNT(*)
      FROM table_name
      GROUP BY column_name
      HAVING COUNT(*) > 1;
      ```
4. ORDER BY : Mengurutkan hasil dari sebuah query.
    Contoh penggunaan ORDER BY:
      ```sql
      SELECT column_name, COUNT(*)
      FROM table_name
      GROUP BY column_name
      HAVING COUNT(*) > 1
      ORDER BY column_name;
      ```
5. UNION : Menggabungkan hasil dari 2 query.
    Contoh penggunaan UNION:
      ```sql
      SELECT column_name(s) FROM table1
      UNION
      SELECT column_name(s) FROM table2;
      ```
6. UNION ALL : Menggabungkan hasil dari 2 query tanpa menghilangkan duplikat.
    Contoh penggunaan UNION ALL:
      ```sql
      SELECT column_name(s) FROM table1
      UNION ALL
      SELECT column_name(s) FROM table2;
      ```

## Relational Database menggunakan MySQL
Relational Database disini merupakan sebuah database yang menyimpan data dalam bentuk tabel. 
disini kita akan melakukan percobaan pembuatan relational database:
studi kasus yang kita gunakan adalah sebuah database yang menyimpan data-data dari sebuah toko buku.
1. Membuat database dengan nama toko_buku.
    ```sql
    CREATE DATABASE toko_buku;
    ```
2. Memilih database yang akan digunakan.
    ```sql
    USE toko_buku;
    ```
3. Membuat tabel buku dengan kolom id_buku, judul, pengarang, penerbit, tahun_terbit, harga, dan stok.
    ```sql
    CREATE TABLE buku (
      id_buku INT NOT NULL AUTO_INCREMENT,
      judul VARCHAR(50) NOT NULL,
      pengarang VARCHAR(50) NOT NULL,
      penerbit VARCHAR(50) NOT NULL,
      tahun_terbit INT NOT NULL,
      harga INT NOT NULL,
      stok INT NOT NULL,
      PRIMARY KEY (id_buku)
    );
    ```
4. Membuat tabel pelanggan dengan kolom id_pelanggan, nama, alamat, no_telp, dan email.
    ```sql
    CREATE TABLE pelanggan (
      id_pelanggan INT NOT NULL AUTO_INCREMENT,
      nama VARCHAR(50) NOT NULL,
      alamat VARCHAR(50) NOT NULL,
      no_telp VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      PRIMARY KEY (id_pelanggan)
    );
    ```
5. Membuat tabel transaksi dengan kolom id_transaksi, id_buku, id_pelanggan, jumlah, dan total_harga.
    ```sql
    CREATE TABLE transaksi (
      id_transaksi INT NOT NULL AUTO_INCREMENT,
      id_buku INT NOT NULL,
      id_pelanggan INT NOT NULL,
      jumlah INT NOT NULL,
      total_harga INT NOT NULL,
      PRIMARY KEY (id_transaksi),
      FOREIGN KEY (id_buku) REFERENCES buku(id_buku),
      FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan)
    );
    ```
6. Menambahkan data ke tabel buku.
    ```sql
    INSERT INTO buku (judul, pengarang, penerbit, tahun_terbit, harga, stok)
    VALUES ('Pemrograman Web', 'Aaliyah Khalif
    Handoyo', 'Andi Offset', 2019, 50000, 10);
    ```
7. Menambahkan data ke tabel pelanggan.
    ```sql
    INSERT INTO pelanggan (nama, alamat, no_telp, email)
    VALUES ('Aaliyah Khalif Handoyo', 'Jl. Kebon Jeruk Raya No. 1', '081234567890', 'khalif.julie@gmail.com');
    ```
8. Menambahkan data ke tabel transaksi.
    ```sql
    INSERT INTO transaksi (id_buku, id_pelanggan, jumlah, total_harga)
    VALUES (1, 1, 2, 100000);
    ```
9. Menambahkan relasi one-to-many antara tabel buku dan tabel transaksi.
    ```sql
    ALTER TABLE transaksi
    ADD CONSTRAINT fk_buku
    FOREIGN KEY (id_buku) REFERENCES buku(id_buku);
    ```
    diatas kita telah menambahkan relasi one-to-many antara tabel buku dan tabel transaksi dengan menggunakan foreign key.
10. Menambahkan relasi one-to-many antara tabel pelanggan dan tabel transaksi.
    ```sql
    ALTER TABLE transaksi
    ADD CONSTRAINT fk_pelanggan
    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan);
    ```
    diatas kita telah menambahkan relasi one-to-many antara tabel pelanggan dan tabel transaksi dengan menggunakan foreign key.
    
# Authentikasi dan Authorisasi
## Apa itu Authentikasi dan Authorisasi?
Authentikasi dan Authorisasi merupakan sebuah proses untuk mengotentikasi pengguna yang akan mengakses sebuah sistem.

## Apa perbedaan Authentikasi dan Authorisasi?
Authentikasi merupakan sebuah proses untuk mengotentikasi pengguna yang akan mengakses sebuah sistem, sedangkan Authorisasi merupakan sebuah proses untuk menentukan hak akses dari pengguna yang akan mengakses sebuah sistem.

## Apa kegunaan Authentikasi dan Authorisasi?
Authentikasi dan Authorisasi digunakan untuk mengamankan sebuah sistem agar tidak mudah diakses oleh orang yang tidak berhak.

## Variasi Authentikasi dan Authorisasi in Express
Authentikasi dapat dilakukan beberapa cara yaitu :
1. Basic Authentikasi : Authentikasi dengan menggunakan username dan password.
   contoh penggunaan basic authentikasi:
   ```javascript
    app.get('/login', (req, res) => {
      const { username, password } = req.query;
      if (username === 'admin' && password === 'admin') {
        res.send('Login Berhasil');
      } else {
        res.send('Login Gagal');
      }
    });
    ```
    pada contoh diatas kita akan melakukan authentikasi dengan menggunakan username dan password.
2. Token Authentikasi : Authentikasi dengan menggunakan token.
    contoh penggunaan token authentikasi:
    ```javascript
      app.get('/login', (req, res) => {
        const { username, password } = req.query;
        if (username === 'admin' && password === 'admin') {
          const token = jwt.sign({ username, password }, 'secret');
          res.send(token);
        } else {
          res.send('Login Gagal');
        }
      });
      ```
      pada contoh diatas kita akan melakukan authentikasi dengan menggunakan token.
3. OAuth : Authentikasi dengan menggunakan akun sosial media.
4. JWT : Authentikasi dengan menggunakan JSON Web Token.
5. Session : Authentikasi dengan menggunakan session.
namun dalam penjelasan yang lebih simpel terdapat dua yaitu :
1. Single Factor Authentikasi : Authentikasi dengan menggunakan satu faktor.
2. Multi Factor Authentikasi : Authentikasi dengan menggunakan dua faktor.

Authorisasi dapat dilakukan beberapa cara yaitu :
1. Role Based Access Control (RBAC) : Authorisasi dengan menggunakan role.
2. Permission Based Access Control (PBAC) : Authorisasi dengan menggunakan permission.

## Enkripsi dan Hashing
### Apa itu Enkripsi dan Hashing?
Enkripsi dan Hashing merupakan sebuah proses untuk mengubah data menjadi bentuk yang tidak dapat dibaca.

### Apa kegunaan Enkripsi dan Hashing?
Enkripsi dan Hashing digunakan untuk mengamankan sebuah sistem agar tidak mudah diakses oleh orang yang tidak berhak.

### Enkripsi dan Hashing in Express
Enkripsi dan Hashing dapat dilakukan beberapa cara yaitu :
1. Enkripsi : Enkripsi dengan menggunakan algoritma AES.
   Contoh penggunaannya itu adalah pada saat kita ingin menyimpan password pengguna.
   bentuk penggunaannya dapat seperti berikut :
    ```javascript
    const crypto = require('crypto');
    const password = 'password';
    const algorithm = 'aes-256-cbc';
    const key = crypto.scryptSync(password, 'salt', 32);
    const iv = Buffer.alloc(16, 0);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
    ```
2. Hashing : Hashing dengan menggunakan algoritma SHA-256.
    Contoh penggunaannya itu adalah pada saat kita ingin menyimpan password pengguna.
    bentuk penggunaannya dapat seperti berikut :
      ```javascript
      const crypto = require('crypto');
      const password = 'password';
      const algorithm = 'sha256';
      const hash = crypto.createHash(algorithm);
      hash.update(password);
      const hashedPassword = hash.digest('hex');
      console.log(hashedPassword);
      ```

# Sequelize
## Apa itu Sequelize?
Sequelize merupakan sebuah ORM (Object Relational Mapping) yang digunakan untuk menghubungkan database dengan aplikasi.

## Instalasi Sequelize
1. Install sequelize dan mysql2
    ```bash
    npm install sequelize mysql2
    ```
2. Install sequelize-cli
    ```bash
    npm install sequelize-cli
    ```
3. Inisialisasi sequelize
    ```bash
    npx sequelize init
    ```
    setelah itu akan terbentuk folder config, models, migrations, dan seeders.
4. Buat file .sequelizerc
    ```javascript
    const path = require('path');
    module.exports = {
      'config': path.resolve('config', 'config.json'),
      'models-path': path.resolve('models'),
      'seeders-path': path.resolve('seeders'),
      'migrations-path': path.resolve('migrations')
    }
    ```
5. Buat file config.json
    ```javascript
    {
      "development": {
        "username": "root",
        "password": null,
        "database": "database_development",
        "host": localhost"
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": localhost"
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": localhost"
        "dialect": "mysql"
      }
    }
    ```
6. Buat database
    ```bash
    npx sequelize db:create
    ```
7. Buat model
    ```bash
    npx sequelize model:generate --name User --attributes username:string,password:string
    ```
    setelah itu akan terbentuk file user.js di folder models dan file 20201202123456-create-user.js di folder migrations.
8. Migrate database
    ```bash
    npx sequelize db:migrate
    ```
9. Buat seed
    ```bash
    npx sequelize seed:generate --name demo-user
    ```
    setelah itu akan terbentuk file 20201202123456-demo-user.js di folder seeders.
10. Seed database
    ```bash
    npx sequelize db:seed:all
    ```

### Membuat CRUD dengan Sequelize
1. Membuat data
    ```javascript
    const { User } = require('../models');
    const createUser = async (req, res) => {
      const { username, password } = req.body;
      const user = await User.create({ username, password });
      res.send(user);
    }
    ```
2. Membaca data
    ```javascript
    const { User } = require('../models');
    const getUsers = async (req, res) => {
      const users = await User.findAll();
      res.send(users);
    }
    ```
3. Mengubah data
    ```javascript
    const { User } = require('../models');
    const updateUser = async (req, res) => {
      const { id } = req.params;
      const { username, password } = req.body;
      const user = await User.update({ username, password }, { where: { id } });
      res.send(user);
    }
    ```
4. Menghapus data
    ```javascript
    const { User } = require('../models');
    const deleteUser = async (req, res) => {
      const { id } = req.params;
      const user = await User.destroy({ where: { id } });
      res.send(user);
    }
    ```
5. Membaca data berdasarkan id
    ```javascript
    const { User } = require('../models');
    const getUser = async (req, res) => {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });
      res.send(user);
    }
    ```
   











