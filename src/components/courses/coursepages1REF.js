import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  //no need constructor simply define with redux
  //constructor(props) {
  // super(props);
  //this.state = {
  state = {
    course: {
      title: ""
    }
  };
  //  recommended way to bind the method in to state in this constructor
  //this.handleChange = this.handleChange.bind(this);
  //}

  /* without arrow function
  handleChange(event) {
    // ...this.state.course copied state bc immutable then set title value and return ,this.state here we can set the new returned state by the ... spred operator
    const course = {
      ...this.state.course,
      title: event.target.value
    };
    this.setState({
      course
    });
  }*/
  // recommended safely using js Arrow function for bind
  handleChange = event => {
    // ...this.state.course copied state bc immutable then set title value and return ,this.state here we can set the new returned state by the ... spred operator
    const course = {
      ...this.state.course,
      title: event.target.value
    };
    this.setState({
      course
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          // bind the handle change mwthod with instance
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div Key={course.title}> {course.title}</div>
        ))}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    //manual mapDispatchToProps
    //createCourse: course => dispatch(courseActions.createCourse(course))
    //bindActionCreators mapDispatchToProps
    actions: bindActionCreators(courseActions, dispatch)
    // object mapDispatchToProps
    // createcourse:courseActions.createCourse
  };
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
