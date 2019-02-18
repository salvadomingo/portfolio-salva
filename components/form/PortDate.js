import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import { FormGroup, Label } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {

  constructor(props) {
    super(props);

    const dateValue = props.initialDate ? new Date(props.initialDate) : new Date();

    this.state = {
      dateValue, //: new Date() //moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({isBrowserLoaded: true})
  }

  handleChange(date) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    this.setState({
      dateValue: date
    });

    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  }

  render() {
    const { isBrowserLoaded } = this.state;
    const { label, field, form: { touched, errors} } = this.props;

    return (
      <FormGroup>
      <Label>{label}</Label>
      <React.Fragment>
        { isBrowserLoaded &&
          <div className="input-group">
            <DatePicker
              selected={this.state.dateValue}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate = {new Date()}
              dropdownMode="select"
            />
            { touched[field.name] &&
             errors[field.name] && <div className="error">{errors[field.name]}</div>}
          </div>
        }
      </React.Fragment>

      </FormGroup>
    );
  }
}
