import { useState } from 'react';
import '../App.css';

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "What do you call fake spaghetti? An impasta.",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "I would tell you a construction joke, but I'm still working on it.",
    "Why don't some couples go to the gym? Because some relationships don't work out."
];

const funnyPictutes = [
    "https://img.freepik.com/free-vector/hand-drawn-trendy-cartoon-pattern_23-2149095049.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=ais_user",
    "https://img.freepik.com/free-vector/hand-drawn-abstract-element-pattern_23-2148943895.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Lafp9KPlTxet8Q3q7E9EG6s1dQvuSIGDOg&s",
    "https://img.freepik.com/premium-vector/colorful-retro-cartoon-doodle-seamless-pattern-illustration-funny-psychedelic-drawing-wallpaper_526236-993.jpg",
    "https://previews.123rf.com/images/ovocheva/ovocheva1405/ovocheva140500076/28599729-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5-%D0%B2-%D1%86%D0%B2%D0%B5%D1%82%D1%8B-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%83%D0%B7%D0%BE%D1%80-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D1%85-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B9-%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B3%D1%83%D1%82-%D0%B1%D1%8B%D1%82%D1%8C.jpg",
    "https://img.freepik.com/premium-vector/googly-eyes-plastic-toys-seamless-pattern-background-funny-cartoon-eye-emotion-texture-sketch_503113-561.jpg"
];

function RandomJokes(){
    const [picture, setPicture] = useState(Math.random() * 6);
    const [joke, setJoke] = useState(Math.random() * 10);

    setInterval(() =>{
        setPicture(Math.random() * 6);
        setJoke(Math.random() * 10);
    }, 5000);

    return (
        <div
            style = {{
                backgroundImage: `url(${funnyPictutes[Math.floor(picture)]})`
            }}
            className = {
                `w-full
                font-black
                h-96
                items-center 
                flex 
                justify-center
                bg-auto 
                bg-repeat 
                bg-center`
            } 
        >
            <h1
                className='text-5xl text-center'
            >
                {jokes[Math.floor(joke)]}
            </h1>
        </div>
    )
}

export default RandomJokes;