import { type } from "os";
import React, {FunctionComponent} from "react";

const styles ={

    h1:{
        color: "blue",
        textAlign:"center",
        fontWeight:600
    }as React.CSSProperties,
    title:{
        color:"black",
        textAlign:"center",
        fontSize:16
    } as React.CSSProperties,
}

type CardProps = {
    title:string;
    body:string
}

export const Card:FunctionComponent<CardProps> = ({title, body})=> 
    <div style={{width: 200, margin: 30, border:'1px solid gold', padding: '10px', borderRadius:6}}>
        <h2 style={styles.h1}>{title}</h2>
        <p style={styles.title}>
            {body}
        </p>
    </div>