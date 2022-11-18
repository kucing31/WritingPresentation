## MongoDB
NoSQL dan SQL yaitu dua jenis database yang berbeda. NoSQL adalah database yang tidak menggunakan SQL, sedangkan SQL adalah database yang menggunakan SQL, MongoDB disini yaitu merupakan sebuah database NoSQL yang menggunakan JSON sebagai format data nya.

## CRUD menggunakan MongoDB
### Create Data
untuk membuat data User kita bisa menggunakan ini:
```js
db.user.insertOne({
  name: "Aal",
  password : 332aal
})
```
disini dia akan memasukkan data tersebut kedalam collection yang bernama user, dimana isinya itu adalah name dan juga password

### Read Data
Untuk memanggil data User kita bisa menggunakan ini:
```js
db.collection.find() {
  name: {$gt : "Aal"} <criteria>
}
```


### Update Data
Untuk mengubah data User kita bisa menggunakan ini:
```js
db.collection.updateOne() // untuk merubah satu data
db.collection.updateMany() // untuk merubah banyak data 
db.collection.replaceOne() // untuk menggantikan 1 data

db.user.updateOne({
  name: "Aal"
}, {
  $set: {
    name: "Kucing31"
  }
})
```
disini dia akan mengubah data yang bernama Aal menjadi Kucing31 namun hanya data itu saja yang dirubah dan tidak akan merubah data lainnya.
### Delete Data
Untuk menghapus data kita bisa menggunakan ini:
```js
db.collection.deleteOne() // untuk menghapus satu data
db.collection.deleteMany() // untuk menghapus banyak data

db.user.deleteOne({
  name: "Kucing31"
})
```
disini dia akan menghapus data yang bernama Kucing31.

## Mongoose
Mongoose adalah sebuah library yang digunakan untuk mempermudah dalam mengakses MongoDB. Mongoose menyediakan sebuah schema yang digunakan untuk mendefinisikan struktur dari sebuah collection. Mongoose juga menyediakan sebuah model yang digunakan untuk mengakses collection yang telah didefinisikan.

### Instalasi Mongoose
Untuk menggunakan Mongoose, pertama-tama kita harus menginstallnya terlebih dahulu. Untuk menginstall Mongoose, kita bisa menggunakan perintah berikut ini:
```bash
    npm install mongoose
```
### Membuat Koneksi ke MongoDB
Untuk membuat koneksi ke MongoDB, kita bisa menggunakan kode berikut ini:
```js
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
```
### Membuat Schema
Dalam percobaan ini kita akan mencoba untuk melakukan CRUD menggunakan User. 
Untuk membuat schema, kita bisa menggunakan kode berikut ini:
```js
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const userSchema = new Schema({
      name: String,
      password: String
    });
```

### Membuat Model
Untuk membuat model, kita bisa menggunakan kode berikut ini:
ini bisa kita simpan didalam model user
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  password: String
});
const User = mongoose.model('User', userSchema);
```

### Membuat Data
Untuk membuat data kita menggunakan POST.
file router bisa kita tambahkan ini
```js
router.post('/', addUser)
```
kemudian pada controller user bisa kita tambahkan ini
```js
module.exports.addUser = (req, res) => {
  const { name,password } = req.body
  try{
    const user = User.create({
      name,
      password
    })

    res.status(201).json({
      message: 'Pengguna berhasil dibuat',
    })
  } catch (err) {
    res.status(500).json({
      message: 'Pengguna gagal dibuat',
    })
  }
}
```
### Membaca Data
Untuk membaca data, kita bisa menggunakan GET.
file router bisa kita tambahkan dari sebelumnya
```js
router.post('/', addUser)
router.get('/', getAllUser)
```
kemudian pada controller user bisa kita tambahkan ini
```js
module.exports.getAllUser = (req, res) => {
  try{
    const user = User.find({})

    res.status(200).json({
      data: user
    })
  } catch (err) {
    res.status(500).json({
      message: 'Pengguna tidak bisa ditemukan'
    })
  }
}
```

### Mengupdate Data
Untuk mengupdate data kita bisa menggunakan PUT.
Lalu pada file router bisa kita tambahkan dari yang sebelumnya
```js
router.post('/', addUser)
router.get('/', getAllUser)
router.put('/:id' updateUserbyId)
```
lalu pada file controller bisa kita tambahkan ini
```js
try {
  const {id} = req.params
  const updated = req.body

  const result = await User.findByID
  result.save()
  res.json({
    message: "User sudah diperbarui"
    data : result.name
  })
} catch(err) {
  res.status(500).json({
      message: 'Kegagalan Server'
}
```

### Menghapus Data
Untuk menghapus data kita bisa menggunakan DELETE.
Lalu pada file router bisa kita tambahkan dari yang sebelumnya
```js
router.post('/', addUser)
router.get('/', getAllUser)
router.put('/:id' updateUserbyId)
router.delete('/:id' deleteUserbyId)
```
lalu pada file controller bisa kita tambahkan ini
```js
try {
  const {id} = req.params
  const result = await User.findByIdAndDelete(id)
  res.json({
    message: "User sudah dihapus"
    data : result.name
  })
} catch(err) {
  res.status(500).json({
      message: 'Kegagalan Server'
}
```

## Docker
Docker merupakan sebuah software yang menjalakan suatu aplikasi menggunakan sebuah Container.
Docker disini melakukan pembagian kernel dari Host OS, lalu memasukan aplikasi ke dalam Container. Docker juga memungkinkan kita untuk melakukan deploy aplikasi dengan mudah.

### Pengertian Container
Container adalah sebuah virtualisasi yang memungkinkan kita untuk menjalankan aplikasi tanpa harus menginstallnya secara langsung. Container juga memungkinkan kita untuk menjalankan aplikasi yang berbeda-beda dengan menggunakan satu kernel.

### Docker Fundamental
Docker memiliki beberapa fundamental yang harus kita ketahui, yaitu:
- Docker Image : Docker Image adalah sebuah file yang berisi semua yang dibutuhkan untuk menjalankan sebuah aplikasi. Docker Image ini bisa kita download dari Docker Hub.
- Docker Container : Docker Container adalah sebuah instance dari Docker Image.
- Docker Registry : Docker Registry adalah sebuah tempat untuk menyimpan Docker Image.
- Docker File : blueprint untuk membuat Docker Image

### Command dasar pada Docker
- docker pull : digunakan untuk mendownload Docker Image dari Docker Registry.
- docker run : digunakan untuk menjalankan Docker Container.
- docker ps : digunakan untuk melihat Docker Container yang sedang berjalan.
- docker stop : digunakan untuk menghentikan Docker Container.
- docker rm : digunakan untuk menghapus Docker Container.
- docker rmi : digunakan untuk menghapus Docker Image.
- docker images : digunakan untuk melihat Docker Image yang ada.
- docker build : digunakan untuk membuat Docker Image dari Docker File.
- docker push : digunakan untuk mengupload Docker Image ke Docker Registry.
