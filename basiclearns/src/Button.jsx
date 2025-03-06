function handleClick(event){
    console.log("hello !");
    console.log(event);
    
    
}
function handleMouse(){
    console.log("Bye !");
    g
}
function handleDouble(){
    console.log("you double click");
    
}
export default function Button(){
    return(
        <div>
        <button onClick={handleClick} > Click me!</button>
        <p onMouseOver={handleMouse} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quaerat rerum necessitatibus error facilis eligendi dolorem quod iure veritatis corrupti?</p>
        <button onDoubleClick={handleDouble} >double click me!</button>
        </div>
    )
}