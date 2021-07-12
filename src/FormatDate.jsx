import React from 'react'
import styles from './FormatDate.module.scss'

export class FormatDate extends React.Component {

    state = {
        currentDate: new Date(),
        activeIndex: 0,
        color: 'yellow'
    }

    renderFormatDate() {
        const currentOutputIdx = this.state.activeIndex
        const outputFormat = this.props.outputFormats[currentOutputIdx]
        return (
            this.state.currentDate.toLocaleString('en-US', outputFormat)
        )
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ currentDate: new Date() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    clickFormatDate() {
        const activeIndex = this.state.activeIndex + 1 < this.props.outputFormats.length ? this.state.activeIndex + 1 : 0

        this.setState({ activeIndex })
    }

    getRandom() {
        const randomNumber = Math.floor(Math.random() * 256);
        return randomNumber;
    };
    getRandomColor() {
        return `rgb(${this.getRandom()},${this.getRandom()},${this.getRandom()})`;

    };
    colors() {
        this.setState({ color: this.getRandomColor() })
    }

    init() {
        this.clickFormatDate()
        this.colors()
    }

    render() {
        const slideDataJsx = this.renderFormatDate();
        const fons = this.state.color
        return (
            <div style={{ background: fons }} className={styles.content} onClick={() => this.init()} >
                <div className={styles.title}>{slideDataJsx}</div>
            </div>
        )
    }

}