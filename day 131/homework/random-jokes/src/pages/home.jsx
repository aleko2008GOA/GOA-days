import { Link } from "react-router-dom"

export function Home(){
    return (
        <div
            className = {
                `w-full
                font-black
                h-96
                items-center 
                flex 
                justify-center
                text-4xl
                text-center
                bg-slate-300
                text-white`
            } 
        >
            Hello! Welcome to random jokes generator, to see a joke click here: 
            <button className = 'text-sky-400 p-2'><Link to={'/joke'} > Joke</Link></button>
        </div>
    )
}