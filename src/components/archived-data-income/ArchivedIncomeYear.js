import React from 'react'
import ArchivedIncomeMonth from './ArchivedIncomeMonth'
const uuidv4 = require('uuid/v4')

export default class ArchivedIncomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active2019: false,
            active2020: false,
            active2021: false,
            active2022: false,
            active2023: false,
            active2024: false,
            active2025: false,
            active2026: false,
            active2027: false,
            active2028: false,
            active2029: false,
            active2030: false,
            active2031: false,
            active2032: false,
            active2033: false,
            active2034: false
        }

        this.onClick = this.onClick.bind(this)
        this.defaultState = this.defaultState.bind(this)
    }

    defaultState() {
        return (this.setState({active2019: false, active2020: false, active2021: false, active2022: false, active2023: false, active2024: false, active2025: false,
                            active2026: false, active2027: false, active2028: false, active2029: false, active2030: false, active2031: false, active2032: false,
                            active2033: false, active2034: false}))
    }
    onClick(e) {
        this.defaultState()
        const yearValue = e.target.innerHTML
        switch (yearValue) {
            case '2019':
                return this.setState({active2019: !this.state.active2019})
            case '2020':
                return this.setState({active2020: !this.state.active2020})
            case '2021':
                return this.setState({active2021: !this.state.active2021})
            case '2022':
                return this.setState({active2022: !this.state.active2022})
            case '2023':
                return this.setState({active2023: !this.state.active2023})
            case '2024':
                return this.setState({active2024: !this.state.active2024})
            case '2025':
                return this.setState({active2025: !this.state.active2025})
            case '2026':
                return this.setState({active2026: !this.state.active2026})
            case '2027':
                return this.setState({active2027: !this.state.active2027})
            case '2028':
                return this.setState({active2028: !this.state.active2028})
            case '2029':
                return this.setState({active2029: !this.state.active2029})
            case '2030':
                return this.setState({active2030: !this.state.active2030})
            case '2031':
                return this.setState({active2031: !this.state.active2031})
            case '2032':
                return this.setState({active2032: !this.state.active2032})
            case '2033':
                return this.setState({active2033: !this.state.active2033})
            case '2034':
                return this.setState({active2034: !this.state.active2034})
        }
    }

    render() {
        const propsData = this.props.props
       
        return (
            <div>
                <h3>Income</h3>
                {!propsData[2019] ? null : <button onClick={this.onClick} className="archive-button--year">2019</button>}
                {!propsData[2020] ? null : <button onClick={this.onClick} className="archive-button--year">2020</button>}
                {!propsData[2021] ? null : <button onClick={this.onClick} className="archive-button--year">2021</button>}
                {!propsData[2022] ? null : <button onClick={this.onClick} className="archive-button--year">2022</button>}
                {!propsData[2023] ? null : <button onClick={this.onClick} className="archive-button--year">2023</button>}
                {!propsData[2024] ? null : <button onClick={this.onClick} className="archive-button--year">2024</button>}
                {!propsData[2025] ? null : <button onClick={this.onClick} className="archive-button--year">2025</button>}
                {!propsData[2026] ? null : <button onClick={this.onClick} className="archive-button--year">2026</button>}
                {!propsData[2027] ? null : <button onClick={this.onClick} className="archive-button--year">2027</button>}
                {!propsData[2028] ? null : <button onClick={this.onClick} className="archive-button--year">2028</button>}
                {!propsData[2029] ? null : <button onClick={this.onClick} className="archive-button--year">2029</button>}
                {!propsData[2030] ? null : <button onClick={this.onClick} className="archive-button--year">2030</button>}
                {!propsData[2031] ? null : <button onClick={this.onClick} className="archive-button--year">2031</button>}
                {!propsData[2032] ? null : <button onClick={this.onClick} className="archive-button--year">2032</button>}
                {!propsData[2033] ? null : <button onClick={this.onClick} className="archive-button--year">2033</button>}
                {!propsData[2034] ? null : <button onClick={this.onClick} className="archive-button--year">2034</button>}

                <div className="archive-income-month-container">
                    {!this.state.active2019 ? null : <ArchivedIncomeMonth props={propsData[2019]} />}
                    {!this.state.active2020 ? null : <ArchivedIncomeMonth props={propsData[2020]} />}
                    {!this.state.active2021 ? null : <ArchivedIncomeMonth props={propsData[2021]} />}
                    {!this.state.active2022 ? null : <ArchivedIncomeMonth props={propsData[2022]} />}
                    {!this.state.active2023 ? null : <ArchivedIncomeMonth props={propsData[2023]} />}
                    {!this.state.active2024 ? null : <ArchivedIncomeMonth props={propsData[2024]} />}
                    {!this.state.active2025 ? null : <ArchivedIncomeMonth props={propsData[2025]} />}
                    {!this.state.active2026 ? null : <ArchivedIncomeMonth props={propsData[2026]} />}
                    {!this.state.active2027 ? null : <ArchivedIncomeMonth props={propsData[2027]} />}
                    {!this.state.active2028 ? null : <ArchivedIncomeMonth props={propsData[2028]} />}
                    {!this.state.active2029 ? null : <ArchivedIncomeMonth props={propsData[2029]} />}
                    {!this.state.active2030 ? null : <ArchivedIncomeMonth props={propsData[2030]} />}
                    {!this.state.active2031 ? null : <ArchivedIncomeMonth props={propsData[2031]} />}
                    {!this.state.active2032 ? null : <ArchivedIncomeMonth props={propsData[2032]} />}
                    {!this.state.active2033 ? null : <ArchivedIncomeMonth props={propsData[2033]} />}
                    {!this.state.active2034 ? null : <ArchivedIncomeMonth props={propsData[2034]} />}
                </div>
            </div>
        )
    }
}