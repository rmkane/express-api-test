import Task from '../model/task';
import TaskService from '../service/task';

class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }

  listAllTasks(req, res) {
    this.taskService.getAllTasks(function (err, task) {
      if (err) res.send(err);
      console.log('res', task);
      res.send(task);
    });
  };

  listCompletedTasks(req, res) {
    this.taskService.getCompletedTasks(function (err, task) {
      if (err) res.send(err);
      console.log('res', task);
      res.send(task);
    });
  }

  createTask(req, res) {
    let newTask = new Task(req.body);
    if (!newTask.name === undefined || !newTask.status === undefined) {
      res.status(400).send({error: true, message: 'Please provide task name/status'});
    } else {
      this.taskService.createTask(newTask, function (err, task) {
        if (err) res.send(err);
        res.json(task);
      });
    }
  };

  retrieveTask(req, res) {
    this.taskService.getTaskById(req.params.taskId, function (err, task) {
      if (err) res.send(err);
      res.json(task);
    });
  };

  updateTask(req, res) {
    this.taskService.updateById(req.params.taskId, new Task(req.body), function (err, task) {
      if (err) res.send(err);
      res.json(task);
    });
  };

  deleteTask(req, res) {
    this.taskService.remove(req.params.taskId, function (err, task) {
      if (err) res.send(err);
      res.json({message: 'Task successfully deleted'});
    });
  };
}

export default TaskController;