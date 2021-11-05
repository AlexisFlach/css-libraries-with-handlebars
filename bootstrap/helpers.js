function findProject(project) {
    for (let i = 0; i < project.length; i++) {
        if (project[i] === false) {
            return null
        }
        else  if (project[i]) {
            console.log(project[i])
            return project[i];
        }
    }
}

module.exports = findProject;