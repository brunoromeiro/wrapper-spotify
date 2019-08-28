global.fetch = require('node-fetch')

import { searchAlbuns } from '../src/main';
// import global.fetch from 'node-fetch';


const albums = searchAlbuns('Incubus');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
