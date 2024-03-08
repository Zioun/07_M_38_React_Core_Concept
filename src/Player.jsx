import './Style.css';

export default function Player({player}){
    return(
        <div className='player'>
            <h2>Name : {player.name}</h2>
            <h3>Age : {player.age}</h3>
        </div>
    )
}