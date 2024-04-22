import inquirer from 'inquirer';

let todos: string[] = ['tayyab']

async function createTodo(todos: string[]) {
    do{

    let result = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'select',
                message: 'Please select an operation:',
                choices: ['Add', 'update', 'view', 'remove']
            }
        ]
    );

    if(result.select == 'Add') {
        let addTodo = await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'todo',
                    message: 'What would you like to add more in todo:'
                }
            ]
        );
        todos.push(addTodo.todo)
        todos.forEach(todo => console.log(todo))
        //console.log(todos);
        
    
    }
    if(result.select == 'update') {
        let updateTodo = await inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'todo',
                    message: 'update the items in the list:',
                    choices: todos.map(value => value)

                }
            ]
        );

        let addTodo = await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'todo',
                    message: 'What would you like to add more in list:'
                }
            ]
        );
    
        let newUpdate = todos.filter(val => val !== updateTodo.todo)
        todos = [...newUpdate, addTodo.todo]
        todos.forEach(todo => console.log(todo));
        //console.log(todos);
    }
    if(result.select == 'view') {
        console.log("*** TO DO ***");
    
        console.log(todos);
    
        console.log("*******");
        
        
    }
    if(result.select == 'remove'){
        let removeTodo = await inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'todo',
                    message: 'What would you want to delete in list:',
                    choices: todos.map(items => items)
                }
            ]
        )
        let newTodo = todos.filter(val => val !== removeTodo.todo)
        todos = [...newTodo]
        todos.forEach(todo => console.log(todo))
        //console.log(todos);
        
    }

} while(true);

}

createTodo(todos);