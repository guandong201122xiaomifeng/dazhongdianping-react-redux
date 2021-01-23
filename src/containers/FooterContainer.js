import { connect } from 'react-redux'
import { setFilter } from '../actions'
import { getFilter } from '../selectors'

import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
    filter: getFilter(state)
})

const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => {
        dispatch(setFilter(filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
