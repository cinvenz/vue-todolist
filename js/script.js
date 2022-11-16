const app = new Vue({
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
            this.arrTodo.push({
				text: this.newTodo,
				done: true,
			})
            this.newTodo = '';
        },
        deleteTodo(index) {
            this.arrTodo.splice(index, 1)
        },
		changeDone (i) {
			this.arrTodo[i].done = !this.arrTodo[i].done;
		},
	}
});

