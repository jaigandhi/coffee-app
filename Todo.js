import React, { Component } from 'react';

class Todo extends Component {
    state = {
    edit: false,
    id: null,
    mockData: [
    {id:'1',CoffeeOrigin:'abc',Roaster:'uk',Note:'good',done:false,date:new Date()}]
  }

onSubmitHandle(event) {
  event.preventDefault();

  this.setState({
    mockData: [...this.state.mockData, {
        id: event.target.Sno.value,
        CoffeeOrigin: event.target.CoffeeOrigin.value,
        Roaster:event.target.Roaster.value,
        Note:event.target.Note.value,
        done: false,
        date: new Date()
    }]
  });

  event.target.CoffeeOrigin.value = '';
  event.target.Sno.value = '';
  event.target.Roaster.value = '';
  event.target.Note.value = '';
}
onDeleteHandle() {
  let id = arguments[0];

  this.setState({
    mockData: this.state.mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
      return null;
    })
  });
}

renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle.bind(this)}>
         <input type="text" name="updatedItem" defaultValue={this.state.id}  className="item" />
        <input type="text" name="updatedItem1" defaultValue={this.state.title}  className="item" />
         <input type="text" name="updatedItem2" defaultValue={this.state.Roaster} className="item" />
          <input type="text" name="updatedItem3"  defaultValue={this.state.Note} className="item" />
       
        <button className="update-add-item">Update</button>
      </form>
    }
  }
onEditHandle(event) {
  this.setState({
    edit: true,
    id: arguments[0],
    CoffeeOrigin: arguments[1],
    Roaster:arguments[2],
    Note:arguments[3]
  });
}

onUpdateHandle(event) {
  event.preventDefault();

  this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item['CoffeeOrigin'] = event.target.updatedItem1.value;
           item['Roaster'] = event.target.updatedItem2.value;
            item['Note'] = event.target.updatedItem3.value;
          return item;
        }

        return item;
      })
   });

   this.setState({
      edit: false
   });
}
onCompleteHandle() {
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item['done'] = true;
          return item;
        }

      return item;
    })
  });
}
     render() {
  return (
    <div>
    {this.renderEditForm()}
      <form onSubmit={this.onSubmitHandle.bind(this)}>
    <center> <h1>Coffee Tasting Note</h1></center>
      <center> <input type="text" name="Sno" placeholder="Sno" className="item" />
        <input type="text" name="CoffeeOrigin" placeholder="CoffeeOrigin" className="item" />
         <input type="text" name="Roaster" placeholder="Roaster" className="item" />
          <input type="text" name="Note" placeholder="Note" className="item" /></center>
        <center><button className="btn-add-item">Add </button></center>
      </form>
     
      <center><h2>Add a New Tasting Note</h2></center>
      <table border="1" cellpadding="0" cellspacing="0" align="center">
       <tr><th>Sno</th><th>CoffeeOrigin</th><th>Roaster</th><th>Note</th></tr>
        {this.state.mockData.map(item => (
          

          <tr key={item.id}>
          <td> {item.id} </td>
           <td> {item.CoffeeOrigin} </td>
           <td> {item.Roaster} </td>
           <td> {item.Note} </td>
            <td><button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button></td>
            <td> <button onClick={this.onEditHandle.bind(this, item.id, item.CoffeeOrigin,item.Roaster,item.Note)}>Edit</button></td>
            <td><button className={ item.done ? 'done' : 'hidden' } onClick={this.onCompleteHandle}>Complete</button></td>
            
            </tr>  
            
         
          
        ))}
      </table>
    </div>
  );
}
  }

export default Todo;