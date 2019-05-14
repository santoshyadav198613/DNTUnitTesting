import { TodoService } from './todo.service';

describe('TodoService', () => {
  let todoService: TodoService;
  beforeEach(() => todoService = new TodoService());

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('should add a task', () => {
    todoService.addTask('Task1');
    expect(todoService.tasks.length).toEqual(1);
  });

  it('should return all tasks', () => {
    todoService.addTask('Task1');
    todoService.addTask('Task2');
    expect(todoService.getTask().length).toEqual(2);
  });
});
