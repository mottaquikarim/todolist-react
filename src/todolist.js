const validateProp = (prop, propName, propType) => {
    if (typeof prop !== propType) {
        throw new Error(`${propName} must be type: ${propType}`)
    }
}

const validateArray = (arr, arrName) => {
    if (!Array.isArray(arr)) {
        throw new Error(`${arrName} must be an array!`)
    }
}

const validateDate = (dueDate) => {
    validateProp(dueDate, 'dueDate', 'number')

    if (dueDate <= Date.now()) {
        throw new Error('dueDate cannot be in the past')
    }
}

const validateKeys = (object) => {
    const validKeys = {
        'name': true,
        'isCompleted': true,
        'dueDate': true,
    }

    for (let key of Object.keys(object)) {
        // expet: name, isCompleted, dueDate
        if (validKeys[key]) {
            continue; // valid
        }

        throw new Error(`key ${key} is not supported!`)
    }

}

const addTodo = (todos, name, isCompleted, dueDate) => {

    validateArray(todos)
    validateProp(name, 'name', 'string')
    validateProp(isCompleted, 'isCompleted', 'boolean')
    validateDate(dueDate)

    return todos.concat([{
        name,
        isCompleted,
        dueDate,
    }]);
}

const removeTodo = (todos, index) => {
    validateArray(todos)
    return todos.slice(0, index).concat(todos.slice(index+1));
}

const updateTodo = (todos, index, updatesObj) => {
    validateKeys(updatesObj);

    // grab the todo we need to change
    const todoUpdate = todos[index];

    // update it
    const updatedTodo = Object.assign({}, todoUpdate, updatesObj);

    return todos.slice(0, index) // get the first half
        .concat([updatedTodo]) // add the NEW todo
        .concat(todos.slice(index+1)); // add the rest
}

export {
    addTodo,
    removeTodo,
    updateTodo,
}













