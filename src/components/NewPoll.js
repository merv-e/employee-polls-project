
const NewPoll = (props) => {

    const handleSubmit = (e) => {  
    e.preventDefault();
    //Todo : to be built.. 
    };

  return (
    <div className="poll">
        <h2 className="center">Would you rather</h2>
        <form className="poll" onSubmit={(e) => handleSubmit(e)}>
          <input placeholder="First Option"/>
          <input placeholder="Second Option"/>
          <button className="btn" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default NewPoll
