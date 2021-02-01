# [alodokter](https://alodokter.com) api

Unofficial API and Web Scraping from alodokter.com

## pre-request

#### 1. [Node.js](https://nodejs.org/) has installed on your machine
#### 2. [NPM](https://npmjs.com/) has installed on your machine

## Installation

Use the package manager [npm](https://npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

```bash
npm start
```

server will running on port 3000

## Routing
#### 1. GET localhost:3000/trending/page/:count
Get list of trending articles
```url
GET localhost:3000/trending/page/1
```
#### 2. GET localhost:3000/content/:app_url
Get article content
```url
GET localhost:3000/content/6-manfaat-olahraga-trx-bagi-tubuh
```
#### 3. GET localhost:3000/penyakit
Get list of penyakit information from A-Z
```url
GET localhost:3000/penyakit
```
#### 4. GET localhost:3000/obat
Get list of obat information from A-Z
```url
GET localhost:3000/obat
```
#### 5. GET localhost:3000/hidup-sehat/page/:count
Get list of articles from [Hidup Sehat]() tag
```url
GET localhost:3000/hidup-sehat/page/1
```
#### 6. GET localhost:3000/keluarga/page/:count
Get list of articles from [Keluarga]() tag
```url
GET localhost:3000/keluarga/page/1
```
#### 7. GET localhost:3000/kesehatan/page/:count
Get list of articles from [Kesehatan]() tag
```url
GET localhost:3000/kesehatan/page/1
```
#### 8. GET localhost:3000/search
Get data from searching
```url
GET localhost:3000/search?key=kanker
```

## Source
[alodokter.com](https://alodokter.com)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/) \
Any responsibility beyond the responsibility of the developer.
