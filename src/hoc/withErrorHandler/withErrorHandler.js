import React, { Component } from "react";

import Modal from "../../Components/UI/Modal/Modal";
import Auxi from "../Auxi";

// Global error Handler
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    // componentDidMount renders once all children are rendered, if theres an error
    // we wont get the appropriate error handling, the fix is to use componentWillMount
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req
      });
      axios.interceptors.response.use(res=> res, error => {
        this.setState({ error: error });
      });
    }


//     componentWillMount() {
//         this.reqInterceptor = axios.interceptors.request.use(req => {
//           this.setState({ error: null });
//           return req
//         });
//         this.resInterceptor = axios.interceptors.response.use(res=> res, error => {
//           this.setState({ error: error });
//         });
//       }

//     componentWillUnmount (){
// axios.interceptors.request.eject(this.reqInterceptor);
// axios.interceptors.response.eject(this.resInterceptor);
//     }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxi>
          <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxi>
      );
    }
  };
};

export default withErrorHandler;
