const TaskManager = require('./TaskManager');

describe('TaskManager', () => {
    let taskManager;

    // Этот блок выполняется перед каждым тестом и создает новый экземпляр TaskManager
    beforeEach(() => {
        taskManager = new TaskManager();
    });

    // Тест на добавление задачи
    test('should add a task', () => {
        const task = taskManager.addTask('Test task');
        // Проверяем, что добавленная задача имеет правильные значения
        expect(task).toEqual({ id: 1, title: 'Test task', completed: false });
        // Проверяем, что в списке задач теперь одна задача
        expect(taskManager.getTasks()).toHaveLength(1);
    });

    // Тест на удаление задачи
    test('should delete a task', () => {
        taskManager.addTask('Test task'); // Сначала добавляем задачу
        taskManager.deleteTask(1); // Удаляем задачу с ID 1
        // Проверяем, что в списке задач больше нет задач
        expect(taskManager.getTasks()).toHaveLength(0);
    });

    // Тест на редактирование задачи
    test('should edit a task', () => {
        taskManager.addTask('Test task'); // Добавляем задачу
        taskManager.editTask(1, 'Updated task'); // Редактируем задачу с ID 1
        // Проверяем, что заголовок задачи обновился
        expect(taskManager.getTasks()[0].title).toBe('Updated task');
    });

    // Тест на завершение задачи
    test('should mark a task as completed', () => {
        taskManager.addTask('Test task'); // Добавляем задачу
        taskManager.completeTask(1); // Завершаем задачу с ID 1
        // Проверяем, что задача помечена как завершенная
        expect(taskManager.getTasks()[0].completed).toBe(true);
    });

    // Тест на попытку завершить несуществующую задачу
    test('should not complete a non-existing task', () => {
        taskManager.addTask('Test task'); // Добавляем задачу
        taskManager.completeTask(99); // Пытаемся завершить задачу с несуществующим ID
        // Проверяем, что задача по-прежнему не завершена
        expect(taskManager.getTasks()[0].completed).toBe(false);
    });

    // Тест на получение всех задач
    test('should return all tasks', () => {
        taskManager.addTask('Task 1'); // Добавляем первую задачу
        taskManager.addTask('Task 2'); // Добавляем вторую задачу
        const tasks = taskManager.getTasks(); // Получаем все задачи
        // Проверяем, что количество задач равно 2
        expect(tasks).toHaveLength(2);
        // Проверяем, что заголовки задач соответствуют ожидаемым значениям
        expect(tasks[0].title).toBe('Task 1');
        expect(tasks[1].title).toBe('Task 2');
    });
});
