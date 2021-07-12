import React from 'react'
import { FormatDate } from './FormatDate'

export class Clock extends React.Component{
  
    render(){
        const outputFormats = [
             { year: 'numeric', month: 'long', day: 'numeric' },
             { hour: 'numeric' , minute: 'numeric' , second: 'numeric'},
             { hour: 'numeric' , minute: 'numeric'},
             { year: 'numeric', month: 'numeric', day: 'numeric'}
            ]
        
        return(
               <FormatDate outputFormats = {outputFormats}/>
        )
    }
}