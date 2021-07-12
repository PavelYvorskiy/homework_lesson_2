import React from 'react';
import styles from './App.module.scss'
import { Clock } from './Clock';

export class AppComponent extends React.Component{
    render(){
        return(
            <div className = {styles.appComponent}>
            <Clock />
            </div>
        )
    }
}