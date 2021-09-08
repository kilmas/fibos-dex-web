import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from 'Web/deals/deals.action'
import DealsTable from './deals-table.component'

const mapStateToProps = state => {
  const {
    pairId,

    dealsTableSpinning,
    dealsTableRequesting,

    dealsTableData,

    dealsDataTotal,
    dealsDataPage,
    dealsDataPageSize,
  } = state.deals
  const { ironmanData } = state.home

  /* *
    Reminder:
      Be Careful with every props you mapped to comp
  * */

  return {
    ironmanData,

    pairId,

    dealsTableSpinning,
    dealsTableRequesting,

    dealsTableData,

    dealsDataTotal,
    dealsDataPage,
    dealsDataPageSize,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DealsTable)