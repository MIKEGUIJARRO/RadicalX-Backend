const app = require('./app.js');
const dotenv = require('dotenv');
const path = require('path')
const morgan = require('morgan')

dotenv.config({ path: path.join(__dirname, '/config', '/config.env') })

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});