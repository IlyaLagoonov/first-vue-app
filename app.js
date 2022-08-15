

const App = {
    data() {
        return {
            placeholderCustom: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: ' ',
            notes: ['Купить хлеб', 'Помыть посуду',]
        }
    },

    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },

        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = '';
            }
        },
        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        },
        removeNote(index, event) {
            this.notes.splice(index, 1)
        }
    }
}

Vue.createApp(App).mount('#app')