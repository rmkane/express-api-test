const path = require('path');
const TaskController = require('../controller/task');

class TaskRoutes {
  constructor() {
    this.taskController = new TaskController();
  }

  register(app, baseServerUrl) {
    this.registerRestRoutes(app);
    this.registerWebRoutes(app, baseServerUrl);
  }

  registerRestRoutes(app) {
    app.route('/v1/tasks')
        .get((req, res) => this.taskController.listAllTasks(req, res))
        .post((req, res) => this.taskController.createTask(req, res));

    app.route('/v1/tasks/completed')
        .get((req, res) => this.taskController.listCompletedTasks(req, res));

    app.route('/v1/task/:taskId')
        .get((req, res) => this.taskController.retrieveTask(req, res))
        .put((req, res) => this.taskController.updateTask(req, res))
        .delete((req, res) => this.taskController.deleteTask(req, res));
  }

  registerWebRoutes(app, baseServerUrl) {
    app.get('/tasks', function(req, res) {
      res.sendFile(path.join(baseServerUrl + '/public/pages/tasks.html'));
    });

    app.get('/task/:taskId', function(req, res) {
      res.sendFile(path.join(baseServerUrl + '/public/pages/task.html'));
    });
  }
}

module.exports = TaskRoutes;

