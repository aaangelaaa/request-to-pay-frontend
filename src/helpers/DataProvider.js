import React from "react";
import { Spinner } from "react-bootstrap";
import * as auth from "./BackendAuth";

const DefaultPlaceholder = () => (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      error: null,
      placeholder: props.placeholder || DefaultPlaceholder
    };
  }

  componentDidMount() {
    const { href, onError = auth.DEFAULT_HANDLER } = this.props;
    auth
      .get(href, onError)
      .then(data =>
        this.setState({
          data,
          loaded: true
        })
      )
      .catch(error => {
        onError(error);
        this.setState({
          error
        });
      });
  }

  render() {
    const { children } = this.props;
    const { data, loaded, error, placeholder } = this.state;

    return loaded ? children({ data, error }) : placeholder;
  }
}

export const withData = href => ({children, ...props}) => (
  <DataProvider href={href}>
      {data => children({data, ...props})}
  </DataProvider>
)