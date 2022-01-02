import Image from 'next/image';
import classes from "./Card.module.css";
import ProfilePic from "../public/images/profile.png"

export default function Card(props) {
    return (
        <div className={classes.card} >
            <Image layout="responsive" src={ProfilePic} alt="image" priority/>
            <h1>{props.info.first_name}</h1>
            <p className={classes.title}>{props.info.last_name}</p>
        </div >
    );
}
