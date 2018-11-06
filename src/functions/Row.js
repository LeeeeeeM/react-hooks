import React from 'react'

export default function Row (props) {
    return (
        <section>
            <header>{ props.label }</header>
            { props.children }
        </section>
    )
}