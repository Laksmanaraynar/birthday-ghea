/* =========================================
   ELEMENT
========================================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const decorations =
    document.getElementById("decorations");


/* =========================================
   SCREEN NAVIGATION
========================================= */

function goTo(id) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.classList.add("hidden");

    });


    const target =
        document.getElementById(id);


    target.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    target.style.animation = "none";


    void target.offsetWidth;


    target.style.animation =
        "screenIn .8s ease";


    // Scroll ke atas
    setTimeout(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 50);
}


/* =========================================
   OPEN GIFT
========================================= */

function openGift() {

    goTo("surprise");


    musicBtn.style.display =
        "block";


    music.play()
        .then(() => {

            musicBtn.innerHTML =
                "🎵";

        })
        .catch(() => {

            musicBtn.innerHTML =
                "🔇";

        });


    createBigConfetti();

    createPartyHearts();

}


/* =========================================
   MUSIC
========================================= */

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML =
            "🎵";

    } else {

        music.pause();

        musicBtn.innerHTML =
            "🔇";

    }

}


/* =========================================
   BLOW CANDLE
========================================= */

function blowCandle() {

    const candle =
        document.getElementById(
            "wishCandle"
        );


    const message =
        document.getElementById(
            "wishMessage"
        );


    const screen =
        document.getElementById(
            "candle"
        );


    /* Lilin padam */

    candle.innerHTML =
        "💨";


    candle.style.transform =
        "scale(1.3) rotate(10deg)";


    /* Pesan */

    message.innerHTML = `

        <div class="celebration-text">

            YAYYYY!! 🎉

            <br>

            <span>
                HAPPY BIRTHDAY GHEA!!
            </span>

            💗

        </div>

    `;


    /* Party */

    screen.classList.add(
        "party-mode"
    );


    /* Efek */

    createBigConfetti();

    createPartyHearts();

    createPartySparkles();

    createPartyEmojis();


    /* Musik */

    if (!music.paused) {

        music.volume = 1;

    }


    /* Lanjut */

    setTimeout(() => {

        screen.classList.remove(
            "party-mode"
        );


        goTo("letter");

    }, 4500);

}


/* =========================================
   SECOND SURPRISE
========================================= */

function showSecondSurprise() {

    createBigConfetti();

    createPartyHearts();

    goTo("second");

}


/* =========================================
   BIG CONFETTI
========================================= */

function createBigConfetti() {

    const emojis = [

        "🎉",
        "🎊",
        "💗",
        "💙",
        "💛",
        "✨",
        "⭐",
        "🌸",
        "🎀",
        "🥳"

    ];


    for (
        let i = 0;
        i < 90;
        i++
    ) {

        const item =
            document.createElement("div");


        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            Math.random() * 100
            + "vw";


        item.style.top =
            "-50px";


        item.style.fontSize =
            (
                Math.random()
                * 20 + 15
            )
            + "px";


        item.style.zIndex =
            "99999";


        item.style.pointerEvents =
            "none";


        item.style.transition =
            `
            transform
            4s
            cubic-bezier(.2,.8,.3,1),

            opacity
            4s
            `;


        document.body.appendChild(
            item
        );


        setTimeout(() => {

            item.style.transform = `

                translateY(115vh)

                translateX(
                    ${
                        Math.random()
                        * 300 - 150
                    }px
                )

                rotate(
                    ${
                        Math.random()
                        * 1080
                    }deg
                )

                scale(
                    ${
                        Math.random()
                        * .7 + .8
                    }
                )

            `;


            item.style.opacity =
                "0";


        }, 50);


        setTimeout(() => {

            item.remove();

        }, 4500);

    }

}


/* =========================================
   PARTY HEARTS
========================================= */

function createPartyHearts() {

    const hearts = [

        "💗",
        "💕",
        "💖",
        "💙",
        "💛",
        "💞"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random()
                    * hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100
            + "vw";


        heart.style.bottom =
            "-40px";


        heart.style.fontSize =
            (
                Math.random()
                * 25 + 18
            )
            + "px";


        heart.style.zIndex =
            "99998";


        heart.style.pointerEvents =
            "none";


        heart.style.transition =
            `
            transform
            5s
            ease-out,

            opacity
            5s
            `;


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.style.transform = `

                translateY(-115vh)

                translateX(
                    ${
                        Math.random()
                        * 250 - 125
                    }px
                )

                rotate(
                    ${
                        Math.random()
                        * 360
                    }deg
                )

                scale(1.2)

            `;


            heart.style.opacity =
                "0";


        }, 100);


        setTimeout(() => {

            heart.remove();

        }, 5200);

    }

}


/* =========================================
   PARTY SPARKLES
========================================= */

function createPartySparkles() {

    const sparkles = [

        "✨",
        "⭐",
        "✦",
        "✧"

    ];


    for (
        let i = 0;
        i < 50;
        i++
    ) {

        const sparkle =
            document.createElement("div");


        sparkle.innerHTML =
            sparkles[
                Math.floor(
                    Math.random()
                    * sparkles.length
                )
            ];


        sparkle.style.position =
            "fixed";


        sparkle.style.left =
            "50vw";


        sparkle.style.top =
            "45vh";


        sparkle.style.fontSize =
            (
                Math.random()
                * 20 + 12
            )
            + "px";


        sparkle.style.zIndex =
            "99997";


        sparkle.style.pointerEvents =
            "none";


        sparkle.style.transition =
            `
            transform
            2s
            ease-out,

            opacity
            2s
            `;


        document.body.appendChild(
            sparkle
        );


        setTimeout(() => {

            sparkle.style.transform = `

                translate(

                    ${
                        Math.random()
                        * 400 - 200
                    }px,

                    ${
                        Math.random()
                        * 500 - 250
                    }px

                )

                scale(1.5)

                rotate(
                    ${
                        Math.random()
                        * 720
                    }deg
                )

            `;


            sparkle.style.opacity =
                "0";


        }, 50);


        setTimeout(() => {

            sparkle.remove();

        }, 2200);

    }

}


/* =========================================
   PARTY EMOJIS
========================================= */

function createPartyEmojis() {

    const emojis = [

        "🥳",
        "🎉",
        "🎊",
        "🎂",
        "🎈"

    ];


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const emoji =
            document.createElement("div");


        emoji.innerHTML =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        emoji.style.position =
            "fixed";


        emoji.style.left =
            Math.random() * 100
            + "vw";


        emoji.style.top =
            Math.random() * 70
            + "vh";


        emoji.style.fontSize =
            (
                Math.random()
                * 25 + 25
            )
            + "px";


        emoji.style.zIndex =
            "99996";


        emoji.style.pointerEvents =
            "none";


        emoji.style.animation =
            "emojiShake .7s infinite";


        document.body.appendChild(
            emoji
        );


        setTimeout(() => {

            emoji.remove();

        }, 3500);

    }

}


/* =========================================
   CONTINUOUS FLOATING EMOJIS
========================================= */

const floatingEmojis = [

    "💗",
    "💕",
    "💙",
    "💛",
    "✨",
    "🌸",
    "⭐",
    "🎀"

];


function createContinuousFloat() {

    const item =
        document.createElement("div");


    item.className =
        "continuous-decoration";


    item.innerHTML =
        floatingEmojis[
            Math.floor(
                Math.random()
                * floatingEmojis.length
            )
        ];


    item.style.left =
        Math.random() * 100
        + "vw";


    item.style.fontSize =
        (
            Math.random()
            * 13 + 13
        )
        + "px";


    item.style.animationDuration =
        (
            Math.random()
            * 4 + 6
        )
        + "s";


    decorations.appendChild(
        item
    );


    setTimeout(() => {

        item.remove();

    }, 11000);

}


setInterval(
    createContinuousFloat,
    900
);


/* =========================================
   CONTINUOUS SPARKLES
========================================= */

const sparkleEmojis = [

    "✦",
    "✧",
    "✨",
    "⭐"

];


function createContinuousSparkle() {

    const sparkle =
        document.createElement("div");


    sparkle.className =
        "continuous-sparkle";


    sparkle.innerHTML =
        sparkleEmojis[
            Math.floor(
                Math.random()
                * sparkleEmojis.length
            )
        ];


    sparkle.style.left =
        Math.random() * 100
        + "vw";


    sparkle.style.top =
        Math.random() * 100
        + "vh";


    sparkle.style.animationDuration =
        (
            Math.random()
            * 2 + 1.5
        )
        + "s";


    decorations.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 4000);

}


setInterval(
    createContinuousSparkle,
    1200
);