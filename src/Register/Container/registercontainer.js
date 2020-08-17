import { connect } from 'react-redux';

import Register from './../Component/registercomponent';
import { apiRequestRegister } from './../Action/registeraction';
import { loginRequest } from './../Action/loginaction';

const mapStateToProps = (state) => ({ signin: state });

const mapDispatchToProps = { apiRequestRegister, loginRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Register);