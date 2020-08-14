import { connect } from 'react-redux';

import List from './../Component/postcomponent';
import { apiRequestPost } from './../Action/postaction';

const mapStateToProps = (state) => ({ list: state.postState.list });

const mapDispatchToProps = { apiRequestPost };

export default connect(mapStateToProps, mapDispatchToProps)(List);