class Game {
    constructor() {
        this.el = {
            main: document.querySelector('.main'),
            form: document.querySelector('.menu__form'),
            card: document.querySelectorAll('.item'),
            bug: document.querySelectorAll('.item__face_back')
        };

        this.isTurn = false;

        this.el.form.addEventListener('submit', event => {
            const checked = this.el.form.querySelector('input[name="level"]:checked');

            this.el.main.dataset.screen = checked.value;

            this.el.form.reset();

            event.preventDefault();
            this.bug();
        });

        this.el.card.forEach(item => {
            item.addEventListener('click', () => {
                if (this.isTurn) {
                    this.el.main.dataset.screen = 'menu';
                    this.isTurn.classList.remove('active');
                    this.isTurn = false;
                    this.bugCard.classList.remove('bug');
                } else {
                    item.classList.add('active');
                    this.isTurn = item;
                }
            })
        });


    }
     bug() {
         function random(min, max){
             return Math.floor(Math.random() * (max - min + 1)) + min;

         }
        let number;
        if(this.el.main.dataset.screen === 'simple') {
            number = Math.floor(Math.random() * 3);
            this.bugCard = this.el.bug[number];
            this.el.bug[number].classList.add('bug');
        }else if(this.el.main.dataset.screen === 'medium'){
            number = random(3, 9);
            this.el.bug[number].classList.add('bug');
        }else if(this.el.main.dataset.screen === 'complicated'){
            number = random(9, 19);
            this.el.bug[number].classList.add('bug');
        }
    };
}

new Game();





