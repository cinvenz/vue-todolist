new Vue({
	el: '.root',
	data: {
        newTodo: '',
		arrTodo: [
			{
                text: 'Imparare Html',
              
			},
			{
				text: 'Imparare Css',
                
			},
			{
				text: 'Imparare Javascript',
                
			},
		],
	},
	methods: {
        addToto() {
            this.newTodo.trim()
            this.arrTodo.push(this.newTodo);
            this.newTodo= '';
        },
        deleteTodo(i) {
            this.arrTodo.splice(index, 1)
        }
	}
});

