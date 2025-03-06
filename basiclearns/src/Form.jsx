function handleForm(event){
    event.preventDefault();
    console.log("form was submitted");
    
}
export default function Form(){
    return(
        <form  onSubmit={handleForm} >
            <input type="text" placeholder="write something" />
            <button  >Submit</button>
        </form>
    )

}