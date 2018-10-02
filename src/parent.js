import React from 'react';
import Child from './child'
class Parent extends React.Component{

    constructor(props){
    super(props);
    this.state = {
      operator: '+',
      num1: '',
      num2: '',
      result:''
    };
    this.actionHandler = this.actionHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  componentWillUpdate(){
    console.log('will update');
  }
  componentDidUpdate(){
    console.log('did update');
  }
  
  handleChange = (e) => {
    this.setState({ operator: e.target.value })
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  }

  actionHandler = (e) => {
    e.preventDefault();
    const n1= this.state.num1;
    const n2= this.state.num2;
    const opr= this.state.operator;
    let x =  (`${n1} ${(opr)} ${n2}`);
    this.setState({ result: eval(x) })
}

  render() {
    return (
      <div>      
        <Child 
        handleInputChange={this.handleInputChange}
        handleChange={this.handleChange}
        operator={this.state.operator}
        ans={this.actionHandler}
        result={this.state.result} />
        
        </div>

    );
  }

}
export default  Parent;





