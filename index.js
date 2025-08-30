const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require("uuid");
const merge = require('./testpdf');
const uniqueId = uuidv4();


// ✅ Configure storage to save with uniqueId + original filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, uniqueId + '_' + file.originalname);
    // var my_path = uniqueId + '_' + file.originalname;
  }
});

const upload = multer({ storage: storage });


app.get('/', async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'templates', 'index.html'));
});

app.post('/upload', upload.array('pdfs'), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  const uniqueId = uuidv4();
  const my_path = req.files[0].filename;  
  // console.log(my_path);
  console.log(req.body);
    await merge(uniqueId,my_path);


  // res.json({ message: message });

    // res.sendFile(path.join(__dirname, 'resultFiles', `${uniqueId}.txt`));
    res.download(path.join(__dirname, 'resultFiles', `${uniqueId}.txt`));



});
app.get('/*splat',(req,res)=>{
    res.sendFile(path.join(__dirname, 'templates', '404.html'));
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
