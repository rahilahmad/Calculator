import React, { Component } from 'react';
class Child extends Component{
  
    render(){
      return(
          <div>
               <div className="calculate">
        <form>

          <input type="text" onChange={this.props.handleInputChange} name="num1" placeholder="Enter 1st Number" />
          <br />
          <br />
          <label>
            <select value={this.props.operator} onChange={this.props.handleChange}>
              <option vaue="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>
          <br />
          <br />
          <input type="text" onChange={this.props.handleInputChange} name="num2" placeholder="Enter 2nd Number" />
          <br />
          <br />

          
          <input type="text" value={this.props.result} readOnly />
        </form>

      </div>
            <button onClick={this.props.ans} type="submit" > Answer </button>
          </div>
      );
    }    

}
export default  Child;