alert("JavaScript কাজ করছে!");
```javascript
// ================================
// 🎂 মৌমিতার Birthday Website
// ================================

const DRIVE_VIDEO_ID =
    "1c4y-jZe_V0VNQ4Es21mCz-o9e13K3OST";


// সব Screen
const screens = document.querySelectorAll(".screen");


// Screen পরিবর্তন
function showScreen(id) {

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(id);

    if (nextScreen) {
        nextScreen.classList.add("active");
        window.scrollTo(0, 0);
    }
}


// ছোট্ট Sound
function playSound(type) {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) return;

        const audio = new AudioContext();

        const oscillator = audio.createOscillator();
        const gain = audio.createGain();

        oscillator.connect(gain);
        gain.connect(audio.destination);


        if (type === "success") {

            oscillator.frequency.value = 700;

        } else if (type === "wrong") {

            oscillator.frequency.value = 180;

        } else {

            oscillator.frequency.value = 450;

        }


        oscillator.type = "sine";

        gain.gain.setValueAtTime(
            0.12,
            audio.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audio.currentTime + 0.2
        );


        oscillator.start();

        oscillator.stop(
            audio.currentTime + 0.2
        );

    } catch (error) {

        console.log(error);

    }
}



// =================================
// ❤️ শুরু
// =================================

function startGame() {

    playSound("click");

    showScreen("level1");

}



// =================================
// ❤️ Mission 1
// =================================

function heartFound() {

    playSound("success");

    createConfetti();


    alert(
        "ইয়েসসস! ❤️ তুমি বিশেষ হার্টটা খুঁজে পেয়েছো!"
    );


    setTimeout(function() {

        showScreen("level2");

    }, 500);

}



// =================================
// 🧠 Mission 2
// =================================

function showMemoryQuestion() {

    playSound("click");


    const emoji =
        document.getElementById("memoryEmoji");

    const text =
        document.getElementById("memoryText");

    const button =
        document.getElementById("memoryButton");

    const question =
        document.getElementById("memoryQuestion");


    if (emoji) {

        emoji.style.display = "none";

    }


    if (text) {

        text.innerText =
            "এবার বলো তো... কোন ইমোজিটা ছিল না? 🤔";

    }


    if (button) {

        button.style.display = "none";

    }


    if (question) {

        question.classList.remove("hidden");

    }

}



// Memory Answer
function memoryAnswer(answer) {


    if (answer === "🎈") {

        playSound("success");

        createConfetti();


        alert(
            "একদম ঠিক! 😎🧠 তোমার স্মৃতি কিন্তু বেশ ভালো!"
        );


        setTimeout(function() {

            showScreen("level3");

        }, 500);


    } else {

        playSound("wrong");


        alert(
            "উফফ! 😜 ভুল হয়েছে! আবার চেষ্টা করো।"
        );

    }

}



// =================================
// 😂 Mission 3
// =================================

function funnyAnswer() {

    playSound("success");


    alert(
        "হাহাহা! 😂 আমরা দুজনেই জানি আসল উত্তরটা কী!"
    );


    setTimeout(function() {

        showScreen("level4");

    }, 500);

}



// =================================
// 💖 শেষ প্রশ্ন
// =================================

function finalAnswer() {

    playSound("success");

    createConfetti();

    showScreen("secret");

}



// =================================
// 🔐 Secret Code
// =================================

function checkCode() {


    const input =
        document.getElementById("secretInput");

    const message =
        document.getElementById("codeMessage");


    if (!input || !message) return;


    const code =
        input.value.trim().toUpperCase();


    if (code === "MOUMITA") {


        playSound("success");

        createConfetti();


        message.innerText =
            "🔓 সঠিক Code! Surprise খুলে গেছে! ❤️";


        setTimeout(function() {

            showScreen("gift");

        }, 1200);


    } else {


        playSound("wrong");


        message.innerText =
            "❌ Code ভুল! Hint: Birthday Girl-এর নাম 😜";

    }

}



// =================================
// 🎁 Gift Box
// =================================

function openGift() {


    playSound("success");

    createConfetti();


    const gift =
        document.getElementById("giftBox");


    if (gift) {

        gift.style.animation = "none";

        gift.style.transform =
            "scale(1.25) rotate(5deg)";

    }


    setTimeout(function() {


        showScreen("videoScreen");


        const videoFrame =
            document.getElementById("driveVideo");


        if (videoFrame) {

            videoFrame.src =
                "https://drive.google.com/file/d/" +
                DRIVE_VIDEO_ID +
                "/preview";

        }


    }, 1000);

}



// =================================
// 🎉 Confetti
// =================================

function createConfetti() {


    const emojis = [

        "🎉",
        "🎊",
        "❤️",
        "💕",
        "✨",
        "🌸",
        "🎂",
        "💖"

    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {


        const confetti =
            document.createElement("div");


        confetti.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-40px";

        confetti.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";

        confetti.style.zIndex =
            "99999";

        confetti.style.pointerEvents =
            "none";

        confetti.style.transition =
            "transform 3s linear, opacity 3s";


        document.body.appendChild(
            confetti
        );


        setTimeout(function() {


            confetti.style.transform =
                "translateY(" +
                (window.innerHeight + 150) +
                "px) rotate(" +
                Math.random() * 720 +
                "deg)";


            confetti.style.opacity =
                "0";


        }, 50);


        setTimeout(function() {

            confetti.remove();

        }, 3200);

    }

}



// =================================
// ⌨️ Enter চাপলে Code Check
// =================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const input =
            document.getElementById(
                "secretInput"
            );


        if (input) {


            input.addEventListener(
                "keydown",
                function(event) {


                    if (
                        event.key === "Enter"
                    ) {

                        checkCode();

                    }

                }
            );

        }

    }
);
```
