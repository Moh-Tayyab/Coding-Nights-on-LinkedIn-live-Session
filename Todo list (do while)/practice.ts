import inquirer from 'inquirer';

let planList: string[] = ['zain', 'tayyab']

async function tasks(planList: string[]) {
    let works = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'select',
                message: 'please select an operation',
                choices: ['add', 'update', 'view', 'remove']
            }
        ]
    );
    if(works.select == 'add') {
        let addPlan = await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'task',
                    message: 'what would you like to add in list:'
                }
            ]
        );
        planList.push(addPlan.task)
        planList.forEach(plan => console.log(plan)
        )
    }
    if(works.select == 'update'){
        let updatePlan = await inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'task',
                    message: 'please update your plan in list:',
                    choices: planList.map(value => value)
                }
            ]
        )
        let addPlan = await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'task',
                    message: 'what would you like to add in list:'
                }
            ]
        );
        let updateNewPlan = planList.filter(val => val !== updatePlan)
        planList = [...updateNewPlan,addPlan.task]
        planList.forEach(task => console.log(task))
        //console.log(planList);
        
    }
        if(works.select == 'view') {
            console.log(planList);
            
        }

        if(works.select == 'remove') {
            let removePlan = await inquirer.prompt(
                [
                    {
                        type: 'list',
                        name: 'task',
                        message: 'what would you like to remove in list:',
                        choices: planList.map(val => val)
                    }
                ]
            )
            let newRemove = planList.filter(val => val !== removePlan.task)
            planList = [...newRemove]
            planList.forEach(task => console.log(task))
        }
    
}

tasks(planList)