import { connect } from 'react-redux'
import Actions from 'js/actions'
import Components from 'components'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    postSession: (data) => dispatch(Actions.Session.post(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.session.Session)
