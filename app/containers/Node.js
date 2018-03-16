import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Main from '../components/Main'
import * as actions from '../actions'

const Node = ({todos, actions}) => (
      <Main todos={todos} actions={actions} />
)

Node.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Node)