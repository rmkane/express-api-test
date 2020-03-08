class TaskService {
  constructor() {
    this.sql = require('./db-connect.js');
  }

  createTask(newTask, result) {
    this.sql.query("INSERT INTO tasks SET ?", newTask, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  }

  getTaskById(taskId, result) {
    this.sql.query("SELECT * FROM tasks WHERE id = ? ", taskId, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.pop() || null);
      }
    });
  }

  getAllTasks(result) {
    this.sql.query("SELECT * FROM tasks", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log('tasks : ', res);
        result(null, res);
      }
    });
  }

  getCompletedTasks(result) {
    this.sql.query("SELECT * FROM tasks WHERE `status` = 1", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log('tasks : ', res);
        result(null, res);
      }
    });
  }

  updateById(id, task, result) {
    this.sql.query("UPDATE tasks SET name = ? WHERE id = ?", [task.task, id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  remove(id, result) {
    this.sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = TaskService;