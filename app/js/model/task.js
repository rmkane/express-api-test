import TaskController from "../controller/task";

class Task {
  constructor(config) {
    this.name = config.name;
    this.status = config.status;
    this.created_at = config.created_at || new Date();
  }
}

export default Task;