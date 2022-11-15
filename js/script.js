new Vue({
	el: '#root',
	data: {
        newTodo: '',
		arrTodo: [
			{
                text: 'Imparare Html',
                done: true,
              
			},
			{
				text: 'Imparare Css',
                done: false,
                
			},
			{
				text: 'Imparare Javascript',
                done: true,
                
			},
		],
	},
	methods: {
        addTodo() {
            this.newTodo.trim();
            this.arrTodo.push(this.newTodo);
            this.newTodo = '';
        },
        deleteTodo(index) {
            this.arrTodo.splice(index, 1)
        },
	}
});

