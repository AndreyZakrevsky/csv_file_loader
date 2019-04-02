import {connect} from 'react-redux';
import * as workersActions from '../actions/workers';
import Page from '../components/page/Page';
import {bindActionCreators} from 'redux';

const mapStateToProps = ({ workers })=>({
    workers   
});

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(workersActions ,dispatch)
});

export default connect(mapStateToProps ,mapDispatchToProps)(Page);