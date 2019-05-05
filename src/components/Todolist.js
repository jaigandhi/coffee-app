import React from 'react';
class Todolist extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        input:'',
        items:[]
      }

      this.state1 = {
        input:'',
        items:[]
      }

      this.state2 = {
        input:'',
        items:[]
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.addItem = this.addItem.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleKeyPress1 = this.handleKeyPress1.bind(this);
      this.handleKeyPress2 = this.handleKeyPress2.bind(this);
    }
    handleChange(e){
        this.setState({
          input:e.target.value
        });
       
    }
    handleChange1(e){
      this.setState({
        input:e.target.value1
      });
     
  }
  handleChange2(e){
    this.setState({
      input:e.target.value2
    });
   
}
    addItem(){
      if(this.state.input.trim() !== ""){
        this.setState( (prevState) => ({
          input:'',
          items:prevState.items.concat(this.state.input)
        })
        )
      }else{
        alert("new item can't be empty")
      }
    }
      
    handleKeyPress(e){
      if (e.key === 'Enter') this.addItem();
    }
    handleKeyPress1(e){
      if (e.key === 'Enter') this.addItem();
    }
    handleKeyPress2(e){
      if (e.key === 'Enter') this.addItem();
    }

    render(){
      return(
       

        <div className="container">
         <center><h3>Coffee Tasting Note</h3></center>
          <h5>Add a New tasting Notes</h5>
          <DateToday />
          
          <div className="inputItems">
           <p><input  onChange={this.handleChange} 
                    onKeyPress = {this.handleKeyPress} 
                    value={this.state.input} 
                    placeholder="Coffee Origin"
              /></p>
             <p><input  onChange={this.handleChange1} 
                    onKeyPress = {this.handleKeyPress1} 
                    value={this.state.input1} 
                    placeholder="Roaster"
              /></p>
               <p><input  onChange={this.handleChange2} 
                    onKeyPress = {this.handleKeyPress2} 
                    value={this.state.input2} 
                    placeholder="Notes"
              /></p>
               
            <button onClick={this.addItem}>add item</button>
          </div>
          <ToDoItems items={this.state.items} />
        </div>
       
      )
    }
  }

  class ToDoItems extends React.Component{
    render(){
      return(
        <ol>
         {this.props.items.map( (item,i) => <li className="items" key = {i}>{item}</li>)}
        </ol>
      )
    }
  }

  const DateToday = function(){
    
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //january is 0
    let yyyy = today.getFullYear();

    if(dd<10) dd = '0' + dd;
    if(mm<10) mm = '0' + mm;

    today = dd + '-' + mm + '-' + yyyy;
    today = <div className="dateStyle">{today}</div>
    return today; 
  }

  export default Todolist;