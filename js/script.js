new Vue({
	el: '.root',
	data: {
        newTodo: '',
		arrTodo: [
		'Imparare Html',
        'Imparare Css',
        'Imparare Javascript'
                
			
		],
	},
	methods: {
        addTodo() {
            this.newTodo.trim()
            this.arrTodo.push(this.newTodo);
            this.newTodo = '';
        },
        deleteTodo(index) {
            this.arrTodo.splice(index, 1)
        },
	}
});

