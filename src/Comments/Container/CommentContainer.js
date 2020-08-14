import { connect } from 'react-redux';

import Comment from './../Component/commentcomponent';
import { apiRequestComment } from './../Action/commentaction';

const mapStateToProps = (state) => ({ comment: state.commentState.comment });

const mapDispatchToProps = { apiRequestComment };

export default connect(mapStateToProps, mapDispatchToProps)(Comment);