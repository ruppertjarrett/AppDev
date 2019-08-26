import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import Input from "../components/input.js";

const ToDo = ({todo, todos}) => {    
    return (        
    <View style={{width:300, height:100,backgroundColor:'#95c5f9', marginTop: 15, borderColor: "#fff", borderWidth: 2, borderStyle: "solid"}}>                    
            <Text style={{fontSize: 18, fontFamily: "Arial", fontStyle:"normal",color:"#fff",}}>Task: {todo}</Text> 
            <TouchableOpacity onPress={() => {
              console.log(todos);
              for(var i = 0; i < todos.length; i++){
                if(todos[i].todo === todo){
                  todos[i] = "";
                }
            }
            todos.push()
            console.log(todos);
            }}><Text style={{fontSize:14, fontFamily: "Arial",fontStyle:"italic", fontWeight:"200",color:"#fff",}}>REMOVE</Text></TouchableOpacity>           
    </View>    )}
    export default class Entry extends Component {  
        constructor(props) {    
            super(props); 
            let keys = AsyncStorage.getAllKeys()   
            this.state = {        
                todos: [
                  {todo: 'Homework'},
                  {todo: 'Take out Trash'},
                  {todo: 'I am just testing how long tasks would look sorry to bother you!'}
                ],
              };
            this.submit = this.submit.bind(this)
            }  
            submit() {
              AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (err, tasks) => {
                  tasks.map((result, i, task) => {
                    let value = task[i][1];
                    this.state.todos.push({todo: value});
                  });
                });
              });
            }
                render() {
                    let todo_holder = [];    
                    for(let i=0; i<this.state.todos.length; i++){
                        todo_holder.push(            
                        <ToDo key={i} todo={this.state.todos[i].todo} todos={this.state.todos}/>
                    ); }    
                    return (
                      <View>
                      <Input onPress={this.submit}></Input>
                      <ScrollView>
                          <Text style={{fontSize:32, fontFamily: "Arial",fontStyle:"italic", fontWeight:"bold",color:"#fff",}}>To Do List:</Text>
                            {todo_holder}
                      </ScrollView>    
                      </View>
                      );  
                    }
                }