import { Card } from "./Home/Banner";
import React, { useState, useEffect } from "react";
import { strict } from "assert";

interface ICard {
    userId: number;
    id:number;
    title:string;
    body:string
  }

export const Home =()=> {
    const [cards, setCards] =useState<ICard[]>([]);

    useEffect(()=>{
        if(cards.length < 1)
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setCards(json))
    }, []
    )

    return(
        <div style={{display: 'flex', flexWrap:"wrap", justifyContent:"center"}}>
        {
            cards.map((card:ICard)=>(<Card title={card.title} body={card.body}/> ))
        }
        </div>
    );
}