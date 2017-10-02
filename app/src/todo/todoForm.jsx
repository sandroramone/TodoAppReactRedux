import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search(' ')
    }

    keyHandler(event) {
        const { add, clear, search, description } = this.props
        if (event.key == 'Enter') {
            event.shiftKey ? search(description) : add(description)
        } else if (event.key == 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols="10">
                    <input id="description"
                    className="form-control"
                    onChange={this.props.changeDescription}
                    value={this.props.description}
                    onKeyUp={this.keyHandler}
                    placeholder="Adcionar uma tarefa" />
                </Grid>
                
                <Grid cols="2">
                    <IconButton style='primary' icon='plus' onClick={() => add(description)} />
                    <IconButton style='info' icon='search' onClick={search} />
                    <IconButton style='default' icon='remove' onClick={this.props.clear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)