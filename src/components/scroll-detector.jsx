import React from "react"

export default class ScrollDetector extends React.Component {
    constructor(props) {
        super(props)
        this.state = { scrolled: false }
    }

    onScroll = () => {
        if (window.scrollY > 0 && !this.state.scrolled)
            this.setState({ scrolled: true })
        else if (window.scrollY === 0 && this.state.scrolled)
            this.setState({ scrolled: false })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
        this.setState({ scrolled: window.scrollY > 0 })
    }

    componentWillUnmount() { window.removeEventListener("scroll", this.onScroll) }
    render() { return this.props.render(this.state.scrolled) }
}
