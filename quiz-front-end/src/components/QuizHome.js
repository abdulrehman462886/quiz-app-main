
export default function QuizHome(props) {
  return (
    <>
    <div className="card my-5 container" style={{backgroundColor:'#F0F8FF' , fontFamily:"Arial"}}>
    <div className="card-body">
    <div  className="container">
    <div className="d-flex justify-content-center">
    <button type="button" className="btn btn-primary my-3"  onClick={() => {props.startQuiz()}} hidden={props.boolean}>Start Quiz</button>
    </div>
    {props.inputarr.map((value, index) => {
             if(value.a.length === 0){
              return (
              <div key={index + 1}><br></br>
              <h3><strong>{index + 1}: </strong>
                <strong>{value.statement}</strong></h3>
                <h5><input type="radio" id="text"  name="textTrue" value="True" onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textTrue">True</label><br></br>
                <input type="radio" id="text" name="textFalse" value="False" onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textFalse">False</label><br></br></h5>
                <button type="button"  className="btn btn-primary my-5" onClick={() => {props.savehandle(value.e,index)}} disabled={props.bol1}>Save</button>
              </div>
            );}
            else if(value.a.length !== 0){
            return (
              <div key={index + 1}><br></br>
              <h3><strong>{index + 1}: </strong>
                <strong>{value.statement}</strong></h3>
                <h5><strong>A</strong> <input type="radio" id="textA"  name="text" value={value.a} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textA">{value.a}</label><br></br>
                <strong>B</strong> <input type="radio" id="textB" name="text" value={value.b} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textB">{value.b}</label><br></br>
                <strong>C</strong> <input type="radio" id="textC" name="text" value={value.c} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textC">{value.c}</label><br></br>
                <strong>D</strong> <input type="radio" id="textD" name="text" value={value.d} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textD">{value.d}</label><br></br></h5>
                <button  type="button" className="btn btn-primary my-5" onClick={() => {props.savehandle(value.e,index)}} disabled={props.bol1}>Save</button>
              </div>
            )}
    })[props.qindex]}
    {/* {props.inputarr.map((value, index) => {
              return (
                <div key={index + 1}><br></br>
                <h3><strong>{index + 1}: </strong>
                  <strong>{value.statement}</strong></h3>
                  <h5><strong>A</strong> <label htmlFor="textA">{value.a}</label><br></br>
                  <strong>B</strong> <label htmlFor="textB">{value.b}</label><br></br>
                  <strong>C</strong> <label htmlFor="textC">{value.c}</label><br></br>
                  <strong>D</strong> <label htmlFor="textD">{value.d}</label><br></br></h5>
                </div>
            )
    })[props.wrongindex]} */}
          <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary my-3" onClick={() => {props.result(props.count)}} hidden={props.scorebutton}>Show Score</button>
          </div>    
          <h1 style={{fontFamily:'fantasy' ,textAlign: 'center'}} hidden={props.scorebutton}>{props.score}/{props.inputarr.length}</h1>
    </div>
    <div hidden={props.showwrong}>
    {props.inputarr.map((value, index) => {
             if(value.a.length === 0){
              return (
              <div key={index + 1}><br></br>
              <h3><strong>{index + 1}: </strong>
                <strong>{value.statement}</strong></h3>
                <h5> <label htmlFor="textTrue">True</label><br></br>
                <label htmlFor="textFalse">False</label><br></br>
                <strong> <span>&#8594;</span> Correct: </strong> <label style={{color:"green" , fontFamily:"fantasy"}}>{value.e}</label></h5>
                
              </div>
            );}
            else if(value.a.length !== 0){
            return (
              <div key={index + 1}><br></br>
              <h3><strong>{index + 1}: </strong>
                <strong>{value.statement}</strong></h3>
                <h5><strong>A</strong> <label htmlFor="textA">{value.a}</label><br></br>
                <strong>B</strong> <label htmlFor="textB">{value.b}</label><br></br>
                <strong>C</strong> <label htmlFor="textC">{value.c}</label><br></br>
                <strong>D</strong> <label htmlFor="textD">{value.d}</label><br></br>
                <strong> <span>&#8594;</span> Correct: </strong> <label style={{color:"green" , fontFamily:"fantasy"}}>{value.e}</label> </h5>
              </div>
            )}
    })} 
    </div>
    </div>
    </div>
    </>
  )
}
