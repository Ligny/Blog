import { connect } from 'react-redux';

import List from './../Component/postcomponent';
import { apiRequestPost } from './../Action/postaction';
import { logOut } from "./../../Register/Action/loginaction";

const mapStateToProps = (state) => ({ elem: state });

const mapDispatchToProps = { apiRequestPost, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(List);