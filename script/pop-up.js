// let body = document.body;
let popUp = document.createElement('div');
// const buttonClose = document.querySelector('.pop-up__close-button');
popUp.className = 'pop-up';
popUp.setAttribute('Onclick', 'popUpOff()');

function popUpOff () {
    body.removeChild(popUp);
    body.classList.remove('_active');
}

// buttonClose.addEventListener('click', () => {
//         body.removeChild(popUp);
//         body.classList.remove('_active');
// });

function katrine() {
    popUp.innerHTML = `
<div class="container" onclick="event.stopPropagation()">
    <div class="pop-up__close">
        <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
    </div>
    <div class="pop-up__container">
        <img src="images/pets-katrine.png" alt="pet" class="pop-up__container-image">
        <div class="pop-up__container-content">
            <div class="pop-up__container-content-title">Katrine</div>
            <div class="pop-up__container-content-subtitle">Cat - British Shorthair</div>
            <div class="pop-up__container-content-text">
                Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. 
                Will love you until the last breath she takes as long as you are the one. She is picky 
                about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.
            </div>
            <div class="pop-up__container-content-list">
                <div class="pop-up__container-content-list-item">
                    <div class="dot"></div>
                    <span>Age:</span> 2 months
                </div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
            </div>
        </div>
    </div>
</div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}

function jennifer() {
    popUp.innerHTML = `
    <div class="container" onclick="event.stopPropagation()">
        <div class="pop-up__close">
            <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
        </div>
        <div class="pop-up__container">
            <img src="images/pets-jennifer.png" alt="pet" class="pop-up__container-image">
            <div class="pop-up__container-content">
                <div class="pop-up__container-content-title">Jennifer</div>
                <div class="pop-up__container-content-subtitle">Dog - Labrador</div>
                <div class="pop-up__container-content-text">
                    Jennifer is a sweet 2 months old Labrador that is patiently waiting 
                    to find a new forever home. This girl really enjoys being able to go 
                    outside to run and play, but won't hesitate to play up a storm in 
                    the house if she has all of her favorite toys.
                </div>
                <div class="pop-up__container-content-list">
                    <div class="pop-up__container-content-list-item">
                        <div class="dot"></div>
                        <span>Age:</span> 2 months
                    </div>
                    <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                    <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                    <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
                </div>
            </div>
        </div>
    </div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}

function  woody() {
    popUp.innerHTML = `
<div class="container" onclick="event.stopPropagation()">
    <div class="pop-up__close">
        <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
    </div>
    <div class="pop-up__container">
        <img src="images/pets-woody.png" alt="pet" class="pop-up__container-image">
        <div class="pop-up__container-content">
            <div class="pop-up__container-content-title">Woody</div>
            <div class="pop-up__container-content-subtitle">Dog - Golden Retriever</div>
            <div class="pop-up__container-content-text">
                Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. 
                Since he is on the stronger side, he will learn a lot from your training. Woody will be 
                happier when he finds a new family that can spend a lot of time with him.
            </div>
            <div class="pop-up__container-content-list">
                <div class="pop-up__container-content-list-item">
                    <div class="dot"></div>
                    <span>Age:</span> 2 months
                </div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
            </div>
        </div>
    </div>
</div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}

function sophia() {
    popUp.innerHTML = `
<div class="container" onclick="event.stopPropagation()">
    <div class="pop-up__close">
        <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
    </div>
    <div class="pop-up__container">
        <img src="images/pets-sophia.png" alt="pet" class="pop-up__container-image">
        <div class="pop-up__container-content">
            <div class="pop-up__container-content-title">Sophia</div>
            <div class="pop-up__container-content-subtitle">Dog - Shih tzu</div>
            <div class="pop-up__container-content-text">
                Sophia here and I'm looking for my forever home to live out the best years of my life. 
                I am full of energy. Everyday I'm learning new things, like how to walk on a leash, 
                go potty outside, bark and play with toys and I still need some practice.
            </div>
            <div class="pop-up__container-content-list">
                <div class="pop-up__container-content-list-item">
                    <div class="dot"></div>
                    <span>Age:</span> 2 months
                </div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
            </div>
        </div>
    </div>
</div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}

function timmy() {
    popUp.innerHTML = `
<div class="container" onclick="event.stopPropagation()">
    <div class="pop-up__close">
        <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
    </div>
    <div class="pop-up__container">
        <img src="images/pets-timmy.png" alt="pet" class="pop-up__container-image">
        <div class="pop-up__container-content">
            <div class="pop-up__container-content-title">Timmy</div>
            <div class="pop-up__container-content-subtitle">Cat - British Shorthair</div>
            <div class="pop-up__container-content-text">
                Timmy is an adorable grey british shorthair male. He loves to play and snuggle. 
                He is neutered and up to date on age appropriate vaccinations. He can be chatty 
                and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.
            </div>
            <div class="pop-up__container-content-list">
                <div class="pop-up__container-content-list-item">
                    <div class="dot"></div>
                    <span>Age:</span> 2 months
                </div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
            </div>
        </div>
    </div>
</div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}

function charly() {
    popUp.innerHTML = `
<div class="container" onclick="event.stopPropagation()">
    <div class="pop-up__close">
        <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
    </div>
    <div class="pop-up__container">
        <img src="images/pets-charly.png" alt="pet" class="pop-up__container-image">
        <div class="pop-up__container-content">
            <div class="pop-up__container-content-title">Charly</div>
            <div class="pop-up__container-content-subtitle">Dog - Jack Russell Terrier </div>
            <div class="pop-up__container-content-text">
                This cute boy, Charly, is three years old and he likes adults and kids. He isn\’t 
                fond of many other dogs, so he might do best in a single dog home. Charly has lots of 
                energy, and loves to run and play. We think a fenced yard would make him very happy.
            </div>
            <div class="pop-up__container-content-list">
                <div class="pop-up__container-content-list-item">
                    <div class="dot"></div>
                    <span>Age:</span> 2 months
                </div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
            </div>
        </div>
    </div>
</div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}

function scarlett() {
    popUp.innerHTML = `
<div class="container" onclick="event.stopPropagation()">
    <div class="pop-up__close">
        <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
    </div>
    <div class="pop-up__container">
        <img src="images/pets-scarlett.png" alt="pet" class="pop-up__container-image">
        <div class="pop-up__container-content">
            <div class="pop-up__container-content-title">Scarlett</div>
            <div class="pop-up__container-content-subtitle">Dog - Jack Russell Terrier</div>
            <div class="pop-up__container-content-text">
                Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond 
                quickly and will make a loyal companion and a wonderful family dog or a good companion 
                for a single individual too since she likes to hang out and be with her human.
            </div>
            <div class="pop-up__container-content-list">
                <div class="pop-up__container-content-list-item">
                    <div class="dot"></div>
                    <span>Age:</span> 2 months
                </div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
            </div>
        </div>
    </div>
</div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}

function freddi() {
    popUp.innerHTML = `
    <div class="container" onclick="event.stopPropagation()">
    <div class="pop-up__close">
        <button class="pop-up__close-button" onclick="popUpOff()">&#10006;</button>
    </div>
    <div class="pop-up__container">
        <img src="images/pets-freddi.png" alt="pet" class="pop-up__container-image">
        <div class="pop-up__container-content">
            <div class="pop-up__container-content-title">Freddie</div>
            <div class="pop-up__container-content-subtitle">Cat - British Shorthair</div>
            <div class="pop-up__container-content-text">
                Freddie is a little shy at first, but very sweet when he warms up. He likes playing 
                with shoe strings and bottle caps. He is quick to learn the rhythms of his human\’s daily 
                life. Freddie has bounced around a lot in his life, and is looking to find his forever home.
            </div>
            <div class="pop-up__container-content-list">
                <div class="pop-up__container-content-list-item">
                    <div class="dot"></div>
                    <span>Age:</span> 2 months
                </div>
                    <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Inoculations:</span> none</div>
                    <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Diseases:</span> none</div>
                    <div class="pop-up__container-content-list-item"><div class="dot"></div><span>Parasites:</span> none</div>
                </div>
            </div>
        </div>
    </div>
    `;
    body.prepend(popUp);
    body.classList.toggle('_active');
}


    // <div class="pop-up">
    //     <div class="pop-up__container">
    //         <img src="images/pets" alt="pet" class="pop-up__container-image">
    //         <div class="pop-up__container-content">
    //             <div class="pop-up__container-content-title"></div>
    //             <div class="pop-up__container-content-subtitle"></div>
    //             <div class="pop-up__container-content-text"></div>
    //             <ul class="pop-up__container-content-list">
    //                 <li class="pop-up__container-content-list-item"></li>
    //                 <li class="pop-up__container-content-list-item"></li>
    //                 <li class="pop-up__container-content-list-item"></li>
    //                 <li class="pop-up__container-content-list-item"></li>
    //             </ul>
    //         </div>
    //     </div>
    // </div>