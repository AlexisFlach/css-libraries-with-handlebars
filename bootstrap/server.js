const express = require('express')
const app = express();
const PORT = 3000;

const fakeApi = require('./fakeApi');
const findProject = require('./helpers');

const handlebars = require('express-handlebars');

const hasProjects = true;

app.set('view engine', 'hbs')

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main', { layout: 'index' })
})

app.get('/about', (req, res) => {
    res.render('about', { layout: 'index' })
})

app.get('/projects', (req, res) => {
    res.render('projects', { layout: 'index', projects: fakeApi(), hasProjects: hasProjects })
})
app.get('/projects/:id', (req, res) => {
    
    const id = req.params.id;
    
    const projects = fakeApi();
  
    const project = projects.filter(e => e.id ==id);    
      
    res.render('project', { layout: 'index', project: project })
})

app.listen(PORT, () => {
    console.log(`Server listens on port: ${PORT}`);
})