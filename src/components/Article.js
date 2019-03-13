import React, { Component, PureComponent } from 'react'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
         console.log('-----', 'mounting')    
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate() {
        console.log('-----', 'will update')
    }

    render() {
        const { article } = this.props
        const style = {width: '50%'}
        const body = this.state.isOpen && <section className="card-text"> {article.data}</section>

        return (
            <div className="card mx-auto" style = { style }>
                <div className="card-header">
                    <h2 className="card-text">
                        {article.data}
                        <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}> {this.state.isOpen ? 'close' : 'open' } </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted"> 
                        state: {article.state} 
                    </h6>
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
export default Article