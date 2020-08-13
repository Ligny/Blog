import { connect } from 'react-redux';

import Comment from "./../Component/CommentComponent";
import { apiRequestComment } from './../Action/CommentAction';

const mapStateToProps = (state) => ({ comment: state.commentState.comment });

const mapDispatchToProps = { apiRequestComment };

export default connect(mapStateToProps, mapDispatchToProps)(Comment);