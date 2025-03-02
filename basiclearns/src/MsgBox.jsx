export default function MsgBox({userName ,textColor}){
    let stytes = {color : textColor};
    return (

        <h1 style={stytes}>Hello,{userName}</h1>
    );
}