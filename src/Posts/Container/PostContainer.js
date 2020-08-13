import { connect } from 'react-redux';

import List from "./../Component/PostComponent";
import { apiRequestPost } from './../Action/PostAction';

const mapStateToProps = (state) => ({ list: state.postState.list });

const mapDispatchToProps = { apiRequestPost };

export default connect(mapStateToProps, mapDispatchToProps)(List);