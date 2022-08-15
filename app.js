

const App = {
    data() {
        return {
            placeholderCustom: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: 'рыба'
        }
    }
}

Vue.createApp(App).mount('#app')