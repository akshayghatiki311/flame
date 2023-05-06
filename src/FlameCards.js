import React,{useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './FlameCards.css'; 
import axios from './axios';

function FlameCards() {
    const [people, setpeople] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/flame/cards');
            setpeople(req.data);
        }

        fetchData();
    },[]);

    const swiped = (direction,nameToDelete)=>{
        console.log("removing:"+nameToDelete);
    };
    const outOfFrame = (name)=>{
        console.log(name + "left the screen!");
    };
    return (
        <div className="flameCards">
            <div className="flameCards__cardContainer">
                {people.map((person)=>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

            
        </div>
    )
}

export default FlameCards
