const fs = require('fs-extra')

fs.copySync('public', 'build', {
    deference: true,
    filter: file => file !== 'public/index.html'
})