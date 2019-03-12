import React from 'react'
import ArchivedExpensePage from './ArchivedExpensePage'

export default class ArchivedExpenseMonth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeJanuary: false,
            activeFebruary: false,
            activeMarch: false,
            activeApril: false,
            activeMay: false,
            activeJune: false,
            activeJuly: false,
            activeAugust: false,
            activeSeptember: false,
            activeOctober: false,
            activeNovember: false,
            activeDecember: false
        }

       this.onClick = this.onClick.bind(this)
        this.defaultState = this.defaultState.bind(this)
    }
    defaultState() {
        return (this.setState({activeJanuary: false, activeFebruary: false, activeMarch: false, activeApril: false, activeMay: false, activeJune: false,
                                activeJuly: false, activeAugust: false, activeSeptember: false, activeOctober: false, activeNovember: false, activeDecember: false}))
    
    }
    onClick(e) {
        this.defaultState()
        const monthValue = e.target.innerHTML
        switch (monthValue) {
            case 'JAN':
                return this.setState({activeJanuary: !this.state.activeJanuary})
            case 'FEB':
                return this.setState({activeFebruary: !this.state.activeFebruary})
            case 'MAR':
                return this.setState({activeMarch: !this.state.activeMarch})
            case 'APR':
                return this.setState({activeApril: !this.state.activeApril})
            case 'MA':
                return this.setState({activeMay: !this.state.activeMay})
            case 'JUN':
                return this.setState({activeJune: !this.state.activeJune})
            case 'JUL':
                return this.setState({activeJuly: !this.state.activeJuly})
            case 'AUG':
                return this.setState({activeAugust: !this.state.activeAugust})
            case 'SEP':
                return this.setState({activeSeptember: !this.state.activeSeptember})
            case 'OCT':
                return this.setState({activeOctober: !this.state.activeOctober})
            case 'NOV':
                return this.setState({activeNovember: !this.state.activeNovember})
            case 'DEC':
                return this.setState({activeDecember: !this.state.activeDecember})
        } 
    }

    render() {
        const propsData = this.props.props

        return (
            <div>
                {!propsData.January ? null : <button onClick={this.onClick} className="archive-button--month">JAN</button>}
                {!propsData.February ? null : <button onClick={this.onClick} className="archive-button--month">FEB</button>}
                {!propsData.March ? null : <button onClick={this.onClick} className="archive-button--month">MAR</button>}
                {!propsData.April ? null : <button onClick={this.onClick} className="archive-button--month">APR</button>}
                {!propsData.May ? null : <button onClick={this.onClick} className="archive-button--month">MA</button>}
                {!propsData.June ? null : <button onClick={this.onClick} className="archive-button--month">JUN</button>}
                {!propsData.July ? null : <button onClick={this.onClick} className="archive-button--month">JUL</button>}
                {!propsData.August ? null : <button onClick={this.onClick} className="archive-button--month">AUG</button>}
                {!propsData.September ? null : <button onClick={this.onClick} className="archive-button--month">SEP</button>}
                {!propsData.October ? null : <button onClick={this.onClick} className="archive-button--month">OCT</button>}
                {!propsData.November ? null : <button onClick={this.onClick} className="archive-button--month">NOV</button>}
                {!propsData.December ? null : <button onClick={this.onClick} className="archive-button--month">DEC</button>}

                {!this.state.activeJanuary ? null : <ArchivedExpensePage props={propsData.January} />}
                {!this.state.activeFebruary ? null : <ArchivedExpensePage props={propsData.February} />}
                {!this.state.activeMarch ? null : <ArchivedExpensePage props={propsData.March} />}
                {!this.state.activeApril ? null : <ArchivedExpensePage props={propsData.April} />}
                {!this.state.activeMay ? null : <ArchivedExpensePage props={propsData.May} />}
                {!this.state.activeJune ? null : <ArchivedExpensePage props={propsData.June} />}
                {!this.state.activeJuly ? null : <ArchivedExpensePage props={propsData.July} />}
                {!this.state.activeAugust ? null : <ArchivedExpensePage props={propsData.August} />}
                {!this.state.activeSeptember ? null : <ArchivedExpensePage props={propsData.September} />}
                {!this.state.activeOctober ? null : <ArchivedExpensePage props={propsData.October} />}
                {!this.state.activeNovember ? null : <ArchivedExpensePage props={propsData.November} />}
                {!this.state.activeDecember ? null : <ArchivedExpensePage props={propsData.December} />}
            </div>
        )
    }
}