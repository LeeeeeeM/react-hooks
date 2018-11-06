import React from 'react'

export default class Row extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { label, children } = this.props
        return (
            <section>
                <header>{label}</header>
                {children}
            </section>
        )
    }
}